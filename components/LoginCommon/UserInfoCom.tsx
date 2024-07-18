import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { userStore } from "@/app/store";

export default function UserInfoCom() {
  const { user_info } = userStore();
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={user_info?.avatar}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">用户名：{user_info?.nick}</p>
        <Button
          // className="text-tiny text-white bg-black/20"
          color="primary"
          radius="lg"
          size="sm"
          variant="flat"
        >
          开通会员
        </Button>
      </CardFooter>
    </Card>
  );
}
