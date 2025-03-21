import { useState, useEffect } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { servicesData } from '@/data/data';

const CardContainer = () => {
  const [isSecondRow, setIsSecondRow] = useState(false);
  const firstRowCards = 3;
  const lengthOfData = servicesData.length;

  useEffect(() => {
    if (lengthOfData > firstRowCards) {
      setIsSecondRow(true);
    } else {
      setIsSecondRow(false);
    }
  }, [lengthOfData]);

  // Split the data into first row and remaining rows
  const firstRowData = servicesData.slice(0, firstRowCards);
  const remainingData = servicesData.slice(firstRowCards);

  return (
    <div className='w-full content-center pb-10'>
      {/* First row - 3 columns */}
      <div className='grid lg:grid-cols-3 gap-4 mt-5'>
        {firstRowData.map((service, index) => (
          <Card
            key={`first-${index}`}
            className='bg-[#7b2cbf] text-white border-none'
          >
            <CardHeader>
              <div className='icon flex justify-center text-3xl'>{service.icon}</div>
              <CardTitle className='mt-10 mb-10'>{service.title}</CardTitle>
              <CardDescription className='text-white'>
                {service.content}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Second row and onwards - 2 columns with centering */}
      {isSecondRow && (
        <div className='grid lg:grid-cols-2 gap-4 mt-4 mx-auto lg:max-w-4xl'>
          {remainingData.map((service, index) => (
            <Card
              key={`second-${index}`}
              className='bg-[#7b2cbf] text-white border-none'
            >
              <CardHeader>
                <div className='icon flex justify-center text-3xl'>{service.icon}</div>
                <CardTitle className='mt-10 mb-10'>{service.title}</CardTitle>
                <CardDescription className='text-white'>
                  {service.content}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContainer;