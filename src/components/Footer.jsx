import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>{profile?.name || 'Pawan'}</span>
          <span className="footer-title">Full Stack Developer</span>
        </div>
        <div className="footer-social">
          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} {profile?.name || 'Pawan'}. Built with MERN.</p>
      </div>

      <style>{`
        .footer {
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
          padding: 2rem 0 1rem;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
        }
        .footer-brand { display: flex; flex-direction: column; }
        .footer-brand span:first-child { font-weight: 700; }
        .footer-title { font-size: 0.9rem; color: var(--text-muted); }
        .footer-social { display: flex; gap: 1rem; }
        .footer-social a { color: var(--text-muted); }
        .footer-social a:hover { color: var(--accent); }
        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .footer-bottom p { font-size: 0.85rem; color: var(--text-muted); }
      `}</style>
    </footer>
  )
}
