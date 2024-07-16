// 获取微信登录二维码
export function getWxQrcode() {
  return request.get('/api/v1/user/getWxQrcode')
}
