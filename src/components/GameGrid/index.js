/**
 * <GameGrid /> — games index with search + genre filter.
 * <GameGrid filter={false} items={[{slug, description}]} /> — compact list (Welcome page).
 * Guide counts come from the docs sidebar (category href /games/<slug>).
 */
import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {GAMES, GENRES} from './games';
import styles from './styles.module.css';

const SEARCH = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

function useGuideCounts() {
  let sidebar = null;
  try {
    sidebar = useDocsSidebar();
  } catch (e) {
    // Rendered outside a docs page: no sidebar, no counts.
  }
  return useMemo(() => {
    const counts = {};
    const walk = (items) =>
      items?.forEach((item) => {
        if (item.type !== 'category') return;
        const href = item.href?.replace(/\/$/, '');
        if (href) counts[href] = item.items.length;
        walk(item.items);
      });
    walk(sidebar?.items);
    return counts;
  }, [sidebar]);
}

function GameCard({game, meta}) {
  return (
    <Link to={`/games/${game.slug}`} className={styles.card}>
      <img className={clsx(styles.cover, 'no-zoom')} src={game.image} alt="" loading="lazy" />
      <span className={styles.body}>
        <span className={styles.name}>{game.name}</span>
        {meta && <span className={styles.meta}>{meta}</span>}
      </span>
    </Link>
  );
}

export default function GameGrid({items, filter = true}) {
  const counts = useGuideCounts();
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  if (!filter) {
    const list = (items ?? GAMES.map(({slug}) => ({slug})))
      .map(({slug, description}) => ({game: GAMES.find((g) => g.slug === slug), description}))
      .filter(({game}) => game);
    return (
      <div className={clsx(styles.grid, styles.compact)}>
        {list.map(({game, description}) => (
          <GameCard key={game.slug} game={game} meta={description} />
        ))}
      </div>
    );
  }

  const q = query.trim().toLowerCase();
  const matchesQuery = (g) => !q || g.name.toLowerCase().includes(q);
  const visible = GAMES.filter((g) => (genre === 'all' || g.genre === genre) && matchesQuery(g));
  const chips = [['all', 'All'], ...GENRES.map((x) => [x, x])].map(([key, label]) => ({
    key,
    label,
    count: GAMES.filter((g) => (key === 'all' || g.genre === key) && matchesQuery(g)).length,
  }));
  const metaFor = (g) => {
    const n = counts[`/games/${g.slug}`];
    return n ? `${g.genre} · ${n} ${n === 1 ? 'guide' : 'guides'}` : g.genre;
  };

  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className={styles.searchIcon} aria-hidden="true">{SEARCH}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter games"
            aria-label="Filter games"
          />
        </label>
        <div className={styles.chips} role="group" aria-label="Filter by genre">
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              className={styles.chip}
              aria-pressed={genre === c.key}
              onClick={() => setGenre(c.key)}>
              {c.label}
              <span className={styles.chipCount}>{c.count}</span>
            </button>
          ))}
        </div>
        <span className={styles.count} aria-live="polite">
          {visible.length} {visible.length === 1 ? 'game' : 'games'}
        </span>
      </div>

      {visible.length > 0 ? (
        <div className={styles.grid}>
          {visible.map((g) => (
            <GameCard key={g.slug} game={g} meta={metaFor(g)} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <span>
            No games match “{query.trim()}”{genre !== 'all' ? ` in ${genre}` : ''}.
          </span>
          <button
            type="button"
            className={styles.clear}
            onClick={() => {
              setQuery('');
              setGenre('all');
            }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
