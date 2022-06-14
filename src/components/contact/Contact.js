import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
export const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        console.log(formData);
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div className="form-area">
      <form
        className="form-area"
        onSubmit={handleSubmit(handlePost)}
        name="contact-form"
        method="POST"
        action="/success/"
        data-netlify="true"
        netlify-honeypot="got-ya"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input
          type="hidden"
          name="formId"
          value="contact-form"
          ref={register()}
        />
        <input
          className="input-area"
          name="name"
          {...register("name")}
          placeholder="Name"
        />
        <input
          className="input-area"
          name="email"
          {...register("email")}
          placeholder="Email"
        />
        <textarea
          className="input-area message"
          name="message"
          {...register("message")}
          placeholder="Message"
          rows="6"
          cols="50"
        />

        <label
          htmlFor="got-ya"
          style={{
            position: "absolute",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            height: "1px",
            width: "1px",
            margin: "-1px",
            padding: "0",
            border: "0",
          }}
        >
          Don’t fill this out if you're human:
          <input tabIndex="-1" name="got-ya" ref={register()} />
        </label>
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};
