import { BookOpen, Code2, Home, LayoutDashboard, Menu, Sparkles } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

const primaryLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Features', to: '/features', icon: Sparkles },
  { label: 'Docs', to: '/docs', icon: BookOpen },
  { label: 'API', to: '/api', icon: Code2 },
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
];

const secondaryLinks = [
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
];

export function Navbar() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-[22px]"
      style={{
        background: 'color-mix(in srgb, var(--bg-base) 78%, transparent)',
        borderColor: 'var(--glass-border)',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.18)',
      }}
    >
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="ContextOS home">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg"
            style={{
              background: 'linear-gradient(135deg, var(--purple-core), var(--neon-cyan))',
              boxShadow: '0 0 22px rgba(124, 58, 237, 0.35)',
            }}
          >
            <Menu size={18} color="white" aria-hidden="true" />
          </span>
          <span
            className="hidden text-[15px] font-extrabold sm:block"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
            }}
          >
            ContextOS
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto rounded-lg px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {primaryLinks.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm transition-colors"
              style={({ isActive }) => ({
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: isActive ? 'rgba(124, 58, 237, 0.16)' : 'transparent',
                border: `1px solid ${isActive ? 'rgba(124, 58, 237, 0.36)' : 'transparent'}`,
                fontFamily: 'var(--font-body)',
              })}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}

          <div className="hidden items-center gap-1 lg:flex">
            {secondaryLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className="inline-flex h-10 items-center rounded-lg px-3 text-sm transition-colors"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(34, 211, 238, 0.28)' : 'transparent'}`,
                  fontFamily: 'var(--font-body)',
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            to="/demo"
            className="hidden h-10 items-center rounded-lg px-4 text-sm font-bold transition-transform hover:scale-[1.02] sm:inline-flex"
            style={{
              background: 'linear-gradient(135deg, var(--purple-core), var(--purple-glow))',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 0 24px rgba(124, 58, 237, 0.3)',
            }}
          >
            Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
