  import app1 from "../assets/application/app-1.jpeg";
import app2 from "../assets/application/app-2.jpeg";
import app3 from "../assets/application/app-3.jpeg";
import app4 from "../assets/application/app-4.jpeg";
import app5 from "../assets/application/app-5.jpeg";
import app6 from "../assets/application/app-6.jpeg";
import app7 from "../assets/application/app-7.jpeg";
import app9 from "../assets/application/app-9.png";

const Application = () => {

  const appData = [
    {id : 1, img : app1,  title : 'Medical'},
    {id : 2, img : app2,  title : 'Pharmaceuticals'},
    {id : 3, img : app3,  title : 'Beverage'},
    {id : 4, img : app4,  title : 'Agriculture'},
    {id : 5, img : app5,  title : 'Sea-water'},
    {id : 6, img : app6,  title : 'Hotel and Apartment'},
    {id : 7, img : app7,  title : 'Industrial'},
    {id : 8, img : app9,  title : 'Boiler'},
  ]

  return (
    <div>
      {/* show only 8 cards this  */}
      <div className="text-center max-w-[600px] mx-auto mt-6">
        <h2 className="my_h2 mb-6">Application</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-5 lg:px-0 lg:grid-cols-4 gap-3 justify-justify-between">
      {appData.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <img src={item.img} alt={item.title} className="w-full h-auto mb-2" />
          <h3 className="text-center text-lg font-bold">{item.title}</h3>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Application;
