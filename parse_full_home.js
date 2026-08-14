const fs = require('fs');

const home = fs.readFileSync('scraped_home.html', 'utf8');

// Extract all style blocks or custom CSS
const styles = [...home.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
fs.writeFileSync('extracted_styles.css', styles.join('\n\n'));

// Extract all products from home
const productItems = [];
const itemRegex = /<li class="splide__slide">([\s\S]*?)<\/li>/gi;
let match;
while ((match = itemRegex.exec(home)) !== null) {
  const block = match[1];
  const title = (block.match(/<h4[^>]*>([^<]+)<\/h4>/i) || [])[1] || '';
  const price = (block.match(/class="woocommerce-Price-amount amount">([\s\S]*?)<\/span>/i) || [])[1] || '$23.000';
  const img = (block.match(/<img[^>]+(?:src)="([^"]+)"/i) || [])[1] || '';
  const link = (block.match(/<a href="([^"]+)"/i) || [])[1] || '';
  const badge = (block.match(/class="rw-prod-badge"[^>]*>([^<]+)</i) || [])[1] || '';
  
  productItems.push({
    title: title.trim(),
    price: price.replace(/<[^>]+>/g, '').trim(),
    img,
    link,
    badge
  });
}

console.log('Found product slides:', productItems.length);
console.log('Sample slides:', JSON.stringify(productItems.slice(0, 8), null, 2));

// Extract Categories
const catItems = [];
const catRegex = /<a href="([^"]+)" class="rw-cat-item">([\s\S]*?)<\/a>/gi;
while ((match = catRegex.exec(home)) !== null) {
  const link = match[1];
  const block = match[2];
  const name = (block.match(/<h3>([^<]+)<\/h3>/i) || [])[1] || '';
  const count = (block.match(/<span class="rw-cat-stat">([^<]+)<\/span>/i) || [])[1] || '';
  catItems.push({ name: name.trim(), count: count.trim(), link });
}
console.log('Found categories:', catItems);

// Extract top header / navbar / logo
const headerMatch = home.match(/<header[\s\S]*?<\/header>/i);
console.log('First header length:', headerMatch ? headerMatch[0].length : 0);

// Extract all headings
const headings = [...home.matchAll(/<h[1-4][^>]*>([^<]+)<\/h[1-4]>/gi)].map(m => m[1].trim());
console.log('All Headings:', headings);
