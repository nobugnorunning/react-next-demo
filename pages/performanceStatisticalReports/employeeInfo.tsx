import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { ExportOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, DatePicker, Divider, Form, Input, Row, Table, type TableColumnsType } from "antd";
import { useState } from "react";

const EmployeeInfo = () => {
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
      title: "人员编码",
      dataIndex: "id"
    },
    {
      align: "center",
      title: "姓名",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "性别",
      dataIndex: "gender"
    },
    {
      align: "center",
      title: "民族",
      dataIndex: "ethnicGroup"
    },
    {
      align: "center",
      title: "出生日期",
      dataIndex: "time"
    },
    {
      align: "center",
      title: "所属部门",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "健康状态",
      dataIndex: "health"
    },
    {
      align: "center",
      title: "身高",
      dataIndex: "height"
    },
    {
      align: "center",
      title: "体重",
      dataIndex: "kg"
    },
    {
      align: "center",
      title: "婚姻状况",
      dataIndex: "marriageState"
    },
    {
      align: "center",
      title: "是否晚婚",
      dataIndex: "lateMarriage"
    },
    {
      align: "center",
      title: "参加工作时间",
      dataIndex: "time"
    },
    {
      align: "center",
      title: "政治面貌",
      dataIndex: "politicalOutlook"
    },
    {
      align: "center",
      title: "调入中心时间",
      dataIndex: "time"
    },
    {
      align: "center",
      title: "调入前工作单位",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "在职最高学历",
      dataIndex: "degree"
    },
    {
      align: "center",
      title: "技术职称",
      dataIndex: "jobTitle"
    },
    {
      align: "center",
      title: "办公电话",
      dataIndex: "phone"
    },
    {
      align: "center",
      title: "手机号码",
      dataIndex: "phone"
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
export default EmployeeInfo;
