import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard() {
  const providers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73lT1EhXBq-jNUqi8nZ452zvkFlxil7kK8A&usqp=CAU",
      title: "Advocate",
      description:
        "An advocate is a dedicated individual who champions a specific cause or group, working to raise awareness, influence public opinion, and drive change.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDAmydxoyKB1t9u9VV9WnA8gR8ig0SIq5Mw&usqp=CAU",
      title: "Mediator",
      description:
        "Plays a crucial role in resolving conflicts, whether in legal disputes, family matters, workplace conflicts, or other contexts.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNGfLlRX7f1GMKHsVbHXdqRVp3hZZ91Dn8MZPc=w768-h768-n-o-v1",
      title: "Prem Documentation Centre",
      description:
        "Ashish Legal Documentation Centre - Service Provider of legal documentation service, legal advice and practical legal compliances service & legal criminal cases advisory service in Delhi.",
    },
    {
      image:
        "https://content.jdmagicbox.com/comp/delhi/b2/011pxx11.xx11.110517112406.y2b2/catalogue/s-r-notary-documentation-center-delhi-s6wotfmehw-250.jpg",
      title: "Sai Kirpa Documentation Centre",
      description:
        "Notary Affidavit eStamp and Property Documents like Sale Deed Will GPA SPA And Relinquishment Deed, Rent Agreement, Lease Deed, Registration Process with Sub Registrar.",
    },
    {
      image:
        "https://images.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-4.jpg?temp=1",
      title: "S.R Notary Documentation Centre",
      description:
        "Notary Affidavit eStamp and Property Documents like Sale Deed Will GPA SPA And Relinquishment Deed, Rent Agreement, Lease Deed,Registration Process with Sub Registrar.",
    },
    {
      image:
        "https://images.jdmagicbox.com/comp/delhi/14/011pf021514/catalogue/dhingra-documentation-centre-kalkaji-delhi-notary-services-xrgwnb-250.jpg?temp=1?w=1920&q=75",
      title: "G.S Documentation Center",
      description:
        "Notary Affidavit eStamp and Property Documents like Sale Deed Will GPA SPA And Relinquishment Deed, Rent Agreement, Lease Deed,Registration Process with Sub Registrar.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOP8qXJcW5ZpHFD5SbuCqMjRWeTy96SW3P_NByY=w1080-h608-p-no-v0",
      title: "Gupta Documentation Centre",
      description:
        "Notary Affidavit eStamp and Property Documents like Sale Deed Will GPA SPA And Relinquishment Deed, Rent Agreement, Lease Deed,Registration Process with Sub Registrar.",
    },
    {
      image:
        "https://moadlawassociates.com/wp-content/uploads/2019/05/Legal-Documentation-Lawyers-in-India-AdvocatesLaw-Firms.jpg",
      title: "LegalySpace",
      description:
        " Firms offer a wide range of legal services, catering to multinational corporations, governments, and high-net-worth individuals. ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb5JuWHu5lOPblD9JJrInAWCI0pDhRkjeoA&usqp=CAU",
      title: "IOC Group",
      description:
        " Firms offer a wide range of legal services, catering to multinational corporations, governments, and high-net-worth individuals.",
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        color="#121122b3"
        sx={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Service Providers
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        py={3}
        px={{ xs: 2, md: 8 }}
        mx={{ md: 3 }}
        borderRadius={{ md: 8 }}
        bgcolor={"#6068db12"}
      >
        {providers.map((provider, index) => (
          <Card
            sx={{
              flexBasis: "calc(33.33% - 20px)",
              transition: "transform 0.2s",
              marginY: "20px",
              borderRadius: "20px",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                className="image_1"
                style={{ objectFit: "cover", height: "200px" }}
                image={provider.image}
                alt={provider.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {provider.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {provider.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </>
  );
}
