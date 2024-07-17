import { toast } from "react-toastify";

import userStore from "../user/slice";

import { RequestLoginParams } from "@/app/types/user.types";
import {
  getUserInfo,
  loginWxQrcode,
  postLogin,
  postPhoneLogin,
  postRegister,
} from "@/app/api/login";


// 登录
export async function fetchLogin(params: RequestLoginParams) {
  let response: any;
  if (params.type === "login") {
    //账号登录
    response = await postLogin(
      params.account as string,
      params.password as string
    );
    if (response.code === 200) {
      console.log("fetchLogin", response);
      userStore
        .getState()
        .login({ user_info: response.data, token: response.data.token });
    }
  } else if (params.type === "qrcode") {
    //二维码登录
    response = await loginWxQrcode(
      params.qrcode_id as string,
      params.invite_code
    );
    if (response.code === 200) {
      console.log("fetchLogin", response);
      userStore
        .getState()
        .login({ user_info: response.data, token: response.data.token });
    }
  } else if (params.type === "msgCode") {
    //短信登录
    response = await postPhoneLogin(
      params.account as string,
      params.code as string
    );
    if (response.code === 200) {
      console.log("fetchLogin", response);
      userStore
        .getState()
        .login({ user_info: response.data, token: response.data.token });
    }
  } else {
    //账号注册
    response = await postRegister(
      params.account as string,
      params.password as string,
      params.invite_code as string
    );
    if (response.code === 200) {
      return fetchLogin({
        account: params.account,
        password: params.password,
        type: "login",
      });
    }
  }
  return response;
}

// 获取用户信息
export async function fetchUserInfo() {
  const response: any = await getUserInfo();
  if (response?.code === 200) {
    userStore.getState().login({
      token: userStore.getState().token,
      user_info: response.data,
    });
  } else {
    toast.error(response?.msg || "获取用户信息失败");
    userStore.getState().logout();
  }
  return response;
}

export default {
  fetchUserInfo,
  fetchLogin,
};
