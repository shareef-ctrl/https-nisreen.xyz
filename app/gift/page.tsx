"use client";

import {
  Award,
  BadgeCheck,
  CalendarHeart,
  ChevronLeft,
  Copy,
  Crown,
  Download,
  Film,
  Gem,
  Heart,
  PlayCircle,
  Printer,
  ScrollText,
  Share2,
  Sparkles,
  Star,
  Wand2
} from "lucide-react";
import { useMemo, useState } from "react";

const chapters = [
  {
    title: "الفكرة",
    kicker: "هدية لا تنتهي عند التهنئة",
    text: "هذه الصفحة تُقدَّم كأثر رقمي حي: شهادة تقدير، فيديو احتفائي، ورسالة محبة تحفظ ذكرى العام الأول."
  },
  {
    title: "الصوت",
    kicker: "قناة تعرف أين تقف",
    text: "العنوان 24 منصة عربية تهتم بالشأن السوداني، وتمنح الخبر مساحة تتجاوز العاجل إلى المعنى والسياق والذاكرة."
  },
  {
    title: "الحضور",
    kicker: "نسرين في قلب المشهد",
    text: "إلى نسرين النمر: حضورك ليس خلف الشاشة فقط، بل في طريقة ترتيب الفكرة وصناعة ثقة الجمهور في اللحظة الإعلامية."
  }
];

const manifesto = [
  "أن يكون الخبر واضحًا دون أن يفقد إنسانيته.",
  "أن تصل القصة السودانية بصوت عربي مهني وقريب.",
  "أن تتحول الشاشة إلى مساحة ثقة لا مجرد نافذة عابرة.",
  "أن يبقى اسم العنوان 24 مرتبطًا بالمصداقية والحضور."
];

const timeline = [
  { number: "01", title: "تدشين", text: "بداية قناة تحمل اسمًا واضحًا ورسالة إعلامية تتجه نحو الجمهور بثقة." },
  { number: "02", title: "انتشار", text: "صفحة موثقة وحضور اجتماعي كبير جعل المحتوى قريبًا من الناس كل يوم." },
  { number: "03", title: "بصمة", text: "عام أول جمع بين سرعة الخبر، وحضور الصورة، وشخصية إعلامية تقود المشهد." }
];

const gallery = [
  { src: "/gift/nessren-editorial.jpg", alt: "نسرين النمر في تصميم إعلامي", label: "حضور الشاشة" },
  { src: "/gift/nessren-portrait.jpg", alt: "صورة شخصية لنسرين النمر", label: "قوة الشخصية" },
  { src: "/gift/nessren-soft.jpg", alt: "بورتريه نسرين النمر", label: "نعومة الأثر" }
];

const curatedGalleryIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 19, 20, 21, 26, 30, 40, 58, 74, 78, 80, 84, 90];

const expandedGallery = curatedGalleryIds.map((id, index) => ({
  src: `/gift/nessren-curated/nessren_${String(id).padStart(3, "0")}.jpg`,
  label: `لقطة ${index + 1}`
}));

const dedicationText =
  "الأستاذة نسرين النمر، بمناسبة مرور عام على تدشين قناة العنوان 24، نهديك هذه البصمة الرقمية تقديرًا لحضورك الإعلامي، ولدورك في صناعة منصة تضع الخبر السوداني في موقعه العربي والدولي بثقة واحتراف.";

const videoUrl = "/gift/aleunwan24-anniversary-gift.mp4";
const videoPoster = "/gift/aleunwan24-anniversary-poster.jpg";
const documentaryVideoUrl = "/gift/aleunwan24-documentary-anniversary-4k.mp4";
const documentaryPoster = "/gift/aleunwan24-documentary-poster.jpg";
const channelCover = "/gift/aleunwan24-cover.jpg";

