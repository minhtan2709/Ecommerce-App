import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Thành công</AlertTitle>
        Bạn đã đặt hàng thành công — {" "}
        <strong>Chúc mừng bạn đã hoàn tất mua sắm!</strong>

      </Alert>
    </Box>
  );
};

export default Confirmation;
