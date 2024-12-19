import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ComboItem = ({ combo, onQuantityChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      borderBottom="1px solid #ddd"
    >
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {combo.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {combo.description}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography
          variant="body1"
          sx={{ marginRight: 2 }}
        >{`${combo.price.toLocaleString()} đ`}</Typography>
        <IconButton
          onClick={() => onQuantityChange(combo.id, -1)}
          disabled={combo.quantity === 0}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{combo.quantity}</Typography>
        <IconButton onClick={() => onQuantityChange(combo.id, 1)}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ComboItem;
