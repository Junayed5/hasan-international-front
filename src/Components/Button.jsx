import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SubButton = ({ submitValue, color, bg }) => {
  return (
    <Link to="./sing-in">
      <Button
        className={`lg:flex hidden  justify-center items-center px-4 py-2 ${bg} text-${color} transition duration-300 capitalize transform hover:scale-80`}
      >
        {submitValue}
      </Button>
    </Link>
  );
};

SubButton.propTypes = {
  submitValue: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default SubButton;
