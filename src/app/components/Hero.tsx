import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-60 blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--purple-core) 0%, var(--bg-base) 70%)' }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--violet-mist) 0%, transparent 70%)' }}
        />

        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: `${500 + i * 80}px`,
              height: `${500 + i * 80}px`,
              borderColor: i === 0 ? 'var(--purple-core)' : i === 1 ? 'var(--purple-glow)' : 'var(--neon-cyan)',
              opacity: 0.25,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? 'var(--purple-glow)' : 'var(--neon-cyan)',
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[680px] mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
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
          MEET CONTEXTOS
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '80px',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Your Phone Acts Before You Ask.
        </h1>

        <p
          className="max-w-[540px] mx-auto mb-10"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
          }}
        >
          ContextOS understands your routines, predicts your needs, and takes intelligent actions in real time — so you never have to ask twice.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/demo"
            className="px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-102"
            style={{
              background: 'linear-gradient(135deg, var(--purple-core) 0%, var(--purple-glow) 100%)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
              boxShadow: '0px 0px 40px rgba(124, 58, 237, 0.45)',
            }}
          >
            Watch Demo
          </Link>
          <Link
            to="/features"
            className="px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-102"
            style={{
              background: 'transparent',
              border: '1px solid var(--purple-core)',
              color: 'var(--purple-glow)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            Explore Features
          </Link>
          <Link
            to="/docs"
            className="px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-102"
            style={{
              background: 'transparent',
              border: '1px solid rgba(124, 58, 237, 0.45)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} style={{ color: 'var(--text-tertiary)' }} />
        </motion.div>
        <span
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            color: 'var(--text-tertiary)',
          }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
