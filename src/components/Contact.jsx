import { useState } from "react";
import styles from "../styles";
import emailjs from "emailjs-com";
import useScroll from "../hooks/useScroll.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  // Formik handles the form state internally so we don't need to manually manage state variables
  // However, you can define initial values for form fields as an object
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("form submitted");

    const params = {
      from_name: values.name,
      reply_to: values.email,
      to_name: "Brian Mara",
      subject: values.subject,
      message: values.message,
    };

    emailjs
      .send("contact_service", "contact_form", params, "Vkara19Iw-qCxqrLE")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully.");
          resetForm();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  useScroll();

  return (
    <section
      id="contacts"
      className="flex flex-col justify-center lg:h-screen mb-20 md:mb-0 md:h-[700px] gap-20"
    >
      <div
        className="flex flex-col items-center gap-5 justify-center pt-20"
        data-aos="fade-down"
      >
        <h1 className={`${styles.heading1}`}>Let&apos;s work together </h1>
        <p className={`${styles.paragraph} text-center`}>
          Do you have a project in your mind, contact me here.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-y-10 md:justify-between w-full ">
        <div
          className="contact-info relative flex flex-col justify-center items-center border-2 border-white w-[80%] sm:w-[60%] md:w-[48%] h-[380px] rounded-3xl space-y-3 cursor-pointer overflow-hidden shadow-contact z-10"
          data-aos="fade-right"
        >
          <h2 className="font-poppins font-bold text-2xl text-white z-10">
            Find me
            <i className="fa-solid fa-arrow-turn-down text-[15px] ml-3 z-10"></i>
          </h2>
          <p className="font-poppins font-normal text-white italic z-10">
            <i className="fa-regular fa-envelope mr-2 z-10"></i>
            Email: brianmara123@gmail.com
          </p>
          <p className="font-poppins font-normal text-white italic z-10">
            <i className="fa-solid fa-phone mr-2 z-10"></i>
            Phone: +639635325851
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              className="flex flex-col w-[80%] sm:w-[60%] md:w-[48%] h-[380px] space-y-4"
              data-aos="fade-left"
            >
              <div className="flex justify-between w-full">
                <div className="w-[48%]">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent font-poppins font-normal text-md text-white border-2 border-[#777] px-4 py-4 rounded-xl"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[48%]">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent font-poppins font-normal text-md text-white border-2 border-[#777] px-4 py-4 rounded-xl"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent font-poppins font-normal text-md text-white border-2 border-[#777] px-4 py-4 rounded-xl"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-col flex-1">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-full flex-1 bg-transparent font-poppins font-normal text-md text-white border-2 border-[#777] px-4 py-4 rounded-xl"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex absolute -bottom-16 left-[50%] bg-vivid text-white font-poppins font-semibold py-2 px-4 rounded-3xl"
                data-aos="fade-right"
                style={{ transform: "translate(-50%, 0)" }}
              >
                {isSubmitting ? "Sending..." : "Send"}{" "}
                <i className="fa-regular fa-paper-plane ml-2"></i>
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
