import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Notary() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      documentType: data.get("documentType"),
      location: data.get("location"),
      identification: data.get("number"),
      date: data.get("date"),
      contact: data.get("contact"),
    });
    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: "none", // Hide the image on mobile view
            [defaultTheme.breakpoints.up("sm")]: {
              display: "block",
              backgroundImage:
                "url(https://wmmlegal.com/wp-content/uploads/2022/06/shutterstock_1885789960-scaled.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{
                m: "auto",
                bgcolor: "success.main",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ fontSize: "36px" }} />{" "}
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: "550",
                color: "primary.main",
                margin: "0px 0px 10px 0px",
                textTransform: "uppercase",
              }}
            >
              Complete the Essential Information
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                textAlign: "center",
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              The key to notarization
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="document-type"
                label="Type Of Document"
                name="documentType"
                autoComplete="documentType"
                autoFocus
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                Ex: Contract, Deed, Affidavit, etc
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="location"
                label="Location"
                type="location"
                id="location"
                autoComplete="current-password"
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                Enter Your Current Location
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                label="Identification"
                type="number"
                id="number"
                autoComplete="current-number"
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                Enter a Government-Issued ID
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                label="Preferred Date"
                type="date"
                id="date"
                autoComplete="current-date"
                autoFocus
                InputLabelProps={{ shrink: true }}
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                Enter Preffered Date for Notarization
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="contact"
                label="Contact Information"
                type=""
                id="contact"
                autoComplete="current-password"
              />
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                  fontSize: "12px",
                }}
              >
                Enter your 10-digit Mobile Number
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
              >
                Submit
              </Button>

              <Tooltip
                title="Please ensure all fields are completed accurately. Once submitted, our agent will contact you within 24 hours."
                arrow
                sx={{ textAlign: "center" }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#DC143C",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  *Important: Read this before submitting the form
                </span>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
