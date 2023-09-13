import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const content = [
  {
    heading: "Focus on Building Your Startup",
    desc: "Leave your legal worries to us",
    image:
      "https://legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/startup-banner1.webp",
  },
  {
    heading: "Don’t let questions about",
    desc: "Kill your Startup idea  Take Legal Advice from Industry Legal Experts!",
    image:
      "https://legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/startup-banner3.webp",
  },
  {
    heading: "Your One-stop Solution for all LEGAL and COMPLIANCE needs",
    desc: "Be it Company Formation or Business Registrations or Documentation, LegalKart has solutions for all",
    image:
      "https://legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/startup-banner2.webp",
  },
];

export default function Startup() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2500}
      style={{ height: "470px", }} // Set a specific height for the carousel
    >
      {content.map((item, index) => (
        <div key={index}>
          <Paper
            sx={{
              p: 4,
              maxWidth: "95%",
              height: "470px",
              margin: "10px auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
              borderRadius: "10px", // Add rounded corners
              
            }}
          >
            <div>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: "1.5",
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontFamily: "Arial, sans-serif", // Add a specific font-family
                  textTransform: "capitalize", // Capitalize the text
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Add a subtle text shadow
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "2",
                  marginBottom: "10px",
                  paddingRight: "20px",
                  textAlign: "left",
                  fontFamily: "Helvetica, Arial, sans-serif", // Specify a font-family
                  fontStyle: "italic", // Apply italic style
                  textTransform: "none", // Reset text transform
                  letterSpacing: "0.5px", // Add slight letter-spacing
                }}
              >
                {item.desc}
              </Typography>

              <div>
                <Typography
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#278cf3",
                    color: "#fff",
                    fontSize: "14px",
                    margin: "40px auto",
                    padding: "15px 50px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                    border: "none",
                    
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                      fontWeight:"bold",
                    },
                  }}
                >
                  Know More
                </Typography>
              </div>
            </div>

            <div>
              <ButtonBase sx={{ width: "100%", height: "100%" }}>
                <Img
                  alt="complex"
                  src={item.image}
                  sx={{ width: "90%", height: "100%" }}
                />
              </ButtonBase>
            </div>
          </Paper>
        </div>
      ))}
    </Carousel>
  );
}
