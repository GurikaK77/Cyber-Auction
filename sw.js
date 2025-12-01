const CACHE_NAME = 'auction-cyber-fast-v1'; // უნიკალური სახელი ამ პროექტისთვის
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css', 
  '/script.js',
  '/manifest.json',
  
  // თქვენს HTML-ში მე-7 ხაზზე მითითებულია ეს ფაილი:
  '/icons/icon-512x512.png', 

  // გარე რესურსები (ზუსტად ის ლინკები, რაც HTML-შია):
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap'
];

// 1. ინსტალაცია: ფაილების ჩაწერა (უსაფრთხო მეთოდით)
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[SW] AUCTION: Cache Opening & Preloading...');
      // სათითაოდ ვამატებთ, რომ თუ ერთი ფაილი არ გაქვთ (მაგ: აიქონი), სხვები მაინც ჩაიწეროს
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
        } catch (err) {
          console.log('[SW] ეს ფაილი ვერ ჩაიწერა (შესაძლოა არ არსებობს):', url);
        }
      }
    })
  );
});

// 2. აქტივაცია: ძველი ქეშის წაშლა (თუ ვერსიას შეცვლით)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  return self.clients.claim();
});

// 3. FETCH: სწრაფი გახსნა (ჯერ ქეში, მერე ინტერნეტი)
self.addEventListener('fetch', e => {
  // მხოლოდ GET მოთხოვნებზე ვმუშაობთ
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(e.request).then(cachedResponse => {
        // 1. ვიწყებთ ინტერნეტიდან წამოღებას (რომ ქეში განახლდეს)
        const fetchPromise = fetch(e.request)
          .then(networkResponse => {
            // თუ ინტერნეტიდან წარმატებით წამოვიდა, ვაახლებთ ქეშს
            if(networkResponse && networkResponse.status === 200) {
               cache.put(e.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
             // ინტერნეტი არ არის? არაუშავს.
             console.log('Offline mode: network fetch failed');
          });

        // 2. ვუბრუნებთ მომხმარებელს პასუხს:
        // თუ ქეშშია - ეგრევე ქეშს (სისწრაფისთვის), თუ არა - ველოდებით ინტერნეტს
        return cachedResponse || fetchPromise;
      });
    })
  );
});
