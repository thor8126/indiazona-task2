import React from "react";
import { Box, Container, Stack, useTheme, useMediaQuery } from "@mui/material";

import BreadCrumbs from "./BreadCrumbs";
import img from "./image.png";

import ProductDetail from "./ProductDetail";
import ReturnForm from "./ReturnForm";

const OrderTracking = () => {
  const data = {
    product: {
      brand: "SAMSUNG",
      name: "SAMSUNG Galaxy F05 - Twilight Blue (64 GB, 4 GB RAM)",
      price: "11,139.33",
      discount: "35% off",
      img: img,
    },
    trackingData: {
      orderId: "3354-6546-5452",
      orderConfirmedDate: "Dec 24, 2024",
      estimatedDelivery: "Dec 30, 2024",
      orderConfirmedDay: "Tue, 24th Dec",
      orderConfirmedTime: "6:12 AM",
      expectedBy: "Mon 30th",
      orderConfirmedWithYear: "Tue, 24th Dec '24",
      sellerMsg: "Seller has processed your order",
      pickupData: "Wed, 25th Dec '24 - 7:05pm",
      shippedData: "Wed, 25th Dec '24 - 8:12pm",
      shippedDay: "Sun, 15th Sep '24",
      shippedMsg: "Order ID or pick up ID - Your item has been shipped.",
      delieveryExpected: "Thu 19th Sep",
    },
    deliveryInfo: {
      address: "847 Jewess Bridge Apt.",
      city: "174 London",
      country: "UK",
      phone: "474-769-3919",
      mobile: "7766449345",
    },
    summary: {
      mrp: 13349.54,
      discount: 20,
      delivery: 0,
      tax: 149.54,
      total: 11139.33,
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={{ xs: 2, md: 2 }}>
        <BreadCrumbs />

        {isMobile ? (
          // Mobile Layout
          <Stack spacing={1}>
            <ProductDetail product={data.product} />
            <ReturnForm trackingData={data.trackingData} />
          </Stack>
        ) : (
          // Desktop Layout
          <Box
            sx={{
              display: "flex",
              gap: { md: 2, lg: 3 },
            }}
          >
            {/* LeftSection */}
            <Box
              sx={{
                width: { md: "35%", lg: "30%" },
                minWidth: { md: "300px" },
              }}
            >
              <ProductDetail product={data.product} />
            </Box>

            {/* RightSection */}
            <Stack
              spacing={1}
              sx={{
                flex: 1,
              }}
            >
              <ReturnForm trackingData={data.trackingData} />
            </Stack>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default OrderTracking;
