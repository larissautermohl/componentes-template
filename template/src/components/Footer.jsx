import React from "react";
import RedesSociais from "./RedesSociais";

import FooterStyles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={FooterStyles.header}>
      <p className={FooterStyles.footer}>oii</p>
      <RedesSociais />
      <CopyWrite />
    </footer>
  );
}

export default Footer;
