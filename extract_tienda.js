const fs = require('fs');

const tienda = fs.readFileSync('scraped_tienda.html', 'utf8');

// Find all product links in tienda
const productLinks = [...new Set([...tienda.matchAll(/href="(https:\/\/runwips\.shop\/producto\/[^"]+)"/gi)].map(m => m[1]))];
console.log('Total product links on page 1 of tienda:', productLinks.length);
console.log(productLinks);

// Check if there is pagination
const paginationMatches = [...tienda.matchAll(/href="(https:\/\/runwips\.shop\/tienda\/page\/\d+\/)"/gi)].map(m => m[1]);
console.log('Pagination links:', [...new Set(paginationMatches)]);

// Extract all images in tienda
const allImgs = [...new Set([...tienda.matchAll(/src="([^"]+\.(?:png|jpg|jpeg|webp))"/gi)].map(m => m[1]))];
console.log('All image assets found in tienda:', allImgs);
