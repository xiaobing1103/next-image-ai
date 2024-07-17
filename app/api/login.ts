// 获取微信登录二维码
import { ResponseLoginData, UserInfo } from "../types/user.types";
import request from "./request";
import { CommonRequestType } from "./type";

interface getWxQrcodeReq {
  qrcode_id: string;
  url: string;
}
export function getWxQrcode() {
  return request.get<CommonRequestType<getWxQrcodeReq>>(
    "/api/v1/user/getWxQrcode",
    { cacheTime: 0 }
  );
}

export function queryWxQrcode(qrcode_id: string) {
  return request.get("/api/v1/user/queryWxQrcode", {
    params: { qrcode_id },
    cacheTime: 0,
  });
}
// 获取用户信息
export function getUserInfo() {
  return request.get<UserInfo>("/api/v1/user/info");
}
// 微信二维码登录
export function loginWxQrcode(qrcode_id: string, invite_code?: string) {
  return request.post("/api/v1/user/loginWxQrcode", {
    params: { qrcode_id, invite_code },
  });
}
//账号密码登录 / 邮箱登录
export function postLogin(user: string, pass: string) {
  return request.post<ResponseLoginData>("/api/v1/user/login", {
    params: { user, pass },
  });
}
//手机短信登录
export function postPhoneLogin(phone: string, code: string) {
  return request.post<ResponseLoginData>("/api/v1/user/phoneLogin", {
    params: {
      phone,
      code,
    },
  });
}

//账号注册
export function postRegister(user: string, pass: string, code?: string) {
  return request.post<ResponseLoginData>("/api/v1/user/register", {
    params: {
      user,
      pass,
      code,
    },
  });
}

// 发送手机验证码
export function sendSmsCode(phone: number) {
  return request.post("/api/v1/user/sendSmsCode", {
    cacheTime: 0,
    params: { phone },
  });
}
