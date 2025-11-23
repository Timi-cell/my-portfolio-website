import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Samuel Aluko",
          email: form.email,
          to_email: "adedayotimilehin10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Message Successfully Sent! 🎉",
            html: `Thanks for reaching out, ${form.name}. <br />I’ll get back to you ASAP!`,
            icon: "success",

            // ---- CUSTOM STYLING ----
            background: "#1f1f1f",
            color: "#ffffff",
            iconColor: "#4f46e5",
            confirmButtonText: "Okay!",
            confirmButtonColor: "#4f46e5",
            buttonsStyling: false,
            customClass: {
              popup: "rounded-xl shadow-2xl",
              confirmButton:
                "px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition-all",
            },

            // ---- ANIMATION ----
            showClass: {
              popup: "animate__animated animate__fadeInUp",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown",
            },
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          Swal.fire({
            title: "Oops! 😢",
            html: `Something went wrong, ${form.name}. <br />Please try again so that I can attend to you ASAP!.`,
            icon: "error",

            background: "#1f1f1f",
            color: "#ffffff",
            iconColor: "#ef4444",
            confirmButtonText: "Retry",
            confirmButtonColor: "#ef4444",
            buttonsStyling: false,
            customClass: {
              popup: "rounded-xl shadow-2xl",
              confirmButton:
                "px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all",
            },

            showClass: {
              popup: "animate__animated animate__fadeInUp",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown",
            },
          });
        }
      );
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" bg-black-100 p-8 rounded-2xl w-full md:w-[75%] "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message For Me
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary 
    ${
      !isFormValid || loading
        ? "opacity-30 cursor-not-allowed"
        : "opacity-100 cursor-pointer"
    }`}
          >
            {loading ? "Sending message..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
