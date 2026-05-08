import { Link } from 'react-router';
import { PageShell } from './PageShell';

export function NotFoundPage() {
    return (
        <PageShell
            title="Page Not Found"
            subtitle="That route does not exist yet."
        >
            <Link
                to="/"
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--purple-glow)',
                }}
            >
                Back to home
            </Link>
        </PageShell>
    );
}
