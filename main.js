// ============ Video data ============
// Each entry maps to a Google Drive file. For playback to work on the live
// site, each fileId below must be shared as "Anyone with the link – Viewer"
// in Google Drive. The same sharing level also unlocks the real-frame poster
// thumbnail (drive.google.com/thumbnail) used as Layer 1 of the card art.
// Order here is deliberate: founder/coach-relevant hooks first, testimonials
// next, service-ad work last. See the handoff notes for the exact list.
const VIDEO_DATA = [
  {
    id: "15ub92fMZ7pMDVQMzCQLict07LKqg_ar0",
    title: "Direct-Response VSL",
    desc: "Full-length video sales letter, structured for watch time and conversion.",
    cat: "vsl"
  },
  {
    id: "1S99LNprptORAHDfwNEfGeouyuCMsOGyR",
    title: "“AI Is Hyped,” Talking-Head Promo",
    desc: "Hook-driven opinion piece edited for retention and shareability.",
    cat: "promo"
  },
  {
    id: "1NaUJoh4uQf4L8c1DcNdZTmwiHK7pSfR0",
    title: "“Your AI Project Will Fail,” Talking-Head Promo",
    desc: "Cautionary hook piece edited for a founder audience.",
    cat: "promo"
  },
  {
    id: "1SpTbG8LueO0gARyPpZ-WMi1DBDsAxj_Z",
    title: "“Collapse of the Handoff,” Narrative Piece",
    desc: "Story-led thought-leadership edit with layered pacing.",
    cat: "promo"
  },
  {
    id: "12JNCT1WO9ZPGXmH2j8WxKNiN8CcxGp33",
    title: "“$2,200 Invoice,” Story Hook",
    desc: "Cold-open hook edit built around a single striking detail.",
    cat: "promo"
  },
  {
    id: "1e78xV5zWIwi16coqGenWRYh0UAtMOG_k",
    title: "Tier List, Engagement Format",
    desc: "List-style format built for high completion rate.",
    cat: "promo"
  },
  {
    id: "1S9Od_3EA722pWH2rqhTS5k12vPulTiRU",
    title: "“SME Owner,” Talking-Head Promo",
    desc: "Founder-voice promo piece edited for retention.",
    cat: "promo"
  },
  {
    id: "1k4UOEuSNTUZy8QGeJwOH9UoS_nY7a3NL",
    title: "AI Business Assistant, Cogent Labs",
    desc: "Product explainer cut for Cogent Labs, structured to hold a founder's attention.",
    cat: "promo"
  },
  {
    id: "1ndm3ILQUvUZkFwaWI4j9tHTZle8gjOs4",
    title: "Testimonial Ad, Laura Regan",
    desc: "Customer testimonial, edited for warmth and credibility.",
    cat: "testimonial"
  },
  {
    id: "178FQrd8DqO_sEWSiH1zzrTuVjsgoNvQo",
    title: "Testimonial Ad, Ben",
    desc: "Customer testimonial edit.",
    cat: "testimonial"
  },
  {
    id: "1chqujySFKIxz5OG6-0Tth0oVGMfQhOb7",
    title: "Testimonial Ad, Aditi",
    desc: "Customer testimonial edit.",
    cat: "testimonial"
  },
  {
    id: "1eCD_SG2iGGB_LNL5opO3__YkAq8RgjqG",
    title: "SolarPowerMyRV, Brand Intro",
    desc: "Long-form intro for Emily Mwaki at SolarPowerMyRV, built to establish trust early.",
    cat: "vsl"
  },
  {
    id: "1CZfucfqd6zAaDyNiXnpJK4r47ctky4im",
    title: "Webinar Recording, Full Edit",
    desc: "Long-form webinar, edited down and paced for a sit-through watch.",
    cat: "vsl"
  },
  {
    id: "1JnJOjVDT3u5M6VlzzMgrKf3tJpJfjavo",
    title: "SKOL, Offer Spot",
    desc: "Service-based ad edit for SKOL's outdoor living line.",
    cat: "ads"
  },
  {
    id: "1BBd-Ky_EaNRKkMmnJLoJG22j705-GIYC",
    title: "AnyVision, Offer Spot",
    desc: "Brand ad edit for AnyVision's kitchen design line.",
    cat: "ads"
  },
  {
    id: "1U05U-hsG_Bwlp8JcJonxGWmg8PmbuqQH",
    title: "Offer Spot",
    desc: "Direct-offer ad for a kitchen remodeling business.",
    cat: "ads"
  },
  {
    id: "1en6LwvjQz6MZ9ascDNn7wAwitLt9ruyB",
    title: "Offer Spot",
    desc: "Direct-offer ad for a bathroom remodeling business.",
    cat: "ads"
  },
  {
    id: "13Vtr5H-Gp_QXYoxNMquvTJevFUyUW69l",
    title: "Testimonial Ad",
    desc: "Customer testimonial, edited for warmth and credibility.",
    cat: "testimonial"
  },
  {
    id: "11CtUyilV20wRjQK3W4yulRc3WebhrLoN",
    title: "Testimonial Ad",
    desc: "Customer testimonial edited for a home-improvement brand.",
    cat: "testimonial"
  }
];

