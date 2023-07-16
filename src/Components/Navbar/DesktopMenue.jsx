import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const DesktopMenue = ({ menu }) => {
  const user = useContext(AuthContext)

  return (
    <div className="lg:block hidden ml-2">
      {/************************ Desktop menue start here *************************/}

      <ul className="flex mt-2 items-center">
        {/************************  Menue item *************************/}

        {menu?.map((item) => (
          <li key={item?._id} className="relative">
            <Link
              className="text-[#f2b5ff] hover:bg-[#0a0a0a] hover:text-[#06eb12] rounded-[15px] py-1 px-2 mx-1 items-center uppercase text-[15px] font-medium"
              to={item?.slug}
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>

      {/************************ Desktop menue end here *************************/}
    </div>
  );
};

// ==================== Type handling  ===================\\

DesktopMenue.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopMenue;
