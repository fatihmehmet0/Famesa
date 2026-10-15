# FAMESA AI — Görev Haritası

## Backend
- [ ] Veritabanı: profiles, conversations, messages, memories, files, notifications, user_settings, feedback, social_connections, voice_sessions + RLS + GRANT
- [ ] Storage: user-files bucket (private) + storage RLS
- [x] Auth: sadece şifre ile giriş (Google kaldırıldı)
- [ ] /api/chat streaming route (Responses, model seçimi, hafıza aracı, mesaj kaydı)
- [ ] /api/stt + /api/tts ses rotaları

## Uygulama
- [x] Tasarım sistemi: Altın Obsidyen varsayılan tema (ICE / GLASS alternatif)
- [ ] Splash: "Code famesa" terminal animasyonu
- [ ] Onboarding: isim → tema → dil → AI kişiliği
- [ ] Sohbet: thread'ler, kaydetme, yeniden adlandır, sil, ara, streaming UI
- [ ] Hafıza sayfası + kullanıcı kontrollü kaydetme
- [ ] Görsel yükleme + OCR/vision, kamera ("FAMESA'ya Göster"), video frame analizi
- [x] Sesli sohbet: çift yönlü canlı arama (GPT Live, WebRTC) — sunucu hattı doğrulandı, gerçek mikrofon testi tarayıcıda yapılmalı
- [ ] Bildirim merkezi
- [ ] Ayarlar (profil, AI, görünüm, ses, dil, hafıza, gizlilik, bildirimler)
- [ ] Sosyal hesaplar mimari ekranı (sahte veri yok)
- [ ] i18n: TR (varsayılan), EN, DE, ES, FR, AR
- [ ] Logo + favicon + Android ikon
- [ ] Capacitor hazırlığı
- [ ] Head metadata tüm rotalar

## 01:51 isteği
- [ ] FAMESA Map: canlı konum, hedef seçimi, rota, kalan süre/km/hız analizi, altın obsidyen harita teması
- [ ] Güvenlik kapıları: şifre → 4 haneli PIN (0915) → desen kilidi (kullanıcı ilk girişte çizerek belirler), siber temalı kilit ekranları
