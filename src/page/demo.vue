<template>
  <div id="audio" ref="audio">
    <audio :src="src" controls />
  </div>
</template>

<script type="text/javascript">
import AudioSculptor from 'audio-sculptor'
export default {
  name: 'Demo',
  components: {},
  props: '',
  data() {
    return {
      src: ''
    }
  },
  created() {
  },
  async mounted() {
    const audioSculptor = new AudioSculptor()
    await audioSculptor.open({
      workerPath: '../../static/ffmpeg.js/ffmpeg-worker-mp4.js',
      MediaType: 'mp3'
    })
    const audio = new Audio('../../static/yiyue.mp3')
    const blob = await audioSculptor.toBlob(audio)
    const { blob: clippedBlob, logs } = await audioSculptor.clip(blob, 3, 7)
    const clippedAudio = await audioSculptor.toAudio(clippedBlob)
    console.log(clippedAudio.src)
    this.src = clippedAudio.src
    console.log(blob, clippedBlob, logs, clippedAudio)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
