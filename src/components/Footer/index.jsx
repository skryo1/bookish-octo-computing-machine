import React from "react";

const Footer = () => {
  /* getFullYear */
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Animation with framer-motion package */}

      <div
        className={`flex items-center justify-center max-md:flex-col py-10 max-md:gap-4 footer__container max-sm:text-center`}
      >
        <p>
          &copy; {year} <span className="text-[#2ca344]">Lotus Arts.</span>
          &nbsp; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
