"use client";
import { Checkbox, Input, Link } from "@nextui-org/react";
import React from "react";
import { MailIcon } from "../MailIcon";
import { LockIcon } from "../LockIcon";

export default function Accountlogin() {
  return (
    <div>
      <Input
        autoFocus
        endContent={
          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="用户名"
        placeholder="请输入你的用户名"
        variant="bordered"
      />
      <Input
        endContent={
          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="密码"
        placeholder="请输入密码"
        type="password"
        variant="bordered"
      />
      <div className="flex py-2 px-1 justify-between">
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
      </div>
    </div>
  );
}
