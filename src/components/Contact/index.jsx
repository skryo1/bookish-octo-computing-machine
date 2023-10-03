import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactData from "../../data/contact.json";
import { FiRefreshCcw } from "react-icons/fi";

const Contact = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  };

  return (
    <section id="contact" className="container2 pb-40 px-10">
      <h2 className="flex [text-shadow:_1px_2px_2px_rgb(0_0_0_/_50%)] items-center justify-center text-4xl max-sm:text-2xl mt-4">
        CONTACT US
      </h2>
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
        <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_9px_20px] mt-10 py-8 px-6 max-sm:px-4 rounded-2xl">
          <div className="flex justify-between items-center">
            <p className="opacity-50 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              Get in touch
            </p>
            <FiRefreshCcw
              className="ri-refresh-line opacity-70 text-xl hover:rotate-180 transition-all duration-500 cursor-pointer"
              onClick={handleFlip}
            />
          </div>

          <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <div>
              <ContactForm contact={ContactData.contact} />
            </div>
            <div>
              <ContactInfo contact={ContactData.contact} />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Contact;
