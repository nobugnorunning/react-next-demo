import { ProForm } from "@/components/ProForm";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { assign, cloneDeep } from "lodash";
import { data } from "./data";
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button, DatePicker,
  Form,
  Input,
  InputNumber,
  message, Modal,
  Row,
  Space,
  Table,
  type TableProps
} from "antd";
import type { FC, HTMLAttributes, Key, PropsWithChildren } from "react";
import { useState } from "react";

type TableDataType = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string | Dayjs;
  field7: number;
  field8: number;
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface EditableCellProps extends HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  record: TableDataType;
  index: number;
}

const EditableCell: FC<PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <InputNumber className={'w-full'} min={0} />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const AddOrSubtractPoints = () => {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [list, setList] = useState(data);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [open, setOpen] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({});
  const [editingRowKeys, setEditingRowKeys] = useState<Key[]>([]);

  const isEditing = (key: Key) => {
    return editingRowKeys.includes(key);
  }

  const columns = [
    {
      title: "序号",
      key: "index",
      render: (_text: string, _record: TableDataType, index: number) => {
        return index + 1
      }
    },
    {
      title: "项目编码",
      dataIndex: "field1"
    },
    {
      title: "项目名称",
      dataIndex: "field2"
    },
    {
      title: "项目描述",
      dataIndex: "field3"
    },
    {
      title: "创建人",
      dataIndex: "field4"
    },
    {
      title: "适用部门",
      dataIndex: "field5"
    },
    {
      title: "创建时间",
      dataIndex: "field6"
    },
    {
      title: "加（减）分数下限",
      dataIndex: "field7"
    },
    {
      title: "加（减）分数上限",
      dataIndex: "field8"
    }
  ]

  // UI图没看到哪个是编辑的
  const editColumns = [].map(() => {
    return {
      onCell: (record: TableDataType) => {
        return {
          record,
          dataIndex: "field4",
          editing: isEditing(record.field1)
        }
      }
    }
  })

  const onSelectChange = (keys: Key[]) => {
    console.log(keys);
    setSelectedRowKeys(keys)
  }

  const rowSelection: TableRowSelection<TableDataType> = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const create = () => {
    setCurrentEdit({});
    setOpen(true);
  }

  const edit = () => {
    setCurrentEdit(
      assign(
        {},
        cloneDeep(list.find(item => (item.field1 === selectedRowKeys[0]))!),
        { field6: dayjs(currentEdit.field6) }
      )
    )
    setOpen(true);
  }

  const submit = () => {
    message.success("edit success!")
    setEditingRowKeys([]);
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
          label={'使用部门'}
          name="field1"
        >
          <Input placeholder="请输入使用部门" />
        </Form.Item>
        <Form.Item
          label={'创建时间'}
          name="field2"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={'创建人'}
          name="field3"
        >
          <Input placeholder="请输入创建人" />
        </Form.Item>
      </ProForm>

      <Row className={'mb-[20px]'} justify={'end'}>
        <Space>
          <Button type={'link'} icon={<DownloadOutlined />}>下载模板</Button>
          <Button type={'link'} icon={<DownloadOutlined />}>导入</Button>
          <Button type={'primary'} icon={<PlusOutlined />} onClick={create}>新增</Button>
          <Button disabled={selectedRowKeys.length !== 1} type={'primary'} icon={<EditOutlined />} onClick={edit}>编辑</Button>
          <Button type={'primary'} icon={<SaveOutlined />}>保存</Button>
          <Button disabled={selectedRowKeys.length === 0} danger icon={<DeleteOutlined />} onClick={
            () => {
              Modal.confirm({
                title: "提示",
                content: "此操作将永久删除该部门绩效评价，是否继续？",
                onOk(close){
                  setList(list.filter((item) => (!selectedRowKeys.includes(item.field1))))
                  close();
                }
              })
            }
          }>删除</Button>
        </Space>
      </Row>

      <Table
        className={"mb-[20px]"}
        components={{
          body: {
            cell: EditableCell
          }
        }}
        dataSource={list}
        columns={columns}
        rowKey={"field1"}
        rowSelection={rowSelection}
      ></Table>

      <Row justify={'end'}>
        <Space>
          <Button>取消</Button>
          <Button type={'primary'} onClick={submit}>提交</Button>
        </Space>
      </Row>

      <Modal
        open={open}
        title={`${JSON.stringify(currentEdit) === "{}" ? "新增" : "编辑"}考核计算公式配置`}
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
        <Form form={editForm} initialValues={currentEdit} labelCol={{span: 6}}>
          <Form.Item
            label={'项目编码'}
            name={'field1'}
          >
            <Input placeholder={"请输入项目编码"}></Input>
          </Form.Item>
          <Form.Item
            label={'项目名称'}
            name={'field2'}
          >
            <Input placeholder={"请输入项目名称"}></Input>
          </Form.Item>
          <Form.Item
            label={'项目描述'}
            name={'field3'}
          >
            <Input placeholder={"请输入项目描述"}></Input>
          </Form.Item>
          <Form.Item
            label={'创建人'}
            name={'field4'}
          >
            <Input placeholder={"请输入创建人"}></Input>
          </Form.Item>
          <Form.Item
            label={'适用部门'}
            name={'field5'}
          >
            <Input placeholder={"请输入适用部门"}></Input>
          </Form.Item>
          <Form.Item
            label={'创建时间'}
            name={'field6'}
          >
            <DatePicker className={"w-full"} />
          </Form.Item>
          <Form.Item
            label={'加(减)分数下限'}
            name={'field6'}
          >
            <InputNumber className={'w-full'} min={0} placeholder={"请输入"}></InputNumber>
          </Form.Item>
          <Form.Item
            label={'加(减)分数上限'}
            name={'field6'}
          >
            <InputNumber className={'w-full'} min={0} placeholder={"请输入"}></InputNumber>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  )
}

export default AddOrSubtractPoints;
