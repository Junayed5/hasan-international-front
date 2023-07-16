import "./ContactSection.css";
const Contact = () => {
  return (
    <>
        {/* set bg image using tailwind css */}
    <div
      style={{
        backgroundImage:
        "url('https://i.ibb.co/gmdf6n4/Untitled-design-3.png')",
      }}
      className="bg-fixed bg-cover py-32 px-10 bg-center bg-image"
      >
      {/* Contact content */}
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#01B26F] text-7xl font-bold leading-none">
          Hasan International
        </h2>
        <h1 className="text-block mt-4 text-white text-2xl">
          With advanced microcomputer technology and manufacturing processes, we
          devote ourselves to write a new chapter for human health.
        </h1>
      {/* Contact button */}
        <button className="mt-4 px-10 text-white py-3 text-lg font-medium rounded-3xl  bg-[#01B26F]">
          Contact
        </button>
      </div>
    </div>
    </>

  );
};

export default Contact;
