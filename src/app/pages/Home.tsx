import { Hero } from '../components/Hero';
import { ProblemStatement } from '../components/ProblemStatement';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { TechnologyStack } from '../components/TechnologyStack';
import { PrivacyTrust } from '../components/PrivacyTrust';
import { Footer } from '../components/Footer';

export function HomePage() {
    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-base)', fontFamily: 'var(--font-body)' }}>
            <Hero />
            <ProblemStatement />
            <FeatureShowcase />
            <HowItWorks />
            <TechnologyStack />
            <PrivacyTrust />
            <Footer />
        </div>
    );
}
