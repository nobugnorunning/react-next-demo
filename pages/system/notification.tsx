import { getLayoutProps } from "@/common/layout/getProps";
import { PageContainer } from "@ant-design/pro-layout";

const NotificationPage = () => {
  return (
    <PageContainer>
      <h1>Notification Page</h1>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default NotificationPage;
