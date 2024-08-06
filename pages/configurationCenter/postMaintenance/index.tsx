import { ProForm } from "@/components/ProForm";
import { data } from "./data";
import { PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input, message,
  Modal, Radio,
  Row, Select,
  Table,
  type TableColumnsType
} from "antd";
import { useState } from "react";

type TableDataType = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
}

const PostMaintenance = () => {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [list, setList] = useState(data);
  const [open, setOpen] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({});

  const columns: TableColumnsType<TableDataType> = [
    {
      title: "序号",
      key: "index",
      render: (_text, _record, index) => {
        return index + 1
      }
    },
    {
      title: "岗位编号",
      dataIndex: "field1"
    },
    {
      title: "岗位名称",
      dataIndex: "field2"
    },
    {
      title: "自评分是否可见",
      dataIndex: "field3"
    },
    {
      title: "岗位来源",
      dataIndex: "field4"
    },
    {
      title: "创建人",
      dataIndex: "field5"
    },
    {
      title: "创建时间",
      dataIndex: "field6"
    },
    {
      title: "操作",
      align: 'center',
      render: (_, record, index) => {
        return (
          <>
            <Button type={'link'} onClick={() => {
              setCurrentEdit(record);
              setOpen(true);
            }}>编辑</Button>
            <Button type={'link'} danger onClick={() => {
              Modal.confirm({
                title: "提示",
                content: "此操作将永久删除该部门绩效评价，是否继续？",
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
          label={'岗位名称'}
          name="field1"
        >
          <Input placeholder="请输入岗位名称" />
        </Form.Item>
        <Form.Item
          label={'创建时间'}
          name="field2"
        >
          <DatePicker />
        </Form.Item>
      </ProForm>

      <Divider className={'my-[20px]'}></Divider>

      <Row className={'mb-[20px]'}>
        <Button type={'primary'} icon={<PlusOutlined />} onClick={() => {
          setOpen(true)
        }}>新增</Button>
      </Row>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"field1"}
      ></Table>

      <Modal
        open={open}
        title={`${JSON.stringify(currentEdit) === "{}" ? "新增" : "编辑"}岗位信息`}
        afterClose={() => setCurrentEdit({})}
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
        <Form form={editForm} initialValues={currentEdit} labelCol={{span: 7}}>
          <Form.Item
            label={'岗位名称'}
            name={'field1'}
          >
            <Input placeholder={"请输入岗位名称"}></Input>
          </Form.Item>
          <Form.Item
            label={'是否参与绩效考核'}
            name={'field2'}
          >
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={2}>否</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  )
}

export default PostMaintenance;
