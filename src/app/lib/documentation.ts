import docs from '../../../contextos-documentation.md?raw';

export type DocSection = {
  id: string;
  title: string;
  body: string;
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export function getDocSections(markdown = docs, level = 2): DocSection[] {
  const lines = markdown.split('\n');
  const marker = '#'.repeat(level);
  const headingIndexes: number[] = [];
  let inCodeFence = false;

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (!inCodeFence && line.startsWith(`${marker} `)) {
      headingIndexes.push(index);
    }
  });

  return headingIndexes.map((start, index) => {
    const end = index < headingIndexes.length - 1 ? headingIndexes[index + 1] : lines.length;
    const title = lines[start].replace(new RegExp(`^${marker}\\s+`), '').trim();
    const body = lines.slice(start + 1, end).join('\n').trim();

    return {
      id: slugify(title),
      title,
      body,
    };
  });
}

export function getDocSection(title: string) {
  return getDocSections().find((section) => section.title === title);
}

export function getDocSubsection(sectionTitle: string, subsectionTitle: string) {
  const section = getDocSection(sectionTitle);

  if (!section) {
    return undefined;
  }

  return getDocSections(section.body, 3).find((subsection) => subsection.title === subsectionTitle);
}
