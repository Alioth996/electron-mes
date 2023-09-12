// index.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'

type Result<T> = {
  code: number
  message: string
  result: T
}

// 导出Request类，可以用来自定义传递配置来创建实例
export class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: 'http://127.0.0.1:3000/api', timeout: 3000 }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config) => {
        // 请求拦截里面加token
        const token = localStorage.getItem('token') as string
        if (token) {
          config.headers!.Authorization = token
        }

        return config
      },
      (err: AxiosError) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 直接返回res，当然你也可以只返回res.data
        // 自定义code也可以在这里处理
        return res
      },
      (err: any) => {
        // 处理http常见错误
        let message = ''
        switch (err.response.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${err.response.status})!`
        }
        ElMessage({
          showClose: true,
          message: `${message}，请检查网络或联系管理员！`,
          type: 'error'
        })
        // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
        return Promise.reject(err.response)
      }
    )
  }

  // 通用请求方法
  public request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
    return this.instance.request(config)
  }

  // public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
  //   return this.instance.get(url, config)
  // }

  // public post<T = any>(
  //   url: string,
  //   data?: any,
  //   config?: AxiosRequestConfig
  // ): Promise<AxiosResponse<Result<T>>> {
  //   return this.instance.post(url, data, config)
  // }

  // public put<T = any>(
  //   url: string,
  //   data?: any,
  //   config?: AxiosRequestConfig
  // ): Promise<AxiosResponse<Result<T>>> {
  //   return this.instance.put(url, data, config)
  // }

  // public delete<T = any>(
  //   url: string,
  //   config?: AxiosRequestConfig
  // ): Promise<AxiosResponse<Result<T>>> {
  //   return this.instance.delete(url, config)
  // }
}

// 默认导出Request实例
export default new Request({})
