import { useInView } from 'react-intersection-observer'

const skillCategories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
]

export default function Skills({ skills }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  if (!skills) return null

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <div className={`skills-grid ${inView ? 'fade-in-up' : ''}`}>
          {skillCategories.map((cat) =>
            skills[cat.key]?.length > 0 ? (
              <div key={cat.key} className="skill-category">
                <h3>{cat.label}</h3>
                <div className="skill-tags">
                  {skills[cat.key].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <style>{`
        .skills { background: var(--bg-secondary); }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .skill-category h3 {
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          padding: 0.4rem 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: border-color 0.2s, color 0.2s;
        }
        .skill-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}
