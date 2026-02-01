import { useInView } from 'react-intersection-observer'
import { HiCode } from 'react-icons/hi'

export default function Projects({ projects }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  if (!projects?.length) return null

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const displayProjects = featured.length ? featured : projects

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">What I've Built</h2>
        <div className="projects-grid">
          {displayProjects.map((proj, idx) => (
            <div key={proj.id} className={`project-card ${inView ? 'fade-in-up' : ''}`} style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="project-icon"><HiCode /></div>
              <h3>{proj.name}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech?.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {(proj.liveUrl || proj.githubUrl) && (
                <div className="project-links">
                  {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                  {proj.githubUrl && <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
              )}
            </div>
          ))}
        </div>
        {others.length > 0 && (
          <>
            <h3 className="projects-more-title">More Projects</h3>
            <div className="projects-grid projects-grid-small">
              {others.map((proj) => (
                <div key={proj.id} className="project-card project-card-small">
                  <h3>{proj.name}</h3>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tech">
                    {proj.tech?.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 40px -15px rgba(14, 165, 233, 0.2);
        }
        .project-icon {
          width: 44px;
          height: 44px;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        .project-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .project-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .project-tech span {
          padding: 0.2rem 0.5rem;
          background: var(--bg-secondary);
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .project-links {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }
        .project-links a {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 500;
        }
        .project-links a:hover { text-decoration: underline; }
        .projects-more-title { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.1rem; }
        .projects-grid-small .project-card { padding: 1rem; }
        .project-card-small .project-icon { display: none; }
        .project-card-small h3 { font-size: 1rem; }
      `}</style>
    </section>
  )
}
