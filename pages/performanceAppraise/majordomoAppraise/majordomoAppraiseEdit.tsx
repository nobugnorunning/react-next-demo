import { getLayoutProps } from "@/common/layout/getProps";
import MajordomoAppraiseCU from "@/modules/performanceAppraise/majordomoAppraiseCU";

export const MajordomoAppraiseEdit = () => {
  return (
    <>
      <MajordomoAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default MajordomoAppraiseEdit;
