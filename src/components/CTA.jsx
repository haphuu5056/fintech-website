import { Button } from "@nextui-org/react";
import Link from "next/link";

export function Cta() {
  return (
    <section className="bg-primary/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Financial Services?
          </h2>

          <p className="text-xl text-muted-foreground">
            Join thousands of businesses that trust our fintech solutions. Let&apos;s
            build the future of finance together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
