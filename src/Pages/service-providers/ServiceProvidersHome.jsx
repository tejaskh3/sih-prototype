import BillingSection  from "../../components/service-providers/Home/BillingSection.component";
import CaseManagement from "../../components/service-providers/Home/CaseManagement.component";
import ClientSection from "../../components/service-providers/Home/ClientSection.component";
import FirstBanner from "../../components/service-providers/Home/FirstBanner.component";
import RequestDemo from "../../components/service-providers/Home/RequestDemo.component";
import SecureFeatures from "../../components/service-providers/Home/SecureFeatures.component";
import VirtualOffice from "../../components/service-providers/Home/VirtualOfficeSection.component";

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
