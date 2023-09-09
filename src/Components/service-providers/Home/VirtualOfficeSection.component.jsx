import { Box, Grid, Typography } from "@mui/material";

const VirtualOffice = () => {
  return (
    <Box component="div" pt={10} sx={{ backgroundColor: "#444bd3" }}>
      <Box maxWidth={"80%"} mx={"auto"} textAlign={"center"} mb={8}>
        <Typography fontSize={{ xs: 30, md: 45 }} fontWeight={700}>
          LegalBazaar is your virtual law office
          <Typography fontSize={22} color="#FFFFFF8F">
            Award-winning and industry-leading technology to create your own Law
            office and more with no extra cost.
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#3638bc" }}>
        <Grid
          container
          maxWidth={{ md: "80%" }}
          mx={"auto"}
          textAlign={"center"}
        >
          <Grid item xs={12} md={4} py={6}>
            <Typography fontSize={30} fontWeight={800}>
              24/7
            </Typography>
            <Typography fontWeight={700} maxWidth={{xs: "70%",md:"60%"}} mx="auto">
              Get customer support from a young and enthusiastic team dedicated
              to you.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} py={6} sx={{ backgroundColor: "#3f43c8" }}>
            <Typography fontSize={30} fontWeight={800}>
              Grow Practice
            </Typography>
            <Typography fontWeight={700} maxWidth={{xs: "70%",md:"60%"}} mx="auto">
              Get an opportunity to connect and respond to enquiries from all
              over the world.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} py={6}>
            <Typography fontSize={30} fontWeight={800}>
              Secure
            </Typography>
            <Typography fontWeight={700} maxWidth={{xs: "70%",md:"60%"}} mx="auto">
              Protect your client information and firm’s data with the world’s
              most secure servers on AWS.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VirtualOffice;
