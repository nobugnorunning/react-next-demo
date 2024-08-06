import { getLayoutProps } from "@/common/layout/getProps";
import DepartmentAppraiseCU from "@/modules/performanceAppraise/departmentAppraiseCU";

export const DepartmentAppraiseCreate = () => {
  return (
    <>
      <DepartmentAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default DepartmentAppraiseCreate;
