import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Education = () => {
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
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My University</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'spring', 0.1, 0.75)}
        className="mt-5 w-full md:w-3/4 card-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] w-full flex flex-col justify-center items-start"
        >
          {/* <img src={} alt={} className="w-16 h-16 object-contain" /> */}
          <h3 className="text-taupe text-[35px] font-bold ">University Of Chittagong</h3>
          <h3 className="text-taupe text-[20px]  ">Computer Science & Engineering, B.Sc(Engg)</h3>
          <h3 className="text-taupe text-[20px] ">2013 - 2014</h3>
          <h3 className="text-taupe text-[20px] ">Chittagong, Bangladesh</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
