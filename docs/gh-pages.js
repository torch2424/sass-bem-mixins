const fs = require('fs');
const cheerio = require('cheerio');
// Load our current index.html
const $ = cheerio.load(fs.readFileSync('./docs/index.html'));
// Replace the inline amp-custom css
$('style[amp-custom]').text(`\n${fs.readFileSync('./docs/gh-pages.css')}`);

// Write back to our index.html
fs.writeFileSync('./docsindex.html', $.html());
