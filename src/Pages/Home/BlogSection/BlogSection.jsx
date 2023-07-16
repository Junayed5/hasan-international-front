import BlogSectionCard from "./BlogSectionCard";

const BlogSection = () => {
  return (
    <>
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2 mt-4">Blog</h2>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-10 my-10">
        <BlogSectionCard />
        <BlogSectionCard />
        <BlogSectionCard />
        <BlogSectionCard />
        <BlogSectionCard />
        <BlogSectionCard />
      </div>
    </>
  );
};

export default BlogSection;
