const tripStats = [
  { label: "Stay", value: "4 nights" },
  { label: "Main Base", value: "Cebu City" },
  { label: "Big Day", value: "Oslob + Kawasan" },
  { label: "Flight", value: "NRT <-> CEB" },
];

function mapLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const visualCards = [
  {
    label: "Night View",
    title: "TOPS Cebu",
    body: "初日のごほうび枠。セブの街明かりを上から一気に浴びる。",
    image:
      "https://www.topscebu.ph/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxei9udv%2Fproduction%2F5a1ad2ed0a23018b2aaefc1661f43526d8d895d9-2048x1152.jpg%3Frect%3D209%2C0%2C1408%2C1051%26fm%3Dwebp&w=3840",
    href: "https://www.topscebu.ph/",
  },
  {
    label: "City Lights",
    title: "Busay Skyline",
    body: "夜景だけでなく、セブの立体感が見えるのがTOPSの強さ。",
    image:
      "https://www.topscebu.ph/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxei9udv%2Fproduction%2Fbfdb7a2caf320336fe4afdf7e36ce43818a4d97b-6048x4024.jpg%3Frect%3D383%2C0%2C5367%2C4024%26fm%3Dwebp&w=3840",
    href: "https://www.topscebu.ph/",
  },
  {
    label: "Adventure",
    title: "Kawasan Canyoneering",
    body: "4/4 の主役。水の色とジャンプの迫力で一気に旅感が上がる。",
    image:
      "https://www.canyoneering-cebu.com/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fkawasan.8df8d4ef.webp&w=3840",
    href: "https://www.canyoneering-cebu.com/",
  },
];

const videoGuides = [
  {
    title: "MCIA alternate runway inauguration",
    subtitle: "空港の雰囲気を掴む参考",
    channel: "RTVMalacanang",
    embed: "https://www.youtube-nocookie.com/embed/TCMm-ViyxQc",
    href: "https://www.youtube.com/watch?v=TCMm-ViyxQc",
  },
  {
    title: "Oslob whale shark watching guide",
    subtitle: "朝の動き方と海の雰囲気を確認",
    channel: "Cebu Insider",
    embed: "https://www.youtube-nocookie.com/embed/5zgHwdrEgwg",
    href: "https://www.youtube.com/watch?v=5zgHwdrEgwg",
  },
  {
    title: "Kawasan Falls canyoneering guide",
    subtitle: "ジャンプの雰囲気と服装の参考用",
    channel: "Canyoneering Cebu",
    embed: "https://www.youtube-nocookie.com/embed/wsGT9qgpJE4",
    href: "https://www.youtube.com/watch?v=wsGT9qgpJE4",
  },
];

const blogGuides = [
  {
    tag: "TOPS",
    title: "Tops Lookout in Cebu Reimagined",
    summary: "TOPS が今どんな雰囲気か、周辺レストランも含めて掴みやすい最近のガイド。",
    href: "https://3d-universal.com/en/blogs/tops-lookout-in-cebu-reimagined-a-2025-guide-for-english-students-sunset-chasers-and-weekend-explorers.html",
  },
  {
    tag: "Oslob",
    title: "Oslob Whale Shark Watching 2025",
    summary: "オスロブの流れ、注意点、現地での感覚を把握しやすい定番ガイド。",
    href: "https://cebuinsider.com/oslob-whale-shark-watching/",
  },
  {
    tag: "Kawasan",
    title: "Official Kawasan Canyoneering Guide",
    summary: "服装や持ち物、所要時間、ジャンプの雰囲気まで整理されている実用寄りの案内。",
    href: "https://kawasanquest.com/kawasan-falls-canyoneering/",
  },
  {
    tag: "Cebu Plan",
    title: "The ultimate Cebu itinerary for 5 days",
    summary: "旅程の組み方の参考にしやすい俯瞰型のルート記事。",
    href: "https://www.roughguides.com/philippines/itineraries/cebu/",
  },
];

