const CACHE_NAME = 'cyber-auction-dynamic-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-512x512.png', // დარწმუნდი რომ ეს ფაილი არსებობს
  // გარე რესურსები (ფონტები)
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Orbitron:wght@400;700&family=Rajdhani:wght@500;700&display=swap'
];

// 1. ინსტალაცია (ფაილების პირველადი ჩაწერა)
self.addEventListener('install', event => {
  self.skipWaiting(); // ახალი ვერსიის მყისიერი გააქტიურება
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. აქტივაცია (ძველი ქეშების გასუფთავება თუ სახელი შეიცვალა)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. მოთხოვნა (NETWORK FIRST სტრატეგია)
self.addEventListener('fetch', event => {
  // მხოლოდ GET მოთხოვნებზე ვრეაგირებთ
  if (event.request.method !== 'GET') return;

  event.respondWith(
    // ჯერ ვცდილობთ ინტერნეტიდან წამოღებას
    fetch(event.request)
      .then(networkResponse => {
        // თუ ინტერნეტი არის და პასუხი ვალიდურია:
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // ვაახლებთ ქეშს ახალი ვერსიით (რომ შემდეგ ოფლაინზე ახალი იყოს)
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      })
      .catch(() => {
        // თუ ინტერნეტი გათიშულია, ვიღებთ ქეშიდან
        return caches.match(event.request);
      })
  );
});