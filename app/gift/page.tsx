"use client";

import {
  BadgeCheck,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Film,
  Heart,
  Image as ImageIcon,
  Maximize2,
  PlayCircle,
  Share2,
  Sparkles,
  X
} from "lucide-react";
import { useMemo, useState } from "react";

const curatedGalleryIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 19, 20, 21, 26, 30, 40, 58, 74, 78, 80, 84, 90];

const gallery = curatedGalleryIds.map((id, index) => ({
  src: `/gift/nessren-curated/nessren_${String(id).padStart(3, "0")}.jpg`,
  label: `لقطة ${index + 1}`
}));

const channelLogo = "/gift/aleunwan24-logo.jpg";
const channelCover = "/gift/aleunwan24-cover.jpg";
const videoUrl = "/gift/aleunwan24-anniversary-gift.mp4";
const videoPoster = "/gift/aleunwan24-anniversary-poster.jpg";
const documentaryVideoUrl = "/gift/aleunwan24-documentary-anniversary-4k.mp4";
const documentaryPoster = "/gift/aleunwan24-documentary-poster.jpg";

const dedicationText =
  "الأستاذة نسرين النمر، بمناسبة مرور عام على انطلاق قناة العنوان 24، نهديك هذه البصمة الرقمية تقديرًا لحضورك الإعلامي، وللدور الذي صنعته القناة في تقديم خبر واضح، قريب، ومؤثر. عام أول من الثقة، وبداية لسنوات أجمل.";

const storyCards = [
  {
    title: "الحضور",
    text: "مساحة احتفاء تضع نسرين النمر في قلب الصورة، بعيدًا عن النصوص الثقيلة والزحام البصري."
  },
  {
    title: "القناة",
    text: "العنوان 24 حاضر باسمها وشعارها، في ذكرى عامها الأول ومسيرتها الإعلامية."
  },
  {
    title: "الأثر",
    text: "ذكرى رقمية تحفظ رسالة المحبة والتقدير في صورة تليق بالمناسبة."
  }
];

