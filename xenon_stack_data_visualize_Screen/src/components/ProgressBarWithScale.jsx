import MultiColorProgressBar from "./MultiColorProgressBar";
import { Box } from "@mui/material";
const ProgressBarWithScale = ({ value, max, bgColor, fgColor }) => {
    const divisions = Array.from({ length: max + 1 }, (_, i) => i);
    return (
      <Box position="relative" width="100%" height="30px">
        <MultiColorProgressBar
          value={value}
          bgColor={bgColor}
          fgColor={fgColor}
        />
        <Box
          position="absolute"
          top="12px"
          left="0"
          right="0"
          display="flex"
          justifyContent="space-between"
          fontSize="10px"
          color="#666"
        >
          {divisions.map((division) => (
            <Box key={division} textAlign="center" width="1px">
              <div style={{ height: "10px", borderLeft: "1px solid #ccc" }}></div>
              {division}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  export default ProgressBarWithScale;