export type LoginDTO = {
  userName: string;
  password: string;
}

export type UserInfo = {
  id: string;
  userName: string;
  avatar: string | null;
  code: string | null;
  departmentId: string | null;
  departmentName: string | null;
  email: string | null;
  gender: 1 | 2;
  ocpId: string | null;
  ocpName: string | null;
  orgId: string | null;
  orgName: string | null;
  phone: string | null;
  sign: string | null;
  createTime: string;
  updateTime: string;
}

export type LoginRet = {
  access_token: string;
  // userInfo: UserInfo;
}
