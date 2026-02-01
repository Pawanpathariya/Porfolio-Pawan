import { useInView } from 'react-intersection-observer'
import { HiAcademicCap } from 'react-icons/hi'

export default function Education({ education }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  if (!education?.length) return null

  return (
    <section id="education" className="section education">
      <div className="container" ref={ref}>
        <p className="section-subtitle">Education</p>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-grid">
          {education.map((edu) => (
            <div key={edu.id} className={`edu-card ${inView ? 'fade-in-up' : ''}`}>
              <div className="edu-icon"><HiAcademicCap /></div>
              <h3>{edu.degree}</h3>
              <p className="edu-institute">{edu.institute}</p>
              <p className="edu-university">{edu.university}</p>
              <span className="edu-year">{edu.year} · {edu.grade}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education { background: var(--bg-secondary); }
        .edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .edu-card {
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: border-color 0.2s;
        }
        .edu-card:hover { border-color: var(--accent); }
        .edu-icon {
          width: 48px;
          height: 48px;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        .edu-card h3 { font-size: 1.1rem; margin-bottom: 0.35rem; }
        .edu-institute { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.25rem; }
        .edu-university { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem; }
        .edu-year { font-size: 0.85rem; color: var(--accent); font-weight: 500; }
      `}</style>
    </section>
  )
}
