import type { UserInfo } from "@/api/auth/types";

export type AuthStoreStateType = {
  userInfo: UserInfo | null;
  token: string | null;
  hasLogin: () => boolean;
  setToken: (token: string) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  logout: () => void;
}
