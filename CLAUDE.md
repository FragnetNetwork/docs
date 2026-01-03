# CLAUDE.md

## Project Overview

Fragnet Knowledgebase - A Docusaurus 3.9.2 documentation site for Fragnet's game server hosting platform. Hosted at https://docs.fragnet.net.

## Tech Stack

- **Framework**: Docusaurus 3.9.2
- **Package Manager**: Yarn
- **Node.js**: 18+
- **Deployment**: GitHub Pages via GitHub Actions

## Common Commands

```bash
yarn install          # Install dependencies
yarn start            # Local dev server
yarn build            # Build static site to /build
yarn serve            # Serve built site locally
```

## Project Structure

```
docs/                  # Documentation content
├── FAQ/              # Frequently asked questions
├── billing/          # Billing and payment docs
├── discord-bots/     # Discord bot integration (corebot, discordgsm)
├── fragify/          # Main panel docs (API, backups, databases, etc.)
├── games/            # Game-specific documentation (24+ titles)
└── images/           # Shared images
src/
├── components/       # React components
├── css/              # Custom styling
├── pages/            # Custom pages
└── remark/           # Custom Markdown plugins
```

## Key Files

- `docusaurus.config.js` - Main configuration (navbar, footer, search, theme)
- `sidebars.js` - Navigation structure
- `package.json` - Dependencies and scripts

## Documentation Conventions

### Markdown Format

- Front matter with optional `title`, `keywords`, `sidebar_position`
- Single H1 per document, semantic header hierarchy
- Language-specified code blocks (` ```yml `, ` ```json `, etc.)
- Images in relative paths: `![Alt](images/filename.png)`
- Bold `**text**` for UI buttons and emphasis
- Step-by-step instructions use numbered lists

### Variable Injection

Custom Remark plugin supports template variables:
- `VAR::FRAGIFY_URL` - Main panel URL
- `VAR::OLD_PANEL_URL` - Legacy panel URL
- `VAR::BILLING_URL` - Billing portal URL
- `VAR::CDN_URL` - CDN URL

### Sidebar Organization

Documents are organized by category in `sidebars.js`:
- Fragify (panel features, API, backups, databases)
- Discord Bots (corebot, discordgsm)
- Games (24+ titles with per-game subdirectories)
- Billing (payment, subscriptions, services)
- FAQ

## Deployment

- Push to `main` triggers auto-deployment via GitHub Actions
- PRs trigger test builds (no deployment)
- Site deploys to GitHub Pages with CNAME `docs.fragnet.net`
