import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import ComboList from "./components/ComboList";
import OrderSummary from "./components/OrderSummary";
import { useNavigate, useLocation } from "react-router-dom";

const initialCombos = [
  { id: 1, name: "Sweet Combo 69oz", description: "1 Bắp (69oz) + 2 Nước có gaz (22oz)", price: 88000, quantity: 0 },
  { id: 2, name: "Family Combo 69oz", description: "2 Bắp (69oz) + 4 Nước có gaz + 2 Snack Oishi", price: 213000, quantity: 0 },
  { id: 3, name: "Beta Combo 69oz", description: "1 Bắp (69oz) + 1 Nước có gaz", price: 68000, quantity: 0 },
];

function OrderMain() {
  const [combos, setCombos] = useState(initialCombos);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, totalPrice: seatTotalPrice } = location.state || {};

  const handleQuantityChange = (id, delta) => {
    setCombos((prevCombos) =>
      prevCombos.map((combo) =>
        combo.id === id
          ? { ...combo, quantity: Math.max(0, combo.quantity + delta) }
          : combo
      )
    );
  };

  const totalComboPrice = combos.reduce(
    (sum, combo) => sum + combo.price * combo.quantity,
    0
  );

  const handleNext = () => {
    navigate("/payment", { state: { selectedSeats, seatTotalPrice, combos, totalComboPrice } });
  };

  const handleBack = () => {
    navigate("/seats");
  };

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ComboList combos={combos} onQuantityChange={handleQuantityChange} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderSummary totalPrice={totalComboPrice} />
          
          <Button variant="outlined" onClick={handleBack}>
            Quay lại
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Tiếp tục
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderMain;