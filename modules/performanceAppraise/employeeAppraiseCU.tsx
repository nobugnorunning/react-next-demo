import { getLayoutProps } from "@/common/layout/getProps";
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber, message, Modal,
  Row, Select, Space,
  Table,
  type TableColumnsType,
  type TableProps
} from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { type FC, type HTMLAttributes, type Key, type PropsWithChildren, useEffect, useState } from "react";
import GlobalClasses from "@/styles/globalClasses.module.scss";
import styles from "./index.module.scss";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

type TableDataType = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
}

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

export const DepartmentAppraiseCU = () => {
  const router = useRouter();
  const { query } = router;
  const { id, type } = query;
  const [form] = Form.useForm();
  const [editTableData, setEditTableData] = useState<Partial<Record<string, any>>[]>([]);
  const [applicationData, setApplicationData] = useState<Partial<Record<string, any>>[]>([]);
  const [editForm] = Form.useForm()
  const [open, setOpen] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const isAdd = !id && !type;
  const isEdit = !!id && !type;
  const isDetail = !!id && (type === "detail");

  const getDetailById = () => {
    if (isEdit || isDetail) {
      form.setFieldsValue({
        field1: `BMPJ2404120011}`,
        field2: "部门",
        field3: "部门",
        field4: "系统创新部",
        field5: "季度",
        field6: "奥德标",
        field7: dayjs(new Date()),
        field8: "奥德标",
        field9: dayjs(new Date()),
        field10: '待提交',
      });
    }
  }

  const getEditTableData = () => {
    setEditTableData(Array(5).fill(0).map((_, i) => {
      return {
        field1: `指标1${i + 1}`,
        field2: '考核指标',
        field3: "考核指标情况",
        field4: "",
        field5: "20%",
        field6: "",
        field7: "",
        field8: "",
        field9: ''
      }
    }))
  }

  const getApplicationData = () => {
    setApplicationData(Array(3).fill(0).map((_, i) => {
      return {
        field1: `项目名称${i + 1}`,
        field2: '项目内容',
        field3: "35%",
        field4: "12asd",
        field5: "3",
        field6: "说明说明说明说明",
      }
    }))
  }

  useEffect(() => {
    if (isEdit || isDetail) {
      getDetailById();
      getApplicationData();
    } else {
      form.setFieldsValue({})
    }
    getEditTableData();
  }, []);

  const editTableColumns: TableColumnsType = [
    {
      align: "center",
      title: "序号",
      width: 60,
      key: "index",
      render: (_text: string, _record, index: number) => {
        return index + 1
      }
    },
    {
      align: "center",
      title: "指标类型名称",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "指标名称",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "指标定义",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "考评标准",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "权重",
      dataIndex: "field5"
    }
  ]

  const editColumns = [
    {
      align: "center",
      title: "自评得分",
      width: 200,
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "自评得分说明",
      width: 200,
      dataIndex: "field7"
    },
    {
      align: "center",
      title: "指标得分",
      width: 200,
      dataIndex: "field8"
    }
  ].map(col => {
    return {
      ...col,
      onCell: (record) => {
        return {
          record,
          dataIndex: "field4",
          editing: isAdd || isEdit
        }
      }
    }
  }) as TableColumnsType

  const applicationColumns: TableColumnsType = [
    {
      align: "center",
      title: "序号",
      width: 60,
      key: "index",
      render: (_text: string, _record, index: number) => {
        return index + 1
      }
    },
    {
      align: "center",
      title: "项目名称",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "项目内容",
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "完成情况",
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "表彰情况",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "申请分数",
      dataIndex: "field5"
    },
    {
      align: "center",
      title: "申请说明",
      dataIndex: "field5"
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

  const submit = () => {
    message.success("edit success!")
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
    <>
      <PageContainer header={{
        title: false
      }}>
        <div className={[styles.formCard, 'mb-[20px]'].join(' ')}>
          <div className={[GlobalClasses.title, 'title'].join(" ")}>{(isEdit && !isDetail) ? "编辑" : isAdd ? "新增" : ""}员工绩效自评考核{ isDetail ? "详情" : "" }</div>

          <Form form={form} layout={"vertical"}>
            <Row>
              <Col span={6}>
                <Form.Item
                  label={"单据编号"}
                  name="field1"
                >
                  <Input placeholder={"请输入单据编号"}></Input>
                </Form.Item>
                <Form.Item
                  label={"考核期间"}
                  name="field7"
                >
                  <DatePicker/>
                </Form.Item>
                <Form.Item
                  label={"部门总监"}
                  name="field1"
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  label={"考核类型"}
                  name="field1"
                >
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col span={6} offset={2}>
                <Form.Item
                  label={"考核名称"}
                  name="field1"
                >
                  <Input placeholder={"请输入考核名称"}></Input>
                </Form.Item>
                <Form.Item
                  label={"评价开始日期"}
                  name="field7"
                >
                  <DatePicker/>
                </Form.Item>
                <Form.Item
                  label={"自评人"}
                  name="field1"
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  label={"总分"}
                  name="field1"
                >
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col span={6} offset={2}>
                <Form.Item
                  label={"考核频次"}
                  name="field1"
                >
                  <Input placeholder={"请输入考核频次"}></Input>
                </Form.Item>
                <Form.Item
                  label={"评价结束日期"}
                  name="field7"
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  label={"所属部门"}
                  name="field7"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={"附件"}
                  name="field1"
                >
                  <Button type={"link"} icon={<PlusOutlined/>}>附件上传</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          {
            !(isAdd || isEdit) ?
              null :
              (
                <Row justify={"end"} className={"mb-[20px]"}>
                  <Button type={"link"} icon={<DownloadOutlined/>}>下载模板</Button>
                  <Button type={"link"} icon={<DownloadOutlined/>}>导入</Button>
                </Row>
              )
          }

          <Table
            components={{
              body: {
                cell: EditableCell
              }
            }}
            dataSource={editTableData}
            columns={editTableColumns.concat(editColumns)}
            rowKey={"field1"}
            pagination={false}
          ></Table>
        </div>

        <div className={styles.formCard}>
          <div className="header">
            <div className={[GlobalClasses.title, "title"].join(" ")}>加减分申请</div>
            {
              !(isAdd || isEdit) ?
                null :
                (
                  <Row justify={"end"} className={"mb-[20px]"}>
                    <Button type={"link"} icon={<DownloadOutlined/>}>下载模板</Button>
                    <Button type={"link"} icon={<DownloadOutlined/>}>导入</Button>
                    <Space>
                      <Button type={'primary'} icon={<PlusOutlined />} onClick={() => {
                        setCurrentEdit({});
                        editForm.resetFields();
                        setOpen(true);
                      }}>新增</Button>
                      <Button disabled={selectedRowKeys.length !== 1} type={'primary'} icon={<EditOutlined />} onClick={() => {
                        setCurrentEdit(applicationData.find(item => (item.field1 === selectedRowKeys[0]))!)
                        editForm.resetFields();
                        setOpen(true);
                      }}>编辑</Button>
                      <Button type={'primary'} icon={<DeleteOutlined />}>删除</Button>
                    </Space>
                  </Row>
                )
            }
          </div>

          <Table
            rowKey={'field1'}
            dataSource={applicationData}
            columns={applicationColumns}
            rowSelection={rowSelection}
          ></Table>

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
            <Form form={editForm} initialValues={currentEdit} labelCol={{span: 4}}>
              <Form.Item
                label={'项目名称'}
                name={'field1'}
              >
                <Select
                  options={[
                    { value: 'option1', label: 'option1' },
                    { value: 'option2', label: 'option2' },
                    { value: 'option3', label: 'option3' },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                label={'项目内容'}
                name={'field2'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'完成情况'}
                name={'field3'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'表彰情况'}
                name={'field4'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'申请分数'}
                name={'field5'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
              <Form.Item
                label={'申请说明'}
                name={'field6'}
              >
                <Input placeholder={"请输入"}></Input>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </PageContainer>
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default DepartmentAppraiseCU;
