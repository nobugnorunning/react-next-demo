import type { MenuDataItem } from "@ant-design/pro-layout";

// 默认路由配置
export const DEFAULT_ROUTER_CONFIG:  MenuDataItem["children"] = [
  {
    name: "login",
    path: "/login",
    hideInMenu: true
  },
  {
    name: "not-found",
    path: "/404",
    hideInMenu: true
  },
  {
    name: "error",
    path: "/error",
    hideInMenu: true
  }
]
