import { Box, Button, Grid, Typography } from "@mui/material";
import classes from "./FirstBanner.module.css";

const FirstBanner = () => {
  return (
    <Grid container direction={{ xs: "column-reverse", md: "row" }} sx={{ padding: {xs: "0", md: "0 6rem"}}}>
      <Grid item xs={12} md={6} sx={{ background: "#4c50e0", p: "8% 5%" }}>
        <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
          <Typography variant="h2" sx={{ fontWeight: 700, m: "2% 0" }}>
            India’s{" "}
            <Box component={"span"} sx={{ color: " #ffba09" }}>
              #1
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, m: "2% 0" }}>
            Legal Software for new clients, billing, payments, and cases
          </Typography>
          <Typography variant={"h5"} sx={{ m: "2% 0" }}>
            Empowering legal practice of 10,000 Lawyers in India
          </Typography>
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ textTransform: "none", m: "2% 0", p: "2% 6%" }}
        >
          <Box sx={{color: "#ffffff"}}>Get Started</Box>
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box component={"div"} className={classes.image} sx={{backgroundSize: {xs: "cover", md:"none"}}}></Box>
      </Grid>
    </Grid>
  );
};

export default FirstBanner;
