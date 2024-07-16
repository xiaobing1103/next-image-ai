import React, { use, useEffect } from 'react'

export default function QrcodeLogin() {
  useEffect(() => {
    getWxQrcode()
  }, [])

  return (
    <div className=" flex align-middle justify-center">
      <header>微信扫码一键登录</header>
      <main></main>
    </div>
  )
}
