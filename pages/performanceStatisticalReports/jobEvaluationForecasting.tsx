import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { ExportOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, DatePicker, Divider, Form, Input, Row, Table, type TableColumnsType } from "antd";
import { useState } from "react";

const JobEvaluationForecasting = () => {
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
      title: "部门",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "最高",
      dataIndex: "num3"
    },
    {
      align: "center",
      title: "最低",
      dataIndex: "num1"
    },
    {
      align: "center",
      title: "中位值",
      dataIndex: "num2"
    },
    {
      align: "center",
      title: "平均值",
      dataIndex: "num2"
    },
    {
      align: "center",
      title: "折算后最高",
      dataIndex: "num2"
    },
    {
      align: "center",
      title: "折算后最低",
      dataIndex: "num2"
    },
    {
      align: "center",
      title: "考评分数差距",
      dataIndex: "num4"
    },
    {
      align: "center",
      title: "排名",
      dataIndex: "num4"
    },
    {
      align: "center",
      title: "与平均分差距",
      dataIndex: "num4"
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
export default JobEvaluationForecasting;
