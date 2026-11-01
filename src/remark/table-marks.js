/**
 * Turns ✔️ / ❌ in Markdown table cells into themed marks
 * (<span class="fa-mark fa-mark--yes|no">, styled in custom.css).
 */
const {visit} = require('unist-util-visit');

const MARKS = {'✔️': 'yes', '✔': 'yes', '✅': 'yes', '❌': 'no', '✖️': 'no', '✖': 'no'};
const SPLIT = /(✔️|✔|✅|❌|✖️|✖)/;

const mark = (kind) => ({
  type: 'mdxJsxTextElement',
  name: 'span',
  attributes: [
    {type: 'mdxJsxAttribute', name: 'className', value: `fa-mark fa-mark--${kind}`},
    {type: 'mdxJsxAttribute', name: 'role', value: 'img'},
    {type: 'mdxJsxAttribute', name: 'aria-label', value: kind === 'yes' ? 'Yes' : 'No'},
  ],
  children: [],
});

const plugin = () => (tree) => {
  visit(tree, 'tableCell', (cell) => {
    visit(cell, 'text', (node, index, parent) => {
      if (!parent || !SPLIT.test(node.value)) return;
      const parts = node.value.split(SPLIT).filter((p) => p && p.trim() !== '');
      const nodes = parts.map((p) => (MARKS[p] ? mark(MARKS[p]) : {type: 'text', value: p}));
      parent.children.splice(index, 1, ...nodes);
      return index + nodes.length;
    });
  });
};

module.exports = plugin;
