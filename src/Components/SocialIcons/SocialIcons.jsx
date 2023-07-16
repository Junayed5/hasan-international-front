import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/Tfi";
import { Link } from "react-router-dom";
import WithButton from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SocialIcons = () => {
  const user = useContext(AuthContext);
  return (
    <div className="lg:flex mt-2 gap-2 justify-end">
      {/************************ Social components start hear *************************/}
      {/* Singin button */}
      {!user?.user?._id && (
        <WithButton color="black" bg="bg-yellow-500" submitValue={"Sign In"} />
      )}
      <Link
        to="https://www.facebook.com/profile.php?id=100063579536034"
        target="_blank"
        className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
      >
        <span className="sr-only">Facebook</span>
        <FaFacebookF className="lg:h-5 lg:w-5 w-3 h-3" />
      </Link>

      <Link
        to="https://twitter.com/Mohamma85629351"
        target="_blank"
        className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
      >
        <FaTwitter className="lg:h-5 lg:w-5 w-3 h-3" />
      </Link>

      <Link
        to="https://www.instagram.com/hasaninternational2020/"
        target="_blank"
        className={`flex rounded-lg items-center  text-white  `}
      >
        <img
          className="lg:h-10 lg:w-10 w-[28px] h-6 lg:my-0 my-[2px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622"
        ></img>
      </Link>

      <Link
        to="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F%3Ftrk%3Donboarding-landing&trk=login_reg_redirect"
        target="_blank"
        className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
      >
        <TfiLinkedin className="lg:h-5 lg:w-5 w-3 h-3" />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCrAQh80mx-kM5Z7lE52mJLw"
        target="_blank"
        className={`flex rounded-lg items-center lg:px-3 py-2 px-2 my-[2px] lg:my-0 text-white bg-[#1873eb] `}
      >
        <FaYoutube className="lg:h-5 lg:w-5 w-3 h-3" />
      </Link>
    </div>
  );
};

export default SocialIcons;
