const BlogSectionCard = () => {
  return (
    <>
    {/* Blog card start hear */}

      <div className="card   border hover:shadow-xl ">
    {/* Blog card Figure */}
        <figure>
          <div className="image-container cursor-pointer">
            <img
              src="https://e7.pngegg.com/pngimages/562/852/png-clipart-hoodie-t-shirt-clothing-bluza-sweater-t-shirt-black-top.png"
              alt="car!"
              />
          </div>
        </figure>
              {/* Blog card body */}
        <div className="p-5">
          <h2 className="font-bold text-xl cursor-pointer">
            This is good product in this world
          </h2>
          <p className="">
            According to Research And Markets, the demand for disposable medical
            consumables is increasing and the market was valued at $48,630
            million in 2016 and is expected to reach $80,252 million by 2023,
            registering a CAGR of 7.3%.
          </p>
          <button className="border border-blue-500 px-2 mt-1 hover:text-white hover:bg-blue-500">Read now</button>
        </div>
      </div>
    {/* Blog card End hear */}

    </>
  );
};

export default BlogSectionCard;
