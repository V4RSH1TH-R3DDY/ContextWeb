import { Eye, Shield, HardDrive, Lock } from 'lucide-react';

const trustFeatures = [
  {
    icon: Eye,
    title: 'Transparent Decisions',
    description: 'Every AI action shows its reasoning chain.',
  },
  {
    icon: Shield,
    title: 'User Approval Layer',
    description: 'Configure which actions require confirmation.',
  },
  {
    icon: HardDrive,
    title: 'Local Memory',
    description: 'Behavioral data never leaves your device.',
  },
  {
    icon: Lock,
    title: 'Privacy-First Design',
    description: 'Zero telemetry. No ads. No data selling.',
  },
];

export function PrivacyTrust() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
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
              TRUST FIRST
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-headline)',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              Intelligent doesn't mean intrusive.
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
            >
              ContextOS is built on a privacy-first architecture. Every action is transparent, every decision is explainable, and every behavior model stays on your device.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
            >
              You are always in control. ContextOS acts with your permission, not instead of it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
                      background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--neon-mint)', strokeWidth: 1.5 }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontWeight: 600,
                      fontSize: '18px',
                      lineHeight: 1.2,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