const overviewCards = [
  {
    kicker: "Arrival Day",
    title: "4/2 Cebu In",
    body: "空港到着からIT Parkへ。夕方はTOPS Cebuで夜景とディナー。",
  },
  {
    kicker: "City Walk",
    title: "4/3 Cebu City",
    body: "教会、歴史スポット、ローカルマーケットを回る街歩きデー。",
  },
  {
    kicker: "Adventure",
    title: "4/4 South Cebu",
    body: "オスロブでジンベエザメ、バディアンでキャニオニングの全力日。",
  },
  {
    kicker: "Reset Day",
    title: "4/5 Souvenir & Chill",
    body: "SM Seasideでお土産、仕上げにマッサージで整える最終日。",
  },
  {
    kicker: "Flight Back",
    title: "4/6 Return",
    body: "2026年4月6日 02:15 発でセブから成田へ帰国。",
  },
];

const flightSummary = [
  { label: "予約番号", value: "QKCTUJ" },
  { label: "支払合計", value: "JPY 48,960" },
  { label: "往路", value: "5J 5063 / 2026-04-02" },
  { label: "復路", value: "5J 5062 / 2026-04-06" },
];

const flights = [
  {
    direction: "Outbound",
    route: "NRT -> CEB",
    flightNo: "5J 5063",
    date: "2026-04-02",
    departure: "08:55",
    arrival: "13:15",
    duration: "5h 20m",
    from: "Tokyo (Narita) / Narita International Airport Terminal 2",
    to: "Cebu / Mactan Cebu International Airport Terminal 2",
    addOn: "GO Basic / 座席未割り当て",
  },
  {
    direction: "Return",
    route: "CEB -> NRT",
    flightNo: "5J 5062",
    date: "2026-04-06",
    departure: "02:15",
    arrival: "08:10",
    duration: "4h 55m",
    from: "Cebu / Mactan Cebu International Airport Terminal 2",
    to: "Tokyo (Narita) / Narita International Airport Terminal 2",
    addOn: "GO Basic / 座席未割り当て",
  },
];

