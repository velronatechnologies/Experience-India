const fs = require('fs');
const content = fs.readFileSync('public/ind map.svg', 'utf8');

const regex = /<([^>]+5331EA[^>]+)>/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("MATCH", match[1]);
}
