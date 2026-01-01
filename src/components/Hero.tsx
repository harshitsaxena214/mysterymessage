import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground animate-in fade-in  slide-in-from-top-1 duration-500"
          style={{ animationDelay: "0s" }}
        >
          100% Anonymous · Free Forever
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: "0.1s" }}
        >
          Dive into the World of Anonymous Messages
        </h1>
        <p
          className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: "0.2s" }}
        >
          Mystery Message — Where your identity remains a secret.
        </p>
        <div
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="/sign-up">
            <Button size="lg" className="px-8 font-medium group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="px-8 font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
