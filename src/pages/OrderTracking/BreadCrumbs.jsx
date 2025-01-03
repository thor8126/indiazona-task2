import React from "react";
import {
  Breadcrumbs,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadCrumbs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize={isMobile ? "small" : "large"} />}
      sx={{
        mb: 1,
        "& .MuiBreadcrumbs-separator": {
          mx: isMobile ? 0.6 : 1,
        },
      }}
    >
      <Link
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
        }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Home
      </Link>
      <Link
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
        }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Orders
      </Link>
      <Link
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
        }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Order Tracking
      </Link>
      <Typography
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
        }}
        color="inherit"
      >
        Product Return
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
