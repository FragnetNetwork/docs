---
title: Contributing
sidebar_position: 2
---

# Contributing to Fragnet Wiki

We welcome contributions from the community! Whether you're fixing a typo, improving existing documentation, or adding new guides, your help is appreciated.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- [Yarn](https://yarnpkg.com/) package manager
- [Git](https://git-scm.com/)

### Setup (WSL/Linux)

1. **Fork the repository**

   Go to [github.com/FragnetNetwork/docs](https://github.com/FragnetNetwork/docs) and click the "Fork" button.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/docs.git
   cd docs
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

   The site will be available at `http://localhost:3000`. Changes you make will automatically reload.

## Making Changes

### File Structure

- `docs/` - All documentation files (Markdown)
- `docs/games/` - Game-specific documentation
- `docs/control-panel/` - Control panel documentation
- `docs/billing/` - Billing and payment guides
- `docs/FAQ/` - Frequently asked questions

### Creating a New Page

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter at the top:
   ```markdown
   ---
   title: Your Page Title
   keywords: ['keyword1', 'keyword2']
   ---
   ```
3. Write your content using Markdown
4. Add your page to `sidebars.js` (see below)

### Adding to the Sidebar

New pages must be added to `sidebars.js` to appear in the navigation. Open the file and find the appropriate category, then add your page:

```js
{
  type: 'category',
  label: 'Game Name',
  items: [
    'games/game-name/existing-article',
    'games/game-name/your-new-article'  // Add your page here
  ]
}
```

The path should match your file location without the `.md` extension.

### Writing Guidelines

- Use clear, concise language
- Include step-by-step instructions with numbered lists
- Add screenshots where helpful (place in `images/` subdirectory)
- Use code blocks with language tags (` ```bash `, ` ```json `, etc.)
- Bold **UI elements** and button names

## Submitting Your Contribution

1. **Create a branch**
   ```bash
   git checkout -b my-contribution
   ```

2. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add guide for X"
   ```

3. **Push to your fork**
   ```bash
   git push origin my-contribution
   ```

4. **Open a Pull Request**

   Go to the original repository and click "New Pull Request". Select your fork and branch, then submit.

## Get Rewarded

After your contribution is merged, [open a support ticket](https://clients.fragnet.net) mentioning your GitHub username and the pull request. We offer platform credits as a thank you for quality contributions!
