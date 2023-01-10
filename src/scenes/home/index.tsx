import { motion } from "framer-motion"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedbull from "@/assets/SponsorRedbull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({selectedPage, setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full">
     {/* IMG & MAIN HEADER */}
     <motion.div className="mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div className="md:mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50}, visible: { opacity: 1, x: 0 }}}>
                <div className="relative">
                    {/* creating an image relative to something else ( one beneath it etc. In our case Evolve / Evogym.) */}
                   <div className="before:absolute before:-top-20 before:-left-20  before:z-[-1] before:content-evolvetext"> {/* -top-20 is -20 from the top and will place Evolve right above Evogym. before:content-evolvetext gets us the image from our tailwind.config.cjs file */}
                        <img src={HomePageText} alt="home-page-text" />
                   </div>
                </div>
                <p className="mt-8 text-sm">
                    Unrivaled gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes that you dream of.. Work towards your Dream Body Today.
                </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div className="mt-8 flex items-center gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50}, visible: { opacity: 1, x: 0 }}}>
             <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
            <AnchorLink 
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
             <p>Learn More</p>
            </AnchorLink>
           </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
    </motion.div>

        {/* SPONSORS LAYOUT */}
        {isAboveMediumScreens && (
           <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                    <img src={SponsorRedbull} alt="sponsor-redbull" />
                    <img src={SponsorForbes} alt="sponsor-forbes" />
                    <img src={SponsorFortune} alt="sponsor-fortune" />
                </div>
             </div>
          </div>
        )}

    </section>
}

export default Home;