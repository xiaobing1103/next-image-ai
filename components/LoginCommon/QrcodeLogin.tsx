import { getWxQrcode, queryWxQrcode } from "@/app/api/login";
import React, { use, useEffect, useRef, useState } from "react";
import { Image, Spinner } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import { RequestLoginParams } from "@/app/types/user.types";
import { userAsync } from "@/app/store/async";
export default function QrcodeLogin({ onClose }: { onClose: () => void }) {
  const [qrCodeImage, setQrCodeImage] = useState("");
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);
  const timer = useRef<undefined | any>();
  const qrcode_id = useRef("");
  useEffect(() => {
    initQrCode();
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  // const { user_info, invite_codeToken } = userStore();
  const initQrCode = async () => {
    setLoading(true);
    const reqQrcode = await getWxQrcode();
    if (reqQrcode.code == 200) {
      setQrCodeImage(reqQrcode.data.url);
      qrcode_id.current = reqQrcode.data.qrcode_id;
      setLoading(false);
    } else {
      toast(reqQrcode.msg);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (qrcode_id.current) {
      queryQrcode();
    }
  }, [qrcode_id.current]);
  const queryQrcode = async () => {
    if (!mountedRef.current) return;
    await queryWxQrcode(qrcode_id.current).then((response: any) => {
      if (response?.data?.status === 0) {
        if (timer.current) {
          clearTimeout(timer.current); // 清除之前的定时器
        }
        timer.current = setTimeout(() => queryQrcode(), 2000);
        return;
      }
      if (response?.data?.status === 1) {
        const params: RequestLoginParams = {
          type: "qrcode",
          qrcode_id: qrcode_id.current,
        };
        qrcode_id.current = "";
        // if (invite_code) {
        //   params.invite_code = invite_code;
        // }
        userAsync.fetchLogin(params).then((res: any) => {
          if (res?.code === 200) {
            onClose();
            toast.success("登录成功！");
          }
        });
      } else {
        toast.error("重新获取二维码！");
        initQrCode();
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <header>微信扫码一键登录</header>
      <p className=" m-2">没有注册的微信号将自动创建账号</p>
      <div className=" w-52 relative h-52">
        {loading && (
          <Spinner
            className=" w-52 absolute z-20 h-full  bg-gray"
            color="primary"
            label="Loading..."
          />
        )}
        <Image alt="微信二维码" className=" w-52" src={qrCodeImage} />
      </div>
    </div>
  );
}
