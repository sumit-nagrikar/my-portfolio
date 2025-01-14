import { HERO_CONTENT } from '../constants';
import profile from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const resumePdfUrl =
    'https://drive.google.com/file/d/1vEsdEZdgVzjH1J0XpsUW43AYclRpsklW/view?usp=drive_link';
  const githubUrl = 'https://github.com/sumit-nagrikar';
  const linkedinUrl = 'https://www.linkedin.com/in/sumit-nagrikar/';
  const instagramUrl = 'https://www.instagram.com/sumit_nagrikar/';

  const handleResumeClick = () => {
    window.open(resumePdfUrl, '_blank');
  };

  const handleGithubClick = () => {
    window.open(githubUrl, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };
  return (
    <div id="home" className="">
      <div className="border-b border-neutral-900 p-4 lg:p-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-center justify-center h-[100vh]">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                exit={{ opacity: 0 }}
                className="sm:pb-20 text-5xl tracking-tight font-extrabold text-slate-400 lg:mt-16 lg:text-8xl lg:ml-20 prata-regular"
              >
                Sumit Nagrikar
              </motion.h1>

              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                exit={{ opacity: 0 }}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              >
                Full Stack Web Developer
              </motion.span>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                exit={{ opacity: 0 }}
                className="my-4 max-w-xl p-2 font-light tracking-tight rounded-md bg-neutral-800"
              >
                {HERO_CONTENT}
              </motion.p>

              {/* social links started */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4 lg:gap-8 lg:flex-row  lg:mt-4"
              >
                <button
                  onClick={handleResumeClick}
                  className="inline-flex items-center justify-center lg:mb-2 mr-2 overflow-hidden border-neutral-500 ring-inset ring-2 ring-slate-400 px-4
           transform transition-transform duration-300 hover:scale-110 lg:hover:scale-110 lg:rounded rounded-md"
                >
                  <span className="px-2 py-2.5 transition-all ease-in duration-75 w-full  rounded-md group-hover:bg-opacity-0">
                    Resume
                  </span>
                </button>

                <ul className="flex gap-4 bg-transparent shadow-2xl p-2 rounded text-3xl mb-2">
                  <FaLinkedinIn
                    onClick={handleLinkedinClick}
                    className="cursor-pointer
         transform transition-transform duration-300 hover:scale-110"
                  />
                  <FaGithub
                    onClick={handleGithubClick}
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  />
                  <FaInstagram
                    onClick={handleInstagramClick}
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  />
                </ul>
              </motion.div>
              {/* social links ended */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              exit={{ opacity: 0 }}
              className="lg:p-8"
            >
              <img
                src={profile}
                style={{ width: '450px' }}
                alt="Sumit Nagrikar"
                className=" rounded-xl ring-neutral-800 shadow-xl shadow-gray-600 w-3/4 "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
