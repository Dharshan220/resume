/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Flame, 
  Zap, 
  Award, 
  ChevronRight,
  User,
  Code,
  Briefcase,
  Trophy,
  Phone,
  Home as HomeIcon,
  Terminal,
  FileCode,
  Wifi,
  CircuitBoard,
  Microchip,
  Monitor,
  GitBranch,
  Bot,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "./assets/profile.jpeg";
import sihImg from "./assets/sih2025.jpeg";
import presentationImg from "./assets/presentation.jpeg";
import gasAndFireImg from "./assets/gas_and_fire.jpeg";
import aptbotImg from "./assets/aptbot.jpeg";

const IMAGES = {
  profile: profileImg,
  sih: sihImg,
  presentation: presentationImg,
  aptBotInternal: gasAndFireImg,
  aptBotFront: aptbotImg,
};

// Helper for image fallbacks
const ImageWithFallback = ({ src, alt, className, ...props }: any) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://picsum.photos/seed/${alt.replace(/\s+/g, '-').toLowerCase()}/800/800`;
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <a 
      href={`#${id}`}
      onClick={() => setActiveSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id 
          ? "bg-brand-accent text-white shadow-lg" 
          : "text-brand-ink/60 hover:text-brand-ink hover:bg-brand-accent/10"
      }`}
    >
      <Icon size={18} />
      <span className="hidden md:inline text-sm font-medium uppercase tracking-wider">{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full p-2 flex items-center gap-1 shadow-xl border border-brand-accent/10">
        <NavItem id="home" label="Home" icon={HomeIcon} />
        <NavItem id="about" label="About" icon={User} />
        <NavItem id="skills" label="Skills" icon={Code} />
        <NavItem id="projects" label="Projects" icon={Briefcase} />
        <NavItem id="achievements" label="Achievements" icon={Trophy} />
        <NavItem id="contact" label="Contact" icon={Phone} />
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
            <ImageWithFallback 
              src={IMAGES.profile} 
              alt="Dharshan Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-xl z-20 animate-bounce">
            <Zap size={32} />
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Dharshan <span className="italic font-normal text-brand-accent">ECE Student</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink/70 font-light mb-8 leading-relaxed">
            IoT & AI Enthusiast. Building smart solutions using technology to solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-brand-accent/20 flex items-center gap-2">
              Let's Connect <ChevronRight size={20} />
            </a>
            <a href="#projects" className="bg-white border border-brand-accent/20 text-brand-ink px-8 py-4 rounded-full font-medium hover:bg-brand-accent/5 transition-all flex items-center gap-2">
              View My Work
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-columns-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={IMAGES.presentation} 
                alt="Dharshan Presentation" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-brand-accent/30 rounded-tl-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-brand-accent/30 rounded-br-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-brand-ink/80 leading-relaxed font-light">
              <p>
                I am an Electronics and Communication Engineering student with a strong interest in <span className="font-medium text-brand-accent">Internet of Things (IoT)</span>, <span className="font-medium text-brand-accent">Embedded Systems</span>, and <span className="font-medium text-brand-accent">Artificial Intelligence</span>.
              </p>
              <p>
                I enjoy designing and developing practical solutions that can create real-world impact. I am passionate about learning new technologies, working on innovative projects, and continuously improving my technical and problem-solving skills.
              </p>
              <div className="pt-6">
                <h3 className="text-2xl mb-4 font-serif italic">Career Objective</h3>
                <p className="border-l-4 border-brand-accent pl-6 italic">
                  "To build a career in the field of Embedded Systems and IoT, where I can apply my knowledge, enhance my skills, and contribute to innovative technological solutions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">My Toolkit</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto">A blend of core engineering principles and modern development tools.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl shadow-sm"
            >
              <h3 className="text-2xl mb-8 flex items-center gap-3">
                <Cpu className="text-brand-accent" /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "C Programming", icon: Terminal },
                  { name: "Python (Basics)", icon: FileCode },
                  { name: "Arduino & IoT", icon: Wifi },
                  { name: "Embedded Systems", icon: CircuitBoard },
                  { name: "VLSI (Basics)", icon: Microchip }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <skill.icon size={20} />
                    </div>
                    <span className="text-brand-ink/80 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-3xl shadow-sm"
            >
              <h3 className="text-2xl mb-8 flex items-center gap-3">
                <Code className="text-brand-accent" /> Tools & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Arduino IDE", icon: Cpu },
                  { name: "VS Code", icon: Monitor },
                  { name: "Git & GitHub", icon: GitBranch },
                  { name: "AI TOOLS", icon: Bot }
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <tool.icon size={20} />
                    </div>
                    <span className="text-brand-ink/80 font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
              <p className="text-brand-ink/60">Practical applications of IoT and Embedded Systems.</p>
            </div>
            <div className="bg-brand-accent/10 px-6 py-3 rounded-2xl border border-brand-accent/20">
              <span className="text-brand-accent font-medium">Startup: NANO SPARK</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Apt Bot */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video shadow-lg">
                <ImageWithFallback 
                  src={IMAGES.aptBotFront} 
                  alt="IoT Smart Delivery Bot" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-sm">Smart bot for apartment deliveries with safety sensors.</p>
                </div>
              </div>
              <h3 className="text-2xl mb-3">IoT Smart Delivery & Safety Bot</h3>
              <p className="text-brand-ink/70 mb-4 font-light">
                Developed a smart bot for delivering essentials like food and clothes within apartments. Equipped with gas and fire sensors for maximum safety.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Sensors", "IoT", "Embedded"].map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-widest bg-brand-bg px-3 py-1 rounded-full border border-brand-accent/10">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border border-brand-accent/10 shrink-0">
                  <ImageWithFallback 
                    src={IMAGES.aptBotInternal} 
                    alt="Internal View" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-brand-ink/50 italic">Internal circuitry & sensor placement view</p>
                </div>
              </div>
            </motion.div>

            {/* Fire & Gas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video shadow-lg">
                <ImageWithFallback 
                  src={IMAGES.aptBotInternal} 
                  alt="Fire & Gas Detection System" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-sm">Real-time alerting system for fire and gas safety.</p>
                </div>
              </div>
              <h3 className="text-2xl mb-3">Fire & Gas Detection System</h3>
              <p className="text-brand-ink/70 mb-4 font-light">
                Designed a real-time alerting system that detects fire and gas leakage to prevent accidents in residential and industrial settings.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Gas Sensor", "Temp Sensor", "Safety"].map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-widest bg-brand-bg px-3 py-1 rounded-full border border-brand-accent/10">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-padding bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">Achievements</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Briefcase className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Co-Founder, NANO SPARK</h4>
                    <p className="text-brand-ink/70 font-light">Co-founded an apartment-based delivery service startup focusing on smart automation.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Award className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Smart India Hackathon 2025</h4>
                    <p className="text-brand-ink/70 font-light">Proud Finalist in SIH 2025, one of India's biggest open innovation models.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Zap className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Active Learner</h4>
                    <p className="text-brand-ink/70 font-light">Consistently building and iterating on hardware projects to solve local problems.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <ImageWithFallback 
                  src={IMAGES.sih} 
                  alt="SIH 2025 Achievement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-brand-accent font-serif italic text-lg leading-tight">"Finalist at SIH 2025"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8">Get In Touch</h2>
          <p className="text-xl text-brand-ink/60 mb-12 font-light">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="mailto:dharshane21@gmail.com" className="glass p-8 rounded-3xl hover:bg-brand-accent hover:text-white transition-all group">
              <Mail className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <p className="font-medium">Email Me</p>
              <p className="text-sm opacity-70">dharshane21@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/dharshan-e-694a82329" target="_blank" rel="noopener noreferrer" className="glass p-8 rounded-3xl hover:bg-brand-accent hover:text-white transition-all group">
              <Linkedin className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm opacity-70">Connect with me</p>
            </a>
            <a href="https://github.com/Dharshan220" target="_blank" rel="noopener noreferrer" className="glass p-8 rounded-3xl hover:bg-brand-accent hover:text-white transition-all group">
              <Github className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <p className="font-medium">GitHub</p>
              <p className="text-sm opacity-70">Check my code</p>
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent/20 shadow-sm">
              <ImageWithFallback src={IMAGES.profile} alt="Small Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-brand-ink/40 text-sm uppercase tracking-[0.2em]">Designed & Developed by Dharshan</p>
              <div className="w-12 h-1 bg-brand-accent/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-brand-ink/30 text-xs border-t border-brand-accent/5">
        &copy; {new Date().getFullYear()} Dharshan. All rights reserved.
      </footer>
    </div>
  );
}
