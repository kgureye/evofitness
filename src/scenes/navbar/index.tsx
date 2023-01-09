import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")

  return (
  <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img src={Logo} alt="logo" />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link
               page="Benefits"
               selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}
                />
              <Link
               page="Our Classes" 
               selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}
               />
              <Link
               page="Contact Us"
               selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}
                />
            <div className={`${flexBetween} gap-8`}>
              {/* Sign in & Become a member button */}
              <p>Sign in</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
          </div>
        </div>
        ) : (
          <button
          className="rounded-full bg-secondary-500 p-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
          <Bars3Icon className="w-6 h-6 text-white" />
          </button>
      )}
       </div>
     </div>
    </div>

   {/* MOBILE MENU  */}

   {!isAboveMediumScreens && isMenuToggled && (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
            
        </div>
    </div>
   )}
  </nav>
  );
}

export default Navbar;