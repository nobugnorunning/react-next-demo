import { ProForm } from "@/components/ProForm";
import { useState } from "react";
import { data } from "./data";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button,
  Divider,
  Form,
  Input, message, Modal, Radio, Select,
  Table,
  type TableColumnsType
} from "antd";

type TableDataType = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

const PostMaintenance = () => {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
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
      title: "员工编号",
      dataIndex: "field1"
    },
    {
      title: "员工姓名",
      dataIndex: "field2"
    },
    {
      title: "所属岗位",
      dataIndex: "field3"
    },
    {
      title: "是否参与绩效考核",
      dataIndex: "field4"
    },
    {
      title: "操作",
      align: 'center',
      render: (_,record) => {
        return (
          <>
            <Button type={'link'} onClick={() => {
              setCurrentEdit(record)
              setOpen(true);
            }}>编辑</Button>
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
          label={'员工姓名'}
          name="field1"
        >
          <Input placeholder="请输入员工姓名" />
        </Form.Item>
      </ProForm>

      <Divider className={'my-[20px]'}></Divider>

      <Table
        dataSource={data}
        columns={columns}
        rowKey={"field1"}
      ></Table>

      <Modal
        open={open}
        title="员工信息编辑"
        afterClose={() => editForm.resetFields()}
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
            label={'是否参与绩效考核'}
            name={'field1'}
          >
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={2}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={'所属岗位'}
            name={'field2'}
          >
            <Select
              options={[
                { value: 'option1', label: 'option1' },
                { value: 'option2', label: 'option2' },
                { value: 'option3', label: 'option3' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  )
}

export default PostMaintenance;
