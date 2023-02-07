import "./contact.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Contact({ navigation }) {
  useEffect(() => {
    navigation();
  }, []);
  return (
    <motion.div
      id="main"
      initial={{ opacity: 0, transition: "1s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: "1s" }}
    >
      <div id="box">
          <div class="contact-box">
                  <div id="text-div">
                      <p class='contact-text'>Email</p>
                      <p class='contact-text'>Phone Number</p>
                      <p class='contact-text'>Address</p>
                      <p class='contact-text'>Instagram</p>
                  </div>
                  <div id="info-div">
                      <p id="contact-contact">FitnessFactory@gmail.com</p>
                      <p id="contact-contact">078912875432</p>
                      <p id="contact-contact">7 Gleanagles Avenue</p>
                      <p id="contact-contact">@FitnessFactory</p>
   
                  </div>
          </div>
        </div>
    </motion.div>
  );
}

export default Contact;
