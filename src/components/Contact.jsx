import React from "react";

const ContactForm = () => {
  return (
    <div
      className="  flex items-center flex-col justify-center p-4"
      id="contact"
    >
      {/* Main container with gradient */}
      <h1 className="text-white text-[40px]  font-semibold text-center pt-12 pb-8">
        Contact Us
      </h1>
      <div className="w-full max-w-[1000px] mx-auto bg-gradient-to-b from-[#000]  to-[#6C2FA6] rounded-[32px] overflow-hidden relative">
        {/* Dark curved overlay */}
        {/* <div className="absolute inset-0 bg-[url('/curve-overlay.svg')] bg-no-repeat bg-cover opacity-50"></div> */}

        <div className="flex flex-col max-md:gap-4 md:flex-row px-8 md:px-16 py-16  md:gap-24">
          {/* Left Section */}
          <div className="w-full md:w-1/2 max-md:flex max-md:flex-col max-md:text-center text-white self-center">
            <p className="text-md mb-4 font-light">Get started</p>

            <h2 className="text-2xl md:text-4xl font-bold max-md:text-center leading-tight mb-4">
              Ready to Transform Your Digital Presence?
            </h2>

            <p className="text-[17px] opacity-90 mb-4 max-md:text-center leading-relaxed">
              Your digital success is our passion. Let's connect and ignite your
              journey to unparalleled success
            </p>

            <button className="bg-white max-md:text-center mx-auto text-[#0f0823] max-w-[200px]  rounded-full py-3 px-8 font-medium text-sm hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-[20px] p-8 max-w-md mx-auto shadow-lg">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-600 font-bold text-sm mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company name..."
                    className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-bold text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Type your email..."
                    className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 font-bold text-sm mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <div className="w-16 bg-gray-50 border border-gray-600 rounded-l-lg flex items-center justify-center text-gray-600 text-sm">
                      NP
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+977 981234586"
                      className="flex-1 p-3 border border-gray-600 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-l-0"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    Submitting the form means you're okay with our{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      Terms of Service
                    </a>
                    ,{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </a>
                    , and our default.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
