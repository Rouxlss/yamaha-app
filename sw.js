const cacheName = 'yamaha-v1';
const staticAssets = [
    './',
    './index.html',
    './styles.css',
    './index.js',
    './manifest.webmanifest',
    './img/logo.png',
    './Avenir\ Next.ttc',

    //html files
    './agendar-cita.html',
    './detallesMtto.html',
    './mttosRealizados.html',
    './panel.html',
    './perfil.html',
    './solicitudEnviada.html',

    //img files
    './img/icon_32.png',
    './img/icon_64.png',
    './img/icon_96.png',
    './img/icon_128.png',
    './img/icon_192.png',
    './img/icon_256.png',
    './img/icon_512.png',
    './img/icon_1024.png',
    './img/icon-red01.png',
    './img/icon-red02.png',
    './img/icon-red03.png',
    './img/icon-red04.png',
    './img/icon01.png',
    './img/icon02.png',
    './img/icon03.png',
    './img/icon04.png',
    './img/logo2.png',
    './img/logo3.png',
    './img/logo4.png',
    './img/logo5.png',
    './img/moto1.png',
    './img/perfil.png',
    './img/tarjeta.png',
    './img/yamalube.png'

];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
  });
  
  self.addEventListener('activate', e => {
    self.clients.claim();
  });
  
  self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);
  
    if (url.origin === location.origin) {
      e.respondWith(cacheFirst(req));
    } else {
      e.respondWith(networkAndCache(req));
    }
  });
  
  async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
  }
  
  async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
      const fresh = await fetch(req);
      await cache.put(req, fresh.clone());
      return fresh;
    } catch (e) {
      const cached = await cache.match(req);
      return cached;
    }
  }
  