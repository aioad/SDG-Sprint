import { Card } from "@/components/ui/card";
import { AnimatedSection, FloatingGlow } from "@/components/shared";
import {
  GOOGLE_GREEN,
  GOOGLE_YELLOW,
  themes,
} from "@/lib/constants";

export default function ThemesPage() {
  return (
    <section className="relative py-24 overflow-hidden min-h-[calc(100vh-4rem)]" data-testid="section-themes">
      <FloatingGlow color={GOOGLE_GREEN} className="w-96 h-96 -left-20 top-20" />
      <FloatingGlow color={GOOGLE_YELLOW} className="w-72 h-72 right-0 bottom-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_GREEN }}>Sustainable Development Goals</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-themes-title">Hackathon Themes</h2>
            <p className="text-white/40 mt-3 max-w-xl mx-auto">Choose from four impactful tracks aligned with the UN Sustainable Development Goals</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {themes.map((theme, index) => (
            <AnimatedSection key={theme.title} delay={index * 0.1}>
              <Card
                className="group border-white/10 overflow-visible h-full transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                data-testid={`card-theme-${theme.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4 border border-white/10 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${theme.color}15` }}>
                    <theme.icon className="w-6 h-6" style={{ color: theme.color }} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10"
                    style={{ color: theme.color, background: `${theme.color}10` }}>
                    {theme.sdg}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">{theme.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{theme.description}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
