import React, { useRef } from "react";
import "../styles/css/contact.min.css";
// import image from "../assets/image2.jpg";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

const Contact = () => {
  const Schema = yup.object({
    user_email: yup
      .string()
      .email("email required")
      .required("email field is required"),
    subject: yup.string().required("subject is required"),
    message: yup.string().required("message body is required"),
  });

  const form = useRef();

  const onSubmit = (values, actions) => {
    // e.preventDefault();
    console.log(values);
    emailjs
      .sendForm(
        "service_xevny38",
        "template_0v6clx7",
        form.current,
        "x8b-uiEYCAK-uKH4E"
      )
      .then(
        (result) => {
          console.log(result.text);
          actions.resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, isSubmitting, touched } =
    useFormik({
      initialValues: {
        user_email: "",
        subject: "",
        message: "",
      },
      validationSchema: Schema,
      onSubmit,
    });

  return (
    <section className="contact">
      <div className="contact-content container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            id="user_email"
            onChange={handleChange}
            value={values.user_email}
          />

          {errors.user_email && touched.user_email ? (
            <p style={{ color: "red" }}>{errors.user_email}</p>
          ) : null}
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            onChange={handleChange}
            value={values.subject}
          />
          {errors.subject && touched.subject ? (
            <p style={{ color: "red" }}>{errors.subject}</p>
          ) : null}
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your text here"
            onChange={handleChange}
            value={values.message}
          ></textarea>
          {errors.message && touched.message ? (
            <p style={{ color: "red" }}>{errors.message}</p>
          ) : null}
          <button type="submit"> {isSubmitting ? "sending.." : "send"} </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
