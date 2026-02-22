"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeBadge = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const Hero = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeBadge}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground"
        >
          100% Anonymous · Free Forever
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]"
        >
          Dive into the World of Anonymous Messages
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto"
        >
          Mystery Message — Where your identity remains a secret.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href="/sign-up">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 font-medium group transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Learn More
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;