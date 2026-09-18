"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Briefcase,
  Clock,
  Trophy,
  Bot,
  FileText,
  Mail,
  Copy,
  Check,
  Download,
  Linkedin,
  Github,
  Phone,
  MessageSquare,
  ArrowUpRight,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: any;
  shortcut?: string;
  perform: () => void;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const emailAddress = "navaneethanvs18@gmail.com";

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2500);
  }, []);

  const navigateTo = useCallback((id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  }, []);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: Home,
      shortcut: "H",
      perform: () => navigateTo("home"),
    },
    {
      id: "nav-about",
      title: "Go to About & Persona",
      category: "Navigation",
      icon: User,
      shortcut: "A",
      perform: () => navigateTo("about"),
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: Briefcase,
      shortcut: "P",
      perform: () => navigateTo("projects"),
    },
    {
      id: "nav-timeline",
      title: "Go to Career Timeline & Education",
      category: "Navigation",
      icon: Clock,
      shortcut: "T",
      perform: () => navigateTo("timeline"),
    },
    {
      id: "nav-awards",
      title: "Go to Recognition & Awards",
      category: "Navigation",
      icon: Trophy,
      shortcut: "R",
      perform: () => navigateTo("awards"),
    },
    {
      id: "nav-ai",
      title: "Go to AI Workflow",
      category: "Navigation",
      icon: Bot,
      shortcut: "AI",
      perform: () => navigateTo("ai-workflow"),
    },
    {
      id: "nav-articles",
      title: "Go to Articles & Insights",
      category: "Navigation",
      icon: FileText,
      shortcut: "B",
      perform: () => navigateTo("article"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact Section",
      category: "Navigation",
      icon: Mail,
      shortcut: "C",
      perform: () => navigateTo("contact"),
    },

    // Actions
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      category: "Actions",
      icon: Copy,
      shortcut: "⌘E",
      perform: () => copyToClipboard(emailAddress, "Email Address"),
    },
    {
      id: "action-copy-phone",
      title: "Copy Phone Number",
      category: "Actions",
      icon: Phone,
      shortcut: "⌘P",
      perform: () => copyToClipboard("+91 76390 96688", "Phone Number"),
    },
    {
      id: "action-download-resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: Download,
      shortcut: "⌘D",
      perform: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href =
          "https://drive.google.com/uc?export=download&id=10gFsIBaL8r8K8BQGxeXboBcyvJWmL8zx";
        link.setAttribute("download", "Navaneethan_KV.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },

    // Socials
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      icon: Linkedin,
      perform: () => {
        setIsOpen(false);
        window.open(
          "https://www.linkedin.com/in/navaneethan-k-v-546a9025b",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      id: "social-github",
      title: "Open GitHub Profile",
      category: "Social",
      icon: Github,
      perform: () => {
        setIsOpen(false);
        window.open(
          "https://github.com/navanee1609",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      id: "social-whatsapp",
      title: "Chat on WhatsApp",
      category: "Social",
      icon: MessageSquare,
      perform: () => {
        setIsOpen(false);
        window.open(
          "https://wa.me/917639096688?text=Hi%20Navaneethan,%20I%20saw%20your%20portfolio!",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard shortcut listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Lock scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard arrow keys & Enter navigation
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].perform();
    }
  };

  return (
    <>
      {/* Toast Notification when items are copied */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] px-4 py-2 rounded-full bg-emerald-400 text-gray-950 font-semibold text-xs shadow-2xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{copiedText} copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Command Palette Dialog (Minimal Dynamic Island Capsule) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Soft Translucent Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md pointer-events-auto"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-14 sm:pt-20 px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full max-w-lg bg-gray-950/90 border border-white/15 rounded-[32px] sm:rounded-[36px] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden pointer-events-auto relative text-white backdrop-blur-3xl p-3 sm:p-4"
              >
                {/* Search Bar Capsule */}
                <div className="relative z-10 flex items-center px-4 py-3 rounded-full bg-white/[0.07] border border-white/10 focus-within:border-white/25 focus-within:bg-white/10 transition-all gap-3">
                  <Search className="w-4 h-4 text-emerald-400 shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setSelectedIndex(0);
                    }}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Search sections or actions..."
                    className="w-full bg-transparent text-white placeholder-white/40 text-xs sm:text-sm outline-none font-medium"
                  />
                  {search ? (
                    <button
                      onClick={() => setSearch("")}
                      className="text-white/40 hover:text-white transition p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-white/50 border border-white/10">
                      ESC
                    </span>
                  )}
                </div>

                {/* Command Items Capsule List */}
                <div className="relative z-10 max-h-[340px] overflow-y-auto mt-2.5 p-1 space-y-1 scrollbar-none">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd, idx) => {
                      const Icon = cmd.icon;
                      const isSelected = selectedIndex === idx;

                      return (
                        <motion.button
                          key={cmd.id}
                          onClick={() => cmd.perform()}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          whileHover={{ x: 2 }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-full text-left text-xs sm:text-sm transition-all cursor-pointer ${
                            isSelected
                              ? "bg-white/12 text-white border border-white/20 shadow-md"
                              : "text-white/70 hover:text-white bg-transparent border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                isSelected
                                  ? "bg-emerald-400 text-gray-950 font-bold shadow-sm"
                                  : "bg-white/10 text-emerald-400"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>

                            <span className="truncate font-medium text-xs sm:text-sm">
                              {cmd.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {cmd.shortcut && (
                              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9.5px] font-mono">
                                {cmd.shortcut}
                              </span>
                            )}
                            <ArrowUpRight
                              className={`w-3.5 h-3.5 transition-transform ${
                                isSelected
                                  ? "text-emerald-400 opacity-100"
                                  : "text-white/20 opacity-50"
                              }`}
                            />
                          </div>
                        </motion.button>
                      );
                    })
                  ) : (
                    <div className="py-10 text-center text-white/40 text-xs font-mono">
                      No matching commands found.
                    </div>
                  )}
                </div>

                {/* Minimal Footer */}
                <div className="relative z-10 mt-2 pt-2 px-3 flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DevFolio Capsule</span>
                  </span>

                  <span className="flex items-center gap-2">
                    <span>↑↓ Navigate</span>
                    <span>↵ Open</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
