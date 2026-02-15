import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gdgLogo from "@assets/NEW_LOGO-removebg-preview_1771195095243.png";
import uniLogo from "@assets/OIP-removebg-preview_1771195983791.png";
import {
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  Download,
  Zap,
  Leaf,
  Recycle,
  Heart,
  Trophy,
  Lightbulb,
  Presentation,
  Users,
  FileText,
  ChevronRight,
  Globe,
  ArrowRight,
} from "lucide-react";
import { SiGoogle, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import williamSirImg from "@assets/William_Sir_1771197103927.png";
import jaswinderSirImg from "@assets/WhatsApp_Image_2026-02-14_at_2.31.06_AM_1771197172065.jpeg";
import dashmeetImg from "@assets/WhatsApp_Image_2026-02-14_at_2.40.41_AM_1771197210125.jpeg";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingGlow({ color, className }: { color: string; className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      style={{ background: color }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const GOOGLE_BLUE = "#4285F4";
const GOOGLE_RED = "#EA4335";
const GOOGLE_YELLOW = "#FBBC05";
const GOOGLE_GREEN = "#34A853";

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfuiajVfAZj8xD9s30M2Wea4dnqz6MlzeSadHrQFhAjAY1SQg/viewform";
const TEAM_URL = "#organizers";
const PPT_URL = "https://docs.google.com/presentation/d/11zLOAuVuNhmsuZBIEs5m1XC1zXCESzIB2IIgdtFD4EQ/edit?slide=id.p1#slide=id.p1";

const themes = [
  {
    title: "Clean Energy",
    description: "Innovate solutions for affordable, reliable, and sustainable energy access for all communities.",
    icon: Zap,
    color: GOOGLE_YELLOW,
    sdg: "SDG 7",
  },
  {
    title: "Climate Action",
    description: "Build tools and technologies to combat climate change and its devastating impacts.",
    icon: Leaf,
    color: GOOGLE_GREEN,
    sdg: "SDG 13",
  },
  {
    title: "Waste Management",
    description: "Create innovative approaches to reduce, reuse, and recycle waste for sustainable cities.",
    icon: Recycle,
    color: GOOGLE_BLUE,
    sdg: "SDG 11 & 12",
  },
  {
    title: "Social Equity",
    description: "Develop inclusive platforms that bridge gaps in education, healthcare, and opportunity.",
    icon: Heart,
    color: GOOGLE_RED,
    sdg: "SDG 10",
  },
];

const timeline = [
  {
    day: "Day 1",
    title: "Ideathon",
    date: "Opening Ceremony & Ideation",
    events: [
      { time: "09:00 AM", label: "Registration & Check-in" },
      { time: "10:00 AM", label: "Opening Ceremony & Keynote" },
      { time: "11:30 AM", label: "SDG Theme Briefing" },
      { time: "01:00 PM", label: "Ideation Workshop" },
      { time: "03:00 PM", label: "Team Formation & Pitch Practice" },
      { time: "05:00 PM", label: "Idea Submission Deadline" },
    ],
    color: GOOGLE_BLUE,
    icon: Lightbulb,
  },
  {
    day: "Day 2",
    title: "72hr Hackathon",
    date: "Build, Code & Innovate",
    events: [
      { time: "08:00 AM", label: "Hackathon Kickoff" },
      { time: "10:00 AM", label: "Mentor Sessions Begin" },
      { time: "01:00 PM", label: "Progress Check-in #1" },
      { time: "04:00 PM", label: "Tech Workshops & Resources" },
      { time: "08:00 PM", label: "Progress Check-in #2" },
      { time: "11:59 PM", label: "Midnight Snack & Coding Sprint" },
    ],
    color: GOOGLE_YELLOW,
    icon: Users,
  },
  {
    day: "Day 3",
    title: "Demo & Awards",
    date: "Present & Celebrate",
    events: [
      { time: "09:00 AM", label: "Final Submissions Due" },
      { time: "10:00 AM", label: "Demo Presentations Begin" },
      { time: "01:00 PM", label: "Judging Panel Deliberation" },
      { time: "03:00 PM", label: "Awards Ceremony" },
      { time: "04:30 PM", label: "Networking & Closing" },
      { time: "05:00 PM", label: "Event Concludes" },
    ],
    color: GOOGLE_GREEN,
    icon: Trophy,
  },
];

const rules = [
  "Teams must consist of 4-5 members.",
  "All projects must address one of the four SDG themes.",
  "Use of Google Technologies (Firebase, Google Cloud, Flutter, TensorFlow, etc.) is MANDATORY.",
  "Teams must submit a working prototype with a pitch deck.",
  "Judging criteria: Innovation, Impact, Technical Implementation, and Presentation.",
  "All code must be pushed to a public GitHub repository.",
  "Participants must follow the Code of Conduct at all times.",
];

const organizers = [
  { name: "Dr. Jaswinder Singh", role: "Professor & Head, Dept. of CSE", color: GOOGLE_BLUE, photo: jaswinderSirImg },
  { name: "Dr. Williamjeet Singh", role: "Assistant Professor, Dept. of CSE", color: GOOGLE_RED, photo: williamSirImg },
  { name: "Dashmeet Singh", role: "GDG on Campus Lead", color: GOOGLE_GREEN, photo: dashmeetImg },
];

function Navbar() {
  const links = [
    { label: "Venue", href: "#venue" },
    { label: "Themes", href: "#themes" },
    { label: "Timeline", href: "#timeline" },
    { label: "Resources", href: "#resources" },
    { label: "Team", href: "#organizers" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(10, 10, 10, 0.8)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2" data-testid="link-home">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_BLUE }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_RED }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_YELLOW }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_GREEN }} />
          </div>
          <span className="font-bold text-sm text-white/90">TechSprint 2.0</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a href={REGISTER_URL} data-testid="link-register-nav">
            <Button size="sm" className="bg-white text-black font-semibold">
              Register
            </Button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" data-testid="section-hero">
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
          <a href={REGISTER_URL} data-testid="button-register">
            <Button size="lg" className="bg-white text-black font-semibold px-8 gap-2">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href={TEAM_URL} data-testid="button-meet-team">
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
            <span>200+ Hackers</span>
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

function ThemesSection() {
  return (
    <section id="themes" className="relative py-24 overflow-hidden" data-testid="section-themes">
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

function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 overflow-hidden" data-testid="section-timeline">
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

function ResourcesSection() {
  return (
    <section id="resources" className="relative py-24 overflow-hidden" data-testid="section-resources">
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
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center border border-white/10"
                    style={{ background: `${GOOGLE_RED}15` }}>
                    <FileText className="w-5 h-5" style={{ color: GOOGLE_RED }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Event Rules</h3>
                </div>

                <ul className="space-y-3">
                  {rules.map((rule, i) => {
                    const hasMandatory = rule.includes("MANDATORY");
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOOGLE_RED }} />
                        <span className="text-sm text-white/50 leading-relaxed">
                          {hasMandatory ? (
                            <>
                              {rule.split("MANDATORY")[0]}
                              <strong className="text-white font-bold">MANDATORY</strong>
                              {rule.split("MANDATORY")[1]}
                            </>
                          ) : rule}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="border-white/10 overflow-visible h-full flex flex-col"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center border border-white/10"
                    style={{ background: `${GOOGLE_YELLOW}15` }}>
                    <Presentation className="w-5 h-5" style={{ color: GOOGLE_YELLOW }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Pitch Deck Template</h3>
                </div>

                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  Use our official PPT Pitch Deck Template to present your ideas effectively.
                  The template includes sections for Problem Statement, Solution, Technical Architecture,
                  SDG Impact, Business Model, and Demo.
                </p>

                <div className="rounded-md border border-white/10 p-6 text-center mb-6 flex-1 flex flex-col items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="w-16 h-16 rounded-md flex items-center justify-center mb-4 border border-white/10"
                    style={{ background: `${GOOGLE_YELLOW}10` }}>
                    <Presentation className="w-8 h-8" style={{ color: GOOGLE_YELLOW }} />
                  </div>
                  <p className="text-sm text-white/50 mb-1">TechSprint 2.0</p>
                  <p className="text-xs text-white/30">Official Pitch Deck Template (.pptx)</p>
                </div>

                <a href={PPT_URL} target="_blank" rel="noopener noreferrer" className="block" data-testid="button-download-ppt">
                  <Button className="w-full bg-white text-black font-semibold gap-2">
                    <Download className="w-4 h-4" />
                    Download Pitch Deck Template
                  </Button>
                </a>
              </div>
            </Card>
          </AnimatedSection>
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

function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_BLUE }} />
              <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_RED }} />
              <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_YELLOW }} />
              <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_GREEN }} />
            </div>
            <span className="font-bold text-white/80">TechSprint 2.0</span>
          </div>
          <p className="text-sm text-white/30 mb-6">
            Organized by <span className="text-white/50">Google Developer Group on Campus</span> at Punjabi University Patiala
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center border border-white/10 text-white/40 transition-colors duration-200 hover:text-white hover:border-white/20" style={{ background: "rgba(255,255,255,0.03)" }} data-testid="link-social-linkedin">
              <SiLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center border border-white/10 text-white/40 transition-colors duration-200 hover:text-white hover:border-white/20" style={{ background: "rgba(255,255,255,0.03)" }} data-testid="link-social-github">
              <SiGithub className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center border border-white/10 text-white/40 transition-colors duration-200 hover:text-white hover:border-white/20" style={{ background: "rgba(255,255,255,0.03)" }} data-testid="link-social-instagram">
              <SiInstagram className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-white/20">
            Made with passion for sustainable development
          </p>
        </div>
      </div>
    </footer>
  );
}

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center cursor-pointer"
      onClick={onComplete}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      data-testid="splash-screen"
    >
      <FloatingGlow color={GOOGLE_BLUE} className="w-72 h-72 -top-10 -left-10" />
      <FloatingGlow color={GOOGLE_GREEN} className="w-64 h-64 bottom-10 right-10" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center w-full"
        >
          <img
            src={gdgLogo}
            alt="Google Developer Group On Campus PUP"
            className="w-96 sm:w-[32rem] object-contain translate-x-3 sm:translate-x-4"
            data-testid="img-gdg-logo"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/40 text-lg sm:text-xl tracking-wide mt-10"
          data-testid="text-presents"
        >
          presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl font-bold tracking-tight mt-4"
          data-testid="text-splash-title"
        >
          <span className="text-white">Tech</span>
          <span
            style={{
              background: `linear-gradient(135deg, ${GOOGLE_BLUE}, ${GOOGLE_RED}, ${GOOGLE_YELLOW}, ${GOOGLE_GREEN})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sprint
          </span>
          <span className="text-white"> 2.0</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="mt-12 text-xs text-white/20"
        >
          Click anywhere to continue
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <Navbar />
      <HeroSection />
      <VenueSection />
      <ThemesSection />
      <TimelineSection />
      <ResourcesSection />
      <OrganizersSection />
      <Footer />
    </div>
  );
}
