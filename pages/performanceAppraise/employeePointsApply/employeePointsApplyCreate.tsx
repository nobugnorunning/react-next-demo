import { getLayoutProps } from "@/common/layout/getProps";
import EmployeePointsApplyCU from "@/modules/performanceAppraise/employeePointsApplyCU";

export const EmployeePointsApplyCreate = () => {
  return (
    <>
      <EmployeePointsApplyCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeePointsApplyCreate;
