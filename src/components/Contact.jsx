import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Linkedin, Github, Instagram, Mail } from "../assets";
import { Link } from "react-router-dom";
import "./Contact.css";

const SocialMedia = ({
  SMlogo,
  SMtext,
  SMlink,
}) => {
  return (
    <div>
      <div
        className='btn btn-three'
        onClick={() => window.open(SMlink, "_blank")}
      >
        {/* <img src={SMlogo} alt="icon" height="26px" width="26px"/> */}
        <h2 className={styles.socialMedia}>{SMtext}</h2>
      </div>
    </div>
  );
};

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div>
          <SocialMedia SMlogo={Linkedin} SMtext={"LINKEDIN"} SMlink={"https://www.linkedin.com/in/sarit-sopitvetmontree/"}/>
          <SocialMedia SMlogo={Github} SMtext={"GITHUB"} SMlink={"https://github.com/SaritSopitvetmontree/"}/>
          <SocialMedia SMlogo={Instagram} SMtext={"INSTAGRAM"} SMlink={"https://www.instagram.com/oil.sarit/"}/>
          <div className="w-auto text-center">
            {/* <img className="logo" src={Mail} alt="icon" width="26" height="26" /> */}
            <h2 className={styles.mail}>sarit.sopitvetmontree@gmail.com</h2>
          </div>
        </div>
        
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
