import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LineProgress({ visible }) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 550);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={visible ? true : false}
      // onClick={handleClose}
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Box sx={{ width: "80%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </Box>
    </Backdrop>
  );
}
