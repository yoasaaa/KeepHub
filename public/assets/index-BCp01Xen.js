import{r as wt,a as zt,g as ke}from"./vendor-C6Ba5J37.js";import{r as x,R as k,a as _,u as Te,b as Qe,O as Ye,N as Ct,L as W,F as J,c as Ie,d as Nt,e as kt,f as Tt,g as It,h as Et,i as Rt}from"./router-Dn-GmLWP.js";import{P as h,R as Ee,B as St,C as Ue,X as Ge,Y as Ze,T as Re,a as Lt,A as Mt,b as At,c as Dt,d as Ot,e as Bt}from"./charts-CMZ3oQBW.js";import{q as I,G as z}from"./ui-CvpXzdt_.js";import{a as Pt,r as $t}from"./utils-CowFeny2.js";import{u as ie,Q as Ft,a as _t}from"./query-Sh2k2zZa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var ye={exports:{}},re={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae;function Ht(){if(Ae)return re;Ae=1;var t=wt(),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(i,g,f){var d,l={},y=null,m=null;f!==void 0&&(y=""+f),g.key!==void 0&&(y=""+g.key),g.ref!==void 0&&(m=g.ref);for(d in g)n.call(g,d)&&!c.hasOwnProperty(d)&&(l[d]=g[d]);if(i&&i.defaultProps)for(d in g=i.defaultProps,g)l[d]===void 0&&(l[d]=g[d]);return{$$typeof:r,type:i,key:y,ref:m,props:l,_owner:o.current}}return re.Fragment=a,re.jsx=s,re.jsxs=s,re}var De;function Vt(){return De||(De=1,ye.exports=Ht()),ye.exports}var e=Vt(),ue={},Oe;function qt(){if(Oe)return ue;Oe=1;var t=zt();return ue.createRoot=t.createRoot,ue.hydrateRoot=t.hydrateRoot,ue}var Wt=qt();const Qt=ke(Wt),Yt="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoKICAgIDxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcng9IjEyIiBmaWxsPSIjZjU5ZTBiIi8+CgoKICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iNCIgZmlsbD0id2hpdGUiLz4KICAgIAoKICAgIDxyZWN0IHg9IjE0IiB5PSIxNCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiByeD0iNCIgZmlsbD0iI2U1ZTdlYiIvPgogICAgCgogICAgPHJlY3QgeD0iMTgiIHk9IjE4IiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSJ3aGl0ZSIvPgogICAgCgogICAgPHJlY3QgeD0iMjEiIHk9IjI2IiB3aWR0aD0iMTYiIGhlaWdodD0iNCIgcng9IjIiIGZpbGw9IiNkMWQ1ZGIiLz4KCgogICAgPHRleHQgeD0iNjAiIHk9IjM2IiBmaWxsPSIjZjU5ZTBiIiBmb250LWZhbWlseT0iU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiCiAgICAgICAgICAgIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiIGxldHRlci1zcGFjaW5nPSIxIj5LZWVwSHViPC90ZXh0Pgo8L3N2Zz4K",ce=()=>e.jsx("img",{src:Yt,alt:"KeepHub",className:"logo"}),T=({type:t,name:r,labelText:a,defaultValue:n,value:o,onChange:c,placeholder:s,required:i=!1,rows:g=3})=>{const f=o!==void 0?o:n||"",d=o!==void 0;return t==="textarea"?e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:r,className:"form-label",children:a||r}),e.jsx("textarea",{id:r,name:r,className:"form-textarea",...d?{value:f}:{defaultValue:f},onChange:c,placeholder:s,required:i,rows:g})]}):e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:r,className:"form-label",children:a||r}),e.jsx("input",{type:t,id:r,name:r,className:"form-input",...d?{value:f}:{defaultValue:f},onChange:c,placeholder:s,required:i})]})};T.propTypes={type:h.string.isRequired,name:h.string.isRequired,labelText:h.string,defaultValue:h.string,value:h.string,onChange:h.func,placeholder:h.string,required:h.bool,rows:h.oneOfType([h.string,h.number])};const F=({name:t,labelText:r,list:a,defaultValue:n="",value:o,onChange:c,required:s=!1})=>{const i=o!==void 0?o:n,g=o!==void 0;return e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:t,className:"form-label",children:r||t}),e.jsx("select",{name:t,id:t,className:"form-select",...g?{value:i}:{defaultValue:i},onChange:c,required:s,children:a.map(f=>e.jsx("option",{value:f,children:f},f))})]})};F.propTypes={name:h.string.isRequired,labelText:h.string,list:h.array.isRequired,defaultValue:h.string,value:h.string,onChange:h.func,required:h.bool};const Ut=I.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  position: relative;
  z-index: 100;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    letter-spacing: -0.025em;
    text-transform: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 100;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;function Gt(t){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"}}]})(t)}function Zt(t){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}}]})(t)}function Be(t){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"}}]})(t)}function Kt(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"}}]})(t)}function Ke(t){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(t)}function Je(t){return z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"}}]})(t)}function Jt(t){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(t)}function Xt(t){return z({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"}}]})(t)}function Xe(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(t)}function er(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(t)}function tr(t){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(t)}function rr(t){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(t)}function ar(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}}]})(t)}function Pe(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"}}]})(t)}function sr(t){return z({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}}]})(t)}function nr(t){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"}}]})(t)}function or(t){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(t)}function ir(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(t)}function et(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(t)}function cr(t){return z({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}function lr(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"}}]})(t)}function dr(t){return z({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"}}]})(t)}function ur(t){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(t)}const mr=I.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,E=Pt.create({baseURL:"/api/v1"});function tt(t){var r,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=tt(t[r]))&&(n&&(n+=" "),n+=a);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function q(){for(var t,r,a=0,n="";a<arguments.length;)(t=arguments[a++])&&(r=tt(t))&&(n&&(n+=" "),n+=r);return n}const se=t=>typeof t=="number"&&!isNaN(t),K=t=>typeof t=="string",L=t=>typeof t=="function",pe=t=>K(t)||L(t)?t:null,je=t=>x.isValidElement(t)||K(t)||L(t)||se(t);function gr(t,r,a){a===void 0&&(a=300);const{scrollHeight:n,style:o}=t;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${a}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(r,a)})})}function ve(t){let{enter:r,exit:a,appendPosition:n=!1,collapse:o=!0,collapseDuration:c=300}=t;return function(s){let{children:i,position:g,preventExitTransition:f,done:d,nodeRef:l,isIn:y}=s;const m=n?`${r}--${g}`:r,u=n?`${a}--${g}`:a,v=x.useRef(0);return x.useLayoutEffect(()=>{const p=l.current,j=m.split(" "),w=S=>{S.target===l.current&&(p.dispatchEvent(new Event("d")),p.removeEventListener("animationend",w),p.removeEventListener("animationcancel",w),v.current===0&&S.type!=="animationcancel"&&p.classList.remove(...j))};p.classList.add(...j),p.addEventListener("animationend",w),p.addEventListener("animationcancel",w)},[]),x.useEffect(()=>{const p=l.current,j=()=>{p.removeEventListener("animationend",j),o?gr(p,d,c):d()};y||(f?j():(v.current=1,p.className+=` ${u}`,p.addEventListener("animationend",j)))},[y]),k.createElement(k.Fragment,null,i)}}function $e(t,r){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:r}:{}}const O={list:new Map,emitQueue:new Map,on(t,r){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(r),this},off(t,r){if(r){const a=this.list.get(t).filter(n=>n!==r);return this.list.set(t,a),this}return this.list.delete(t),this},cancelEmit(t){const r=this.emitQueue.get(t);return r&&(r.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(r=>{const a=setTimeout(()=>{r(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(a)})}},me=t=>{let{theme:r,type:a,...n}=t;return k.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:r==="colored"?"currentColor":`var(--toastify-icon-color-${a})`,...n})},we={info:function(t){return k.createElement(me,{...t},k.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return k.createElement(me,{...t},k.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return k.createElement(me,{...t},k.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return k.createElement(me,{...t},k.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return k.createElement("div",{className:"Toastify__spinner"})}};function pr(t){const[,r]=x.useReducer(m=>m+1,0),[a,n]=x.useState([]),o=x.useRef(null),c=x.useRef(new Map).current,s=m=>a.indexOf(m)!==-1,i=x.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:m=>c.get(m)}).current;function g(m){let{containerId:u}=m;const{limit:v}=i.props;!v||u&&i.containerId!==u||(i.count-=i.queue.length,i.queue=[])}function f(m){n(u=>m==null?[]:u.filter(v=>v!==m))}function d(){const{toastContent:m,toastProps:u,staleId:v}=i.queue.shift();y(m,u,v)}function l(m,u){let{delay:v,staleId:p,...j}=u;if(!je(m)||function(D){return!o.current||i.props.enableMultiContainer&&D.containerId!==i.props.containerId||c.has(D.toastId)&&D.updateId==null}(j))return;const{toastId:w,updateId:S,data:C}=j,{props:N}=i,H=()=>f(w),V=S==null;V&&i.count++;const R={...N,style:N.toastStyle,key:i.toastKey++,...Object.fromEntries(Object.entries(j).filter(D=>{let[P,M]=D;return M!=null})),toastId:w,updateId:S,data:C,closeToast:H,isIn:!1,className:pe(j.className||N.toastClassName),bodyClassName:pe(j.bodyClassName||N.bodyClassName),progressClassName:pe(j.progressClassName||N.progressClassName),autoClose:!j.isLoading&&(Q=j.autoClose,X=N.autoClose,Q===!1||se(Q)&&Q>0?Q:X),deleteToast(){const D=$e(c.get(w),"removed");c.delete(w),O.emit(4,D);const P=i.queue.length;if(i.count=w==null?i.count-i.displayedToast:i.count-1,i.count<0&&(i.count=0),P>0){const M=w==null?i.props.limit:1;if(P===1||M===1)i.displayedToast++,d();else{const U=M>P?P:M;i.displayedToast=U;for(let A=0;A<U;A++)d()}}else r()}};var Q,X;R.iconOut=function(D){let{theme:P,type:M,isLoading:U,icon:A}=D,$=null;const G={theme:P,type:M};return A===!1||(L(A)?$=A(G):x.isValidElement(A)?$=x.cloneElement(A,G):K(A)||se(A)?$=A:U?$=we.spinner():(de=>de in we)(M)&&($=we[M](G))),$}(R),L(j.onOpen)&&(R.onOpen=j.onOpen),L(j.onClose)&&(R.onClose=j.onClose),R.closeButton=N.closeButton,j.closeButton===!1||je(j.closeButton)?R.closeButton=j.closeButton:j.closeButton===!0&&(R.closeButton=!je(N.closeButton)||N.closeButton);let Y=m;x.isValidElement(m)&&!K(m.type)?Y=x.cloneElement(m,{closeToast:H,toastProps:R,data:C}):L(m)&&(Y=m({closeToast:H,toastProps:R,data:C})),N.limit&&N.limit>0&&i.count>N.limit&&V?i.queue.push({toastContent:Y,toastProps:R,staleId:p}):se(v)?setTimeout(()=>{y(Y,R,p)},v):y(Y,R,p)}function y(m,u,v){const{toastId:p}=u;v&&c.delete(v);const j={content:m,props:u};c.set(p,j),n(w=>[...w,p].filter(S=>S!==v)),O.emit(4,$e(j,j.props.updateId==null?"added":"updated"))}return x.useEffect(()=>(i.containerId=t.containerId,O.cancelEmit(3).on(0,l).on(1,m=>o.current&&f(m)).on(5,g).emit(2,i),()=>{c.clear(),O.emit(3,i)}),[]),x.useEffect(()=>{i.props=t,i.isToastActive=s,i.displayedToast=a.length}),{getToastToRender:function(m){const u=new Map,v=Array.from(c.values());return t.newestOnTop&&v.reverse(),v.forEach(p=>{const{position:j}=p.props;u.has(j)||u.set(j,[]),u.get(j).push(p)}),Array.from(u,p=>m(p[0],p[1]))},containerRef:o,isToastActive:s}}function Fe(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function _e(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function hr(t){const[r,a]=x.useState(!1),[n,o]=x.useState(!1),c=x.useRef(null),s=x.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,i=x.useRef(t),{autoClose:g,pauseOnHover:f,closeToast:d,onClick:l,closeOnClick:y}=t;function m(C){if(t.draggable){C.nativeEvent.type==="touchstart"&&C.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",j),document.addEventListener("mouseup",w),document.addEventListener("touchmove",j),document.addEventListener("touchend",w);const N=c.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=N.getBoundingClientRect(),N.style.transition="",s.x=Fe(C.nativeEvent),s.y=_e(C.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=N.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=N.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function u(C){if(s.boundingRect){const{top:N,bottom:H,left:V,right:R}=s.boundingRect;C.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=V&&s.x<=R&&s.y>=N&&s.y<=H?p():v()}}function v(){a(!0)}function p(){a(!1)}function j(C){const N=c.current;s.canDrag&&N&&(s.didMove=!0,r&&p(),s.x=Fe(C),s.y=_e(C),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),N.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,N.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function w(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",j),document.removeEventListener("touchend",w);const C=c.current;if(s.canDrag&&s.didMove&&C){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),void t.closeToast();C.style.transition="transform 0.2s, opacity 0.2s",C.style.transform=`translate${t.draggableDirection}(0)`,C.style.opacity="1"}}x.useEffect(()=>{i.current=t}),x.useEffect(()=>(c.current&&c.current.addEventListener("d",v,{once:!0}),L(t.onOpen)&&t.onOpen(x.isValidElement(t.children)&&t.children.props),()=>{const C=i.current;L(C.onClose)&&C.onClose(x.isValidElement(C.children)&&C.children.props)}),[]),x.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||p(),window.addEventListener("focus",v),window.addEventListener("blur",p)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",p))}),[t.pauseOnFocusLoss]);const S={onMouseDown:m,onTouchStart:m,onMouseUp:u,onTouchEnd:u};return g&&f&&(S.onMouseEnter=p,S.onMouseLeave=v),y&&(S.onClick=C=>{l&&l(C),s.canCloseOnClick&&d()}),{playToast:v,pauseToast:p,isRunning:r,preventExitTransition:n,toastRef:c,eventHandlers:S}}function rt(t){let{closeToast:r,theme:a,ariaLabel:n="close"}=t;return k.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:o=>{o.stopPropagation(),r(o)},"aria-label":n},k.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},k.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fr(t){let{delay:r,isRunning:a,closeToast:n,type:o="default",hide:c,className:s,style:i,controlledProgress:g,progress:f,rtl:d,isIn:l,theme:y}=t;const m=c||g&&f===0,u={...i,animationDuration:`${r}ms`,animationPlayState:a?"running":"paused",opacity:m?0:1};g&&(u.transform=`scaleX(${f})`);const v=q("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),p=L(s)?s({rtl:d,type:o,defaultClassName:v}):q(v,s);return k.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:p,style:u,[g&&f>=1?"onTransitionEnd":"onAnimationEnd"]:g&&f<1?null:()=>{l&&n()}})}const xr=t=>{const{isRunning:r,preventExitTransition:a,toastRef:n,eventHandlers:o}=hr(t),{closeButton:c,children:s,autoClose:i,onClick:g,type:f,hideProgressBar:d,closeToast:l,transition:y,position:m,className:u,style:v,bodyClassName:p,bodyStyle:j,progressClassName:w,progressStyle:S,updateId:C,role:N,progress:H,rtl:V,toastId:R,deleteToast:Q,isIn:X,isLoading:Y,iconOut:D,closeOnClick:P,theme:M}=t,U=q("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":V},{"Toastify__toast--close-on-click":P}),A=L(u)?u({rtl:V,position:m,type:f,defaultClassName:U}):q(U,u),$=!!H||!i,G={closeToast:l,type:f,theme:M};let de=null;return c===!1||(de=L(c)?c(G):x.isValidElement(c)?x.cloneElement(c,G):rt(G)),k.createElement(y,{isIn:X,done:Q,position:m,preventExitTransition:a,nodeRef:n},k.createElement("div",{id:R,onClick:g,className:A,...o,style:v,ref:n},k.createElement("div",{...X&&{role:N},className:L(p)?p({type:f}):q("Toastify__toast-body",p),style:j},D!=null&&k.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Y})},D),k.createElement("div",null,s)),de,k.createElement(fr,{...C&&!$?{key:`pb-${C}`}:{},rtl:V,theme:M,delay:i,isRunning:r,isIn:X,closeToast:l,hide:d,type:f,style:S,className:w,controlledProgress:$,progress:H||0})))},be=function(t,r){return r===void 0&&(r=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:r}},vr=ve(be("bounce",!0));ve(be("slide",!0));ve(be("zoom"));ve(be("flip"));const Ce=x.forwardRef((t,r)=>{const{getToastToRender:a,containerRef:n,isToastActive:o}=pr(t),{className:c,style:s,rtl:i,containerId:g}=t;function f(d){const l=q("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":i});return L(c)?c({position:d,rtl:i,defaultClassName:l}):q(l,pe(c))}return x.useEffect(()=>{r&&(r.current=n.current)},[]),k.createElement("div",{ref:n,className:"Toastify",id:g},a((d,l)=>{const y=l.length?{...s}:{...s,pointerEvents:"none"};return k.createElement("div",{className:f(d),style:y,key:`container-${d}`},l.map((m,u)=>{let{content:v,props:p}=m;return k.createElement(xr,{...p,isIn:o(p.toastId),style:{...p.style,"--nth":u+1,"--len":l.length},key:`toast-${p.key}`},v)}))}))});Ce.displayName="ToastContainer",Ce.defaultProps={position:"top-right",transition:vr,autoClose:5e3,closeButton:rt,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ze,Z=new Map,ae=[],br=1;function at(){return""+br++}function yr(t){return t&&(K(t.toastId)||se(t.toastId))?t.toastId:at()}function ne(t,r){return Z.size>0?O.emit(0,t,r):ae.push({content:t,options:r}),r.toastId}function xe(t,r){return{...r,type:r&&r.type||t,toastId:yr(r)}}function ge(t){return(r,a)=>ne(r,xe(t,a))}function b(t,r){return ne(t,xe("default",r))}b.loading=(t,r)=>ne(t,xe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...r})),b.promise=function(t,r,a){let n,{pending:o,error:c,success:s}=r;o&&(n=K(o)?b.loading(o,a):b.loading(o.render,{...a,...o}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},g=(d,l,y)=>{if(l==null)return void b.dismiss(n);const m={type:d,...i,...a,data:y},u=K(l)?{render:l}:l;return n?b.update(n,{...m,...u}):b(u.render,{...m,...u}),y},f=L(t)?t():t;return f.then(d=>g("success",s,d)).catch(d=>g("error",c,d)),f},b.success=ge("success"),b.info=ge("info"),b.error=ge("error"),b.warning=ge("warning"),b.warn=b.warning,b.dark=(t,r)=>ne(t,xe("default",{theme:"dark",...r})),b.dismiss=t=>{Z.size>0?O.emit(1,t):ae=ae.filter(r=>t!=null&&r.options.toastId!==t)},b.clearWaitingQueue=function(t){return t===void 0&&(t={}),O.emit(5,t)},b.isActive=t=>{let r=!1;return Z.forEach(a=>{a.isToastActive&&a.isToastActive(t)&&(r=!0)}),r},b.update=function(t,r){r===void 0&&(r={}),setTimeout(()=>{const a=function(n,o){let{containerId:c}=o;const s=Z.get(c||ze);return s&&s.getToast(n)}(t,r);if(a){const{props:n,content:o}=a,c={delay:100,...n,...r,toastId:r.toastId||t,updateId:at()};c.toastId!==t&&(c.staleId=t);const s=c.render||o;delete c.render,ne(s,c)}},0)},b.done=t=>{b.update(t,{progress:1})},b.onChange=t=>(O.on(4,t),()=>{O.off(4,t)}),b.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,t=>{ze=t.containerId||t,Z.set(ze,t),ae.forEach(r=>{O.emit(0,r.content,r.options)}),ae=[]}).on(3,t=>{Z.delete(t.containerId||t),Z.size===0&&O.off(0).off(1).off(5)});const st={queryKey:["user"],queryFn:async()=>{const{data:t}=await E.get("/users/current-user");return t}},jr=t=>async()=>{try{return await t.ensureQueryData(st)}catch{return _("/")}},nt=x.createContext(),wr=({queryClient:t})=>{const{user:r}=ie(st).data,a=Te(),o=Qe().state==="loading",[c,s]=x.useState(!1),[i,g]=x.useState(Me()),[f,d]=x.useState(!1),l=()=>{const u=!i;g(u),document.body.classList.toggle("dark-theme",u),localStorage.setItem("darkTheme",u)},y=()=>{s(!c)},m=async()=>{a("/"),await E.get("/auth/logout"),t.invalidateQueries(),b.success("Logging out...")};return E.interceptors.response.use(u=>u,u=>(u?.response?.status===401&&d(!0),Promise.reject(u))),x.useEffect(()=>{f&&m()},[f]),e.jsx(nt.Provider,{value:{user:r,showSidebar:c,isDarkTheme:i,toggleDarkTheme:l,toggleSidebar:y,logoutUser:m},children:e.jsx(mr,{children:e.jsxs("main",{className:"dashboard",children:[e.jsx(Or,{}),e.jsx(Ar,{}),e.jsxs("div",{children:[e.jsx(Tr,{}),e.jsx("div",{className:"dashboard-page",children:o?e.jsx(aa,{}):e.jsx(Ye,{context:{user:r}})})]})]})})})},te=()=>x.useContext(nt),zr=I.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`,Cr=()=>{const[t,r]=x.useState(!1),{user:a,logoutUser:n}=te();return e.jsxs(zr,{children:[e.jsxs("button",{type:"button",className:"btn logout-btn",onClick:()=>r(!t),children:[a.avatar?e.jsx("img",{src:a.avatar,alt:"avatar",className:"img"}):e.jsx(dr,{}),a?.name,e.jsx(Xt,{})]}),e.jsx("div",{className:t?"dropdown show-dropdown":"dropdown",children:e.jsx("button",{type:"button",className:"dropdown-btn",onClick:n,children:"logout"})})]})};function ot(t){return z({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}}]})(t)}function it(t){return z({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(t)}const Nr=I.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`,kr=()=>{const{isDarkTheme:t,toggleDarkTheme:r}=te();return e.jsx(Nr,{onClick:r,children:t?e.jsx(it,{className:"toggle-icon"}):e.jsx(ot,{})})},Tr=()=>{const{toggleSidebar:t}=te();return e.jsx(Ut,{children:e.jsxs("div",{className:"nav-center",children:[e.jsx("button",{type:"button",className:"toggle-btn",onClick:t,children:e.jsx(Zt,{})}),e.jsx("div",{children:e.jsx(ce,{})}),e.jsxs("div",{className:"btn-container",children:[e.jsx(kr,{}),e.jsx(Cr,{})]})]})})},Ir=I.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`;function Er(t){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 496H16V16h32v448h448v32z"}},{tag:"path",attr:{d:"M192 432H80V208h112zm144 0H224V160h112zm143.64 0h-112V96h112z"}}]})(t)}function Rr(t){return z({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"}},{tag:"path",attr:{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"}}]})(t)}function Sr(t){return z({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"}}]})(t)}function Lr(t){return z({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"}}]})(t)}const Mr=[{text:"add resource",path:".",icon:e.jsx(Gt,{})},{text:"all resources",path:"all-resources",icon:e.jsx(Sr,{})},{text:"stats",path:"stats",icon:e.jsx(Er,{})},{text:"profile",path:"profile",icon:e.jsx(Lr,{})},{text:"admin",path:"admin",icon:e.jsx(Rr,{})}],ct=({isBigSidebar:t})=>{const{toggleSidebar:r,user:a}=te();return e.jsx("div",{className:"nav-links",children:Mr.map(n=>{const{text:o,path:c,icon:s}=n,{role:i}=a;if(!(c==="admin"&&i!=="admin"))return e.jsxs(Ct,{to:c,className:"nav-link",onClick:t?null:r,end:!0,children:[e.jsx("span",{className:"icon",children:s}),o]},o)})})},Ar=()=>{const{showSidebar:t}=te();return e.jsx(Ir,{children:e.jsx("div",{className:t?"sidebar-container ":"sidebar-container show-sidebar",children:e.jsxs("div",{className:"content",children:[e.jsx("header",{children:e.jsx(ce,{})}),e.jsx(ct,{isBigSidebar:!0})]})})})},Dr=I.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`,Or=()=>{const{showSidebar:t,toggleSidebar:r}=te();return e.jsx(Dr,{children:e.jsx("div",{className:t?"sidebar-container show-sidebar":"sidebar-container",children:e.jsxs("div",{className:"content",children:[e.jsx("button",{type:"button",className:"close-btn",onClick:r,children:e.jsx(cr,{})}),e.jsx("header",{children:e.jsx(ce,{})}),e.jsx(ct,{})]})})})},le=({formBtn:t})=>{const a=Qe().state==="submitting";return e.jsx("button",{type:"submit",className:`btn btn-block ${t&&"form-btn"} `,disabled:a,children:a?"submitting":"submit"})},Br=I.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-bottom: 5px solid ${t=>t.color};
  border-radius: var(--border-radius);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${t=>t.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${t=>t.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${t=>t.color};
    }
  }
`,Ne=({count:t,title:r,icon:a,color:n,bcg:o})=>e.jsxs(Br,{color:n,bcg:o,children:[e.jsxs("header",{children:[e.jsx("span",{className:"count",children:t}),e.jsx("span",{className:"icon",children:a})]}),e.jsx("h5",{className:"title",children:r})]}),lt=I.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`,dt=({defaultStats:t})=>{const r=[{title:"to read",count:t?.["to read"]||0,icon:e.jsx(Kt,{}),color:"#d66a6a",bcg:"#fdf2f2"},{title:"in progress",count:t?.["in progress"]||0,icon:e.jsx(et,{}),color:"#647acb",bcg:"#e0e8f9"},{title:"completed",count:t?.completed||0,icon:e.jsx(Xe,{}),color:"#10b981",bcg:"#dcfce7"},{title:"reference",count:t?.reference||0,icon:e.jsx(Je,{}),color:"#a78bca",bcg:"#f7f3ff"}];return e.jsx(lt,{children:r.map(a=>e.jsx(Ne,{...a},a.title))})};dt.propTypes={defaultStats:h.shape({"to read":h.number,"in progress":h.number,completed:h.number,reference:h.number})};const Pr=({data:t})=>e.jsx(Ee,{width:"100%",height:300,children:e.jsxs(St,{data:t,margin:{top:20},children:[e.jsx(Ue,{strokeDasharray:"3 3"}),e.jsx(Ge,{dataKey:"date"}),e.jsx(Ze,{allowDecimals:!1}),e.jsx(Re,{}),e.jsx(Lt,{dataKey:"count",fill:"#f59e0b",barSize:75})]})}),$r=({data:t})=>e.jsx(Ee,{width:"100%",height:300,children:e.jsxs(Mt,{data:t,margin:{top:20},children:[e.jsx(Ue,{strokeDasharray:"3 3"}),e.jsx(Ge,{dataKey:"date"}),e.jsx(Ze,{allowDecimals:!1}),e.jsx(Re,{}),e.jsx(At,{type:"monotone",dataKey:"count",stroke:"#f59e0b",fill:"#fef3c7"})]})}),Fr=I.section`
  text-align: center;

  .chart-header {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .chart-title {
    color: var(--text-color);
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    text-align: center;
    letter-spacing: -0.025em;
  }

  .chart-toggle-btn {
    background: transparent;
    border: 2px solid var(--primary-500);
    color: var(--primary-500);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    right: 0;
  }

  .chart-toggle-btn:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .chart-toggle-btn {
      position: static;
      margin-top: 0.5rem;
    }
    
    .chart-title {
      font-size: 1.25rem;
    }
  }
