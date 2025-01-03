import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function DeliveryInfo({
  deliveryInfo,
  isCancelled,
  setIsCancelledModalOpen,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          paddingX: { xs: 2, sm: 3 },
          paddingY: { xs: 1, sm: 3 },
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", sm: "80%" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Delivery</Typography>
          <Button
            sx={{
              fontSize: "12px",
              fontWeight: "regular",
              padding: "4px 14px",
              textTransform: "none",
              borderColor: "#D1D5DB",
              color: "#6B7280",
              "&:hover": {
                borderColor: "#455F76",
              },
            }}
            variant="outlined"
          >
            Change
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.address}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.city}
            {", "}
            {deliveryInfo.country}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.phone}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            Mob: {deliveryInfo.mobile}
          </Typography>
        </Box>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3 },
          flex: 1,
        }}
      >
        <Typography variant="h6">Need Help</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Button
            startIcon={<ChatOutlinedIcon />}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            Chat with us
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0347 11.8058C13.9565 11.7277 13.9072 11.6207 13.9072 11.4973L13.9072 6.93949L9.34933 6.93949C9.11074 6.93949 8.91329 6.74204 8.91329 6.50345C8.91329 6.26486 9.11074 6.06741 9.34933 6.06741L14.3432 6.06741C14.5818 6.06741 14.7792 6.26486 14.7792 6.50345L14.7792 11.4973C14.7792 11.7359 14.5818 11.9333 14.3432 11.9333C14.2239 11.9375 14.1128 11.884 14.0347 11.8058Z"
                fill="#455F76"
              />
              <path
                d="M7.04162 13.805C6.87297 13.6364 6.87297 13.3567 7.04162 13.188L13.9647 6.26488C14.1334 6.09622 14.4131 6.09622 14.5818 6.26488C14.7504 6.43353 14.7504 6.71325 14.5818 6.88191L7.65866 13.805C7.49 13.9737 7.21028 13.9737 7.04162 13.805Z"
                fill="#455F76"
              />
            </svg>
          </Button>
          {isCancelled ? (
            <></>
          ) : (
            <Button
              onClick={() => setIsCancelledModalOpen(true)}
              startIcon={<CancelOutlinedIcon />}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: "error.main",
                borderColor: "error.main",
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "medium",
              }}
            >
              Cancel Order
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0629 11.8097C13.9845 11.7314 13.9351 11.6242 13.9351 11.5005L13.9351 6.93286L9.3674 6.93286C9.1283 6.93286 8.93042 6.73498 8.93042 6.49588C8.93042 6.25678 9.1283 6.0589 9.3674 6.0589L14.372 6.0589C14.6111 6.0589 14.809 6.25678 14.809 6.49588L14.809 11.5005C14.809 11.7396 14.6111 11.9375 14.372 11.9375C14.2525 11.9416 14.1412 11.888 14.0629 11.8097Z"
                  fill="#FF5252"
                />
                <path
                  d="M7.05471 13.8132C6.88569 13.6442 6.88569 13.3639 7.05471 13.1949L13.9928 6.25681C14.1618 6.08779 14.4421 6.08779 14.6111 6.25681C14.7802 6.42583 14.7802 6.70616 14.6111 6.87518L7.67308 13.8132C7.50406 13.9823 7.22373 13.9823 7.05471 13.8132Z"
                  fill="#FF5252"
                />
              </svg>
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
