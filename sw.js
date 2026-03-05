self.addEventListener('fetch', (event) => {
  // This just satisfies Chrome's requirement for a service worker
  event.respondWith(fetch(event.request));
});
