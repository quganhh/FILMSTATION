import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Header from "../../components/Header";
import { useLocation, Link } from "react-router-dom";
import styles from "./Payment.module.scss";
import emailjs from "@emailjs/browser";
const paymentMethods = [
  { value: "Momo", label: "Coming soon", image: "/momo.png" },
  {
    value: "bank",
    label: "Chuyển khoản / Internet Banking",
    image: "/bank.png",
  },
  { value: "ShopeePay", label: "Coming soon", image: "/shopeepay.png" },
  { value: "Visa", label: "Coming soon", image: "/visa.png" },
  { value: "moveek", label: "Coming soon", image: "/moveek.png" },
];

const formatCurrency = (value) => {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

function Payment() {
  const location = useLocation();
  const { selectedSeats, seatTotalPrice, combos, totalComboPrice } =
    location.state || {};
  const [openPopup, setOpenPopup] = useState(false); // Trạng thái popup
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false); // Trạng thái popup thành công
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank"); // Trạng thái phương thức thanh toán
  const [timeLeft, setTimeLeft] = useState(300); // Thời gian giữ ghế: 300 giây (5 phút)
  const totalPrice = seatTotalPrice + totalComboPrice;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const generateBookingId = () => {
    return Math.floor(10000 + Math.random() * 90000); // Tạo mã số ngẫu nhiên 5 chữ số
  };
  const handleEmail = async () => {
    const bookingId = generateBookingId();
    const currentDate = new Date();
    // Chuẩn bị template params cho email
    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      booking_id: bookingId,
      movie_name: "Nhím Sonic [NC18]", // Thay bằng tên phim từ state
      date_time: `${currentDate.toLocaleDateString(
        "vi-VN"
      )} - ${currentDate.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
      seats: `${selectedSeats.length} IT - Adult VIP (${selectedSeats.join(
        " "
      )}) - ${formatCurrency(seatTotalPrice)}`,
      food_drinks: combos
        .filter((combo) => combo.quantity > 0)
        .map((combo) => `${combo.name} x${combo.quantity}`)
        .join("\n"),
      cinema_room: "Mega Ly Chinh Thang - Screen 5", // Thay bằng thông tin rạp từ state
      payment_method: "Chuyển khoản QR", // Thay bằng phương thức thanh toán đã chọn
      total_amount: formatCurrency(totalPrice + 3000),
    };

    // Gửi email
    await emailjs.send(
      "service_o1ko59c", // Service ID từ EmailJS
      "template_82frj4n", // Template ID từ EmailJS
      templateParams,
      "2pCUgVhJ1r-NA-zbZ" // Public Key từ EmailJS
    );
  };
  const handlePayment = () => {
    if (selectedPaymentMethod === "bank") {
      setOpenPopup(true); // Hiển thị popup nếu chọn phương thức là "bank"
    } else {
      alert("Chỉ hỗ trợ thanh toán qua Chuyển khoản / Internet Banking!");
    }
  };

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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleClosePopup = () => {
    setOpenPopup(false); // Đóng popup
  };
  const handleConfirmPayment = () => {
    setOpenPopup(false); // Đóng popup đầu tiên
    setOpenSuccessPopup(true); // Mở popup thành công
    handleEmail();
  };

  const handleCloseSuccessPopup = () => {
    setOpenSuccessPopup(false); // Đóng popup thành công
  };

  return (
    <Box>
      <Header />
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
                <Typography className="cell">
                  {formatCurrency(100000)}
                </Typography>
              </Box>
            ))}
            {combos
              .filter((combo) => combo.quantity > 0)
              .map((combo) => (
                <Box key={combo.id} className={styles.tableRow}>
                  <Typography className="cell">{combo.name}</Typography>
                  <Typography className="cell">{combo.quantity}</Typography>
                  <Typography className="cell">
                    {formatCurrency(combo.price * combo.quantity)}
                  </Typography>
                </Box>
              ))}
            <Box className={styles.tableRow}>
              <Typography className="cell">Phí dịch vụ</Typography>
              <Typography className="cell"></Typography>
              <Typography className="cell">3.000</Typography>
            </Box>
            <Box className={`${styles.tableRow} ${styles.totalRow}`}>
              <Typography className="cell"></Typography>
              <Typography className="cell">Tổng</Typography>
              <Typography className="cell">
                {formatCurrency(totalPrice + 3000)}
              </Typography>
            </Box>
          </Box>
          <Box className={styles.paymentMethods}>
            <Typography className={styles.paymentTitle}>
              Hình thức thanh toán
            </Typography>
            <RadioGroup
              defaultValue="bank"
              className={styles.methodList}
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
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
        </Box>

        <Box className={styles.rightSection}>
          <Box className={styles.totalBox}>
            <Typography className={styles.totalPrice}>
              {formatCurrency(totalPrice + 3000)}
            </Typography>
            <Typography className={styles.timer}>
              Thời gian giữ ghế: {formatTime(timeLeft)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            className={styles.paymentButton}
            onClick={handlePayment}
          >
            Thanh toán
          </Button>
        </Box>

        {/* Popup hiển thị sau khi nhấn thanh toán */}
        <Dialog open={openPopup} onClose={handleClosePopup}>
          <DialogTitle>Xác nhận thanh toán</DialogTitle>
          <DialogContent>
            {/* Thêm hình ảnh mã QR */}
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <img
                src="/maqr.jpg"
                alt="QR Code"
                style={{ width: 350, height: 350 }}
              />
            </Box>
            <Typography sx={{ marginTop: 2 }}>
              Ấn xác nhận sau khi đã thanh toán xong
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePopup} color="secondary">
              Hủy
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleConfirmPayment}
            >
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>
        {/* Popup thành công */}
        <Dialog open={openSuccessPopup} onClose={handleCloseSuccessPopup}>
          <DialogTitle>Đang chờ xác nhận</DialogTitle>
          <DialogContent>
            <Typography>
              Cảm ơn bạn đã sử dụng dịch vụ! Thanh toán của bạn đang được xử lý,
              vui lòng chờ trong giây lát chúng tôi sẽ xác nhận giao dịch của
              bạn sớm nhất có thể. Thông tin mã vé đã được gửi đến email và số
              điện thoại bạn cung cấp.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Link to="/">
              <Button onClick={handleCloseSuccessPopup} color="primary">
                Đóng
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Payment;
