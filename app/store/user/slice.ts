import { ResponseLoginData, UserInfo } from "@/app/types/user.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface userState {
  // 登录弹窗开关
  loginModal: boolean;
  // 用户信息
  user_info: UserInfo | undefined;
  // 登录Token
  token: string | undefined;
  // 修改登录弹窗
  setLoginModal: (value: boolean) => void;
  // 登录
  login: (data: ResponseLoginData) => void;
  // 退出
  logout: () => void;

  setVite_codeToken: (value: string) => void;
  // 邀请码
  invite_codeToken: string | null;
}

const userStore = create<userState>()(
  persist(
    (set) => ({
      loginModal: false,
      user_info: undefined,
      token: undefined,
      invite_codeToken: "",
      setVite_codeToken: (value) => set({ invite_codeToken: value }),
      setLoginModal: (value) => set({ loginModal: value }),
      login: (data) =>
        set(() => ({
          user_info: data.user_info,
          token: data.token,
        })),
      logout: () => set(() => ({ user_info: undefined, token: undefined })),
    }),
    {
      name: "user_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default userStore;
