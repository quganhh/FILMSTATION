import React from "react";
import ComboItem from "./ComboItems";
import { Box, Typography } from "@mui/material";

const ComboList = ({ combos, onQuantityChange }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        COMBO
      </Typography>
      {combos.map((combo) => (
        <ComboItem
          key={combo.id}
          combo={combo}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </Box>
  );
};

export default ComboList;
