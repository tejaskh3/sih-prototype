import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Typewriter from "typewriter-effect";

const Features = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: "#1F1F1F" }} py={12}>
      <Box width={"fit-content"} mx="auto">
        <Typography
          color={theme.palette.secondaryLight.main}
          fontSize={55}
          fontWeight={800}
          width={"fit-content"}
          px={2}
          mx={{ xs: "auto", md: "unset" }}
        >
          Features
        </Typography>
        <Divider color={theme.palette.primary.main} variant="middle" />
        <Box textAlign={"center"}>
          <List
            sx={{
              width: "fit-content",
              mx: "auto",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            <ListItem>
              <ListItemIcon>
                <KeyboardArrowRightIcon color="white" />
              </ListItemIcon>
              <Typography
                fontWeight="inherit"
                fontSize="inherit"
                color="#f2f3ff"
              >
                Seamless and Secure
              </Typography>
            </ListItem>
            <ListItem color="red">
              <ListItemIcon>
                <KeyboardArrowRightIcon color="primary" />
              </ListItemIcon>
              <Typography
                fontWeight="inherit"
                fontSize="inherit"
                color="primary"
              >
                Law with ease
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardArrowRightIcon color="white" />
              </ListItemIcon>
              <Typography
                fontWeight="inherit"
                fontSize="inherit"
                color="#f2f3ff"
              >
                Find the best service and service providers for your need
              </Typography>
            </ListItem>
          </List>

          <Box px={2}>
            <Stack direction={{ xs: "column", md: "row" }} justifyContent={"space-between"} mt={5} >
              <Box>
                <Typography fontSize={{xs:30,md:50}} fontWeight={600} font>
                  At Legal Duniya you can {"  "}
                </Typography>
              </Box>
              <Box mx={1}>
                <Typography fontSize={50} fontWeight={800} color="primary">
                  <Typewriter
                    options={{
                      strings: ["explore", "connect", "resolve"],
                      autoStart: true,
                      loop: true,
                    }}
                  ></Typewriter>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
