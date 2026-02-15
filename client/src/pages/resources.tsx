import { ExternalLink, Download, FileText, Presentation, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection, FloatingGlow } from "@/components/shared";
import {
  GOOGLE_BLUE,
  GOOGLE_RED,
  GOOGLE_YELLOW,
  GOOGLE_GREEN,
  REGISTER_URL,
  PPT_URL,
  rules,
} from "@/lib/constants";

export default function ResourcesPage() {
  return (
    <section className="relative py-24 overflow-hidden min-h-[calc(100vh-4rem)]" data-testid="section-resources">
      <FloatingGlow color={GOOGLE_YELLOW} className="w-80 h-80 -left-10 top-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_RED }}>Resources</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-resources-title">Event Resources</h2>
            <p className="text-white/40 mt-3">Everything you need to prepare for TechSprint 2.0</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <Card className="border-white/10 overflow-visible h-full"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center border border-white/10"
                    style={{ background: `${GOOGLE_RED}15` }}>
                    <FileText className="w-5 h-5" style={{ color: GOOGLE_RED }} />
                  </div>
                  <h3 className="text-xl font-bold text-white" data-testid="text-rules-title">Rules & Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  {rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50" data-testid={`text-rule-${i}`}>
                      <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOOGLE_GREEN }} />
                      <span dangerouslySetInnerHTML={{
                        __html: rule.replace("MANDATORY", "<strong class='text-white'>MANDATORY</strong>")
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="border-white/10 overflow-visible h-full"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center border border-white/10"
                    style={{ background: `${GOOGLE_BLUE}15` }}>
                    <Presentation className="w-5 h-5" style={{ color: GOOGLE_BLUE }} />
                  </div>
                  <h3 className="text-xl font-bold text-white" data-testid="text-ppt-title">Pitch Deck Template</h3>
                </div>
                <p className="text-sm text-white/40 mb-6 flex-1">
                  Use our official pitch deck template to present your project. It includes sections for Problem Statement, Solution, Tech Stack, Impact, and Demo.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href={PPT_URL} target="_blank" rel="noopener noreferrer" data-testid="link-download-ppt">
                    <Button variant="outline" className="border-white/20 text-white/80 gap-2">
                      <Download className="w-4 h-4" />
                      Download Pitch Deck Template
                    </Button>
                  </a>
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" data-testid="link-register-resources">
                    <Button className="bg-white text-black font-semibold gap-2">
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
