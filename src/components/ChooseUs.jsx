import Timeline from "./ui/Timeline";
import image from "../assets/images/Group 1.png";

const data = [
  {
    title: "Partner-Centric Approach",
    description:
      "We work collaboratively with our partners to achieve shared success, treating your goals as our own.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From ideation to execution, we handle every aspect of your digital transformation journey.",
  },
  {
    title: "Affordability with Quality",
    description:
      "Premium services tailored for small businesses, ensuring value for every dollar spent.",
  },
  {
    title: "Global Expertise, Local Focus",
    description:
      "While our expertise spans the globe, our commitment is firmly rooted in serving small businesses in the US.",
  },
];

const ChooseUs = () => {
  return (
    <div className='flex flex-col items-center bg-[#090318] text-white py-20 px-4 lg:px-10'>
      <div className='w-full max-w-7xl'>
        <h1 className='text-2xl font-bold md:font-[600] md:text-[60px] text-center mb-12'>
          Why Choose Bycrafter?
        </h1>

        <div className='flex flex-col lg:flex-row  gap-12 items-center'>
          <div className='flex-1'>
            <Timeline data={data} align='left' />
          </div>

          <div className='hidden lg:flex flex-1 items-center justify-center'>
            <img
              src={image}
              alt='Features illustration'
              className='max-w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
