import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { profile, education } from "../data";
import { services } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <div className="eyebrow blue">
            <span className="method">GET</span> /about
          </div>
          <h2 className="section-title">
            A backend engineer who ships the <span>AI part too.</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-photo-wrap" delay={80}>
            <div className="about-photo">
              <img src={profile.photo} alt={profile.name} />
            </div>
            <div className="about-fact mono">
              <MapPin size={14} />
              {profile.location}
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={140}>
            <p>{profile.about}</p>

            <div className="about-meta">
              <div className="about-meta-item">
                <Briefcase size={16} />
                <div>
                  <span className="mono label">current</span>
                  <p>Mid-Level Full-Stack Developer @ Digital Graphiks</p>
                </div>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={16} />
                <div>
                  <span className="mono label">education</span>
                  <p>
                    {education[0].degree} — {education[0].school}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} className="service-card" delay={i * 60}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
