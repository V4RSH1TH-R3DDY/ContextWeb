import { DocsMarkdown } from '../components/DocsMarkdown';
import { getDocSubsection } from '../lib/documentation';
import { PageShell } from './PageShell';

const dashboardSections = [
  getDocSubsection('1. What is ContextOS?', 'Key Capabilities'),
  getDocSubsection('2. Architecture Overview', 'Module Responsibilities'),
  getDocSubsection('2. Architecture Overview', 'Tech Stack'),
  getDocSubsection('4. The OpenClaw Orchestration Layer', '4.8 Feature Flags'),
].filter(Boolean);

export function DashboardPage() {
  return (
    <PageShell
      title="Dashboard"
      subtitle="A command-center overview generated from the project documentation."
    >
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {dashboardSections.map((section) => (
          <section
            key={section.id}
            className="rounded-lg p-5"
            style={{
              background: 'var(--glass-fill)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '14px',
              }}
            >
              {section.title}
            </h2>
            <DocsMarkdown>{section.body}</DocsMarkdown>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
