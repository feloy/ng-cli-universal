require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppServerModuleNgFactory } = require('./dist-ssr/main.bundle');
const { renderModuleFactory } = require('@angular/platform-server');

renderModuleFactory(AppServerModuleNgFactory, {
    url: '/',
    document: fs.readFileSync('dist/index.html', 'utf8')
}).then(html => {
    fs.writeFileSync('dist-ssr/index.html', html);
});

renderModuleFactory(AppServerModuleNgFactory, {
    url: '/page1',
    document: fs.readFileSync('dist/index.html', 'utf8')
}).then(html => {
    fs.writeFileSync('dist-ssr/page1', html);
});
