import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
// service_yygsx1s
// template_khh5a4p
// Cf3stbH6K3WUOWPp5

export const Contact = () => {
  const ref = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

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
        "service_yygsx1s",
        "template_khh5a4p",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        "Cf3stbH6K3WUOWPp5"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="h-full m-auto  relative">
      <div
        className="flex flex-col m-auto max-w-[1366px]
    lg:flex-row  gap-12 sm:pt-10 justify-center"
      >
        <div className="md:flex-1  flex flex-col lg:gap-10 xs:gap-6 w-full px-4">
          <h1 className="text-8xl xs:text-[28px] pt-10 text-center ">
            Let's work together
          </h1>
          <div className="flex justify-around xs:w-30 gap-2 ">
            <div className="border-2 border-dashed border-[black] w-full p-2 bg-orange-200">
              <h2>Mail</h2>
              <span>hello@react.dev</span>
            </div>
            <div className="border-2 border-dashed border-[black] w-full p-2 bg-orange-200">
              <h2>Phone</h2>
              <span className="font-[300]">+1(346)-375-8707</span>
            </div>
          </div>
        </div>
        <div className="md:flex-1 w-full px-4">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Name"
              className="p-5 bg-transparent border border-[orange] text-[black]"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="Email"
              className="p-5 bg-transparent border border-[orange] text-[black]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={8}
              required
              placeholder="Message"
              className="p-5 bg-transparent border border-[orange] text-[black]"
            />
            <button
              type="submit"
              className="p-4 border-none bg-[orange] 
          cursor-pointer font-[500] text-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 z-[-1]">
        <img src="./mars.webp" />
      </div>
    </div>
  );
};
