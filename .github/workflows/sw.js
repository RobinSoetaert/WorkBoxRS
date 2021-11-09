import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

'use strict';

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'NukiPWA';
  const options = {
    body: 'Nuki Web Application NOTIFICATION.',
    icon: 'Pika1.jpg',
    badge: 'Pika1.jpg'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});