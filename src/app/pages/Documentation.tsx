import { useMemo } from 'react';
import { Link } from 'react-router';
import { DocsMarkdown } from '../components/DocsMarkdown';
import { Separator } from '../components/ui/separator';
import { DocSection, getDocSections } from '../lib/documentation';

export function DocumentationPage() {
    const sections = useMemo<DocSection[]>(() => {
        return getDocSections();
    }, []);

    return (
        <div className="min-h-screen px-6 pb-16 pt-32" style={{ background: 'var(--bg-base)', fontFamily: 'var(--font-body)' }}>
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mb-6"
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
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
                    <aside className="lg:sticky lg:top-10 h-fit">
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                background: 'var(--glass-fill)',
                                border: '1px solid var(--glass-border)',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'var(--font-label)',
                                    fontSize: '12px',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-tertiary)',
                                    marginBottom: '12px',
                                }}
                            >
                                Contents
                            </h2>
                            <nav className="flex flex-col gap-2">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="transition-colors"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '14px',
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <main>
                        {sections.map((section, index) => (
                            <section key={section.id} id={section.id} className="scroll-mt-24">
                                {index > 0 ? (
                                    <Separator
                                        className="my-12"
                                        style={{
                                            background:
                                                'linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.4) 50%, transparent 100%)',
                                        }}
                                    />
                                ) : null}
                                <h2
                                    style={{
                                        fontFamily: 'var(--font-headline)',
                                        fontWeight: 700,
                                        fontSize: '34px',
                                        lineHeight: 1.2,
                                        color: 'var(--text-primary)',
                                        marginBottom: '16px',
                                    }}
                                >
                                    {section.title}
                                </h2>
                                <DocsMarkdown>{section.body}</DocsMarkdown>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}
