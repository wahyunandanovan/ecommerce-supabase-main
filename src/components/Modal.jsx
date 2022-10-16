import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as ModalCustom } from "@mui/material";
import Fade from "@mui/material/Fade";

export default function Modal({ children, open, handleClose, width }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    // height: "100%",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "transparent",
    // paddingTop: 4,
  };

  return (
    <div>
      <ModalCustom
        disableAutoFocus={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{ overflow: "scroll" }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </ModalCustom>
    </div>
  );
}
