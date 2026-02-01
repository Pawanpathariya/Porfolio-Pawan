import { useInView } from 'react-intersection-observer'
import { HiBriefcase } from 'react-icons/hi'

export default function Experience({ experience }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  if (!experience?.length) return null

  return (
    <section id="experience" className="section experience">
      <div className="container" ref={ref}>
        <p className="section-subtitle">Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="experience-timeline">
          {experience.map((exp, idx) => (
            <div key={exp.id} className={`exp-card ${inView ? 'fade-in-up' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="exp-icon"><HiBriefcase /></div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3>{exp.role} <span className="exp-company">@ {exp.company}</span></h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <span className="exp-location">{exp.location}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                {exp.achievements?.length > 0 && (
                  <ul className="exp-achievements">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                )}
                <div className="exp-tech">
                  {exp.tech?.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline { display: flex; flex-direction: column; gap: 1.5rem; }
        .exp-card {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: border-color 0.2s, background 0.2s;
        }
        .exp-card:hover {
          border-color: var(--accent);
          background: var(--bg-card-hover);
        }
        .exp-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .exp-content { flex: 1; }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .exp-header h3 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .exp-company { color: var(--accent); font-weight: 500; }
        .exp-period { font-size: 0.85rem; color: var(--text-muted); }
        .exp-location { font-size: 0.85rem; color: var(--text-muted); }
        .exp-desc { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem; }
        .exp-achievements {
          margin-bottom: 1rem;
          padding-left: 1.25rem;
        }
        .exp-achievements li {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.35rem;
          list-style: disc;
        }
        .exp-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-tag {
          padding: 0.25rem 0.6rem;
          background: var(--bg-secondary);
          border-radius: 6px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
