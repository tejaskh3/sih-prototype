import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../components/navbar/Navbar.component";

const RootLayout = () => {
  return (
    <Box my={0}>
      <Box component={"nav"}>
        <Navbar />
      </Box>
      <Box component={"main"}>
        <Outlet />
      </Box>
      <Box component={"footer"} mb={-4}>
        <Footer />
      </Box>
    </Box>
  );
};

export default RootLayout;
