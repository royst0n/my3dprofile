import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Reach Out</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <h3 className={`${styles.heroSubText}`}>Royston Menezes</h3>
        <p> Bengaluru</p>
        <p>Website: <a href="https://www.behance.net/roystonmenezes2">Portfolio is on Behance</a></p>
        <p>Phone Number: +91 94485 59120</p>
          <p>Email: roystonm00@gmail.com</p>
        
        <div className="flex flex-row justify-between">
          <a href="https://www.behance.net/roystonmenezes2" target="_blank"><img src="icons/behance.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.instagram.com/royston.menezes/" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          {/* <a href="https://www.youtube.com/sathvick" target="_blank"><img src="icons/yt.svg" className="mt-2 h-10 v-10" /></a> */}
          <a href="https://www.linkedin.com/in/royston-menezes-17a230233/" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          {/* <a href="https://twitter.com/sathvick" target="_blank"><img src="icons/twitter.svg" className="mt-2 h-10 v-10" /></a> */}
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")