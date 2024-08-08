import { getLayoutProps } from "@/common/layout/getProps";
import EmployeeMultiAppraiseCU from "@/modules/performanceAppraise/employeeMultiAppraiseCU";

export const EmployeeMultiAppraiseEdit = () => {
  return (
    <>
      <EmployeeMultiAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeeMultiAppraiseEdit;
