'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "903da9323dbaa02950a73f4fc40b7709",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "f521fa5b4a7b3d52ba6eaba075639863",
"canvaskit/canvaskit.wasm": "34456e454de8aefe254d6c26245ad025",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"main.dart.js": "fe55cd9f04fa8fe3c216ac39d1a88daa",
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
"index.html": "97e6f19134909a3986e1d9aacdf0739b",
"/": "97e6f19134909a3986e1d9aacdf0739b",
"test/favicon.ico": "3d81724dda9b45fe19dc4cdb6b560eed",
"manifest.json": "f1f25ccd6b4b743630c5ed3813beb24f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "e481b0abc414c97be3439cd114d4be8c",
"google_form.html": "d2df800c581962f0fb5f7967700e16ea",
"favicon.png": "e8b8b89acc78ef589159344f322bdde1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"icons_backup/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons_backup/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons_backup/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons_backup/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons_backup/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/NOTICES": "b641be62fc240abf8c4d210b277960f1",
"assets/fonts/MaterialIcons-Regular.otf": "5f34ccd12fd7f6f8ad6bdd955d92de74",
"assets/AssetManifest.json": "db2923a75185ffedbcf1c79cb3f80696",
"assets/AssetManifest.bin": "d0832ef2f5e15d15d6a089b46486e16e",
"assets/FontManifest.json": "424ca77ad9dfcc186e16552ad7fcd2b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/icons/chat_icon.png": "ab0a8ced231eea19db2606c1c193dda2",
"assets/assets/icons/insta1.svg": "4237af4d7b0ef2fd2583722af1c797b3",
"assets/assets/icons/fb.svg": "d7194047807e8f47594ecdf8ad299ac7",
"assets/assets/icons/icon_transparent.png": "e8b8b89acc78ef589159344f322bdde1",
"assets/assets/icons/yt.svg": "eaa6c8f4b514da786a521565e50a688b",
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
"assets/assets/images/ourteamperson.png": "80ee214a5068c2e214d0204f0bb15e89",
"assets/assets/images/4Masoon.jpg": "40329ebb2f7550595d111722d0095af0",
"assets/assets/images/heartandsoul/8_wedshot.jpg": "c8c5aba8f2d121924b53eb7be33183ca",
"assets/assets/images/heartandsoul/2_music_production.jpg": "25ad8f095444ed324bda9808d2cd927b",
"assets/assets/images/heartandsoul/1_event_mgmt.jpg": "fed0f5e3e4afbb26284725c2eb6e2947",
"assets/assets/images/heartandsoul/4_videoshoot.jpg": "3861a00570bea796112f8bfa1caf35b8",
"assets/assets/images/heartandsoul/6_photoshott.jpg": "ad4a582364911e1c54b63d262f5b2711",
"assets/assets/images/heartandsoul/12_filmprod.jpg": "38f8a663e5d28a781b4a3dd43dfb2917",
"assets/assets/images/heartandsoul/learning.jpg": "047199e7e09ff6af81aab220a881a6a2",
"assets/assets/images/heartandsoul/9_eventcrew.jpg": "b4b32ba7ec578790545559f012016e24",
"assets/assets/images/heartandsoul/5_live_stream.jpg": "ed6411044d80c5d82ba3f9a99beae1ee",
"assets/assets/images/heartandsoul/hs_headimg.png": "3b510762f01a191ecc2a2f8405cea606",
"assets/assets/images/heartandsoul/3_multi-camara_mix.jpg": "0698efe3dc34f6af4e1f12ced84a0949",
"assets/assets/images/heartandsoul/11_anime.jpg": "32c5ac1d38109cfb3511a2efc4abdc16",
"assets/assets/images/heartandsoul/2Danimation.jpg": "08b4d289524d99cd73e18002887fbde4",
"assets/assets/images/heartandsoul/10_ads.jpg": "ac3eb16dc74d395b22ffda2d31ad18ae",
"assets/assets/images/heartandsoul/Infographics.jpg": "b32cb6b266639000e91b259b8aaa20b4",
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
"assets/assets/images/tree.png": "d92261d28958a70bec4b9a9a61e44d54",
"assets/assets/images/Privacy.jpg": "a112f5ba661cd207ea619c18962ce6d5",
"assets/assets/images/3Dahan.jpg": "412471d741c0970f59a94c6f13497a76",
"assets/assets/images/TC.jpg": "047a7e400af4a522444b2a04d38c8c23",
"assets/assets/images/icont.png": "e8b8b89acc78ef589159344f322bdde1",
"assets/assets/images/refund.jpg": "a80b9f62b1be8a9f5c9761fe64fd8609",
"assets/assets/images/products/visitcard/V_11.jpg": "800738c6427bb34fe2b871c254c53ed5",
"assets/assets/images/products/visitcard/V_04.jpg": "88c7d7306ead55c928697582e2fd4e37",
"assets/assets/images/products/visitcard/V_09.jpg": "60a159f046fd9daa8547704095452f55",
"assets/assets/images/products/visitcard/V_03.jpg": "5a97513eaadae52f8a291a39c0953a97",
"assets/assets/images/products/visitcard/V_05.jpg": "488799d40eb82914817a336342f11044",
"assets/assets/images/products/visitcard/V_13.jpg": "ba90702bb17fbebab823e3ad4374073c",
"assets/assets/images/products/visitcard/V_12.jpg": "9d94a5d05bb87660ff37a279c9138797",
"assets/assets/images/products/visitcard/V_02.jpg": "6e8e14c992f1f1c948883d6b0dc0ccf0",
"assets/assets/images/products/visitcard/V_01.jpg": "88988c04d204af8625bf31dccaf962bc",
"assets/assets/images/products/tshirts/007.jpg": "3787cc73df7adcaea39feb267f35399c",
"assets/assets/images/products/tshirts/008.jpg": "a4d0fa8488b17b6c2696a09f0f21ccd8",
"assets/assets/images/products/tshirts/005.jpg": "4f9674de7bc8fb0488438a1dd9e50012",
"assets/assets/images/products/tshirts/006.jpg": "a06f9a917b730bfa3d876c37a5715674",
"assets/assets/images/products/tshirts/002.jpg": "5f83a80cf9ee1049c2313a6e636a4831",
"assets/assets/images/products/tshirts/009.jpg": "1ee1e54292e50bab27a0e0299ec811de",
"assets/assets/images/products/tshirts/001.jpg": "86093c83567d9b4e8fbb9a3f5b1a37f8",
"assets/assets/images/products/tshirts/004.jpg": "22573491768ec26409f0f9614f747b27",
"assets/assets/images/products/tshirts/003.jpg": "9fa688ebf07efca5f610f9c5a76dccc3",
"assets/assets/images/products/headers/Poster_02.jpg": "eff9e7bff8a756f14760d97db87b3cd6",
"assets/assets/images/products/headers/Poster_01.jpg": "8260891ee51377863fee9a3b07e09f6c",
"assets/assets/images/products/headers/Poster_04.jpg": "3762d7c7105160bb5d24d7bd5cf18c67",
"assets/assets/images/products/headers/Poster_03.jpg": "e7aa41dd73d70397fb97fc7c92aa49a4",
"assets/assets/images/products/logo/Asian.jpg": "a5d304a2d5bffe9eb5d51da23b3ef47a",
"assets/assets/images/products/logo/contactnow.jpg": "b65f102668512cd68f9d06f6e7108300",
"assets/assets/images/products/logo/queendobe.jpg": "8fa7385d79627d14552cc1ed14bf67dd",
"assets/assets/images/products/logo/CapitalDigit.jpg": "b72288b73909da9aa7506dc493053be0",
"assets/assets/images/products/logo/AnilTiles.jpg": "36c4af5f37e4e0541f7c4615acf0e871",
"assets/assets/images/products/logo/primebuilder.jpg": "be6c1ad8e5546fe5bca4d9f689c81293",
"assets/assets/images/products/logo/ruhismakeover.jpg": "ee3473278e05e9a636ae5a7d9fbb0589",
"assets/assets/images/products/logo/Alteract.jpg": "29d25a2777ede29d1d05d5b01075a097",
"assets/assets/images/products/logo/Cafeinated.jpg": "b3320d27cd0bdb32348be8a9c13f7c9f",
"assets/assets/images/products/Flashing%2520Images_1.png": "d29f230f1b79952f328c567ec17173e7",
"assets/assets/images/products/flyers/F_06.jpg": "4ebfeafd7883ecdac9f9c2efb17e5a7b",
"assets/assets/images/products/flyers/F_02.jpg": "0574f7ca7bb52e82507955d22802613a",
"assets/assets/images/products/flyers/F_08.jpg": "533af92c250f4966fbdd7d3790cfc372",
"assets/assets/images/products/flyers/F_07.jpg": "ae5281ab047c660c058ddc6bb34fed49",
"assets/assets/images/products/flyers/F_03.jpg": "9c1928b41c28142e939ca08cbd7f7142",
"assets/assets/images/products/flyers/F_05.jpg": "7292ad4e8209e5bc1bd98b02b8635ce7",
"assets/assets/images/products/flyers/F_09.jpg": "09d93a373388d71123a9983dd532a8d9",
"assets/assets/images/products/flyers/F_04.jpg": "327860dba52a3162594468a072103bfe",
"assets/assets/images/products/flyers/F_01.jpg": "29bd0264f1a89c7bb5ae97cc19a3f313",
"assets/assets/images/products/Flashing%2520Images_02.png": "91030990d39db01ad4c2747857bc9adc",
"assets/assets/images/products/antiques/3_bedsidetable_2.png": "dba4ea7f2206b71f885162500dad9049",
"assets/assets/images/products/antiques/6_clasic_angel_chair.png": "bb86594a309399b894afb816d67930bc",
"assets/assets/images/products/antiques/1_player.png": "a9d5d332d557de6ac10781457975b930",
"assets/assets/images/products/antiques/2_bedsidetable_1.png": "27e4bb7bea0d08bed0f798b1475ae96a",
"assets/assets/images/products/antiques/7_rack.png": "477e2bf0cc4cac5dc2a2b8f3564cb086",
"assets/assets/images/products/antiques/9_magazinerack.png": "593e0d868baf4bfbcc6e7f30fcdcc206",
"assets/assets/images/products/antiques/5_chair.png": "2f109ad5ef315ee62b3be764489fa33c",
"assets/assets/images/products/antiques/8_damchi.png": "0f5bfeb9a54318f79a34716c16fd25f2",
"assets/assets/images/products/antiques/4_bowl.png": "88fcc1927a65d144d9939ff5894a592e",
"assets/assets/images/5MoonKnight.jpg": "856e29cd984fc8cdd95cbe7e25e06855",
"assets/assets/images/paymentLogo.png": "039686f0bcbd9e7b397c5b5519fd133a",
"assets/assets/images/Contact.png": "75b84b95ec073a65218cb1635f1ec9b1",
"assets/assets/images/refundandbuy.png": "f60c8903d1844bcc62bc40818b4c3fd5",
"assets/assets/images/postersformobilesize/m07.jpg": "01cd6c6da527b30beb87f14188a65cdb",
"assets/assets/images/postersformobilesize/m03.jpg": "13e6304d2d70aac093a479bb920f53cd",
"assets/assets/images/postersformobilesize/m06.jpg": "d91c00169089a35c374a166ffe0ac945",
"assets/assets/images/postersformobilesize/m05.jpg": "89900a924b0247f92a1ce0c7e66d8d4b",
"assets/assets/images/postersformobilesize/m04.jpg": "79d24206b2d8ff4038a8c5e56867851d",
"assets/assets/images/postersformobilesize/m08.jpg": "e09c297d5b1bdf689d8f980cce8f5dc2",
"assets/assets/images/postersformobilesize/slidingimg1.jpg": "3c61cc37a671744e71cf1966f74f5c54",
"assets/assets/images/postersformobilesize/m01.jpg": "7a7a3d0ab81739324ce95f24e46dac07",
"assets/assets/images/postersformobilesize/m02.jpg": "cbc7c0addab10c429b2d9670699c5429",
"assets/assets/images/postersformobilesize/mvbg.png": "a0469ba2039d6b09f27e2b2168dfb925",
"assets/assets/images/icon.png": "51169269ff198db122e415d88b3f9af2",
"assets/assets/images/Jublee6.jpg": "3b665fd528384f108c8a408cdb2f233b",
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
"assets/assets/images/designhub/5_presentation.jpg": "15f6aec8839d78708d73088e81426640",
"assets/assets/images/designhub/18_arch_design.jpg": "e8f9f9aaf00092b4f96a86c443219cc1",
"assets/assets/images/designhub/17_interior_design.jpg": "2774cd1598f07e4ab38faa9488945945",
"assets/assets/images/designhub/dh_headimg.png": "bcc53a7fdbf7b7a664335938dbe16918",
"assets/assets/images/designhub/4_report.jpg": "c10a6316de8b53e167095faf234edef0",
"assets/assets/images/designhub/3_product_pack.jpg": "1c5bbc9b45fbbab48ba51edd5375bda6",
"assets/assets/images/designhub/12_web_design.jpg": "bdc591addfdd607fd507abfd4d7b3b52",
"assets/assets/images/designhub/7_illustration.jpg": "120b75e422d11b785824ebd14a67f4dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
