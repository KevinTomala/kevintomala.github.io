const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  'angular', 'react', 'typescript', 'nodedotjs', 'python', 'docker',
  'mysql', 'mongodb', 'amazonaws', 'googlecloud', 'git', 'linux',
  'vuedotjs', 'javascript', 'html5', 'css3', 'express', 'django',
  'fastapi', 'postgresql', 'redis', 'firebase', 'phpmyadmin',
  'github', 'php', 'visualstudiocode', 'microsoftsqlserver', 'sqlite',
    'reactdotnative', 'flutter', 'ionic', 'apachecordova', 'capacitor',
    'kotlin', 'android','apache', 'nginx'
];

const dir = './src/assets/images/tech';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${logo}.svg`;
  const filename = logo.replace('dot', '') + '.svg';
  const filepath = path.join(dir, filename);
  
  https.get(url, (res) => {
    const fileStream = fs.createWriteStream(filepath);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`✓ Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`✗ Error downloading ${filename}:`, err.message);
  });
});