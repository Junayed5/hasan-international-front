import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payments from "./Payments/Payments";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const footerItems = [
    { _id: 1, subItem: "Home", slug: "home", icon: "FaCaretRight" },
    // { _id: "2", subItem: "About us", slug: "about-us", icon: "FaCaretRight" },
    { _id: 3, subItem: "Product", slug: "product", icon: "FaCaretRight" },
    { _id: 4, subItem: "Service", slug: "service", icon: "FaCaretRight" },
    { _id: 5, subItem: "Contact", slug: "contact", icon: "FaCaretRight" },
  ];

  return (
    <>
      <footer className=" bg-[#242A44] px-3 lg:px-5">
        <div className=" mx-auto pt-8 pb-4 max-w-[1200px] ">
          <div className="lg:flex justify-between">
            {/* ====================== first section ================== */}

            <div className="max-w-[450px] mx-auto lg:mx-0">
              <nav className="mb-4">
                <ul className="flex justify-between lg:block">
                  {footerItems.map((footerItem) => {
                    return (
                      <li
                        key={footerItem._id}
                        className="flex items-center -my-[1px] text-white"
                      >
                        <FaCaretRight className=" mr-5" />
                        <Link to={footerItem.slug}><span className="text-[16px]"> {footerItem.subItem}</span></Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div >
              <div className="lg:mx-auto text-[14px] my-4 lg:my-0 lg:max-w-[500px]">
                <div className=" text-white">
                  <p className={`text-center lg:text-start text-white ml-6`}>
                    Level 9, The office 4, One Central, <br /> World Trade
                    Center, Dubai - UAE.
                  </p>
                </div>

                <div className={`justify-center lg:justify-start flex items-center text-white`}>
                  <FiMail className="mr-2 text-[#69ECEC]" />
                  <p className="text-[#69ECEC]">sharmin.rakibul@gmail.com</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-white">
                  <FiPhoneCall className="mr-2 text-[#69ECEC] " />
                  <p>+971566258802 <span className="text-[#69ECEC]">||</span> +971561758023</p>
                </div>
              </div>
            </div>

            <div className="lg:flex flex-col ">
              <Payments />
            </div>
          </div>
          <p className="text-white text-center text-[14px] mt-4 lg:mt-0">
            © Sharmin Jahan Lucky All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
