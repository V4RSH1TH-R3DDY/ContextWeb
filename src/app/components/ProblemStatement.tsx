import { CalendarX, ZapOff, Files, Navigation, MessageSquareX } from 'lucide-react';

const problems = [
  {
    icon: CalendarX,
    title: 'Missed Meetings',
    description: 'Meetings sneak up. DND is never on in time.',
  },
  {
    icon: ZapOff,
    title: 'Battery Anxiety',
    description: 'Your phone dies when you need it most.',
  },
  {
    icon: Files,
    title: 'Forgotten Files',
    description: 'The deck exists. Finding it doesn\'t.',
  },
  {
    icon: Navigation,
    title: 'Manual Navigation',
    description: 'You launch Maps. Every. Single. Time.',
  },
  {
    icon: MessageSquareX,
    title: 'Delayed Messages',
    description: '"Running late" — sent too late.',
  },
];

export function ProblemStatement() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              fontFamily: 'var(--font-label)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--purple-glow)',
            }}
          >
            THE FRICTION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}
          >
            Your phone is reactive. Your life is not.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
            }}
          >
            Modern smartphones wait for instructions. But you're already three steps ahead — battling cognitive overload, context switching, and forgotten tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl backdrop-blur-[20px]"
                style={{
                  background: 'var(--glass-fill)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.06), 0px 24px 64px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--purple-glow)', strokeWidth: 1.5 }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: 1.2,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="h-px mb-12"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--purple-core) 50%, transparent 100%)',
            opacity: 0.3,
          }}
        />

        <div className="max-w-[640px] mx-auto text-center">
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: 1.1,
              background: 'linear-gradient(90deg, var(--text-primary) 0%, var(--purple-glow) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
            }}
          >
            ContextOS changes the equation.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
            }}
          >
            An AI layer that perceives your environment, learns your behavior, and acts with intelligence — before friction even occurs.
          </p>
        </div>
      </div>
    </section>
  );
}
