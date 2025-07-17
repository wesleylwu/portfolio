"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const formAnimation = {
  initial: { scale: 0.9, opacity: 0, y: 0, x: 10 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: 0.3 },
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>
      <p className="text-glow-green text-green-neon p-8 text-center text-5xl">
        Contact
      </p>
      <div className="mx-auto flex w-2/3 justify-center pb-12">
        <motion.div
          className="rounded-4xl border-3 p-8 md:w-2/3"
          initial={formAnimation.initial}
          animate={formAnimation.animate}
          transition={formAnimation.transition}
        >
          {isSubmitted ? (
            <div className="font-quicksand flex flex-col items-center text-center text-xl sm:text-2xl">
              Form Submitted!
            </div>
          ) : (
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSeYyIU3k7Ln6LiohuWma4ZAqXxghR5Y_s12oObQr-8JEL_c-w/formResponse"
              onSubmit={() => (window.submitted = true)}
              target="hidden_iframe"
            >
              <div className="font-quicksand block text-2xl font-bold">
                Name
              </div>
              <input
                name="entry.495580574"
                type="text"
                placeholder="Name"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-quicksand mt-4 block text-2xl font-bold">
                Email
              </div>
              <input
                name="entry.1903916603"
                type="email"
                placeholder="Email"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-quicksand mt-4 block text-2xl font-bold">
                Message
              </div>
              <textarea
                name="entry.477008615"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-6 font-medium text-black"
                required
              />
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="mt-4 flex justify-center">
                  <button className="bg-blue-secondary w-30 cursor-pointer rounded-2xl border-1 p-3 text-center text-xl">
                    Submit
                  </button>
                </div>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
