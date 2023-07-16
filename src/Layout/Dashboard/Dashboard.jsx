import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaUsers, FaHome } from "react-icons/fa";
import { AiFillHdd } from "react-icons/ai";
import { SiAdobeacrobatreader } from "react-icons/si";
import { ImUpload2 } from "react-icons/im";
import { Link, Outlet } from "react-router-dom";
import DashboardItem from "./DashboardItem";

const DashboardLayout = () => {
  const menus = [
    {
      name: "All customer & user",
      link: "/dashboard/users",
      icon: FaUsers,
    },
    {
      name: "Reviews",
      subMenu: [
        {
          subName: "All Review",
          subLink: "/dashboard/all-review",
          subIcon: SiAdobeacrobatreader,
        },
        {
          subName: "Add New Review",
          subLink: "/dashboard/add-review",
          subIcon: ImUpload2,
        },
      ],
      icon: AiFillHdd,
    },
    {
      name: "Mail",
      link: "/dashboard/mail",
      icon: FaUsers,
    },
    {
      name: "Add Portfolio",
      link: "/dashboard/add-portfolio",
      icon: FaUsers,
    },
  ];
  const [openDrawer, setOpenDrawer] = useState(true);
  const [subItemShow, setSubItemShow] = useState("");
  const [toggle, setToggle] = useState({});
  return (
    <div>
      <div className="py-4 bg-[#1f2937] flex justify-end px-14 ">
        <div className="flex items-center ">
          <Link className="text-white px-2" to="/">
            <FaHome />
          </Link>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator text-white bg-purple-800 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item "></span>
            </div>
          </button>
        </div>
      </div>
      <section className="flex min-h-screen pl-12 md:pl-0 mx-auto relative">
        {/* main content overlay */}
        {!openDrawer && (
          <div
            onClick={() => setOpenDrawer(!openDrawer)}
            style={{ background: "rgba(80, 21, 76, 0.30)" }}
            className=" block md:hidden absolute top-0 left-0 z-10 w-full h-full"
          ></div>
        )}
        <div
          className={`bg-gray-800 z-20 h-full absolute left-0 top-0 md:sticky md:min-h-screen ${
            openDrawer ? "w-14 md:w-72 xl:w-96" : "w-64 smm:w-68 md:w-16"
          } duration-300 md:duration-500`}
        >
          <div className="px-3 md:px-4 text-gray-100 sticky top-0 left-0 -mt-14">
            <div className="pt-3 flex justify-end">
              <HiMenuAlt3
                className="cursor-pointer active:bg-gray-600 rounded-full text-xl md:text-2xl xl:text-4xl"
                onClick={() => setOpenDrawer(!openDrawer)}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 relative">
              {menus?.map((item, index) => (
                <DashboardItem
                  item={item}
                  index={index}
                  openDrawer={openDrawer}
                  key={index}
                  subItemShow={subItemShow}
                  setSubItemShow={setSubItemShow}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              ))}
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default DashboardLayout;
