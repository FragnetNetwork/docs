/**
 * Screenshots named `*@2x.png` / `*@2x.webp` are captured at 2x pixel density.
 * Docusaurus sizes images from their pixel dimensions, so halve width/height
 * to show them at their real on-screen size while staying sharp on HiDPI displays.
 * Runs after Docusaurus has turned Markdown images into <img> JSX nodes.
 */
const {visit} = require('unist-util-visit');

const RETINA = /@2x\.(png|webp|jpe?g)/;

const plugin = () => (tree) => {
  visit(tree, ['mdxJsxTextElement', 'mdxJsxFlowElement'], (node) => {
    if (node.name !== 'img') return;
    const src = node.attributes.find((attr) => attr.name === 'src');
    const value = typeof src?.value === 'string' ? src.value : src?.value?.value;
    if (!value || !RETINA.test(value)) return;
    for (const attr of node.attributes) {
      if ((attr.name === 'width' || attr.name === 'height') && attr.value) {
        attr.value = String(Math.round(Number(attr.value) / 2));
      }
    }
  });
};

module.exports = plugin;
