import{r as l}from"./index.ed373d49.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(o,r,s){var e,t={},p=null,_=null;s!==void 0&&(p=""+s),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)a.call(r,e)&&!c.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:m,type:o,key:p,ref:_,props:t,_owner:y.current}}n.Fragment=x;n.jsx=i;n.jsxs=i;f.exports=n;var d=f.exports;const E=()=>d.jsx("div",{children:"TopPage"});export{E as TopPage};
