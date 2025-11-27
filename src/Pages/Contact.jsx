import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Figure } from "react-bootstrap";
import Banner from "../Components/Banner";
import CustomButton from "../Components/Button";
import ScrollingInfo from "../Components/ScrollingInfo";
import { pageBannerData } from "../Constants/Data";
import ImageContact from "../assets/Images/contact-us-img.jpg";
import { Helmet } from "react-helmet-async";

export default function ContactInfo() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    subject: /^.{3,100}$/,
    message: /^.{10,}$/,
  };

  // Validation messages
  const validationMessages = {
    name: "Name must be 2-50 characters and contain only letters and spaces",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number (10-15 digits)",
    subject: "Subject must be 3-100 characters",
    message: "Message must be at least 10 characters long",
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form using only regex patterns
  const validateForm = () => {
    const newErrors = {};

    // Validate name using regex
    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field";
    } else if (!validationPatterns.name.test(formData.name.trim())) {
      newErrors.name = validationMessages.name;
    }

    // Validate email using regex
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
    } else if (!validationPatterns.email.test(formData.email.trim())) {
      newErrors.email = validationMessages.email;
    }

    // Validate phone using regex
    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill out this field";
    } else if (!validationPatterns.phone.test(formData.phone.trim())) {
      newErrors.phone = validationMessages.phone;
    }

    // Validate subject using regex
    if (!formData.subject.trim()) {
      newErrors.subject = "Please fill out this field";
    } else if (!validationPatterns.subject.test(formData.subject.trim())) {
      newErrors.subject = validationMessages.subject;
    }

    // Validate message using regex (minimum 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field";
    } else if (!validationPatterns.message.test(formData.message.trim())) {
      newErrors.message = validationMessages.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const contactItems = [
    {
      type: "location",
      icon: "bi bi-geo-alt-fill",
      title: "Location",
      content: "24/11 Robert Road, New York, USA",
      badge: false,
    },
    {
      type: "email",
      icon: "bi bi-envelope-fill",
      title: "Email",
      content: (
        <>
          <a
            href="mailto:info@domainname.com"
            className="d-block para text-decoration-none"
          >
            info@domainname.com
          </a>
          <a
            href="mailto:sales@domainname.com"
            className="d-block para text-decoration-none"
          >
            sales@domainname.com
          </a>
        </>
      ),
      badge: false,
    },
    {
      type: "phone",
      icon: "bi bi-telephone-fill",
      title: "Phone",
      content: (
        <>
          <a
            href="tel:+01789854856"
            className="d-block para text-decoration-none"
          >
            (+01) 789 854 856
          </a>
          <a
            href="tel:+02895867781"
            className="d-block para text-decoration-none"
          >
            (+02) 895 867 781
          </a>
        </>
      ),
      badge: false,
    },
    {
      type: "hours",
      icon: "bi bi-clock-fill",
      title: "Work Hours",
      content: (
        <>
          <div>Mon to Fri: 10:00 To 6:00</div>
          <div>Sat: 10:00AM To 3:00PM</div>
          <div>Sun: Closed</div>
        </>
      ),
      badge: true,
    },
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Maxfit</title>
        <meta
          name="description"
          content="Get personalized diet plans, expert tips, and nutritional guidance from certified dietitians. Start your health journey today!"
        />
        <meta
          name="keywords"
          content="Tamildietitian, Dietitian Anu, Gut Detox, Gut Expert, Collagen Expert, Nutrition, Detox Diet, Anti-inflammatory diet, Holistic health, Wellness retreat, Cellular Nutrition, Cellular Detox, Gut health"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Dietitian Anu - Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          property="og:description"
          content="Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietitiananu.com.au" />
        <meta
          property="og:image"
          content="https://dietitiananu.com.au/assets/image1-BSFppmib.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dietitian Anu - Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          name="twitter:description"
          content="Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          name="twitter:image"
          content="https://dietitiananu.com.au/assets/image1-BSFppmib.png"
        />
        <meta name="twitter:site" content="@anu_collagen24" />
        <meta name="twitter:creator" content="@anu_collagen24" />
      </Helmet>
      <div className="container-fluid p-0">
        <Banner bannerData={pageBannerData.contact} />

        <section className="py-5">
          <div className="container">
            <div className="row g-4 d-none d-md-flex">
              {/* Desktop Tablet view - cards */}
              {contactItems.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="card h-100  shadow-sm rounded-4 custom-border">
                    <div className="card-body p-4">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-4 white-back bg-opacity-10 light-text mb-3 contact-icon-container"
                      >
                        <i className={`${item.icon} contact-icon`} />
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        {item.badge && (
                          <span
                            className="badge bg-success rounded-circle p-1 contact-badge"
                            title="Open Now"
                          />
                        )}
                        <h5 className="card-title mb-3 fw-bold dark-text">
                          {item.title}
                        </h5>
                      </div>

                      <div className="card-text para">{item.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile view - only icons in one row */}
            <div className="row d-flex d-md-none justify-content-center">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="col-auto d-flex flex-column align-items-center justify-content-center"
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-4 bg-success bg-opacity-10 text-success mb-3 contact-icon-container"
                  >
                    <i className={`${item.icon} contact-mobile-icon`} />
                  </div>
                  <p className="small mb-3 fw-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Figure
                  className="image-anime reveal box rounded-5 w-100 image-figure"
                >
                  <img
                    src={ImageContact}
                    className="img-fluid rounded-3 shadow w-100 contact-image"
                    alt="About Us"
                  />
                </Figure>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center mt-4 mt-md-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                  <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5">
                    Contact Us
                  </h6>
                </div>
                <h1 className="mb-4 fw-bold display-5">
                  <span className="light-text">Get </span>{" "}
                  <span className="dark-text">In Touch With Us</span>
                </h1>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Name"
                        className={`form-control p-3 ${errors.name ? '' : ''}`}
                      />
                      {errors.name && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email"
                        className={`form-control p-3 ${errors.email ? '' : ''}`}
                      />
                      {errors.email && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}                     
                        placeholder="Phone Number"
                        className={`form-control p-3 ${errors.phone ? '' : ''}`}
                      />
                      {errors.phone && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={`form-control p-3 ${errors.subject ? ' ' : ''}`}
                      />
                      {errors.subject && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.subject}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Your Message"
                      className={`form-control p-3 ${errors.message ? '' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <div className="text-danger mt-1"
                       
                      >
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="ms-lg-auto mt-5">
                    <CustomButton
                      text={isSubmitting ? "Sending..." : "Send Message"}
                      icon={
                        !isSubmitting && <i className="bi bi-arrow-right"></i>
                      }
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 ">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.107461939068!2d150.7968057754332!3d-33.78372301465693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a9d8445d9cd%3A0xf8b4fc5ff5c9705c!2s37%20Desborough%20Rd%2C%20Colyton%20NSW%202760%2C%20Australia!5e0!3m2!1sen!2slk!4v1757699398800!5m2!1sen!2slk"
            width="100%"
            height="600"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <ScrollingInfo />
      </div>
    </>
  );
}
