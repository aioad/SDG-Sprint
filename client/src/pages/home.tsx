import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import gdgLogo from "@assets/NEW_LOGO-removebg-preview_1771195095243.png";
import uniLogo from "@assets/OIP-removebg-preview_1771195983791.png";
import {
  MapPin,
  Calendar,
  Clock,
  Trophy,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection, FloatingGlow } from "@/components/shared";
import {
  GOOGLE_BLUE,
  GOOGLE_RED,
  GOOGLE_YELLOW,
  GOOGLE_GREEN,
  REGISTER_URL,
  organizers,
} from "@/lib/constants";

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => onComplete(), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#0a0a0a" }}
      data-testid="splash-screen"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(66,133,244,0.06)_0%,_transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: phase >= 0 ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center w-full"
      >
        <img
          src={gdgLogo}
          alt="Google Developer Group On Campus PUP"
          className="w-96 sm:w-[32rem] object-contain translate-x-5 sm:translate-x-7"
          data-testid="img-gdg-logo"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 15 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        className="text-white/40 text-lg sm:text-xl tracking-wide mt-10"
        data-testid="text-presents"
      >
        presents
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20, scale: phase >= 2 ? 1 : 0.95 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl sm:text-6xl font-bold mt-6"
        data-testid="text-splash-title"
      >
        <span className="text-white">Tech</span>
        <span style={{ background: `linear-gradient(135deg, ${GOOGLE_BLUE}, ${GOOGLE_RED}, ${GOOGLE_YELLOW}, ${GOOGLE_GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Sprint
        </span>
        <span className="text-white"> 2.0</span>
      </motion.h2>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <FloatingGlow color={GOOGLE_BLUE} className="w-96 h-96 -top-20 -left-20" />
      <FloatingGlow color={GOOGLE_RED} className="w-80 h-80 top-40 right-10" />
      <FloatingGlow color={GOOGLE_YELLOW} className="w-72 h-72 bottom-20 left-1/4" />
      <FloatingGlow color={GOOGLE_GREEN} className="w-64 h-64 bottom-10 right-1/4" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(66,133,244,0.08)_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={uniLogo}
            alt="Punjabi University Patiala"
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            data-testid="img-uni-logo-hero"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 mb-6"
            style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/60">Registrations Open</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          data-testid="text-hero-title"
        >
          <span className="text-white">Tech</span>
          <span style={{ background: `linear-gradient(135deg, ${GOOGLE_BLUE}, ${GOOGLE_RED}, ${GOOGLE_YELLOW}, ${GOOGLE_GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sprint
          </span>
          <span className="text-white"> 2.0</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-white/50 mb-2 font-light"
          data-testid="text-hero-subtitle"
        >
          3-Day Ideathon+Hackathon for Sustainable Development Goals
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm text-white/30 mb-10"
          data-testid="text-hero-organizer"
        >
          Organized by <span className="text-white/50">Google Developer Group on Campus</span> at Punjabi University Patiala
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" data-testid="button-register">
            <Button size="lg" className="bg-white text-black font-semibold px-8 gap-2">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="#organizers" data-testid="button-meet-team">
            <Button size="lg" variant="outline" className="border-white/20 text-white/80 px-8 gap-2">
              Meet the Team
              <Users className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 text-white/30 text-sm"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>3 Days</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>200+ Innovators</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>Exciting Prizes</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function VenueSection() {
  return (
    <section id="venue" className="relative py-24 overflow-hidden" data-testid="section-venue">
      <FloatingGlow color={GOOGLE_BLUE} className="w-80 h-80 -right-20 top-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_BLUE }}>Location</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-venue-title">Venue</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="max-w-2xl mx-auto border-white/10 overflow-visible"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-md flex items-center justify-center mb-6 border border-white/10"
                style={{ background: `rgba(66,133,244,0.1)` }}>
                <MapPin className="w-8 h-8" style={{ color: GOOGLE_BLUE }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" data-testid="text-venue-name">Punjabi University Patiala</h3>
              <p className="text-white/40 mb-6">Room No. 207, UCOE Dept.</p>
              <div className="flex items-center justify-center gap-6 text-sm text-white/50 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: GOOGLE_YELLOW }} />
                  <span>24 Feb to 26 Feb</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: GOOGLE_GREEN }} />
                  <span>9:00 AM Onwards</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: GOOGLE_RED }} />
                  <span>Patiala, Punjab</span>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PrizesSection() {
  const prizes = [
    { place: "1st", label: "Winner", icon: Trophy, color: GOOGLE_YELLOW },
    { place: "2nd", label: "1st Runner Up", icon: Trophy, color: GOOGLE_BLUE },
    { place: "3rd", label: "2nd Runner Up", icon: Trophy, color: GOOGLE_GREEN },
    { place: "4th", label: "3rd Runner Up", icon: Trophy, color: GOOGLE_RED },
  ];

  return (
    <section id="prizes" className="relative py-24 overflow-hidden" data-testid="section-prizes">
      <FloatingGlow color={GOOGLE_YELLOW} className="w-96 h-96 -right-20 top-10" />
      <FloatingGlow color={GOOGLE_RED} className="w-72 h-72 left-10 bottom-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_YELLOW }}>Rewards & Recognition</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-prizes-title">Prizes for Top Teams</h2>
            <p className="text-white/40 mt-3 max-w-xl mx-auto">Compete for exciting prizes and recognition across the top 4 positions</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <AnimatedSection key={prize.place} delay={index * 0.1}>
              <Card
                className="group border-white/10 overflow-visible h-full transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                data-testid={`card-prize-${prize.place}`}
              >
                <div className="p-8 flex flex-col items-center text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: `${prize.color}15` }}
                  >
                    <prize.icon className="w-8 h-8" style={{ color: prize.color }} />
                  </div>
                  <div
                    className="text-4xl font-black"
                    style={{ color: prize.color }}
                    data-testid={`text-prize-place-${prize.place}`}
                  >
                    {prize.place}
                  </div>
                  <h3 className="text-lg font-bold text-white">{prize.label}</h3>
                  <p className="text-sm text-white/40">Prize details to be announced</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrganizersSection() {
  return (
    <section id="organizers" className="relative py-24 overflow-hidden" data-testid="section-organizers">
      <FloatingGlow color={GOOGLE_GREEN} className="w-80 h-80 right-10 top-10" />
      <FloatingGlow color={GOOGLE_RED} className="w-72 h-72 left-0 bottom-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GOOGLE_BLUE }}>The Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2" data-testid="text-organizers-title">Meet the Organizers</h2>
            <p className="text-white/40 mt-3">The passionate team behind TechSprint 2.0</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((person, index) => (
            <AnimatedSection key={person.name} delay={index * 0.08}>
              <Card
                className="group border-white/10 overflow-visible transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
                data-testid={`card-organizer-${person.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-8 flex flex-col items-center gap-4 text-center">
                  <Avatar className="w-28 h-28 shrink-0" style={{ border: `3px solid ${person.color}50` }}>
                    {person.photo && <AvatarImage src={person.photo} alt={person.name} className="object-cover" style={person.name.includes("Jaswinder") ? { objectPosition: "center 15%" } : undefined} />}
                    <AvatarFallback
                      className="text-2xl font-bold text-white"
                      style={{ background: `${person.color}20` }}
                    >
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-white">{person.name}</h3>
                    <p className="text-sm mt-1" style={{ color: person.color }}>{person.role}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <HeroSection />
      <VenueSection />
      <PrizesSection />
      <OrganizersSection />
    </>
  );
}
