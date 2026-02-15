import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedSection, FloatingGlow } from "@/components/shared";
import {
  GOOGLE_BLUE,
  GOOGLE_YELLOW,
  faqs,
} from "@/lib/constants";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden min-h-[calc(100vh-4rem)]" data-testid="section-faq">
      <FloatingGlow color={GOOGLE_BLUE} className="w-80 h-80 -left-10 top-20" />
      <FloatingGlow color={GOOGLE_YELLOW} className="w-72 h-72 right-10 bottom-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_BLUE }}>Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 flex items-center justify-center gap-3" data-testid="text-faq-title">
              <HelpCircle className="w-8 h-8" style={{ color: GOOGLE_BLUE }} />
              Frequently Asked Questions
            </h2>
            <p className="text-white/40 mt-3">Everything you need to know about TechSprint 2.0</p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <Card
                className="border-white/10 overflow-visible transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  borderColor: openIndex === index ? `${GOOGLE_BLUE}40` : undefined,
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                data-testid={`card-faq-${index}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-white text-left" data-testid={`text-faq-question-${index}`}>{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-white/40" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 mt-4 text-sm leading-relaxed" data-testid={`text-faq-answer-${index}`}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
