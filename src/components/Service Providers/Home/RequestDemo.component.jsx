import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const RequestDemo = () => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      py={10}
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Box mx="auto" textAlign={"center"} maxWidth={"fit-content"}>
        <Typography fontSize={30} fontWeight={800}>
          Request for Demo
        </Typography>
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            pt={8}
            px={"auto"}
            justifyContent={"center"}
          >
            <TextField
              sx={{
                backgroundColor: theme.palette.white.main,
                borderRadius: 1,
                border: "none",
                outline: "none",
              }}
              onFocus={{ border: "inherit", outline: "none" }}
              type="number"
              placeholder="Enter your phone no"
              InputProps={
                {
                  endAdornment: <InputAdornment position="end">
                    <SettingsPhoneIcon color="secondaryLight" />
                  </InputAdornment>
                }
              }
            />
            <Button
              color="secondaryLight"
              variant="contained"
              sx={{
                fontSize: 15,
                fontWeight: 700,
                px: 5,
                textTransform: "none",
              }}
            >
              Request call back
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestDemo;
