import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { servicesData } from '@/data/data';

const CardContainer = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-10 mt-5 w-full  content-center pb-10 '>
    {servicesData.map((service,index)=>{
      return (
        <Card key={index} className='bg-[#7b2cbf] text-white border-none '>
          <CardHeader>
           <div className="icon flex justify-center">{service.icon}</div>
            <CardTitle className='mt-10 mb-10'>{service.title}</CardTitle>
            <CardDescription className="text-whtie">{service.content}</CardDescription>
          </CardHeader>
        </Card>
      );
     })}
    </div>
  );
};
export default CardContainer;
