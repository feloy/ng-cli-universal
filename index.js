// ./index.js
require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppModule } = require('./dist/main.bundle');
const { renderModule } = require('@angular/platform-server');
renderModule(AppModule, {
    url: '/',
    document: '<app-root></app-root>'
}).then(html => {
    fs.writeFileSync('dist/index.html', html);
});

renderModule(AppModule, {
    url: '/page1',
    document: '<app-root></app-root>'
}).then(html => {
    fs.writeFileSync('dist/page1', html);
});