import { useNavigate } from "react-router-dom";

type Props = {};

const HeadBarAlter = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-1 order-1">
      <button onClick={() => navigate(-1)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#8b96a5"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeadBarAlter;
