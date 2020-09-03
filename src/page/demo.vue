<template>
  <div id="audio" ref="audio">
    <input type="file" @change="fileChange">
  </div>
</template>

<script type="text/javascript">
import OSS from 'ali-oss'
import utils from '@/utils'
import upload from '@components/Upload'
export default {
  name: 'Demo',
  components: { upload },
  props: '',
  data() {
    return {
      src: ''
    }
  },
  created() {
  },
  async mounted() {
  },
  methods: {
    fileChange(event) {
      const that = this
      var file = event.target.files[0];
      // 开始识别
      var reader = new FileReader();
      reader.onload = function (event) {
        var arrBuffer = event.target.result;
        // // arrBuffer就是包含音频数据的ArrayBuffer对象
        var audioCtx = new AudioContext();

        audioCtx.decodeAudioData(arrBuffer, function (audioBuffer) {
          // 现在已经做好了截取，我操作一遍 that.cut(audioBuffer, 30, 50) 30 与 50是截取的时间你可以试一下vue_demo项目
          const { cutAudioBuffer: newAudioBuffer } = that.cut(audioBuffer, 30, 50)
          // newAudioBuffer就是全新的复制的3秒长度的AudioBuffer对象
          // 创建AudioBufferSourceNode对象
          const { numberOfChannels, sampleRate } = audioBuffer;
          const lengthInSamples = (50 - 30) * sampleRate;
          var blob = that.bufferToWave(newAudioBuffer, lengthInSamples)
          console.log('blob', blob);
          let files = new window.File([blob], file.name, { type: file.type })
          console.log('files', files)
          const client = new OSS(utils.OSSCli())
          const fileStorageName = utils.getFileName(files.name)
          const relativePath = 'img/'
          const fileStorageSrc = relativePath + fileStorageName
          client.put(fileStorageSrc, files).then(data => {
            // 返回
            if (data.res.status === 200) {
              var imgData = {
                src: data.res.requestUrls[0],
                alt: file.name,
                id: utils.randomString('id:', 12),
                detailsBtnShowStatus: false
              }
              console.log('上传成功 //----// ', imgData)
            } else {
              alert(file.name + '文件上传失败')
            }
          })
          var source = audioCtx.createBufferSource();
          // 设置AudioBufferSourceNode对象的buffer为复制的3秒AudioBuffer对象
          source.buffer = newAudioBuffer;
          // 这一句是必须的，表示结束，没有这一句没法播放，没有声音
          // 这里直接结束，实际上可以对结束做一些特效处理
          source.connect(audioCtx.destination);
          // 资源开始播放
          source.start();
        });
      }
      reader.readAsArrayBuffer(file);
    },
    cut(originalAudioBuffer, start, end) {
      const { numberOfChannels, sampleRate } = originalAudioBuffer;
      const lengthInSamples = (end - start) * sampleRate;
      // offlineAudioContext相对AudioContext更加节省资源
      const offlineAudioContext = new OfflineAudioContext(numberOfChannels, numberOfChannels, sampleRate);
      // 存放截取的数据
      const cutAudioBuffer = offlineAudioContext.createBuffer(
        numberOfChannels,
        lengthInSamples,
        sampleRate
      );
      // 存放截取后的数据
      // 将截取数据和截取后的数据放入对应的缓存中
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const cutChannelData = cutAudioBuffer.getChannelData(channel);
        const originalChannelData = originalAudioBuffer.getChannelData(channel);
        const beforeData = originalChannelData.subarray(0,
          start * sampleRate - 1);
        const midData = originalChannelData.subarray(start * sampleRate,
          end * sampleRate - 1);
        const afterData = originalChannelData.subarray(
          end * sampleRate
        );
        cutChannelData.set(midData);
      }
      return {
        cutAudioBuffer
      };
    },
    bufferToWave(abuffer, len) {
      var numOfChan = abuffer.numberOfChannels,
        length = len * numOfChan * 2 + 44,
        buffer = new ArrayBuffer(length),
        view = new DataView(buffer),
        channels = [], i, sample,
        offset = 0,
        pos = 0;

      // write WAVE header
      // "RIFF"
      setUint32(0x46464952);
      // file length - 8
      setUint32(length - 8);
      // "WAVE"
      setUint32(0x45564157);
      // "fmt " chunk
      setUint32(0x20746d66);
      // length = 16
      setUint32(16);
      // PCM (uncompressed)
      setUint16(1);
      setUint16(numOfChan);
      setUint32(abuffer.sampleRate);
      // avg. bytes/sec
      setUint32(abuffer.sampleRate * 2 * numOfChan);
      // block-align
      setUint16(numOfChan * 2);
      // 16-bit (hardcoded in this demo)
      setUint16(16);
      // "data" - chunk
      setUint32(0x61746164);
      // chunk length
      setUint32(length - pos - 4);

      // write interleaved data
      for (i = 0; i < abuffer.numberOfChannels; i++)
        channels.push(abuffer.getChannelData(i));

      while (pos < length) {
        // interleave channels
        for (i = 0; i < numOfChan; i++) {
          // clamp
          sample = Math.max(-1, Math.min(1, channels[i][offset]));
          // scale to 16-bit signed int
          sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
          // write 16-bit sample
          view.setInt16(pos, sample, true);
          pos += 2;
        }
        // next source sample
        offset++
      }

      // create Blob
      return new Blob([buffer], { type: "audio/wav" });

      function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
      }

      function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
