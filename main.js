// ============ Video data ============
// Each entry maps to a Google Drive file. For playback to work on the live
// site, each fileId below must be shared as "Anyone with the link – Viewer"
// in Google Drive. See the handoff notes for the exact list.
const VIDEO_DATA = [
  {
    id: "15ub92fMZ7pMDVQMzCQLict07LKqg_ar0",
    title: "Direct-Response VSL",
    desc: "Full-length video sales letter, structured for watch time and conversion.",
    cat: "vsl",
    grad: "g1"
  },
  {
    id: "1CZfucfqd6zAaDyNiXnpJK4r47ctky4im",
    title: "Webinar Recording, Full Edit",
    desc: "Long-form webinar, edited down and paced for a sit-through watch.",
    cat: "vsl",
    grad: "g3"
  },
  {
    id: "10iA-KmCQKvIRSjHjxBCb0mQdp2YjLeXi",
    title: "Brand Intro, Long-Form",
    desc: "Long-form intro piece for a recurring client, built to establish trust early.",
    cat: "vsl",
    grad: "g5"
  },
  {
    id: "1eCD_SG2iGGB_LNL5opO3__YkAq8RgjqG",
    title: "Long-Form VSL Edit",
    desc: "A complete video sales letter edit, built for watch time from open to close.",
    cat: "vsl",
    grad: "g4"
  },
  {
    id: "1S99LNprptORAHDfwNEfGeouyuCMsOGyR",
    title: "“AI Is Hyped,” Talking-Head Promo",
    desc: "Hook-driven opinion piece edited for retention and shareability.",
    cat: "promo",
    grad: "g2"
  },
  {
    id: "1SpTbG8LueO0gARyPpZ-WMi1DBDsAxj_Z",
    title: "“Collapse of the Handoff,” Narrative Piece",
    desc: "Story-led thought-leadership edit with layered pacing.",
    cat: "promo",
    grad: "g3"
  },
  {
    id: "1e78xV5zWIwi16coqGenWRYh0UAtMOG_k",
    title: "Tier List, Engagement Format",
    desc: "List-style format built for high completion rate.",
    cat: "promo",
    grad: "g4"
  },
  {
    id: "12JNCT1WO9ZPGXmH2j8WxKNiN8CcxGp33",
    title: "“$2,200 Invoice,” Story Hook",
    desc: "Cold-open hook edit built around a single striking detail.",
    cat: "promo",
    grad: "g5"
  },
  {
    id: "1JnJOjVDT3u5M6VlzzMgrKf3tJpJfjavo",
    title: "Outdoor Living Brand, Product Ad",
    desc: "Service-based ad edit for a home & outdoor living brand.",
    cat: "ads",
    grad: "g2"
  },
  {
    id: "1U05U-hsG_Bwlp8JcJonxGWmg8PmbuqQH",
    title: "Kitchen Remodeling, Offer Ad",
    desc: "Direct-offer ad for a remodeling business.",
    cat: "ads",
    grad: "g1"
  },
  {
    id: "1en6LwvjQz6MZ9ascDNn7wAwitLt9ruyB",
    title: "Bathroom Remodeling, Offer Ad",
    desc: "Local-service offer ad edited for lead generation.",
    cat: "ads",
    grad: "g4"
  },
  {
    id: "1BBd-Ky_EaNRKkMmnJLoJG22j705-GIYC",
    title: "Kitchen Design Brand, Ad",
    desc: "Brand ad edit for a kitchen design & renovation business.",
    cat: "ads",
    grad: "g3"
  },
  {
    id: "13Vtr5H-Gp_QXYoxNMquvTJevFUyUW69l",
    title: "Kitchen Remodel, Client Testimonial",
    desc: "Customer testimonial, edited for warmth and credibility.",
    cat: "testimonial",
    grad: "g5"
  },
  {
    id: "1ndm3ILQUvUZkFwaWI4j9tHTZle8gjOs4",
    title: "Client Testimonial, Laura",
    desc: "Customer testimonial, edited for warmth and credibility.",
    cat: "testimonial",
    grad: "g1"
  },
  {
    id: "11CtUyilV20wRjQK3W4yulRc3WebhrLoN",
    title: "Deck & Patio, Client Testimonial",
    desc: "Customer testimonial edited for a home-improvement brand.",
    cat: "testimonial",
    grad: "g2"
  },
  {
    id: "1wY-4FXiud9EvlVvkvRFdqv4d3O1_Sh7o",
    title: "Client Testimonial",
    desc: "Testimonial edit for a service-based client.",
    cat: "testimonial",
    grad: "g4"
  }
];

const CAT_LABEL = {
  vsl: "VSL & Long-Form",
  promo: "Short-Form & Promo",
  ads: "Service Ad",
  testimonial: "Testimonial"
};

function playIcon(){
  return '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
}

function buildGrid(){
  const grid = document.getElementById("workGrid");
  grid.innerHTML = VIDEO_DATA.map(v => `
    <article class="card" data-cat="${v.cat}">
      <div class="card-media ${v.grad}" data-id="${v.id}" data-title="${v.title.replace(/"/g,'&quot;')}">
        <span class="tc">00:00:0${Math.floor(Math.random()*8)+1}:1${Math.floor(Math.random()*9)}</span>
        <button class="play-btn" aria-label="Play ${v.title}">${playIcon()}</button>
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

// Hero tape frame
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
buildGrid();
initFilters();
