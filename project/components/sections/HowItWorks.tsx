"use client";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { steps } from "@/lib/constants";
import { motion } from "framer-motion";
import { 
  Camera, 
  Lightbulb, 
  Brain, 
  Trophy 
} from "lucide-react";

const icons = [
  Camera,
  Lightbulb,
  Brain,
  Trophy
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Doe Works
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get from confused to confident in just a few simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-indigo/20" />

          {steps.map((step, index) => {
            const Icon = icons[index];
            
            return (
              <motion.div 
                key={step.number}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo text-white text-xl font-bold relative">
                    {step.number}
                    <div className="absolute -inset-3 rounded-full border-2 border-dashed border-indigo/30 animate-[spin_20s_linear_infinite]" />
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center h-full flex flex-col items-center">
                  <div className="p-3 bg-indigo/10 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}