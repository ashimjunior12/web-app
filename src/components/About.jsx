import image from '../assets/images/call-us-now-icons-vector 1.png'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center  bg-[#0b0117] text-white md:px-10 px-4 md:pt-10 pt-50'>
      <header className='pt-10'>
        <h1 className='md:font-[500] md:text-[60px] font-bold text-2xl'>
          Transform Your Digital Vision into Reality
        </h1>
        <p className='md:font-[400] md:text-[25px] lg:text-center leading-[35px] text-left text-sm'>
          Unleashing excellence, crafting quality, and nurturing success every
          step of the way.
        </p>
      </header>

      <footer className='flex lg:px-48 md:px-10 '>
        <div className='about-us '>
          <h1 className='md:font-[600] md:text-[60px] leading-[75px] mt-8 font-bold text-2xl'>
            About Us
          </h1>

          <p className='md:font-[400] text-sm md:text-[20px] leading-[30px] text-left pb-6'>
            Founded with a vision to simplify the digital transition for
            businesses, Bycrafters is committed to delivering excellence. We
            understand that every small business has unique challenges and
            opportunities, and our mission is to provide bespoke solutions that
            not only address these needs but also unlock growth potential. Our
            team of four highly skilled professionals collaborates seamlessly to
            provide comprehensive solutions that cover every aspect of the
            digital spectrum. We believe in building relationships based on
            trust and transparency, ensuring that our partners—not
            customers—experience measurable success.
          </p>
        </div>

        <div className='img-sec hidden lg:flex'>
          <img src={image} alt='image' className='w-432 h-[432px] object-cover' />
        </div>
      </footer>
    </div>
  );
}
export default About