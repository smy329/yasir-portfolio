import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px]">
        After completing my graduation in CSE in 2019, I I started my own business as the CEO of my startup. Despite my
        strong determination and tireless efforts, the venture unfortunately did not meet the desired success. However,
        in this difficult situation, I didn't let this setback discourage me.
        <br /> <br />I made a conscious decision to take a step back and realign my skills. From January 2023 to June
        2023, I dedicated myself to resharp my coding abilities as a MERN stack developer. Despite the challenges posed
        by a three-year gap from coding, I quickly regained my abilities and became a proficient professional in the
        field. <br /> <br />
        Now, as a MERN stack developer, I bring a mix of leadership skills and a solid computer science background. I
        have experience in strategic planning and leading teams, and I'm ready to contribute to exciting projects as
        part of a collaborative team.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
