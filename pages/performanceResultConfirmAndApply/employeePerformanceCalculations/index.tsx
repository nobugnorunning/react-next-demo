import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { DownloadOutlined, EditOutlined, ExportOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button, Col,
  DatePicker,
  Form,
  Input, message,
  Modal,
  Row,
  Space,
  Table,
  type TableColumnsType,
  type TableProps
} from "antd";
import { type Key, useState } from "react";

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
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
  field17: string;
  field18: string;
  field19: string;
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const  EmployeePerformanceCalculations = () => {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({});
  const [list, setList] = useState(data);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [open, setOpen] = useState<boolean>(false);

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
      title: "部门",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "姓名",
      width: 80,
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "岗位",
      width: 100,
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "职级",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "档级",
      dataIndex: "field5"
    },
    {
      align: "center",
      title: "绩效系数",
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "绩效奖基数",
      dataIndex: "field7"
    },
    {
      align: "center",
      title: "战略绩效评分",
      dataIndex: "field8"
    },
    {
      align: "center",
      title: "战略绩效考评系数",
      dataIndex: "field9"
    },
    {
      align: "center",
      title: "部门岗位绩效考评分数",
      dataIndex: "field10"
    },
    {
      align: "center",
      title: "岗位绩效考评系数",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "绩效奖金",
      dataIndex: "field12"
    },
    {
      align: "center",
      title: "调整",
      dataIndex: "field13"
    },
    {
      align: "center",
      title: "效益调节",
      dataIndex: "field14"
    },
    {
      align: "center",
      title: "战略绩效、岗位绩效后基数",
      dataIndex: "field15"
    },
    {
      align: "center",
      title: "中心奖励分数",
      dataIndex: "field16"
    },
    {
      align: "center",
      title: "中心岗位绩效奖励金额",
      dataIndex: "field17"
    },
    {
      align: "center",
      title: "嘉奖",
      dataIndex: "field18"
    },
    {
      align: "center",
      title: "工资单绩效奖",
      dataIndex: "field19"
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

  const handleOk = () => {
    message.success("edit success!")
    setTimeout(() => {
      setOpen(false);
    }, 500)
  }

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <PageContainer>
      <ProForm form={form} layout={'inline'} onSearch={() => {
        console.log('123123123123');
      }}>
        <Form.Item
          label={'日期'}
          name="field1"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={'姓名'}
          name="field2"
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label={'岗位'}
          name="field3"
        >
          <Input placeholder="请输入岗位" />
        </Form.Item>
        <Form.Item
          label={'部门'}
          name="field4"
        >
          <Input placeholder="请输入部门" />
        </Form.Item>
      </ProForm>

      <Row className={'mb-[20px]'}>
        <Space>
          <Button type={'primary'} icon={<DownloadOutlined />}>导入Excel</Button>
          <Button type={'primary'} icon={<ExportOutlined />}>导出Excel</Button>
          <Button disabled={selectedRowKeys.length !== 1} type={'primary'} icon={<EditOutlined />} onClick={() => {
            setCurrentEdit(list.find(t => t.id === selectedRowKeys[0])!);
            setOpen(true);
          }}>编辑绩效</Button>
        </Space>
      </Row>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"id"}
        rowSelection={rowSelection}
      ></Table>

      <Modal
        width={'50%'}
        open={open}
        title={`${JSON.stringify(currentEdit) === "{}" ? "新增" : "编辑"}考核计算公式配置`}
        afterClose={() => {
          setCurrentEdit({});
          editForm.resetFields();
        }}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'提交'}
        cancelText={'取消'}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Form form={editForm} initialValues={currentEdit} labelCol={{span: 6}} labelAlign={'left'} labelWrap>
          <Row>
            <Col span={11}>
              <Form.Item
                label={'部门'}
                name={'field1'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'姓名'}
                name={'field2'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'岗位'}
                name={'field3'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'职级'}
                name={'field4'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'档级'}
                name={'field5'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'绩效系数'}
                name={'field6'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'绩效奖基数'}
                name={'field7'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'战略绩效评分'}
                name={'field8'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'战略绩效考评系数'}
                name={'field9'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'工资单绩效奖'}
                name={'field19'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <Form.Item
                label={'部门岗位绩效考评分数'}
                name={'field10'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'岗位绩效考评系数'}
                name={'field11'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'绩效奖金'}
                name={'field12'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'调整'}
                name={'field13'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'效益调节'}
                name={'field14'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'战略绩效、岗位绩效后基数'}
                name={'field15'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'中心奖励分数'}
                name={'field16'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'中心岗位绩效奖励金额'}
                name={'field17'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'嘉奖'}
                name={'field18'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeePerformanceCalculations;
