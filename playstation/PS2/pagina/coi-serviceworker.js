/* coi-serviceworker v0.1.7 modificado para Emuladores */
if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

    self.addEventListener("fetch", (event) => {
        if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response.status === 0) return response;

                    const newHeaders = new Headers(response.headers);
                    newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
                    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: newHeaders,
                    });
                })
                .catch((e) => console.error("Error en SW:", e))
        );
    });
} else {
    // Registro automático del Service Worker
    (function() {
        const swUrl = window.location.pathname + (window.location.pathname.endsWith("/") ? "" : "/") + "coi-serviceworker.js";
        navigator.serviceWorker.register(swUrl).then((registration) => {
            registration.addEventListener("updatefound", () => {
                window.location.reload();
            });
            // Si el aislamiento no está activo, forzamos recarga
            if (registration.active && !navigator.serviceWorker.controller) {
                window.location.reload();
            }
        });
    })();
}
