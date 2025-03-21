import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { servicesData } from '@/data/data';

const CardContainer = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 pb-10">
      <div className="flex flex-wrap justify-center items-stretch mt-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full h-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2 flex justify-center"  // Ensuring the items are centered within each flex column
          >
            <Card className="bg-[#7b2cbf] py-2 text-white border-none max-w-[400px] sm:min-h-[250px] w-full transition-all hover:shadow-lg">
              <CardHeader className="flex flex-col justify-between items-center h-full">
                <div className="icon flex text-3xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl sm:text-2xl mb-4 text-center">{service.title}</CardTitle>
                <CardDescription className="text-white text-sm sm:text-base flex-grow">
                  {service.content}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
