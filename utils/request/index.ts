import { useAuthStore } from "@/store/auth";
import { message } from "antd";
import { merge } from "lodash";
import { Axios } from "./Axios";
import type { AxiosTransform, CreateAxiosOptions } from "./types";
import { CodeEnum } from "./types";
import router from "next/router";

export const WhiteListUrl = [
  '/auth/login'
]

const transform: AxiosTransform = {
  beforeRequestHook: (config, options) => {
    const { apiUrl, withToken, tokenPrefix, tokenHeaderName, headers } = options;

    // Add token to header
    if (withToken && !WhiteListUrl.includes(config.url as string)) {
      const token = useAuthStore.getState().token;
      console.log('token', token);

      config.headers = {
        [tokenHeaderName as string]: `${tokenPrefix}${token}`
      }
    }

    // Add api prefix to url
    if (apiUrl) {
      config.url = `${apiUrl}${config.url}`;
    }

    // Merge headers
    if (headers) {
      config.headers = merge(config.headers, headers);
    }

    return config;
  },

  transformRequestHook: (res, options) => {
    const { isTransformResponse, showErrorMessage } = options;

    let _msg = "";

    const { code, message: msg } = res.data;

    if (code === CodeEnum.Success) {

    } else if (code === CodeEnum.Unauthorized) {
      _msg = msg || "Unauthorized";
      console.log(router);
    } else if (code === CodeEnum.BadRequest) {
      _msg = msg || "BadRequest";
    } else {
      _msg = msg || "error";
    }

    if(showErrorMessage) {
      message.error(_msg);
    }

    if (isTransformResponse) {
      return res.data;
    } else {
      return res;
    }
  }
};

export const createAxios = (opt?: CreateAxiosOptions) => {
  return new Axios(
    merge(
      {
        transform,
        requestOptions: {
          joinParamsToUrl: true,
          isTransformResponse: true,
          apiUrl: process.env.NEXT_PUBLIC_API_PREFIX,
          showErrorMessage: true,
          showLoading: true,
          joinTime: false,
          tokenPrefix: "Bearer ",
          tokenHeaderName: "Authorization",
          withToken: true
        }
      },
      opt || {}
    )
  );
};

export const http = createAxios();
