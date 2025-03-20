import { FaArrowRight } from 'react-icons/fa';
import { Button } from './ui/button';
import bg from '../assets/images/colour.png'

const Hero = () => {
  return (
    <div
      className='h-screen bg-cover bg-center bg-[#090318] bg-blend-overlay  '
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex flex-col  lg:px-27 md:px-10 px-4 text-center items-center h-full text-white z-20'>
        <h1 className=' text-purple-500 mt-20 md:mt-40  md:font-[700] md:text-[65.78px] text-4xl'>
          Welcome to Bycrafters
        </h1>
        <p className='mt-4 text-sm font-[400] text-[18.44px] text-left'>
          At bycrafters, we believe in redefining digital possibilities by
          crafting tailor-made online solutions. We are more than a service
          provider; we are your trusted partners on a transformative digital
          journey. With a specialized focus on website design and development,
          app design and development, AI integration, digital marketing, and a
          suite of innovative solutions, we empower small businesses across the
          United States to establish their online presence and thrive in a
          competitive digital landscape.
        </p>

        <div className='btn-container mt-5 flex gap-5 flex-col md:flex-row'>
          <Button className='cursor-pointer bg-purple-600 border border-white rounded-2xl py-2 px-6 text-white font-bold uppercase'>
            Begin Now
          </Button>
          <Button className='cursor-pointer border rounded-2xl bg-[#e5d4c0] text-black uppercase font-bold hover:bg-[#e5d4c0]'>
            Explore <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
