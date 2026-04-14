// ===== NESTORA — PROPERTY DATA =====
const properties = [
  {
    id: 1,
    title: "شقة عصرية مع إطلالة",
    price: 145000,
    priceUnit: "",
    type: "شقة",
    status: "للبيع",
    city: "رام الله",
    area: "المصيون",
    size: 180,
    rooms: 3,
    baths: 2,
    floor: 4,
    age: 2,
    emoji: "🏢",
    description: "شقة فاخرة في قلب رام الله، تتميز بتصميم عصري أنيق ومواد بناء عالية الجودة. تقع في موقع متميز بالقرب من جميع الخدمات والمرافق.",
    features: ["تكييف مركزي", "مواقف سيارات", "أمن وحراسة", "مصعد", "غرفة غسيل", "شرفة واسعة", "خزانات مياه", "إنترنت فايبر"],
    agent: { name: "محمد عبد الله", role: "وكيل عقارات", phone: "+970 59 000 0001" }
  },
  {
    id: 2,
    title: "فيلا فاخرة مع حديقة خاصة",
    price: 520000,
    priceUnit: "",
    type: "فيلا",
    status: "للبيع",
    city: "نابلس",
    area: "رفيديا",
    size: 450,
    rooms: 6,
    baths: 4,
    floor: 2,
    age: 5,
    emoji: "🏡",
    description: "فيلا راقية تجمع بين الأصالة والحداثة، تمتد على مساحة 450 متر مربع مع حديقة خاصة خضراء ومسبح. تصميم معماري استثنائي يوفر خصوصية تامة.",
    features: ["مسبح خاص", "حديقة واسعة", "غرفة خادمة", "مخزن", "نظام ري تلقائي", "كاميرات مراقبة", "مدفأة", "جلسة خارجية"],
    agent: { name: "سارة محمود", role: "وكيلة عقارات فاخرة", phone: "+970 59 000 0002" }
  },
  {
    id: 3,
    title: "مكتب في برج تجاري راقٍ",
    price: 1800,
    priceUnit: "/ شهر",
    type: "مكتب",
    status: "للإيجار",
    city: "رام الله",
    area: "البيرة",
    size: 120,
    rooms: 3,
    baths: 2,
    floor: 8,
    age: 1,
    emoji: "🏛️",
    description: "مكتب احترافي في الطابق الثامن من أحد أرقى الأبراج التجارية في رام الله. يوفر بيئة عمل مثالية مع إطلالة بانورامية على المدينة.",
    features: ["قاعة اجتماعات", "استقبال مشترك", "إنترنت سريع", "موقف خاص", "إضاءة LED", "تكييف مركزي", "أمن 24/7", "طابعة مشتركة"],
    agent: { name: "أحمد يوسف", role: "مدير عقارات تجارية", phone: "+970 59 000 0003" }
  },
  {
    id: 4,
    title: "أرض سكنية في موقع استراتيجي",
    price: 85000,
    priceUnit: "",
    type: "أرض",
    status: "للبيع",
    city: "الخليل",
    area: "الزهراء",
    size: 600,
    rooms: 0,
    baths: 0,
    floor: 0,
    age: 0,
    emoji: "🌱",
    description: "أرض سكنية نظيفة في منطقة هادئة وراقية، ذات تصريح بناء جاهز. تقع على شارع رئيسي بعرض 12 متر، مناسبة لبناء فيلا أو عمارة سكنية.",
    features: ["تصريح بناء جاهز", "شبكة صرف صحي", "شبكة مياه", "كهرباء متاحة", "شارع معبّد", "قريبة من المدارس", "هادئة وراقية"],
    agent: { name: "خالد إبراهيم", role: "متخصص أراضي", phone: "+970 59 000 0004" }
  },
  {
    id: 5,
    title: "شقة للإيجار — قلب المدينة",
    price: 650,
    priceUnit: "/ شهر",
    type: "شقة",
    status: "للإيجار",
    city: "نابلس",
    area: "رأس العين",
    size: 130,
    rooms: 3,
    baths: 2,
    floor: 2,
    age: 8,
    emoji: "🏠",
    description: "شقة مفروشة جزئياً في منطقة مركزية مميزة، قريبة من جميع الخدمات. مناسبة للعائلات والموظفين، بالقرب من وسائل النقل.",
    features: ["مفروشة جزئياً", "قريبة من السوق", "شبكة إنترنت", "ماء وكهرباء", "موقف سيارة", "طابق ثانٍ"],
    agent: { name: "ريم ناصر", role: "وكيلة عقارات", phone: "+970 59 000 0005" }
  },
  {
    id: 6,
    title: "محل تجاري في شارع حيوي",
    price: 950,
    priceUnit: "/ شهر",
    type: "محل تجاري",
    status: "للإيجار",
    city: "بيت لحم",
    area: "المركز",
    size: 75,
    rooms: 1,
    baths: 1,
    floor: 1,
    age: 3,
    emoji: "🏪",
    description: "محل تجاري بواجهة زجاجية على شارع تجاري رئيسي ذو حركة مرور عالية. مناسب لجميع الأنشطة التجارية والخدمية.",
    features: ["واجهة زجاجية كبيرة", "كاميرا مراقبة", "تكييف", "لافتة إعلانية", "ستوك خلفي", "شارع رئيسي"],
    agent: { name: "عمر حسين", role: "عقارات تجارية", phone: "+970 59 000 0006" }
  },
  {
    id: 7,
    title: "شقة دوبلكس فاخرة",
    price: 230000,
    priceUnit: "",
    type: "شقة",
    status: "للبيع",
    city: "القدس",
    area: "بيت حنينا",
    size: 260,
    rooms: 4,
    baths: 3,
    floor: 5,
    age: 3,
    emoji: "🌟",
    description: "شقة دوبلكس على طابقين بتشطيب فاخر من الدرجة الأولى، إطلالة ساحرة على المدينة المقدسة. مواد إيطالية الصنع في المطبخ والحمامات.",
    features: ["دوبلكس طابقين", "تشطيب إيطالي", "إطلالة رائعة", "مطبخ مجهز", "حمام رئيسي جاكوزي", "ساونا", "خزانة ملابس واسعة"],
    agent: { name: "هالة كمال", role: "وكيلة عقارات فاخرة", phone: "+970 59 000 0007" }
  },
  {
    id: 8,
    title: "فيلا مستقلة — هادئة ومريحة",
    price: 380000,
    priceUnit: "",
    type: "فيلا",
    status: "للبيع",
    city: "جنين",
    area: "مخيم جنين",
    size: 320,
    rooms: 5,
    baths: 3,
    floor: 2,
    age: 6,
    emoji: "🏡",
    description: "فيلا مستقلة في حي هادئ وراقٍ، مع مدخل خاص وحديقة أمامية جميلة. مناسبة للعائلات الكبيرة التي تبحث عن الخصوصية والراحة.",
    features: ["مدخل خاص", "حديقة أمامية", "غرفة مخزن", "سطح واسع", "تدفئة مركزية", "كاميرات حديثة", "جلسة خارجية"],
    agent: { name: "نادر صالح", role: "وكيل عقارات", phone: "+970 59 000 0008" }
  }
];

