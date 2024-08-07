// 人员绩效系数配置
import { ProForm } from "@/components/ProForm";
import { cloneDeep } from "lodash";
import { PersonnelPerformanceCoefficientData } from "./data";
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import type { TableColumnsType} from "antd";
import {
  Button,
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

const PersonnelPerformanceCoefficient = () => {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [list, setList] = useState(PersonnelPerformanceCoefficientData);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [open, setOpen] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({});
  const [editingRowKeys, setEditingRowKeys] = useState<Key[]>([]);

  const isEditing = (key: Key) => {
    return editingRowKeys.includes(key);
  }

  const columns: TableColumnsType = [
    {
      align: "center",
      title: "序号",
      width: 60,
      key: "index",
      render: (_text: string, _record: TableDataType, index: number) => {
        return index + 1
      }
    },
    {
      align: "center",
      title: "人员名称",
      dataIndex: "field1"
    }
  ]

  const editColumns = [
    {
      align: "center",
      title: "个人绩效奖系数",
      dataIndex: "field2",
      width: "33%"
    },
    {
      align: "center",
      title: "绩效奖基数",
      dataIndex: "field3",
      width: "33%"
    }
  ].map(col => {
    return {
      ...col,
      onCell: (record: TableDataType) => {
        return {
          record,
          dataIndex: "field4",
          editing: isEditing(record.field1)
        }
      }
    }
  }) as TableColumnsType

  const onSelectChange = (keys: Key[]) => {
    console.log(keys);
    setSelectedRowKeys(keys)
  }

  const rowSelection: TableRowSelection<TableDataType> = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const edit = () => {
    // 编辑选中的行
    setEditingRowKeys(cloneDeep(selectedRowKeys))
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
          label={'人员名称'}
          name="field1"
        >
          <Input placeholder="请输入人员名称" />
        </Form.Item>
      </ProForm>

      <Row className={'mb-[20px]'} justify={'end'}>
        <Space>
          <Button type={'link'} icon={<DownloadOutlined />}>下载模板</Button>
          <Button type={'link'} icon={<DownloadOutlined />}>导入</Button>
          <Button type={'primary'} icon={<PlusOutlined />} onClick={() => setOpen(true)}>新增</Button>
          <Button disabled={selectedRowKeys.length === 0} type={'primary'} icon={<EditOutlined />} onClick={edit}>编辑</Button>
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
        columns={columns.concat(editColumns)}
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
        title="新增人员绩效系数配置"
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
            label={'人员名称'}
            name={'field1'}
          >
            <Input placeholder={"请输入人员名称"}></Input>
          </Form.Item>
          <Form.Item
            label={'个人绩效奖系数'}
            name={'field2'}
          >
            <Input placeholder={"请输入个人绩效奖系数"}></Input>
          </Form.Item>
          <Form.Item
            label={'绩效奖基数'}
            name={'field3'}
          >
            <Input placeholder={"请输入绩效奖基数"}></Input>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  )
}

export default PersonnelPerformanceCoefficient;
