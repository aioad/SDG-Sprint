import {
  Zap,
  Leaf,
  Recycle,
  Heart,
  Lightbulb,
  Users,
  Trophy,
} from "lucide-react";
import williamSirImg from "@assets/William_Sir_1771197103927.png";
import jaswinderSirImg from "@assets/WhatsApp_Image_2026-02-14_at_2.31.06_AM_1771197172065.jpeg";
import dashmeetImg from "@assets/WhatsApp_Image_2026-02-14_at_2.40.41_AM_1771197210125.jpeg";

export const GOOGLE_BLUE = "#4285F4";
export const GOOGLE_RED = "#EA4335";
export const GOOGLE_YELLOW = "#FBBC05";
export const GOOGLE_GREEN = "#34A853";

export const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfuiajVfAZj8xD9s30M2Wea4dnqz6MlzeSadHrQFhAjAY1SQg/viewform";
export const PPT_URL = "https://docs.google.com/presentation/d/11zLOAuVuNhmsuZBIEs5m1XC1zXCESzIB2IIgdtFD4EQ/edit?slide=id.p1#slide=id.p1";

export const themes = [
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

export const timeline = [
  {
    day: "Day 1",
    title: "Ideathon",
    date: "Opening Ceremony & Ideathon",
    events: [
      { time: "09:30 AM", label: "Registration & Check-in" },
      { time: "10:00 AM", label: "Opening Ceremony + SDG Theme Briefing" },
      { time: "10:30 AM", label: "Ideathon Begin" },
      { time: "01:00 PM", label: "Progress Check-in" },
      { time: "02:00 PM", label: "Pitching Round" },
      { time: "04:00 PM", label: "Day-1 Concludes" },
    ],
    color: GOOGLE_BLUE,
    icon: Lightbulb,
  },
  {
    day: "Day 2",
    title: "Hackathon",
    date: "Build, Code & Innovate",
    events: [
      { time: "09:30 AM", label: "Hackathon Begin" },
      { time: "12:00 PM", label: "Progress Check-in(1)" },
      { time: "01:00 PM", label: "Challenge Chits" },
      { time: "02:00 PM", label: "Progress Check-in(2)" },
      { time: "04:30 PM", label: "Day-2 Conlcudes" },
    ],
    color: GOOGLE_YELLOW,
    icon: Users,
  },
  {
    day: "Day 3",
    title: "Demo & Awards",
    date: "Present & Celebrate",
    events: [
      { time: "09:30 AM", label: "Entry" },
      { time: "10:00 AM", label: "Final Presentations + Judging Panel Deliberation" },
      { time: "01:00 PM", label: "Lunch" },
      { time: "02:00 PM", label: "Results Announcements + Awards Ceremony" },
      { time: "04:00 PM", label: "Event Concludes" },
    ],
    color: GOOGLE_GREEN,
    icon: Trophy,
  },
];

export const rules = [
  "Teams must consist of 4-5 members.",
  "All projects must address one of the four SDG themes.",
  "Use of Google Technologies (Firebase, Google Cloud, Flutter, TensorFlow, etc.) is MANDATORY.",
  "Teams must submit a working prototype with a pitch deck.",
  "Judging criteria: Innovation, Impact, Technical Implementation, and Presentation.",
  "All code must be pushed to a public GitHub repository.",
  "Participants must follow the Code of Conduct at all times.",
];

export const organizers = [
  { name: "Dr. Jaswinder Singh", role: "Professor & Head, Dept. of CSE", color: GOOGLE_BLUE, photo: jaswinderSirImg },
  { name: "Dr. Williamjeet Singh", role: "Assistant Professor (Faculty Advisor),      
    Dept. of CSE", color: GOOGLE_RED, photo: williamSirImg },
  { name: "Dashmeet Singh", role: "GDG on Campus PUP Organizer", color: GOOGLE_GREEN, photo: dashmeetImg },
];

export const faqs = [
  {
    question: "What is the theme of TechSprint 2.0?",
    answer: "The event focuses exclusively on Sustainable Development Goals (SDGs). Projects must address real-world challenges like Clean Energy, Climate Action, or Social Equity.",
  },
  {
    question: "Is it mandatory to use Google Technologies?",
    answer: "Yes! To be eligible for prizes, teams must integrate at least one Google technology (e.g., Gemini API, Firebase, Google Cloud, or Flutter) into their final solution.",
  },
  {
    question: "What is the team size requirement?",
    answer: "Teams must consist of 4 to 5 members. This ensures a balanced mix of developers, designers, and presenters within each team.",
  },
  {
    question: "What should we bring to the event?",
    answer: "Bring your laptops, chargers, and any hardware you might need for your prototype. We will provide the internet, mentorship, and a platform to build!",
  },
];
