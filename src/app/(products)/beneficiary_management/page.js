import HeroBanner from "@/components/common/HeroBanner";
import { BeneficiaryStats } from "@/components/beneficiary managment/BeneficiaryStats";
import { WorkflowSection } from "@/components/beneficiary managment/WorkflowSection"; 
import { BeneficiaryFeatures } from "@/components/beneficiary managment/BeneficiaryFeatures";

export default function BeneficiaryManagementPage() {
  return (
    <>
      <HeroBanner
        title="Beneficiary Management System (BMS)"
        subtitle="Enterprise-grade solution for managing large-scale financial disbursements to beneficiaries with complete security and traceability"
      />
      <div className="container mx-auto px-4 py-10">
        <BeneficiaryStats />
        <div className="py-12 space-y-10">
          <WorkflowSection />
          <BeneficiaryFeatures />
        </div>
      </div>
    </>
  );
}