`,_r=({data:t})=>{const[r,a]=x.useState(!0);return e.jsxs(Fr,{children:[e.jsxs("div",{className:"chart-header",children:[e.jsx("h3",{className:"chart-title",children:"Monthly Resource Additions"}),e.jsx("button",{type:"button",className:"chart-toggle-btn",onClick:()=>a(!r),children:r?"Area Chart":"Bar Chart"})]}),r?e.jsx(Pr,{data:t}):e.jsx($r,{data:t})]})},ut=({data:t,title:r})=>{const a={video:"#a8c8e1",article:"#a8d5b7",tool:"#f4d03f",course:"#d2b4de",book:"#f1948a",podcast:"#85c1e9",other:"#d5d8dc"},o=(s=>s.map(i=>({name:i.type,value:i.count,fill:a[i.type]||"#d5d8dc"})))(t),c=({active:s,payload:i})=>{if(s&&i&&i.length){const g=i[0];return e.jsx("div",{style:{backgroundColor:"var(--background-secondary-color)",color:"var(--text-color)",padding:"0.75rem",border:"1px solid var(--grey-200)",borderRadius:"0.5rem",boxShadow:"var(--shadow-2)",fontSize:"0.875rem"},children:e.jsxs("p",{style:{margin:0,fontWeight:"600"},children:[g.payload.name,": ",g.value]})})}return null};return c.propTypes={active:h.bool,payload:h.arrayOf(h.shape({payload:h.shape({name:h.string}),value:h.number}))},!t||t.length===0?e.jsx("div",{style:{height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary-color)",fontSize:"0.875rem"},children:"No data available"}):e.jsxs("div",{style:{width:"100%",height:"300px"},children:[e.jsx("h3",{style:{textAlign:"center",color:"var(--text-color)",fontSize:"1.375rem",fontWeight:"600",margin:"0 0 1.5rem 0"},children:r}),e.jsx(Ee,{width:"100%",height:"100%",children:e.jsxs(Dt,{children:[e.jsx(Ot,{data:o,cx:"50%",cy:"50%",labelLine:!1,label:({name:s,percent:i})=>`${s} ${(i*100).toFixed(0)}%`,outerRadius:80,fill:"#d5d8dc",dataKey:"value",children:o.map((s,i)=>e.jsx(Bt,{fill:s.fill},`cell-${i}`))}),e.jsx(Re,{content:e.jsx(c,{})})]})})]})};ut.propTypes={data:h.arrayOf(h.shape({type:h.string.isRequired,count:h.number.isRequired})).isRequired,title:h.string.isRequired};const He=I.div`
  .tag-cloud-title {
    color: var(--text-color);
    font-size: 1.375rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    text-align: center;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
  }

  .tag-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
  }

  .tag-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .tag-count {
    background: var(--primary-500);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    min-width: 20px;
  }

  /* Tag sizes based on frequency */
  .tag-size-1 {
    font-size: 0.875rem;
  }

  .tag-size-2 {
    font-size: 1rem;
  }

  .tag-size-3 {
    font-size: 1.125rem;
  }

  .tag-size-4 {
    font-size: 1.25rem;
  }

  .tag-size-5 {
    font-size: 1.375rem;
  }

  .tag-color-0 {
    background: var(--tag-yellow-bg);
    color: var(--tag-yellow-color);
  }

  .tag-color-1 {
    background: var(--tag-blue-bg);
    color: var(--tag-blue-color);
  }

  .tag-color-2 {
    background: var(--tag-green-bg);
    color: var(--tag-green-color);
  }

  .tag-color-3 {
    background: var(--tag-pink-bg);
    color: var(--tag-pink-color);
  }

  .tag-color-4 {
    background: var(--tag-purple-bg);
    color: var(--tag-purple-color);
  }

  .tag-color-5 {
    background: var(--tag-red-bg);
    color: var(--tag-red-color);
  }

  .tag-color-6 {
    background: var(--tag-cyan-bg);
    color: var(--tag-cyan-color);
  }

  .tag-color-7 {
    background: var(--tag-orange-bg);
    color: var(--tag-orange-color);
  }

  .tag-color-8 {
    background: var(--tag-blue-bg);
    color: var(--tag-blue-color);
  }

  .tag-color-9 {
    background: var(--tag-gray-bg);
    color: var(--tag-gray-color);
  }

  .no-tags {
    text-align: center;
    color: var(--text-secondary-color);
    font-style: italic;
    padding: 2rem;
  }
