import CardContainer from "./ui/CardContainer";


const Services = () => {
 
  return (
    <div className='flex flex-col items-center' id="service">
    <div className='flex justify-center max-w-7xl bg-[#090318] text-white pt-20 flex-col items-center px-4   md:px-10'>
      <h1 className='md:font-[600] md:text-[60px] leading-[75px] text-2xl font-bold'>Our Services</h1>
      <p className='md:font-[400] md:text-[25px] text-sm text-center'>
        Inwebmedia is a one-stop destination for all your digital needs. Our
        diverse offerings include:
      </p>
      <CardContainer />

      <p className="md:font-[400] md:text-lg text-center mb-6 text-sm">
        We pride ourselves on being problem solvers, capable of addressing any
        digital challenge a company might face, regardless of scale or
        complexity.
      </p>
    </div>
    </div>
  );
}
export default Services