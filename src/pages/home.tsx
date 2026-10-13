function getSiteName() {
  const host = window.location.hostname.replace(/^www\./, "");
  if (host.endsWith("aidanmcl.net")) return "Aidan McLaughlin";
  return "teuos";
}

const siteName = getSiteName();

function Home({ darkMode }: { darkMode: boolean }) {

  return (
    <>
    <section className="hero">
        <img
            className={`hero-image hero-image-dark ${darkMode ? "visible" : ""}`}
            src="https://images.teuos.net/hero-image.jpg"
            alt="Hero image dark"
        />

        <img
            className={`hero-image hero-image-light ${!darkMode ? "visible" : ""}`}
            src="https://images.teuos.net/hero-image-light.jpg"
            alt="Hero image light"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
            <h1>Hey, my name is&nbsp;
                <span className='textHighlightTitle'>
                        {siteName}&nbsp;
                </span>
                </h1>
            <p>I'm a software engineer and computer scientist.</p>
        </div>
    </section>

    <section className="intro-section">
        <div className="intro-content">
            <h2>A little about me</h2>
            <br />
            <p>I'm currently doing an honers degree in computer science, I spend my personal time making websites, working on servers, and developing minecraft plugins.</p>
            <p>I was born and live in Scotland, studying and working in the city of Glasgow.</p>
            <p>I often have difficulty with my spelling and short term memory due to my diagnosis with Dyslexia, how ever, I make it my mission to not let this get in my way.</p>
        </div>
    </section>
      
    </>
  );
}
export default Home;