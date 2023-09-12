import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import StarIcon from "@mui/icons-material/Star";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Advocate({
  name,
  city,
  experience,
  language,
  callcharge,
  rating,
  image,
  skill,
}) {
  return (
    <Paper
      sx={{
        p: 3,
        margin: "40px auto",
        border: "1px solid #ddd",
        maxWidth: 650,
        height: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, background-color 0.3s ease", // Added transition for transform and background-color properties
        "&:hover": {
          transform: "translateY(-10px)",
          backgroundColor: "#f0f3ff", // Change the background color on hover
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={{
              width: 130,
              height: 128,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.07)",
              },
            }}
          >
            <Img
              alt="complex"
              src={image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#2f8e39", fontSize: "12px", fontStyle: "italic" }}
              >
                Available
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#121127", fontSize: "12px" }}
              >
                <LocationOnIcon sx={{ height: "14px", color: "grey" }} />
                {city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#121127", fontSize: "12px" }}
              >
                <WorkIcon sx={{ height: "14px", color: "grey" }} />
                {experience} years of experience
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#121127", fontSize: "12px" }}
              >
                <ChatIcon sx={{ height: "14px", color: "grey" }} />
                Languages: {language}
              </Typography>
            </Grid>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                margin: "10px 0px 0px 14px",
                gap: "7px",
              }}
            >
              {skill.map((s, index) => (
                <Typography
                  key={index}
                  sx={{
                    border: "0.5px solid rgba(18,17,34,.62)",
                    fontWeight: "500",
                    fontSize: "10px",
                    padding: "3px 7px",
                    textAlign: "center",
                    marginBottom: "7px",
                    color: "rgba(18,17,39,.82)",
                  }}
                >
                  {s}
                </Typography>
              ))}
            </div>
            <Grid item sx={{ display: "flex" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#3237cf",
                  margin: "0 8px 0 0", // Adjusted margin for better spacing
                  padding: "9px 8px 0px 8px", // Added padding for better readability
                  border: "1px solid #3056d3", // Increased border width for visibility
                  borderRadius: "5px",
                  fontSize: "12px",
                  display: "inline-block", // Ensure inline-block display for the background color to work
                  backgroundColor: "#f0f3ff", // Added a background color for better visibility
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
                  transition: "background-color 0.2s ease-in-out", // Optional: Add a hover effect
                  "&:hover": {
                    backgroundColor: "#dfe3ff", // Optional: Change background color on hover
                  },
                }}
                variant="body2"
              >
                Call charge: Rs.{callcharge}/min
              </Typography>

              <Typography
                sx={{
                  cursor: "pointer",
                  border: "1px solid #54c55f", // Increased border width for visibility
                  color: "#3fb94b",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  height: "36px",
                  minWidth: "92px",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  margin: "0 10px 0 0", // Adjusted margin for better spacing
                  padding: "0 10px", // Added padding for better readability
                  backgroundColor: "#f0fff0", // Added a background color for better visibility
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
                  transition: "background-color 0.2s ease-in-out", // Optional: Add a hover effect
                  "&:hover": {
                    backgroundColor: "#d3fcd3", // Optional: Change background color on hover
                  },
                }}
                variant="body2"
              >
                <CallIcon
                  sx={{ width: "auto", height: "10px", marginRight: "5px" }}
                />
                Call Now
              </Typography>

              <Typography
                sx={{
                  cursor: "pointer",
                  border: "1px solid #3056d3", // Increased border width for visibility
                  color: "#3237cf",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                  height: "36px",
                  fontSize: "12px",
                  minWidth: "92px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  margin: "0 10px 0 0", // Adjusted margin for better spacing
                  padding: "0 10px", // Added padding for better readability
                  backgroundColor: "#f0f3ff", // Added a background color for better visibility
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
                  transition: "background-color 0.2s ease-in-out", // Optional: Add a hover effect
                  "&:hover": {
                    backgroundColor: "#dfe3ff", // Optional: Change background color on hover
                  },
                }}
                variant="body2"
              >
                <VideocamIcon
                  sx={{ width: "auto", height: "10px", marginRight: "5px" }}
                />
                Internet Call
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "35px",
                fontSize: "12px",
                color: "#fff",
                backgroundColor: "#2f8e39",
                borderRadius: "4px",
                padding: "4px 8px", // Increased padding for better readability and spacing
                userSelect: "none", // Prevent text selection
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
                transition: "background-color 0.2s ease-in-out", // Optional: Add a hover effect
                "&:hover": {
                  backgroundColor: "#279633", // Optional: Change background color on hover
                },
              }}
            >
              {rating}
              <StarIcon
                sx={{
                  fontSize: "14px", // Increased star font size
                  marginLeft: "4px", // Adjusted spacing between rating and star
                }}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function Advocates() {
  const advocates = [
    {
      name: "Mishi Choudhary",
      city: "Hyderabad, Telangana",
      experience: "7",
      language: "Hindi, English",
      rating: "4.2",
      callcharge: "15",
      skill: ["Civil Matters", "Property & Real Estate"],
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5f9994fa44131b4c93e33288/0x0.jpg?format=jpg&crop=3620,3620,x0,y426,safe&width=1200",
    },
    {
      name: "Harish Salve",
      city: "Gurgaon, Haryana",
      experience: "5",
      language: "English, Bengali",
      rating: "5",
      callcharge: "30",
      skill: ["Cyber Crime", "Child Custody"],
      image:
        "https://mattersindia.com/wp-content/uploads/2023/07/jose-abraham1.jpg",
    },
    {
      name: "Meenakshi Lekhi",
      city: "Bangalore, Karnataka",
      experience: "24",
      language: "Hindi, Bengali, Marathi",
      rating: "4.2",
      callcharge: "90",
      skill: ["Criminal Cases", "Other Legal Problem"],
      image:
        "https://media.istockphoto.com/id/1326920136/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=tDhOPNMfBUlZLy5titrUrOXfHVbhVosEoQveTwuuL1Y=",
    },
    {
      name: "Mukul Rohatgi",
      city: "Kolkata, West Bengal",
      experience: "7",
      language: "Hindi, English",
      rating: "4.2",
      callcharge: "20",
      image: "https://miro.medium.com/v2/resize:fit:320/0*e1ck6_6iwVXb3Ldc.jpg",
      skill: ["Company & Startups", "Divorce"],
    },
  ];

  return (
    <div>
      {advocates.map((advocate, index) => (
        <Advocate key={index} {...advocate} />
      ))}
    </div>
  );
}
