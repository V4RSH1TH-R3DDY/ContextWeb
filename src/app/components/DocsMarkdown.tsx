import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function DocsMarkdown({ children }: { children: string }) {
  return (
    <div
      className="docs-content"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ inline, className, children, ...props }: any) {
  const info = className || '';
  const langMatch = info.match(/language-(\w+)/);
  const lang = langMatch ? langMatch[1] : '';
  const content = String(children).replace(/\n$/, '');

  if (inline) {
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="code-wrapper" data-language={lang || 'text'}>
      <div className="code-header">
        <div className="code-vim-bullets" aria-hidden>
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="code-label">LSP: {lang || 'text'}</div>
      </div>
      <pre className={className} {...props}>
        <code>{content}</code>
      </pre>
    </div>
  );
}
