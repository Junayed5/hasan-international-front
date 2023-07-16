import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import SocialIcons from "../SocialIcons/SocialIcons";
import PropTypes from "prop-types";

const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <div className="mobile selection">
      <div className="lg:hidden block ">
        {isOpen ? (
          <RxCross2 className="hidden" onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-6 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#64ffda] cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>

            <span className="w-full h-[5px] bg-[#64ffda] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

            <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
          </div>
        )}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#F8EFBA] z-0 w-full custom-scroll top-0 right-0 max-h-screen absolute p-2 overflow-y-auto"
          >
            <div className=" md:px-5 px-1">
              <div className="min-h-[25vh] md:min-h-[15vh]">
                <div className=" lg:hidden">
                  {/* ===================  desktop menu start here ====================== */}

                  <div className="flex justify-between">
                    <ul className=" mt-2 items-center">
                      {/* ====================== menu item ====================== */}
                      <div className="cursor-pointer sticky h-5 w-5 md:w-6 md:h-6   flex justify-center items-center rounded-full bg-red-500 top-2 z-50">
                        <RxCross2
                          className="text-sm text-white duration-200"
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      </div>
                      {menu?.map((item) => (
                        <li key={item?._id} className="flex">
                          <Link
                            className="text-[#000] rounded-[15px] py-[2.3px] md:py-[1.3px] items-center uppercase text-[15px]"
                            to={item?.slug}
                          >
                            {item?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="">
                      <SocialIcons />
                    </div>
                  </div>

                  {/************************ desktop menu end here *************************/}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};
export default MobileMenu;
