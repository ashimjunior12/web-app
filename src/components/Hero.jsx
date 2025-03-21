import { FaArrowRight } from 'react-icons/fa';
import { Button } from './ui/button';
import bg from '../assets/images/colour.png'

const Hero = () => {
  return (
    <div
      className='h-screen bg-cover bg-center bg-[#090319] place-content-center my-auto flex items-center justify-center bg-blend-overlay  '
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex flex-col justify-center max-w-[1600px]  lg:px-52 md:px-30 px-4 text-center items-center h-full text-white z-20'>
        <h1 className='bg-gradient-to-r from-[#E0AAFF] to-[#7B2CBF] bg-clip-text text-transparent  md:font-[700] md:text-[65.78px] text-4xl'>
          Welcome to Bycrafters
        </h1>
        <p className='mt-4 text-sm font-[400] text-[18.44px] text-center'>
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
          <Button className='cursor-pointer bg-purple-600 border border-white rounded-4xl py-2 px-6 text-white font-bold uppercase'>
            Begin Now
          </Button>
          <Button className='cursor-pointer border rounded-4xl bg-[#e5d4c0] text-black uppercase font-bold hover:bg-[#e5d4c0]'>
            Explore <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
