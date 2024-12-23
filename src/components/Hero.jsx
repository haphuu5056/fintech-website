import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/react";
export default function HomeHero() {
  return (
    <section className=" py-20 sm:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:leading-[4rem]">
            Innovative Financial Solutions
          </h1>
          <p className="mt-6 text-xl text-[#329BCA] font-semibold">
            Empowering Your Financial Future
          </p>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            We provide cutting-edge fintech solutions to streamline your banking
            operations and enhance customer experiences.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="/servicess" className="inline-flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact" className="inline-flex items-center">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}