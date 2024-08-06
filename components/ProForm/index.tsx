import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import type { FormProps} from "antd";
import { Space } from "antd";
import { Button, Form } from "antd";
import { omit } from "lodash";
import type { PropsWithChildren } from "react";
import styles from "./index.module.scss";

export type ProFormProps = {
  onSearch?: () => void;
  onReset?: () => void;
}

export const ProForm = (props: PropsWithChildren<ProFormProps & FormProps>) => {
  const { onSearch, onReset, form } = props;

  const formProps = omit(props, ["onSearch", "onReset"])

  const onSearchHandler = () => {
    if (onSearch) {
      onSearch();
    }
  }
  const onResetHandler = () => {
    if (form) {
      form.resetFields();
    }

    if (onReset) {
      onReset();
    }
  }
  return (
    <Form className={styles.form} {...formProps} colon={false}>
      {props.children}

      <Form.Item className={'search-form-button !flex-1 text-right'}>
        <Space>
          <Button type="primary" icon={<SearchOutlined />} onClick={onSearchHandler}>
            查询
          </Button>
          <Button icon={<ReloadOutlined />} onClick={onResetHandler}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