const itinerary = [
  {
    date: "4月2日",
    label: "Day 1",
    subtitle: "Arrival / IT Park / TOPS Cebu",
    entries: [
      {
        time: "08:55 - 13:25",
        title: "セブ島到着",
        location: "マクタン・セブ国際空港 -> SM City",
        detail: "空港到着後、まずはSM Cityへ移動して街のテンポに慣れるスタート。",
        cost: "50 PHP",
        status: "予約済み",
        mapLabel: "Airport",
        mapUrl: mapLink("Mactan-Cebu International Airport"),
      },
      {
        time: "13:50 - 15:30",
        title: "荷物預け",
        location: "CEBU IT Park",
        detail: "友人の部屋に荷物を置いて行動しやすい状態へ。",
        cost: "200 PHP",
        status: "予約不要",
        mapLabel: "IT Park",
        mapUrl: mapLink("Cebu IT Park"),
      },
      {
        time: "17:00 - 21:00",
        title: "TOPS + 夕食",
        location: "TOPS Cebu",
        detail: "夕暮れから夜景まで楽しめる定番スポット。初日のごほうび枠。",
        cost: "200 PHP",
        status: "予約済み",
        mapLabel: "TOPS",
        mapUrl: mapLink("TOPS Cebu"),
      },
    ],
  },
  {
    date: "4月3日",
    label: "Day 2",
    subtitle: "Classic Cebu City Walk",
    entries: [
      {
        time: "終日予定",
        title: "セブ市内観光",
        location: "Santo Nino / Magellan's Cross / Carbon Market",
        detail: "開店状況を見ながら順番を調整。歴史とローカル感をまとめて味わう日。",
        cost: "都度支払い",
        status: "予約不要",
        mapLabel: "City Spots",
        mapUrl: mapLink("Basilica Minore del Santo Nino de Cebu"),
      },
    ],
  },
  {
    date: "4月4日",
    label: "Day 3",
    subtitle: "Oslob Whale Sharks + Kawasan Canyoneering",
    entries: [
      {
        time: "04:00 - 07:00",
        title: "ホテルピックアップ 〜 オスロブ移動",
        location: "Cebu City -> Oslob",
        detail: "かなり早朝出発。朝食は各自で準備。",
        cost: "7,000 PHP プラン内",
        status: "予約済み",
        mapLabel: "Oslob",
        mapUrl: mapLink("Oslob Cebu"),
      },
      {
        time: "07:00 - 10:00",
        title: "ジンベエザメ・ウォッチング & シュノーケリング",
        location: "Oslob",
        detail: "今回の旅の目玉アクティビティのひとつ。",
        cost: "7,000 PHP プラン内",
        status: "予約済み",
        mapLabel: "Whale Shark",
        mapUrl: mapLink("Oslob Whale Shark Watching"),
      },
      {
        time: "10:00 - 12:00",
        title: "バディアン移動 〜 ランチ",
        location: "Oslob -> Badian -> Kawasan Falls",
        detail: "次のアドベンチャーに向けて移動しつつ休憩。",
        cost: "7,000 PHP プラン内",
        status: "予約済み",
        mapLabel: "Badian",
        mapUrl: mapLink("Badian Cebu"),
      },
      {
        time: "12:00 - 15:00",
        title: "キャニオニング・アドベンチャー",
        location: "Kawasan Falls",
        detail: "セブ南部の人気体験。濡れてよい服と体力が必要。",
        cost: "7,000 PHP プラン内",
        status: "予約済み",
        mapLabel: "Kawasan",
        mapUrl: mapLink("Kawasan Falls"),
      },
      {
        time: "15:00 - 16:00",
        title: "カワサン滝でリラックス",
        location: "Kawasan Falls",
        detail: "アクティブ時間のあとに少し余白を取る癒やしパート。",
        cost: "7,000 PHP プラン内",
        status: "予約済み",
        mapLabel: "Falls",
        mapUrl: mapLink("Kawasan Falls"),
      },
      {
        time: "16:00 - 19:00",
        title: "セブ市内へ帰還",
        location: "Kawasan Falls -> Cebu City",
        detail: "ホテルまたは空港着を想定。ガソリン代で変動の可能性あり。",
        cost: "現金推奨",
        status: "予約済み",
      },
      {
        time: "夜",
        title: "バー巡り",
        location: "The Tavern / Verified",
        detail: "ローカル寄りでいくか、少しドレスアップして行くかで雰囲気を変えられる。",
        cost: "自由予算",
        status: "予約不要",
        mapLabel: "Bars",
        mapUrl: mapLink("The Tavern Cebu"),
      },
    ],
  },
  {
    date: "4月5日",
    label: "Day 4",
    subtitle: "Souvenirs / Massage / Final Flow",
    entries: [
      {
        time: "午前 / 午後",
        title: "SM Seaside でお土産購入",
        location: "SM Seaside City Cebu",
        detail: "ばらまき用から自分用までまとめ買いしやすい大型モール。",
        cost: "買い物次第",
        status: "予約不要",
        mapLabel: "SM Seaside",
        mapUrl: mapLink("SM Seaside City Cebu"),
      },
      {
        time: "時間未定",
        title: "マッサージ",
        location: "TBA",
        detail: "旅の締めに回復時間を入れる想定。店舗は調整中。",
        cost: "TBA",
        status: "予約待ち",
      },
    ],
  },
];

const highlightSpots = [
  {
    type: "View Point",
    title: "TOPS Cebu",
    body: "初日に入れると一気に旅モードへ入れる、セブ定番の夜景スポット。",
    mapUrl: mapLink("TOPS Cebu"),
  },
  {
    type: "Historic Core",
    title: "Santo Nino / Magellan's Cross",
    body: "セブの歴史を感じられる王道ルート。短時間でも密度が高い。",
    mapUrl: mapLink("Basilica Minore del Santo Nino de Cebu"),
  },
  {
    type: "Local Energy",
    title: "Carbon Market",
    body: "ローカル感を味わいたいなら外せないエリア。歩きやすい服装向き。",
    mapUrl: mapLink("Carbon Market Cebu"),
  },
  {
    type: "Adventure Peak",
    title: "Oslob + Kawasan",
    body: "今回の旅のハイライト。朝は早いけれど、そのぶん記憶に残る1日。",
    mapUrl: mapLink("Oslob Whale Shark Watching"),
  },
];

