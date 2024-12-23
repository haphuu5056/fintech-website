import HeroBanner from "@/components/common/HeroBanner";
import { Cta } from "@/components/CTA";
import KeyBenefits from "@/components/KeyBenifts";

export default function USSDIntegrationPage() {
  return (
    <>
      <HeroBanner
        title="USSD Integration"
        subtitle="Enable Your Customers To Interact With Their Bank Accounts Without Internet Connectivity"
      />

      <KeyBenefits />
      <Cta />
    </>
  );
}
