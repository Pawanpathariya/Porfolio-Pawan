import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ profile }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand">{profile?.name || 'Portfolio'}</a>
        
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .navbar-scrolled {
          background: rgba(15, 15, 18, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .navbar-brand:hover { color: var(--accent); }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .navbar-menu {
          display: flex;
          gap: 2rem;
        }
        .navbar-menu a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .navbar-menu a:hover { color: var(--accent); }
        @media (max-width: 768px) {
          .navbar-toggle { display: block; }
          .navbar-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 280px;
            height: 100vh;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 5rem 2rem 2rem;
            gap: 1.5rem;
            transform: translateX(100%);
            transition: transform 0.3s;
            border-left: 1px solid var(--border);
          }
          .navbar-menu-open { transform: translateX(0); }
        }
      `}</style>
    </nav>
  )
}
