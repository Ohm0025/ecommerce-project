import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const BackDropLoading = ({ open, handleClose }: Props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      //   onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoading;
