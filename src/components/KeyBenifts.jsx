'use client'
import { keyBenefitsData } from "@/data/data";
export default function KeyBenefits() {
  return (
    <section className="py-16 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 max-w-xl mx-auto ">
          <h2 className="text-4xl font-semibold  mb-4">Key Benefits</h2>
          <p>
            With the help of USSD services, you can offer seamless access for
            your customers to the interactive features of your application.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {keyBenefitsData.map((benefit,index) => (
            <div
              key={benefit.id}
              className="group relative overflow-hidden border rounded-xl"
            >
              <div className="relative z-10 bg-white h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#329BCA]/10 rounded-bl-[100px] -mr-8 -mt-8" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#329BCA]/10 text-[#329BCA] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
