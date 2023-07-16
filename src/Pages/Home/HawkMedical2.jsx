const HawkMedical2 = () => {
  return (
    <div className="my-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col mx-auto lg:flex-row">
        
        <div className="flex flex-col w-full p-6 lg:pl-0 lg:w-3/5 md:p-8 lg:p-12">
          <h2 className="text-[#01B26F] text-7xl font-bold leading-none">
          In-depth interviews
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
          <button className="px-10 text-white py-3 text-lg font-medium rounded-3xl  bg-[#01B26F]">
            More
          </button>
        </div>
{/* set bg images */}
        <div
          className="w-full lg:w-2/5 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://hawkmed.com.cn/wp-content/uploads/2021/12/3c57136c4d.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HawkMedical2;
