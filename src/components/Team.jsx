// import image from '../assets/images/isometric-business-team 1.png'
// import Timeline from './ui/Timeline';


// const Team = () => {
//  const data = [
//    {
//      title: 'Website and App Development Expert',
//      description:
//        'A seasoned professional in crafting innovative and user-friendly digital interfaces.',
//    },
//    {
//      title: 'AI and Data Specialist',
//      description:
//        'An adept problem solver who integrates advanced AI technologies to deliver transformative insights and automation.',
//    },
//    {
//      title: 'Digital Marketing Strategist',
//      description:
//        'A creative force driving impactful campaigns that connect brands with their audiences and maximize ROI.',
//    },
//    {
//      title: 'Operations and Client Relations Manager',
//      description:
//        'Ensuring seamless project execution and fostering enduring partnerships through proactive communication.',
//    },
//  ];

//   return (
//     <div className='flex flex-col items-center bg-[#090318] text-white py-10 justify-center pl-4'>
//       <header>
//         <h1 className='w-[400] text-2xl font-bold md:text-[60px] md:text-center px-5 text-left'>Meet the Team</h1>
//         <p className='w-[400] text-sm  md:font-[25px] text-left md:text-center'>
//           Our strength lies in the collective expertise of our dedicated team:
//         </p>
//       </header>

//       <footer className='flex'>
//         <img src={image} alt='image' className='hidden lg:flex' />
//         <Timeline data={data} />
//       </footer>
//         <p className='font-[400] text-lg md:text-[25px] px-4 md:px-10'>
//           Together, we bring a harmonious blend of creativity, technical acumen,
//           and strategic thinking to every project we undertake.
//         </p>
//     </div>
//   );
// }
// export default Team

import image from '../assets/images/isometric-business-team 1.png';
import Timeline from './ui/Timeline';

const Team = () => {
  const data = [
    {
      title: 'Website and App Development Expert',
      description:
        'A seasoned professional in crafting innovative and user-friendly digital interfaces.',
    },
    {
      title: 'AI and Data Specialist',
      description:
        'An adept problem solver who integrates advanced AI technologies to deliver transformative insights and automation.',
    },
    {
      title: 'Digital Marketing Strategist',
      description:
        'A creative force driving impactful campaigns that connect brands with their audiences and maximize ROI.',
    },
    {
      title: 'Operations and Client Relations Manager',
      description:
        'Ensuring seamless project execution and fostering enduring partnerships through proactive communication.',
    },
  ];

  return (
    <div className='flex flex-col items-center bg-[#090318] text-white py-10 justify-center px-4 lg:px-10'>
      <header className='w-full max-w-7xl mb-12'>
        <h1 className='text-2xl font-bold md:text-[60px] md:text-center text-left'>
          Meet the Team
        </h1>
        <p className='text-sm md:text-2xl text-left md:text-center mt-4'>
          Our strength lies in the collective expertise of our dedicated team:
        </p>
      </header>

      <div className='w-full max-w-7xl'>
        <div className='flex flex-col  lg:flex-row-reverse gap-12 items-start'>
          <div className='flex-1'>
            <Timeline data={data} align='left' />
          </div>

          <div className='hidden lg:flex flex-1 items-center justify-center'>
            <img
              src={image}
              alt='Team illustration'
              className='max-w-full h-auto object-contain'
            />
          </div>
        </div>

        <p className='font-normal text-lg md:text-xl mt-12 text-center'>
          Together, we bring a harmonious blend of creativity, technical acumen,
          and strategic thinking to every project we undertake.
        </p>
      </div>
    </div>
  );
};

export default Team;