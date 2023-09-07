import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";

const RootLayout = () => {
  return (
    <>
      <Box component={"nav"}>
        <Navbar />
      </Box>
      <Box component={"main"}>
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
