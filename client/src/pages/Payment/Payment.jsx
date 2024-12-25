import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Checkbox,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "./Payment.module.scss";

const paymentMethods = [
  { value: "momo", label: "Ví MoMo", image: "/momo.png" },
  { value: "qr", label: "Quét mã QR", image: "/QuetQR.png" },
  { value: "bank", label: "Chuyển khoản / Internet Banking", image: "/bank.png" },
  { value: "shopee", label: "Ví ShopeePay", image: "/shopeepay.png" },
  { value: "visa", label: "Thẻ Visa, Master, JCB", image: "/visa.png" },
  { value: "atm", label: "Thẻ ATM (Thẻ nội địa)", image: "/atm.png" },
  { value: "fpt", label: "Ví FPT Pay", image: "/fptpay.png" },
  { value: "moveek", label: "Moveek Credits", image: "/moveek.png" },
];


const formatCurrency = (value) => {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

function Payment() {
  const location = useLocation();
  const { selectedSeats, seatTotalPrice, combos, totalComboPrice } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(300); // Thời gian giữ ghế: 300 giây (5 phút)
  const totalPrice = seatTotalPrice + totalComboPrice;

  // Đếm ngược thời gian giữ ghế
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Chuyển đổi thời gian thành định dạng phút:giây
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Box className={styles.paymentPage}>
      <Box className={styles.leftSection}>
        <Box className={styles.orderSummary}>
          <Typography variant="h6">Tóm tắt đơn hàng</Typography>
          <Box className={styles.tableHeader}>
            <Typography className="cell">MÔ TẢ</Typography>
            <Typography className="cell">SỐ LƯỢNG</Typography>
            <Typography className="cell">THÀNH TIỀN</Typography>
          </Box>
          {selectedSeats.map((seat, index) => (
            <Box key={index} className={styles.tableRow}>
              <Typography className="cell">Ghế: {seat}</Typography>
              <Typography className="cell">1</Typography>
              <Typography className="cell">{formatCurrency(100000)}</Typography>
            </Box>
          ))}
          {combos
            .filter((combo) => combo.quantity > 0)
            .map((combo) => (
              <Box key={combo.id} className={styles.tableRow}>
                <Typography className="cell">{combo.name}</Typography>
                <Typography className="cell">{combo.quantity}</Typography>
                <Typography className="cell">{formatCurrency(combo.price * combo.quantity)}</Typography>
              </Box>
            ))}
          <Box className={`${styles.tableRow} ${styles.totalRow}`}>
            <Typography className="cell"></Typography>
            <Typography className="cell">Tổng</Typography>
            <Typography className="cell">{formatCurrency(totalPrice + 3000)}</Typography>
          </Box>
        </Box>

        <Box className={styles.paymentMethods}>
          <Typography className={styles.paymentTitle}>
            Hình thức thanh toán
          </Typography>
          <RadioGroup defaultValue="momo" className={styles.methodList}>
            {paymentMethods.map((method) => (
              <FormControlLabel
                key={method.value}
                value={method.value}
                control={<Radio />}
                label={
                  <Box className={styles.methodItem}>
                    <img src={method.image} alt={method.label} />
                    <Typography>{method.label}</Typography>
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </Box>

        <Box className={styles.personalInfo}>
          <Typography variant="h6" className={styles.sectionTitle}>
            Thông tin cá nhân
          </Typography>
          <TextField
            label="Họ và tên"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Số điện thoại"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Tạo tài khoản với email và số điện thoại này"
          />
        </Box>
      </Box>

      <Box className={styles.rightSection}>
        <Box className={styles.totalBox}>
          <Typography className={styles.totalPrice}>{formatCurrency(totalPrice + 3000)}</Typography>
          <Typography className={styles.timer}>
            Thời gian giữ ghế: {formatTime(timeLeft)}
          </Typography>
        </Box>

        <Typography className={styles.note}>
          Vé đã mua không thể đổi hoặc hoàn tiền. Mã vé sẽ được gửi qua số điện
          thoại và email đã nhập. Vui lòng kiểm tra lại thông tin trước khi tiếp
          tục.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={styles.paymentButton}
        >
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
}

export default Payment;
