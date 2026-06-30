import { useEffect } from "react";
import "../css/Socials.css"

const socials = [
  {
    id: "GitHub",
    title: "GitHub",
    handle: "@teuos",
    url: "https://github.com/teuos/",
    icon:"/social-icon/github.svg",
    background: "linear-gradient(135deg, #111111, #333333)",
  },
  {
    id: "Email",
    title: "Email",
    handle: "aidanmcl06@outlook.com",
    url: "mailto:aidanmcl06@outlook.com?subject=Website%20Contact&body=Hi%20Aidan%2C%0A%0A",
    icon:"/social-icon/email.svg",
    background: "linear-gradient(135deg, #6495ed, #0e3a8d)",
  },
  {
    id: "Instagram",
    title: "Instagram",
    handle: "@aidanmcl06",
    url: "https://www.instagram.com/aidanmcl06/",
    icon:"/social-icon/instagram.svg",
    background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
  },
  {
    id: "Discord",
    title: "Discord",
    handle: "@teuos",
    url: "",
    icon:"/social-icon/discord.svg",
    background: "linear-gradient(135deg, #5865f2, #404eed)",
  },
  {
    id: "Spotify",
    title: "Spotify",
    handle: "@aidanml06",
    url: "https://open.spotify.com/user/aidanmcl06?si=20d07f57e7a54957",
    icon:"/social-icon/spotify.svg",
    background: "linear-gradient(135deg, #1DB954, #01a11c)",
  },
  {
    id: "Snapchat",
    title: "Snapchat",
    handle: "@aidanmcl06",
    url: "https://www.snapchat.com/add/aidanmcl06?share_id=GFEiPDYKeSE&locale=en-GB",
    icon:"/social-icon/snapchat.svg",
    background: "linear-gradient(135deg, #FFFC00, #e3e001)",
  },
];


function Socials() {

  useEffect(() => {
      const tiles = document.querySelectorAll(".socials-tile");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("socials-tile-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20px 0px",
        }
      );
  
      tiles.forEach((tile) => observer.observe(tile));
  
      return () => observer.disconnect();
    }, []);


  return (
    <main className="socials-page">
      <section className="socials-header">
        <div className="socials-header-content">
          <h1><span className="highlight">Socials</span></h1>
          <p>My social accounts and ways to contact me.</p>
        </div>
      </section>

      <section className="socials-grid">
        {socials.map((social, index) => (
          <a
            className="socials-tile"
            key={social.id}
            {...(social.url ? {
              href : social.url,
              target : "_blank",
              rel : "noreferrer",
            } : {})}
            style={{ background: social.background, transitionDelay: `${index * 40}ms` }}
          >
            <div className="socials-tile-content">
              <img
                className="socials-icon"
                src={social.icon}
                alt={`${social.title} icon`}
              />

              <h2>{social.title}</h2>
              <p>{social.handle}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
export default Socials;