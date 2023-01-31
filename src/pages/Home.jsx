import { useEffect } from "react";
import "./pages.css";
import "./Home.css";
import { motion } from "framer-motion";

function Home({ navigation }) {
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
      <div id="home">
        <div id="home-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uhFmaPD9aY4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HyfRR2Mc1-0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WvWW7As3LmA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ebs4vLdbBD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WvWW7As3LmA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/R_SmALX-fJs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
