import image from '../assets/images/Group 11.png'
import robot from '../assets/images/silver-robot-with-black-nose-white-background 1.png'
import {
  Card,
  CardDescription,
} from '@/components/ui/card';

const Philosopy = () => {
  return (
    <div className='flex flex-col items-center py-10 bg-[#090318] px-10'>
      <div className='image pb-5'>
        <img src={image} alt='image' />
      </div>
      <div className='bottom-image'>
        <img src={robot} alt='robot' width={722} height={722} />
      </div>
      <p className='font-[400] text-2xl mb-2 md:text-[60px] text-white pt-5 '>
        Let’s Build the Future Together
      </p>
      <Card className='bg-[#7b2cbf] border-none'>
        <CardDescription className='text-white px-5'>
          Your digital success story begins with a conversation. Reach out to us
          today to explore how Inwebmedia can partner with you to turn your
          vision into reality. Whether you’re taking your first step online or
          looking to elevate your existing digital presence, we’re here to make
          it happen.
        </CardDescription>
      </Card>
    </div>
  );
}
export default Philosopy