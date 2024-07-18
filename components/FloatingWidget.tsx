// components/FloatingWidget.js
"use client";
import React from "react";
import Image from "next/image";

const FloatingWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg dark:shadow-foreground-500 rounded-lg w-64 text-center">
      <div className="text-sm text-gray-700 mb-2">
        <p>「Bigjpg 人工智能」</p>
        <p>定期推送超级超清美图壁纸插画和黑科技新功能</p>
        <p>n(*≧▽≦*)n</p>
      </div>
      <Image
        alt="QR Code"
        className="w-32 h-32 mx-auto mb-2"
        height={50}
        src="/path/to/qr-code.png"
        width={50}
      />
      <p className="text-gray-700 mb-2">Bigjpg 小程序</p>
      <Image
        alt="Logo"
        className="w-16 h-16 mx-auto"
        height={50}
        src="/path/to/logo.png"
        width={50}
      />
    </div>
  );
};

export default FloatingWidget;
