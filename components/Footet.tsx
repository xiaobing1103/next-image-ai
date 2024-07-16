// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-600 body-font">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-start w-full md:w-auto">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <a className="text-blue-500 mb-2" href="#">
              反馈 & 客服
            </a>
            <a className="text-blue-500 mb-2" href="#">
              AI 图片智能擦除 <span className="text-red-500">New</span>
            </a>
            <a className="text-blue-500 mb-2" href="#">
              AI 老照片修复 <span className="text-red-500">New</span>
            </a>
            <a className="text-blue-500 mb-2" href="#">
              AI 视频无损放大补帧 <span className="text-red-500">New</span>
            </a>
            <a className="text-blue-500 mb-2" href="#">
              AI 图片风格转换 <span className="text-red-500">New</span>
            </a>
            <a className="text-blue-500" href="#">
              粤ICP备18047748号-12
            </a>
          </div>
        </div>
        <div className="flex justify-center md:ml-auto md:mr-4">
          <a className="text-gray-500 mx-2" href="#">
            <svg  
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18.36 9.64A9 9 0 0112 21a9 9 0 01-7.54-3.64M1 1l22 22" />
            </svg>
          </a>
          <a className="text-gray-500 mx-2" href="#">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.3 3c-2.48 0-4.5 2.01-4.5 4.5 0 .35.04.69.1 1.01C7.69 8.35 4.07 6.37 1.64 3.16a4.48 4.48 0 00-.61 2.27c0 1.57.8 2.97 2 3.77A4.48 4.48 0 01.96 8v.05c0 2.19 1.56 4.02 3.64 4.44a4.52 4.52 0 01-2.04.08c.57 1.77 2.2 3.06 4.15 3.1a9.06 9.06 0 01-5.61 1.93A9.24 9.24 0 010 19.54 12.76 12.76 0 006.88 22"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 mx-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
            </svg>
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="relative inline-block text-left">
            <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              简体中文
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a1 1 0 011.41.09L10 10.586l3.36-3.286a1 1 0 111.41 1.418l-4 3.917a1 1 0 01-1.41 0l-4-3.917a1 1 0 01.09-1.418z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
