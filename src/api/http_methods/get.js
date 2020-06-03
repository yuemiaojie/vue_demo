import axios from 'axios'
import '@/api'

const GET = function (url, params, config = {}) {
  const _config = { url, params, ...config }
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

export default GET
