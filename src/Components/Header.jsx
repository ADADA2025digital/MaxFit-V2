import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Images/maxfit-physiotherapy-logo.png";
import CustomButton from "../Components/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home", hasActiveState: true },
    { path: "/about", label: "About Us", hasActiveState: true },
    { path: "/therapist", label: "Therapist", hasActiveState: true },
    { path: "/blog", label: "Blog", hasActiveState: true },
    { path: "/contact", label: "Contact Us", hasActiveState: true },
  ];

  const socialLinks = [
    { icon: "bi-facebook", href: "#" },
    { icon: "bi-twitter", href: "#" },
    { icon: "bi-instagram", href: "#" },
    { icon: "bi-youtube", href: "#" },
  ];

  const contactInfo = [
    {
      icon: "bi-telephone-fill",
      text: "+(123) 698-5245",
      href: "tel:+1236985245",
    },
    {
      icon: "bi-envelope-fill",
      text: "info@domain.com",
      href: "mailto:info@domain.com",
    },
    {
      icon: "bi-geo-alt-fill",
      text: "24/11 Robert Road, New York, USA",
      href: "https://maps.google.com/?q=24/11+Robert+Road+New+York+USA",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Only apply scroll effect on desktop
      if (!isMobile) {
        setIsScrolled(scrollTop > 100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const closeOffcanvas = () => {
    if (typeof document !== "undefined") {
      const offcanvas = document.querySelector(".offcanvas.show");
      if (offcanvas) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasInstance.hide();
      }
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="fixed-top">
          {/* Top Bar (Desktop only) */}
          <section
            className={`back-dark d-none d-lg-block transition-all duration-300 ${
              !isMobile && isScrolled
                ? "transform -translate-y-full opacity-0"
                : "transform translate-y-0 opacity-100"
            }`}
          >
            <div className="container d-flex justify-content-center justify-content-md-between align-items-center py-2">
              <div className="d-flex align-items-center gap-5">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <i className={`${contact.icon} me-2 text-white fs-5`}></i>
                    <a
                      href={contact.href}
                      target={
                        contact.icon === "bi-geo-alt-fill"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        contact.icon === "bi-geo-alt-fill"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white text-decoration-none"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white social-icon"
                  >
                    <i className={`${social.icon} fs-5`}></i>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Single Main Navigation - Works for both Desktop and Mobile */}
          <nav
            className={`navbar navbar-expand-lg navbar-light  bg-white shadow-sm  ${
              // Only apply scroll effect classes on desktop
              !isMobile && isScrolled ? "py-2 scroll-fixed-navbar" : "py-3"
            }`}
          >
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                {/* Only change logo height on desktop scroll */}
                <img
                  src={logo}
                  alt="Logo"
                  height={!isMobile && isScrolled ? "50" : "60"}
                />
              </Link>

              <button
                className="navbar-toggler d-lg-none navbar-dark back-dark rounded-3 border-0 py-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto gap-4">
                  {navigationItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link
                        className={`nav-link fw-semibold dark-text heading ${
                          item.hasActiveState && location.pathname === item.path
                        }`}
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-none d-lg-flex align-items-center">
                <CustomButton
                  text="+(123) 698-5245"
                  icon={<FaPhoneAlt />}
                  href="tel:+1236985245"
                />
              </div>
            </div>
          </nav>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end w-100 p-3 "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/" onClick={closeOffcanvas}>
                <img src={logo} alt="Logo" height="60" />
              </Link>
              <button
                type="button"
                className="btn-close fs-1"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-center">
              <ul className="navbar-nav text-center gap-4">
                {navigationItems.map((item, index) => (
                  <li key={index} className="nav-item mb-4">
                    <Link
                      className={`nav-link fw-semibold fs-3 ${
                        item.hasActiveState && location.pathname === item.path
                      }`}
                      to={item.path}
                      onClick={closeOffcanvas}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-center">
                <div className="d-flex align-items-center gap-4 justify-content-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="dark-text social-icon"
                    >
                      <i className={`${social.icon} fs-5`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
