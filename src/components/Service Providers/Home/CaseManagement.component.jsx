import { Box, Grid, Typography } from "@mui/material";
import classes from "./CaseManagement.module.css";

const CaseManagement = () => {
  return (
    <Grid
      container
      direction={{
        xs: "column-reverse",
        md: "row",
      }}
      px={{ xs: 2, md: 18 }}
      py={{ md: 2 }}
    >
      <Grid item xs={12} md={6} minHeight={{ md: "fit-content" }}>
        <Box
          component={"div"}
          className={classes.image}
          sx={{ backgroundSize: "contain" }}
        ></Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        py={{ xs: 4, md: 25 }}
        pr={{ md: 18 }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography color="#1211278F" fontSize={20}>
          <Typography
            color="secondary"
            fontSize={{ xs: 30, md: 35 }}
            fontWeight={800}
          >
            <Box component={"span"} color="black">
              Case
            </Box>{" "}
            Management
          </Typography>
          <Typography
            color="#6068db"
            fontSize={{ xs: 23, md: 25 }}
            fontWeight={800}
            sx={{ padding: "2rem 0 0.75rem" }}
          >
            Organize Every Case Detail
          </Typography>
          Add cases from any courts in India and get updates on it like next
          date of hearing, court orders. Manage related documents, notes, dates
          and working team on it.
          <Typography
            color="#6068db"
            fontSize={25}
            fontWeight={800}
            sx={{ padding: "2rem 0 0.75rem" }}
          >
            Add clients to cases
          </Typography>
          Add clients to the cases and keep them updated with dates, documents,
          and orders.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CaseManagement;
