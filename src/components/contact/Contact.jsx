import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = ({ removeButtonFocus, desktopMode }) => {
  const form = useRef();
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(null);
  const [showEmailFailure, setShowEmailFailure] = useState(null);
  const [showEmailLoad, setShowEmailLoad] = useState(false);

  const sendEmail = (e) => {
    setShowEmailLoad(true);
    e.preventDefault();

    emailjs.sendForm("service_zsxh7wj", "template_qlr85xu", form.current, "8uS52kWqufSJlEdUS").then(
      (result) => {
        e.target.reset();
        console.log(result.text);
        setShowEmailConfirmation("Message sent");

        setShowEmailLoad(false);

        setTimeout(() => {
          setShowEmailConfirmation(null);
        }, 2000);
      },
      (error) => {
        console.log(error.text);
        setShowEmailFailure("Failed to send, try again!");

        setShowEmailLoad(false);

        setTimeout(() => {
          setShowEmailFailure(null);
        }, 2000);
      }
    );
  };

  return (
    <section id="contact">
      <h1>Let's Talk</h1>
      <div className="container container__contact" onPointerUp={removeButtonFocus}>
        <div className="contact-options" data-aos={desktopMode ? "fade-right" : "fade-up"}>
          <article className="contact-option">
            <AiOutlineMail className="contact-icon" />
            <h2>Email</h2>
            <h3>viggovalf@gmail.com </h3>
            <a href="mailto:viggovalf@gmail.com">Send Me An Email</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h2>Messenger</h2>
            <h3>Viggo Valfridsson</h3>
            <a href="https://m.me/viggo.valfridsson" target="_blank" rel="noreferrer">
              Message Me On Messenger
            </a>
          </article>
          <article className="contact-option">
            <RiWhatsappLine className="contact-icon" />
            <h2>Whatsapp</h2>
            <h3>+46 70 969 97 83</h3>
            <a href="https://api.whatsapp.com/send?phone=46709699783" target="_blank" rel="noreferrer">
              Text Me On Whatsapp
            </a>
          </article>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail} data-aos={desktopMode ? "fade-left" : "fade-up"}>
          <div>
            <label htmlFor="name">Your full name</label>
            <input id="name" type="text" name="name" placeholder="Your Full Name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Your Email" required />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" rows="7" placeholder="Your message" required></textarea>
          </div>
          <div className="button-response">
            <div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
            {showEmailLoad && (
              <div className="spinner">
                <ClipLoader
                  color={"white"}
                  loading={"loading"}
                  size={40}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
            {showEmailConfirmation && <div className="email-feedback email-confirmation">{showEmailConfirmation}</div>}
            {showEmailFailure && <div className="email-feedback email-failure">{showEmailFailure}</div>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
