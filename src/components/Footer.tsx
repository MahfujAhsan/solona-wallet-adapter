import { FC } from "react";
import { Link } from "react-router-dom";
import telegram from "../assets/telegram.png";
import solminter from "../assets/footer.png";
import twitter from "../assets/twitter.png";
require("../App.css");

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div>
        <h2 className="footer-text">Connect With Us</h2>
        <div className="social">
          <Link to="#">
            <img className="social-icon" src={twitter} alt="twitter" />
          </Link>
          <Link to="#">
            <img className="social-icon" src={telegram} alt="telegram" />
          </Link>
        </div>
      </div>
      <div className="copy-right">
        <div>
          <img src={solminter} alt="footer-logo" />
        </div>
        <p className="footer-text">© Solminter 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
