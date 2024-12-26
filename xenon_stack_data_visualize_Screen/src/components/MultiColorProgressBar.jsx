import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const MultiColorProgressBar = styled(Box)(({ value, bgColor, fgColor }) => ({
  position: "relative",
  height: "10px",
  borderRadius: "5px",
  background: bgColor || "#ffffff",
  "&::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    borderRadius: "5px",
    backgroundColor: fgColor || "#4CAF50",
    width: `${value}%`,
  },
}));
export default MultiColorProgressBar;
