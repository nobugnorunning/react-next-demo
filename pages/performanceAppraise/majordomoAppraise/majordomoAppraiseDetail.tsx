import { getLayoutProps } from "@/common/layout/getProps";
import MajordomoAppraiseCU from "@/modules/performanceAppraise/majordomoAppraiseCU";

export const MajordomoAppraiseDetail = () => {
  return (
    <>
      <MajordomoAppraiseCU />
    </>
  )
}

export const getServerSideProps = getLayoutProps;
export default MajordomoAppraiseDetail;
