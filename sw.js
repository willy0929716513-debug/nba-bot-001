self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", function (event) {
  var data = event.data || {};
  if (data.type === "notify") {
    self.registration.showNotification(data.title || "中原新生指南", {
      body: data.body || "",
      icon: "icon-192.png",
      badge: "icon-192.png"
    });
  }
});
