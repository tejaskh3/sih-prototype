import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";

export default function Property() {
  const content = [
    {
      heading: "Property Report",
      price: "8999",
      desc: [
        "A detailed analysis report on your property, prepared by a senior property lawyer",
        "Detailed call, clear all your doubts",
        "More than 10,000 Lawyers in every city of the country ensuring accurate and fast delivery",
      ],
    },
    {
      heading: "Agreement to Sale Drafting",
      price: "4015",
      desc: [
        "Best in Class Agreement Drafting",
        "24hrs Drafting delivery",
        "Detailed call, clear all your doubts",
      ],
    },
    {
      heading: "Sale Deed Drafting",
      price: "5999",
      desc: [
        "Experienced Property Lawyers for Sale Deed Drafting",
        "Consultation call with the Lawyer",
        "Final Draft in just 48 hours",
      ],
    },
    {
      heading: "Property Registration (Sale Deed Registration)",
      price: "19999",
      desc: [
        "Get your property and property related documents registered with convenience.",
        "Consultation call with the Lawyer",
        "Trusted report, peace of mind",
      ],
    },
  ];

  return (
    <Box component={"div"} sx={{ display: "flex", gap: "20px" }} py={5} px={3} >
      {content.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 400,
            height: "540px",
            marginTop:"15px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                fontFamily: "Roboto",
                lineHeight: "1.4",
                fontWeight: "550",
                fontSize:"25px",
                color: "#800080 ",
              }}
            >
              {item.heading}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              ₹{item.price}
            </Typography>
            <List>
              {item.desc.map((descItem, i) => (
                <ListItem key={i}>
                  <img
                    src="https://legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/product-list-check.png"
                    alt="Description Image"
                    style={{ marginRight: "10px", maxWidth: "50px" }}
                  />
                  <ListItemText
                    primary={descItem}
                    sx={{
                      fontSize: "16px", // Adjust font size
                      lineHeight: "1.5", // Adjust line height
                      color: "#333", // Text color
                      padding: "7px 0", // Adjust padding
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                color: "#fff",
                cursor: "pointer",
                padding: "11px 40px",
                border: "3px solid #278cf3",
                borderRadius: "20px",
                background: "#278cf3",
                margin: "0px 50px",
                "&:hover": {
                  color: "#278cf3",
                },
              }}
            >
              KNOW MORE
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}