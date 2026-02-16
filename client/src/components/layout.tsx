import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import {
  GOOGLE_BLUE,
  GOOGLE_RED,
  GOOGLE_YELLOW,
  GOOGLE_GREEN,
  REGISTER_URL,
} from "@/lib/constants";

function Navbar() {
  const [location] = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Themes", href: "/themes" },
    { label: "Timeline", href: "/timeline" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
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
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_BLUE }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_RED }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_YELLOW }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOOGLE_GREEN }} />
          </div>
          <span className="font-bold text-sm text-white/90">TechSprint 2.0</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                location === link.href
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" data-testid="link-register-nav">
            <Button size="sm" className="bg-white text-black font-semibold">
              Register
            </Button>
          </a>
        </div>
      </div>
    </motion.nav>
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
          <p className="text-sm text-white/30 mb-2">
            Organized by Google Developer Group on Campus
          </p>
          <p className="text-sm text-white/30 mb-6">
            Punjabi University Patiala
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors" data-testid="link-linkedin">
              <SiLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors" data-testid="link-github">
              <SiGithub className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors" data-testid="link-instagram">
              <SiInstagram className="w-4 h-4" />
            </a>
          </div>

          <div className="border-t border-white/5 pt-6">
            <p className="text-xs text-white/20">
              Made with passion for sustainable innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
