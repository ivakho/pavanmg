import React from "react";
import styles from "./Address.module.css";

const Address = () => {
  return (
    <address className={styles.address}>
      <a className={styles.address__link} href="tel:+911234509876">
        +91 12345 09876
      </a>
      <a className={styles.address__link} href="mailto:info@example.com">
        info@example.com
      </a>
    </address>
  );
};

export default Address;
