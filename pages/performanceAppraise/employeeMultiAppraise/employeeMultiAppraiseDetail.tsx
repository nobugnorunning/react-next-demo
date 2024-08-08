import { getLayoutProps } from "@/common/layout/getProps";
import EmployeeMultiAppraiseCU from "@/modules/performanceAppraise/employeeMultiAppraiseCU";

export const EmployeeMultiAppraiseDetail = () => {
  return (
    <>
      <EmployeeMultiAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeeMultiAppraiseDetail;
