import React from "react";
import "./Contacts.css";
import Logo from "../Logo/Logo";
import Address from "../Address/Address";
import Social from "../Social/Social";
import logoRegular from "../../assets/images/logo_regular.svg";
import github_fiord from "../../assets/images/icons/github_fiord.svg";
import twitter_fiord from "../../assets/images/icons/twitter_fiord.svg";
import linkedin_fiord from "../../assets/images/icons/linkedin_fiord.svg";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts__id">
      <div className="contacts__column">
        <Logo logo={logoRegular} />
      </div>
      <div className="contacts__column">
        <Address />
      </div>
      <div className="contacts__column">
        <Social
          githubIcon={github_fiord}
          twitterIcon={twitter_fiord}
          linkedinIcon={linkedin_fiord}
        />
      </div>
    </div>
  );
};

export default Contacts;
