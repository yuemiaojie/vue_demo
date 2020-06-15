<template>
  <div id="tinymce-wrap">
    <editor
      v-model="tinymceHtml"
      :init="init"
      api-key="2ctgucap6d0w5y89jgup54r5mbdun849xi351gs86alz2754"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import OSS from 'ali-oss'
import utils from '@/utils'

export default {
  name: 'Tinymce',
  components: { Editor },
  data() {
    return {
      tinymceHtml: '',
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin: 'oxide',
        statusbar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount emoticons'
        ],
        menubar: 'edit insert view format table tools',
        toolbar:
          'formatselect | fontcolor forecolor bold italic backcolor underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | emoticons',
        branding: false,
        auto_focus: true,
        contextmenu_never_use_native: true,
        elementpath: false,
        draggable_modal: true,
        'min_height': 500,
        placeholder: '请输入文案...',
        async images_upload_handler(blobInfo, succFun, failFun) {
          const file = blobInfo.blob()
          // 配置
          const client = new OSS(utils.OSSCli())
          const fileStorageName = utils.getFileName(file.name)
          const relativePath = 'img/'
          const fileStorageSrc = relativePath + fileStorageName
          const [err, data] = await client.put(fileStorageSrc, file).then(data => [null, data]).catch(err => [err, null])
          if (data && data.res.status === 200) {
            var imgData = {
              src: data.res.requestUrls[0],
              alt: file.name,
              id: utils.randomString('id:', 12),
              detailsBtnShowStatus: false
            }
            succFun(imgData.src)
          } else {
            failFun('HTTP Error: ' + err)
          }
        },
        file_picker_callback: function (callback, value, meta) {
          // 文件分类
          var filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4'
          // 为不同插件指定文件类型及后端地址
          switch (meta.filetype) {
            case 'image':
              filetype = '.jpg, .jpeg, .png, .gif'
              break
            case 'media':
              filetype = '.mp3, .mp4'
              break
            case 'file':
            default:
          }
          // 模拟出一个input用于添加本地文件
          var input = document.createElement('input')
          input.setAttribute('type', 'file')
          input.setAttribute('accept', filetype)
          input.click()
          input.onchange = async function () {
            var file = this.files[0]
            // 配置
            const client = new OSS(utils.OSSCli())
            const fileStorageName = utils.getFileName(file.name)
            const relativePath = 'img/'
            const fileStorageSrc = relativePath + fileStorageName
            const data = await client.put(fileStorageSrc, file)
            if (data && data.res.status === 200) {
              var imgData = {
                src: data.res.requestUrls[0],
                alt: file.name,
                id: utils.randomString('id:', 12),
                detailsBtnShowStatus: false
              }
              callback(imgData.src)
            }
          }
        },
        init_instance_callback: function (editor) {
          console.log('编辑器已初始化完成')
        }
      }
    }
  },
  mounted() {
  }
}
</script>
