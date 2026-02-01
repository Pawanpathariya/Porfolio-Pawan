import { useInView } from 'react-intersection-observer'

export default function About({ about }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  if (!about) return null

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">Building Impactful Software</h2>
        <div className={`about-grid ${inView ? 'fade-in-up' : ''}`}>
          <div className="about-text">
            <p className="about-summary">{about.summary}</p>
          </div>
          <div className="about-highlights">
            <h3>What I Bring</h3>
            <ul>
              {about.highlights?.map((item, i) => (
                <li key={i}>
                  <span className="highlight-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about { background: var(--bg-secondary); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .about-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .about-highlights h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .about-highlights ul { display: flex; flex-direction: column; gap: 0.75rem; }
        .about-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .highlight-dot {
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
