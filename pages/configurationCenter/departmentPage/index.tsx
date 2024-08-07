import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button,
  Divider,
  Form,
  Input,
  Row,
  Table,
  type TableColumnsType,
} from "antd";

type TableDataType = {
  field1: string;
  field2: string;
  field3: string;
}

const DepartmentPage = () => {
  const [form] = Form.useForm()

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
      title: "部门名称",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "部门人数",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "部门负责人",
      dataIndex: "field3"
    }
  ]

  return (
    <PageContainer>
      <ProForm form={form} layout={'inline'} onSearch={() => {
        console.log('123123123123');
      }}>
        <Form.Item
          label={'部门名称'}
          name="field1"
        >
          <Input placeholder="请输入部门名称" />
        </Form.Item>
      </ProForm>

      <Divider className={'my-[20px]'}></Divider>

      <Table
        dataSource={data}
        columns={columns}
        rowKey={"field1"}
      ></Table>
    </PageContainer>
  )
}

export default DepartmentPage;
