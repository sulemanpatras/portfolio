import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">
            <span className="method">GET</span> /projects
          </div>
          <h2 className="section-title">
            Selected work, <span>returned as a list.</span>
          </h2>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal
              as="a"
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.path}
              className={`project-card ${p.featured ? "featured" : ""}`}
              delay={(i % 3) * 70}
            >
              <div className="project-thumb">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="project-visit">
                  Visit site <ArrowUpRight size={14} />
                </span>
              </div>
              <div className="project-body">
                <div className="project-route mono">
                  <span className="method-tag">GET</span>
                  {p.path}
                  <span className="project-status mono">200</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="mono tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
