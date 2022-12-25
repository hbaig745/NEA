import "./pages.css";

function Home() {
  return (
    <div id="main">
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
    </div>
  );
}

export default Home;
