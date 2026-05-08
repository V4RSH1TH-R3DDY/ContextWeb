import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Home';
import { DemoPage } from './pages/Demo';
import { FeaturesPage } from './pages/Features';
import { FeatureDetailPage } from './pages/FeatureDetail';
import { DocumentationPage } from './pages/Documentation';
import { ApiReferencePage } from './pages/ApiReference';
import { SkillsSdkPage } from './pages/SkillsSdk';
import { PricingPage } from './pages/Pricing';
import { ChangelogPage } from './pages/Changelog';
import { DashboardPage } from './pages/Dashboard';
import { AboutPage } from './pages/About';
import { BlogPage } from './pages/Blog';
import { PrivacyPage } from './pages/Privacy';
import { TermsPage } from './pages/Terms';
import { GithubPage } from './pages/Github';
import { TwitterPage } from './pages/Twitter';
import { LinkedinPage } from './pages/Linkedin';
import { NotFoundPage } from './pages/NotFound';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/features/:featureId" element={<FeatureDetailPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/api" element={<ApiReferencePage />} />
        <Route path="/skills" element={<SkillsSdkPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/github" element={<GithubPage />} />
        <Route path="/twitter" element={<TwitterPage />} />
        <Route path="/linkedin" element={<LinkedinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
