const path = require('path');
module.exports = {
    wfjobName: "test", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    globalContext: {
        isPackageDeploy: true,
    }
};