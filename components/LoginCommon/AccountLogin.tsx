"use client";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { MailIcon } from "../MailIcon";
import { LockIcon } from "../LockIcon";
import { RequestLoginParams } from "@/app/types/user.types";
import { toast } from "react-toastify";
import { userAsync } from "@/app/store/async";
import { userStore } from "@/app/store";
import { sendSmsCode } from "@/app/api/login";
import SliderCaptcha, { ActionType } from "rc-slider-captcha";

export default function Accountlogin({
  onClose,
  type,
}: {
  onClose: () => void;
  type: string;
}) {
  // 验证码计时60秒
  const { invite_codeToken } = userStore();
  const actionRef = useRef<ActionType>();
  const [isPassCode, setIsPassCode] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneViefyCode, setPhoneViefyCode] = useState("");
  const [veifytime, setVeifytime] = useState<number>(0);
  const [isShowPassCode, setIsShowPassCode] = useState(false);
  const [params, setParams] = useState<RequestLoginParams>({
    type: type || "login",
    invite_code: invite_codeToken || "",
    code: "",
  });
  useEffect(() => {
    let timer: any = null;
    if (timerActive && veifytime > 0) {
      timer = setTimeout(() => {
        setVeifytime(veifytime - 1);
      }, 1000);
    } else if (veifytime === 0) {
      setTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [veifytime, timerActive]);

  const onLogin = async () => {
    // 账号密码登录
    debugger;
    if (params.type == "login") {
      if (!params.account) {
        console.log(params);
        toast.info("请输入正确的用户名！");
        return;
      }
      if (!params.password) {
        toast.info("请输入正确的密码！");
        return;
      }
    }
    // 注册逻辑
    if (params.type == "register") {
      console.log(params);
      if (!params.account) {
        toast.info("请输入正确的用户名！");
        return;
      }
      if (!params.password) {
        toast.info("请输入正确的密码！");
        return;
      }
    }
    // 手机和短信验证码登录
    if (params.type == "msgCode") {
      if (!verifyPhoneFn(params.account || "")) {
        toast.info("请输入正确的手机号再提交！");
        return;
      }
      if (!verifyCodeFn(String(params.code))) {
        toast.info("请输入正确4-6位手机验证码再提交！");
        return;
      }
    }
    // props.setSpinning?.(true);
    return new Promise((resolve, reject) => {
      userAsync
        .fetchLogin(params)
        .then((response: any) => {
          if (response?.code === 200) {
            toast.success(params.type === "register" ? "注册成功" : "登录成功");
            resolve(true);
            onClose();
            // props.setSpinning?.(false);
          } else {
            reject(false);
            toast.error(response.msg);
            // props.setSpinning?.(false);
          }
        })
        .catch(() => {
          reject(false);
        });
    });
  };
  // 验证手机
  const verifyPhoneFn = (phoneNumber: string) => {
    const regu = /^1[3-9][0-9]{9}$/;
    return regu.test(phoneNumber);
  };
  // 验证密码逻辑
  const verifyCodeFn = (code: string) => {
    const regu = /^\d{4,6}$/;
    return regu.test(code);
  };

  // 发送验证码
  const sendCode = () => {
    if (!verifyPhoneFn(params.account || "")) {
      toast.info("请输入正确的手机号再提交！");
      return;
    }
    if (!isPassCode) {
      setIsShowPassCode(true);
      toast.info("请先拖动滑块验证！");
      return;
    }
    if (timerActive) {
      toast.info("请等待2分钟后再试！");
      return;
    }
  };

  const changeText = () => {
    if (params.type == "login") {
      setParams({ ...params, type: "msgCode" });
    }
    if (params.type == "msgCode") {
      setParams({ ...params, type: "login" });
    }
  };
  const sendVerifyCode = () => {
    sendSmsCode(Number(params.account))
      .then((res) => {
        if (res.code == 200) {
          toast.success("发送验证码成功！");
          // 启动倒计时
          setVeifytime(120);
          setTimerActive(true);
        } else {
          toast.error(res.msg);
        }
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  };

  return (
    <div>
      <Input
        className="mt-5 mb-5"
        endContent={
          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="用户名/邮箱/手机"
        placeholder="请输入你的用户名"
        value={params.account}
        variant="bordered"
        onChange={(e) => setParams({ ...params, account: e.target.value })}
      />
      {params.type !== "msgCode" && (
        <Input
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="密码"
          placeholder="请输入密码"
          type="password"
          value={params.password}
          variant="bordered"
          onChange={(e) => setParams({ ...params, password: e.target.value })}
        />
      )}

      {params.type == "msgCode" && (
        <div className=" flex ">
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="验证码"
            placeholder="请输入验证码"
            type="password"
            value={String(params.code)}
            variant="bordered"
            onChange={(e) => setParams({ ...params, code: e.target.value })}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onLogin();
              }
            }}
          />

          <Link
            className=" px-2 box-border  w-1/3 cursor-pointer"
            tabIndex={0}
            onPress={sendCode}
          >
            {timerActive ? `${veifytime}秒` : "获取验证码"}
          </Link>
        </div>
      )}

      {type === "login" && (
        <div>
          {params.type !== "login" ? (
            <>
              {isShowPassCode && (
                <div className=" w-full  my-3">
                  <SliderCaptcha
                    actionRef={actionRef}
                    bgSize={{
                      width: 392,
                    }}
                    errorHoldDuration={1000}
                    mode="slider"
                    tipText={{
                      default: "请按住滑块，拖动到最右边",
                      moving: "请按住滑块，拖动到最右边",
                      error: "验证失败，请重新操作",
                      success: "验证成功",
                    }}
                    onVerify={(data) => {
                      console.log(data);
                      // 默认背景图宽度 320 减去默认拼图宽度 60 所以滑轨宽度是 260
                      if (data.x === 332) {
                        return Promise.resolve().then(() => {
                          setIsPassCode(true);
                          toast.info("正在获取验证码,清稍等...");
                          setTimeout(() => {
                            setIsShowPassCode(false);
                            sendVerifyCode();
                          }, 1500);
                        });
                      }
                      setIsPassCode(true);
                      return Promise.reject();
                    }}
                  />
                  {/* <div style={{ marginTop: 24 }}>
                <button onClick={() => actionRef.current?.refresh()}>点击重置</button>
              </div> */}
                </div>
              )}
              <Link
                className="flex py-3 justify-end  box-border cursor-pointer"
                onClick={changeText}
              >
                账号密码登录
              </Link>
            </>
          ) : (
            <Link
              className=" flex justify-end py-3 box-border  cursor-pointer"
              onClick={changeText}
            >
              短信验证码登录
            </Link>
          )}
        </div>
      )}
      {type === "register" && (
        <div>
          <Input
            className="mt-5 mb-5"
            label="邀请码（可空）"
            placeholder="请填写邀请码"
            value={params.invite_code}
            variant="bordered"
            onChange={(e) =>
              setParams({ ...params, invite_code: e.target.value })
            }
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onLogin();
              }
            }}
          />
        </div>
      )}

      {/* <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          记住我
        </Checkbox>
        <Link color="primary" href="#" size="sm">
          短信验证码登录
        </Link>
      </div> */}
      <div className=" flex justify-center ">
        <Button
          className=" mr-5"
          color="danger"
          variant="flat"
          onPress={onClose}
        >
          关闭
        </Button>
        <Button color="primary" onPress={onLogin}>
          登录
        </Button>
      </div>
    </div>
  );
}
