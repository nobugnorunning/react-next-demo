import type { AxiosRequestConfig, AxiosResponse } from "axios";

export enum CodeEnum {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}


export interface Result<T = any> {
  code: number;
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

/** 请求方式 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

/** 请求内容类型 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8"
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Record<string, any>;
  // File parameter interface field name
  name?: string;
  // file name
  file: File;
  // file name
  filename?: string;
  // on progress
  progress?: boolean;
  // progress function
  onProgress?: (rate: number) => void;

  [key: string]: any;
}

export interface RequestOptions {
  /**
   * 是否对返回数据进行处理
   * 处理的话，会返回 AxiosResponse 的 data 字段值
   * 不处理就直接返回 AxiosResponse
   * */
  isTransformResponse?: boolean;
  // /** 是不是需要返回请求头信息 */
  // isNativeResponse?: boolean;
  /** 请求 api */
  apiUrl?: string;
  /** 请求出错提示类型 */
  showErrorMessage?: boolean;
  /** 是否展示请求的loading */
  showLoading?: boolean;
  /** 要不要在请求里加个时间戳 */
  joinTime?: boolean;
  /** token 令牌前缀 */
  tokenPrefix?: string;
  /** token 请求头字段名称 */
  tokenHeaderName?: string;
  /** 是否携带 token */
  withToken?: boolean;
  /** headers */
  headers?: Record<string, string>;
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /** 请求之前的钩子函数，做自定义处理 */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /** 请求成功触发的钩子函数，用来对返回的数据作处理 */
  transformRequestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  // /** 请求失败处理钩子 */
  // requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /** 请求拦截器 */
  requestInterceptors?: (config: AxiosRequestConfig, options: CreateAxiosOptions) => AxiosRequestConfig;

  /** 响应拦截器 */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /** 请求失败错误捕捉 */
  requestInterceptorsCatch?: (error: Error, options: CreateAxiosOptions) => void;

  /** 响应失败错误捕捉 */
  responseInterceptorsCatch?: (error: Error, options: CreateAxiosOptions) => void;
}
