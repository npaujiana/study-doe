"use client";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button-custom";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Start Learning Smarter Today
          </h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Begin with our free plan and upgrade when you're ready
          </p>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-indigo/5 p-8">
              <h3 className="text-2xl font-bold text-charcoal">Free Trial</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold text-indigo">$0</span>
                <span className="ml-1 text-xl text-charcoal/70">/month</span>
              </div>
              <p className="mt-5 text-charcoal/70">
                No credit card required
              </p>
            </div>
            
            <div className="px-8 pt-8 pb-12">
              <ul className="space-y-4">
                {[
                  "5 questions per day",
                  "Basic step-by-step guidance",
                  "Photo homework upload",
                  "Limited concept explanations",
                  "Core subject coverage"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo/10 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-indigo" />
                    </div>
                    <span className="ml-3 text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button size="lg" className="w-full">
                  Start Free Trial
                </Button>
                <p className="text-sm text-center mt-4 text-charcoal/60">
                  Premium plans starting at $9.99/month
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}