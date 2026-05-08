import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/changelog' },
  ],
  developers: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Skills SDK', href: '/skills' },
    { label: 'GitHub', href: '/github' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative py-20 px-6"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--purple-core) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              ContextOS
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
              }}
            >
              Intelligence That Understands You.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/github" className="transition-colors hover:opacity-70">
                <Github size={20} style={{ color: 'var(--text-secondary)' }} />
              </Link>
              <Link to="/twitter" className="transition-colors hover:opacity-70">
                <Twitter size={20} style={{ color: 'var(--text-secondary)' }} />
              </Link>
              <Link to="/linkedin" className="transition-colors hover:opacity-70">
                <Linkedin size={20} style={{ color: 'var(--text-secondary)' }} />
              </Link>
            </div>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
              }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:text-[var(--purple-glow)]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
              }}
            >
              Developers
            </h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:text-[var(--purple-glow)]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
              }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:text-[var(--purple-glow)]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.4) 50%, transparent 100%)',
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '12px',
              color: 'var(--text-tertiary)',
            }}
          >
            © 2025 ContextOS. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '12px',
              color: 'var(--text-tertiary)',
            }}
          >
            Built for Android. Designed for humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
