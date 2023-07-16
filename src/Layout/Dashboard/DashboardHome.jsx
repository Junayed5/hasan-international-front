import { FaUserAlt } from "react-icons/fa";
import Chart from "../../Components/deshbord/Chart/Chart";
import Widget from "../../Components/deshbord/Widget/Widget";
import "./dashboard.css";
const DashboardHome = () => {
  const data = [
    {
      title: "USERS",
      amount: { isMoney: false, amount: 100 },
      link: "See all users",
      icon: FaUserAlt,
      style: "bg-red-200 text-[goldenrod]",
      up: { up: true, amount: 10 },
    },
    {
      title: "ORDERS",
      amount: { isMoney: false, amount: 300 },
      isMoney: false,
      link: "View all orders",
      icon: FaUserAlt,
      style: "bg-red-200 text-[goldenrod]",
      up: { up: false, amount: 12 },
    },
    {
      title: "BALANCE",
      amount: { isMoney: true, amount: 400 },
      link: "See details",
      icon: FaUserAlt,
      style: "bg-red-200 text-[goldenrod]",
      up: { up: true, amount: 15 },
    },
    {
      title: "EARNINGS",
      amount: { isMoney: true, amount: 300 },
      link: "View net earnings",
      icon: FaUserAlt,
      style: "bg-red-200 text-[goldenrod]",
      up: { up: false, amount: 12 },
    },
  ];
  return (
    <div className="p-8">
      <div className="gap-4 flex justify-between">
        {data.map((item, i) => (
          <Widget key={i} item={item} />
        ))}
      </div>
      <Chart title='Chart'/>
      <div className="homeContainer"></div>
    </div>
  );
};

export default DashboardHome;
