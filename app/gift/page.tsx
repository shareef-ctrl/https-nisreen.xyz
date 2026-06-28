"use client";

import {
  BadgeCheck,
  CalendarHeart,
  Copy,
  Crown,
  Download,
  Film,
  Gem,
  Heart,
  PlayCircle,
  Share2,
  Sparkles,
  Star,
  X
} from "lucide-react";
import { useMemo, useState } from "react";

const curatedGalleryIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 19, 20, 21, 26, 30, 40, 58, 74, 78, 80, 84, 90];

const gallery = curatedGalleryIds.map((id, index) => ({
  src: `/gift/nessren-curated/nessren_${String(id).padStart(3, "0")}.jpg`,
  label: `لقطة ${index + 1}`
}));

const highlights = [
  { icon: Crown, title: "عام أول", text: "ذكرى تستحق أن تحفظ في صفحة أنيقة، لا في رسالة عابرة." },
  { icon: Film, title: "فيديو احتفائي", text: "فيلم وثائقي قصير، وفيديو هدية جاهزان للمشاهدة والتحميل." },
  { icon: Gem, title: "توقيع نجود", text: "هدية شخصية بنبرة تقدير، وبحضور واضح لقناة العنوان 24." }
];

const moments = [
  "بداية حملت اسمًا واضحًا ورسالة إعلامية قريبة من الناس.",
  "حضور يومي صنع ثقة أكبر بين الشاشة والجمهور.",
  "عام أول يفتح الباب لعام أجمل وأكثر تميزًا."
];

const manifesto = [
  "للخبر قيمة حين يصل واضحًا وإنسانيًا.",
  "للصورة أثر حين تحمل صدق اللحظة.",
  "للقناة حضور حين تصبح قريبة من جمهورها.",
  "ولنسرين بصمة تستحق التقدير والاحتفاء."
];

const dedicationText =
  "الأستاذة نسرين النمر، بمناسبة مرور عام على انطلاق قناة العنوان 24، نهديك هذه البصمة الرقمية تقديرًا لحضورك الإعلامي، وللدور الذي صنعته القناة في تقديم خبر واضح، قريب، ومؤثر. عام أول من الثقة، وبداية لسنوات أجمل.";

const videoUrl = "/gift/aleunwan24-anniversary-gift.mp4";
const videoPoster = "/gift/aleunwan24-anniversary-poster.jpg";
const documentaryVideoUrl = "/gift/aleunwan24-documentary-anniversary-4k.mp4";
const documentaryPoster = "/gift/aleunwan24-documentary-poster.jpg";
const channelCover = "/gift/aleunwan24-cover.jpg";

