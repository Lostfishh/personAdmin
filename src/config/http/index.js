import axios from 'axios'
import { Message } from 'iview'
// 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode === 2000) {
      return response
    } else {
      // 统一报错
      Message.error(response.data.msg)
    }
  }
)

export default axios
