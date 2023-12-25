import ReactLoading from "react-loading";

type Props = {
  color: string;
};

const Spinner = (props: Props) => {
  return <ReactLoading type="spin" color={props.color}></ReactLoading>;
};

export default Spinner;
