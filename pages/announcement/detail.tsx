import { FormatYMD } from "@/common/constants";
import { getLayoutProps } from "@/common/layout/getProps";
import { PageContainer } from "@ant-design/pro-layout";
import { Descriptions } from "antd";
import dayjs from "dayjs";

const AnnouncementDetail = () => {
  return (
    <PageContainer>
      <Descriptions className={'w-[60%]'} column={1} items={
        [
          {
            label: "发布人",
            children: "李xx"
          },
          {
            label: "发布时间",
            children: dayjs(new Date()).format(FormatYMD)
          },
          {
            label: "公告状态",
            children: "已发布"
          },
          {
            label: "公告标题",
            children: "绩效管理中心上线了操作手册说明"
          },
          {
            label: "公告类型",
            children: "临时公告"
          },
          {
            label: "发布内容",
            children: "绩效管理中心上线了操作手册说明，绩效管理中心上线了操作手册说明，绩效管理中心上线了操作手册说明绩效管理中心上\n" +
              "线了操作手册说明绩效管理中心上线了操作手册说明绩效管理中心上线了操作手册说明绩效管理中心上线了操作手册说明绩\n" +
              "效管理中心上线了操作手册说明绩效管理中心上线了操作手册说明绩效管理中心上线了操作手册说明绩效管理中心上线了操\n" +
              "作手册说明绩效管理中心上线了操作手册说明绩效管理中心上线了操作手册说明。"
          }
        ]
      }></Descriptions>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default AnnouncementDetail;
