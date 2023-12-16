import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, buttonText, link }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-15 h-15 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <a href={link} target="_blank">
            <button
              className="rounded-xl bg-[#915EFF] mt-4 py-2 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary"
              type="submit">
              {buttonText}
            </button>
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Tools</h2>
      </motion.div>
      <motion.p
        className="mt-2 text-secondary text-[14px] max-w-3xl leading-[25px]"
        variants={fadeIn("", "", 0.1, 1)}>
        Welcome to Genesis AI, We provide a suite of artificial intelligence products to help you be more productive. Our tools utilize the latest advances in machine learning and natural language processing to offer human-level intelligence and assistance.
        {/* <ul className="text-white">
          <li>Oracle Certified: Cloud Architecht Associate 2023</li>
          <li>
            Oracle Certified: Cloud Application Integration 2023 Certified
            Specialist
          </li>
          <li>Microsoft Certified: Azure Administrator Associate</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
        </ul> */}
      </motion.p>
      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

// using HOC(Higher oredr component)
export default SectionWrapper(About, "about");
