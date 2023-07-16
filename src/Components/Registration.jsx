import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../api/api";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();


  // password shaw and hide handler
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // from handle using useFrom
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleSignUp = async (data) => {
    try {
      const response = await axios.post(
        `/v1/auth/register`,
        data
      );
      toast.success(response?.data?.message);
    } catch (error) {
      setError(error?.response?.data?.message);
      // console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mx-auto shadow-md bg-gray-300 rounded-md px-3 md:px-5 lg:px-0">
      <div className="mx-auto py-8 flex justify-center items-center max-w-[800px] ">
        <div className=" bg-white w-full rounded-lg p-10 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Sing Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Full Name <span className="text-[red]">*</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should only A-Z(a-z) letters",
                  },
                })}
                type="text"
                id="name"
                className={` ${
                  errors?.name ? " border-red-300" : "border-gray-300"
                } outline-none w-full p-2 border border-gray-300 rounded-md`}
                placeholder="Sharmin Jahan Lucky"
              />
              {errors.name && (
                <span className="text-red-500 p-0 m-0">
                  {" "}
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Phone <span className="text-[red]">*</span>
              </label>
              <input
                {...register("phone", {
                  required: "Phone Number is Required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Invalid phone number format",
                  },
                })}
                type="text"
                className={` ${
                  errors?.phone ? " border-red-300" : "border-gray-300"
                } outline-none w-full p-2 border border-gray-300 rounded-md`}
                placeholder="+880 088 8888 888"
              />
              {errors.phone && (
                <span className="text-red-500 p-0 m-0">
                  {" "}
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Email <span className="text-[red]">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className={` ${
                  errors?.email || error ? " border-red-300" : "border-gray-300"
                } outline-none w-full p-2 border border-gray-300 rounded-md`}
                placeholder="jimi.uae@gmail.com"
              />
              {errors.email && (
                <span className="text-red-500 p-0 m-0">
                  {" "}
                  {errors.email.message}
                </span>
              )}
              {error && <span className="text-red-500 p-0 m-0"> {error}</span>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Password <span className="text-[red]">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password must not exceed 10 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
                className={` ${
                  errors?.password ? " border-red-300" : "border-gray-300"
                } outline-none w-full p-2 border border-gray-300 rounded-md`}
                placeholder="********"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 p-0 m-0"> {errors.password.message}</p>
            )}

            <button
              className="py-1"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Address <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                {...register("address", {
                  required: "address",
                })}
                className={` ${
                  errors?.address ? " border-red-300" : "border-gray-300"
                } outline-none w-full p-2 border border-gray-300 rounded-md`}
                placeholder="UAE, Sharjah"
              />
            </div>

            <div className=" flex gap-3">
              <div className="mb-4 w-full ">
                <label className="block mb-2 font-medium">City</label>
                <input
                  // {...register("city", {
                  //   required: "",
                  // })}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Rolla"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block mb-2 font-medium">State</label>
                <input
                  // {...register("state", {
                  //   required: "",
                  // })}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Sharjah"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block mb-2 font-medium">Zip Code</label>
                <input
                  {...register("zipCode")}
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="00000"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 px-4 ${
                isValid
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-500 cursor-not-allowed"
              } bg-blue-500 text-white rounded-md `}
            >
              Submit
            </button>
            {/* <p>{error}</p> */}
          </form>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-center dark:text-gray-400">
              Have an account?
            </p>
            <Link
              to="/sing-in"
              className="hover:underline text-blue-500 hover:text-violet-400"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
