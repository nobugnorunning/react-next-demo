import type { UserInfo } from "@/api/auth/types";
import type { AuthStoreStateType } from "./types";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreStateType>((set, get) => {
  return {
    userInfo: null,
    token: null,
    hasLogin: () => {
      // 是不是已经登录了，状态包括是不是登录过期
      const { token } = get();
      return !!token
    },
    setUserInfo: (userInfo: UserInfo) => {
      set({ userInfo });
    },
    setToken: (token: string) => {
      set({ token });
    },
    logout: () => {
      set({ token: null, userInfo: null });
    }
  }
})
