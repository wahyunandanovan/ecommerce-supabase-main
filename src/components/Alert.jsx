import { Box, Card, Typography, Button as Paper } from "@mui/material";
import React from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Alert({
  open,
  handleClose,
  confirmText,
  description,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal open={open} handleClose={handleClose} width={340}>
      <Card sx={{ borderRadius: "12px" }}>
        <Box textAlign="center" p={3}>
          <img src="/illustrations/alert.svg" alt="notif" />
          <Typography variant="h4">Confirmation !</Typography>
          <Typography mt={2} color="#8d96aa">
            {description}
          </Typography>
          <Box mt={2} display="grid">
            <Button onClick={onConfirm} title={confirmText} size="large" />
            <Box mt={1} />
            <Paper onClick={onCancel} variant="outlined" size="large">
              Cancel
            </Paper>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
}