const CAT_LABEL = {
  vsl: "VSL & Long-Form",
  promo: "Short-Form & Promo",
  ads: "Service Ad",
  testimonial: "Testimonial"
};

// Short mono-caps word shown in the poster's top-left corner.
const FORMAT_WORD = {
  vsl: "VSL",
  promo: "Promo",
  ads: "Offer",
  testimonial: "Testimonial"
};

function playIcon(){
  return '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
}

// Poster markup shared by grid cards and the hero tape frame.
// Layer order: poster-fallback (designed title card) < poster-frame (real
// Drive thumbnail) < poster-scrim < timecode/format word < play button.
// If the real frame 404s, its onerror hides the <img>, revealing the
// designed fallback underneath instead of an empty box.
function posterMarkup(id, title, cat, hue){
  const titleEsc = title.replace(/"/g,'&quot;');
  return `
    <div class="poster-fallback" style="--hue:${hue}deg"><span class="poster-title">${titleEsc}</span></div>
    <img class="poster-frame" src="https://drive.google.com/thumbnail?id=${id}&sz=w800" alt="" loading="lazy" onerror="this.style.display='none'">
    <div class="poster-scrim"></div>
    <span class="tc">00:00:0${Math.floor(Math.random()*8)+1}:1${Math.floor(Math.random()*9)}</span>
    <span class="format-word">${FORMAT_WORD[cat] || ""}</span>
    <button class="play-btn" aria-label="Play ${titleEsc}">${playIcon()}</button>
  `;
}

function buildGrid(){
  const grid = document.getElementById("workGrid");
  grid.innerHTML = VIDEO_DATA.map((v, i) => `
    <article class="card" data-cat="${v.cat}">
      <div class="card-media" data-id="${v.id}" data-title="${v.title.replace(/"/g,'&quot;')}">
        ${posterMarkup(v.id, v.title, v.cat, (i * 47) % 360)}
      </div>
      <div class="card-body">
        <span class="tag">${CAT_LABEL[v.cat]}</span>
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".card-media").forEach(el => {
    el.addEventListener("click", () => openLightbox(el.dataset.id, el.dataset.title, false));
  });
}

// Hero tape frame poster (same system, baseline hue)
function buildHeroPoster(){
  const frame = document.querySelector(".tape-frame");
  if(!frame) return;
  const poster = frame.querySelector(".tape-poster");
  poster.innerHTML = posterMarkup(frame.dataset.video, frame.dataset.title, "vsl", 0);
}

// ============ Filters ============
function initFilters(){
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".card").forEach(card => {
        const show = filter === "all" || card.dataset.cat === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

// ============ Lightbox ============
const lightbox = document.getElementById("lightbox");
const lightboxFrame = document.getElementById("lightboxFrame");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(fileId, title, vertical){
  lightboxFrame.className = "lightbox-frame" + (vertical ? " vertical" : "");
  lightboxFrame.innerHTML = `<iframe src="https://drive.google.com/file/d/${fileId}/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  lightboxTitle.textContent = title || "";
  lightbox.classList.add("open");
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lightboxFrame.innerHTML = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeLightbox(); });

// Hero tape frame click-to-play
document.querySelectorAll(".tape-frame").forEach(el => {
  el.addEventListener("click", () => openLightbox(el.dataset.video, el.dataset.title, true));
});

// ============ Nav toggle ============
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// ============ Footer year ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ Init ============
buildHeroPoster();
buildGrid();
initFilters();
