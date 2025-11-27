import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { pageBannerData } from "../Constants/Data";
import Banner from "../Components/Banner";
import ScrollingInfo from "../Components/ScrollingInfo";
import CustomButton from "../Components/Button";
import ReviewSection from "../Components/ReviewSection";
import { Figure } from "react-bootstrap";
import Therapist1 from "../assets/Images/team-1.jpg";
import Award1 from "../assets/Images/icon-award-1.svg";
import Award2 from "../assets/Images/icon-award-2.svg";
import Award3 from "../assets/Images/icon-award-3.svg";
import Award4 from "../assets/Images/icon-award-4.svg";
import Calender from "../assets/Images/icon-cta.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Therapist = () => {
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
        <Banner bannerData={pageBannerData.therapist} />

        {/* Profile Section */}
        <section className="py-5">
          <div className="container rounded-5 d-flex flex-column flex-md-row">
            {/* Image Section */}
            <Figure
              className="image-anime reveal box position-relative d-inline-flex overflow-hidden col-12 col-md-5 white-back rounded-start-5 image-figure therapist-image"
             
            >
              <img
                src={Therapist1}
                alt="Physiotherapy"
                className="img-fluid therapist-image"
              />
            </Figure>

            {/* Content Section */}
            <div
              className="col-12 col-md-7 back-dark d-flex flex-column p-5 justify-content-center rounded-end-5"
              style={{ height: "600px" }}
            >
              <div>
                <h1 className="text-white heading">Dr. Emily Johnson</h1>
                <h6 className="text-white">Senior Physiotherapist</h6>
                <p className="text-white mt-5 fs-5">
                  A physiotherapist will ask you about your current level of
                  activity and any particular problems you're having. They will
                  also examine your joints to assess your muscle strength And
                  the Range.
                </p>
              </div>

              <motion.div
                className="d-flex mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ul className="text-white fs-5 list-unstyled ">
                  <li>
                    <span>Position</span>
                  </li>
                  <li className="mt-2">
                    <span>Experience</span>
                  </li>
                  <li className="mt-2">
                    <span>Email</span>
                  </li>
                </ul>
                <ul className="text-white fs-5 list-unstyled ms-3">
                  <li>
                    <span> Physiotherapist</span>
                  </li>
                  <li className="mt-2">
                    <span>06 Years</span>
                  </li>
                  <li className="mt-2">
                    <span>domain@gmail.com</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="d-flex align-items-center gap-4 d-none d-md-flex mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-white social-icon">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="bi bi-youtube fs-5"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Personal Info Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="custom-border rounded-5 p-4">
                  <h2 className="mb-3 heading dark-text fw-bold">
                    Personal Info
                  </h2>
                  <p className="mb-3 para">
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat.
                  </p>
                  <p className="para">
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore of magna aliqua.
                  </p>
                </div>

                <motion.div
                  className="mt-5 custom-border rounded-5 px-4 pb-5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-3 heading fw-bold dark-text mt-4">
                    Awards &amp; Honor
                  </h2>
                  <p className="mb-4 para">
                    You to resume or maintain a active and power independent
                    life both at home &amp; work.
                  </p>

                  <div className="row">
                    <div className="col-6 border-end border-bottom d-flex justify-content-center p-3">
                      <img src={Award1} alt="Award 1" className="img-fluid" />
                    </div>
                    <div className="col-6 border-start border-bottom d-flex justify-content-center p-3">
                      <img src={Award2} alt="Award 2" className="img-fluid" />
                    </div>
                    <div className="col-6 border-end border-top d-flex justify-content-center p-3">
                      <img src={Award3} alt="Award 3" className="img-fluid" />
                    </div>
                    <div className="col-6 border-start border-top d-flex justify-content-center p-3">
                      <img src={Award4} alt="Award 4" className="img-fluid" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="custom-border rounded-5 px-4 pb-5">
                  <h2 className="mb-4 dark-text heading fw-bold pt-4">
                    Professional Skills
                  </h2>

                  {[
                    { skill: "Patient Diagnosis", value: "80%" },
                    { skill: "Treatment Planning", value: "85%" },
                    { skill: "Manual Therapy Techniques", value: "98%" },
                    { skill: "Exercise Prescription", value: "92%" },
                    { skill: "Electrotherapy Skill", value: "90%" },
                    { skill: "Interpersonal Skills", value: "86%" },
                  ].map((item, i) => (
                    <motion.div
                      className="mb-4"
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="d-flex justify-content-between">
                        <span className="dark-text fs-5">{item.skill}</span>
                        <span className="dark-text fs-5">{item.value}</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar back-light"
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="custom-border rounded-5 p-4 mt-5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="d-flex align-items-start gap-3 p-2">
                    <div
                      className={`service-card__icon icon-bg mb-4 rounded-3 p-3 d-flex align-items-center justify-content-center `}
                    >
                      <img src={Calender} alt="{title}" className="p-2" />
                    </div>
                    <div>
                      <h3 className="heading dark-text mb-4 pb-3">
                        Ready to start your journey to recovery?
                      </h3>
                      <p className="mb-4 para pb-3">
                        Contact us today to schedule your initial consultation
                        and take the first step towards a pain-free life.
                      </p>
                      <CustomButton
                        text="Book Appointment"
                        icon={<i className="bi bi-arrow-right"></i>}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Review */}
        <ReviewSection />

        {/* Scrolling  Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default Therapist;
