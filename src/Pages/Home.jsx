import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import heroVideo from "../assets/Videos/hero-bg-video.mp4";
import CustomButton from "../Components/Button";
import AboutUs from "../Components/AboutUs";
import ServiceCard from "../Components/ServiceCard";
import ReviewSection from "../Components/ReviewSection";
import NewsBlogCard from "../Components/NewsBlogCard";
import HeroFeatureCard from "../Components/HeroFeatureCard";
import ScrollingInfo from "../Components/ScrollingInfo";
import {
  galleryData,
  statisticsData,
  painTypesData,
  blogData,
  heroFeaturesData,
  whyUsLeftData,
  whyUsRightData,
} from "../Constants/Data";
import useCounterAnimation from "../Hooks/useCounterAnimation";
import solutionPlanImg1 from "../assets/Images/solution-plan-img-1.jpg";
import solutionPlanImg2 from "../assets/Images/solution-plan-img-2.jpg";
import servicicon1 from "../assets/Images/icon-service-1.svg";
import servicicon2 from "../assets/Images/icon-service-2.svg";
import servicicon3 from "../assets/Images/icon-service-3.svg";
import servicicon4 from "../assets/Images/icon-service-4.svg";
import servicicon5 from "../assets/Images/icon-service-5.svg";
import servicicon6 from "../assets/Images/icon-service-6.svg";
import servicicon7 from "../assets/Images/icon-cta.svg";
import whyUsImg from "../assets/Images/why-us-img.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const counters = statisticsData.map((stat) =>
    useCounterAnimation(stat.targetValue, 2000, 0)
  );

  const [inView1, setInView1] = useState(false);
  const [inView2, setInView2] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imageRef1.current && entry.isIntersecting) {
            setInView1(true);
          }
          if (entry.target === imageRef2.current && entry.isIntersecting) {
            setInView2(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (imageRef1.current) observer.observe(imageRef1.current);
    if (imageRef2.current) observer.observe(imageRef2.current);

    return () => {
      if (imageRef1.current) observer.unobserve(imageRef1.current);
      if (imageRef2.current) observer.unobserve(imageRef2.current);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("painTypesCarousel");
    if (!el) return;

    // Create or reuse an instance; enable touch + wrap, no auto cycling
    const instance = Carousel.getOrCreateInstance(el, {
      interval: false,
      ride: false,
      touch: true,
      pause: false,
      wrap: true,
      keyboard: true,
    });

    return () => instance?.dispose();
  }, []);

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
        {/* Hero Section */}
        <section className="hero-section position-relative vh-100 align-items-center d-flex justify-content-center ">
          <video
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Background Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

          {/* Hero Content */}
          <div className=" position-relative text-center text-white d-flex flex-column align-items-center justify-content-center h-100 px-3 px-md-0 ">
            <div className="pb-0 pb-md-5 pt-0 pt-md-5">
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="d-flex align-items-center justify-content-center mb-3"
              >
                <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading mt-0 mt-md-4">
                  Welcome to Physiocare
                </h6>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="d-flex align-items-center justify-content-center"
              >
                <p className="display-1 fw-bold">
                  <span className="text-white heading">
                    Destination For <br /> Relief & Wellness
                  </span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="d-flex align-items-center justify-content-center mt-3"
              >
                <p className="text-white ">
                  It is a long established fact that a reader will be distracted
                  by the readable content <br />
                  of a page when looking at layout. The point of using Lorem
                  Ipsum is less normal <br />
                  distribution of letters.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-4 gap-3 mb-0 mb-md-5 pb-0 pb-md-3"
              >
                <CustomButton
                  text="Explore Services"
                  icon={<i className="bi bi-arrow-right"></i>}
                />
                <button className="custom-button d-flex align-items-center gap-3 light-text rounded-5 py-1 px-3 position-relative overflow-hidden border-0 bg-white">
                  <span className="custom-button-content position-relative z-1 fw-bold">
                    Book Apppointment
                  </span>
                  <span className="btn-icon icon-container z-1 d-flex align-items-center justify-content-center  rounded-circle">
                    <i className="bi bi-arrow-right text-white"></i>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Banner Section */}
        <section className="hero-banner py-5 back-dark">
          <div className="container">
            {/* Hero Banner Content */}
            <div className="row d-flex align-items-center justify-content-center ">
              {heroFeaturesData.map((feature) => (
                <HeroFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Image Gallery Section */}
        <section className="py-5 bg-white">
          <div className="px-0">
            <div className="image-gallery w-100 overflow-hidden">
              <div className="gallery-track d-flex gap-3">
                {[...Array(4)].map((_, setIndex) =>
                  galleryData.map((item) => (
                    <div
                      key={`set-${setIndex}-${item.id}`}
                      className="gallery-item rounded-5 overflow-hidden"
                    >
                      <Figure className="image-anime reveal box rounded-5 w-100 position-relative overflow-hidden image-figure">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="img-fluid w-100 h-100 object-fit-cover gallery-image-transform"
                        />
                      </Figure>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5">
          <div className="container">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 text-center text-md-start"
            >
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5">
                Therapist Team
              </h6>
            </motion.div>

            {/* Heading + Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between text-center text-md-start"
            >
              <div className="display-5 fw-bold mb-3 mb-md-5 col-12 col-md-8 heading">
                <span className="light-text">We Provide</span>
                <span className="dark-text">
                  {" "}
                  The Best <br className="d-none d-md-block" /> Services
                </span>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-end">
                <CustomButton
                  text="View All Services"
                  icon={<i className="bi bi-arrow-right"></i>}
                />
              </div>
            </motion.div>

            {/* Desktop cards row 1 */}
            <div className="row g-4 mb-2 d-none d-md-flex">
              {[servicicon1, servicicon2, servicicon3, servicicon4].map(
                (img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="col-12 col-sm-6 col-lg-3"
                  >
                    <ServiceCard
                      imageSrc={img}
                      title={
                        [
                          "Manual Therapy",
                          "Chronic Pain",
                          "Hand Therapy",
                          "Sports Therapy",
                        ][index]
                      }
                      description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                    />
                  </motion.div>
                )
              )}
            </div>

            {/* Desktop cards row 2 */}
            <div className="row g-4 mt-3 d-none d-md-flex">
              {[servicicon5, servicicon6].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="col-12 col-sm-6 col-lg-3"
                >
                  <ServiceCard
                    imageSrc={img}
                    title={["Cupping Therapy", "Laser Therapy"][index]}
                    description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                  />
                </motion.div>
              ))}

              {/* Last wide card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-12 col-lg-6"
              >
                <ServiceCard
                  imageSrc={servicicon7}
                  title="Ready to start your journey to recovery?"
                  description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.."
                  center={true}
                  customButton={
                    <CustomButton
                      text="View All Services"
                      icon={<i className="bi bi-arrow-right"></i>}
                    />
                  }
                />
              </motion.div>
            </div>

            {/* Mobile Carousel */}
            <div className="d-block d-md-none mt-4">
              <div
                id="servicesCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[
                    { img: servicicon1, title: "Manual Therapy" },
                    { img: servicicon2, title: "Chronic Pain" },
                    { img: servicicon3, title: "Hand Therapy" },
                    { img: servicicon4, title: "Sports Therapy" },
                    { img: servicicon5, title: "Cupping Therapy" },
                    { img: servicicon6, title: "Laser Therapy" },
                    {
                      img: servicicon7,
                      title: "Ready to start your journey to recovery?",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <ServiceCard
                        imageSrc={service.img}
                        title={service.title}
                        description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                        center={service.title.includes("Ready")}
                        customButton={
                          service.title.includes("Ready") && (
                            <CustomButton
                              text="View All Services"
                              icon={<i className="bi bi-arrow-right"></i>}
                            />
                          )
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="carousel-indicators mt-4">
                  {new Array(7).fill(null).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#servicesCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-5 white-back">
          <div className="container">
            <div className="row align-items-center">
              {/* Images Section */}
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="row g-3">
                  <div className="col-6" ref={imageRef1}>
                    <Figure
                      className={`image-anime reveal box rounded-5 position-relative d-inline-flex overflow-hidden image-figure ${
                        inView1 ? "image-anime1" : ""
                      }`}
                    >
                      <img
                        src={solutionPlanImg1}
                        className="solution-image-transform"
                        alt="Physiotherapy"
                      />
                    </Figure>
                  </div>
                  <div className="col-6" ref={imageRef2}>
                    <Figure
                      className={`image-anime reveal box rounded-5 position-relative d-inline-flex overflow-hidden image-figure ${
                        inView2 ? "image-anime1" : ""
                      }`}
                    >
                      <img
                        src={solutionPlanImg2}
                        className="solution-image-transform"
                        alt="Physiotherapy"
                      />
                    </Figure>
                  </div>
                </div>
              </div>

              {/* Content Section with motion */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="col-12 col-lg-6 text-center text-lg-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3"
                >
                  <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading">
                    Solution To Your Plan
                  </h6>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <h2 className="display-5 fw-bold mb-4 heading">
                    <span className="light-text">We Proudly </span>
                    <span className="dark-text">
                      {" "}
                      Give <br /> Quality Treatment{" "}
                    </span>
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4 para mx-auto mx-lg-0"
                  style={{ maxWidth: "500px" }}
                >
                  We understand that injuries and acute pain can happen
                  unexpectedly. Our emergency physiotherapy services are
                  designed to provide prompt and effective care to help you
                  manage.
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>can happen unexpectedly Our emergency.</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>We understand that injuries.</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>We understand that injuries.</span>
                  </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="row g-3 mt-0 mt-md-3 pt-4 border-top"
                >
                  {statisticsData.map((stat, index) => {
                    const [count, ref] = counters[index];
                    return (
                      <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="col-4 col-sm-4"
                      >
                        <div
                          ref={ref}
                          className="d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start"
                        >
                          <img
                            src={stat.icon}
                            alt={stat.label}
                            width="40"
                            height="40"
                            className="mb-2 mb-md-0 me-md-3"
                          />
                          <div>
                            <div className="fw-bold h4 mb-0 dark-text">
                              {count}
                              {stat.number}
                              {stat.suffix}
                            </div>
                            <div className="small light-text">{stat.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* why us Section */}
        <section className="whyus-section py-5">
          <div className="container">
            {/* Section Heading */}
            <div className="d-flex align-items-center justify-content-center mb-1 mb-md-3">
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
                Why Us
              </h6>
            </div>

            <div className="d-flex align-items-center justify-content-center text-center mb-1 mb-md-5 ">
              <p className="display-5 fw-bold heading">
                <span className="light-text">Excellence In </span>
                <span className="dark-text">
                  {" "}
                  Care And <br />
                  Rehabilitation
                </span>
              </p>
            </div>

            <div className="row why-us position-relative rounded-0 rounded-md-5 px-3 px-md-0 pb-5 pb-md-0">
              {/* Left Column */}
              <div className="col-12 col-md-6 white-back rounded-start-5">
                {whyUsLeftData.map((item) => (
                  <div
                    key={item.id}
                    className={`d-flex align-items-center py-3 py-md-4 ps-4 ${
                      item.hasBorder ? "border-bottom-dark" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-center me-3 rounded-3 bg-white icon-container3">
                      <img src={item.icon} alt="Expert Therapists" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: item.delay || 0 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="dark-text fw-bold heading">
                        {item.title}
                      </h5>
                      <p className="para">
                        We understand that injuries and acute <br /> pain can
                        unexpectedly.
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-12 col-md-6 back-dark borend rounded-end-5 ">
                {whyUsRightData.map((item) => (
                  <div
                    key={item.id}
                    className={`ps-4 ps-md-0 d-flex align-items-center justify-content-start justify-content-md-end py-3 py-md-4 ${
                      item.hasBorder ? "border-bottom-light" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-center me-3 rounded-3 bg-white icon-container3 order-1 order-md-2">
                      <img src={item.icon} alt="Expert Therapists" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: item.delay || 0 }}
                      viewport={{ once: true }}
                      className="me-3 order-2 order-md-1"
                    >
                      <h5 className="text-white text-md-end fw-bold heading">
                        {item.title}
                      </h5>
                      <p className="text-white text-md-end">
                        We understand that injuries and acute <br /> pain can
                        unexpectedly.
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Front Image Overlay */}
              <div className="d-none d-lg-flex justify-content-center z-3 position-relative man why-us-image-container">
                <img
                  src={whyUsImg}
                  alt="Why Choose Us"
                  className="img-fluid rounded-3 why-us-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Need Attention Section */}
        <section className="attension-section py-5 ">
          <div className="py-5 container ">
            {/* Small Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center mb-3  "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center justify-content-center ">
                <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading  ">
                  Need Attention
                </h6>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="display-5 fw-bold heading">
                <span className="text-white heading">
                  Where Do You Need Attention?
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              className="d-flex align-items-center justify-content-center text-center mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-white">
                We understand that injuries and acute pain can happen
                unexpectedly. Our emergency physiotherapy services are designed
                to <br /> provide prompt and effective care to help you manage.
              </p>
            </motion.div>
            {/* Pain Types Grid */}
            <motion.div
              className="mt-5 d-flex justify-content-end"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {/* Desktop Grid */}
              <div className="d-none d-md-flex row g-4 col-12 col-md-11">
                {painTypesData.map((painType, index) => (
                  <motion.div
                    key={painType.id}
                    className="col-6 col-md-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`d-flex align-items-center pb-3 ${
                        index >= 6
                          ? "border-bottom-desktop-none"
                          : "border-bottom-light1"
                      }`}
                    >
                      <img
                        src={painType.icon}
                        alt={painType.alt}
                        width="50"
                        height="50"
                        className="me-3"
                      />
                      <h6 className="text-white mb-0">{painType.title}</h6>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="d-md-none col-12 position-relative">
                <div
                  id="painTypesCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {Array.from({
                      length: Math.ceil(painTypesData.length / 3),
                    }).map((_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className={`carousel-item ${
                          slideIndex === 0 ? "active" : ""
                        }`}
                      >
                        <div className="d-flex justify-content-around">
                          {painTypesData
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((painType) => (
                              <div
                                key={painType.id}
                                className="d-flex flex-column align-items-center"
                              >
                                <img
                                  src={painType.icon}
                                  alt={painType.alt}
                                  width="50"
                                  height="50"
                                  className="mb-2"
                                />
                                <h6 className="text-white mb-0 text-center">
                                  {painType.title}
                                </h6>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Review section */}
        <ReviewSection />

        {/* news blog Section */}
        <section className="py-5">
          <div className="container">
            {/* Small Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center justify-content-md-start mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading ">
                News & Blog
              </h6>
            </motion.div>

            {/* Title + Button */}
            <motion.div
              className="align-items-center justify-content-center justify-content-md-start col-12 d-md-flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="display-5 fw-bold mb-5 col-12 col-md-8 heading text-center text-md-start">
                <span className="light-text">Our Latest </span>
                <span className="dark-text"> Insights And Updates</span>
              </div>
              <div className="mb-5 col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                <CustomButton
                  text="View All Blog"
                  icon={<i className="bi bi-arrow-right"></i>}
                />
              </div>
            </motion.div>

            {/* Desktop View (Unchanged) */}
            <div className="d-none d-md-flex col-12 align-items-center justify-content-center gap-5">
              {blogData.slice(0, 3).map((blog) => (
                <NewsBlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="d-block d-md-none mt-4">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {blogData.slice(0, 3).map((blog, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <NewsBlogCard blog={blog} />
                    </div>
                  ))}
                </div>

                {/* Bullet Indicators */}
                <div className="carousel-indicators mt-3">
                  {blogData.slice(0, 3).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#blogCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Info Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default Home;