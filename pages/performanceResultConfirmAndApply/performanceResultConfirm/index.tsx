import { getLayoutProps } from "@/common/layout/getProps";
import { useRouter } from "next/navigation";
import type { Key} from "react";
import { useState } from "react";
import { data } from "./data";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Divider, Form, Input, Modal, Row, Table } from "antd";
import type { TableColumnsType , TableProps } from "antd";
import { ProForm } from "@/components/ProForm";

type TableDataType = {
  id: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const PerformanceResultConfirm = () => {
  const router = useRouter();
  const [form] = Form.useForm()
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [list] = useState(data);

  const complaint = (row: TableDataType, detail = false) => {
    router.push(`/performanceResultConfirmAndApply/performanceResultConfirm/${detail ? 'complaintDetail' : 'complaintEdit'}?id=${row.id}${detail ? `&type=detail` : ''}`)
  }

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
      title: "单据编号",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "考核类型",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "考核部门",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "期间",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "自评得分",
      dataIndex: "field5"
    },
    {
      align: "center",
      title: "考评小组评分",
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "操作",
      render: (_, record) => {
        return (
          <>
            <Button type={'link'} danger onClick={() => complaint(record)}>申诉</Button>
            <Button type={'link'} onClick={() => {
              Modal.confirm({
                title: "提示",
                content: "此操作将确认该条绩效结果，是否继续？",
                onOk(close){
                  close();
                }
              })
            }}>确认</Button>
            <Button type={'link'} onClick={() => complaint(record, true)}>详情</Button>
          </>
        )
      }
    }
  ]

  const onSelectChange = (keys: Key[]) => {
    console.log(keys);
    setSelectedRowKeys(keys)
  }

  const rowSelection: TableRowSelection<TableDataType> = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <PageContainer>
      <ProForm form={form} layout={'inline'} onSearch={() => {
        console.log('123123123123');
      }}>
        <Form.Item
          label={'单据编号'}
          name="field1"
        >
          <Input placeholder="请输入单据编号" />
        </Form.Item>
        <Form.Item
          label={'考核部门'}
          name="field2"
        >
          <Input />
        </Form.Item>
      </ProForm>

      <Divider className={'my-[20px]'}></Divider>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"field1"}
        rowSelection={rowSelection}
      ></Table>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default PerformanceResultConfirm;
