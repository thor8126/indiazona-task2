import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function BreadCrumbs() {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      sx={{ mb: 1 }}
    >
      <Link
        sx={{ fontSize: "0.9rem" }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Home
      </Link>
      <Link
        sx={{ fontSize: "0.9rem" }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Orders
      </Link>
      <Link
        sx={{ fontSize: "0.9rem" }}
        underline="hover"
        color="inherit"
        href="#"
      >
        Order Tracking
      </Link>
      <Typography sx={{ fontSize: "0.9rem" }} color="inherit">
        Product Return
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
