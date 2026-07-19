import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow amber">
            <span className="method">GET</span> /experience
          </div>
          <h2 className="section-title">
            Deploy log — <span>every role, shipped.</span>
          </h2>
        </Reveal>

        <div className="deploy-log">
          {experience.map((job, i) => (
            <Reveal key={job.company} className="deploy-entry" delay={i * 90}>
              <div className="deploy-line">
                <span className="deploy-version mono">{job.version}</span>
                <div className="deploy-track">
                  <span className={`deploy-node ${job.live ? "live" : ""}`} />
                  {i !== experience.length - 1 && <span className="deploy-connector" />}
                </div>
              </div>

              <div className="deploy-body">
                <div className="deploy-head">
                  <h3>{job.role}</h3>
                  <span className={`deploy-status mono ${job.live ? "live" : ""}`}>
                    {job.live && <span className="status-dot pulse" />}
                    {job.status}
                  </span>
                </div>
                <div className="deploy-sub mono">
                  {job.company} · {job.date}
                </div>
                <ul className="deploy-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
