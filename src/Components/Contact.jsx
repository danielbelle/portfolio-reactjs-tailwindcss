import React, { useRef, useState } from "react";
import Email from "../Assets/email.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [input, setInput] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("Preencha um e-mail válido!");
      return;
    }

    try {
      emailjs
        .sendForm(
          "service_s8nljg4",
          "template_gond1fs",
          form.current,
          "2ip1oI5hY4jTjN8JS"
        )
        .then(
          (result) => {
            alert(
              "Seu e-mail foi recebido, logo estaremos respondendo! Até mais!"
            );
          },
          (error) => {
            alert(error.text);
          }
        );
      setInput("");
    } catch {
      alert("Tivemos algum erro no e-mail, favor reencaminhar =(");
      setInput("");
    }
  };
  return (
    <div
      id="contact"
      className="flex justify-center flex-col h-[80hv] max-w-[1160px] m-auto relative h-min-[500px] box-border sm:mt-[15rem] md:mt-[7rem] lg:mt-[5rem] pt-[8rem] min-w-[350px]"
    >
      <p className="flex justify-center font-[600] text-gray-600">
        Me Encaminhe Seu
      </p>
      <h1 className="flex justify-center text-[3rem] font-[600] mb-10">
        E-mail
      </h1>
      <div className="flex justify-center rounded-[32px] border-solid border-[0.1rem] border-gray-500 sm:m-auto bg-transparent m-5">
        <div className="flex items-center justify-center gap-0 sm:gap-[1rem] m-[1rem]">
          <img
            src={Email}
            alt="Ícone E-mail"
            className="cursor-default h-[2rem] ml-[0.5rem]"
          />
          <form ref={form} onSubmit={sendEmail}>
            <div className="bg-transparent max-w-[700px] w-[70%] sm:w-[100%] items-center rounded-[5rem]">
              <input
                type="email"
                name="user_email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="seu-email@gmail.com"
                className="flex-1 h-[100%] border-none outline-none font-[1rem] sm:font-[1.3rem] px-[1rem] py-[1rem] sm:placeholder:text-[1.1rem] placeholder:text-[0.9rem] placeholder:text-gray-500"
              ></input>
              <input
                className="bg-transparent rounded-[5rem] text-[1rem] sm:text-[1.2rem] cursor-pointer font-[600] text-black transition duration-200 items-center justify-center ml-[1rem]"
                type="submit"
                value={"Enviar"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
