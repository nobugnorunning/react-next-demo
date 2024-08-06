import type { LoginDTO, LoginRet } from "@/api/auth/types";
import { http } from "@/utils/request";
import type { Result } from "@/utils/request/types";

enum AuthUrlEnum {
  LOGIN = '/auth/login',
}

const login = (data: LoginDTO) => {
  return http.post<Result<LoginRet>>({
    url: AuthUrlEnum.LOGIN,
    data
  })
}

const authApi = {
  login,
}

export default authApi;
