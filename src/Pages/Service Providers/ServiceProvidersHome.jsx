// import { Box, Grid } from "@mui/material";
import ClientSection from "../../components/Service Providers/Home/ClientSection.component";
import FirstBanner from "../../components/Service Providers/Home/FirstBanner.component";
import SecureFeatures from "../../components/Service Providers/Home/SecureFeatures.component";

const ServiceProvidersHome = () => {
  return (
    <>
      <FirstBanner />
      <SecureFeatures />
      <ClientSection />
    </>
  );
};

export default ServiceProvidersHome;
