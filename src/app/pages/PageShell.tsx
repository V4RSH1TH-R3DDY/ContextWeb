import { Link } from 'react-router';
import { ReactNode } from 'react';

type PageShellProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

type SimplePageProps = {
  title: string;
  subtitle?: string;
  body?: string;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="min-h-screen px-6 pb-20 pt-32" style={{ background: 'var(--bg-base)', fontFamily: 'var(--font-body)' }}>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8"
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
          }}
        >
          ← Back to home
        </Link>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '56px',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

export function SimplePage({ title, subtitle, body }: SimplePageProps) {
  return (
    <PageShell title={title} subtitle={subtitle}>
      {body ? (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          {body}
        </div>
      ) : null}
    </PageShell>
  );
}
