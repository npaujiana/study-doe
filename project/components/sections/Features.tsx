"use client";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { features } from "@/lib/constants";
import { motion } from "framer-motion";
import { Lightbulb, Puzzle as PuzzlePiece, CheckSquare, Camera, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "BulbIcon": Lightbulb,
  "PuzzleIcon": PuzzlePiece,
  "CheckSquareIcon": CheckSquare,
  "CameraIcon": Camera,
  "TrendingUpIcon": TrendingUp
};

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for <span className="text-indigo">Better Learning</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Designed by education experts to help you truly understand, not just get answers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            
            return (
              <motion.div 
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-amber/10 rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}