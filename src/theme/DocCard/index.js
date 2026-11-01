/**
 * Swizzled DocCard (ejected from @docusaurus/theme-classic 3.9).
 * Arena card: icon tile, title, 2-line description, article count for categories.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const svg = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {paths.map((d) => <path key={d} d={d} />)}
  </svg>
);

const ICONS = {
  // Arena "newspaper" icon
  doc: svg(['M4 5h13v14H5a2 2 0 01-2-2V7', 'M17 9h3v8a2 2 0 01-2 2', 'M7 8h7', 'M7 12h7', 'M7 16h4']),
  category: svg(['M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z']),
  external: svg(['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']),
};
// Arena "arrowright" icon
const ARROW = svg(['M5 12h14', 'M13 6l6 6-6 6']);

function useArticleCount() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          message: '1 article|{count} articles',
          description: 'Number of articles in a category card on a generated index page',
        },
        {count},
      ),
    );
}

function CardLayout({href, icon, title, description, meta}) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.body}>
        <Heading as="h2" className={styles.title} title={title}>
          {title}
        </Heading>
        {description && (
          <span className={styles.description} title={description}>
            {description}
          </span>
        )}
        {meta && <span className={styles.meta}>{meta}</span>}
      </span>
      <span className={styles.arrow} aria-hidden="true">{ARROW}</span>
    </Link>
  );
}

function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const articleCount = useArticleCount();
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon={ICONS.category}
      title={item.label}
      description={item.description}
      meta={articleCount(item.items.length)}
    />
  );
}

function CardLink({item}) {
  const icon = isInternalUrl(item.href) ? ICONS.doc : ICONS.external;
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
