import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const styleone = {
    color: "#895eeb",
  }
  const styletwo = {
    color: "#FB8B24",
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>Hi, I'm Sarit Sopitvetmontree, a graduate student passionate about front-end 
        development. My expertise lies in React, while I also possess knowledge in UX/UI design, 
        back-end development, and database. I prioritize user experience and believe the digital 
        world offers limitless creative possibilities. Outside of work, I enjoy exploring nature and 
        immersing myself in fictional stories. Feel free to reach out and connect! 😊 </p>
        <br />
        <p style={styleone}><b>Languages I speak : </b>Thai English Japanese HTML CSS Javascript</p>
        <p style={styleone}><b>Technologies I know : </b>Typescript React.js Tailwind Express.js Nest.js</p>
        <p style={styleone}><b>Tools I use : </b>Linux VSCode Git/Github Figma</p>
        <br />
        <p style={styletwo}><b>My career goal : </b>Becoming a person who can both design and develop digital products</p>
        <p style={styletwo}><b>My current plan : </b>I will first become a proficient front-end developer. Once I have gained experience and confidence, I will pursue UX/UI design to expand my expertise.</p>
        
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
