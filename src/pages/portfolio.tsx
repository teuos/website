import "../css/Portfolio.css";

const projects = [
  {
    title: "teuos.net",
    indev: false,
    type: "Website",
    description: "My personal portfolio website built with React and Vite.",
    tags: ["React", "Vite", "CSS"],
    liveUrl: "https://teuos.net",
    githubUrl: "https://github.com/teuos/website",
  },
  {
    title: "Skyblock Plugin",
    indev: true,
    type: "Minecraft Plugin",
    description: "A paper plugin project for Minecraft servers.",
    tags: ["Java", "Paper", "Minecraft"],
    githubUrl: "https://github.com/teuos/skyblock",
  },
  {
    title: "ahfconstrucion.net",
    indev: true,
    type: "Website",
    description: "A website for AFH Construction Managment company",
    tags: ["React", "Vite", "CSS"],
    liveUrl: "https://ahf.teuos.net",
    githubUrl: "https://github.com/teuos/ahfwebsite"
  },
  {
    title: "Simple Shell",
    indev: false,
    type: "Utility",
    description: "A simple shell written in C for linux",
    tags: ["C", "Linux"],
    githubUrl: "https://github.com/teuos/simpleShell"
  },
];

function Portfolio() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-header">
        <div className="portfolio-header-content">
          <h1><span className="highlight">Portfolio</span></h1>
          <p>A collection of my projects, work, and experiments.</p>
        </div>
      </section>

      <section className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-tile" key={project.title}>
            <div className="project-tile-content">
              <div className="project-labels">
                <span className="project-type">{project.type}</span>
                {project.indev && (
                  <span className="project-indev">In Dev</span>
                )}
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    View Website
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    View GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Portfolio;