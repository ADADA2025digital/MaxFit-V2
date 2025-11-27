import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import { blogData } from "../Constants/Data";
import ScrollingInfo from "../Components/ScrollingInfo";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog post by ID
  const blog = blogData.find((post) => post.id === parseInt(id));

  // If blog not found, redirect to blog page
  if (!blog) {
    navigate("/blog");
    return null;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
        <section className="py-5 text-white about-banner-section position-relative white-back">
          <motion.h1
            className="display-4 fw-bold dark-text mb-4 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {blog.title}
          </motion.h1>
        </section>

        {/* Blog Detail Section */}
        <section className="py-5">
          <div className="container">
            {/* Blog Header */}
            <div className="row">
              <div className="col-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mb-5"
                >
                  <Figure
                    className="image-anime reveal box rounded-5 w-100 position-relative overflow-hidden image-figure"
                  >
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      className="img-fluid image-figure"
                  
                    />
                  </Figure>
                </motion.div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para1}
                </motion.p>
                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para2}
                </motion.p>

                <motion.div
                  className="white-back p-4 rounded-4 d-flex"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <i className="bi bi-quote display-2 light-text"></i>
                  <p className="dark-text fs-4 mt-4 fw-bold">{blog.para3}</p>
                </motion.div>

                <motion.p
                  className="para mt-5"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para4}
                </motion.p>

                <motion.h1
                  className="headin dark-text fw-bold"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {blog.subtitle}
                </motion.h1>

                <motion.p
                  className="para mt-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para5}
                </motion.p>

                {/* Animated List */}
                <motion.ul
                  className="dark-text gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {[
                    blog.list1,
                    blog.list2,
                    blog.list3,
                    blog.list4,
                    blog.list5,
                  ].map((item, index) => (
                    <motion.li key={index} className="mt-3" variants={fadeUp}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.p
                  className="para"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {blog.para6}
                </motion.p>
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

export default BlogDetail;
