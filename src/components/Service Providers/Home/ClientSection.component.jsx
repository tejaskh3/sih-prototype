import { Box, Grid, Typography } from "@mui/material";
import classes from "./ClientSection.module.css";
const ClientSection = () => {
  return (
    <Grid container sx={{ backgroundColor: "#6068db" }} py={2}>
      <Grid item xs={12} md={6} px={{ xs: 0, md: 18}} py={18}>
        <Typography color="#ffffff8f" fontSize={20}>
          <Typography color="#fff" fontSize={35} fontWeight={800}>
            Add new Client
          </Typography>
          <Typography
            color="#fff"
            fontSize={25}
            fontWeight={800}
            sx={{ padding: "2rem 0 0.75rem" }}
          >
            Grow with new client onboarding
          </Typography>
          Respond to client enquiries from all over the world and create connect
          with those who need your help.
          <Typography
            color="#fff"
            fontSize={25}
            fontWeight={800}
            sx={{ padding: "2rem 0 0.75rem" }}
          >
            Stay connected with clients
          </Typography>
          Easily schedule consultations and accept payments. Share and accept
          documents from clients. Chat with them at your convenience.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} py={2}>
        <Box
          component={"div"}
          className={classes.image}
          sx={{ backgroundSize: { xs: "cover", md: "contain" } }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default ClientSection;
