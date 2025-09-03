import React, { useState } from "react";
import contactImg from "../../src/assets/contact.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    console.log(formData);
  };

  return (
    <div className="mt-3 p-6 max-w-7xl mx-auto">
      <div className="flex item-center  flex-col gap-2">
        <h1 className="text-blue-950 font-extrabold text-2xl lg:text-3xl">
          Contact Us
        </h1>
        <p className="text-blue-950/50 text-sm font-medium">
          For queries feel free to reach out.
        </p>
      </div>
      <div className="flex w-full justify-between flex-col-reverse lg:flex-row items-center gap-2 lg:gap-5 ">
        <form
          autoComplete="off"
          onSubmit={onSubmit}
          className="flex flex-col item-center gap-5 flex-1 lg:flex-1/2"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name:"
            className="bg-blue-950/30 rounded-full w-full py-2 px-3 placeholder:text-blue-950 placeholder:font-bold text-blue-950 font-bold"
          />
          <input
            name="email"
            onFocus={(e) => e.target.removeAttribute("readOnly")}
            value={formData.email}
            onChange={handleChange}
            placeholder="Email:"
            type="email"
            className="bg-blue-950/30 rounded-full w-full py-2 px-3 placeholder:text-blue-950 placeholder:font-bold text-blue-950 font-bold "
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message:"
            className="bg-blue-950/30 rounded-2xl w-full min-h-36 placeholder:text-blue-950 placeholder:font-bold text-blue-950 font-bold py-2 pl-3"
          />
          <div className="">
            <button
              type="submit"
              className="py-2 bg-orange-600 px-5 rounded-full text-[18px] font-bold "
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex-1 lg:flex-1/2 ">
          <img
            src={contactImg}
            alt="contact image"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
