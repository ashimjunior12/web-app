import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import image from '../assets/images/random1.png'


const Blogs = () => {
  return (
    <div className='flex flex-col items-center bg-[#090318] text-white'>
      <div className='title'>
        <h1 className='text-2xl mb-2 md:text-[60px] font-600'>Blogs</h1>
      </div>
      <div className='card-container grid grid-cols-1 lg:grid-cols-3 md:px-15 px-4 md:grid-cols-2 mb-10 gap-8'>
        <Card className='bg-[#7b2cbf] border-none text-white p-5'>
          <div className='relative w-full h-52'>
           
            <img
              src={image}
              alt='image'
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
          <div className='p-4'>
            <CardTitle>
              <h1 className='text-xl font-bold'>Heading of blog</h1>
            </CardTitle>
            <CardDescription className='text-white mt-2'>
              Reach out to us today to explore how Inwebmedia can partner with
              you to turn your vision into reality. Whether you’re taking your
              first step.
            </CardDescription>
            <Button className='border-white bg-white text-black w-fit rounded-2xl mt-4'>
              Read Now
            </Button>
          </div>
        </Card>

        <Card className='bg-[#7b2cbf] border-none text-white p-5'>
          <div className='relative w-full h-52'>
            {' '}
            {/* Adjust height as needed */}
            <img
              src={image}
              alt='image'
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
          <div className='p-4'>
            <CardTitle>
              <h1 className='text-xl font-bold'>Heading of blog</h1>
            </CardTitle>
            <CardDescription className='text-white mt-2'>
              Reach out to us today to explore how Inwebmedia can partner with
              you to turn your vision into reality. Whether you’re taking your
              first step.
            </CardDescription>
            <Button className='border-white bg-white text-black w-fit rounded-2xl mt-4'>
              Read Now
            </Button>
          </div>
        </Card>

        <Card className='bg-[#7b2cbf] border-none text-white p-5'>
          <div className='relative w-full h-52'>
            {' '}
            {/* Adjust height as needed */}
            <img
              src={image}
              alt='image'
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
          <div className='p-4'>
            <CardTitle>
              <h1 className='text-xl font-bold'>Heading of blog</h1>
            </CardTitle>
            <CardDescription className='text-white mt-2'>
              Reach out to us today to explore how Inwebmedia can partner with
              you to turn your vision into reality. Whether you’re taking your
              first step.
            </CardDescription>
            <Button className='border-white bg-white text-black w-fit rounded-2xl mt-4'>
              Read Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Blogs;
