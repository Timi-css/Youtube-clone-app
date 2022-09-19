import React from "react";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start">
      {videos.map((item, idx) => (
        <Box key={idx}></Box>
      ))}
    </Stack>
  );
};

export default Videos;
