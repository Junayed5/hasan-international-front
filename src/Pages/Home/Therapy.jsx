const Therapy = () => {
  return (
    <div className="bg-gradient-to-bl from-green-500 to-blue-500 rounded-lg">
      <div className="flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/2 bg-cover bg-center rounded-lg rounded-e-none"
          style={{
            backgroundImage:
              "url('https://www.shutterstock.com/shutterstock/videos/1096119867/thumb/11.jpg?ip=x480')",
          }}
        ></div>
        <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12">
          <h2 className="text-white text-4xl font-bold leading-none">
            17 YEARS CRAFTSMANSHIP IN INFUSION THERAPY
          </h2>

          <p className="mt-4 mb-8 ">
            Sustainably we improve the health of people around the world. Work
            together with our customers and partners to develop
            tried-and-trusted products and provide effective medical solutions
          </p>
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

export default Therapy;
