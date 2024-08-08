import { getLayoutProps } from "@/common/layout/getProps";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import type { Key} from "react";
import { useState } from "react";
import { data } from "./data";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Divider, Form, Input, Modal, Row, Table } from "antd";
import type { TableColumnsType , TableProps } from "antd";
import { ProForm } from "@/components/ProForm";

type TableDataType = {
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
  field11: string;
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const Index = () => {
  const router = useRouter();
  const [form] = Form.useForm()
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
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
      title: "单据编号",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "所属部门",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "申请日期",
      dataIndex: "field7"
    },
    {
      align: "center",
      title: "发起人",
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "工作质量评分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "履职创新评分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "团队协作评分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "工作态度评分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "工作满意度评分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "多维评测总分",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "操作",
      render: (_, record, index) => {
        return (
          <>
            <Button type={'link'} onClick={() => {
              router.push(`/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseDetail?id=${record.field1}&type=detail`)
            }}>详情</Button>
            <Button type={'link'} onClick={() => {
              router.push(`/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseEdit?id=${record.field1}`)
            }}>编辑</Button>
            <Button type={'link'} danger onClick={() => {
               Modal.confirm({
                title: "提示",
                content: "此操作将永久删除该条记录，是否继续？",
                 onOk(close){
                  setList(list.filter((_item, i) => (i !== index)))
                  close();
                 }
              })
            }}>删除</Button>
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

  const lunchAppraise = () => {
    router.push(`/performanceAppraise/employeeMultiAppraise/employeeMultiAppraiseCreate`)
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
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          label={'考核类型'}
          name="field2"
        >
          <Input placeholder="请输入" />
        </Form.Item>
      </ProForm>

      <Divider className={'my-[20px]'}></Divider>

      <Row className={'mb-[20px]'} justify={'space-between'}>
        <Button type={'primary'} icon={<PlusOutlined />} onClick={lunchAppraise}>发起评价</Button>
        <Button icon={<DownloadOutlined />}>下载</Button>
      </Row>

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
export default Index;
