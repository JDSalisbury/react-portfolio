import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit2 = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
      }),
    })
      .then((event) => console.log(event.target))
      .catch((error) => alert(error));
  };

  return (
    <div className="form-area">
      <form
        className="form-area"
        onSubmit={handleSubmit2((data) => setData(JSON.stringify(data)))}
        data-netlify="true"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <input
          className="input-area"
          {...register("name")}
          placeholder="Name"
        />
        <input
          className="input-area"
          {...register("email")}
          placeholder="Email"
        />
        <textarea
          className="input-area message"
          {...register("message")}
          placeholder="Message"
          rows="6"
          cols="50"
        />
        <p>{data}</p>
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};