const quickMaps = [
  { title: "Mactan-Cebu Airport", note: "到着地点", url: mapLink("Mactan-Cebu International Airport") },
  { title: "Cebu IT Park", note: "荷物預けベース", url: mapLink("Cebu IT Park") },
  { title: "TOPS Cebu", note: "初日の夜景スポット", url: mapLink("TOPS Cebu") },
  { title: "Santo Nino Basilica", note: "市内観光の定番", url: mapLink("Basilica Minore del Santo Nino de Cebu") },
  { title: "Magellan's Cross", note: "歴史スポット", url: mapLink("Magellan's Cross Cebu") },
  { title: "Carbon Market", note: "ローカル市場", url: mapLink("Carbon Market Cebu") },
  { title: "Kawasan Falls", note: "キャニオニング地点", url: mapLink("Kawasan Falls") },
  { title: "SM Seaside", note: "お土産モール", url: mapLink("SM Seaside City Cebu") },
];

const bookingNotes = [
  "TOPS Cebu と 4月4日の南部ツアーは予約済み前提で表示。",
  "荷物預け、セブ市内観光、バー巡り、お土産購入は予約不要。",
  "マッサージは予約待ちなので、確定後に店舗名と時間を追記できる構造にしてある。",
];

const packingNotes = [
  "パスポート、財布、スマホ、充電器は最優先の基本セット。",
  "日差し対策として帽子、日焼け止め、サングラスがあると安心。",
  "羽織り1枚があるとモールや車内の冷房対策に便利。",
];

const utilityNotes = [
  "モバイルバッテリーは移動日と街歩き日にかなり助かる。",
  "防水スマホケースがあると 4月4日 の写真と移動がかなり楽。",
  "ジップロックや小袋があると濡れ物、現金、レシート管理に便利。",
];

const adventureNotes = [
  "ラッシュガード or 濡れてよいTシャツ、速乾ショーツ。",
  "滑っても大丈夫なサンダル or マリンシューズ。",
  "タオル、替えの下着、帰り用の乾いた服。",
  "酔いやすいなら酔い止め、朝が早いので前夜にまとめて準備。",
];

const moneyNotes = [
  "初日の想定コストは 50 PHP + 200 PHP + 200 PHP。",
  "4月4日の南部ツアーは 7,000 PHP で、ガソリン代により変動の可能性あり。",
  "航空券の支払総額は JPY 48,960。",
  "現地での追加支出は食事、バー代、お土産、マッサージ代を別枠で見るのがおすすめ。",
];

const heroStats = document.getElementById("hero-stats");
const overviewGrid = document.getElementById("overview-grid");
const flightSummaryGrid = document.getElementById("flight-summary");
const flightGrid = document.getElementById("flight-grid");
const visualStrip = document.getElementById("visual-strip");
const videoReel = document.getElementById("video-reel");
const blogGrid = document.getElementById("blog-grid");
const dayGrid = document.getElementById("day-grid");
const spotGrid = document.getElementById("spot-grid");
const mapGrid = document.getElementById("map-grid");
const bookingList = document.getElementById("booking-list");
const packingList = document.getElementById("packing-list");
const utilityList = document.getElementById("utility-list");
const adventureList = document.getElementById("adventure-list");
const moneyList = document.getElementById("money-list");

function statusClass(status) {
  if (status === "予約待ち") {
    return "waiting";
  }

  if (status === "予約不要") {
    return "free";
  }

  return "";
}

