"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var i=u(function(l,t){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/blas-ext-base-dunitspace/dist').ndarray;function o(a){var r=d(a[1]),e=a[0];return c(s(e,0),r,q(e),n(e,0),v(e)),e}t.exports=o
});var f=i();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
