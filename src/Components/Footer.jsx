import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/maxfit-physiotherapy-logo.png";

// Footer data arrays
const socialLinks = [
  { icon: "bi bi-facebook", href: "#", platform: "facebook" },
  { icon: "bi bi-twitter", href: "#", platform: "twitter" },
  { icon: "bi bi-instagram", href: "#", platform: "instagram" },
  { icon: "bi bi-youtube", href: "#", platform: "youtube" },
];

const workingHours = [
  { days: "Mon to Fri", time: "10:00 to 6:00" },
  { days: "Sat", time: "10:00AM to 3:00PM" },
  { days: "Sun", time: "Closed" },
];

const moreServices = [
  { name: "Manual Therapy", href: "#" },
  { name: "Chronic Pain", href: "#" },
  { name: "Hand Therapy", href: "#" },
];

const contactInfo = [
  {
    icon: "bi bi-telephone",
    text: "(+0) 789 3456 012",
    href: "tel:+07893456012",
    type: "phone",
  },
  {
    icon: "bi bi-envelope",
    text: "domain@gmail.com",
    href: "mailto:domain@gmail.com",
    type: "email",
  },
  {
    icon: "bi bi-geo-alt",
    text: "24/11 Robert Road, New York, USA",
    href: "https://maps.google.com/?q=24/11+Robert+Road+New+York+USA",
    type: "address",
    external: true,
  },
];

const footerLinks = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
];

const Footer = () => {
  return (
    <footer className="container-fluid back-dark">
      <div className="container pt-5">
        <div className="row">
          {/* Logo, Paragraph and Social Icons */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <div className="mb-3">
              <Link to="/">
                <img src={logo} alt="Footer Logo" height="50" />
              </Link>
            </div>
            <p className="text-white mb-4 text-center text-md-start">
              We provide comprehensive physical therapy services to help you
              recover, rehabilitate, and maintain optimal <br /> physical
              health.
            </p>
            <div className="d-flex">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-light ${
                    index < socialLinks.length - 1 ? "me-3" : ""
                  } social-icon`}
                >
                  <i className={`${social.icon} fs-5`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2nd Section - Working Hours */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="light-text mb-4 fw-bold">Working Hours</h5>
            <div className="text-light">
              {workingHours.map((schedule, index) => (
                <div key={index} className="mb-3 text-center text-md-start">
                  <strong>{schedule.days}:</strong> {schedule.time}
                </div>
              ))}
            </div>
          </div>

          {/* 3rd Section - More Services */}
          <div className="col-lg-3 col-md-6 mb- d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="light-text mb-4 fw-bold">More Services</h5>
            <ul className="list-unstyled text-light">
              {moreServices.map((service, index) => (
                <li key={index} className="mb-3 text-center text-md-start">
                  <a
                    href={service.href}
                    className="text-light text-decoration-none footer-service-link"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Section - Contact */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="fw-bold mb-4 light-text">Contact</h5>
            <div className="text-light d-flex flex-column align-items-center align-items-md-start mb-3 text-center text-md-start">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-${
                    contact.type === "address" ? "start" : "center"
                  } ${index < contactInfo.length - 1 ? "mb-3" : ""} ${
                    contact.type !== "address"
                      ? "text-center text-md-start"
                      : ""
                  }`}
                >
                  <i
                    className={`${contact.icon} me-3 ${
                      contact.type === "address" ? "mt-1" : ""
                    }`}
                  ></i>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="text-light text-decoration-none"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" py-5 borderr-top" >
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="text-light mb-0">
                Copyright {new Date().getFullYear()} Physiocare. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-light text-decoration-none footer-service-link d-none d-md-block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
