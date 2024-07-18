"use client";
import React, { ReactElement, ReactNode, useRef } from "react";
import Uploady, { useFileInput } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
const MyUploady = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <Uploady
      grouped
      multiple
      accept=""
      destination={{
        url: "https://my-server.com/upload",
        headers: { "x-custom": "123" },
      }}
      maxGroupSize={2}
      method="PUT"
    >
      <UploadButton className=" w-full">
        <div className="w-full border-dashed border-2 border-gray-300 p-6 text-center">
          <div className="flex flex-col items-center">
            <span className="w-1/4 cursor-pointer dark:bg-gray bg-gray transition-all hover:bg-foreground-500 px-8 py-3 rounded">
              选择图片
            </span>
          </div>
          {children}
        </div>
      </UploadButton>
      <UploadPreview />
    </Uploady>
  );
};

export default MyUploady;
