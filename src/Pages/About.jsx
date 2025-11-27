import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { pageBannerData } from "../Constants/Data";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import ScrollingInfo from "../Components/ScrollingInfo";
import StatisticsBanner from "../Components/StatisticsBanner";
import CustomButton from "../Components/Button";
import ServiceCard from "../Components/ServiceCard";
import ReviewSection from "../Components/ReviewSection";
import { Figure } from "react-bootstrap";
import videoIm from "../assets/Images/quality-treatment-video-img.jpg";
import vision1 from "../assets/Images/icon-service-1.svg";
import vision2 from "../assets/Images/icon-service-2.svg";
import vision3 from "../assets/Images/icon-service-3.svg";
import vision4 from "../assets/Images/icon-service-4.svg";
import process1 from "../assets/Images/therapy-process-1.jpg";
import process2 from "../assets/Images/therapy-process-2.jpg";
import process3 from "../assets/Images/therapy-process-3.jpg";
import process4 from "../assets/Images/therapy-process-4.jpg";
import arrowRightDown from "../assets/Images/icon-right-down-arrow.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const processSteps = [
  {
    id: 1,
    img: process1,
    title: "Get Paired With A Therapist",
    desc: "We understand that injuries and acute pain can happen unexpectedly.",
  },
  {
    id: 2,
    img: process2,
    title: "Choose Your Preferred Way To Receive Care",
    desc: "We understand that injuries and acute pain can happen unexpectedly.",
  },
  {
    id: 3,
    img: process3,
    title: "We Help You Get Better, Faster!",
    desc: "We understand that injuries and acute pain can happen unexpectedly.",
  },
  {
    id: 4,
    img: process1,
    title: "What Psychotherapy Can Help With",
    desc: "We understand that injuries and acute pain can happen unexpectedly.",
  },
];

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");

  const openVideo = (e) => {
    if (e) e.preventDefault();
    const url = "https://www.youtube.com/watch?v=Y-x0efG1seA";
    const videoIdMatch = url.match(/[?&]v=([^&#]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : "Y-x0efG1seA";
    const constructed = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    setEmbedUrl(constructed);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setEmbedUrl("");
  };

  useEffect(() => {
    const onKeyDown = (ev) => {
      if (ev.key === "Escape") closeVideo();
    };
    if (isVideoOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

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
        {/* Banner Section */}
        <Banner bannerData={pageBannerData.about} />

        {/* About  Content */}
        <AboutUs />

        {/* Statistics Banner */}
        <StatisticsBanner />

        {/* Vision to Victory */}
        <section className="py-5 my-5">
          <div className="container">
            {/* Section Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
                Vision to Victory
              </h6>
            </motion.div>

            {/* Subheading */}
            <motion.div
              className="d-flex align-items-center justify-content-center text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="display-5 fw-bold">
                <span className="light-text">We're a Recognized </span>
                <span className="dark-text">& Quality Leader</span>
              </p>
            </motion.div>

            {/* Desktop Cards Row */}
            <motion.div
              className="row g-4 mb-2 d-none d-md-flex"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {[
                {
                  img: vision1,
                  title: "Manual Therapy",
                  desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly..",
                },
                {
                  img: vision2,
                  title: "Chronic Pain",
                  desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
                },
                {
                  img: vision3,
                  title: "Hand Therapy",
                  desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="col-12 col-sm-6 col-lg-4"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <ServiceCard
                    imageSrc={item.img}
                    title={item.title}
                    description={item.desc}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Carousel */}
            <div className="d-block d-md-none mt-4">
              <div
                id="visionCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[
                    {
                      img: vision1,
                      title: "Manual Therapy",
                      desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly..",
                    },
                    {
                      img: vision2,
                      title: "Chronic Pain",
                      desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
                    },
                    {
                      img: vision3,
                      title: "Hand Therapy",
                      desc: "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
                    },
                    {
                      img: vision1,
                      title: "Ready To Start Your Journey To Recovery?",
                      desc: "Contact us today to schedule your initial consultation and take the first step towards a pain-free life.",
                      isCTA: true,
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="vision-card-wrapper">
                        {service.isCTA ? (
                          <motion.div
                            className="vision-cta-card custom-border rounded-4 p-4 h-100"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                          >
                            <div className="service-card__icon icon-bg mb-3 rounded-3 p-3 d-flex align-items-center justify-content-center">
                              <img
                                src={service.img}
                                alt="title"
                                className="p-2"
                              />
                            </div>
                            <div>
                              <h5 className="fw-bold mb-2 heading text-center">
                                {service.title}
                              </h5>
                              <p className="para small mb-3 flex-grow-1 text-center">
                                {service.desc}
                              </p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <CustomButton
                                text="View All Services"
                                icon={<i className="bi bi-arrow-right"></i>}
                              />
                            </div>
                          </motion.div>
                        ) : (
                          <ServiceCard
                            imageSrc={service.img}
                            title={service.title}
                            description={service.desc}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators mt-4">
                  {new Array(4).fill(null).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#visionCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop CTA Box */}
            <motion.div
              className="overflow-hidden d-flex custom-border rounded-4 p-4 mt-4 d-none d-md-flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="col-12 col-md-6">
                <div className="service-card__icon icon-bg mb-3 rounded-3 p-3 d-flex align-items-center justify-content-center">
                  <img src={vision1} alt="title" className="p-2" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2 heading">
                    Ready To Start Your Journey To Recovery?
                  </h5>
                  <p className="para small mb-3 flex-grow-1">
                    Contact us today to schedule your initial consultation and
                    take the first step towards a pain-free life.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center col-12 col-md-6">
                <CustomButton
                  text="View All Services"
                  icon={<i className="bi bi-arrow-right"></i>}
                />
              </div>
            </motion.div>
          </div>
        </section>
        {/* solution to your plan*/}

        <section className="py-5 white-back">
          <div className="container">
            <div className="row align-items-center">
              {/* Images Section */}
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="row g-3">
                  <div className="position-relative">
                    <Figure className="image-anime reveal box rounded-5 about-video-figure">
                      <img
                        src={videoIm}
                        className="about-video-image"
                        alt="Physiotherapy"
                      />
                      <div className="video-play-button position-absolute top-50 start-50 translate-middle z-2 ">
                        <a
                          href="#"
                          onClick={openVideo}
                          className="popup-video d-flex align-items-center justify-content-center rounded-circle position-relative bg-white"
                        >
                          <i className="bi bi-play-fill fs-1 light-text"></i>
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </Figure>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="col-12 col-lg-6">
                {/* Small Heading */}
                <motion.div
                  className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading text-center text-lg-start">
                    Solution To Your Plan
                  </h6>
                </motion.div>

                {/* Title */}
                <motion.div
                  className="mb-4 text-center text-lg-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="display-5 fw-bold mb-4 heading">
                    <span className="light-text">We Proudly </span>
                    <span className="dark-text">
                      {" "}
                      Give <br className="d-none d-lg-block" /> Quality
                      Treatment{" "}
                    </span>
                  </h2>
                </motion.div>

                {/* Paragraph */}
                <motion.p
                  className="mb-4 text-center text-lg-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  We understand that injuries and acute pain can happen
                  unexpectedly. Our emergency physiotherapy services are
                  designed to provide prompt and effective care to help you
                  manage.
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  className="mb-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {[
                    "can happen unexpectedly Our emergency.", 
                    "We understand that injuries.",
                    "We understand that injuries.",
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className="bi bi-check-circle-fill me-3 light-text"></i>
                      <span className="text-center text-lg-start">{point}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* therapy process */}
        <section className="py-5">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center  mb-3">
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
                Therapy Process
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center text-center mb-5">
              <p className="display-5 fw-bold">
                <span className="light-text">What </span>
                <span className="dark-text">is Therapy Process</span>
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center col-md-9 position-relative process-container-top">
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={arrowRightDown}
                  alt="progress arrow"
                  className="d-none d-lg-block process-arrow-between process-arrow-width"
                />{" "}
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={arrowRightDown}
                  alt="progress arrow"
                  className="d-none d-lg-block process-arrow-between  process-arrow-width"
                />{" "}
              </div>
              <div className="col-md-4 d-flex justify-content-center ">
                <img
                  src={arrowRightDown}
                  alt="progress arrow"
                  className="d-none d-lg-block process-arrow-between  process-arrow-width"
                />{" "}
              </div>
            </div>

            <div className="row align-items-center position-relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="col-lg-3 col-md-6 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    {/* Circle Image */}
                    <motion.div
                      className="mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center overflow-hidden process-circle">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="img-fluid process-circle-image w-100 h-100"
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h5
                      className="fw-bold mb-3 dark-text heading px-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {step.title}
                    </motion.h5>

                    {/* Description */}
                    <motion.p
                      className="para mb-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Review section */}
        <ReviewSection />

        {/* Scrolling Info Section */}
        <ScrollingInfo />

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 z-3 mt-5 pt-5">
            <div className="position-relative container px-3">
              <button
                type="button"
                aria-label="Close video"
                className="btn btn-light position-absolute top-0 end-0 mt-2 me-4 fs-3 z-3"
                onClick={closeVideo}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
                <iframe
                  src={embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
