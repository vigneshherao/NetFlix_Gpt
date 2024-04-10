import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <div className="flex justify-center mt-28 text-center">
      <Box sx={{}}>
        <CircularProgress color="primary" />
        <h2 className="mt-3">Loading</h2>
      </Box>
    </div>
  );
}
