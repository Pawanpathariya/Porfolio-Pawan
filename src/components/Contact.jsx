import { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi'

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/pawanpathariys@gmail.com'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill name, email and message.' })
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send. Try again or email directly.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send. Try again or email directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-subtitle">Contact</p>
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>Open to opportunities and collaborations. Feel free to reach out.</p>
            <div className="contact-details">
              {profile?.email && (
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              )}
              {profile?.phone && <p>{profile.phone}</p>}
              {profile?.location && <p>{profile.location}</p>}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message *"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
            {status && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'} <HiPaperAirplane />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact { background: var(--bg-secondary); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info p { color: var(--text-secondary); margin-bottom: 1.5rem; }
        .contact-details a {
          color: var(--accent);
          font-weight: 500;
        }
        .contact-details p { color: var(--text-muted); margin-top: 0.5rem; }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 0.85rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: var(--text-muted); }
        .form-status { font-size: 0.9rem; margin-top: -0.5rem; }
        .form-status.success { color: var(--success); }
        .form-status.error { color: var(--error); }
        .form-status.info { color: var(--accent); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
