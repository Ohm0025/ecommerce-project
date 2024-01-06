import HeadBarMain from "./HeadBarMain";

import HeadBarSm from "./HeadBarSm";

type Props = {};

const HeadBar = ({}: Props) => {
  // const location = useLocation();
  // const [isHome, setIsHome] = useState(true);

  // useEffect(() => {
  //   let locationArr = location.pathname.split("/");
  //   let getProductId = locationArr[locationArr.length - 1];

  //   if (locationArr.includes("products")) {
  //     setIsHome(false);

  //     // if (!isNaN(+getProductId)) {
  //     //   console.log(getProductId);
  //     // }
  //   } else {
  //     setIsHome(true);
  //   }
  // }, [location]);

  return (
    <>
      <HeadBarMain editSize="12rem" />
      <HeadBarSm editSize="6rem" />
    </>
  );
  // <>{isHome ? <HeadBarMain /> : <HeadBarAlter />}</>;
};

export default HeadBar;
