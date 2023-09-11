import AxiosInstance from '../tools/request'

export const loadQrcode = () => {
  return AxiosInstance.get('/qr_code/generate')
}
