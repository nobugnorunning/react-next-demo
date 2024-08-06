import { getLayoutProps } from "@/common/layout/getProps";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Col, DatePicker, Form, Input, Row, Table } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GlobalClasses from "@/styles/globalClasses.module.scss";
import styles from "./index.module.scss";

export const DepartmentAppraiseCU = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const [form] = Form.useForm();

  const getDetailById = () => {
    if (id) {
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

  useEffect(() => {
    if (id) {
      getDetailById();
    } else {
      form.setFieldsValue({})
    }
  }, []);

  return (
    <PageContainer header={{
      title: false
    }}>
      <div className={styles.formCard}>
        <div className={GlobalClasses.title}>{id ? "编辑" : "新增"}部门绩效评价考核</div>

        <Form form={form} layout={'vertical'}>
          <Row>
            <Col span={6}>
              <Form.Item
                label={'单据编号'}
                name="field1"
              >
                <Input placeholder={'请输入单据编号'}></Input>
              </Form.Item>
              <Form.Item
                label={'考核期间'}
                name="field7"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label={'部门总监'}
                name="field1"
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item
                label={'考核名称'}
                name="field1"
              >
                <Input placeholder={'请输入考核名称'}></Input>
              </Form.Item>
              <Form.Item
                label={'评价开始日期'}
                name="field7"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label={'考核部门'}
                name="field1"
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item
                label={'考核频次'}
                name="field1"
              >
                <Input placeholder={'请输入考核频次'}></Input>
              </Form.Item>
              <Form.Item
                label={'评价结束日期'}
                name="field7"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label={'附件'}
                name="field1"
              >
                <Button type={'link'} icon={<PlusOutlined />}>附件上传</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Row justify={'end'} className={'mb-[20px]'}>
          <Button type={'link'} icon={<DownloadOutlined />}>下载模板</Button>
          <Button type={'link'} icon={<DownloadOutlined />}>导入</Button>
        </Row>

        <Table></Table>
      </div>
    </PageContainer>
  )
}

export const getServerSideProps = getLayoutProps;
export default DepartmentAppraiseCU;
