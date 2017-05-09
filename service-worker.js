/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/images/icons/android-chrome-192x192.jpg","7b212588176669381318ceaf8bab4e29"],["/assets/images/icons/android-chrome-192x192.png","ee58c5ee49d27ef95aa5ba43c241483e"],["/assets/images/icons/apple-touch-icon-180x180.jpg","b5f5e2d851cafb7fd7234064f4d196a1"],["/assets/images/icons/apple-touch-icon-180x180.png","2baa8fe80ab8ce09f67506502a593e7d"],["/assets/images/icons/favicon.ico","82aebc49c2f8ad1f2dbda45500d11e95"],["/assets/images/leti-logo.png","766933f455080ef6ed5f9eec0c31d939"],["/assets/images/portrait.jpg","e7133aea54ff53c96c05cbec205d8f38"],["/assets/manifest.json","62cb5e574843fdda30f1d6546876502b"],["/bundle.js","549e5093f2ee8eefc40d4b767673b331"],["/fonts/Roboto/Roboto-Black.eot","2a82f89b0a35ee7f9d45ec2ec862f7b2"],["/fonts/Roboto/Roboto-Black.svg","ab04c7611d94b690aee3c08a18ae8748"],["/fonts/Roboto/Roboto-Black.ttf","44236ad507eddcbfd986333f38bd13d5"],["/fonts/Roboto/Roboto-Black.woff","4c3b6229efe63a13dbb4c3c32e292e61"],["/fonts/Roboto/Roboto-Black.woff2","2b8d6922c2c9957356bc50f475de4e79"],["/fonts/Roboto/Roboto-BlackItalic.eot","4b7407c6740b8294d97a7bf88995c44d"],["/fonts/Roboto/Roboto-BlackItalic.svg","1f37c7545ae9f63d2279f99875678396"],["/fonts/Roboto/Roboto-BlackItalic.ttf","ad0f284c7113fd0aaf39b0e59b6afb09"],["/fonts/Roboto/Roboto-BlackItalic.woff","3a99796b2d8592471fcf278df4334d5d"],["/fonts/Roboto/Roboto-BlackItalic.woff2","38d14dd4ff163c34e45b9701668652d4"],["/fonts/Roboto/Roboto-Bold.eot","c8bcb1cb78f9e45e2bcbf626bae19f0b"],["/fonts/Roboto/Roboto-Bold.svg","c7f4667b59b9bc95130e697009d3829c"],["/fonts/Roboto/Roboto-Bold.ttf","56a76a220d9c9765946d0802d4d661c4"],["/fonts/Roboto/Roboto-Bold.woff","ad140ff02a7091257e2b31619106194e"],["/fonts/Roboto/Roboto-Bold.woff2","ab96cca26751239828b8e9c524cca5bb"],["/fonts/Roboto/Roboto-BoldItalic.eot","4b2cc52b05e2a960c4f11f15490d8a47"],["/fonts/Roboto/Roboto-BoldItalic.svg","c2e0f75da3677f645034d61c0445c9ba"],["/fonts/Roboto/Roboto-BoldItalic.ttf","d23d5bdadc495f12ef69192243e95e4d"],["/fonts/Roboto/Roboto-BoldItalic.woff","a7dce23c0dd99a4afa5cdb4925f0358a"],["/fonts/Roboto/Roboto-BoldItalic.woff2","355e388740673054493ce5fe32e37596"],["/fonts/Roboto/Roboto-Light.eot","183079184d96a491f16e3cc70414975d"],["/fonts/Roboto/Roboto-Light.svg","054fa50baa6598a7bf0c6deec135d3a4"],["/fonts/Roboto/Roboto-Light.ttf","a2b8c641546c0e5a95e22e5a262f0357"],["/fonts/Roboto/Roboto-Light.woff","37fbbbad5577a95bdf058307c717c882"],["/fonts/Roboto/Roboto-Light.woff2","8e0860f3581b197e9fa4713a706c7bcc"],["/fonts/Roboto/Roboto-LightItalic.eot","cdd1c486770034a6122e28a1aa165373"],["/fonts/Roboto/Roboto-LightItalic.svg","1a9e39e536aed26b863b243e68f97e3a"],["/fonts/Roboto/Roboto-LightItalic.ttf","056caeabe95749fe2b973bb9a0cd0776"],["/fonts/Roboto/Roboto-LightItalic.woff","c7b4e746cf8ecbf412fc944146154d24"],["/fonts/Roboto/Roboto-LightItalic.woff2","879d940bccbb25f6096ec4361154d469"],["/fonts/Roboto/Roboto-Medium.eot","76cad5ba6b8a38a77fe037807d2bc8e5"],["/fonts/Roboto/Roboto-Medium.svg","2b4f394ce87ea4e7a68bd9d0cbba7c16"],["/fonts/Roboto/Roboto-Medium.ttf","c54f2a3ee42d2a58d82f1da293995d20"],["/fonts/Roboto/Roboto-Medium.woff","303ded6436dcf7ea75157e2aeff876ce"],["/fonts/Roboto/Roboto-Medium.woff2","2741a14e49524efa6059c735010239d0"],["/fonts/Roboto/Roboto-MediumItalic.eot","7a49ce79b6089d4d37bf47225c7e5e32"],["/fonts/Roboto/Roboto-MediumItalic.svg","eb65fb18d4446e4ac27d6e27c25fc224"],["/fonts/Roboto/Roboto-MediumItalic.ttf","fa183350bf6b814ae5523c8d49de7c73"],["/fonts/Roboto/Roboto-MediumItalic.woff","da059a7386fea889c55cce11253df175"],["/fonts/Roboto/Roboto-MediumItalic.woff2","f10d1f42838680a70ac2b66e62887106"],["/fonts/Roboto/Roboto-Regular.eot","6a561d68369fd1fb9768cbc8641e5d95"],["/fonts/Roboto/Roboto-Regular.svg","766c8926f6d9061fef24cd7269a341d0"],["/fonts/Roboto/Roboto-Regular.ttf","99b14f0da0591e0d71678dc163eaff8b"],["/fonts/Roboto/Roboto-Regular.woff","081b11ebaca8ad30fd092e01451015dc"],["/fonts/Roboto/Roboto-Regular.woff2","b2a6341ae7440130ec4b4b186aff8413"],["/fonts/Roboto/Roboto-RegularItalic.eot","f3660f493ea5e520648477d2b273db32"],["/fonts/Roboto/Roboto-RegularItalic.svg","527502d7927a41ca0b6a194f9cb34656"],["/fonts/Roboto/Roboto-RegularItalic.ttf","90dbf902b8d0592e1beb7c8829bcc1cb"],["/fonts/Roboto/Roboto-RegularItalic.woff","8add1ba317c27e39b7781c95fa174671"],["/fonts/Roboto/Roboto-RegularItalic.woff2","df8e3a9b9aed943417973988732b928f"],["/fonts/Roboto/Roboto-Thin.eot","c25fd8d00fd9f570545d6240f6ec459a"],["/fonts/Roboto/Roboto-Thin.svg","ba422f71e799f3d29cbf99e6abded2bd"],["/fonts/Roboto/Roboto-Thin.ttf","cc85ce37b4256966e6f3a3559239c5c0"],["/fonts/Roboto/Roboto-Thin.woff","90d3804f0231704c15ccc5861245e8ce"],["/fonts/Roboto/Roboto-Thin.woff2","790ebf41d0214f5eda4ef61263ed75f8"],["/fonts/Roboto/Roboto-ThinItalic.eot","64ca718f48db91b27e8c134ad25d0066"],["/fonts/Roboto/Roboto-ThinItalic.svg","21e9a2e5ed0b0d8d1bb7fd1e1f71104d"],["/fonts/Roboto/Roboto-ThinItalic.ttf","11b5cc9584f2c007a22966a031ead20e"],["/fonts/Roboto/Roboto-ThinItalic.woff","588293290e86dad97fcf33ed1719c083"],["/fonts/Roboto/Roboto-ThinItalic.woff2","8a2c1a5de09de8bb2c45390a10f90c2b"],["/fonts/font-awesome/HELP-US-OUT.txt","a1e5be58e81e919ba2e579cd1c65283e"],["/fonts/font-awesome/README.md","4696fc50054238d2233e46546ba3383a"],["/fonts/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/fonts/font-awesome/css/font-awesome.css.map","8d57a9642cf62d824132266202eac56a"],["/fonts/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/fonts/font-awesome/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/fonts/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/font-awesome/less/animated.less","08baef05e05301cabc91599a54921081"],["/fonts/font-awesome/less/bordered-pulled.less","898f90e40876883214bbd121b0c20e9f"],["/fonts/font-awesome/less/core.less","fb4efe4ae63737706875bbbfc7b7e9af"],["/fonts/font-awesome/less/fixed-width.less","5e07ec001f8d21bd279c12ee542813f7"],["/fonts/font-awesome/less/font-awesome.less","15cb7faa02437c2f9719351c157fe7e7"],["/fonts/font-awesome/less/icons.less","bf95b901c36b646ff457379bdcda94b7"],["/fonts/font-awesome/less/larger.less","8cb65280c0f889daf72626c21a7c8628"],["/fonts/font-awesome/less/list.less","975571323cf880a4a30601998236b027"],["/fonts/font-awesome/less/mixins.less","fbb1f2f1ab96ba020c7f14208aac72b8"],["/fonts/font-awesome/less/path.less","a8c41460c42a4fe9e98550f00c8b3f19"],["/fonts/font-awesome/less/rotated-flipped.less","a8476cdc50c264abd11ff59d6a9dd025"],["/fonts/font-awesome/less/screen-reader.less","0f881617264587bef0df6ce92253ecea"],["/fonts/font-awesome/less/stacked.less","518e2b2d263982d2caa1e6514b4b4eac"],["/fonts/font-awesome/less/variables.less","be3f6eed38aa909483e1bd9ee0876e80"],["/fonts/font-awesome/package.json","63b574ad5b9b57e17022f33c6e750c21"],["/fonts/font-awesome/scss/_animated.scss","39ff4f359a7b81d6585075715f41e5dc"],["/fonts/font-awesome/scss/_bordered-pulled.scss","4cad0df17bf40327feae33fa9a6c6ba2"],["/fonts/font-awesome/scss/_core.scss","ef059a98cf9de6ca5b77ee6850771cf0"],["/fonts/font-awesome/scss/_fixed-width.scss","9277ab6964a434d499873687b00be906"],["/fonts/font-awesome/scss/_icons.scss","de9fa842ad0b619a95ac4f42ac6ba930"],["/fonts/font-awesome/scss/_larger.scss","e95931566f6fc6ad5685c4fa9802e206"],["/fonts/font-awesome/scss/_list.scss","7107e80b053928271d5fcf422dc29490"],["/fonts/font-awesome/scss/_mixins.scss","aa2b8f32b403733713d8885f14ab86cc"],["/fonts/font-awesome/scss/_path.scss","ab5a9e8388563e097b5ce835601f01d2"],["/fonts/font-awesome/scss/_rotated-flipped.scss","9f5d4bc6fadea89328d2aac26574a9d8"],["/fonts/font-awesome/scss/_screen-reader.scss","8907bd7dbf4799e8120bda5568d76fea"],["/fonts/font-awesome/scss/_stacked.scss","5594237226aedfbca2fa1c7f4604c214"],["/fonts/font-awesome/scss/_variables.scss","dc5261f37a8a01feeb52a746d16c0459"],["/fonts/font-awesome/scss/font-awesome.scss","8c015559216d1654630a839b61c6b83d"],["/fonts/material-design-icons/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["/fonts/material-design-icons/MaterialIcons-Regular.ijmap","ed6a98d002bc0b535dd8618f3ae05fe7"],["/fonts/material-design-icons/MaterialIcons-Regular.svg","a1adea65594c502f9d9428f13ae210e1"],["/fonts/material-design-icons/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/fonts/material-design-icons/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/fonts/material-design-icons/MaterialIcons-Regular.woff2","570eb83859dc23dd0eec423a49e147fe"],["/fonts/material-design-icons/README.md","74139811f0c508b3cbd5ea285c643950"],["/fonts/material-design-icons/codepoints","861b6ac15aeed39b13aa390a84045082"],["/fonts/material-design-icons/material-icons.css","c5941eed2e20a509114128aab1e96edf"],["/index.html","21e8949dec04bc347ad23242ed0f2c18"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







