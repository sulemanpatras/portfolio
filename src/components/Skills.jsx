import { skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow violet">
            <span className="method">GET</span> /skills
          </div>
          <h2 className="section-title">
            Stack proficiency, <span>measured honestly.</span>
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} className="skill-group" delay={gi * 80}>
              <h3 className="mono skill-group-label">// {group.label}</h3>
              <div className="skill-list">
                {group.skills.map((s) => (
                  <div className="skill-row" key={s.name}>
                    <div className="skill-row-top">
                      <span>{s.name}</span>
                      <span className="mono skill-value">{s.value}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ "--w": `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
