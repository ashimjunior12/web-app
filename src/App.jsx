import About from "./components/About"
import Blogs from "./components/Blogs"
import ChooseUs from "./components/ChooseUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Philosopy from "./components/Philosopy"
import Services from "./components/Services"
import Team from "./components/Team"




const App = () => {
  
  return (
    <div className=" bg-[#090319] justify-center flex flex-col">
      {/* <div className="max-w-[1600px]"> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <Team />
      <Philosopy />
      <Contact />
      <Blogs /> 
<Footer />  
{/* </div> */}
    </div>
  );
}
export default App