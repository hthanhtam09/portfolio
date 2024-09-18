import SectionWrapper from "@/hoc/SectionWrapper";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { githubIcon, linkedinIcon } from "@/assets";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const IconImage = [
  {
    src: githubIcon.src,
    alt: "github",
    href: "https://github.com/",
  },
  {
    src: linkedinIcon.src,
    alt: "linkedin",
    href: "https://linkedin.com/",
  },
];

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value, // Dynamically set the field based on the input's id
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .send(
        process.env.serviceIdEmail ?? "",
        process.env.templateIdEmail ?? "",
        {
          from_name: formData.email,
          to_name: formData.username,
          message: formData.message,
        },
        {
          publicKey: process.env.publicKeyEmail ?? "",
        }
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <motion.form
      variants={textVariant()}
      onSubmit={handleSubmit}
      className="w-1/2 border rounded-3xl p-20"
      ref={formRef}
    >
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nguyen Van A"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </span>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="NguyenVanA@gmail.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a message..."
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          {IconImage.map((icon) => (
            <Link key={icon.alt} href={icon.href}>
              <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
            </Link>
          ))}
        </div>
        <button
          type="submit"
          className="text-white bg-[#03a9f445] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

const Contact = () => {
  return (
    <div
      className="relative z-50 h-screen flex flex-col justify-center items-center"
      id="contact"
    >
      <motion.div variants={textVariant()}>
        <motion.p
          variants={textVariant(0.5)}
          className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider text-center"
        >
          - Say hi 👋 -
        </motion.p>
        <motion.h2
          variants={textVariant(1)}
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
        >
          Contact our team
        </motion.h2>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default SectionWrapper(Contact);
