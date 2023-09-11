import axios, { AxiosResponse, AxiosError } from 'axios'
import { Names } from '../types/env-name' //枚举
import { errorCodeType } from '../types/error-code' //请求错误代码

import { ElMessage } from 'element-plus'

const service = axios.create({
  //配置的跨域标识
  baseURL: 'http://127.0.0.1:3000/api',
  //请求头
  headers: {},
  //超时
  timeout: 1000 * Names.TIME
})
//请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error: AxiosError) => {
    console.log(error, 'e')
  }
)
//响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    const code = res.data['code'] || 200
    if (code == 200) {
      return Promise.resolve(res.data)
    } else {
      const msg = errorCodeType(code)
      ElMessage.error(msg)
      return Promise.reject(res.data)
    }
    // return config;
  },
  (error: AxiosError) => {
    console.log(error)
  }
)
export default service
