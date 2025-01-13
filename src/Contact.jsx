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
      setResult("Response recieved.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        "<a>*</a>" indicates required fields<br></br>
        NAME<a>*</a> <input type="text" name="name" autocomplete="off" required />
        <br></br>
        EMAIL <input type="email" name="email" />
        <br></br>
        MESSAGE<a>*</a><br></br> <textarea name="message" required></textarea>
        <br></br>
        <a className="center"><button type="submit">Submit</button></a>
      </form>
      <span style={{color: "red"}}>{result}</span>
    </div>
  );
}