`,mt=({tagStats:t})=>{if(!t||t.length===0)return e.jsxs(He,{children:[e.jsx("h3",{className:"tag-cloud-title",children:"Popular Tags"}),e.jsx("div",{className:"no-tags",children:"No tags data available"})]});const r=Math.max(...t.map(n=>n.count)),a=n=>{const o=n/r;return o>=.8?5:o>=.6?4:o>=.4?3:o>=.2?2:1};return e.jsxs(He,{children:[e.jsx("h3",{className:"tag-cloud-title",children:"Popular Tags"}),e.jsx("div",{className:"tags-container",children:t.map((n,o)=>e.jsxs("span",{className:`tag-item tag-size-${a(n.count)} tag-color-${o%10}`,children:[e.jsx("span",{children:n.tag}),e.jsx("span",{className:"tag-count",children:n.count})]},o))})]})};mt.propTypes={tagStats:h.arrayOf(h.shape({tag:h.string.isRequired,count:h.number.isRequired})).isRequired};const Hr=I.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      letter-spacing: var(--letter-spacing);
      font-size: 0.875rem;
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    align-items: center;
  }

  .status-row {
    margin-bottom: 1rem;
  }

  /* Tags section */
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    min-height: 1.5rem;
  }
  
  .tag {
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: none;
    border: none;
    transition: all 0.2s ease;
  }
  
  .tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .edit-btn,
  .delete-btn,
  .external-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    margin: 0;
  }


  &:hover .actions {
    visibility: visible;
  }
`,Vr=I.div`
  display: flex;
  align-items: center;
  margin: 0;

  .icon {
    font-size: 1.125rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  
  /* Status-specific icon colors - matching Stats page colors */
  &.status-to-read .icon svg {
    color: #d66a6a;
  }
  &.status-to-read .text {
    color: #d66a6a;
  }
  
  &.status-in-progress .icon svg {
    color: #647acb;
  }
  &.status-in-progress .text {
    color: #647acb;
  }
  
  &.status-completed .icon svg {
    color: #10b981;
  }
  &.status-completed .text {
    color: #10b981;
  }
  
  &.status-reference .icon svg {
    color: #a78bca;
  }
  &.status-reference .text {
    color: #a78bca;
  }
  
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1rem;
    color: var(--text-secondary-color);
    line-height: 1.25;
    margin: 0;
  }
`,he=({icon:t,text:r,className:a=""})=>e.jsxs(Vr,{className:a,children:[e.jsx("span",{className:"icon",children:t}),e.jsx("span",{className:"text",children:r})]});he.propTypes={icon:h.element.isRequired,text:h.string.isRequired,className:h.string};var qr=$t();const gt=ke(qr);var fe={exports:{}},Wr=fe.exports,Ve;function Qr(){return Ve||(Ve=1,function(t,r){(function(a,n){t.exports=n()})(Wr,function(){return function(a,n){var o=n.prototype,c=o.format;o.format=function(s){var i=this,g=this.$locale();if(!this.isValid())return c.bind(this)(s);var f=this.$utils(),d=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(l){switch(l){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return g.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return g.ordinal(i.week(),"W");case"w":case"ww":return f.s(i.week(),l==="w"?1:2,"0");case"W":case"WW":return f.s(i.isoWeek(),l==="W"?1:2,"0");case"k":case"kk":return f.s(String(i.$H===0?24:i.$H),l==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return l}});return c.bind(this)(d)}}})}(fe)),fe.exports}var Yr=Qr();const Ur=ke(Yr);gt.extend(Ur);const pt=({_id:t,title:r,platform:a,resourceType:n,resourceStatus:o,url:c,createdAt:s,tags:i=[]})=>{const g=gt(s).format("MMM Do, YYYY"),f=y=>{switch(y){case"to read":return e.jsx(Be,{});case"in progress":return e.jsx(er,{});case"completed":return e.jsx(Xe,{});case"reference":return e.jsx(Je,{});default:return e.jsx(Be,{})}},d=y=>{switch(y){case"video":return e.jsx(or,{});case"article":return e.jsx(nr,{});case"tool":return e.jsx(lr,{});case"course":return e.jsx(rr,{});case"book":return e.jsx(Ke,{});case"podcast":return e.jsx(sr,{});case"other":default:return e.jsx(ir,{})}},l=y=>{const m=[{bg:"var(--tag-yellow-bg)",color:"var(--tag-yellow-color)"},{bg:"var(--tag-blue-bg)",color:"var(--tag-blue-color)"},{bg:"var(--tag-green-bg)",color:"var(--tag-green-color)"},{bg:"var(--tag-pink-bg)",color:"var(--tag-pink-color)"},{bg:"var(--tag-purple-bg)",color:"var(--tag-purple-color)"},{bg:"var(--tag-red-bg)",color:"var(--tag-red-color)"},{bg:"var(--tag-cyan-bg)",color:"var(--tag-cyan-color)"},{bg:"var(--tag-orange-bg)",color:"var(--tag-orange-color)"}];let u=0;for(let v=0;v<y.length;v++)u=y.charCodeAt(v)+((u<<5)-u);return m[Math.abs(u)%m.length]};return e.jsxs(Hr,{children:[e.jsxs("header",{children:[e.jsx("div",{className:"main-icon",children:r.charAt(0).toUpperCase()}),e.jsxs("div",{className:"info",children:[e.jsx("h5",{children:r}),e.jsx("p",{children:a||""})]})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"content-center",children:[e.jsx(he,{icon:d(n),text:n}),e.jsx(he,{icon:e.jsx(Jt,{}),text:g})]}),e.jsx("div",{className:"status-row",children:e.jsx(he,{icon:f(o),text:o,className:`status-${o.replace(" ","-")}`})}),e.jsx("div",{className:"tags-container",children:i&&Array.isArray(i)&&i.length>0&&i.filter(y=>y&&y.trim().length>0).map((y,m)=>{const u=l(y);return e.jsx("span",{className:"tag",style:{backgroundColor:u.bg,color:u.color},children:y},m)})}),e.jsxs("footer",{className:"actions",children:[e.jsx(W,{to:`../edit-resource/${t}`,className:"btn edit-btn",children:"Edit"}),e.jsx(J,{method:"post",action:`../delete-resource/${t}`,children:e.jsx("button",{type:"submit",className:"btn delete-btn",children:"Delete"})}),e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn external-btn",children:"Visit Resource"})]})]})]})};pt.propTypes={_id:h.string.isRequired,title:h.string.isRequired,platform:h.string,resourceType:h.string.isRequired,resourceStatus:h.string.isRequired,url:h.string.isRequired,createdAt:h.string.isRequired,tags:h.array};const qe=I.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .resources {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .resources {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`,ht=t=>{const{search:r,resourceType:a,resourceStatus:n,sort:o,page:c,tag:s}=t;return{queryKey:["resources",r??"",a??"all",n??"all",o??"newest",c??1,s??"all"],queryFn:async()=>{const{data:i}=await E.get("/resources",{params:t});return i}}},Gr=t=>async({request:r})=>{const a=Object.fromEntries([...new URL(r.url).searchParams.entries()]);return await t.ensureQueryData(ht(a)),{searchValues:{...a}}},ft=x.createContext(),Zr=()=>{const{searchValues:t}=Ie(),{data:r}=ie(ht(t));return e.jsxs(ft.Provider,{value:{data:r,searchValues:t},children:[e.jsx(ra,{}),e.jsx(Xr,{})]})},Se=()=>x.useContext(ft),Kr=I.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
  .prev-btn,.next-btn{
    background: var(--background-secondary-color);
    border-color: transparent;
    border-radius: var(--border-radius);
    width: 100px;
    height: 40px;
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background: var(--primary-500);
    color: var(--white);
    transition: var(--transition);
  }
  .prev-btn:disabled,.next-btn:disabled{
    background: var(--grey-200);
    color: var(--grey-400);
    cursor: not-allowed;
  }
  .prev-btn:disabled:hover,.next-btn:disabled:hover{
    background: var(--grey-200);
    color: var(--grey-400);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`,Jr=()=>{const{data:t}=Se(),{numPages:r,currentPage:a}=t,{search:n,pathname:o}=Nt(),c=Te(),s=Number(a)||1;if(!r||r<=1)return null;const i=d=>{const l=new URLSearchParams(n);l.set("page",d),c(`${o}?${l.toString()}`)},g=({pageNumber:d,activeClass:l})=>e.jsx("button",{className:`btn page-btn ${l&&"active"}`,onClick:()=>i(d),children:d},d),f=()=>{const d=[];return r===1?[g({pageNumber:1,activeClass:!0})]:(r>0&&d.push(g({pageNumber:1,activeClass:s===1})),s>3&&d.push(e.jsx("span",{className:"page-btn dots",children:"..."},"dots-1")),s>2&&s<=r&&d.push(g({pageNumber:s-1,activeClass:!1})),s>1&&s<r&&s<=r&&d.push(g({pageNumber:s,activeClass:!0})),s<r-1&&s>=1&&d.push(g({pageNumber:s+1,activeClass:!1})),s<r-2&&d.push(e.jsx("span",{className:"page-btn dots",children:"..."},"dots+1")),r>1&&d.push(g({pageNumber:r,activeClass:s===r})),d)};return e.jsxs(Kr,{children:[e.jsx("button",{className:"btn prev-btn",onClick:()=>{let d=s-1;d<1&&(d=r),i(d)},disabled:r<=1,children:"Prev"}),e.jsx("div",{className:"btn-container",children:f()}),e.jsx("button",{className:"btn next-btn",onClick:()=>{let d=s+1;d>r&&(d=1),i(d)},disabled:r<=1,children:"Next"})]})},Xr=()=>{const{data:t}=Se(),{resources:r,totalResources:a,numPages:n}=t;return r.length===0?e.jsx(qe,{children:e.jsx("h2",{children:"No resources to display..."})}):e.jsxs(qe,{children:[e.jsxs("h5",{children:[a," resource",r.length>1&&"s"," found"]}),e.jsx("div",{className:"resources",children:r.map(o=>e.jsx(pt,{...o},o._id))}),n>1&&e.jsx(Jr,{})]})},ea=I.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem;
  box-shadow: var(--shadow-2);

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-title {
    margin-bottom: 2rem;
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.025em;
    text-transform: none;
    line-height: 1.2;
  }

  .form-center {
    display: grid;
    gap: 1.5rem;
  }

  .search-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .filters-row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    justify-self: end;
  }

  @media (min-width: 768px) {
    .filters-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .filters-row {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1120px) {
    .form {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`,oe={TO_READ:"to read",IN_PROGRESS:"in progress",COMPLETED:"completed",REFERENCE:"reference"},ee={VIDEO:"video",ARTICLE:"article",TOOL:"tool",COURSE:"course",BOOK:"book",PODCAST:"podcast",OTHER:"other"},ta={NEWEST_FIRST:"newest",OLDEST_FIRST:"oldest",ASCENDING:"a-z",DESCENDING:"z-a"},ra=()=>{const{searchValues:t}=Se(),r=kt(),{data:a}=ie({queryKey:["tags"],queryFn:async()=>{const{data:c}=await E.get("/resources/tags");return c}}),n=a?.tags||[],o=c=>{let s;return i=>{const g=i.currentTarget.form;clearTimeout(s),s=setTimeout(()=>{c(g)},2e3)}};return e.jsx(ea,{children:e.jsxs(J,{className:"form",children:[e.jsx("h5",{className:"form-title",children:"Search Form"}),e.jsxs("div",{className:"form-center",children:[e.jsx("div",{className:"search-row",children:e.jsx(T,{type:"search",name:"search",labelText:"Search",placeholder:"Search by title, platform, or tags...",defaultValue:t.search,onChange:o(c=>{r(c)})})}),e.jsxs("div",{className:"filters-row",children:[e.jsx(F,{labelText:"Filter by Tag",name:"tag",list:["all",...n],defaultValue:t.tag,onChange:c=>{r(c.currentTarget.form)}}),e.jsx(F,{labelText:"Resource Status",name:"resourceStatus",list:["all",...Object.values(oe)],defaultValue:t.resourceStatus,onChange:c=>{r(c.currentTarget.form)}}),e.jsx(F,{labelText:"Resource Type",name:"resourceType",list:["all",...Object.values(ee)],defaultValue:t.resourceType,onChange:c=>{r(c.currentTarget.form)}}),e.jsx(F,{labelText:"Sort",name:"sort",list:Object.values(ta),defaultValue:t.sort||"newest",onChange:c=>{r(c.currentTarget.form)}})]}),e.jsx(W,{to:"/dashboard/all-resources",className:"btn form-btn delete-btn",children:"Reset Search Values"})]})]})})},aa=()=>e.jsx("div",{className:"loading"}),xt=({url:t,onAnalysisComplete:r,disabled:a=!1})=>{const[n,o]=x.useState(!1),[c,s]=x.useState(null),[i,g]=x.useState(!1),f=async()=>{if(!t||!t.trim()){b.error("Please enter a URL first");return}try{new URL(t)}catch{b.error("Please enter a valid URL");return}o(!0),s(null);try{const d=await E.post("/ai-analysis/analyze",{url:t.trim()});if(d.data.success)b.success(d.data.cached?"Using cached analysis result":"Content analyzed successfully!"),r({success:!0,data:d.data,cached:d.data.cached});else throw new Error(d.data.error||"Analysis failed")}catch(d){const l=d.response?.data?.error||d.message||"Failed to analyze content";s(l),b.error(`Analysis failed: ${l}`),r({success:!1,error:l})}finally{o(!1)}};return e.jsxs("div",{className:"smart-analyzer",children:[e.jsxs("div",{className:"analyzer-header",children:[e.jsxs("h4",{className:"analyzer-title",children:[e.jsx(Pe,{className:"analyzer-icon"}),"AI Content Analysis"]}),e.jsxs("div",{className:"analyzer-subtitle",children:[e.jsx("span",{children:"Automatically extract title, tags, and summary"}),e.jsx("button",{type:"button",className:"info-toggle",onClick:()=>g(!i),title:"Learn more",children:e.jsx(ar,{})})]})]}),e.jsxs("div",{className:"analyzer-actions",children:[e.jsx("button",{type:"button",className:`btn analyzer-btn ${n?"analyzing":""}`,onClick:f,disabled:a||n||!t,children:n?e.jsxs(e.Fragment,{children:[e.jsx(et,{className:"spinner"}),"Analyzing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Pe,{}),"Analyze Content"]})}),c&&e.jsxs("div",{className:"analyzer-error",children:[e.jsx(tr,{}),e.jsx("span",{children:c})]})]}),i&&e.jsxs("div",{className:"analyzer-details",children:[e.jsxs("div",{className:"feature-pills",children:[e.jsxs("span",{className:"feature-pill",children:[e.jsx("span",{className:"pill-icon",children:"🎯"}),"Smart Detection"]}),e.jsxs("span",{className:"feature-pill",children:[e.jsx("span",{className:"pill-icon",children:"🏷️"}),"Auto Tagging"]}),e.jsxs("span",{className:"feature-pill",children:[e.jsx("span",{className:"pill-icon",children:"📝"}),"Summarization"]})]}),e.jsx("p",{className:"details-text",children:"AI visits the URL and extracts key information to suggest relevant content metadata."})]})]})};xt.propTypes={url:h.string.isRequired,onAnalysisComplete:h.func.isRequired,disabled:h.bool};const vt=({isOpen:t,onClose:r,aiAnalysis:a,onApplySuggestions:n,processingTime:o})=>{const[c,s]=x.useState({title:!0,platform:!0,type:!0,tags:!0,summary:!0}),[i,g]=x.useState({title:"",platform:"",type:"",tags:[],summary:""});x.useEffect(()=>{t&&a&&g({title:a.suggestedTitle||"",platform:a.suggestedPlatform||"",type:a.suggestedType||"",tags:Array.isArray(a.suggestedTags)?a.suggestedTags:[],summary:a.generatedSummary||""})},[t,a]);const f=u=>{s(v=>({...v,[u]:!v[u]}))},d=(u,v)=>{g(p=>({...p,[u]:v}))},l=u=>{const v=u.split(",").map(p=>p.trim()).filter(p=>p.length>0).slice(0,3);g(p=>({...p,tags:v}))},y=()=>{const u={},v=[];Object.keys(c).forEach(p=>{c[p]&&(u[p]=i[p],v.push(p))}),n(u,v),r()};if(!t)return null;const m=(u,v,p="text",j=null)=>e.jsxs("div",{className:"suggestion-item",children:[e.jsx("div",{className:"suggestion-header",children:e.jsxs("label",{className:"suggestion-checkbox",children:[e.jsx("input",{type:"checkbox",checked:c[u],onChange:()=>f(u)}),e.jsx("span",{className:"checkmark"}),v]})}),p==="textarea"?e.jsx("textarea",{value:i[u],onChange:w=>d(u,w.target.value),className:"suggestion-textarea",placeholder:`AI generated ${v.toLowerCase()}`,rows:"3"}):p==="select"?e.jsx("select",{value:i[u],onChange:w=>d(u,w.target.value),className:"suggestion-input",children:j.map(w=>e.jsx("option",{value:w,children:w.charAt(0).toUpperCase()+w.slice(1)},w))}):e.jsx("input",{type:"text",value:u==="tags"?i[u].join(", "):i[u],onChange:w=>u==="tags"?l(w.target.value):d(u,w.target.value),className:"suggestion-input",placeholder:u==="tags"?"max 3, comma-separated":`${v.toLowerCase()} ${u==="title"?"title":u==="platform"?"name":""}`})]},u);return e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"modal-content ai-suggestions-modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-title",children:[e.jsx("span",{className:"modal-icon",children:"✨"}),e.jsx("h3",{children:"AI Analysis Results"})]}),e.jsx("button",{className:"modal-close",onClick:r,children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("div",{className:"analysis-meta",children:e.jsxs("span",{className:"processing-time",children:["Analysis completed in ",o,"ms"]})}),e.jsxs("div",{className:"suggestions-container",children:[m("title","Title"),m("platform","Platform"),m("type","Type","select",Object.values(ee)),m("tags","Tags"),m("summary","Summary","textarea")]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn modal-btn-secondary",onClick:r,children:"Cancel"}),e.jsx("button",{className:"btn modal-btn-primary",onClick:y,children:"Apply Selected"})]})]})})};vt.propTypes={isOpen:h.bool.isRequired,onClose:h.func.isRequired,aiAnalysis:h.object,onApplySuggestions:h.func.isRequired,processingTime:h.number};const Le=I.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem;
  box-shadow: var(--shadow-2);

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-title {
    margin-bottom: 2rem;
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.025em;
    text-transform: none;
    line-height: 1.2;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .form-section {
    background: var(--background-color);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    border: 1px solid var(--grey-100);
  }

  .section-title {
    color: var(--text-secondary-color);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.75rem;
    letter-spacing: -0.01em;
    text-transform: none;
  }

  .form-row-flex {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr;
      align-items: center;
      column-gap: 1rem;
    }

    .form-row-flex {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1120px) {
    .form {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`,sa=t=>async({request:r})=>{const a=await r.formData(),n=Object.fromEntries(a),c=["title","url","resourceStatus","resourceType"].filter(s=>!n[s]);if(c.length>0)return b.error(`Please provide ${c.join(", ")}`),null;try{return await E.post("/resources",n),t.invalidateQueries(["resources"]),b.success("Resource added successfully"),_("/dashboard/all-resources")}catch(s){return b.error(s?.response?.data?.msg),s}},na=()=>{const[t,r]=x.useState({title:"",url:"",platform:"",resourceType:ee.ARTICLE,resourceStatus:oe.TO_READ,tags:"",notes:""}),[a,n]=x.useState(null),[o,c]=x.useState(!1),[s,i]=x.useState(!1),g=(l,y)=>{r(m=>({...m,[l]:y}))},f=l=>{l.success&&(n(l.data),c(!0))},d=async(l,y)=>{try{const m={...t};l.title&&(m.title=l.title),l.platform&&(m.platform=l.platform),l.type&&(m.resourceType=l.type),l.tags&&(m.tags=Array.isArray(l.tags)?l.tags.join(", "):l.tags),l.summary&&(m.notes=l.summary),r(m),a?.analysisId&&await E.put(`/ai-analysis/${a.analysisId}/usage`),c(!1),b.success(`Applied ${y.length} AI suggestions successfully!`)}catch{b.error("Failed to apply suggestions, but you can still use them manually"),c(!1)}};return e.jsxs(Le,{children:[e.jsxs(J,{method:"post",className:"form",onSubmit:()=>i(!0),children:[e.jsx("h4",{className:"form-title",children:"Add New Resource"}),e.jsxs("div",{className:"form-center",children:[e.jsxs("div",{className:"form-section",children:[e.jsx("h5",{className:"section-title",children:"Required Information"}),e.jsx(T,{type:"text",name:"title",labelText:"Title *",value:t.title,onChange:l=>g("title",l.target.value),required:!0}),e.jsx(T,{type:"url",name:"url",labelText:"URL *",value:t.url,onChange:l=>g("url",l.target.value),required:!0}),e.jsx(xt,{url:t.url,onAnalysisComplete:f,disabled:s}),e.jsxs("div",{className:"form-row-flex",children:[e.jsx(F,{labelText:"Status *",name:"resourceStatus",value:t.resourceStatus,onChange:l=>g("resourceStatus",l.target.value),defaultValue:oe.TO_READ,list:Object.values(oe),required:!0}),e.jsx(F,{labelText:"Type *",name:"resourceType",value:t.resourceType,onChange:l=>g("resourceType",l.target.value),defaultValue:ee.ARTICLE,list:Object.values(ee),required:!0})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("h5",{className:"section-title",children:"Additional Information"}),e.jsx(T,{type:"text",name:"platform",labelText:"Platform",value:t.platform,onChange:l=>g("platform",l.target.value)}),e.jsx(T,{type:"text",name:"tags",labelText:"Tags",value:t.tags,onChange:l=>g("tags",l.target.value),placeholder:"Separate tags with commas"}),e.jsx(T,{type:"textarea",name:"notes",labelText:"Notes",value:t.notes,onChange:l=>g("notes",l.target.value),rows:"10"})]}),e.jsx(le,{formBtn:!0,disabled:s}),Object.entries(t).map(([l,y])=>e.jsx("input",{type:"hidden",name:l,value:y},l))]})]}),e.jsx(vt,{isOpen:o,onClose:()=>c(!1),aiAnalysis:a?.aiAnalysis,onApplySuggestions:d,processingTime:a?.processingTime})]})},oa=async()=>{try{return(await E.get("/users/admin/app-stats")).data}catch{return b.error("You are not authorized to view this page"),_("/dashboard")}},ia=()=>{const{users:t,resources:r}=Ie();return e.jsxs(lt,{children:[e.jsx(Ne,{title:"current users",count:t,color:"#e9b949",bcg:"#fcefc7",icon:e.jsx(ur,{})}),e.jsx(Ne,{title:"total resources",count:r,color:"#647acb",bcg:"#e0e8f9",icon:e.jsx(Ke,{})})]})},ca=t=>async({params:r})=>{try{await E.delete(`/resources/${r.id}`),t.invalidateQueries(["resources"]),b.success("Resource deleted successfully")}catch(a){b.error(a?.response?.data?.msg)}return _("/dashboard/all-resources")},bt=t=>({queryKey:["resource",t],queryFn:async()=>{const{data:r}=await E.get(`/resources/${t}`);return r}}),la=t=>async({params:r})=>{try{return await t.ensureQueryData(bt(r.id)),r.id}catch(a){return b.error(a?.response?.data?.msg),_("/dashboard/all-resources")}},da=t=>async({request:r,params:a})=>{const n=await r.formData(),o=Object.fromEntries(n);try{return await E.patch(`/resources/${a.id}`,o),t.invalidateQueries(["resources"]),b.success("Resource edited successfully"),_("/dashboard/all-resources")}catch(c){return b.error(c?.response?.data?.msg),c}},ua=()=>{const t=Ie(),{data:{resource:r}}=ie(bt(t));return e.jsx(Le,{children:e.jsxs(J,{method:"post",className:"form",children:[e.jsx("h4",{className:"form-title",children:"Edit Resource"}),e.jsxs("div",{className:"form-center",children:[e.jsx(T,{type:"text",name:"title",defaultValue:r.title}),e.jsx(T,{type:"text",name:"platform",defaultValue:r.platform}),e.jsx(T,{type:"url",name:"url",labelText:"resource URL",defaultValue:r.url}),e.jsx(T,{type:"text",name:"tags",labelText:"tags (comma separated)",defaultValue:r.tags.join(", ")}),e.jsx(F,{name:"resourceStatus",labelText:"resource status",defaultValue:r.resourceStatus,list:Object.values(oe)}),e.jsx(F,{name:"resourceType",labelText:"resource type",defaultValue:r.resourceType,list:Object.values(ee)}),e.jsx(T,{type:"textarea",name:"notes",defaultValue:r.notes,rows:"3"}),e.jsx(le,{formBtn:!0})]})]})})},We=I.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,ma="/assets/not-found-CLvqtPfN.svg",ga=()=>Tt().status===404?e.jsx(We,{children:e.jsxs("div",{children:[e.jsx("img",{src:ma,alt:"not found"}),e.jsx("h3",{children:"Ohh! page not found"}),e.jsx("p",{children:"we can't seem to find the page you are looking for"}),e.jsx(W,{to:"/dashboard",children:"back home"})]})}):e.jsx(We,{children:e.jsx("div",{children:e.jsx("h3",{children:"something went wrong"})})}),pa=()=>e.jsx(e.Fragment,{children:e.jsx(Ye,{})}),ha=I.main`
  .page {
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Theme Toggle Button */
  .theme-toggle-btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    color: var(--grey-700);
    font-size: 1.1rem;
  }

  /* Dark mode theme toggle styling */
  .dark-theme .theme-toggle-btn {
    background: rgba(63, 63, 63, 0.9);
    color: var(--grey-300);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .theme-toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }

  .dark-theme .theme-toggle-btn:hover {
    background: rgba(79, 79, 79, 1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  .theme-toggle-btn:active {
    transform: translateY(0px);
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    background: var(--background-color);
    position: relative;
  }

  /* Light mode hero background */
  body:not(.dark-theme) .hero-section {
    background: linear-gradient(135deg, 
      rgba(247, 148, 30, 0.03) 0%, 
      rgba(255, 255, 255, 1) 50%, 
      rgba(247, 148, 30, 0.02) 100%);
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(247, 148, 30, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  /* Hide decorative gradients in dark mode */
  .dark-theme .hero-section::before {
    display: none;
  }

  .info {
    padding-top: 2rem;
    z-index: 1;
  }

  .title-container {
    margin-bottom: 2rem;
  }

  h1 {
    font-weight: 700;
    color: var(--primary-500);
    font-size: 4.5rem;
    letter-spacing: -1px;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .subtitle {
    font-weight: 500;
    color: var(--text-secondary-color);
    font-size: 2rem;
    margin: 0.75rem 0 0 0;
    line-height: 1.2;
    white-space: nowrap;
  }

  .description {
    line-height: 1.8;
    color: var(--text-secondary-color);
    margin: 1.5rem 0;
    font-size: 1.2rem;
    max-width: 35em;
  }

  .btn-container {
    display: flex;
    gap: 1.5rem;
    margin: 3rem 0;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .register-link {
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.3);
  }

  .login-link {
    background: linear-gradient(135deg, var(--grey-700), var(--grey-800));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .register-link:hover {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(247, 148, 30, 0.4);
  }

  .login-link:hover {
    background: linear-gradient(135deg, var(--grey-800), var(--grey-900));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    display: none;
    position: relative;
    z-index: 1;
  }

  .main-img {
    width: 100%;
    height: auto;
    max-width: 700px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  }

  /* Features Section - Improved Visual Hierarchy */
  .features-section {
    padding: 8rem 2rem;
    background: var(--background-color);
    position: relative;
  }

  /* Light mode features background */
  body:not(.dark-theme) .features-section {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 1) 0%, 
      rgba(248, 250, 252, 1) 100%);
  }

  .features-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .features-header h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .features-header p {
    font-size: 1.2rem;
    color: var(--text-secondary-color);
    line-height: 1.6;
    margin: 0;
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
    padding: 2.5rem;
    background: var(--background-secondary-color);
    border-radius: 20px;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-2);
    border: 1px solid var(--grey-200);
  }

  /* Light mode feature styling */
  body:not(.dark-theme) .feature {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .feature:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-4);
    border-color: var(--primary-300);
  }

  /* Light mode feature hover */
  body:not(.dark-theme) .feature:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(247, 148, 30, 0.2);
  }

  .feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
  }

  .feature-icon {
    font-size: 2rem;
    padding: 1rem;
    background: var(--primary-50);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.1);
    min-width: 60px;
    text-align: center;
    color: var(--primary-500);
  }

  /* Dark mode feature icon */
  .dark-theme .feature-icon {
    background: var(--primary-900);
    color: var(--primary-300);
  }

  .feature h3 {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
  }

  .feature p {
    color: var(--text-secondary-color);
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    text-align: left;
    width: 100%;
  }

  /* CTA Section - Enhanced Visual Distinction */
  .cta-section {
    padding: 8rem 2rem;
    background: var(--background-color);
    text-align: center;
    position: relative;
  }

  /* Light mode CTA background - distinct from features */
  body:not(.dark-theme) .cta-section {
    background: linear-gradient(135deg, 
      rgba(247, 148, 30, 0.02) 0%, 
      rgba(255, 255, 255, 1) 50%, 
      rgba(247, 148, 30, 0.03) 100%);
  }

  /* Dark mode CTA background - darkest section */
  .dark-theme .cta-section {
    background: var(--dark-mode-bg-color);
  }

  /* CTA Section decorative overlay */
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(247, 148, 30, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Hide CTA overlay in dark mode */
  .dark-theme .cta-section::before {
    display: none;
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .cta-content h2 {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .cta-content p {
    font-size: 1.1rem;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .cta-btn {
    background: var(--primary-500);
    color: white;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.15);
    border: none;
  }

  .cta-btn:hover {
    background: var(--primary-600);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(247, 148, 30, 0.25);
  }

  .cta-btn:active {
    transform: translateY(0px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .theme-toggle-btn {
      top: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
      font-size: 1rem;
      border-radius: 50%;
    }

    .features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .features-header h2 {
      font-size: 2.2rem;
    }

    h1 {
      font-size: 3.5rem;
    }

    .subtitle {
      font-size: 1.6rem;
      white-space: normal;
    }

    .features-section {
      padding: 6rem 1.5rem;
    }

    .cta-section {
      padding: 6rem 1.5rem;
    }

    .cta-content h2 {
      font-size: 1.8rem;
    }

    .cta-content p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .cta-btn {
      padding: 0.9rem 2rem;
      font-size: 0.95rem;
    }
  }

  @media (min-width: 992px) {
    .hero-section {
      grid-template-columns: 1fr 500px;
      gap: 4rem;
      padding: 2rem 4rem;
      align-items: center;
    }

    .info {
      max-width: none;
      grid-column: 1;
      padding-top: 0;
    }

    .image-container {
      display: block;
      grid-column: 2;
      align-self: center;
      padding-top: 2rem;
    }

    .features-section {
      padding: 8rem 4rem;
    }

    .cta-section {
      padding: 8rem 4rem;
    }

    .main-img {
      max-width: 500px;
      min-width: 400px;
    }
  }

  @media (min-width: 1200px) {
    .hero-section {
      gap: 6rem;
      padding: 2rem 6rem;
      grid-template-columns: 1fr 550px;
    }

    h1 {
      font-size: 5.5rem;
    }

    .subtitle {
      font-size: 2.2rem;
    }

    .features-section {
      padding: 10rem 6rem;
    }

    .cta-section {
      padding: 8rem 6rem;
    }

    .cta-content h2 {
      font-size: 2.5rem;
    }

    .cta-content p {
      font-size: 1.2rem;
    }

    .cta-btn {
      padding: 1.1rem 3rem;
      font-size: 1.05rem;
    }

    .main-img {
      max-width: 550px;
      min-width: 450px;
    }

    .features {
      gap: 3rem;
      max-width: 1200px;
    }

    .feature {
      padding: 3rem;
    }
  }
`,fa="/assets/main-DLIaDPZR.svg",xa=()=>{const[t,r]=x.useState(Me()),a=()=>{const n=!t;r(n),document.body.classList.toggle("dark-theme",n),localStorage.setItem("darkTheme",n)};return x.useEffect(()=>{document.body.classList.toggle("dark-theme",t)},[]),e.jsx(ha,{children:e.jsxs("div",{className:"page",children:[e.jsx("button",{className:"theme-toggle-btn",onClick:a,"aria-label":"Toggle dark theme",children:t?e.jsx(it,{}):e.jsx(ot,{})}),e.jsxs("section",{className:"hero-section",children:[e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"title-container",children:[e.jsx("h1",{children:"KeepHub"}),e.jsx("h2",{className:"subtitle",children:"Your Digital Knowledge Vault"})]}),e.jsx("p",{className:"description",children:"Organize your learning journey in one place. Save and manage articles, videos, courses, and tools with ease. Never lose valuable resources again."}),e.jsxs("div",{className:"btn-container",children:[e.jsx(W,{to:"/register",className:"btn register-link",children:"Get Started Free"}),e.jsx(W,{to:"/login",className:"btn login-link",children:"Login / Demo"})]})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:fa,alt:"KeepHub Digital Knowledge Management",className:"main-img"})})]}),e.jsxs("section",{className:"features-section",children:[e.jsxs("div",{className:"features-header",children:[e.jsx("h2",{children:"Powerful Features for Modern Learners"}),e.jsx("p",{children:"Everything you need to manage your digital knowledge effectively"})]}),e.jsxs("div",{className:"features",children:[e.jsxs("div",{className:"feature",children:[e.jsxs("div",{className:"feature-header",children:[e.jsx("span",{className:"feature-icon",children:"📚"}),e.jsx("h3",{children:"Smart Organization"})]}),e.jsx("p",{children:"Categorize and tag your resources for quick access anytime."})]}),e.jsxs("div",{className:"feature",children:[e.jsxs("div",{className:"feature-header",children:[e.jsx("span",{className:"feature-icon",children:"🎯"}),e.jsx("h3",{children:"Progress Tracking"})]}),e.jsx("p",{children:"Mark resources as to-read, in-progress, or completed to stay organized."})]}),e.jsxs("div",{className:"feature",children:[e.jsxs("div",{className:"feature-header",children:[e.jsx("span",{className:"feature-icon",children:"🔍"}),e.jsx("h3",{children:"Powerful Search"})]}),e.jsx("p",{children:"Find any saved resource instantly with advanced search and filtering."})]}),e.jsxs("div",{className:"feature",children:[e.jsxs("div",{className:"feature-header",children:[e.jsx("span",{className:"feature-icon",children:"🤖"}),e.jsx("h3",{children:"AI Content Analysis"})]}),e.jsx("p",{children:"Automatically extract titles, tags, and summaries from any URL."})]})]})]}),e.jsx("section",{className:"cta-section",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{children:"Ready to Get Started?"}),e.jsx("p",{children:"Join the community of organized learners today"}),e.jsx(W,{to:"/register",className:"btn cta-btn",children:"Create Your Account"})]})})]})})},yt=I.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`,va=t=>async({request:r})=>{const a=await r.formData(),n=Object.fromEntries(a);try{return await E.post("/auth/login",n),t.invalidateQueries(),b.success("Login successful"),_("/dashboard")}catch(o){return b.error(o?.response?.data?.msg),o}},ba=()=>{const t=Te(),r=async()=>{const a={email:"test@test.com",password:"secret123"};try{await E.post("/auth/login",a),b.success("Take a test drive"),t("/dashboard")}catch(n){b.error(n?.response?.data?.msg)}};return e.jsx(yt,{children:e.jsxs(J,{method:"post",className:"form",children:[e.jsx(ce,{}),e.jsx("h4",{children:"login"}),e.jsx(T,{type:"email",name:"email"}),e.jsx(T,{type:"password",name:"password"}),e.jsx(le,{}),e.jsx("button",{type:"button",className:"btn btn-block",onClick:r,children:"explore the app"}),e.jsxs("p",{children:["Not a member yet?",e.jsx(W,{to:"/register",className:"member-btn",children:"Register"})]})]})})},ya=t=>async({request:r})=>{const a=await r.formData(),n=a.get("avatar");if(n&&n.size>5e5)return b.error("Image size too large"),null;try{return await E.patch("/users/update-user",a),t.invalidateQueries(["user"]),b.success("Profile updated successfully"),_("/dashboard")}catch(o){return b.error(o?.response?.data?.msg),null}},ja=()=>{const{user:t}=It(),{name:r,lastName:a,email:n}=t;return e.jsx(Le,{children:e.jsxs(J,{method:"post",className:"form",encType:"multipart/form-data",children:[e.jsx("h4",{className:"form-title",children:"Profile Settings"}),e.jsxs("div",{className:"form-center",children:[e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"avatar",className:"form-label",children:"Select an image file (max 0.5 MB):"}),e.jsx("input",{type:"file",id:"avatar",name:"avatar",className:"form-input",accept:"image/*"})]}),e.jsx(T,{type:"text",name:"name",defaultValue:r}),e.jsx(T,{type:"text",name:"lastName",labelText:"last name",defaultValue:a}),e.jsx(T,{type:"email",name:"email",defaultValue:n}),e.jsx(le,{formBtn:!0})]})]})})},wa=async({request:t})=>{const r=await t.formData(),a=Object.fromEntries(r);try{return await E.post("/auth/register",a),b.success("Registration successful"),_("/login")}catch(n){return b.error(n?.response?.data?.msg),n}},za=()=>e.jsx(yt,{children:e.jsxs(J,{method:"post",className:"form",children:[e.jsx(ce,{}),e.jsx("h4",{children:"Register"}),e.jsx(T,{type:"text",name:"name"}),e.jsx(T,{type:"text",name:"lastName",labelText:"last name"}),e.jsx(T,{type:"email",name:"email"}),e.jsx(T,{type:"password",name:"password"}),e.jsx(le,{}),e.jsxs("p",{children:["Already a member?",e.jsx(W,{to:"/login",className:"member-btn",children:"Login"})]})]})}),Ca=I.section`
  position: relative;
  z-index: 1;
  max-width: 100%;
  overflow: hidden;

  .stats-overview {
    margin-bottom: 2rem;
  }

  .stats-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    .full-width {
      grid-column: 1 / -1;
    }
    
    .half-width {
      grid-column: span 1;
    }
  }

  .chart-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1rem 1.25rem;
    box-shadow: var(--shadow-2);
    border: 1px solid var(--grey-100);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
  }

  .chart-container:hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-2px);
    z-index: 5;
  }

  @media (max-width: 767px) {
    .half-width,
    .full-width {
      grid-column: 1;
    }
  }

  /* Ensure recharts components have controlled z-index */
  .recharts-wrapper {
    max-width: 100% !important;
    position: relative !important;
    z-index: 1 !important;
  }

  .recharts-surface {
    overflow: visible !important;
    z-index: 1 !important;
  }

  .recharts-tooltip-wrapper {
    z-index: 10 !important;
    position: absolute !important;
  }

  .recharts-legend-wrapper {
    z-index: 2 !important;
  }

  .chart-title {
    color: var(--text-color);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  .chart-subtitle {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .loading-container {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary-color);
    font-style: italic;
  }

  .progress-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .progress-item {
    text-align: center;
    padding: 1rem;
    background: var(--grey-50);
    border-radius: var(--border-radius);
  }

  .progress-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-500);
    display: block;
  }

  .progress-label {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`,jt={queryKey:["stats"],queryFn:async()=>(await E.get("/resources/stats")).data},Na=t=>async()=>(await t.ensureQueryData(jt),null),ka=()=>{const{data:t}=ie(jt),{defaultStats:r,monthlyAdditions:a,resourceTypeStats:n,popularTags:o}=t;return e.jsxs(Ca,{children:[e.jsx("div",{className:"stats-overview",children:e.jsx(dt,{defaultStats:r})}),e.jsxs("div",{className:"stats-grid",children:[a?.length>0&&e.jsx("div",{className:"chart-container full-width",children:e.jsx(_r,{data:a})}),n?.length>0&&e.jsx("div",{className:"chart-container half-width",children:e.jsx(ut,{data:n,title:"Resource Type Distribution"})}),o?.length>0&&e.jsx("div",{className:"chart-container half-width",children:e.jsx(mt,{tagStats:o})})]})]})},B=new Ft({defaultOptions:{queries:{staleTime:1e3*60*5}}}),Me=()=>{const t=localStorage.getItem("darkTheme")==="true";return document.body.classList.toggle("dark-theme",t),t};Me();const Ta=Et([{path:"/",element:e.jsx(pa,{}),errorElement:e.jsx(ga,{}),children:[{index:!0,element:e.jsx(xa,{})},{path:"register",element:e.jsx(za,{}),action:wa},{path:"login",element:e.jsx(ba,{}),action:va(B)},{path:"dashboard",element:e.jsx(wr,{queryClient:B}),loader:jr(B),children:[{index:!0,element:e.jsx(na,{}),action:sa(B)},{path:"stats",element:e.jsx(ka,{}),loader:Na(B)},{path:"all-resources",element:e.jsx(Zr,{}),loader:Gr(B)},{path:"profile",element:e.jsx(ja,{}),action:ya(B)},{path:"admin",element:e.jsx(ia,{}),loader:oa},{path:"edit-resource/:id",element:e.jsx(ua,{}),loader:la(B),action:da(B)},{path:"delete-resource/:id",action:ca(B)}]}]}]),Ia=()=>e.jsx(_t,{client:B,children:e.jsx(Rt,{router:Ta})});Qt.createRoot(document.getElementById("root")).render(e.jsxs(e.Fragment,{children:[e.jsx(Ia,{}),e.jsx(Ce,{position:"top-center",autoClose:2e3})]}));
