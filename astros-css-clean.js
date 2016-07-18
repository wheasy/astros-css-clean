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
    try{
        asset.data = cleanCSS.minify(asset.data).styles;
    }catch(error){
        console.error('astros-css-clean', '样式压缩异常', asset.info);
    }
    next(asset);
});