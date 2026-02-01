import { HiArrowDown, HiCode } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <span className="hero-badge">
            <HiCode className="hero-badge-icon" /> Full Stack Developer
          </span>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{profile?.name || 'Pawan'}</span>
          </h1>
          <p className="hero-tagline">{profile?.tagline || profile?.title}</p>
          <p className="hero-desc">
            B.Tech CSE '25 · Magnet Brains (Pabbly) · Inteliostack.ai · Building products that scale
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <HiArrowDown />
            </a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
          <div className="hero-social">
            {profile?.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
            )}
            {profile?.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            )}
            {profile?.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MdEmail size={22} />
              </a>
            )}
          </div>
        </div>
        <div className="hero-visual fade-in-up">
          <div className="hero-avatar">
            {profile?.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="hero-avatar-img" />
            ) : (
              <span className="hero-avatar-text">{profile?.name?.charAt(0) || 'P'}</span>
            )}
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll">
        <HiArrowDown size={24} />
      </a>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 5rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14, 165, 233, 0.15), transparent);
          pointer-events: none;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .hero-badge-icon { font-size: 1rem; }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .hero-name { color: var(--accent); }
        .hero-tagline {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .hero-desc {
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          font-size: 0.95rem;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .hero-social {
          display: flex;
          gap: 1rem;
        }
        .hero-social a {
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
        }
        .hero-social a:hover { color: var(--accent); transform: translateY(-2px); }
        .hero-visual { display: flex; justify-content: center; }
        .hero-avatar {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, #6366f1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 50px -12px rgba(14, 165, 233, 0.35);
          animation: float 4s ease-in-out infinite;
          padding: 6px;
          position: relative;
          overflow: hidden;
        }
        .hero-avatar-text {
          font-size: 5rem;
          font-weight: 700;
          color: white;
          font-family: var(--font-sans);
        }
        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
        }
        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          animation: float 2s ease-in-out infinite;
        }
        .hero-scroll:hover { color: var(--accent); }
        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-actions { justify-content: center; }
          .hero-social { justify-content: center; }
        }
      `}</style>
    </section>
  )
}
