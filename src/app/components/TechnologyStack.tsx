import { motion } from 'motion/react';

const technologies = [
  { name: 'Android', category: 'Platform', color: '#3DDC84', rotation: 2 },
  { name: 'Kotlin', category: 'Language', color: '#7F52FF', rotation: -3 },
  { name: 'Jetpack Compose', category: 'UI Framework', color: '#4285F4', rotation: 1 },
  { name: 'OpenClaw', category: 'AI Runtime', color: '#A855F7', rotation: -2 },
  { name: 'LLM Core', category: 'Intelligence Layer', color: '#F59E0B', rotation: 3 },
  { name: 'Memory Engine', category: 'Behavior Graph', color: '#22D3EE', rotation: -1 },
  { name: 'Cloud APIs', category: 'External Signals', color: '#EC4899', rotation: 2 },
];

export function TechnologyStack() {
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
            BUILT ON
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
            Engineering-grade foundations.
          </h2>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="group px-6 py-3 rounded-full backdrop-blur-[20px] cursor-pointer"
                style={{
                  background: 'var(--glass-fill)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
                  transform: `rotate(${tech.rotation}deg)`,
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0px 0px 40px rgba(124, 58, 237, 0.45)',
                }}
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: tech.color }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-label)',
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tech.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-label)',
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
