import React, { useState } from 'react';
import { Box, Typography, Button, RadioGroup, FormControlLabel, Radio, TextField, Checkbox } from '@mui/material';
import styles from './Payment.module.scss';

// Danh sách các phương thức thanh toán với hình ảnh
const paymentMethods = [
  { value: 'momo', label: 'Ví MoMo', image: '/momo.png' },
  { value: 'qr', label: 'Quét mã QR', image: '/QuetQR.png' },
  { value: 'bank', label: 'Chuyển khoản / Internet Banking', image: '/bank.png' },
  { value: 'shopee', label: 'Ví ShopeePay', image: '/shopeepay.png' },
  { value: 'visa', label: 'Thẻ Visa, Master, JCB', image: '/visa.png' },
  { value: 'atm', label: 'Thẻ ATM (Thẻ nội địa)', image: '/atm.png' },
  { value: 'fpt', label: 'Ví FPT Pay', image: '/fptpay.png' },
  { value: 'moveek', label: 'Moveek Credits', image: '/moveek.png' },
];

const Payment = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  return (
    <Box className={styles.paymentPage}>
      <Box className={styles.leftSection}>
        {/* Tóm tắt đơn hàng */}
        <Box className={styles.orderSummary}>
          <Typography variant="h6">Tóm tắt đơn hàng</Typography>
          <Box className={styles.tableHeader}>
            <Typography className="cell">MÔ TẢ</Typography>
            <Typography className="cell">SỐ LƯỢNG</Typography>
            <Typography className="cell">THÀNH TIỀN</Typography>
          </Box>
          <Box className={styles.tableRow}>
            <Typography className="cell">Standard</Typography>
            <Typography className="cell">1</Typography>
            <Typography className="cell">60,000 đ</Typography>
          </Box>
          <Box className={styles.tableRow}>
            <Typography className="cell">Phí tiện ích</Typography>
            <Typography className="cell">-</Typography>
            <Typography className="cell">3,000 đ</Typography>
          </Box>
          <Box className={`${styles.tableRow} ${styles.totalRow}`}>
            <Typography className="cell"></Typography>
            <Typography className="cell">Tổng</Typography>
            <Typography className="cell">63,000 đ</Typography>
          </Box>
        </Box>

        {/* Hình thức thanh toán */}
        <Box className={styles.paymentMethods}>
          <Typography className={styles.paymentTitle}>Hình thức thanh toán</Typography>
          <RadioGroup defaultValue="momo" className={styles.methodList}>
            {paymentMethods.map((method) => (
              <FormControlLabel
                key={method.value}
                value={method.value}
                control={
                  <Radio
                    checkedIcon={<img src="/checkIcon.png" alt="checked" className={styles.icon} />}
                  />
                }
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

        {/* Thông tin cá nhân */}
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
            control={
              <Checkbox
                checked={isCreateAccount}
                onChange={(e) => setIsCreateAccount(e.target.checked)}
              />
            }
            label="Tạo tài khoản với email và số điện thoại này"
          />
        </Box>
      </Box>

      {/* Phần bên phải */}
      <Box className={styles.rightSection}>
        <Box className={styles.totalBox}>
          <Typography className={styles.totalPrice}>63,000 đ</Typography>
          <Typography className={styles.timer}>Thời gian giữ ghế: 04:17</Typography>
        </Box>

        <Typography className={styles.note}>
          Vé đã mua không thể đổi hoặc hoàn tiền. Mã vé sẽ được gửi qua số điện thoại và email đã nhập. Vui lòng kiểm tra lại thông tin trước khi tiếp tục.
        </Typography>

        <Button variant="contained" color="primary" className={styles.paymentButton}>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
