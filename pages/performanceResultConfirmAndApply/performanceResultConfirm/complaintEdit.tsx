import { getLayoutProps } from "@/common/layout/getProps";
import ComplaintCU from "@/modules/performanceResultConfirmAndApply/performanceResultConfirm/complaintCU";

const ComplaintEdit = () => {
  return (
    <>
      <ComplaintCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default ComplaintEdit;
