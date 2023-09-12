import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import classes from "./FirstBanner.module.css";

const FirstBanner = () => {
  const theme = useTheme();

  return (
    <Grid container direction={{ xs: "column-reverse", md: "row" }} sx={{ padding: {xs: "0", md: "0 6rem"}}}>
      <Grid item xs={12} md={6} sx={{ background: theme.palette.secondary.main, p: "8% 5%" }}>
        <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
          <Typography variant="h2" sx={{ fontWeight: 700, m: "2% 0" }}>
            India’s{" "}
            <Box component={"span"} sx={{ color: theme.palette.primary.main}}>
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
          sx={{ textTransform: "none", m: "2% 0", p: "2% 8%" }}
        >
          <Typography fontSize={22} sx={{color: "#ffffff"}}>Get Started</Typography>
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box component={"div"} className={classes.image} sx={{backgroundSize: {xs: "cover", md:"none"}}}></Box>
      </Grid>
    </Grid>
  );
};

export default FirstBanner;
