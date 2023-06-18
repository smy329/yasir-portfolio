import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant } from '../utils/motion';
import { send, sendHover } from '../assets';
import { yasir2 } from '../assets';
import { FaFacebookF, FaLinkedinIn, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {
  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // sign up on emailjs.com (select the gmail service and connect your account).
  //   //click on create a new template then click on save.
  //   emailjs
  //     .send(
  //       'serviceID', // paste your ServiceID here (you'll get one when your service is created).
  //       'templateID', // paste your TemplateID here (you'll find it under email templates).
  //       {
  //         from_name: form.name,
  //         to_name: 'YourName', // put your name here.
  //         from_email: form.email,
  //         to_email: 'youremail@gmail.com', //put your email here.
  //         message: form.message,
  //       },
  //       'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert('Thank you. I will get back to you as soon as possible.');

  //         setForm({
  //           name: '',
  //           email: '',
  //           message: '',
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error);
  //         alert('Something went wrong. Please try again.');
  //       }
  //     );
  //};

  return (
    <div
      className="-mt-[8rem] w-full 
      flex gap-10 overflow-hidden flex-col"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] p-3 lg:p-8 rounded-2xl col-span-2 order-2 lg:order-1"
        >
          {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form> */}
          <div className="text-taupe  bg-jet p-5 lg:p-14 rounded-2xl mt-5 space-y-5 ">
            <h1 className="text-3xl lg:text-5xl font-bold text-white text-center font-mova ">Syed Mohammad Yasir</h1>
            <p className="text-lg lg:text-3xl font-normal lg:font-bold -ml-4">syed.mohammad.yasir329@gmail.com</p>
            <br />

            <div className=" flex justify-evenly">
              <Link>
                <div className="bg-white rounded-b-full p-2 lg:p-4 text-black">
                  <FaLinkedinIn className="h-5 lg:h-8 w-5 lg:w-8" />
                </div>
              </Link>
              <Link>
                <div className="bg-white rounded-b-full p-2 lg:p-4 text-black">
                  <BsGithub className="h-5 lg:h-8 w-5 lg:w-8" />
                </div>
              </Link>
              <Link>
                <div className="bg-white rounded-b-full p-2 lg:p-4 text-black">
                  <FaStackOverflow className="h-5 lg:h-8 w-5 lg:w-8" />
                </div>
              </Link>
              <Link>
                <div className="bg-white rounded-b-full p-2 lg:p-4 text-black">
                  <FaFacebookF className="h-5 lg:h-8 w-5 lg:w-8" />
                </div>
              </Link>
              <Link>
                <div className="bg-white rounded-b-full p-2 lg:p-4 text-black">
                  <FaTwitter className="h-5 lg:h-8 w-5 lg:w-8" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className=" rounded-2xl order-1 lg:order-2">
          <img src={yasir2} alt="yasir-passport" className="h-auto lg:h-[350px] w-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
