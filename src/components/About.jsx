import image from '../assets/images/call-us-now-icons-vector 1.png';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#0b0117] text-white lg:px-52 md:px-10  px-4 md:pt-10 pt-[50px]'>
      <header className='pt-10 mb-10'>
        <h1 className='md:font-[600] md:text-[60px] md:text-5xl font-bold text-xl'>
          Transform Your Digital Vision into Reality
        </h1>
        <p className='md:font-[400] md:text-lg lg:text-center leading-[35px] text-left text-sm mt-4'>
          Unleashing excellence, crafting quality, and nurturing success every
          step of the way.
        </p>
      </header>

      <footer className='w-full max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-2'>
          <div className='about-us flex-1'>
            <h1 className='md:font-[600] md:text-[60px] leading-[75px] mt-8 font-bold text-2xl'>
              About Us
            </h1>

            <p className='md:font-medium text-sm md:text-md leading-[30px] text-left pb-6 '>
              Founded with a vision to simplify the digital transition for
              businesses, Bycrafters is committed to delivering excellence. We
              understand that every small business has unique challenges and
              opportunities, and our mission is to provide bespoke solutions
              that not only address these needs but also unlock growth
              potential. Our team of four highly skilled professionals
              collaborates seamlessly to provide comprehensive solutions that
              cover every aspect of the digital spectrum. We believe in building
              relationships based on trust and transparency, ensuring that our
              partners—not customers—experience measurable success.
            </p>
          </div>

          <div className='img-sec hidden lg:flex flex-1 items-center justify-center'>
            <img
              src={image}
              alt='Bycrafters team'
              className='max-w-full h-auto object-contain max-h-[600px] w-auto'
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;