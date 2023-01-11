import { useForm } from 'react-hook-form';
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from '@/shared/HText';
import { triggerAsyncId } from 'async_hooks';

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const inputStyles = "mb-5 w-full rounded-lg bg-primary-300 px-5 py-5 placeholder-white";
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      console.log(e);
    }
  }

  return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
     <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
       {/* HEADER */}
       <motion.div
       className="md:w-3/5"
       initial="hidden" 
       whileInView="visible" 
       viewport={{ once: true, amount: 0.5 }} 
       transition={{ delay: 0.2, duration: 0.5 }} 
       variants={{ hidden: { opacity: 0, x: -50}, visible: { opacity: 1, x: 0 }}}
       >
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam quia molestiae est quod minus fugit, provident odio nulla vel explicabo repellat nobis natus, quasi nesciunt, veniam recusandae. Nihil, officia?
        </p>        
       </motion.div>
       {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
           className="mt-10 basis-3/5 md:mt-8"
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true, amount: 0.5 }} 
           transition={{ delay: 0.2, duration: 0.5 }} 
           variants={{ hidden: { opacity: 0, y: 50}, visible: { opacity: 1, y: 0 }}}
          >
            <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/49957b71dcb3af12a9b65a32685b67f6" /* Anonymous email to prevent naked email address */
            method="POST"
            >
              <input
               className={inputStyles}
               type="text"
               placeholder="NAME"
               {...register("name", {
                 required: true,
                 maxLength: 100,
               })}
               />
               {errors.name && (
               <p className="mt-1 text-primary-500">
                 {errors.name.type === "required" && "Name is a required field"}
                 {errors.name.type === "maxLength" && "Maximum length is 100 characters"}
               </p>
               )}
               <input
               className={inputStyles}
               type="text"
               placeholder="EMAIL"
               {...register("email", {
                 required: true,
                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, /* Regex for email validation */
               })}
               />
               {errors.name && (
               <p className="mt-1 text-primary-500">
                 {errors.name.type === "required" && "Email is a required field"}
                 {errors.name.type === "pattern" && "Invalid email address."}
               </p>
               )}
              <textarea
               className={inputStyles}
               rows={4}
               cols={50}
               placeholder="MESSAGE"
               {...register("message", {
                 required: true,
                 maxLength: 2000,
               })}
               />
               {errors.name && (
               <p className="mt-1 text-primary-500">
                 {errors.name.type === "required" && "This field is required"}
                 {errors.name.type === "pattern" && "Maximum length is 2000 characters"}
               </p>
               )}
               <button
               type="submit"
               className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
               >
                 SUBMIT
               </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            variants={{ hidden: { opacity: 0, x: -50}, visible: { opacity: 1, x: 0 }}}
            >
              <div className="md:before:content-evolveText w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img
                className="w-full"
                alt="contat-us-page-graphic"
                src={ContactUsPageGraphic}
                />
              </div>
          </motion.div>
        </div>
     </motion.div>
  </section>
}

export default ContactUs;


