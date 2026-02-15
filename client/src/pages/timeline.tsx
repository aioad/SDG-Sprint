import { Card } from "@/components/ui/card";
import { AnimatedSection, FloatingGlow } from "@/components/shared";
import {
  GOOGLE_RED,
  GOOGLE_BLUE,
  GOOGLE_YELLOW,
  timeline,
} from "@/lib/constants";

export default function TimelinePage() {
  return (
    <section className="relative py-24 overflow-hidden min-h-[calc(100vh-4rem)]" data-testid="section-timeline">
      <FloatingGlow color={GOOGLE_RED} className="w-80 h-80 right-10 top-20" />
      <FloatingGlow color={GOOGLE_BLUE} className="w-72 h-72 left-10 bottom-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_YELLOW }}>Schedule</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-timeline-title">3-Day Timeline</h2>
            <p className="text-white/40 mt-3">Your journey from idea to impact</p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {timeline.map((day, dayIndex) => (
            <AnimatedSection key={day.day} delay={dayIndex * 0.15} className="mb-12 last:mb-0">
              <div className="relative pl-12 sm:pl-20">
                <div className="absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: day.color, background: `${day.color}20` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: day.color }} />
                </div>

                <Card className="border-white/10 overflow-visible"
                  style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                  data-testid={`card-timeline-${day.day.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{ color: day.color, background: `${day.color}15`, border: `1px solid ${day.color}30` }}>
                        {day.day}
                      </span>
                      <div className="flex items-center gap-2">
                        <day.icon className="w-4 h-4" style={{ color: day.color }} />
                        <h3 className="text-xl font-bold text-white">{day.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-white/40 mb-4">{day.date}</p>

                    <div className="space-y-3">
                      {day.events.map((event, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <span className="text-xs text-white/30 font-mono min-w-[72px] pt-0.5">{event.time}</span>
                          <div className="w-1 h-1 rounded-full mt-2 opacity-40" style={{ background: day.color }} />
                          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{event.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
