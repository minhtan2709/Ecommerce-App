import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Nền tảng thương mại điện tử hiện đại, mang đến trải nghiệm mua sắm trực tuyến tiện lợi, an toàn và nhanh chóng.
            Với hàng ngàn sản phẩm đa dạng, chất lượng cùng dịch vụ chăm sóc khách hàng tận tâm, chúng tôi cam kết đáp ứng mọi nhu cầu mua sắm của bạn – mọi lúc, mọi nơi.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Về Chúng Tôi
          </Typography>
          <Typography mb="30px">Tuyển Dụng</Typography>
          <Typography mb="30px">Cửa Hàng Của Chúng Tôi</Typography>
          <Typography mb="30px">Điều Khoản & Điều Kiện</Typography>
          <Typography mb="30px">Chính Sách Bảo Mật</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Hỗ Trợ Khách Hàng
          </Typography>
          <Typography mb="30px">Trung Tâm Trợ Giúp</Typography>
          <Typography mb="30px">Theo Dõi Đơn Hàng</Typography>
          <Typography mb="30px">Mua Sỉ & Doanh Nghiệp</Typography>
          <Typography mb="30px">Đổi Trả & Hoàn Tiền</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Liên Hệ Với Chúng Tôi
          </Typography>
          <Typography mb="30px">
            Penacony
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: 22h1120116@ut.edu.vn
          </Typography>
          <Typography mb="30px">(+84)77 467 4857</Typography>
        </Box>
      </Box>  
    </Box>
  );
}

export default Footer;
