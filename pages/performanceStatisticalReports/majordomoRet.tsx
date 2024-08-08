import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { ExportOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, DatePicker, Divider, Form, Input, Row, Table, type TableColumnsType } from "antd";
import { useState } from "react";

const MajordomoRet = () => {
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
      title: "被考核人",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "所属部门",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "考核周期",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "自评得分",
      dataIndex: "num1"
    },
    {
      align: "center",
      title: "总分",
      dataIndex: "num3"
    },
    {
      align: "center",
      title: "发布时间",
      dataIndex: "time"
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
          label={'考核周期'}
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
export default MajordomoRet;
