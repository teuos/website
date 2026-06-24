import "../css/Socials.css"

const socials = [
  {
    id: "GitHub",
    title: "GitHub",
    handle: "@teuos",
    url: "https://teuos.net",
    icon:"/social-icon/github.svg",
    background: "linear-gradient(135deg, #111111, #333333)",
  },
  {
    id: "Instagram",
    title: "Instagram",
    handle: "@aidanmcl06",
    url: "https://teuos.net",
    icon:"/social-icon/instagram.svg",
    background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
  },
  {
    id: "Discord",
    title: "Discord",
    handle: "@teuos",
    url: "https://teuos.net",
    icon:"/social-icon/discord.svg",
    background: "linear-gradient(135deg, #5865f2, #404eed)",
  },
  {
    id: "Email",
    title: "Email",
    handle: "aidanmcl06@outlook.com",
    url: "https://teuos.net",
    icon:"/social-icon/email.svg",
    background: "linear-gradient(135deg, #6495ed, #0e3a8d)",
  },
  {
    id: "Spotify",
    title: "Spotify",
    handle: "@teuos",
    url: "https://teuos.net",
    icon:"/social-icon/spotify.svg",
    background: "linear-gradient(135deg, #1DB954, #01a11c)",
  },
  {
    id: "Snapchat",
    title: "Snapchat",
    handle: "@aidanmcl06",
    url: "https://teuos.net",
    icon:"/social-icon/snapchat.svg",
    background: "linear-gradient(135deg, #FFFC00, #e3e001)",
  },
];


function Socials() {


  return (
    <main className="socials-page">
      <section className="socials-header">
        <div className="socials-header-content">
          <h1><span className="highlight">Socials</span></h1>
          <p>My social accounts and ways to contact me.</p>
        </div>
      </section>

      <section className="socials-grid">
        {socials.map((social) => (
          <a
            className="socials-tile"
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            style={{ background: social.background }}
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