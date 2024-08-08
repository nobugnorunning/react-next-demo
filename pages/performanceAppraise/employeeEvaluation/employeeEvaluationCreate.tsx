import { getLayoutProps } from "@/common/layout/getProps";
import EmployeeEvaluationCU from "@/modules/performanceAppraise/employeeEvaluationCU";

export const EmployeeEvaluationCreate = () => {
  return (
    <>
      <EmployeeEvaluationCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default EmployeeEvaluationCreate;
