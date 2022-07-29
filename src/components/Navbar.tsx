import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import token from "../assets/token.png";
import apply from "../assets/apply.png";
import nft from "../assets/nft.png";
import documentation from "../assets/documentation.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <img className="site-logo" src={logo} alt="logo" />
        </Link>
        <li>
          <button className="walltet-button">
            <WalletMultiButton className="btn">
              Connect Wallet
            </WalletMultiButton>
          </button>
        </li>
        <li>
          <Link to="#">
            <button className="nav-button">
              <img className="icon" src={token} alt="token" /> Token Management
            </button>
          </Link>
        </li>
        <li>
          <Link to="#">
            <button className="nav-button">
              <img className="icon" src={apply} alt="apply" /> Apply for IDO
            </button>
          </Link>
        </li>
        <li>
          <Link to="#">
            <button className="nav-button">
              <img className="icon" src={nft} alt="nft" /> NFT
            </button>
          </Link>
        </li>
        <li>
          <Link to="#">
            <button className="nav-button">
              <img className="icon" src={documentation} alt="documentation" />
              Documentation
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