function renderStats() {
  heroStats.innerHTML = tripStats
    .map(
      (item) => `
        <article class="stat-pill">
          <span class="label">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderOverview() {
  overviewGrid.innerHTML = overviewCards
    .map(
      (card) => `
        <article class="overview-card">
          <span class="kicker">${card.kicker}</span>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderFlightSummary() {
  flightSummaryGrid.innerHTML = flightSummary
    .map(
      (item) => `
        <article class="overview-card">
          <span class="kicker">${item.label}</span>
          <h3>${item.value}</h3>
        </article>
      `,
    )
    .join("");
}

function renderFlights() {
  flightGrid.innerHTML = flights
    .map(
      (flight) => `
        <article class="flight-card">
          <div class="flight-card-top">
            <div>
              <span class="spot-type">${flight.direction}</span>
              <h3>${flight.route}</h3>
            </div>
            <div class="cost-chip">${flight.flightNo}</div>
          </div>
          <div class="flight-times">
            <div class="flight-stop">
              <span class="kicker">Departure</span>
              <strong>${flight.departure}</strong>
              <p>${flight.from}</p>
            </div>
            <div class="flight-line">
              <span>${flight.duration}</span>
              <small>${flight.date}</small>
            </div>
            <div class="flight-stop">
              <span class="kicker">Arrival</span>
              <strong>${flight.arrival}</strong>
              <p>${flight.to}</p>
            </div>
          </div>
          <div class="meta-text">Add-on: ${flight.addOn}</div>
        </article>
      `,
    )
    .join("");
}

function renderVisuals() {
  visualStrip.innerHTML = visualCards
    .map(
      (item) => `
        <article class="visual-card" style="background-image: linear-gradient(180deg, rgba(12, 18, 24, 0.08), rgba(12, 18, 24, 0.72)), url('${item.image}')">
          <div class="visual-card-body">
            <span class="spot-type visual-tag">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <a class="visual-link" href="${item.href}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVideos() {
  videoReel.innerHTML = videoGuides
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-frame">
            <iframe
              src="${video.embed}"
              title="${video.title}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div class="video-copy">
            <span class="spot-type">${video.channel}</span>
            <h3>${video.title}</h3>
            <p>${video.subtitle}</p>
            <a class="map-link standalone" href="${video.href}" target="_blank" rel="noreferrer">YouTubeで開く</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBlogs() {
  blogGrid.innerHTML = blogGuides
    .map(
      (blog) => `
        <article class="guide-card blog-card">
          <span class="spot-type">${blog.tag}</span>
          <h3>${blog.title}</h3>
          <p>${blog.summary}</p>
          <a class="map-link standalone" href="${blog.href}" target="_blank" rel="noreferrer">記事を読む</a>
        </article>
      `,
    )
    .join("");
}

function renderTimeline(entries) {
  return entries
    .map(
      (entry) => `
        <div class="timeline-item">
          <div class="timeline-top">
            <div>
              <div class="time">${entry.time}</div>
              <div class="event-title">${entry.title}</div>
            </div>
            <div class="meta-row">
              <span class="status-chip ${statusClass(entry.status)}">${entry.status}</span>
              <span class="cost-chip">${entry.cost}</span>
              ${entry.mapUrl ? `<a class="map-link" href="${entry.mapUrl}" target="_blank" rel="noreferrer">${entry.mapLabel || "Map"}</a>` : ""}
            </div>
          </div>
          <div class="meta-text">場所: ${entry.location}</div>
          <div class="meta-text">${entry.detail}</div>
        </div>
      `,
    )
    .join("");
}

function renderDays() {
  dayGrid.innerHTML = itinerary
    .map(
      (day) => `
        <article class="day-card">
          <div class="day-header">
            <div class="day-topline">
              <span class="date-badge">${day.date}</span>
              <span class="date-badge">${day.label}</span>
            </div>
            <h3>${day.subtitle}</h3>
          </div>
          <div class="day-body">
            ${renderTimeline(day.entries)}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSpots() {
  spotGrid.innerHTML = highlightSpots
    .map(
      (spot) => `
        <article class="spot-card">
          <span class="spot-type">${spot.type}</span>
          <h3>${spot.title}</h3>
          <p>${spot.body}</p>
          <a class="map-link standalone" href="${spot.mapUrl}" target="_blank" rel="noreferrer">Google Maps</a>
        </article>
      `,
    )
    .join("");
}

function renderMaps() {
  mapGrid.innerHTML = quickMaps
    .map(
      (item) => `
        <article class="spot-card map-card">
          <span class="spot-type">Shortcut</span>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
          <a class="map-link standalone" href="${item.url}" target="_blank" rel="noreferrer">Open Map</a>
        </article>
      `,
    )
    .join("");
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

renderStats();
renderOverview();
renderFlightSummary();
renderFlights();
renderVisuals();
renderDays();
renderVideos();
renderBlogs();
renderSpots();
renderMaps();
renderList(bookingList, bookingNotes);
renderList(packingList, packingNotes);
renderList(utilityList, utilityNotes);
renderList(adventureList, adventureNotes);
renderList(moneyList, moneyNotes);
