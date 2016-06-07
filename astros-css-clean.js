'use strict';

var cleanCSS = new (require('clean-css'));

module.exports = new astro.Middleware({
    modType: ['page', 'static'],
    fileType: 'css'
}, function(asset, next) {
    if(!asset.data){
        next(asset);
        return;
    }
    asset.data = cleanCSS.minify(asset.data).styles;
    next(asset);
});