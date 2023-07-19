import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  return (
    <div className="w-full px-3 md:px-0 md:w-full pb-20 bg-cover bg-center pt-3 bg-[#bdc3c7]">
      <h2 className=" my_h2 text-[#5f27cd]  mb-10">Contact </h2>
      <form
        ref={form}
        className=" text-gray-100 w-full md:w-5/6 lg:w-1/2 mx-auto"
        action="https://formsubmit.co/sharmin.rakibul@gmail.com"
        method="POST"
      >
        <div className="mb-2 mt-2">
          <input
            className="shadow appearance-none border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-2 mt-2">
          <input
            className="shadow appearance-none border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter your Phone"
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-2">
          <textarea
            className="shadow appearance-none border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="6"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            value="Send"
            className="w-[142px] px-4 py-2 bg-[#5f27cd] text-white font-bold rounded transition duration-300 hover:bg-blue-900 transform text-xl hover:scale-80"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
