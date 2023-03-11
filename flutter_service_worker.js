'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "b404b2ef26a75253c3c322c586112449",
"canvaskit/canvaskit.wasm": "2abf88817938cca7761a56861f3cfd1a",
"canvaskit/profiling/canvaskit.js": "79bb5d744b0bec63ab46eddfd6b52546",
"canvaskit/profiling/canvaskit.wasm": "5886b7db0562bf9d812900ab17ad2b1e",
"main.dart.js": "9c4d6c757e762f599dd155d8bf930e1b",
"iconsFvo/ms-icon-310x310.png": "95afcff535d49266bf63d4e20e2f2678",
"iconsFvo/apple-icon-144x144.png": "795afacd87ad0562dc48f0ff14ed1dee",
"iconsFvo/android-icon-192x192.png": "4122ec9e2b3139aeb58299282b88ac2e",
"iconsFvo/apple-icon-57x57.png": "9dc9427749579d2f4bb5e4bea5ef51b1",
"iconsFvo/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"iconsFvo/apple-icon-precomposed.png": "67f4db6b240192e623dd5d4dd7a87e9a",
"iconsFvo/apple-icon-60x60.png": "674d699a8e016e5a80ed38fb04e1fe3e",
"iconsFvo/ms-icon-70x70.png": "a2d669a615e11936a82698935c517b20",
"iconsFvo/android-icon-36x36.png": "0914774e83a3a31980086ca9adac73b1",
"iconsFvo/apple-icon-72x72.png": "5317a703ed9bdf100683bcfd7aa9600e",
"iconsFvo/android-icon-144x144.png": "795afacd87ad0562dc48f0ff14ed1dee",
"iconsFvo/android-icon-96x96.png": "abde5ea59a2aa9a6f86ccfb405ad7a40",
"iconsFvo/favicon-96x96.png": "abde5ea59a2aa9a6f86ccfb405ad7a40",
"iconsFvo/android-icon-48x48.png": "84a9f17460bc67fecc5d3040f9384cba",
"iconsFvo/apple-icon-114x114.png": "9d2096accd011a6a091c2d951f63b396",
"iconsFvo/apple-icon.png": "67f4db6b240192e623dd5d4dd7a87e9a",
"iconsFvo/ms-icon-144x144.png": "795afacd87ad0562dc48f0ff14ed1dee",
"iconsFvo/apple-icon-120x120.png": "dc2a90f7824331804cc5ba98c3664a95",
"iconsFvo/apple-icon-152x152.png": "a022387361516852e5943d263380c562",
"iconsFvo/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"iconsFvo/android-icon-72x72.png": "5317a703ed9bdf100683bcfd7aa9600e",
"iconsFvo/apple-icon-76x76.png": "6809605699e41d9a01d03ccedf8f71ff",
"iconsFvo/apple-icon-180x180.png": "ec736a9b64c4260b23bcd604e60c3fe2",
"iconsFvo/ms-icon-150x150.png": "4fc556b922d8de81e28a5ecc54075e52",
"iconsFvo/favicon-16x16.png": "b5c7c359768f25cab2b850afdd7bc7fe",
"iconsFvo/favicon.ico": "7768f20219d3d5c2d99c87f3d84d9922",
"iconsFvo/favicon-32x32.png": "aa0f8f923580afaeb7937b1460e2e279",
"index.html": "6cbf85d5f35e7e46606c1572f24b7c7d",
"/": "6cbf85d5f35e7e46606c1572f24b7c7d",
"test/favicon.ico": "3d81724dda9b45fe19dc4cdb6b560eed",
"manifest.json": "ab2401e81d39ca5bc407372564d96fdc",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "e481b0abc414c97be3439cd114d4be8c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"assets/NOTICES": "d92b53ae45c27b6e94db3913bd69f798",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "460a54ea89c6a2dfe120d59efecc433d",
"assets/FontManifest.json": "424ca77ad9dfcc186e16552ad7fcd2b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/icons/icon_transparent.png": "e8b8b89acc78ef589159344f322bdde1",
"assets/assets/images/2Criminal.jpg": "4904a91e232aaeedc7518b071451da99",
"assets/assets/images/4Masoon.jpg": "40329ebb2f7550595d111722d0095af0",
"assets/assets/images/1Arya.jpg": "a3f2d3608270e6d8907f0ca092753e14",
"assets/assets/images/tree.png": "05640786fb17ece966ac1a938561211c",
"assets/assets/images/3Dahan.jpg": "412471d741c0970f59a94c6f13497a76",
"assets/assets/images/5MoonKnight.jpg": "856e29cd984fc8cdd95cbe7e25e06855",
"assets/assets/images/concept-1-1.png": "7da5283bf8b77489662e48ef20bc3b46",
"assets/assets/images/icon.png": "51169269ff198db122e415d88b3f9af2",
"assets/assets/images/about-us_img-1.png": "133f83a15b66f532ed046e54fca3a632"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
