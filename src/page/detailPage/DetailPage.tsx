import React from "react";
import { useDetailPage } from "./DetailPage.hook";
import Spinner from "../../component/spinner/Spinner";

type Props = {};

const DetailPage = (props: Props) => {
  const { productDetail, loading, changeLoading } = useDetailPage();
  console.log(productDetail.image);
  return (
    <>
      {loading ? (
        <Spinner color="black" />
      ) : (
        <div className="min-h-[100vh]">
          Detail Page
          <div>
            <img src={productDetail.image} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
