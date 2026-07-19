"use client"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import instagramImg from "@/assets/images/instagram.png"
import whatsappImg from "@/assets/images/whatsapp.png"
import mailImg from "@/assets/images/mail.png"
import phoneImg from "@/assets/images/phone.png"

const contactLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/navneethkrishna_05/profilecard/?igsh=enk2MzVleHo5NTZl",
    img: instagramImg,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/7639096688",
    img: whatsappImg,
  },
  {
    label: "Email",
    href: "mailto:navaneethanvs18@gmail.com",
    img: mailImg,
  },
  {
    label: "Phone",
    href: "tel:+6380939303",
    img: phoneImg,
  },
];

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setIsSuccess(true);
        setIsSending(false);

        setTimeout(() => {
          setIsOpen(false);
        }, 1000); // Close modal after 1 second
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSending(false);
      });
  };

  const openModal = () => {
    setIsOpen(true);
    setIsSuccess(false); // Reset success message when opening modal
    setIsSending(false); // Reset sending state
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSuccess(false); // Reset success state when closing the modal
    setIsSending(false); // Reset sending state
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <section id="contact">
      <div className="py-16 pt-12">
        <div className="container">
          <div
            className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-6 px-8 rounded-3xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-4 lg:gap-6 relative overflow-hidden"
          >
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-serif leading-snug">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-md mt-2 leading-relaxed">
                I&apos;m passionate about building unique and impactful solutions. Let&apos;s work together to bring your vision to life, combining creativity with precision.
              </p>
            </div>

            <div className="lg:w-1/4 lg:flex lg:justify-end z-[1000]">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 lg:mt-0"
                onClick={openModal}
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUp className="size4" />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="contact-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut", when: "beforeChildren" }}
              className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                className={twMerge(
                  "bg-gray-800 bg-gradient-to-br from-emerald-400/6 via-sky-400/6 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]",
                  "transition-all duration-500 ease-out"
                )}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <motion.button
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition"
                  onClick={closeModal}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl text-black" />
                </motion.button>

                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                    zIndex: -1,
                  }}
                ></div>

                <h2 className="text-xl font-semibold mb-4 text-center text-white">Contact Me</h2>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="89c046ff-8f76-47dd-9562-7105809a3576"
                  />
                  <div className="flex flex-col md:flex-row gap-4">
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                      required
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                      required
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    required
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    required
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    rows={4}
                    required
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.textarea>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="w-full bg-gray-900 text-white py-2 rounded-md"
                  >
                    {isSending
                      ? "Sending..."
                      : isSuccess
                        ? "Thanks for Contacting!"
                        : "Send"}
                  </motion.button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                  Reach out me
                </p>

                <div className="mt-6 flex items-end justify-center gap-3">
                  {contactLinks.map((item, i) => {
                    const img = item.img;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 20 }}
                        whileHover={{
                          y: -10,
                          scale: 1.25,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                        whileTap={{
                          scale: 0.9,
                          transition: { type: "spring", stiffness: 500, damping: 15 }
                        }}
                        aria-label={item.label}
                        className="group relative flex flex-col items-center"
                      >
                        {/* Icon container */}
                        <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/[0.08] shadow-lg overflow-hidden hover:border-emerald-500/20 transition-all duration-300">
                          {/* Glossy top highlight */}
                          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                          {/* Icon */}
                          <img
                            src={img.src ?? img}
                            alt={item.label}
                            className="relative h-5 w-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>

                        {/* Tooltip label */}
                        <span className="absolute -top-7 px-2 py-0.5 bg-black/80 rounded-md text-[10px] text-white/70 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          {item.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
