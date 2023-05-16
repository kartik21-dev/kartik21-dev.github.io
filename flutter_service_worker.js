'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "b404b2ef26a75253c3c322c586112449",
"canvaskit/canvaskit.wasm": "2abf88817938cca7761a56861f3cfd1a",
"canvaskit/profiling/canvaskit.js": "79bb5d744b0bec63ab46eddfd6b52546",
"canvaskit/profiling/canvaskit.wasm": "5886b7db0562bf9d812900ab17ad2b1e",
"main.dart.js": "76829e525d41dfc2c4c35eade7dc0541",
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
"index.html": "71cfece7664e860c75a63243d1fe2d43",
"/": "71cfece7664e860c75a63243d1fe2d43",
"test/favicon.ico": "3d81724dda9b45fe19dc4cdb6b560eed",
"manifest.json": "f1f25ccd6b4b743630c5ed3813beb24f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "e481b0abc414c97be3439cd114d4be8c",
"google_form.html": "d2df800c581962f0fb5f7967700e16ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"assets/NOTICES": "cb72dd8e73cf0cb220183873fdd750c3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "3dd4079efd023b7b6a2bf12ab81a646a",
"assets/FontManifest.json": "424ca77ad9dfcc186e16552ad7fcd2b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/icons/icon_transparent.png": "e8b8b89acc78ef589159344f322bdde1",
"assets/assets/images/wingicons/felogo.png": "9a02fc3a4aa8db7ef9aaf04e351f86f9",
"assets/assets/images/wingicons/hslogo1.png": "1954b0fd8b09fc658e1de5ff485368ea",
"assets/assets/images/wingicons/dhlogo.png": "df22456b0d00bf653eb9efc85af401a5",
"assets/assets/images/wingicons/cslogo.png": "f1049799737686e7006441eb3c9ff680",
"assets/assets/images/2Criminal.jpg": "4904a91e232aaeedc7518b071451da99",
"assets/assets/images/concept_1.png": "7da5283bf8b77489662e48ef20bc3b46",
"assets/assets/images/Feasy/1_incometaxreturn.jpg": "d37bce17e915f9050b973278152434b8",
"assets/assets/images/Feasy/2_gstreturn.jpg": "726e97476274fe30ac7c714218041e1f",
"assets/assets/images/Feasy/4_accountfinalization.jpg": "5ec8c19382749c3820d59aa47d522a58",
"assets/assets/images/Feasy/5_bookwriting.jpg": "bc418c1c0e051e551f3285b5aba080d9",
"assets/assets/images/Feasy/3_GSTregistration.jpg": "1466e5639ddc41d62804a22010432d14",
"assets/assets/images/Feasy/header_fe.png": "a07500d072eea3602087cee33e35e21a",
"assets/assets/images/Feasy/6_CSC_services.jpg": "4e870d8b8b5f1463d09edeba5a2c160f",
"assets/assets/images/4Masoon.jpg": "40329ebb2f7550595d111722d0095af0",
"assets/assets/images/heartandsoul/8_wedshot.jpg": "c8c5aba8f2d121924b53eb7be33183ca",
"assets/assets/images/heartandsoul/2_music_production.jpg": "25ad8f095444ed324bda9808d2cd927b",
"assets/assets/images/heartandsoul/1_event_mgmt.jpg": "fed0f5e3e4afbb26284725c2eb6e2947",
"assets/assets/images/heartandsoul/4_videoshoot.jpg": "3861a00570bea796112f8bfa1caf35b8",
"assets/assets/images/heartandsoul/6_photoshott.jpg": "ad4a582364911e1c54b63d262f5b2711",
"assets/assets/images/heartandsoul/12_filmprod.jpg": "38f8a663e5d28a781b4a3dd43dfb2917",
"assets/assets/images/heartandsoul/9_eventcrew.jpg": "b4b32ba7ec578790545559f012016e24",
"assets/assets/images/heartandsoul/5_live_stream.jpg": "ed6411044d80c5d82ba3f9a99beae1ee",
"assets/assets/images/heartandsoul/3_multi-camara_mix.jpg": "0698efe3dc34f6af4e1f12ced84a0949",
"assets/assets/images/heartandsoul/11_anime.jpg": "32c5ac1d38109cfb3511a2efc4abdc16",
"assets/assets/images/heartandsoul/10_ads.jpg": "ac3eb16dc74d395b22ffda2d31ad18ae",
"assets/assets/images/heartandsoul/header_hs.png": "52789b636468fc5eef4d23bf74a5c87d",
"assets/assets/images/heartandsoul/7_videoedit.jpg": "065cfcb67f8298b0dd02e0c38b0226e0",
"assets/assets/images/1Arya.jpg": "a3f2d3608270e6d8907f0ca092753e14",
"assets/assets/images/codespace/3_cybersecurity.jpg": "87183e39c99152493dd346d2e5b4f4b2",
"assets/assets/images/codespace/8_web_dev.jpg": "144e0b836ee934d896ebafe221d84bd0",
"assets/assets/images/codespace/2_it_counsulting.jpg": "2b2930305343b8ac578a3b3f9424232b",
"assets/assets/images/codespace/4_qaservice.jpg": "fe25621d4fdfbf8f001b29f5715cabed",
"assets/assets/images/codespace/7_software_dev.jpg": "35173199624ad6e17fd7cafef1c5fc01",
"assets/assets/images/codespace/1_cloudservice.jpg": "18c83e2ffe3092cc6e8c3b63d8022a21",
"assets/assets/images/codespace/6_SEO_service.jpg": "db308dfcf9f4c8c6bb672cdb1310ea10",
"assets/assets/images/codespace/5_enterprise_apps.jpg": "96edf4f070e51e8deb8a6064670d5a10",
"assets/assets/images/codespace/9_app_dev.jpg": "1f4fcd7e8df01cf5febd63b6dd57153a",
"assets/assets/images/tree.png": "05640786fb17ece966ac1a938561211c",
"assets/assets/images/Privacy.jpg": "a112f5ba661cd207ea619c18962ce6d5",
"assets/assets/images/3Dahan.jpg": "412471d741c0970f59a94c6f13497a76",
"assets/assets/images/TC.jpg": "047a7e400af4a522444b2a04d38c8c23",
"assets/assets/images/refund.jpg": "a80b9f62b1be8a9f5c9761fe64fd8609",
"assets/assets/images/5MoonKnight.jpg": "856e29cd984fc8cdd95cbe7e25e06855",
"assets/assets/images/paymentLogo.png": "039686f0bcbd9e7b397c5b5519fd133a",
"assets/assets/images/Contact.png": "75b84b95ec073a65218cb1635f1ec9b1",
"assets/assets/images/refundandbuy.png": "f60c8903d1844bcc62bc40818b4c3fd5",
"assets/assets/images/icon.png": "51169269ff198db122e415d88b3f9af2",
"assets/assets/images/about-us_img-1.png": "133f83a15b66f532ed046e54fca3a632",
"assets/assets/images/designhub/8_stationary_design.jpg": "570713593d1e3e995bfc2893b8424a95",
"assets/assets/images/designhub/10_socailmedia_mgmt.jpg": "a9daf59cd40ba2c1d2b418fc0c2f4110",
"assets/assets/images/designhub/16_photoshop.jpg": "1bf3e235e08c04eb106757eee022f3c6",
"assets/assets/images/designhub/9_ui_ux.jpg": "2eee8a35c1e2afbecddbf9e9cd5027de",
"assets/assets/images/designhub/15_flashandmotion.jpg": "4d9c298e3a474740794bc9a44bdf2882",
"assets/assets/images/designhub/14_creative_art.jpg": "7365c9a9d91657ba840001f2e7460c1e",
"assets/assets/images/designhub/2_digital_market.jpg": "0ebdced12176ad6f460be68d33c04551",
"assets/assets/images/designhub/13_layout_design.jpg": "a481cc19c81fb1378704f454acfd4c11",
"assets/assets/images/designhub/1_branding.jpg": "6849ef9eb8aca604fa836b16f59e5cfc",
"assets/assets/images/designhub/6_shirtprints.jpg": "b411b8752afcb4972a874f8ee6f32415",
"assets/assets/images/designhub/11_graphic_design.jpg": "e1e5e6a00481765a3f805262cd4f518e",
"assets/assets/images/designhub/header_dh.png": "133f83a15b66f532ed046e54fca3a632",
"assets/assets/images/designhub/5_presentation.jpg": "15f6aec8839d78708d73088e81426640",
"assets/assets/images/designhub/18_arch_design.jpg": "e8f9f9aaf00092b4f96a86c443219cc1",
"assets/assets/images/designhub/17_interior_design.jpg": "2774cd1598f07e4ab38faa9488945945",
"assets/assets/images/designhub/4_report.jpg": "c10a6316de8b53e167095faf234edef0",
"assets/assets/images/designhub/3_product_pack.jpg": "1c5bbc9b45fbbab48ba51edd5375bda6",
"assets/assets/images/designhub/12_web_design.jpg": "bdc591addfdd607fd507abfd4d7b3b52",
"assets/assets/images/designhub/7_illustration.jpg": "120b75e422d11b785824ebd14a67f4dc"
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
