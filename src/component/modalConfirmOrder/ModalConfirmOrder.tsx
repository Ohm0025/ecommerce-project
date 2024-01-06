import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, DialogActions } from "@mui/material";
import { useUserCart } from "../../store/currentCart";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export default function ModalConfirmOrder({ isOpen, handleClose }: Props) {
  const { clearUserCart } = useUserCart();
  const handleCancel = () => {
    handleClose();
  };
  const handleOk = () => {
    toast.success("การสั่งซื้อสำเร็จ");
    clearUserCart();
    handleClose();
    // navigate("/orderHx");
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm order
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"ยืนยันการชำระเงินหรือไม่"}
        </Typography>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Box>
    </Modal>
  );
}
