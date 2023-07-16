import { useState } from "react";

export const Category = ({ name, subCategories, subSubCategories }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="category-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="text-black hover:text-[#0652DD]">
        <li className="py-1">
          <strong>
            <p
              className={`py-1 px-2 border w-full ${
                subCategories ? "" : "cursor-pointer"
              } `}
            >
              {name}
            </p>
          </strong>
        </li>
      </ul>
      {/* {subCategories &&  */}
      <ul>
        <li className="bg-[#5758BB]">
          {isHovered && (
            <div className="h-[56vh] md:h-[350px] lg:h-[75vh] sub-categories absolute top-0 left-1/4 w-3/4 md:left-[230px] md:w-[230px] bg-white">
              {subCategories &&
                subCategories?.map((subCategory, index) => (
                  <Category
                    key={index}
                    name={subCategory.name}
                    subSubCategories={subCategory.subSubCategories}
                  />
                ))}
              {subSubCategories && isHovered && (
                <div className="lg:h-[75vh] h-[56px] md:h-[350px]  w-full absolute top-0 lg:px-4 md:w-[300px] bg-white">
                  {subSubCategories.map((subSubCategory, i) => (
                    <p className="py-1 px-2 my-1 border w-full" key={i}>
                      {subSubCategory}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
      {/* } */}
    </div>
  );
};

export default Category;

