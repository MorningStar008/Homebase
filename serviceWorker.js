const staticHomeBase = "homebase-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/Assets/HomeButton.png",
  "Emotions/Angry.html",
  "Emotions/Bored.html",
  "Emotions/Embarrassed.html",
  "Emotions/NervousScared.html",
  "Emotions/Sad.html",
  "Assets/0a801a35-6beb-4799-9f8f-107560389d8b.png",
  "Assets/597ddd67-73d4-4b0c-b6b6-f74a76f25108.png",
  "Assets/backButton.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHomebase).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventLister("fetch", fetchEvent -> {
  fetchEvent.respondWith(
    caches.match(fetchEvents.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})