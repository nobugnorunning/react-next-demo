import { useAuthStore } from "@/store/auth";
import { Button } from "antd";
import type { GetServerSideProps } from "next";
import apis from "@/api"

const LoginPage = () => {
  const setToken = useAuthStore((state) => state.setToken)

  return (
    <div>
      <Button type={"primary"} onClick={() => {
        apis.auth.login({
          userName: "admin",
          password: "admin123"
        }).then((res) => {
          const { data } = res;
          setToken(data.access_token);
        })
      }}>button</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      menu: [1, 2, 3]
    }
  }
}
export default LoginPage;
