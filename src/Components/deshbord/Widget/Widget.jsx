import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./widget.css";

const Widget = ({ item }) => {


  return (
    <div className="widget w-[220px]">
      <div className="flex justify-between">
        <span className="title">{item?.title}</span>
        <div>
          {item?.up?.up && (
            <div className="flex items-center text-green-500">
              <FaAngleUp className="mr-1" />
              {item?.up?.amount}%
            </div>
          )}
          {!item?.up?.up && (
            <div className="flex items-center text-red-500">
              <FaAngleDown className="mr-1" />
              {item?.up?.amount}%
            </div>
          )}
        </div>
      </div>

      <h3 className="text-2xl  py-4">
        {item?.amount?.isMoney && "$"}
        {item?.amount?.amount}
      </h3>

      <div className="flex justify-between items-center">
        <span className="link">{item.link}</span>
        <div className={`${item?.style} p-2 rounded-sm`}>
          {React.createElement(item?.icon)}
        </div>
      </div>
    </div>
  );
};

export default Widget;
