const Safety = () => {
  return (
    <div
      className="mb-10 bg-gradient-to-br from-green-500 to-blue-500"
    >
      <div className="flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/2 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/57/69/00/360_F_257690032_9DkiDy1g7o75R43oWi4Sbc3vCaBCYBSX.jpg')",
          }}
        ></div>
        <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:py-20 lg:px-12">
          <h2 className="text-white text-4xl font-bold leading-none">
            SMART AND SIMPLE WITH ADDED SAFETY
          </h2>

          <p className="mt-4 mb-8 ">
            Sustainably we improve the health of people around the world. Work
            together with our customers and partners to develop
            tried-and-trusted products and provide effective medical solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
