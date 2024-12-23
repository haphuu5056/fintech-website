import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { beneficiaryStats } from "@/data/data";

export const BeneficiaryStats = () => ( 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {beneficiaryStats.map(
      ({ icon: Icon, title, value, subtitle, bgClass, iconClass }) => (
        <Card key={title} className={bgClass}>
          <CardHeader className="flex gap-3">            
            <Icon className={`w-6 h-6 ${iconClass}`} />
            <p className="text-lg font-semibold">{title}</p>
          </CardHeader>
          <CardBody>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </CardBody>
        </Card> 
      )
    )}
  </div>
);




