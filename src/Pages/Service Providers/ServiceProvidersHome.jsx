import BillingSection from "../../components/Service Providers/Home/BillingSection.component";
import CaseManagement from "../../components/Service Providers/Home/CaseManagement.component";
import ClientSection from "../../components/Service Providers/Home/ClientSection.component";
import FirstBanner from "../../components/Service Providers/Home/FirstBanner.component";
import RequestDemo from "../../components/Service Providers/Home/RequestDemo.component";
import SecureFeatures from "../../components/Service Providers/Home/SecureFeatures.component";
import VirtualOffice from "../../components/Service Providers/Home/VirtualOfficeSection.component";

const ServiceProvidersHome = () => {
  return (
    <>
      <FirstBanner />
      <SecureFeatures />
      <ClientSection />
      <CaseManagement />
      <RequestDemo />
      <BillingSection />
      <VirtualOffice />
    </>
  );
};

export default ServiceProvidersHome;
