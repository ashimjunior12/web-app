import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';




const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white bg-[#090318] py-15'>
      <h1 className='font-[400] md:text-[60px] text-2xl mb-2'>Contact Us</h1>

      <footer>
        <div className='card-container'>
          <Card className='border border-gray-800  flex items-center  justify-center bg-gradient-to-b from-[#080016] to-[#8d42ca]'>
            <div className='content px-4 md:px-10 flex gap-10 flex-col lg:flex-row'>
              <div className='left flex flex-col items center text-white justify-center'>
                <p className=' text-sm md:text-[20px] font-[400]'>Get Started</p>
                <h1 className='mt-5 font-[400] text-md md:text-[45px]'>
                  Ready to Transform <br />
                  Your Digital Presence?
                </h1>
                <p className='mt-5 font-[400] text-sm md:text-[20px]'>
                  Your digital success is our passion. Let's connect and ignite
                  your journey to unparalleled success
                </p>
                <Button className='mt-5 w-fit border-none rounded-2xl bg-white text-black cursor-pointer hover:bg-white'>
                  Contact Us
                </Button>
              </div>
              <div className='right'>
                <Card className='px-4 md:p-10 border border-t-none rounded-t-none '>
                  <form>
                    <div className='section flex flex-col gap-3'>
                      <Label className='font-[400] text-[17.5px] text-[#475569]'>
                        Company
                      </Label>
                      <Input
                        placeholder='Company Name...'
                        className='placeholder:text-[17.5px] placeholder:font-[400]'
                      />
                    </div>
                    <div className='section flex flex-col gap-3 mt-8'>
                      <Label className='font-[400] text-[17.5px] text-[#475569]'>
                        Email
                      </Label>
                      <Input
                        placeholder='Type your email...'
                        className='placeholder:text-[17.5px] placeholder:font-[400]'
                      />
                    </div>
                    <div className='section flex flex-col gap-3 mt-8'>
                      <Label className='font-[400] text-[17.5px] text-[#475569]'>
                        Phone Number
                      </Label>
                      <Input
                        type=''
                        placeholder='+1 (555) 1234586'
                        className='placeholder:text-[17.5px] placeholder:font-[400]'
                      />
                    </div>

                    <footer className='mt-10 flex'>
                      <Checkbox className="cursor-pointer"/>
                      <span className='ml-2 text-[17.5px]'>
                        Creating an account means you’re okay with our <br />
                        <span className='text-[#4400FF] cursor-pointer'>
                          Terms of Service, Privacy Policy
                        </span>
                        , and our default
                      </span>
                    </footer>
                      <Button className="w-full border rounded-3xl mt-6 cursor-pointer">Submit</Button>
                  </form>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
