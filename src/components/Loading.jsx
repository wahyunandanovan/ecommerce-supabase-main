import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

export default function Loading({ visible }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={visible ? true : false}
        // onClick={handleClose}
      >
        <div className="flipping">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Backdrop>
    </div>
  );
}
