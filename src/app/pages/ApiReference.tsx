import { SimplePage } from './PageShell';
import { DocsMarkdown } from '../components/DocsMarkdown';
import { getDocSection } from '../lib/documentation';

export function ApiReferencePage() {
  const apiReference = getDocSection('13. API Reference');

  return (
    <SimplePage
      title="API Reference"
      subtitle="Interfaces, schemas, clients, and configuration enums sourced from the documentation."
    >
      <DocsMarkdown>{apiReference?.body || 'API reference content was not found in the documentation.'}</DocsMarkdown>
    </SimplePage>
  );
}
