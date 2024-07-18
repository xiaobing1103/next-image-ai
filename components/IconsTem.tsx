"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function IconsTem() {
  const { theme } = useTheme();
  const iconsData = [
    {
      title: "Windows 64-bit",
      src: "https://img.icons8.com/ios/50/000000/windows8.png",
      darkSrc: "https://img.icons8.com/ios/50/ffffff/windows8.png",
      href: "787888",
    },
    {
      title: "Windows 32-bit",
      src: "https://img.icons8.com/ios/50/000000/windows8.png",
      darkSrc: "https://img.icons8.com/ios/50/ffffff/windows8.png",
      href: "4323444",
    },
    {
      title: "Mac App",
      src: "https://img.icons8.com/ios/50/000000/mac-os.png",
      darkSrc: "https://img.icons8.com/ios/50/ffffff/mac-os.png",

      href: "1111111",
    },
    {
      title: "Android App",
      src: "https://img.icons8.com/ios/50/000000/android.png",
      darkSrc: "https://img.icons8.com/ios/50/ffffff/android.png",
      href: "213123",
    },
  ];
  return (
    <>
      {iconsData.map((items, index) => {
        return (
          <div key={index} className="text-center">
            <Image
              alt={items.title}
              className="mx-auto mb-2"
              height={50}
              src={theme == "dark" ? items.darkSrc : items.src}
              width={50}
            />
            <a className="text-blue-500" href={items.href}>
              {items.title}
            </a>
          </div>
        );
      })}
    </>
  );
}
