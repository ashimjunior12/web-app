 const Timeline = ({ data, align = 'left' }) => {
    return (
      <div className='bg-[#0b0117] text-white p-6 md:p-12'>
        <div className='max-w-4xl mx-auto relative'>
          {/* Vertical Line */}
          <div
            className={`absolute ${
              align === 'left' ? 'left-5 border-l-2' : 'right-5 border-r-2'
            } top-0 h-full border-white`}
          ></div>

          {/* Timeline Items */}
          <div className='space-y-8 md:space-y-10'>
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-6 ${
                  align === 'right' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Dot Indicator */}
                <div
                  className={`relative w-10 flex items-center ${
                    align === 'right' ? 'justify-end pr-3' : 'justify-center'
                  }`}
                >
                  <div className='w-4 h-4 bg-white border-4 border-[#2d0c49] rounded-full'></div>
                </div>

                {/* Text Content */}
                <div className={`flex-1 ${align === 'right' ? 'pr-10' : ''}`}>
                  <h3 className='text-lg md:text-xl font-semibold text-white'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 text-sm md:text-base'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Timeline;