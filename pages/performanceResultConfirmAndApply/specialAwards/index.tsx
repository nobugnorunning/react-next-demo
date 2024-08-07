import { FormatYMD } from "@/common/constants";
import { getLayoutProps } from "@/common/layout/getProps";
import { ProForm } from "@/components/ProForm";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { cloneDeep } from "lodash";
import { data } from "./data";
import { PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import {
  Col
} from "antd";
import { Select
} from "antd";
import {
  DatePicker
} from "antd";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Table,
  type TableColumnsType
} from "antd";
import { useState } from "react";
import styles from "./index.module.scss";

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
  field9: string | Dayjs;
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: any[];
}

const SpecialAwards = () => {
  const [form] = Form.useForm()
  const [list, setList] = useState(data);
  const [currentEdit, setCurrentEdit] = useState<Partial<TableDataType>>({
    field15: []
  });
  const [open, setOpen] = useState<boolean>(false);

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
      title: "单据编号",
      dataIndex: "field1"
    },
    {
      align: "center",
      title: "申请人",
      width: 80,
      dataIndex: "field2"
    },
    {
      align: "center",
      title: "部门名称",
      width: 100,
      dataIndex: "field3"
    },
    {
      align: "center",
      title: "嘉奖单名称",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "嘉奖人数",
      dataIndex: "field5"
    },
    {
      align: "center",
      title: "嘉奖总奖金",
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "嘉奖单说明",
      dataIndex: "field7"
    },
    {
      align: "center",
      title: "工作完成情况",
      dataIndex: "field8"
    },
    {
      align: "center",
      title: "嘉奖周期",
      dataIndex: "field9",
      render: (_, record) => {
        return dayjs(record.field9).format(FormatYMD)
      }
    },
    {
      align: "center",
      title: "表彰情况",
      dataIndex: "field10"
    },
    {
      align: "center",
      title: "复核奖金",
      dataIndex: "field11"
    },
    {
      align: "center",
      title: "复核情况说明",
      dataIndex: "field12"
    },
    {
      align: "center",
      title: "申请日期",
      dataIndex: "field13"
    },
    {
      align: "center",
      title: "状态",
      dataIndex: "field14"
    },
    {
      align: "center",
      title: "操作",
      render: (_, record) => {
        return (
          <>
            <Button type={'link'} onClick={() => {
              if (!record.field15) {
                record.field15 = [];
              }
              setCurrentEdit(record);
              setOpen(true);
            }}>编辑</Button>
            <Button type={'link'}>详情</Button>
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
          label={'单据编号'}
          name="field1"
        >
          <Input placeholder={'请输入'}></Input>
        </Form.Item>
        <Form.Item
          label={'嘉奖单名称'}
          name="field2"
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          label={'部门名称'}
          name="field3"
        >
          <Input placeholder="请输入" />
        </Form.Item>
      </ProForm>

      <Row className={'mb-[20px]'}>
        <Space>
          <Button type={'primary'} icon={<PlusOutlined />} onClick={() => {
            setCurrentEdit({
              field15: []
            });
            setOpen(true);
          }}>申请</Button>
        </Space>
      </Row>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={"id"}
      ></Table>

      <Modal
        className={styles.modal}
        width={'50%'}
        open={open}
        title={
          <div className={'w-full text-center'}>嘉奖申请单</div>
        }
        afterClose={() => {
          setCurrentEdit({
            field15: []
          });
        }}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'提交'}
        cancelText={'取消'}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <Button type={'primary'} onClick={() => {
              setOpen(false);
            }}>保存</Button>
            <OkBtn />
          </>
        )}
      >
        <div className={[styles.desc, 'mr-[40px]'].join(' ')}>
          <Row>
            <Col className={"label"} span={4}>
              嘉奖单申请名称
            </Col>
            <Col className={"content"} span={20}>
              <Input placeholder={'请输入'} value={currentEdit.field4} />
            </Col>
          </Row>
          <Row>
            <Col className={"label"} span={4}>申请人</Col>
            <Col className={"content"} span={4}>{currentEdit.field4}</Col>
            <Col className={"label"} span={4}>嘉奖期间</Col>
            <Col className={"content"} span={4}><DatePicker value={currentEdit.field9} /></Col>
            <Col className={"label"} span={4}>部门名称</Col>
            <Col className={"content"} span={4}>{currentEdit.field3}</Col>
          </Row>
          {
            currentEdit.field15!.map((item, index) => {
              return (
                <Row className={'dynamic-row'} key={index}>
                  <Col className={"label"} span={4}>嘉奖人</Col>
                  <Col className={"content"} span={4}>
                    <Select
                      placeholder={'请选择'}
                      value={item.a}
                      onChange={e => {
                        item.a = e;
                        setCurrentEdit(cloneDeep(currentEdit))
                      }}
                      options={[
                        { value: 'option1', label: 'option1' },
                        { value: 'option2', label: 'option2' },
                        { value: 'option3', label: 'option3' },
                      ]}
                    />
                  </Col>
                  <Col className={"label"} span={4}>申请奖金</Col>
                  <Col className={"content"} span={4}><Input placeholder={'请输入'} value={item.b} onChange={e => {
                    item.b = e.target.value;
                    setCurrentEdit(cloneDeep(currentEdit));
                  }} /></Col>
                  <Col className={"label"} span={4}>复核奖金</Col>
                  <Col className={"content"} span={4}><Input placeholder={'请输入'} value={item.c} onChange={e => {
                    item.c = e.target.value;
                    setCurrentEdit(cloneDeep(currentEdit));
                  }} /></Col>
                  {
                    index !== 0 ?
                    <Button className={'rm-btn'} type={'link'} danger size={'small'} onClick={() => {
                      currentEdit.field15?.splice(index, 1);
                      setCurrentEdit(cloneDeep(currentEdit));
                    }}>删除</Button>
                      : null
                  }
                </Row>
              )
            })
          }
          <Row justify={'center'} className={'px-[16px] py-[12px]'}>
            <Button type={'link'} icon={<PlusOutlined />} onClick={() => {
              setCurrentEdit({
                ...currentEdit,
                field15: currentEdit.field15?.concat({
                  a: "",
                  b: "",
                  c: ""
                })
              })
            }}>添加嘉奖人</Button>
          </Row>
          <Row>
            <Col className={"label"} span={4}>
              <span>嘉奖申请说明</span>
            </Col>
            <Col className={"content"} span={20}>
              <Input.TextArea rows={3} placeholder={'请输入'} />
            </Col>
          </Row>
          <Row>
            <Col className={"label"} span={4}>
              <span>工作完成情况</span>
            </Col>
            <Col className={"content"} span={20}>
              <Input.TextArea rows={3} placeholder={'请输入'} />
            </Col>
          </Row>
          <Row>
            <Col className={"label"} span={4}>
              <span>表彰情况</span>
            </Col>
            <Col className={"content"} span={20}>
              <Input.TextArea rows={3} placeholder={'请输入'} />
            </Col>
          </Row>
          <Row>
            <Col className={"label"} span={4}>
              <span>复核情况说明</span>
            </Col>
            <Col className={"content"} span={20}>
              <Input.TextArea rows={3} placeholder={'请输入'} />
            </Col>
          </Row>
        </div>
      </Modal>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default SpecialAwards;
