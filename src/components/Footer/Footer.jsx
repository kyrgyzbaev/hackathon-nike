import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="gift-cards">
        <p>GIFT CARDS</p>
        <p>FIND A STORE</p>
        <p>BECOME A MEMBER</p>
        <p>CONVENIENCE STORE PICK UP</p>
        <p>SEND US FEEDBACK</p>
      </div>
      <div className="about-2022">
        <div className="about-nike">
          <p>ABOUT NIKE</p>
          <a href="">News</a>
          <a href="">Carees</a>
          <a href="">Investors</a>
          <a href="">About Nike Gift Card</a>
        </div>
        <div className="nike-2022">
          <a href="">@2022 Nike, inc. All Rights Reserverd </a>
        </div>
      </div>
      <div className="get-help">
        <p>Get Help</p>
        <a href="">Order Status</a>
        <a href="">Shipping and Delivery</a>
        <a href="">Returns</a>
        <a href="">Exchange</a>
        <a href="">Payment Options</a>
        <a href="">Contact Us</a>
      </div>
      <div className="guides">
        <a href="">Guides</a>
        <a href="">
          Notation Based on the Act on Specified Commercial Transactions / Terms
          of Sale
        </a>
        <a href="">Terms of Use</a>
        <a href="">Nike Privacy Policy</a>
      </div>
      <div className="footer-icons">
        <div className="inst-icon">
          <InstagramIcon />
        </div>
        <div className="face-icon">
          <FacebookIcon />
        </div>
        <div className="twit-icon">
          <TwitterIcon />
        </div>
        <div className="y-icon">
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
