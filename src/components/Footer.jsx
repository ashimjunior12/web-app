import { socialMediaLinks } from "@/data/data";



const Footer = () => {
  return (
    <div className='bg-[#00000f] text-white border-t border-gray-700 flex flex-col  py-10 px-5 md:px-20'>
      <h1 className='font-[700] text-[23.83px]'>Bycrafters</h1>
      <p className='font-[400] text-[16.95px] text-gray-500'>
        Boost your business: Contact Us
      </p>

      <div className='bottom flex justify-between items-center mt-10  md:px-5 flex-col md:flex-row'>
        <p className='text-gray-500 md:text-md text-sm'>
          Made By <span className='text-white'>Bycrafter</span>. All rights
          reserved.
        </p>
        <div className='flex gap-4'>
          {socialMediaLinks.map((social, index) => {
            return <div key={index} className="text-purple-700">{social.icon}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer