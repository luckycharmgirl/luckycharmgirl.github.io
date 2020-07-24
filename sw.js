const staticCacheName = 'site-static-v1';
const assets = [ '/',
 '/icons/car.gif',
 '/icons/image.gif',
 '/icons/lightbulb.gif', 
 '/icons/pencil.gif',
 'https://cdn.plyr.io/3.6.2/plyr.js',
 'https://cdn.plyr.io/3.6.2/plyr.css',
 '/lib/highlight.pack.js',
 '/lib/a11y-dark.css',
 '/lib/darcula.css',
 '/lib/siema.js',
 '/lib/slb.js',
 '/lib/slb.css'
];



self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});


self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});


self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});