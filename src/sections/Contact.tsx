"use client";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { useSnackbar, SnackbarProvider } from "notistack";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

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
          enqueueSnackbar("Thanks for Contacting!", { variant: "success" });
        }, 1000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSending(false);
        enqueueSnackbar("Submission Failed. Please try again.", { variant: "error" });
      });
  };

  return (
    <section id="contact">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        style={{ zIndex: 9999 }} // Increase z-index for Snackbar
      >
        <div className="py-16 pt-12">
          <div className="container">
            {/* Section layout */}
            <div
              className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 relative overflow-hidden"
            >
              {/* Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-serif">Let's Create Something Amazing Together</h2>
                <p className="text-sm mt-2">
    I'm passionate about building unique and impactful solutions. Let's work together to bring your vision to life, combining creativity with precision.
  </p>
              </div>

              {/* Button */}
              <div className="lg:w-1/2 lg:flex lg:justify-center z-[1000]">
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 lg:mt-0 " // Increased z-index
                  onClick={() => setIsOpen(true)}
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUp className="size4" />
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isOpen && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center mx-2 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={twMerge(
                  "bg-gray-800 rounded-3xl p-6 w-full max-w-md relative z-0 overflow-hidden after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none after:z-[-1]",
                  "transition-all transform duration-500 ease-out opacity-0 scale-95",
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white rounded-full p-2 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>

                {/* Background grain image */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                    zIndex: -1, // Ensure background image is below the content
                  }}
                ></div>

                {/* Modal Content */}
                <h2 className="text-xl font-semibold mb-4 text-center text-white">Contact Me</h2>

                {/* Form */}
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="89c046ff-8f76-47dd-9562-7105809a3576" // Your Web3Forms access key
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-emerald-400 rounded-md text-gray-500 bg-transparent"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 rounded-md"
                  >
                    {isSending ? "Sending..." : isSuccess ? "Thanks for Contacting!" : "Send"}
                  </button>
                </form>

                {/* Additional text below the Send button */}
                <p className="text-sm text-gray-500 text-center mt-4">
                  Or reach out to me via these platforms:
                </p>

                {/* Social media icons below */}
                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900 transition" />
                  </a>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <FaWhatsapp className="text-2xl text-gray-700 hover:text-gray-900 transition" />
                  </a>
                  <a
                    href="mailto:someone@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <FaEnvelope className="text-2xl text-gray-700 hover:text-gray-900 transition" />
                  </a>
                  <a
                    href="tel:+123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <FaPhone className="text-2xl text-gray-700 hover:text-gray-900 transition" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full"
                  >
                    <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900 transition" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </SnackbarProvider>
    </section>
  );
};
