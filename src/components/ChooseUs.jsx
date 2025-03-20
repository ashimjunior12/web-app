import Timeline from '../components/ui/Timeline';
import image from '../assets/images/Group 1.png'

const data = [
  {
    title: 'Partner-Centric Approach',
    description:
      'We work collaboratively with our partners to achieve shared success, treating your goals as our own.',
  },
  {
    title: 'End-to-End Solutions',
    description:
      'From ideation to execution, we handle every aspect of your digital transformation journey.',
  },
  {
    title: 'Affordability with Quality',
    description:
      'Premium services tailored for small businesses, ensuring value for every dollar spent.',
  },
  {
    title: 'Global Expertise, Local Focus',
    description:
      'While our expertise spans the globe, our commitment is firmly rooted in serving small businesses in the US.',
  },
];


const ChooseUs = () => {
  return (
    <div className='flex flex-col items-center bg-[#090318] text-white md:px-10 pl-4 pt-15'>
      <header>
        <h1 className='w-[400] text-xl font-bold  md:text-[60px] md:text-center text-left'>
          Why Choose Bycrafter?
        </h1>
        <div className='flex'>
          <Timeline data={data} />
          <div className='image hidden lg:block'>
            <img src={image} alt='image' />
          </div>

         
        </div>
      </header>
    </div>
  );
};
export default ChooseUs;
