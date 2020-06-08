self.addEventListener("install", function (e) {
  e.waitUntil(
    caches
      .open("jacobclark.xyz")
      .then(function (cache) {
        const res = cache.addAll([
          "/",
          "index.html",
          "dist/main.css",
          "dist/bundle.js",
        ]);
        
        return res;
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
  );
});
