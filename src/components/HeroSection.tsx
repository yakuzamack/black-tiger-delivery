import { HERO_IMG, PHONE, WHATSAPP_LINK, INSTAGRAM_LINK } from "../constants";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center bg-gradient-to-bl from-blue-50 via-white to-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-yellow-200">
              <span className="text-lg">⚡</span>
              خدمة التوصيل الأسرع في الإمارات
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-tight mb-3">
              بلاك تايغر
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">
              فيرست ديليفري
            </h2>
            <p className="text-lg md:text-xl text-blue-700 font-semibold mb-4">
              شريكك الموثوق للتوصيل السريع
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              نوفر خدمات التوصيل السريع والآمن لجميع أنحاء الإمارات. شركة موثقة ومرخصة مع فريق من المندوبين المحترفين المتاحين 24 ساعة في كل إمارة لخدمتكم.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-xl font-bold text-base hover:bg-navy/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                اتصل الآن: {PHONE}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl font-bold text-base hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                واتساب
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-base hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                تابعنا
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: "⚡", title: "توصيل سريع", sub: "في نفس اليوم" },
                { icon: "✓", title: "شركة موثقة", sub: "مرخصة رسمياً" },
                { icon: "🕐", title: "متاحون", sub: "24/7" },
                { icon: "👨‍💼", title: "مندوبون", sub: "محترفون" },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <span className="text-2xl mb-1">{badge.icon}</span>
                  <span className="text-xs font-bold text-navy text-center">{badge.title}</span>
                  <span className="text-xs text-gray-500 text-center">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMG}
                alt="خدمة التوصيل السريع في الإمارات"
                className="w-full h-[380px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold text-navy rounded-2xl p-4 shadow-xl font-bold text-center">
              <div className="text-2xl font-black">1000+</div>
              <div className="text-xs">طلب يومياً</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}