import { Link } from "@nextui-org/link";
import Head from "next/head";
import Footer from "@/components/Footet";
import FloatingWidget from "@/components/FloatingWidget";
import MyUploady from "@/components/Upload";
import ClientOnly from "@/components/ClientOnly";
import IconsTem from "@/components/IconsTem";

export default function Home() {
  const createData = [
    {
      title: "放大原理是什么？",
      desc: "使用最新人工智能深度学习技术——深度卷积神经网络。它会将像素和细节部分进行补充，实现图片的无损放大。",
      imageSrc: "3213",
    },
    {
      title: "bigjpg 有API吗？",
      desc: "有的！登录后在用户中心可以看到API。",
    },
    {
      title: "和其他的放大方式有什么不同？",
      desc: "使用传统的方法如PS或PhotoZoom，放大的图片后依然有明显的锯齿感、边缘的锯齿以及噪点。我们产品的工作原理，是通过深度学习，针对放大图片的细节、颜色等，做特殊的处理。放大效果非常出色，色彩保留较好，同时边缘会非常平滑。影响画质的原因是本底放大的图片上看不出来。",
    },
    {
      title: "什么图片放大效果最好？",
      desc: "动漫、插画图片的放大几乎可以说是完美的。将小图片放大后，无论是色彩、细节、边缘，效果都很出色。同时也兼容普通的照片放大。",
    },
    {
      title: "最大可以上传多大图片？",
      desc: "目前免费版3000x3000px, 5M; 付费版50M。",
    },
    {
      title: "放大速度如何？",
      desc: "开始放大后会显示预估的处理时间。依据不同的放大倍数和图片尺寸，放大时间会有不同，从几分钟到几十分钟不等。一般实际放大的时间比预估的时间要稍短。",
    },
    {
      title: "为什么会放大失败？",
      desc: "受到网络环境和服务器同时使用人数的影响，有很小几率会出现放大失败的情况。如果你碰到这种情况，请过几分钟再试试。",
    },
    {
      title: "开始放大以后需要一直保持浏览器打开吗？",
      desc: "如果你没有登录，那么需要一直保持浏览器打开，否则将丢失放大的图片。如果你已经登录了，那么可以关闭浏览器，我们支持离线放大，过一段时间再来下载就可以啦。",
    },
    {
      title: "如何查看自己的放大历史记录？",
      desc: "登录后即可记录和查看自己的历史记录。",
    },
    {
      title: "我想放大更多图片怎么办呢？",
      desc: "为了维持这个工具的服务器开支，我们提供收费的放大服务。付费升级账户后你可以使用独立的高性能服务器，放大图片更快、更多、更稳定。",
    },
    {
      title: "我上传的图片会怎么处理呢？",
      desc: "请放心，用户上传的图片和放大后的图片会在 3 天后自动删除。图片地址链接都是加密保存，除非你主动分享，否则其他人是无法查看到该图片的。",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>AI 人工智能图片放大</title>
          <Link href="/favicon.ico" rel="icon" />
        </Head>
        <div className="max-w-4xl mx-auto p-6">
          <div className="p-6 rounded shadow-md dark:shadow-foreground-500 mb-8 dark:text-black">
            <ClientOnly>
              <MyUploady>
                <p className="text-gray-500 mt-2">
                  想要放大图片更快、更多、更稳定？
                  <Link className="text-blue-500" href="#21321">
                    登录
                  </Link>
                </p>
              </MyUploady>
            </ClientOnly>
          </div>
          <div className="p-6 rounded shadow-md dark:shadow-foreground-500 mb-8">
            <h2 className="text-2xl font-bold mb-4">常见问题</h2>
            <ClientOnly>
              <div className="flex justify-around items-center mb-8">
                <IconsTem />
              </div>
            </ClientOnly>
            {createData.map((items, index) => {
              return (
                <div className="mb-4" key={index}>
                  <h3 className="text-xl font-semibold">{items.title}</h3>
                  <p className="text-gray-700">
                    {items.desc}
                    {items.imageSrc && (
                      <Link className="text-blue-500" href="#">
                        查看示例图片
                      </Link>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
          <Footer />
          <FloatingWidget />
        </div>
      </div>
    </>
  );
}
