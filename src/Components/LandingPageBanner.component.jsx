import { Box, Grid, Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import classes from "./LandingPageBanner.module.css";

const LandingPageBanner = () => {
  return (
    <Box p={{ xs: 2, md: 9 }}>
      <Box
        display={{ md: "none" }}
        component={"div"}
        className={classes["outer-div"]}
        height={"70vh"}
      >
        <Box>
          <Typography
            fontSize={{ xs: 25, md: 40 }}
            fontWeight={600}
            color="black"
          >
            {"Bringing all of India's"}{" "}
            <Typography
              component={"div"}
              fontSize={{ xs: 27, md: 50 }}
              fontWeight={800}
              color="secondary"
              sx={{ backgroundColor: "#f2f3ff" }}
            >
              Legal Service Providers
            </Typography>{" "}
            together on a single platform
          </Typography>
        </Box>
      </Box>

      <Box display={{ xs: "none", md: "unset" }}>
        <Grid container minHeight={"60%"} py={5}>
          <Grid item md={6}>
            <Box className={classes.image}></Box>
          </Grid>
          <Grid item md={6} py={{ md: 8 }}>
            <Box
              component="div"
              my="auto"
              sx={{
                background: "url(../../assets/landing-page.jpg)",
                minHeight: "100%",
                backgroundSize: "cover",
              }}
            >
              <Typography
                fontSize={{ xs: 25, md: 40 }}
                fontWeight={600}
                color="black"
                px={2}
              >
                {"Bringing all of India's"}{" "}
              </Typography>
              <Typography
                component={"div"}
                fontSize={{ xs: 27, md: 50 }}
                fontWeight={800}
                color="secondary"
                sx={{ backgroundColor: "#f2f3ff" }}
                px={2}
                borderRadius={5}
              >
                Legal Service Providers
                <Typography
                  fontSize={"inherit"}
                  fontWeight={"inherit"}
                  color="#ffb703"
                >
                  <Box>
                    <TypewriterComponent
                      options={{
                        strings: [
                          "Advocate",
                          "Arbitrators",
                          "Mediators",
                          "Notaries",
                          "Document Writers",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    ></TypewriterComponent>
                  </Box>
                </Typography>
              </Typography>{" "}
              <Typography
                fontSize={{ xs: 25, md: 40 }}
                fontWeight={600}
                color="black"
                px={2}
              >
                together on a single platform
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPageBanner;
