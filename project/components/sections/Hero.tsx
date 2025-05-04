"use client";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button-custom";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-8 md:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-background pointer-events-none" />
      
      <Container>
        <div className="relative z-10 mx-auto flex flex-col items-center max-w-5xl text-center">
          <motion.h1 
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-indigo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Snap
            </motion.span> Your Homework. {" "}
            <motion.span 
              className="text-indigo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Learn
            </motion.span> Smarter. {" "}
            <motion.span 
              className="text-amber"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Finish
            </motion.span> Faster.
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg sm:text-xl md:text-2xl text-charcoal/80 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The AI study assistant that guides you step-by-step through your homework, without doing it for you.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="group">
              Try for Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="text-indigo flex items-center gap-2">
              <div className="bg-indigo/10 rounded-full p-1">
                <Play className="h-4 w-4 fill-indigo text-indigo" />
              </div>
              See How It Works
            </Button>
          </motion.div>
        </div>

       
      </Container>
    </div>
  );
}