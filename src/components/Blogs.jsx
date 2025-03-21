import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import image from "../assets/images/random1.png";

const blogData = [
  {
    id: 1,
    title: "Heading of blog 1",
    description:
      "Reach out to us today to explore how Inwebmedia can partner with you to turn your vision into reality. Whether you’re taking your first step.",
    image: image,
  },
  {
    id: 2,
    title: "Heading of blog 2",
    description:
      "Reach out to us today to explore how Inwebmedia can partner with you to turn your vision into reality. Whether you’re taking your first step.",
    image: image,
  },
  {
    id: 3,
    title: "Heading of blog 3",
    description:
      "Reach out to us today to explore how Inwebmedia can partner with you to turn your vision into reality. Whether you’re taking your first step.",
    image: image,
  },
];

const Blogs = () => {
  return (
    <div className='flex flex-col items-center ' id='blog'>
      <div className='flex flex-col mt-5 items-center max-w-7xl bg-[#090318] text-white'>
        <div className='title'>
          <h1 className='text-2xl mb-2 font-600 md:font-[600] md:text-[60px]'>
            Blogs
          </h1>
        </div>
        <div className='card-container grid grid-cols-1 place-content-center lg:grid-cols-3 md:px-15 px-4 md:grid-cols-2 mb-10 gap-8'>
          {blogData.map((blog) => (
            <Card
              key={blog.id}
              className=' border-none max-w-[400px] text-white '
            >
              <div className='relative w-full h-full'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-full object-cover rounded-t-lg'
                />
              </div>
              <div className='p-4 bg-[#7b2cbf] rounded-lg'>
                <CardTitle>
                  <h1 className='text-xl font-bold'>{blog.title}</h1>
                </CardTitle>
                <CardDescription className='text-white text-justify mt-2'>
                  {blog.description}
                </CardDescription>
                <Button className='border-white hover:bg-gray-300 cursor-pointer bg-white text-black w-fit rounded-2xl mt-4'>
                  Read Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
