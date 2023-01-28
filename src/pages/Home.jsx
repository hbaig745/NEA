import { useEffect } from "react";
import "./pages.css";
import "./Home.css";

function Home({ navigation }) {
  useEffect(() => {
    navigation();
  }, []);

  return (
    <div id="main">
      <div id="home">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0-JVArjKFrE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UXG1py42Bss"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/P7d7XiW_l5Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
