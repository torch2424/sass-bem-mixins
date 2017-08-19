const fs = require('fs');
const cheerio = require('cheerio');
// Load our current index.html
const $ = cheerio.load(fs.readFileSync('./index.html'));
// Replace the inline amp-custom css
$('style[amp-custom]').text(`\n${fs.readFileSync('./gh-pages.css')}`);

// Write back to our index.html
fs.writeFileSync('./index.html', $.html());
