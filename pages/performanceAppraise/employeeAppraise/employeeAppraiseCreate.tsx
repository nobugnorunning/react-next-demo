import { getLayoutProps } from "@/common/layout/getProps";
import EmployeeAppraiseCU from "@/modules/performanceAppraise/employeeAppraiseCU";

export const EmployeeAppraiseCreate = () => {
  return (
    <>
      <EmployeeAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeeAppraiseCreate;
