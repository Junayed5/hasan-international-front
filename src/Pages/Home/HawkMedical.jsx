const HawkMedical = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-2/5 bg-cover bg-center rounded-lg"
          // set bg backgroundImage
          style={{
            backgroundImage:
              "url('https://www.hackread.com/wp-content/uploads/2021/08/vulnerability-allowed-hackers-to-tamper-medication-in-infusion-pump.jpg')",
          }}
        ></div>
        <div className="flex flex-col w-full p-6 lg:w-3/5 md:p-8 lg:p-12">
          <h2 className="text-[#01B26F] text-7xl font-bold leading-none">
            Vulnerability
          </h2>
          <p className="mt-4 mb-8 text-sm">
            Founded in 2004, Shenzhen Hawk Medical Instrument Co., Ltd (Hawkmed)
            is a leading company focusing on innovating and developing one-stop
            infusion system solution such as infusion pump, syringe pump,
            enteral feeding pump, TCI syringe pump, fluid warmer, infusion
            workstation, infusion therapy accessories etc.
          </p>
          <p className="mt-4 mb-8 text-sm">
            Founded in 2004, Shenzhen Hawk Medical Instrument Co., Ltd (Hawkmed)
            is a leading company focusing on innovating and developing one-stop
            infusion system solution such as infusion pump, syringe pump,
            enteral feeding pump, TCI syringe pump, fluid warmer, infusion
            workstation, infusion therapy accessories etc.
          </p>
          <button className="px-10 py-3 text-lg font-medium rounded-3xl text-white bg-[#01B26F]">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HawkMedical;
