import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        style={{
          padding: ["6", "6", "16", "20"],
          paddingBottom: ["5", "5", "5", "5"],
          backgroundColor: "#EEEEEE",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(5,1fr)",
            ],
            gap: "12px",
          }}
        >
          <div style={{ display: ["none", "none", "none", "block"] }}>
            <div style={{ fontSize: "20px", fontWeight: 400 }}>
              Customer Service
            </div>
            <div>Get Help?</div>
          </div>

          <div style={{ display: ["none", "none", "block", "block"] }}>
            <div style={{ fontSize: "20px", fontWeight: 400 }}>
              Find a Warehouse
            </div>
            <input
              type="text"
              placeholder="City, state or zip"
              style={{
                border: "1px solid rgba(0,0,0,0.3)",
                borderRadius: "none",
              }}
            />
          </div>

          <div>
            <div style={{ fontSize: "20px", fontWeight: 400 }}>
              Get Email Offers
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Enter your email"
                style={{
                  border: "1px solid rgba(0,0,0,0.3)",
                  borderRadius: "none",
                }}
              />
              <button
                style={{
                  backgroundColor: "#065FA4",
                  borderRadius: "none",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "black";
                  e.target.style.backgroundColor = "#EEEEEE";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "#065FA4";
                }}
              >
                Go
              </button>
            </div>
          </div>

          <div style={{ display: ["none", "none", "none", "block"] }}>
            <div style={{ fontSize: "20px", fontWeight: 400 }}>Follow Us</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                width: "50%",
                gap: "3px",
                marginTop: "2px",
              }}
            >
              <div
                style={{ cursor: "pointer", width: "8rem" }}
                onClick={() =>
                  window.open("https://www.facebook.com/Costco/", "_blank")
                }
              >
                <img
                  src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-facebook.svg"
                  alt=""
                  width="100%"
                />
              </div>

              <div
                style={{ cursor: "pointer", width: "8rem" }}
                onClick={() =>
                  window.open("https://in.pinterest.com/costco/", "_blank")
                }
              >
                <img
                  src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-pinterest.svg"
                  alt=""
                  width="100%"
                />
              </div>

              <div
                style={{ cursor: "pointer", width: "8rem" }}
                onClick={() =>
                  window.open("https://www.instagram.com/costco/", "_blank")
                }
              >
                <img
                  src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-instagram.svg"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>

          <div style={{ display: ["none", "none", "none", "block"] }}>
            <div style={{ fontSize: "20px", fontWeight: 400 }}>
              Get the Costco App
            </div>
            <div
              style={{ cursor: "pointer", width: "8rem", marginTop: "2px" }}
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.costco.app.android&hl=en&gl=US",
                  "_blank"
                )
              }
            >
              <img
                src="https://mobilecontent.costco.com/live/resource/img/static-folder-app-icon/app-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "1px solid #DDDDDD",
            margin: "5",
            display: ["none", "none", "block", "block"],
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            justifyContent: "center",
            gap: "30px",
            cursor: "pointer",
            display: ["none", "none", "grid", "grid"],
          }}
        >
          <div style={{ textAlign: "left", fontWeight: 400 }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              About Us
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Charitable Contributions
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Company Information
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Sustainability Commitment
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Investor Relations
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Careers
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Kirkland Signature
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Logo and Media Requests
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                The Costco Connection
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Quick & Easy Recipe Videos
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Blog
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Employee Site
              </div>
            </div>
          </div>

          <div style={{ textAlign: "left", fontWeight: 400 }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Membership
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Join Now
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Member Privileges
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Executive Membership Terms
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Sign In or Register
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Credit Card
              </div>
            </div>
          </div>

          <div style={{ textAlign: "left", fontWeight: 400 }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Vendors & Suppliers
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Supply Chain Disclosure
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Ethics Hotline for Suppliers
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Supplier Diversity
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Explore Our Brands
              </div>
            </div>
          </div>

          <div style={{ textAlign: "left", fontWeight: 400 }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Customer Service
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Shop Card Balance
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Order By Item Number
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Technical & Warranty Services
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Volume Sales: Export & Domestic
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Order Status
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Preventing Fraud
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Shipping
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Rebates
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Recalls & Product Notices
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Returns and Exchanges
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Returns Policy
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Accessibility
              </div>
            </div>
          </div>

          <div style={{ textAlign: "left", fontWeight: 400 }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Locations & Services
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Find a Warehouse
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Locations Coming Soon
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Hours and Holiday Closures
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Gasoline
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Hearing Aid Center
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Optical
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Special Events
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                CostcoGrocery
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Grocery by Instacart
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: ["block", "block", "none", "none"] }}>
          <div style={{ cursor: "pointer" }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              About Us
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Charitable Contributions
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Company Information
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Sustainability Commitment
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Investor Relations
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Careers
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Kirkland Signature
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Logo and Media Requests
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                The Costco Connection
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Quick & Easy Recipe Videos
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Blog
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Employee Site
              </div>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Membership
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Join Now
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Member Privileges
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Executive Membership Terms
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Sign In or Register
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Credit Card
              </div>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Vendors & Suppliers
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Supply Chain Disclosure
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Ethics Hotline for Suppliers
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Supplier Diversity
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Explore Our Brands
              </div>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Customer Service
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Shop Card Balance
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Order By Item Number
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Costco Technical & Warranty Services
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Volume Sales: Export & Domestic
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Order Status
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Preventing Fraud
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Shipping
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Rebates
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Recalls & Product Notices
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Returns and Exchanges
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Returns Policy
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Accessibility
              </div>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <div
              style={{
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "3px",
              }}
              onMouseOver={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.textDecoration = "none";
              }}
            >
              Locations & Services
            </div>
            <div
              style={{
                color: "rgb(95, 95, 95)",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Find a Warehouse
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Locations Coming Soon
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Hours and Holiday Closures
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Gasoline
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Hearing Aid Center
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Optical
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Special Events
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                CostcoGrocery
              </div>
              <div
                onMouseOver={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Grocery by Instacart
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "1px solid #DDDDDD",
            margin: "5",
            display: ["none", "none", "block", "block"],
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3px",
            justifyContent: "center",
            fontWeight: 400,
            color: "rgb(95, 95, 95)",
            fontSize: "16px",
            marginTop: "8px",
            cursor: "pointer",
          }}
        >
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Site Map
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Terms & Conditions
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Your Privacy Rights
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            CA Notice
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Cookie Settings
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Your Privacy
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Consumer Health Data
          </div>
          <div
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Feedback
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            width: "50%",
            margin: "auto",
            marginTop: "4px",
            alignItems: "center",
            display: ["grid", "grid", "grid", "none"],
          }}
        >
          <div
            style={{ cursor: "pointer", width: "8rem" }}
            onClick={() =>
              window.open("https://www.facebook.com/p/Costco-100054550206105/", "_blank")
            }
          >
            <img
              src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-facebook.svg"
              alt=""
              width="100%"
            />
          </div>

          <div
            style={{ cursor: "pointer", width: "8rem" }}
            onClick={() => window.open("https://in.pinterest.com/costco/", "_blank")}
          >
            <img
              src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-pinterest.svg"
              alt=""
              width="100%"
            />
          </div>

          <div
            style={{ cursor: "pointer", width: "8rem" }}
            onClick={() => window.open("https://www.instagram.com/costco/", "_blank")}
          >
            <img
              src="src\assets\HomeIMG\Footer\social-instagram.svg"
              alt=""
              width="100%"
            />
          </div>

          <div
            style={{ cursor: "pointer", width: "8rem", marginTop: "2px" }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.costco.app.android&hl=en&gl=US",
                "_blank"
              )
            }
          >
            <img
                src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-instagram.svg"
                alt=""
            />
          </div>
        </div>

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
