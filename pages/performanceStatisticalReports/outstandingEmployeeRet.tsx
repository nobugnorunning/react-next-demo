import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { ExportOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, DatePicker, Divider, Form, Input, Row, Table, type TableColumnsType } from "antd";
import { useState } from "react";

const OutstandingEmployeeRet = () => {
  const [form] = Form.useForm()
  const [list, setList] = useState(data);
  const columns: TableColumnsType = [
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
      title: "员工名称",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "所属部门",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "岗位",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "评选周期",
      dataIndex: "timeRange"
    },
    {
      align: "center",
      title: "绩效得分",
      dataIndex: "num2"
    },
    {
      align: "center",
      title: "票数",
      dataIndex: "num4"
    },
    {
      align: "center",
      title: "领导评分",
      dataIndex: "num2"
    }
  ]
  return (
    <PageContainer>
      <ProForm form={form} layout={'inline'} onSearch={() => {
        console.log('123123123123');
      }}>
        <Form.Item
          label={'员工名称'}
          name="field1"
        >
          <Input placeholder={'请输入'}></Input>
        </Form.Item>
        <Form.Item
          label={'部门名称'}
          name="field1"
        >
          <Input placeholder={'请输入'}></Input>
        </Form.Item>
        <Form.Item
          label={'评选周期'}
          name="field2"
        >
          <DatePicker.RangePicker />
        </Form.Item>
      </ProForm>

      <Divider className={'mb-[20px] mt-0'} />

      <Row className={'mb-[20px]'} justify={'end'}>
        <Button icon={<ExportOutlined />}>导出</Button>
      </Row>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"id"}
      ></Table>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default OutstandingEmployeeRet;
