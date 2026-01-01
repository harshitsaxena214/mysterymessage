import { Link2, Send, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Create Your Link",
    description: "Sign up and get your unique anonymous message link in seconds.",
  },
  {
    icon: Send,
    title: "Share It",
    description: "Share your link on social media or with friends.",
  },
  {
    icon: MessageCircle,
    title: "Receive Messages",
    description: "Get anonymous messages from anyone, anywhere.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 
            className="text-2xl md:text-3xl font-semibold text-foreground animate-in fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            How It Works
          </h2>
          <p 
            className="mt-3 text-muted-foreground animate-in fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Three simple steps to start receiving anonymous messages
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center animate-in fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
