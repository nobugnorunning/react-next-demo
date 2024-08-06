import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { cloneDeep } from "lodash";
import { isFunction } from "../is";
import type { AxiosTransform, CreateAxiosOptions, RequestOptions, Result, UploadFileParams } from "./types";
import { ContentTypeEnum } from "./types";
import { RequestEnum } from "./types";

export class Axios {
  private readonly options: CreateAxiosOptions;
  private axiosInstance: AxiosInstance;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) return;

    const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } = transform;

    /** 注册请求拦截器 */
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options) as InternalAxiosRequestConfig;
      }
      return config;
    }, undefined);
    /** 注册请求错误捕捉拦截器 */
    if (requestInterceptorsCatch && isFunction(requestInterceptorsCatch)) {
      this.axiosInstance.interceptors.request.use(undefined, (error: Error) => {
        requestInterceptorsCatch(error, this.options)
      });
    }

    /** 注册响应拦截器 */
    this.axiosInstance.interceptors.response.use(response => {
      if (responseInterceptors && isFunction(responseInterceptors)) {
        response = responseInterceptors(response);
      }
      return response;
    });
    /** 注册响应错误捕捉拦截器 */
    if (responseInterceptorsCatch && isFunction(responseInterceptorsCatch)) {
      this.axiosInstance.interceptors.response.use(undefined, (error: Error) => {
        responseInterceptorsCatch(error, this.options)
      });
    }
  }

  private getTransform() {
    const { transform } = this.options;
    return transform || ({} as AxiosTransform);
  }

  public post<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request<T>({ method: RequestEnum.POST, ...config }, options);
  }

  public upload<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new FormData();
    const fileName = params.name || "file";

    if (params.filename) {
      formData.append(fileName, params.file, params.filename);
    } else {
      formData.append(fileName, params.file);
    }

    // 处理额外参数
    if (params.data) {
      Object.keys(params.data).forEach(key => {
        const value = params.data![key];
        if (Array.isArray(value)) {
          value.forEach(item => {
            formData.append(`${key}[]`, item);
          });
          return;
        }

        formData.append(key, params.data![key]);
      });
    }

    const requestConfig = {
      ...config,
      method: RequestEnum.POST,
      data: formData,
      headers: {
        "Content-type": ContentTypeEnum.FORM_DATA
      }
    };

    if (params.progress && params.onProgress && isFunction(params.onProgress)) {
      requestConfig.onUploadProgress = progressEvent => {
        const rate = Math.round((progressEvent.loaded / progressEvent.total!) * 100);
        params.onProgress!(rate);
      };
    }

    return this.request<T>(requestConfig);
  }

  public get<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request<T>({ method: RequestEnum.GET, ...config }, options);
  }

  public put<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request<T>({ method: RequestEnum.PUT, ...config }, options);
  }

  public delete<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request<T>({ method: RequestEnum.DELETE, ...config }, options);
  }

  /** 基础请求方法 */
  public request<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    let conf: CreateAxiosOptions = cloneDeep(config);
    // 获取 transform 数据，使用钩子
    const transform = this.getTransform();

    // 覆盖初始化配置
    const { requestOptions } = this.options;
    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    /** 请求前 */
    const { beforeRequestHook, transformRequestHook } = transform;
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }
    conf.requestOptions = opt;

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then(res => {
          // 请求成功
          /** 如果使用了处理数据的钩子就处理一下 */
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt);
              resolve(ret as T);
            } catch (e) {
              reject(e);
            }
            return;
          }
          resolve(res as unknown as Promise<T>);
        })
        /** 请求的错误捕捉不再让用户自定义，统一使用 axios 的错误处理方式 */
        // .catch(err => {
        //   // if (requestCatchHook && isFunction(requestCatchHook)) {
        //   //   reject(requestCatchHook(err, opt));
        //   //   return;
        //   // }
        //   reject(err);
        // });
    });
  }
}
