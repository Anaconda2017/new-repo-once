
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs",
    "route": "/en/blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs/:id",
    "route": "/en/blogs/*"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6I6V3E7A.js",
      "chunk-XSN7N5J5.js",
      "chunk-7I6OVKYY.js",
      "chunk-TR4XQPHC.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BD5FUVQX.js",
      "chunk-I5A3UUKN.js",
      "chunk-5IY2TX7K.js",
      "chunk-TR4XQPHC.js"
    ],
    "route": "/*/projects-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6O3TRBRZ.js",
      "chunk-QE4PRNKN.js",
      "chunk-TR4XQPHC.js"
    ],
    "route": "/*/services"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MFXT55Y6.js",
      "chunk-I5A3UUKN.js",
      "chunk-5IY2TX7K.js",
      "chunk-TR4XQPHC.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-25PXVNVF.js",
      "chunk-6ZEWLLZI.js",
      "chunk-ALQCY26X.js",
      "chunk-QE4PRNKN.js",
      "chunk-L6RYWB46.js",
      "chunk-XSN7N5J5.js",
      "chunk-TR4XQPHC.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KWOECZ5H.js",
      "chunk-6ZEWLLZI.js",
      "chunk-QE4PRNKN.js",
      "chunk-7I6OVKYY.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JLJ7QJSW.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JLJ7QJSW.js"
    ],
    "route": "/*/blogs/blogs-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-APGZOOO4.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CHFN27VY.js"
    ],
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16032, hash: '2b855e1a37dc8effe7380363ed0e15cde1d6559cb7705b688ec8cf50b84f6e8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4686, hash: 'd4365fdd8a8558b82d48ccb245d84638388ba6ec0ad39787431ebd3274a01b81', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KJAQBUR5.css': {size: 146381, hash: '/FCWedSqGlo', text: () => import('./assets-chunks/styles-KJAQBUR5_css.mjs').then(m => m.default)}
  },
};
