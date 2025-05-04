"use client";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { testimonials } from "@/lib/constants";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-mint/5">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Students Are Saying
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of students who improved their grades with Doe
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <QuoteIcon className="absolute top-4 right-4 h-6 w-6 text-indigo/20" />
              
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo flex items-center justify-center text-white font-medium text-lg">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-charcoal">{testimonial.name}</h3>
                  <p className="text-sm text-charcoal/60">{testimonial.grade}</p>
                </div>
              </div>
              
              <p className="text-charcoal/80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}