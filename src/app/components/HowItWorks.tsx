import { Wifi, Cpu, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Wifi,
    title: 'SENSE',
    subtitle: 'Sensors & APIs',
    items: ['Calendar', 'GPS', 'Battery', 'Time', 'App usage'],
  },
  {
    icon: Cpu,
    title: 'THINK',
    subtitle: 'Context Engine',
    items: ['Pattern matching', 'Situation scoring', 'Priority queue'],
  },
  {
    icon: Sparkles,
    title: 'LEARN',
    subtitle: 'Memory Engine',
    items: ['Routine modeling', 'Location tagging', 'Preference learning'],
  },
  {
    icon: Zap,
    title: 'ACT',
    subtitle: 'Action Skills',
    items: ['DND', 'Navigation', 'Messaging', 'File fetch', 'Alerts'],
  },
];

const annotations = ['context signal', 'prediction model', 'action trigger'];

export function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-surface)' }}>
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
            ARCHITECTURE
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
            Sense. Think. Learn. Act.
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div
                    className="p-6 rounded-3xl backdrop-blur-[20px] h-full"
                    style={{
                      background: 'var(--glass-fill)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.06), 0px 24px 64px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                      style={{
                        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
                        border: '1px solid rgba(124, 58, 237, 0.5)',
                      }}
                    >
                      <Icon size={24} style={{ color: 'var(--purple-glow)', strokeWidth: 2 }} />
                    </div>
                    <h3
                      className="text-center mb-2"
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontWeight: 700,
                        fontSize: '20px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-center mb-4"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--purple-glow)',
                      }}
                    >
                      {step.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-center"
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <motion.line
                          x1="0"
                          y1="12"
                          x2="24"
                          y2="12"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -8 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'var(--purple-core)' }} />
                            <stop offset="100%" style={{ stopColor: 'var(--neon-cyan)' }} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p
                        className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        style={{
                          fontFamily: 'var(--font-label)',
                          fontSize: '11px',
                          color: 'var(--text-tertiary)',
                        }}
                      >
                        {annotations[index]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
