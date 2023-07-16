import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import PropTypes from 'prop-types';

const DesktopSidebar = ({ navItems, setSidebar }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed  top-0 right-0 "
    >
      {/************* desktop sidebar section  start here ***************/}

      {navItems.map((items) => console.log(items))}
      <div
        className={`p-4  z-50 sticky top-0 right-0 transition-all duration-300 ease-in ${
          location.pathname == "/" ? "bg-bodyBlue" : "bg-bodyColor"
        } w-[450px] min-h-screen max-h-screen`}
      >
        <div className="flex justify-end w-full cursor-pointer">
          <RxCross2
            className="text-3xl hover:text-red-600   transition-all  duration-300"
            onClick={() => setSidebar(false)}
          />
        </div>

        <h1 className="text-5xl  pl-11">
          Digital safety <span className="text-[#f9c747]">starts here </span>{" "}
          for both commercial and personal
        </h1>
        <h1 className="text-xl  pl-11 mt-5">
          Nam libero tempore, cum soluta nobis eligendi cumque quod placeat
          facere possimus assumenda omnis dolor repellendu sautem temporibus
          officiis
        </h1>

        <div className="flex flex-col gap-2 pl-11 mt-28">
          <h1 className="text-white font-bold font-Cuprum text-2xl subpixel-antialiased	">
            +1 488 246 5357 cycure.agency@mail.com
          </h1>
          <p className="text-[#99A2AC] font-normal font-Inter text-sm">
            3828 Delmas Terrace, Culver City, CA, United States
          </p>
          {/************************ footer icon start here *************************/}
          <div className="flex  gap-4 mt-6">
            <a href="" target="_blank">
              {" "}
              <span className="w-10 h-10 text-xl text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <FaFacebookF />
              </span>
            </a>

            <a href="" target="_blank">
              {" "}
              <span className="w-10 h-10 text-xl text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <AiOutlineTwitter />
              </span>
            </a>

            <a href="" target="_blank">
              {" "}
              <span className="w-10 h-10 text-xl text-textYellow bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-[#64ffda] cursor-pointer hover:translate-y-2 transition-all duration-300">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          {/****************************** footer icon end here *************************/}
        </div>
      </div>

      {/************* desktop sidebar section  end here ***************/}
    </motion.div>
  );
}

// ==================== types handling  ===================\\

DesktopSidebar.propTypes = {
  navItems: PropTypes.array.isRequired,
  setSidebar: PropTypes.array.isRequired,
};

export default DesktopSidebar;
