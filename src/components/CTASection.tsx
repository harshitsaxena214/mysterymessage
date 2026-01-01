import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div
        className="max-w-2xl mx-auto text-center animate-in fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="inline-flex items-center gap-2 mb-4 text-muted-foreground text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Join thousands of users</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Ready to receive your first mystery message?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Create your free account and start receiving anonymous messages today.
        </p><Link href="/sign-up">
        <Button size="lg" className="mt-8 px-10 font-medium">
          Create Your Link
        </Button></Link>
      </div>
    </section>
  );
};

export default CTASection;
