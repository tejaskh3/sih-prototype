import { CardActionArea, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Testimonials() {
  const theme = useTheme();

  const testimonial = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s",
      title: "Vijay Kanoor,Bangalore",
      description:
        "It was a great experience on at LegalBazaar; I made a call at 1 am in the morning and I was able to speak to a learned lawyer; I am really impressed by the amazing 24/7 service wherein any one can clarify their doubt anytime of their convenance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533781107041-b3b8441e1612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Lata Sharma,Punjab",
      description:
        "Got a reference from my friend about LegalBazaar and the 24/7 legal advice. I spoke a lady lawyer she guided me pretty well, cleared all the doubts I had. I give a big shout out to all who need a confidential and secure legal advice. is the go to solution for all your problems",
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
    <Box px={2}>
      <Typography
        color={theme.palette.secondaryLight.main}
        variant="h4"
        gutterBottom
        pt={5}
        sx={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: { xs: "left", md: "center" },
        }}
      >
        Hear what our users have to say
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap="30px"
        justifyContent="center"
        px={2}
        py={2}
      >
        {testimonial.map((t, index) => (
          <Card
            sx={{
              flexBasis: "calc(25% - 20px)",
              transition: "transform 0.3s",
              marginY: { xs: "20px", md: "40px" },
              borderRadius: "20px",
              height: "360px",
              border: "2px solid transparent",
              "&:hover": {
                transform: "translateY(-5px)",
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
                  margin: "10px auto",
                }}
              >
                <CardMedia
                  py={2}
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
                  sx={{ textAlign: { md: "center" }, fontWeight: "bold" }}
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
      </Stack>
    </Box>
  );
}
