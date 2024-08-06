import { defaultLayoutConfig } from "@/common/layout/config";
import { DEFAULT_ROUTER_CONFIG } from "@/router";
import { PAGE_ROUTER } from "@/router/pages";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";
import { ProLayout } from "@ant-design/pro-layout";

const PageLayout = (props: PropsWithChildren) => {
  const { children } = props;
  const router = useRouter();
  return (
    <ProLayout
      {...defaultLayoutConfig}
      route={{
        routes: DEFAULT_ROUTER_CONFIG?.concat(PAGE_ROUTER)
      }}
      breadcrumbProps={{
        minLength: 1
      }}
      menuItemRender={(item, dom) => {
        return (
          <a
            onClick={() => {
              router.push({
                pathname: item.path,
              })
            }
          }
          >{dom}</a>
        )
      }}
    >
      {children}
    </ProLayout>
  )
}

export default PageLayout;
