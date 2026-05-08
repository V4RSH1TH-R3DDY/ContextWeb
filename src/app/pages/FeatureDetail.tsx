import { useParams, Link } from 'react-router';
import { PageShell } from './PageShell';

const featureDetails: Record<string, { title: string; description: string }> = {
    'meeting-intelligence': {
        title: 'Meeting Intelligence',
        description:
            'ContextOS prepares you for meetings with proactive DND, briefing, and document surfacing.',
    },
    'smart-navigation': {
        title: 'Smart Navigation',
        description:
            'ContextOS calculates departure time and launches routing automatically based on traffic.',
    },
    'battery-guardian': {
        title: 'Battery Guardian',
        description:
            'ContextOS monitors critical charge levels and activates emergency power protocols.',
    },
    'intelligent-messaging': {
        title: 'Intelligent Messaging',
        description:
            'ContextOS drafts context-aware messages that you can approve and send instantly.',
    },
    'memory-engine': {
        title: 'Memory Engine',
        description:
            'ContextOS builds a behavioral model from routines, locations, and app usage over time.',
    },
};

export function FeatureDetailPage() {
    const { featureId } = useParams();
    const feature = featureId ? featureDetails[featureId] : undefined;

    if (!feature) {
        return (
            <PageShell
                title="Feature Not Found"
                subtitle="We could not find that feature page."
            >
                <Link
                    to="/features"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: 'var(--purple-glow)',
                    }}
                >
                    Back to all features
                </Link>
            </PageShell>
        );
    }

    return (
        <PageShell title={feature.title} subtitle={feature.description}>
            <Link
                to="/features"
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--purple-glow)',
                }}
            >
                Back to all features
            </Link>
        </PageShell>
    );
}
