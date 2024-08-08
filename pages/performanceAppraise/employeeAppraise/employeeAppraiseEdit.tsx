import { getLayoutProps } from "@/common/layout/getProps";
import EmployeeAppraiseCU from "@/modules/performanceAppraise/employeeAppraiseCU";

export const EmployeeAppraiseEdit = () => {
  return (
    <>
      <EmployeeAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeeAppraiseEdit;
