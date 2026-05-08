import { FeatureShowcase } from '../components/FeatureShowcase';
import { PageShell } from './PageShell';

export function FeaturesPage() {
    return (
        <PageShell
            title="Features"
            subtitle="Dive into the systems that power ContextOS."
        >
            <FeatureShowcase />
        </PageShell>
    );
}
