import { CalendarCheck, Compass, BatteryWarning, Sparkles, Brain } from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: CalendarCheck,
    slug: 'meeting-intelligence',
    label: 'CALENDAR',
    title: 'Meeting Intelligence',
    description: 'ContextOS reads your calendar 15 minutes ahead. Auto-enables Do Not Disturb, silences notifications, surfaces the relevant deck, and briefs you — all before you even open the app.',
    fullWidth: true,
  },
  {
    icon: Compass,
    slug: 'smart-navigation',
    label: 'NAVIGATION',
    title: 'Smart Navigation',
    description: 'Real-time traffic analysis calculates your departure time and auto-launches routing. You leave on time, every time.',
  },
  {
    icon: BatteryWarning,
    slug: 'battery-guardian',
    label: 'POWER',
    title: 'Battery Guardian',
    description: 'Detects critical charge levels and executes emergency protocols — low-power mode, contact alerts, and essential-app triage — automatically.',
  },
  {
    icon: Sparkles,
    slug: 'intelligent-messaging',
    label: 'MESSAGING',
    title: 'Intelligent Messaging',
    description: 'Drafts context-aware messages — "running late," "in a meeting," "on my way" — based on real-time signals. You approve; it sends.',
  },
  {
    icon: Brain,
    slug: 'memory-engine',
    label: 'LEARNING',
    title: 'Memory Engine',
    description: 'Continuously builds a behavioral model from your routines, preferred locations, app patterns, and timing. The longer it runs, the smarter it gets.',
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-base)' }}>
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
            CAPABILITIES
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Five Systems. One Intelligence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl backdrop-blur-[20px] transition-all duration-300 hover:border-[var(--purple-glow)] ${feature.fullWidth ? 'md:col-span-2' : ''
                  }`}
                style={{
                  background: 'var(--glass-fill)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.06), 0px 24px 64px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
                      border: '1px solid rgba(124, 58, 237, 0.4)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--purple-glow)', strokeWidth: 1.5 }} />
                  </div>
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(124, 58, 237, 0.15)',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                      fontFamily: 'var(--font-label)',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: 'var(--purple-glow)',
                    }}
                  >
                    {feature.label}
                  </div>
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: 1.2,
                    color: 'var(--text-primary)',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {feature.description}
                </p>
                <Link
                  to={`/features/${feature.slug}`}
                  className="text-sm group-hover:translate-x-1 transition-transform duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--purple-glow)',
                  }}
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
