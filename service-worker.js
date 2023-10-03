self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('meu-cache')
        .then(function(cache) {
          return cache.addAll([
            '/images/warning.png',
            '/path/to/resource2',
            // Adicione mais recursos aqui
          ]);
        })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('https://ricardoleme.github.io/notificationAPI/') // URL para a página a ser aberta
    );
  });
  