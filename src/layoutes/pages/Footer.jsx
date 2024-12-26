import { Divider, Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../pages/UserContextProvider";

const Footer = () => {
  const { setFooterHeight } = useUserContext();
  const ref = useRef(null);

  const onResize = React.useCallback(() => {
    if (ref.current) setFooterHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <footer ref={ref}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} flexWrap="wrap" rowGap={2}>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/disclaimer" className="footer-link">
            Disclaimer
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <Divider orientation="vertical" flexItem />
        </Stack>
        <Link
          to="https://tatastrive.com"
          target="_blank"
          className="footer-link"
        >
          Copyright © Tata STRIVE
        </Link>
      </Stack>
    </footer>
  );
};

export default Footer;