export default function GiftPage() {
  const [copied, setCopied] = useState("");
  const [letterOpen, setLetterOpen] = useState(false);
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

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#171717]" dir="rtl">
      <section className="relative min-h-screen overflow-hidden bg-[#111111] text-white">
        <img src="/gift/nessren-soft.jpg" alt="نسرين النمر" className="gift-kenburns absolute inset-0 h-full w-full object-cover object-[30%_center] opacity-72" />
        <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(12,12,12,.96),rgba(12,12,12,.66),rgba(12,12,12,.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#111,transparent)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[#d6b55d]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <ChannelLogo showImage />
            <button type="button" onClick={shareGift} className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10 transition hover:bg-white/18" aria-label="مشاركة الهدية" title="مشاركة الهدية">
              <Share2 className="h-5 w-5" />
            </button>
          </header>

          <div className="flex flex-1 items-end py-12">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#d6b55d]/60 bg-black/32 px-4 py-2 text-sm font-bold text-[#f3d985] backdrop-blur">
                <Sparkles className="h-4 w-4" />
                هدية رقمية بمناسبة العام الأول
              </div>
              <p className="text-sm font-bold text-white/64">إهداء خاص إلى الأستاذة نسرين النمر</p>
              <h1 className="gift-elegant mt-3 max-w-2xl text-4xl font-black leading-[1.08] sm:text-6xl lg:text-7xl">
                عام من
                <span className="block text-[#f3d985]">العنوان 24</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
                صفحة احتفاء راقية تجمع القناة وصاحبة الحضور في عمل واحد: رسالة تقدير، فيلم وثائقي،
                معرض صور، وشهادة رقمية جاهزة للإرسال.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => setLetterOpen(true)} className="inline-flex items-center gap-2 bg-[#f3d985] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#ffe7a3]">
                  <Heart className="h-4 w-4" />
                  رسالة الإهداء
                </button>
                <button type="button" onClick={() => copyText(giftLink, "الرابط")} className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/18">
                  <Copy className="h-4 w-4" />
                  {copied === "الرابط" ? "تم نسخ الرابط" : "نسخ الرابط"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 pb-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-white/12 bg-white/[.06] p-5">
                <Icon className="mb-5 h-8 w-8 text-[#f3d985]" />
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-3 leading-8 text-white/72">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7f3e8] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.95fr]">
          <figure className="border border-[#d8ccb0] bg-[#151515] p-3 shadow-xl">
            <img src={channelCover} alt="قناة العنوان 24" className="h-full min-h-[300px] w-full object-cover" />
          </figure>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black text-[#9d1f2e]">هوية القناة</p>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">العنوان 24.. للخبر حضور وللحقيقة عنوان</h2>
            <p className="mt-5 text-lg leading-9 text-[#555]">
              هذه الهدية تحتفي بعام من العمل والعطاء، وتضع اسم القناة ونسرين النمر في مساحة واحدة
              تليق بالذكرى وبمن شارك في صناعة حضورها الأول.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {moments.map((moment, index) => (
                <article key={moment} className="border-r-4 border-[#9d1f2e] bg-white p-4 shadow-sm">
                  <p className="text-sm font-black text-[#c29a38]">0{index + 1}</p>
                  <p className="mt-2 leading-7 text-[#3b3b3b]">{moment}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoSection
        eyebrow="الفيلم الوثائقي"
        title="عام مضى... ومسيرة من العمل والعطاء"
        text="فيديو احترافي مدته أقل من دقيقة، يجمع الصور والهوية البصرية للقناة بطريقة وثائقية هادئة، مع تعليق راو محايد وموسيقى ملهمة."
        src={documentaryVideoUrl}
        poster={documentaryPoster}
        primary
      />

      <VideoSection
        eyebrow="فيلم الهدية"
        title="مشهد قصير يصلح للإرسال السريع"
        text="نسخة مختصرة من الهدية يمكن مشاركتها مباشرة، مع الاحتفاظ بالصفحة كأرشيف كامل للذكرى."
        src={videoUrl}
        poster={videoPoster}
      />

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <article className="relative overflow-hidden border border-[#d6b55d] bg-[#fff8e9] p-6 shadow-xl sm:p-8">
            <div className="absolute inset-4 border border-[#d6b55d]/45" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3 text-[#9d1f2e]">
                <BadgeCheck className="h-5 w-5" />
                <span className="font-bold">شهادة تقدير رقمية</span>
              </div>
              <h2 className="gift-elegant text-4xl font-black leading-tight sm:text-6xl">إلى نسرين النمر</h2>
              <p className="mt-6 text-xl font-bold leading-10 text-[#252018]">{dedicationText}</p>
              <div className="mt-7 border-r-4 border-[#9d1f2e] bg-white/72 px-5 py-4">
                <p className="text-sm font-bold text-[#9d1f2e]">مقدمة بمحبة وتقدير من</p>
                <p className="mt-1 text-3xl font-black">نجود</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => copyText(dedicationText, "الإهداء")} className="inline-flex items-center gap-2 bg-[#171717] px-5 py-3 font-bold text-white transition hover:bg-[#303030]">
                  <Copy className="h-4 w-4" />
                  {copied === "الإهداء" ? "تم نسخ الإهداء" : "نسخ الإهداء"}
                </button>
                <button type="button" onClick={shareGift} className="inline-flex items-center gap-2 border border-[#c8bd9e] bg-white px-5 py-3 font-bold text-[#33250a] transition hover:bg-[#f7ecd2]">
                  <Share2 className="h-4 w-4" />
                  مشاركة الصفحة
                </button>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {manifesto.map((line, index) => (
              <article key={line} className="border border-[#e5dac1] bg-[#f9f6ed] p-5">
                <Star className="mb-4 h-5 w-5 text-[#c29a38]" />
                <p className="text-xl font-bold leading-9">{line}</p>
                <p className="mt-4 text-sm font-black text-[#9d1f2e]">عبارة {index + 1}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121826] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black text-[#f3d985]">أرشيف نسرين المصور</p>
              <h2 className="gift-elegant mt-2 text-4xl font-black leading-tight sm:text-6xl">حضور يتكلم بالصور</h2>
            </div>
            <p className="max-w-2xl text-lg leading-9 text-white/72">
              صور مختارة تظهر نسرين بوضوح، مرتبة كجدار بصري خفيف يمنح الصفحة حياة دون أن يزحم الرسالة.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {gallery.map((image, index) => (
              <figure key={image.src} className={`group overflow-hidden border border-white/10 bg-[#0b0f19] ${index % 8 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
                <img
                  src={image.src}
                  alt={`نسرين النمر - ${image.label}`}
                  loading="lazy"
                  className={`w-full object-cover opacity-95 transition duration-500 group-hover:scale-105 group-hover:opacity-100 ${index % 8 === 0 ? "h-full min-h-[330px]" : "h-44 sm:h-52"}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101010] px-5 py-20 text-white sm:px-8">
        <img src="/gift/nessren-editorial.jpg" alt="نسرين النمر" className="absolute inset-0 h-full w-full object-cover opacity-24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,.96),rgba(16,16,16,.78),rgba(16,16,16,.52))]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <CalendarHeart className="mx-auto mb-5 h-12 w-12 text-[#f3d985]" />
          <p className="text-sm font-black text-[#f3d985]">ختام الذكرى</p>
          <h2 className="gift-elegant mt-3 text-4xl font-black leading-tight sm:text-6xl">شكرًا لكل من كان جزءًا من عامنا الأول</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/78">
            كل عام وقناة العنوان 24 أكثر حضورًا وتميزًا، وكل عام ونسرين النمر في مساحة تقدير تليق بما قدمته.
          </p>
          <div className="mx-auto mt-8 w-fit border border-white/16 bg-white/8 px-6 py-5">
            <ChannelLogo compact />
            <p className="mt-4 text-sm text-white/60">إهداء وتوقيع</p>
            <p className="text-3xl font-black text-[#f3d985]">نجود</p>
          </div>
        </div>
      </section>

      {letterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-6 backdrop-blur-sm">
          <article className="max-h-[90vh] w-full max-w-2xl overflow-auto border border-[#d6b55d] bg-[#fff8e9] p-6 text-[#171717] shadow-2xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-[#9d1f2e]">رسالة خاصة</p>
                <h2 className="mt-1 text-3xl font-black">إلى نسرين النمر</h2>
              </div>
              <button type="button" onClick={() => setLetterOpen(false)} className="flex h-10 w-10 items-center justify-center border border-[#d8c99e] bg-white" aria-label="إغلاق الرسالة" title="إغلاق">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xl font-bold leading-10">{dedicationText}</p>
            <p className="mt-5 text-lg leading-9 text-[#555]">
              هذه الهدية صنعت لتكون خفيفة في شكلها، عميقة في معناها، وقريبة من القلب:
              عام أول من الحضور، وبداية لسنوات أكثر أثرًا.
            </p>
            <button type="button" onClick={() => copyText(dedicationText, "الإهداء")} className="mt-7 inline-flex items-center gap-2 bg-[#171717] px-5 py-3 font-bold text-white transition hover:bg-[#303030]">
              <Copy className="h-4 w-4" />
              {copied === "الإهداء" ? "تم النسخ" : "نسخ النص"}
            </button>
          </article>
        </div>
      )}
    </main>
  );
}

function VideoSection({
  eyebrow,
  title,
  text,
  src,
  poster,
  primary = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  src: string;
  poster: string;
  primary?: boolean;
}) {
  return (
    <section className={`${primary ? "bg-[#191918]" : "bg-[#111111]"} px-5 py-16 text-white sm:px-8`}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.92fr_1.08fr]">
        <div className={`${primary ? "order-2 lg:order-1" : "order-2"} mx-auto w-full max-w-[430px] border border-white/14 bg-black p-3 shadow-2xl`}>
          <video className="aspect-[9/16] w-full bg-black object-cover" controls playsInline preload="metadata" poster={poster}>
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div className={`${primary ? "order-1 lg:order-2" : "order-1"} flex flex-col justify-center`}>
          <div className="mb-5 inline-flex w-fit items-center gap-2 border border-[#f3d985]/45 bg-[#f3d985]/10 px-4 py-2 text-sm font-bold text-[#f3d985]">
            {primary ? <Film className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
            {eyebrow}
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-white/72">{text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={src} download className="inline-flex items-center gap-2 bg-[#f3d985] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#ffe7a3]">
              <Download className="h-4 w-4" />
              تحميل الفيديو
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/12 bg-white/[.07] p-4">
      <p className="text-3xl font-black text-[#f3d985]">{value}</p>
      <p className="mt-1 text-sm leading-6 text-white/70">{label}</p>
    </div>
  );
}

function ChannelLogo({ compact = false, showImage = false }: { compact?: boolean; showImage?: boolean }) {
  if (showImage) {
    return (
      <div className="inline-flex items-center gap-3" aria-label="شعار قناة العنوان 24">
        <img
          src="/gift/aleunwan24-cover.jpg"
          alt="شعار قناة العنوان 24"
          className="h-14 w-28 border border-[#f3d985]/50 bg-black object-cover shadow-lg sm:h-16 sm:w-32"
        />
        <span className="hidden leading-tight sm:block">
          <span className="block text-sm font-bold text-white/62">قناة</span>
          <span className="block text-2xl font-black text-[#f3d985]">العنوان 24</span>
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3" aria-label="شعار قناة العنوان 24">
      <span className={`flex items-center justify-center border border-[#f3d985] bg-[#f3d985] font-black text-[#171717] ${compact ? "h-10 w-10 text-xl" : "h-12 w-12 text-2xl"}`}>
        24
      </span>
      <span className="leading-tight">
        <span className={`block font-black text-[#f3d985] ${compact ? "text-xl" : "text-2xl"}`}>العنوان</span>
        <span className="block text-xs font-bold text-white/62">ALEUNWAN TV</span>
      </span>
    </div>
  );
}
