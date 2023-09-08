import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Testimonials() {
  const testimonial = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s",
      title: "Vijay Kanoor,Bangalore",
      description:
        "It was a great experience on Just Consult at LegalBazaar; I made a call at 1 am in the morning and I was able to speak to a learned lawyer; I am really impressed by theamazing 24/7 service wherein any one can clarify their doubt anytime of their convenance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533781107041-b3b8441e1612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Lata Sharma,Punjab",
      description:
        "Got a reference from my friend about LegalBazaar just consult and the 24/7 legal advice. I spoke a lady lawyer she guided me pretty well, cleared all the doubts I had. I give a big shout out to all who need a confidential and secure legal advice. Just Consult is the go to solution for all your problems",
    },
    {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/928/355/desktop-wallpaper-sm-on-twitter-random-people.jpg",
      title: "Arvind Pratap,Udaipur",
      description:
        "Just Consult Lawyer provided me with all the possible solutions for my query. I really liked the way he has given me solutions after patiently hearing me.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638791428934-59c43e44da75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Pretty Singh,Indore",
      description:
        "Advocate on Just Consult was quite expert and knowledgeable in divorce matter she explained to me everything so well and help me to understand the legalities and consequences.",
    },
  ];
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "blue",
          fontSize: "40px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        Hear what our users have to say
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {testimonial.map((t, index) => (
          <Card
            sx={{
              maxWidth: "calc(25% - 30px)",
              flexBasis: "calc(25% - 20px)",
              transition: "transform 0.2s",
              marginY: "40px",
              borderRadius: "20px",
              height: "360px",
              outline: "1px solid black",
              border: "1px solid black",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                border: "2px solid black",
              },
            }}
            key={index}
          >
            <CardActionArea>
              <div
                className="image"
                style={{
                  width: "87px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  margin: "10px 0px 0px 90px",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  image={t.image}
                  alt={t.title}
                />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {t.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{
                      marginRight: 1,
                      paddingTop: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Rating:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "blue" }}>
                    ★★★★
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .image{
                padding:0px 110px;
            }
          }
        `}
      </style>
    </div>
  );
}
