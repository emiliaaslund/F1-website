import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>© 2023 Emilia Åslund</p>
        <div className="footer-wrapper">
          <a className="footer-link" href="https://github.com/emiliaaslund">
            Github
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/emilia-%C3%A5slund/"
          >
            Linkedin
          </a>
          <a className="footer-link" href="https://www.formula1.com/">
            F1 Official site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
