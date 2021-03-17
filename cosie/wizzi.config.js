const path = require('path');
module.exports = {
    wfjobName: "cosie-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        './wizzi/packages/wizzi-core/dist/index.js', 
        './wizzi/packages/wizzi-js/dist/index.js', 
        './wizzi/packages/wizzi-web/dist/index.js', 
        './wizzi/packages/wizzi.plugin.pdf/dist/index.js', 
        './wizzi/packages/wizzi.plugin.ppt/dist/index.js', 
    ], 
    pluginsBaseFolder: path.join(__dirname, '..', '..'),
    schemas: [
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};