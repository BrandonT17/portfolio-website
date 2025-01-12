import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "53d4f7a8-58b7-4447-8d18-622aaf9fb72b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        "*" indicates required fields<br></br>
        NAME* <input type="text" name="name" required />
        <br></br>
        EMAIL <input type="email" name="email" required />
        <br></br>
        MESSAGE*<br></br> <textarea name="message" required></textarea>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
