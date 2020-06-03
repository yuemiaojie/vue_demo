import axios from 'axios'
import '@/api'

const POST = function (url, para, config = {}) {
  const _config = { ...{ url, method: 'post', data: para }, ...config }
  return new Promise((resolve, reject) => {
    axios(_config)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default POST
