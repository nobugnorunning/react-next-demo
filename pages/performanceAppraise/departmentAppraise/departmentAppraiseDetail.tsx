import { getLayoutProps } from "@/common/layout/getProps";
import DepartmentAppraiseCU from "@/modules/performanceAppraise/departmentAppraiseCU";

export const DepartmentAppraiseDetail = () => {
  return (
    <>
      <DepartmentAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default DepartmentAppraiseDetail;
