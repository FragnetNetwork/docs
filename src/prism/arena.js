// Prism theme built from Fragnet Arena tokens (dark). Light mode keeps themes.github.
module.exports = {
  plain: {color: '#f1f2f5', backgroundColor: '#16171d'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#7e828c', fontStyle: 'italic'}},
    {types: ['punctuation', 'operator'], style: {color: '#b8bcc6'}},
    {types: ['keyword', 'atrule', 'tag', 'deleted'], style: {color: '#ff6467'}},
    {types: ['string', 'char', 'attr-value', 'inserted', 'url'], style: {color: '#c2f04a'}},
    {types: ['number', 'boolean', 'constant', 'symbol', 'regex'], style: {color: '#f5a623'}},
    {types: ['function', 'class-name', 'builtin'], style: {color: '#60a5fa'}},
    {types: ['property', 'attr-name', 'selector', 'variable'], style: {color: '#f1f2f5'}},
    {types: ['important', 'bold'], style: {fontWeight: '600'}},
  ],
};
