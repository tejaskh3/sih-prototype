import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { UserContext } from "../../context/User.Context";
import { createUserFromEmailAndPassword } from "../../utils/firebase/firebase.utils";

const UserHomePage = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (loaderData.currentUserAccessToken === null)
      navigate("/auth/user", { replace: true });
  }, [loaderData, navigate]);

  return (
    <Box py={8}>
      <Typography fontSize={50} fontWeight={800} color="black" textAlign={"center"}>User HomePage</Typography>
    </Box>
  );
};

export default UserHomePage;

export const userHomeLoader = () => {
  const currentUserAccessToken = localStorage.getItem("accessToken");
  if (!currentUserAccessToken) {
    return null;
  } else {
    return { currentUserAccessToken };
  }
};
