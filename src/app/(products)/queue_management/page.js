import React from "react";
import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import { Users, Clock, CheckCircle2, BarChart3 } from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";

// Stats data
const queueStats = [
  {
    icon: Users,
    title: "Active Customers",
    value: "247",
    subtitle: "Currently in queue",
    bgClass: "bg-primary-50",
    iconClass: "text-primary"
  },
  {
    icon: Clock, 
    title: "Average Wait Time",
    value: "8.5 min",
    subtitle: "Per customer",
    bgClass: "bg-success-50",
    iconClass: "text-success"
  },
  {
    icon: CheckCircle2,
    title: "Service Rate", 
    value: "95%",
    subtitle: "Customer satisfaction",
    bgClass: "bg-warning-50",
    iconClass: "text-warning"
  },
  {
    icon: BarChart3,
    title: "Daily Throughput",
    value: "1,890",
    subtitle: "Customers served", 
    bgClass: "bg-secondary-50",
    iconClass: "text-secondary"
  }
];

// Performance metrics
const performanceMetrics = [
  { label: "Transaction Processing", value: 85, color: "primary" },
  { label: "Customer Onboarding", value: 92, color: "success" },
  { label: "Account Services", value: 78, color: "warning" }
];

// Key features
const keyFeatures = [
  {
    title: "Real-time Queue Monitoring",
    description: "Track customer wait times and service progress in real-time"
  },
  {
    title: "Smart Resource Allocation", 
    description: "Optimize staff deployment based on queue analytics"
  },
  {
    title: "Digital Queue Tickets",
    description: "Paperless ticketing system with mobile notifications"
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive reports and insights for service optimization"
  }
];

export default function QueueManagementPage() {
  return (
    <>
      <HeroBanner
        title="Queue Management"
        subtitle="Streamline your customer flow and enhance service efficiency with our advanced queue management system"
      />

      <div className="container mx-auto px-4 py-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {queueStats.map(({ icon: Icon, title, value, subtitle, bgClass, iconClass }) => (
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
          ))}
        </div>

        {/* Performance & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          {/* Queue Performance Card */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Queue Performance</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {performanceMetrics.map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <Progress 
                      value={value} 
                      color={color} 
                      className="h-2" 
                    />
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Key Features Card */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Key Features</h3>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3">
                {keyFeatures.map(({ title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-1" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
