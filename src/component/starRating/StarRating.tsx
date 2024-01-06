import { Box, Rating } from "@mui/material";

type Props = {
  rate: number | undefined;
  full?: number | 5;
};

const StarRating = ({ rate }: Props) => {
  return (
    <div className="flex items-end justify-between gap-2">
      <Rating
        name="disabled"
        value={rate}
        precision={0.1}
        disabled
        size="small"
        sx={{
          color: "#ebb434",
          opacity: "0.9 !important",
        }}
      />
      {rate && <Box color={"#ffcc00"}>{"(" + rate + ")"}</Box>}
    </div>
  );
};

export default StarRating;
