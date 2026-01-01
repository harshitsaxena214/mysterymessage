import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-medium text-foreground">Mystery Message</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        
        <Separator className="my-6 bg-border/40" />
        
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mystery Message. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
