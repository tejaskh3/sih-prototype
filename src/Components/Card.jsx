import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
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
    <Box component="div" px={{ xs: 2, md: 18 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        pt={4}
        pb={6}
      >
        <Typography
          color="black"
          fontSize={{ xs: 30, md: 40 }}
          pb={{ xs: 2, md: 0 }}
          sx={{ fontWeight: "bold" }}
        >
          Our services
        </Typography>
        <Typography
          fontSize={{ xs: 18, md: 20 }}
          maxWidth={{ md: "70%" }}
          sx={{
            color: "#121122B3",
          }}
        >
          Welcome to our technology aiming to eliminate your legal worries.
          Consult anything and everything legal with experienced Legal
          professionals available 24X7 to talk to you.
        </Typography>
      </Stack>
      {cards.map((cardData, index) => (
        <Card
          key={index}
          // variant="outlined"
          sx={{
            border: "none",
            backgroundColor: "#f2f3ff",
            flex: "1 1 calc(25% - 16px)",
            marginBottom: 2,
            // transition: "background-color 0.3s, box-shadow 0.3s",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#f2f3ff",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
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
            <Button
              size="small"
              sx={{
                color: "blue",
                borderRadius: "5px",
                transition: "background-color 0.2s, color 0.2s",
                paddingY: "10px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                },
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
