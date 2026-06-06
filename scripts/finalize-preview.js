const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'public_preview');

fs.mkdirSync(outDir, { recursive: true });

for (const filename of ['CNAME', 'sitemap.xml']) {
    const file = path.join(outDir, filename);
    if (fs.existsSync(file)) {
        fs.rmSync(file);
    }
}

fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
fs.writeFileSync(path.join(outDir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
