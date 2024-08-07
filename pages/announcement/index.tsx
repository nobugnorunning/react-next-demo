import { FormatYMD } from "@/common/constants";
import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { data } from "./data";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, DatePicker, Divider, Form, Input, Table, type TableColumnsType } from "antd";
import { useState } from "react";

type TableDataType = {
  id: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string | Dayjs;
}

const Index = () => {
  const router = useRouter();
  const [form] = Form.useForm()
  const [list, setList] = useState(data);
  const columns: TableColumnsType<TableDataType> = [
    {
      align: "center",
      title: "序号",
      width: 60,
      key: "index",
      render: (_text, _record, index) => {
        return index + 1
      }
    },
    {
      align: "center",
      title: "公告标题",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "公告类型",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "发布人",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "发布时间",
      dataIndex: "field4",
      render: (_, record) => {
        return dayjs(record.field4).format(FormatYMD)
      }
    },
    {
      align: "center",
      title: "操作",
      render: (_, record) => {
        return (
          <>
            <Button type={'link'} onClick={() => {
              router.push(`/announcement/detail?id=${record.field1}`)
            }}>详情</Button>
          </>
        )
      }
    }
  ]

  return (
    <PageContainer>
      <ProForm form={form} layout={'inline'} onSearch={() => {
        console.log('123123123123');
      }}>
        <Form.Item
          label={'标题'}
          name="field1"
        >
          <Input placeholder={'请输入'}></Input>
        </Form.Item>
        <Form.Item
          label={'发布时间'}
          name="field2"
        >
          <DatePicker />
        </Form.Item>
      </ProForm>

      <Divider className={'mb-[20px] mt-0'} />

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"id"}
      ></Table>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default Index;
