import { PageContainer } from "@ant-design/pro-layout";
import { Descriptions } from "antd";
import { useRouter } from "next/router";
import { data } from "./data";

const Complaint = () => {
  const router = useRouter();
  const { query: { id } } = router;

  if (!id) {
    return null;
  }

  const record = data.find(item => item.field1 === id)!;

  return (
    <PageContainer>
      <Descriptions column={6} items={[
        {
          label: "单据编号",
          children: record.field1
        },
        {
          label: "部门名称",
          children: record.field3
        },
        {
          label: "发起人",
          children: record.field8
        },
        {
          label: "申请时间",
          children: record.field7
        },
        {
          label: "自评总分",
          children: record.field5
        },
        {
          label: "复核总分",
          children: record.field6
        }
      ]} />
    </PageContainer>
  )
}

export default Complaint;
