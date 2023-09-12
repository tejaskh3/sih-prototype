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
        border: "2px solid #B19CD9",
        width: "80%",
        height: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "9px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#E6E6FA",
        },
        "&:active": {
          transform: "scale(1.0)",
          transition: "transform 0.1s ease",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={{
              width: 130,
              height: 140,
              borderRadius: "20px",
              marginX:"25px",
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
                  margin: "0 30px 0 0", // Adjusted margin for better spacing
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
                  margin: "0 30px 0 0", // Adjusted margin for better spacing
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

export default function Mediators() {

  const advocates = [
    {
      name: "Rashmi Gulati",
      city: "Civil Lines, Delhi",
      experience: "7",
      language: "Hindi, English",
      rating: "4.2",
      callcharge: "15",
      skill: ["Conflict resolution", "Communication improvement"],
      image:
        "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tZW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      name: "G.K. Marwah",
      city: "Dwarka, Delhi",
      experience: "5",
      language: "English, Bengali",
      rating: "5",
      callcharge: "30",
      skill: ["Dispute resolution", "Agreement facilitation"],
      image:
        "https://media.licdn.com/dms/image/C4E03AQF33rkwlMfPNA/profile-displayphoto-shrink_800_800/0/1646215587279?e=2147483647&v=beta&t=GdiOg7fAdF_hFB5FEKzxDvrM-HE-jE8ZaJ2aC5tym2M",
    },
    {
      name: "Madhvi Kulshreshta",
      city: "Bangalore, Karnataka",
      experience: "24",
      language: "Hindi, Bengali, Marathi",
      rating: "4.3",
      callcharge: "90",
      skill: ["Relationship mending", "Decision-making support"],
      image:
        "https://media.istockphoto.com/id/1213300831/photo/senior-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5PoBMM0PNjh3wffxbWGIO6-gjc0M8t6ukOPsekRBlzc=",
    },
    {
      name: "Sanjay Sharma",
      city: "Kolkata, West Bengal",
      experience: "7",
      language: "Hindi, English",
      rating: "4.2",
      callcharge: "20",
      image:
        "https://st.depositphotos.com/1093689/1373/i/450/depositphotos_13736150-stock-photo-close-up-image-of-happy.jpg",
      skill: ["Impartial guidance", "Collaborative problem-solving"],
    },
  ];

  return (
    <>  
      {advocates.map((advocate, index) => (
        <Advocate key={index} {...advocate} />
      ))}
    </>
  );
}
