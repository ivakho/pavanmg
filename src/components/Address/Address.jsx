import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <address className="address">
      <a className="address__link" href="tel:+911234509876">
        +91 12345 09876
      </a>
      <a className="address__link" href="mailto:info@example.com">
        info@example.com
      </a>
    </address>
  );
};

export default Address;
