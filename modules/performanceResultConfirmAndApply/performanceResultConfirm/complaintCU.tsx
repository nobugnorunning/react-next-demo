import { getLayoutProps } from "@/common/layout/getProps";
import { PageContainer } from "@ant-design/pro-layout";
import type { TableColumnsType } from "antd";
import { message } from "antd";
import { Button, Space } from "antd";
import { Row } from "antd";
import { Select } from "antd";
import { Descriptions, Divider, Form, Table, type TableProps } from "antd";
import { assign } from "lodash";
import { useRouter } from "next/router";
import { useRouter as useNavigationRouter } from "next/navigation";
import type { FC, HTMLAttributes, Key, PropsWithChildren} from "react";
import { useState } from "react";
import { data } from "./data";

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
}

interface EditableCellProps extends HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  record: TableDataType;
  index: number;
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const EditableCell: FC<PropsWithChildren<EditableCellProps>> = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Select
    allowClear
    options={[
      { value: 'option1', label: '申诉' },
      { value: 'option2', label: '不申诉' },
    ]}
  />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ComplaintCU = () => {
  const router = useRouter();
  const nRouter = useNavigationRouter();
  const { query: { id, type } } = router;
  const [list, setList] = useState(data);
  const [editingRowKeys, setEditingRowKeys] = useState<Key[]>(list.map(t => t.id));
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  if (!id) {
    return null;
  }

  const record = data.find(item => item.id === id)!;

  const isEditing = (key: Key) => {
    return editingRowKeys.includes(key);
  }

  const columns = [
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
      title: "目标值(或阶段成果)",
      dataIndex: "field4"
    },
    {
      align: "center",
      title: "权重",
      dataIndex: "field5"
    },
    {
      align: "center",
      title: "自评得分",
      dataIndex: "field6"
    },
    {
      align: "center",
      title: "自评得分说明",
      dataIndex: "field7"
    },
    {
      align: "center",
      title: "考评小组得分",
      dataIndex: "field8"
    },
    {
      align: "center",
      title: "考评小组得分说明",
      dataIndex: "field9"
    },
    assign(
      {
        title: "申诉标志",
        dataIndex: "field10",
        width: 160,
      },
      type === "detail" ? {} : {
        onCell: (_record: TableDataType) => {
          return {
            record: _record,
            dataIndex: "field10",
            // editing: isEditing(_record.id)
            editing: isEditing(_record.id)
          }
        }
      }
    ),
    {
      align: "center",
      title: "申诉原因",
      dataIndex: "field11"
    },
  ] as TableColumnsType

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
    setEditingRowKeys([]);
  }

  return (
    <PageContainer>
      <Descriptions column={6} items={[
        {
          label: "单据编号",
          children: record.field1
        },
        {
          label: "部门名称",
          children: record.field3
        },
        {
          label: "发起人",
          children: record.field8
        },
        {
          label: "申请时间",
          children: record.field7
        },
        {
          label: "自评总分",
          children: record.field5
        },
        {
          label: "复核总分",
          children: record.field6
        }
      ]} />

      <Divider className={'my-[20px]'} />

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

      {
        type === "detail" ? (
            <Row justify={'end'}>
              <Space>
                <Button onClick={() => {
                  nRouter.back();
                }}>返回</Button>
              </Space>
            </Row>
          ) : (
          <Row justify={'end'}>
            <Space>
              <Button onClick={() => {
                nRouter.back();
              }}>返回</Button>
              <Button type={'primary'} onClick={submit}>提交</Button>
            </Space>
          </Row>
        )
      }
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default ComplaintCU;
