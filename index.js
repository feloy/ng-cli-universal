// ./index.js
require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppModuleNgFactory } = require('./dist/main.bundle');
const { renderModuleFactory } = require('@angular/platform-server');
renderModuleFactory(AppModuleNgFactory, {
    url: '/',
    document: '<app-root></app-root>'
}).then(html => {
    fs.writeFileSync('dist/index.html', html);
});

renderModuleFactory(AppModuleNgFactory, {
    url: '/page1',
    document: '<app-root></app-root>'
}).then(html => {
    fs.writeFileSync('dist/page1', html);
});
