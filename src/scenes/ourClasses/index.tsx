import { SelectedPage, ClassType } from "@/shared/types"
import { motion } from "framer-motion"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from "@/shared/HText"
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere, harum, mollitia perspiciatis quasi ab unde, quia exercitationem deserunt similique quibusdam perferendis blanditiis architecto! Incidunt harum eos fugiat quibusdam nostrum!",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere, harum, mollitia perspiciatis quasi ab unde, quia exercitationem deserunt similique quibusdam perferendis blanditiis architecto! Incidunt harum eos fugiat quibusdam nostrum!",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere, harum, mollitia perspiciatis quasi ab unde, quia exercitationem deserunt similique quibusdam perferendis blanditiis architecto! Incidunt harum eos fugiat quibusdam nostrum!",
        image: image4,
    },
    {
        name: "Weight Training classes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere, harum, mollitia perspiciatis quasi ab unde, quia exercitationem deserunt similique quibusdam perferendis blanditiis architecto! Incidunt harum eos fugiat quibusdam nostrum!",
        image: image5,
    },
    {
        name: "Weight Training classes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo facere, harum, mollitia perspiciatis quasi ab unde, quia exercitationem deserunt similique quibusdam perferendis blanditiis architecto! Incidunt harum eos fugiat quibusdam nostrum!",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ delay: 0.2, duration: 0.5 }} 
      variants={{ hidden: { opacity: 0, x: -50}, visible: { opacity: 1, x: 0 }}}
      >
        <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem ipsum iusto repellat minima officia quisquam nesciunt consequuntur maxime ullam magni quaerat aliquid mollitia perferendis, ipsa reprehenderit, inventore, soluta vel!
            </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
                <Class
                key={`${item.name}-${index}`} /* Neat way to avoid overlapping with something and making it truly unique - suffix item name with an index */
                name={item.name}
                description={item.description}
                image={item.image}
                 />
            ))}
          </ul>
      </div>
    </motion.div>
  </section>
}

export default OurClasses;