const agents = [
  { id: 1, name: "محمد عبد الله", role: "وكيل عقارات سكنية", emoji: "👨‍💼", deals: 48, rating: 4.9, city: "رام الله", phone: "+970 59 000 0001", email: "m.abdullah@nestora.ps" },
  { id: 2, name: "سارة محمود", role: "عقارات فاخرة", emoji: "👩‍💼", deals: 62, rating: 5.0, city: "نابلس", phone: "+970 59 000 0002", email: "s.mahmoud@nestora.ps" },
  { id: 3, name: "أحمد يوسف", role: "عقارات تجارية", emoji: "🧑‍💼", deals: 35, rating: 4.8, city: "رام الله", phone: "+970 59 000 0003", email: "a.yousef@nestora.ps" },
  { id: 4, name: "خالد إبراهيم", role: "متخصص أراضي", emoji: "👨‍🏫", deals: 29, rating: 4.7, city: "الخليل", phone: "+970 59 000 0004", email: "k.ibrahim@nestora.ps" },
  { id: 5, name: "ريم ناصر", role: "وكيلة إيجارات", emoji: "👩‍🏫", deals: 54, rating: 4.9, city: "نابلس", phone: "+970 59 000 0005", email: "r.nasser@nestora.ps" },
  { id: 6, name: "عمر حسين", role: "عقارات تجارية", emoji: "🧑‍💻", deals: 41, rating: 4.8, city: "بيت لحم", phone: "+970 59 000 0006", email: "o.hussein@nestora.ps" },
  { id: 7, name: "هالة كمال", role: "عقارات فاخرة", emoji: "👩‍🎓", deals: 73, rating: 5.0, city: "القدس", phone: "+970 59 000 0007", email: "h.kamal@nestora.ps" },
  { id: 8, name: "نادر صالح", role: "وكيل عقارات", emoji: "👨‍🎓", deals: 38, rating: 4.6, city: "جنين", phone: "+970 59 000 0008", email: "n.saleh@nestora.ps" }
];

