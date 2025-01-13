const fs = require('fs');
const path = require('path');

// Import data from JavaScript files
const menuItems = require('./menuData copy 2');
const links = require('./links');

// Convert links array into a map for quick lookup
const linksMap = links.reduce((acc, link) => {
    const [key, value] = Object.entries(link)[0];
    acc[key] = value;
    return acc;
}, {});

// Update menuItems with matching image links
menuItems.forEach((item) => {
    if (linksMap[item.productId]) {
        item.image = linksMap[item.productId];
    }
});

// Write updated menuItems to a new file
const outputPath = path.join(__dirname, 'updatedMenuData.js');
const outputData = `const menuItems = ${JSON.stringify(
    menuItems,
    null,
    4
)};\n\nmodule.exports = menuItems;`;

fs.writeFileSync(outputPath, outputData, 'utf8');

console.log('Updated menu items have been written to updatedMenuData.js');
