import { beneficiaryWorkflowSteps } from "@/data/data";
import { Card, CardBody } from "@nextui-org/react";
export const WorkflowSection = () => {
   return (
    <section className="">
      <Card className="shadow-none">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Enterprise Disbursement Workflow
        </h3>
        <CardBody>
          <div className="relative">
            <div className="absolute top-[20%] left-0 w-full h-0.5 bg-gray-200"></div>
            <div className="flex justify-between items-start relative z-10">
              {beneficiaryWorkflowSteps.map(
                ({ icon: Icon, title, description, bgClass }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center max-w-[300px]"
                  >
                    <div
                      className={`${bgClass} flex items-center justify-center w-16 h-16 rounded-full 
                      shadow-lg mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-center">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