// Favorites stored in localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem('nestora_favorites') || '[]');
}
function toggleFavorite(id) {
  let favs = getFavorites();
  const i = favs.indexOf(id);
  if (i === -1) { favs.push(id); showToast('❤️ تمت الإضافة إلى المفضلة'); }
  else { favs.splice(i, 1); showToast('💔 تمت الإزالة من المفضلة'); }
  localStorage.setItem('nestora_favorites', JSON.stringify(favs));
  updateFavCount();
  return i === -1;
}
function updateFavCount() {
  const c = document.getElementById('favCount');
  if (c) c.textContent = getFavorites().length;
}
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
function formatPrice(p, unit) {
  if (p >= 1000) return '$' + p.toLocaleString() + (unit || '');
  return '$' + p + (unit || '');
}
function buildPropertyCard(prop, compact = false) {
  const favs = getFavorites();
  const isFav = favs.includes(prop.id);
  const specs = prop.type === 'أرض'
    ? `<div class="spec"><span class="spec-icon">📐</span>${prop.size} م²</div>`
    : `${prop.rooms > 0 ? `<div class="spec"><span class="spec-icon">🛏️</span>${prop.rooms} غرف</div>` : ''}
       ${prop.baths > 0 ? `<div class="spec"><span class="spec-icon">🚿</span>${prop.baths} حمام</div>` : ''}
       <div class="spec"><span class="spec-icon">📐</span>${prop.size} م²</div>`;

  return `
    <div class="prop-card fade-in" data-id="${prop.id}">
      <div class="prop-img-wrap">
        <div class="prop-img-placeholder">${prop.emoji}</div>
        <span class="prop-badge ${prop.status === 'للبيع' ? 'badge-sale' : 'badge-rent'}">${prop.status}</span>
        <button class="prop-fav-btn ${isFav ? 'active' : ''}" onclick="handleFav(${prop.id},this)" title="إضافة للمفضلة">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="prop-body">
        <div class="prop-price">${formatPrice(prop.price, prop.priceUnit)}</div>
        <div class="prop-title">${prop.title}</div>
        <div class="prop-location">📍 ${prop.city} — ${prop.area}</div>
        <div class="prop-specs">${specs}</div>
        <div class="prop-footer">
          <span class="prop-type-tag">${prop.type}</span>
          <a href="property-details.html?id=${prop.id}" class="prop-details-btn">التفاصيل ←</a>
        </div>
      </div>
    </div>`;
}
function handleFav(id, btn) {
  const added = toggleFavorite(id);
  btn.innerHTML = added ? '❤️' : '🤍';
  btn.classList.toggle('active', added);
}