export default function GiftPage() {
  const [copied, setCopied] = useState("");
  const [activeChapter, setActiveChapter] = useState(0);
  const [openedLetter, setOpenedLetter] = useState(false);
  const giftLink = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const markCopied = (label: string) => {
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  };

  const shareGift = async () => {
    const payload = {
      title: "عام من العنوان 24",
      text: "هدية رقمية للأستاذة نسرين النمر بمناسبة مرور عام على تدشين قناة العنوان 24.",
      url: giftLink
    };
    if (navigator.share) {
      await navigator.share(payload);
      return;
    }
    await navigator.clipboard.writeText(giftLink);
    markCopied("الرابط");
  };

  const copyText = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    markCopied(label);
  };

  const printGift = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#161616]" dir="rtl">
      <section className="relative min-h-[94vh] overflow-hidden bg-[#111] text-white">
        <img
          src="/gift/nessren-soft.jpg"
          alt="نسرين النمر"
          className="gift-kenburns absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
        <div className="absolute inset-y-0 right-8 hidden w-px bg-white/10 sm:block" />
        <div className="absolute inset-x-0 top-24 h-px bg-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.95),rgba(0,0,0,.72),rgba(0,0,0,.24))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#111,transparent)]" />

        <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ChannelLogo />
              <div>
                <p className="text-sm text-white/68">هدية إعلامية تفاعلية</p>
                <p className="font-bold">قناة العنوان 24 × نسرين النمر</p>
              </div>
            </div>
            <button
              type="button"
              onClick={shareGift}
              className="flex h-12 w-12 items-center justify-center border border-white/28 bg-white/10 transition hover:bg-white/18"
              aria-label="مشاركة الهدية"
              title="مشاركة الهدية"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </header>

          <div className="grid items-end gap-10 py-12 lg:grid-cols-[1fr_360px]">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 border border-[#d7b867]/55 bg-[#d7b867]/14 px-4 py-2 text-sm font-semibold text-[#f6dc8a]">
                <Sparkles className="h-4 w-4" />
                وثيقة رقمية بمناسبة العام الأول
              </div>
              <p className="mb-4 text-sm font-bold tracking-normal text-white/62">إهداء خاص بمناسبة العام الأول</p>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.08] sm:text-7xl lg:text-8xl">
                عام من
                <span className="block text-[#f2d37a]">العنوان 24</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-white/80">
                إلى الأستاذة نسرين النمر: هذه ليست بطاقة تهنئة فقط، بل صفحة احتفاء
                جاهزة لتصل بمحبة، وتحكي كيف صار الاسم عنوانًا، وكيف صار الحضور أثرًا.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 border-r-2 border-[#f2d37a] bg-black/24 px-5 py-3">
                <span className="text-sm text-white/58">بمحبة وتقدير</span>
                <span className="text-2xl font-black text-[#f2d37a]">نجود</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpenedLetter(true)}
                  className="inline-flex items-center gap-2 bg-[#f2d37a] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#ffe28b]"
                >
                  <Heart className="h-4 w-4" />
                  افتح رسالة الإهداء
                </button>
                <button
                  type="button"
                  onClick={() => copyText(giftLink, "الرابط")}
                  className="inline-flex items-center gap-2 border border-white/24 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/18"
                >
                  <Copy className="h-4 w-4" />
                  {copied === "الرابط" ? "تم نسخ الرابط" : "نسخ الرابط"}
                </button>
                <button
                  type="button"
                  onClick={printGift}
                  className="inline-flex items-center gap-2 border border-[#f2d37a]/40 bg-black/24 px-5 py-3 font-bold text-[#f2d37a] transition hover:bg-black/40"
                >
                  <Printer className="h-4 w-4" />
                  طباعة الشهادة
                </button>
              </div>
            </div>

            <aside className="border border-white/18 bg-black/34 p-5 backdrop-blur">
              <p className="mb-4 text-sm font-semibold text-[#f2d37a]">مؤشرات الاحتفاء</p>
              <div className="grid gap-3">
                <Stat value="365" label="يومًا من الحضور الإعلامي" />
                <Stat value="1.6M" label="متابع لقناة العنوان 24" />
                <Stat value="90K" label="متابع لحضور نسرين" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 pb-14 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.title}
              type="button"
              onClick={() => setActiveChapter(index)}
              className={`border p-5 text-right transition ${
                activeChapter === index
                  ? "border-[#f2d37a] bg-[#f2d37a] text-[#171717]"
                  : "border-white/14 bg-white/6 hover:bg-white/10"
              }`}
            >
              <span className="text-sm font-bold opacity-70">فصل {index + 1}</span>
              <span className="mt-2 block text-2xl font-black">{chapter.title}</span>
              <span className="mt-3 block leading-7 opacity-80">{chapter.kicker}</span>
            </button>
          ))}
        </div>
        <div className="mx-auto mt-4 max-w-7xl border border-white/12 bg-white/8 p-6 sm:p-8">
          <p className="text-sm font-semibold text-[#f2d37a]">{chapters[activeChapter].kicker}</p>
          <p className="mt-3 max-w-4xl text-2xl font-bold leading-10">{chapters[activeChapter].text}</p>
        </div>
      </section>

      <section className="bg-[#f6f4ee] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <figure className="overflow-hidden border border-[#d8d0bd] bg-[#101010] p-3 shadow-xl">
            <img
              src={channelCover}
              alt="شعار قناة العنوان 24"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-bold text-[#9d1f2e]">هوية القناة</p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">العنوان 24.. للحقيقة عنوان</h2>
            <p className="mt-5 text-lg leading-9 text-[#555]">
              قناة فضائية ومنصة إخبارية عربية مهتمة بالشأن السوداني، تؤسس
              لمصداقية الخبر وتهتم به على الصعيدين الإقليمي والدولي.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <IdentityStat value="1.6M" label="متابع" />
              <IdentityStat value="24" label="عنوان الخبر" />
              <IdentityStat value="دائمًا" label="حضور مفتوح" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#191918] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="order-2 mx-auto w-full max-w-[430px] border border-[#f2d37a]/28 bg-black p-3 shadow-2xl lg:order-1">
            <video
              className="aspect-[9/16] w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={documentaryPoster}
            >
              <source src={documentaryVideoUrl} type="video/mp4" />
            </video>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="mb-5 inline-flex w-fit items-center gap-2 border border-[#f2d37a]/45 bg-[#f2d37a]/10 px-4 py-2 text-sm font-bold text-[#f2d37a]">
              <Film className="h-4 w-4" />
              الفيلم الوثائقي 4K
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              عامٌ مضى... ومسيرةٌ من العمل والعطاء
            </h2>
            <p className="mt-5 text-lg leading-9 text-white/72">
              نسخة وثائقية احترافية مدتها 52 ثانية، تجمع صور نسرين النمر وهوية
              قناة العنوان 24 بانتقالات سينمائية، وتحريك خفيف للصور، وموسيقى
              هادئة مع تعليق صوتي براوٍ محايد.
            </p>
            <p className="mt-4 border-r-2 border-[#f2d37a] pr-4 text-sm leading-7 text-white/58">
              تحية إعلامية محترمة: لا يظهر أي شخص وكأنه ينطق كلمات لم يقلها،
              والصوت المستخدم صوت راوٍ مستقل عن الصور.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={documentaryVideoUrl}
                download
                className="inline-flex items-center gap-2 bg-[#f2d37a] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#ffe28b]"
              >
                <Download className="h-4 w-4" />
                تحميل الفيلم الوثائقي
              </a>
              <button
                type="button"
                onClick={() => copyText(giftLink, "الرابط")}
                className="inline-flex items-center gap-2 border border-white/24 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/18"
              >
                <Copy className="h-4 w-4" />
                {copied === "الرابط" ? "تم نسخ الرابط" : "نسخ رابط الهدية"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-[#f2d37a]/45 bg-[#f2d37a]/10 px-4 py-2 text-sm font-bold text-[#f2d37a]">
              <PlayCircle className="h-4 w-4" />
              فيلم الهدية
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">عام من العنوان 24 في مشهد قصير</h2>
            <p className="mt-5 text-lg leading-9 text-white/72">
              فيلم قصير يحمل لحظة التقدير الأولى، ثم تكتمل الهدية هنا في هذه
              الصفحة كشهادة رقمية باقية.
            </p>
            <div className="mt-6">
              <ChannelLogo compact />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={videoUrl}
                download
                className="inline-flex items-center gap-2 bg-[#f2d37a] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#ffe28b]"
              >
                <Download className="h-4 w-4" />
                تحميل الفيديو
              </a>
              <button
                type="button"
                onClick={() => copyText(giftLink, "الرابط")}
                className="inline-flex items-center gap-2 border border-white/24 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/18"
              >
                <Copy className="h-4 w-4" />
                {copied === "الرابط" ? "تم نسخ الرابط" : "نسخ رابط الهدية"}
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] border border-white/16 bg-black p-3 shadow-2xl">
            <video
              className="aspect-[9/16] w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={videoPoster}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ee] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-sm font-bold text-[#9d1f2e]">الوسام</p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">وسام الحضور الإعلامي</h2>
            </div>
            <Award className="hidden h-12 w-12 text-[#c29a38] sm:block" />
          </div>

          <div className="grid gap-7 lg:grid-cols-[1.08fr_.92fr]">
            <article className="border border-[#d9d0bd] bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3 text-[#9d1f2e]">
                <BadgeCheck className="h-5 w-5" />
                <span className="font-bold">إهداء رسمي بنبرة إنسانية</span>
              </div>
              <p className="text-2xl font-bold leading-10 text-[#1a1a1a]">{dedicationText}</p>
              <p className="mt-5 text-lg leading-9 text-[#555]">
                عام أول لا يُقاس بالزمن وحده، بل بما تركه من ثقة، وبما صنعه من علاقة
                بين المنصة والجمهور. لهذا تأتي الهدية كختم ذكرى يليق باسم
                القناة وصاحبة الحضور.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => copyText(dedicationText, "الإهداء")}
                  className="inline-flex items-center gap-2 bg-[#171717] px-5 py-3 text-white transition hover:bg-[#303030]"
                >
                  <Copy className="h-4 w-4" />
                  {copied === "الإهداء" ? "تم نسخ الإهداء" : "نسخ نص الإهداء"}
                </button>
                <button
                  type="button"
                  onClick={shareGift}
                  className="inline-flex items-center gap-2 border border-[#c8bd9e] bg-[#f8efd9] px-5 py-3 text-[#33250a] transition hover:bg-[#f1dfad]"
                >
                  <Share2 className="h-4 w-4" />
                  مشاركة الصفحة
                </button>
              </div>
            </article>

            <div className="grid gap-4">
              {timeline.map((item) => (
                <article key={item.title} className="border-r-4 border-[#9d1f2e] bg-[#141414] p-5 text-white">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#f2d37a] text-sm font-black text-[#171717]">
                      {item.number}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="leading-8 text-white/72">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-2 text-sm font-bold text-[#0f766e]">مانيفستو العام الأول</p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">أربع جمل تصلح كهوية للحظة</h2>
            <p className="mt-5 text-lg leading-9 text-[#575757]">
              كلمات تختصر معنى العام الأول: خبر أوضح، حضور أقرب، وثقة تكبر مع
              كل يوم جديد.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {manifesto.map((line, index) => (
              <article key={line} className="border border-[#e4ddce] bg-[#f8f6f0] p-5">
                <Star className="mb-4 h-5 w-5 text-[#c29a38]" />
                <p className="text-xl font-bold leading-9">{line}</p>
                <p className="mt-4 text-sm font-bold text-[#9d1f2e]">مبدأ {index + 1}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#170d18] px-5 py-20 text-white sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,211,122,.22),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(157,31,46,.35),transparent_30%),linear-gradient(135deg,#170d18,#0b0b0f_58%,#2b1220)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f2d37a]/70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#f2d37a]/70" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center border border-[#f2d37a] bg-[#f2d37a] text-[#171717] shadow-[0_0_70px_rgba(242,211,122,.35)]">
              <Crown className="h-10 w-10" />
            </div>
            <p className="text-sm font-black text-[#f2d37a]">تاج العام الأول</p>
            <h2 className="gift-elegant mt-3 text-5xl font-black leading-tight sm:text-7xl">
              وسام يليق بالحضور
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-9 text-white/76">
              عامٌ من الثقة، واسمٌ صار قريبًا من الشاشة والناس. هذه اللمسة
              الاحتفالية تأتي كبرواز ذهبي حول ذكرى تستحق أن تُحفظ.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <article className="relative overflow-hidden border border-[#f2d37a]/55 bg-white/[.07] p-6 shadow-2xl">
              <div className="absolute inset-3 border border-[#f2d37a]/25" />
              <div className="relative">
                <Gem className="mb-5 h-9 w-9 text-[#f2d37a]" />
                <p className="text-sm font-black text-[#f2d37a]">برواز الوفاء</p>
                <h3 className="mt-3 text-3xl font-black">للجمهور</h3>
                <p className="mt-4 leading-8 text-white/72">
                  شكرٌ لكل من منح القناة ثقته، وجعل عامها الأول بدايةً ممتدة
                  لأثرٍ أكبر.
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden border border-[#f2d37a]/55 bg-[#f2d37a] p-6 text-[#171717] shadow-2xl">
              <div className="absolute inset-3 border border-[#171717]/20" />
              <div className="relative">
                <Award className="mb-5 h-9 w-9" />
                <p className="text-sm font-black text-[#7a1d2b]">وسام الحضور</p>
                <h3 className="mt-3 text-3xl font-black">لنسرين النمر</h3>
                <p className="mt-4 font-bold leading-8 text-[#312414]">
                  تقديرٌ لحضور إعلامي ترك بصمته في الصورة، وفي ذاكرة العام
                  الأول.
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden border border-[#f2d37a]/55 bg-white/[.07] p-6 shadow-2xl">
              <div className="absolute inset-3 border border-[#f2d37a]/25" />
              <div className="relative">
                <Sparkles className="mb-5 h-9 w-9 text-[#f2d37a]" />
                <p className="text-sm font-black text-[#f2d37a]">ختم التميز</p>
                <h3 className="mt-3 text-3xl font-black">للعنوان 24</h3>
                <p className="mt-4 leading-8 text-white/72">
                  للحقيقة عنوان، وللعام الأول خاتمة مضيئة تفتح الطريق لعامٍ
                  أجمل.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-center justify-between gap-5">
            <div>
              <p className="mb-2 text-sm font-bold text-[#f2d37a]">شهادة فنية</p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">وثيقة إهداء ذهبية</h2>
            </div>
            <ScrollText className="hidden h-12 w-12 text-[#f2d37a] sm:block" />
          </div>

          <article className="relative overflow-hidden border border-[#d3b45f] bg-[#f8f3e6] p-5 text-[#171717] shadow-2xl sm:p-8 lg:p-10">
            <div className="absolute inset-x-5 top-5 h-px bg-[#d3b45f]" />
            <div className="absolute inset-x-5 bottom-5 h-px bg-[#d3b45f]" />
            <div className="absolute inset-y-5 right-5 w-px bg-[#d3b45f]" />
            <div className="absolute inset-y-5 left-5 w-px bg-[#d3b45f]" />
            <Crown className="absolute left-8 top-8 h-10 w-10 text-[#c29a38]/70" />
            <Gem className="absolute bottom-8 right-8 h-9 w-9 text-[#c29a38]/65" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_300px]">
              <div className="p-3 sm:p-6">
                <p className="text-sm font-black text-[#7a1d2b]">شهادة تقدير رقمية</p>
                <h3 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">إلى نسرين النمر</h3>
                <p className="mt-6 max-w-3xl text-xl font-bold leading-10">
                  تقديرًا لحضور إعلامي صنع أثرًا في العام الأول لقناة العنوان 24،
                  ولروح قيادية جعلت الخبر أقرب، والصورة أوضح، والاسم أكثر رسوخًا.
                </p>
                <div className="mt-7 border-r-4 border-[#7a1d2b] bg-white/70 px-5 py-4">
                  <p className="text-sm font-bold text-[#7a1d2b]">مقدمة بمحبة من</p>
                  <p className="mt-1 text-3xl font-black text-[#171717]">نجود</p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <CertificateSeal value="عام" label="من التدشين" />
                  <CertificateSeal value="24" label="عنوان لا يغيب" />
                  <CertificateSeal value="أثر" label="يتجدد كل يوم" />
                </div>
              </div>
              <figure className="bg-[#171717] p-3">
                <img
                  src="/gift/nessren-editorial.jpg"
                  alt="نسرين النمر"
                  className="h-[360px] w-full object-cover"
                />
                <figcaption className="bg-[#171717] px-4 py-3 text-center text-sm font-bold text-[#f2d37a]">
                  العنوان 24 × العام الأول
                </figcaption>
              </figure>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-sm font-bold text-[#0f766e]">أرشيف نسرين المصور</p>
              <h2 className="gift-elegant text-4xl font-black leading-tight sm:text-6xl">حضور يتكلم بالصور</h2>
            </div>
            <p className="max-w-2xl text-lg leading-9 text-[#555]">
              مجموعة مختارة من صور نسرين تظهر كجدار بصري يحتفي بالحضور
              الإعلامي والإنساني.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {expandedGallery.map((image, index) => (
              <figure
                key={image.src}
                className={`group overflow-hidden bg-[#101010] ${index % 7 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={image.src}
                  alt={`نسرين النمر - ${image.label}`}
                  loading="lazy"
                  className={`w-full object-cover opacity-95 transition duration-500 group-hover:scale-105 group-hover:opacity-100 ${
                    index % 7 === 0 ? "h-full min-h-[340px]" : "h-44 sm:h-52"
                  }`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121826] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-center justify-between gap-5">
            <div>
              <p className="mb-2 text-sm font-bold text-[#f2d37a]">لحظة العرض</p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">صور تتحول إلى مشهد احتفائي</h2>
            </div>
            <Film className="hidden h-12 w-12 text-[#f2d37a] sm:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {gallery.map((image, index) => (
              <figure key={image.src} className="group overflow-hidden bg-[#0b0f19]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="flex items-center justify-between bg-[#0b0f19] px-4 py-4 text-white">
                  <span className="font-bold">{image.label}</span>
                  <span className="text-sm text-white/52">لقطة {index + 1}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101010] px-5 py-16 text-white sm:px-8">
        <img
          src="/gift/nessren-editorial.jpg"
          alt="نسرين النمر"
          className="absolute inset-0 h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,.96),rgba(16,16,16,.8),rgba(16,16,16,.42))]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <CalendarHeart className="mx-auto mb-5 h-12 w-12 text-[#f2d37a]" />
          <p className="mb-4 text-sm font-bold text-[#f2d37a]">ختم الذكرى</p>
          <h2 className="text-4xl font-black leading-tight sm:text-6xl">نسرين النمر والعنوان 24</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/80">
            عام أول، وبداية طريق أطول. كل عام والقناة أكثر أثرًا، وكل عام ونسرين
            أكثر حضورًا في مساحة الإعلام العربي.
          </p>
          <p className="mx-auto mt-5 max-w-3xl border-t border-white/14 pt-5 text-lg leading-8 text-white/68">
            هدية رقمية تبقى كتذكار محبة وامتنان، باسم القناة وصاحبة الحضور
            الذي منحها نبضها الأول.
          </p>
          <div className="mx-auto mt-7 flex max-w-md flex-col items-center gap-3 border border-white/16 bg-white/8 px-6 py-5">
            <ChannelLogo compact />
            <p className="text-sm text-white/62">إهداء وتوقيع</p>
            <p className="text-3xl font-black text-[#f2d37a]">نجود</p>
          </div>
          <div className="mt-9 inline-flex items-center gap-3 border border-white/20 bg-white/8 px-6 py-4 text-lg font-bold text-[#f2d37a]">
            <Wand2 className="h-5 w-5" />
            عام من البصمة الإعلامية
          </div>
        </div>
      </section>

      {openedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
          <article className="max-h-[90vh] w-full max-w-2xl overflow-auto border border-[#e2d4b2] bg-[#fffaf0] p-6 text-[#161616] shadow-2xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#9d1f2e]">رسالة خاصة</p>
                <h2 className="mt-1 text-3xl font-black">إلى نسرين النمر</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpenedLetter(false)}
                className="flex h-10 w-10 items-center justify-center border border-[#d8c99e] bg-white"
                aria-label="إغلاق الرسالة"
                title="إغلاق"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xl font-bold leading-10">{dedicationText}</p>
            <p className="mt-5 text-lg leading-9 text-[#555]">
              هذه الهدية صُنعت لتكون خفيفة في شكلها، عميقة في معناها، وقريبة من
              القلب: عام أول من الحضور، وبداية لسنوات أكثر أثرًا.
            </p>
            <button
              type="button"
              onClick={() => copyText(dedicationText, "الإهداء")}
              className="mt-7 inline-flex items-center gap-2 bg-[#171717] px-5 py-3 text-white transition hover:bg-[#303030]"
            >
              <Copy className="h-4 w-4" />
              {copied === "الإهداء" ? "تم النسخ" : "نسخ النص"}
            </button>
          </article>
        </div>
      )}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/12 bg-white/8 p-4">
      <p className="text-3xl font-black text-[#f2d37a]">{value}</p>
      <p className="mt-1 text-sm leading-6 text-white/70">{label}</p>
    </div>
  );
}

function CertificateSeal({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[#d3b45f] bg-white/70 p-4 text-center">
      <p className="text-3xl font-black text-[#7a1d2b]">{value}</p>
      <p className="mt-1 text-sm font-bold text-[#5b5137]">{label}</p>
    </div>
  );
}

function IdentityStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[#d8d0bd] bg-white p-4">
      <p className="text-2xl font-black text-[#9d1f2e]">{value}</p>
      <p className="mt-1 text-sm font-bold text-[#5b5137]">{label}</p>
    </div>
  );
}

function ChannelLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 ${compact ? "text-white" : ""}`} aria-label="شعار قناة العنوان 24">
      <span
        className={`flex items-center justify-center border border-[#f2d37a] bg-[#f2d37a] font-black text-[#171717] ${
          compact ? "h-10 w-10 text-xl" : "h-12 w-12 text-2xl"
        }`}
      >
        24
      </span>
      <span className="leading-tight">
        <span className={`block font-black text-[#f2d37a] ${compact ? "text-xl" : "text-2xl"}`}>العنوان</span>
        <span className="block text-xs font-bold text-white/62">ALEUNWAN TV</span>
      </span>
    </div>
  );
}
