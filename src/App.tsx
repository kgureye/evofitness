import Navbar from  "@/scenes/navbar";
import Home from  "@/scenes/home";
import Benefits from "@/scenes/benefits"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import OurClasses from "./scenes/ourClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );
    
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    /* red color on home whenever we're at top.  */
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home); 
        } else if(window.scrollY !== 0) {
          setIsTopOfPage(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); // Remove scroll as well as function when they leave the page. Useful for preventing bugs and other memory leaks.
      };
    }, [])

  return (
  <div className="app bg-gray-20">
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
     <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
     <Benefits setSelectedPage={setSelectedPage} />
     <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}


export default App
