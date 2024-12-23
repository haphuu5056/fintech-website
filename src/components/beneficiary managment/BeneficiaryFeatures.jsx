import { Card, CardBody } from "@nextui-org/react";
import { beneficiaryFeatures, beneficiarySpecs } from "@/data/data";
import { CheckCircle2 } from "lucide-react";
export const BeneficiaryFeatures = () => {
  return (
    <section className="">
      <Card className="shadow-none mb-10">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-medium mb-2">Enterprise Features</h3>
          <p className="text-gray-600 ">
            Built for large-scale financial operations
          </p>
        </div>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {beneficiaryFeatures.map(({ bgClass, title, description }, idx) => (
              <div key={title} className={`${bgClass} p-6 rounded-lg`}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className={`w-8 h-8 ${
                      idx % 2 ? "text-primary" : "text-success"
                    }`}
                  />
                  <div>
                    <h4 className="font-semibold tracking-wide mb-1">
                      {title}
                    </h4>
                    <p className=" text-gray-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
      <div className=" p-6 bg-white rounded-lg border border-gray-200">
        <h4 className="font-semibold mb-8">Technical Specifications:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
          {beneficiarySpecs.map((spec) => (
            <li key={spec} className=" text-lg flex items-center gap-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
