import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        style={{
          padding: "6px 20px 16px 20px",
          paddingBottom: "5px",
          backgroundColor: "#EEEEEE",
        }}
      >
        <div
          style={{
            color: "rgb(95, 95, 95)",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          © 1998 — 2024 Costco Wholesale Corporation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
