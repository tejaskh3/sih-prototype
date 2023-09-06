import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cards = [
  {
    sno: "01",
    title: "Online Consultation with a Lawyer",
    content:
      "Now consult a lawyer or get your legal documents reviewed anytime from the convenience of your home. With secure calls and verified Lawyers",
  },
  {
    sno: "02",
    title: "Property legal solutions for all your property investments",
    content:
      "Trusted Property Legal Services. We help you take the right Property investment decisions. India's #1 Property Legal Solutions.",
  },
  {
    sno: "03",
    title: "Documentation by Expert Professionals",
    content:
      "Corporate, HR, professional or personal, Get any legal document drafted and customised to your business or personal needs in the most affordable way.",
  },
  {
    sno: "04",
    title: "Start-up Legal Solutions",
    content:
      "Planning a start-up or have an on-going business, now You focus on your business and leave the legal worries on us. Consulting, Drafting, Review and Filing all under one roof.",
  },
];

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <div
        sx={{
          marginBottom: "16px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "blue",
            fontSize: "36px", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Services :
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          Welcome to our technology aiming to eliminate your legal worries.
          Consult anything and everything legal with experienced Legal
          professionals available 24X7 to talk to you.
        </Typography>
      </div>
      {cards.map((cardData, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            flex: "1 1 calc(25% - 16px)",
            marginBottom: 2,
            transition: "background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            },
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {cardData.sno}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            >
              {cardData.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: 15,
                marginTop: "8px",
              }}
            >
              {cardData.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: "blue" }}>
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
