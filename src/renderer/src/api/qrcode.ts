import API from '../tools/request'

type QrcodeType = {
  qrcode_id: string
  qrcode_img: string
}

export const loadQrcode = () => {
  return API.request<QrcodeType>({
    url: '/qr_code/generate',
    method: 'get'
  })
}
