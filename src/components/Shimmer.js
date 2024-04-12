import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <Box sx={{}}>
          <CircularProgress color="primary" />
          <h2 className="mt-3 text-white">Loading</h2>
        </Box>
      </div>
    </div>
  );
};

export default Shimmer;