const tabs = [
  { id: "letter", label: "الإهداء", icon: Heart },
  { id: "film", label: "الفيديو", icon: Film },
  { id: "gallery", label: "الصور", icon: ImageIcon }
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function GiftPage() {
  const [copied, setCopied] = useState("");
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("letter");
  const [activeVideo, setActiveVideo] = useState<"documentary" | "short">("documentary");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage = gallery[selectedImageIndex];
  const currentVideo =
    activeVideo === "documentary"
      ? { src: documentaryVideoUrl, poster: documentaryPoster, title: "الفيلم الوثائقي" }
      : { src: videoUrl, poster: videoPoster, title: "فيلم الهدية" };

  const giftLink = useMemo(() => {
    if (typeof window === "undefined") return "https://nisreen.xyz/";
    return window.location.origin.includes("127.0.0.1") ? "https://nisreen.xyz/" : window.location.href;
  }, []);

  const markCopied = (label: string) => {
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1600);
  };

  const copyText = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    markCopied(label);
  };

  const shareGift = async () => {
    const payload = {
      title: "عام من العنوان 24",
      text: "هدية رقمية للأستاذة نسرين النمر بمناسبة مرور عام على انطلاق قناة العنوان 24.",
      url: giftLink
    };

    if (navigator.share) {
      await navigator.share(payload);
      return;
    }

    await copyText(giftLink, "الرابط");
  };

  const nextImage = () => setSelectedImageIndex((selectedImageIndex + 1) % gallery.length);
  const previousImage = () => setSelectedImageIndex((selectedImageIndex - 1 + gallery.length) % gallery.length);

  return (
    <main className="min-h-screen bg-[#080808] text-white" dir="rtl">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/64 px-4 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="العودة إلى بداية الهدية">
            <img src={channelLogo} alt="شعار قناة العنوان 24" className="h-12 w-24 bg-white object-contain p-1" />
            <span className="hidden leading-tight sm:block">
              <span className="block text-xs font-bold text-white/56">هدية العام الأول</span>
              <span className="block text-lg font-black text-white">نسرين النمر × العنوان 24</span>
            </span>
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={shareGift}
            className="flex h-11 w-11 items-center justify-center bg-[#c9151d] text-white transition hover:bg-[#ff2f3d]"
            aria-label="مشاركة الهدية"
            title="مشاركة الهدية"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden pt-20">
        <img
          src="/gift/nessren-soft.jpg"
          alt="نسرين النمر"
          className="gift-kenburns absolute inset-0 h-full w-full object-cover object-[32%_center] opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,.98),rgba(8,8,8,.70),rgba(8,8,8,.20))]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[#c9151d]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,#080808,transparent)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-end gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[1fr_360px]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-[#c9151d]/70 bg-black/44 px-4 py-2 text-sm font-black text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#ff2f3d]" />
              إهداء خاص بمناسبة العام الأول
            </div>
            <p className="text-sm font-bold text-white/64">إهداء خاص إلى الأستاذة نسرين النمر</p>
            <h1 className="gift-elegant mt-3 text-5xl font-black leading-[1.02] sm:text-7xl lg:text-8xl">
              عام من
              <span className="block text-[#ff2f3d]">العنوان 24</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/82 sm:text-xl">
              تحية تقدير لقناة العنوان 24 وللأستاذة نسرين النمر، في ذكرى عام من الحضور والعطاء.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("letter");
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#c9151d] px-5 py-3 font-black text-white transition hover:bg-[#ff2f3d]"
              >
                <Heart className="h-4 w-4" />
                افتح الهدية
              </button>
              <button
                type="button"
                onClick={() => copyText(giftLink, "الرابط")}
                className="inline-flex items-center gap-2 border border-white/22 bg-white/10 px-5 py-3 font-bold text-white transition hover:border-[#ff2f3d] hover:bg-[#c9151d]/35"
              >
                <Copy className="h-4 w-4" />
                {copied === "الرابط" ? "تم نسخ الرابط" : "نسخ الرابط"}
              </button>
            </div>
          </div>

          <aside className="hidden border border-white/14 bg-black/42 p-4 backdrop-blur-xl lg:block">
            <img src={channelLogo} alt="شعار قناة العنوان 24" className="mb-4 h-28 w-full bg-white object-contain p-3" />
            <div className="grid gap-3">
              {storyCards.map((card) => (
                <article key={card.title} className="border border-white/10 bg-white/[.06] p-4">
                  <h2 className="text-lg font-black text-[#ff2f3d]">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/70">{card.text}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#080808] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {storyCards.map((card) => (
            <article key={card.title} className="group border border-white/10 bg-white/[.045] p-5 transition hover:-translate-y-1 hover:border-[#ff2f3d] hover:bg-[#c9151d]/14">
              <h2 className="text-2xl font-black text-white group-hover:text-[#ff2f3d]">{card.title}</h2>
              <p className="mt-3 leading-8 text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-[#f7f7f7] px-5 py-16 text-[#161616] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black text-[#c9151d]">عام من العطاء</p>
              <h2 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">هدية تليق بالذكرى</h2>
            </div>
            <div className="grid grid-cols-3 border border-[#c9151d]/20 bg-white p-1 shadow-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-black transition ${
                      activeTab === tab.id ? "bg-[#c9151d] text-white" : "text-[#2a2a2a] hover:bg-[#fff0f1]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {activeTab === "letter" && (
            <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
              <article className="relative overflow-hidden border border-[#c9151d] bg-white p-6 shadow-xl sm:p-8">
                <div className="absolute inset-4 border border-[#c9151d]/20" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3 text-[#c9151d]">
                    <BadgeCheck className="h-5 w-5" />
                    <span className="font-black">شهادة تقدير رقمية</span>
                  </div>
                  <h3 className="gift-elegant text-4xl font-black leading-tight sm:text-6xl">إلى نسرين النمر</h3>
                  <p className="mt-6 text-xl font-bold leading-10 text-[#252018]">{dedicationText}</p>
                  <div className="mt-7 border-r-4 border-[#c9151d] bg-[#fff3f4] px-5 py-4">
                    <p className="text-sm font-bold text-[#c9151d]">مقدمة بمحبة وتقدير من</p>
                    <p className="mt-1 text-3xl font-black">نجود</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => copyText(dedicationText, "الإهداء")}
                      className="inline-flex items-center gap-2 bg-[#c9151d] px-5 py-3 font-bold text-white transition hover:bg-[#ff2f3d]"
                    >
                      <Copy className="h-4 w-4" />
                      {copied === "الإهداء" ? "تم نسخ الإهداء" : "نسخ الإهداء"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLetterOpen(true)}
                      className="inline-flex items-center gap-2 border border-[#c9151d]/30 bg-white px-5 py-3 font-bold text-[#c9151d] transition hover:bg-[#fff3f4]"
                    >
                      <Maximize2 className="h-4 w-4" />
                      عرض الرسالة
                    </button>
                  </div>
                </div>
              </article>
              <figure className="grid content-between border border-[#dedede] bg-[#111] p-4 text-white shadow-xl">
                <img src={channelCover} alt="قناة العنوان 24" className="h-72 w-full object-cover" />
                <figcaption className="mt-5 border-t border-white/12 pt-5">
                  <p className="text-sm font-black text-[#ff2f3d]">هوية القناة</p>
                  <h3 className="mt-2 text-3xl font-black">العنوان 24.. حضور الخبر</h3>
                  <p className="mt-3 leading-8 text-white/68">عام أول من الحضور الإعلامي، وامتداد لثقة جمهور تابع ودعم وشارك هذه المسيرة.</p>
                </figcaption>
              </figure>
            </div>
          )}

          {activeTab === "film" && (
            <div className="grid gap-6 lg:grid-cols-[430px_1fr]">
              <div className="border border-[#111] bg-black p-3 shadow-2xl">
                <video className="aspect-[9/16] w-full bg-black object-cover" controls playsInline preload="metadata" poster={currentVideo.poster}>
                  <source src={currentVideo.src} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col justify-center border border-[#dedede] bg-white p-6 shadow-xl sm:p-8">
                <div className="mb-5 inline-flex w-fit items-center gap-2 border border-[#c9151d]/30 bg-[#fff3f4] px-4 py-2 text-sm font-black text-[#c9151d]">
                  <PlayCircle className="h-4 w-4" />
                  {currentVideo.title}
                </div>
                <h3 className="text-4xl font-black leading-tight sm:text-6xl">عرض بصري جاهز للمشاركة</h3>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-[#555]">
                  لحظة تقدير مصورة تحتفي بعام أول من العمل، وبجمهور كان جزءًا من الحضور والنجاح.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveVideo("documentary")}
                    className={`px-5 py-3 font-black transition ${activeVideo === "documentary" ? "bg-[#c9151d] text-white" : "border border-[#c9151d]/25 text-[#c9151d] hover:bg-[#fff3f4]"}`}
                  >
                    الوثائقي
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVideo("short")}
                    className={`px-5 py-3 font-black transition ${activeVideo === "short" ? "bg-[#c9151d] text-white" : "border border-[#c9151d]/25 text-[#c9151d] hover:bg-[#fff3f4]"}`}
                  >
                    المختصر
                  </button>
                  <a href={currentVideo.src} download className="inline-flex items-center gap-2 bg-[#111] px-5 py-3 font-black text-white transition hover:bg-[#c9151d]">
                    <Download className="h-4 w-4" />
                    تحميل الفيديو
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_330px]">
              <figure className="overflow-hidden border border-[#111] bg-black p-3 shadow-2xl">
                <img src={selectedImage.src} alt={`نسرين النمر - ${selectedImage.label}`} className="h-[560px] w-full object-cover" />
              </figure>
              <div className="flex flex-col justify-center border border-[#dedede] bg-white p-6 shadow-xl">
                <p className="text-sm font-black text-[#c9151d]">معرض تفاعلي</p>
                <h3 className="mt-3 text-4xl font-black">اختيار اللقطة</h3>
                <p className="mt-4 leading-8 text-[#555]">مجموعة مختارة من الصور تحفظ حضور نسرين في عام القناة الأول.</p>
                <div className="mt-6 flex gap-3">
                  <button type="button" onClick={previousImage} className="inline-flex items-center gap-2 border border-[#c9151d]/30 px-4 py-3 font-bold text-[#c9151d] transition hover:bg-[#fff3f4]">
                    <ChevronRight className="h-4 w-4" />
                    السابق
                  </button>
                  <button type="button" onClick={nextImage} className="inline-flex items-center gap-2 bg-[#c9151d] px-4 py-3 font-bold text-white transition hover:bg-[#ff2f3d]">
                    التالي
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                  {gallery.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`overflow-hidden border bg-black transition hover:-translate-y-1 ${
                        selectedImageIndex === index ? "border-[#c9151d] shadow-[0_0_0_3px_rgba(201,21,29,.20)]" : "border-transparent"
                      }`}
                    >
                      <img src={image.src} alt={`نسرين النمر - ${image.label}`} loading="lazy" className="h-32 w-full object-cover transition duration-500 hover:scale-105" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101010] px-5 py-20 text-white sm:px-8">
        <img src="/gift/nessren-editorial.jpg" alt="نسرين النمر" className="absolute inset-0 h-full w-full object-cover opacity-24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,.96),rgba(16,16,16,.78),rgba(16,16,16,.50))]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <CalendarHeart className="mx-auto mb-5 h-12 w-12 text-[#ff2f3d]" />
          <p className="text-sm font-black text-[#ff2f3d]">ختام الذكرى</p>
          <h2 className="gift-elegant mt-3 text-4xl font-black leading-tight sm:text-6xl">شكرًا لكل من كان جزءًا من عامنا الأول</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/78">
            كل عام وقناة العنوان 24 أكثر حضورًا وتميزًا، وكل عام ونسرين النمر في مساحة تقدير تليق بما قدمته.
          </p>
          <div className="mx-auto mt-8 w-fit border border-white/16 bg-white/8 px-6 py-5">
            <img src={channelLogo} alt="شعار قناة العنوان 24" className="mx-auto h-20 w-40 bg-white object-contain p-2" />
            <p className="mt-4 text-sm text-white/60">إهداء وتوقيع</p>
            <p className="text-3xl font-black text-[#ff2f3d]">نجود</p>
          </div>
        </div>
      </section>

      {letterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-6 backdrop-blur-sm">
          <article className="max-h-[90vh] w-full max-w-2xl overflow-auto border border-[#c9151d] bg-white p-6 text-[#171717] shadow-2xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-[#c9151d]">رسالة خاصة</p>
                <h2 className="mt-1 text-3xl font-black">إلى نسرين النمر</h2>
              </div>
              <button type="button" onClick={() => setLetterOpen(false)} className="flex h-10 w-10 items-center justify-center border border-[#c9151d]/30 bg-white" aria-label="إغلاق الرسالة" title="إغلاق">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xl font-bold leading-10">{dedicationText}</p>
            <p className="mt-5 text-lg leading-9 text-[#555]">
              عام أول من الحضور، وبداية أجمل لمسيرة تستحق التقدير والاحتفاء.
            </p>
            <button type="button" onClick={() => copyText(dedicationText, "الإهداء")} className="mt-7 inline-flex items-center gap-2 bg-[#c9151d] px-5 py-3 font-bold text-white transition hover:bg-[#ff2f3d]">
              <Copy className="h-4 w-4" />
              {copied === "الإهداء" ? "تم النسخ" : "نسخ النص"}
            </button>
          </article>
        </div>
      )}
    </main>
  );
}
