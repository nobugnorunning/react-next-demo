import type { LayoutProps } from "@/common/layout/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

const PageLayout = dynamic(() => import("./PageLayout"), { ssr: false })

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const router = useRouter();
  const { children } = props;

  // If the user is on the full page, such as login or register, don't render the page layout
  if (router.route === "/login") {
    return (
      <>
        {children}
      </>
    );
  }
  // Otherwise, render the page layout
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
};

export default Layout;
