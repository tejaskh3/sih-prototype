import { Box, Grid, Typography } from "@mui/material";
import classes from "./BillingSection.module.css";

const BillingSection = () => {
  return (
    <Box component="div" py={{ md: 8 }} px={{ md: 3 }}>
      <Grid
        container
        borderRadius={{ md: 7 }}
        sx={{ backgroundColor: "#f2f3ff" }}
      >
        <Grid item xs={12} md={6} py={{ xs: 5, md: 18 }}>
          <Box
            maxWidth={{ md: "65%" }}
            mt={{ md: -3 }}
            ml={{ md: 22 }}
            px={{ xs: 3, md: 0 }}
            textAlign={{ xs: "center", md: "unset" }}
          >
            <Typography
              fontSize={{ xs: 32, md: 40 }}
              fontWeight={700}
              color="#121127"
            >
              Billing And{" "}
              <Typography component="span" variant="inherit" color="#444bd3">
                Payments
              </Typography>
            </Typography>
            <Typography
              fontSize={{ xs: 28, md: 30 }}
              fontWeight={600}
              color="#6068db"
              py={3}
            >
              Bill it in real-time
              <Typography fontSize={20} color="#1211278F">
                One-click payment request to the client. Track all client
                payments, send reminders and much more. Get Realtime update when
                a client pays. Download funds in account as soon as T+2 days.
              </Typography>
            </Typography>
            <Typography
              fontSize={{ xs: 28, md: 30 }}
              fontWeight={600}
              color="#6068db"
            >
              Customer confidence
              <Typography fontSize={20} color="#1211278F">
                Professionally designed payment pages, increase the confidence
                of users in payments.
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="div" className={classes.image} sx={{marginLeft: {xs: 4, md:0}}}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillingSection;
