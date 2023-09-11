export const errorCodeType = (code: string | number): string => {
  let errMessage: string = '未知错误'
  let arr: any = [
    [400, '错误的请求'],
    [401, '未授权，请重新登录'],
    [403, '拒绝访问'],
    [404, '请求错误,未找到该资源'],
    [405, '请求方法未允许'],
    [408, '请求超时'],
    [500, '服务器端出错'],
    [501, '网络未实现'],
    [502, '网络错误'],
    [503, '服务不可用'],
    [504, '网络超时'],
    [50, 'http版本不支持该请求']
  ]
  let map = new Map(arr)
  errMessage = (map.get(code) as string) ?? '未知错误'
  return errMessage
}
