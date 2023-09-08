import { Grid, Typography } from "@mui/material";

const SecureFeatures = () => {
  return (
    <Grid container sx={{ py: 5, padding: { xs: "5 0", md: "0 6rem" } }}>
      <Grid item xs={12} md={4} padding={{ xs: 2, md: 8 }}>
        <Typography color="grey">
          <Typography variant="h6" color="black" sx={{ fontWeight: 700 }}>
            Secure Cloud
          </Typography>
          Secure cloud Storage for easy access to your data anytime any place.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} padding={{ xs: 2, md: 8 }}>
        <Typography color="grey">
          <Typography variant="h6" color="black" sx={{ fontWeight: 700 }}>
            Most Preferred
          </Typography>
          Used by more than 10,000 Lawyers in more than 900 locations in India.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} padding={{ xs: 2, md: 8 }}>
        <Typography color="grey">
          <Typography variant="h6" color="black" sx={{ fontWeight: 700 }}>
            Virtual office
          </Typography>
          Your virtual office Build, Manage and grow your Legal Practice from
          anywhere.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SecureFeatures;
