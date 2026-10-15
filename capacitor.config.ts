import type { CapacitorConfig } from "@capacitor/core";

/**
 * FAMESA AI — Android paketleme yapılandırması.
 *
 * APK/AAB üretmek için:
 *   bun add -D @capacitor/cli && bun add @capacitor/android
 *   bun run build
 *   npx cap init (bu dosya hazır) → npx cap add android
 *   npx cap sync && npx cap open android  (Android Studio'da build)
 *
 * Kamera/mikrofon izinleri web getUserMedia üzerinden çalışır; Capacitor
 * WebView'i bu API'leri destekler. Native izinler AndroidManifest'e eklenir.
 */
const config: CapacitorConfig = {
  appId: "ai.famesa.app",
  appName: "FAMESA AI",
  webDir: "dist",
  backgroundColor: "#0b0e14",
  android: {
    allowMixedContent: false,
  },
};

export default config;
