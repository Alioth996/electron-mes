var express = require('express')
var router = express.Router()

const { randomUUID } = require('crypto')
const qrcode = require('qrcode')

router.get('/test', function (req, res, next) {
  res.json({
    code: 200,
    msg: 'ok'
  })
})

// todo 生成二维码
router.get('/qr_code/generate', async (req, res) => {
  const uuid = randomUUID()
  const dataUrl = await qrcode.toDataURL(uuid)
  return res.json({
    code: 200,
    message: 'success',
    result: {
      qrcode_id: uuid,
      qrcode_img: dataUrl
    }
  })
})

// todo 验证二维码
router.post('/qr_code/check', (req, res) => {})

//
router.post('/qr_code/scan', (req, res) => {})
router.post('/qr_code/cancel', (req, res) => {})
router.post('/qr_code/confirm', (req, res) => {})

module.exports = router
