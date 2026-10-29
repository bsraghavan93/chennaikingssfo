/* Chennai Kings – shared behaviour. Depends on data.js */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = p => (typeof p === "number" ? "$" + p.toFixed(2) : p);
  const page = document.body.dataset.page;
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const NAV = [
    ["index.html", "Home", "home"], ["menu.html", "Menu", "menu"], ["catering.html", "Catering", "catering"],
    ["private-events.html", "Private Events", "events"], ["live-music.html", "Live Music & Cricket", "music"],
    ["gallery.html", "Gallery", "gallery"], ["contact.html", "Contact", "contact"]
  ];

  const t12 = t => { const [h, m] = t.split(":").map(Number); return ((h + 11) % 12 + 1) + (m ? ":" + String(m).padStart(2, "0") : "") + (h < 12 ? " AM" : " PM"); };
  const mins = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

  function laNow() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: SITE.timezone, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    const g = k => parts.find(p => p.type === k).value;
    return { day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday")), min: (+g("hour") % 24) * 60 + +g("minute") };
  }
  function openStatus() {
    const { day, min } = laNow(), [o, c] = SITE.hours[day];
    if (min >= mins(o) && min < mins(c)) return { open: true, text: `Open now · until ${t12(c)}` };
    if (min < mins(o)) return { open: false, text: `Closed · opens ${t12(o)}` };
    const [no] = SITE.hours[(day + 1) % 7];
    return { open: false, text: `Closed · opens tomorrow ${t12(no)}` };
  }

  const ic = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>'
  };

  /* ---------- Header / footer / sticky ---------- */
  function buildChrome() {
    const nav = NAV.map(([h, l, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ""}>${l}</a>`).join("");
    const reserve = SITE.orderUrl
      ? `<a class="btn btn-ghost" href="${SITE.orderUrl}" target="_blank" rel="noopener">Order online</a>` : "";
    $("#site-header").innerHTML = `
      <div class="bar wrap">
        <a class="brand" href="index.html"><img src="assets/logo.png" alt="" width="44" height="44"><span>Chennai Kings<small>${SITE.area} · SF</small></span></a>
        <nav id="nav" aria-label="Main">${nav}</nav>
        <div class="bar-actions">${reserve}<a class="btn btn-gold" href="tel:${SITE.phoneTel}">Reserve a table</a>
        <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button></div>
      </div>`;
    $(".burger").addEventListener("click", e => {
      const o = document.body.classList.toggle("nav-open"); e.currentTarget.setAttribute("aria-expanded", o);
    });

    const soc = Object.entries(SITE.social).filter(([, v]) => v).map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${k[0].toUpperCase() + k.slice(1)}</a>`).join("");
    $("#site-footer").innerHTML = `
      <div class="wrap foot-grid">
        <div><strong class="foot-brand">Chennai Kings</strong><p>South Indian &amp; Chennai food, live music and private events at ${SITE.area}, San Francisco.</p>${soc ? `<p class="soc">${soc}</p>` : ""}</div>
        <div><h4>Visit</h4><p>${SITE.address}</p><p><a href="${SITE.mapsLink}" target="_blank" rel="noopener">Get directions</a></p><p data-open-status class="status"></p></div>
        <div><h4>Contact</h4><p><a href="tel:${SITE.phoneTel}">${SITE.phone}</a> · Restaurant</p>
          ${SITE.contacts.map(c => `<p><a href="tel:${c.tel}">${c.phone}</a> · ${c.name}</p>`).join("")}
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
        <div><h4>Explore</h4>${NAV.map(([h, l]) => `<p><a href="${h}">${l}</a></p>`).join("")}</div>
      </div>
      <div class="wrap copy">© ${new Date().getFullYear()} Chennai Kings. All rights reserved.</div>`;

    // sticky: desktop floating pill + mobile bottom bar
    const sticky = document.createElement("div");
    sticky.className = "sticky";
    sticky.innerHTML = `
      <a href="tel:${SITE.phoneTel}">${ic.phone}<span>Call</span></a>
      <a href="${SITE.mapsLink}" target="_blank" rel="noopener">${ic.pin}<span>Directions</span></a>
      <button class="plan" data-plan>${ic.cal}<span>Plan an event</span></button>`;
    document.body.append(sticky);
  }

  /* ---------- Single inquiry form ---------- */
  function buildInquiry() {
    const d = document.createElement("dialog");
    d.id = "inquiry";
    d.innerHTML = `
      <form method="dialog" class="inq" novalidate>
        <button class="x" value="cancel" aria-label="Close">×</button>
        <h2>Plan your event</h2>
        <p class="lead">Tell us the basics and we'll get back with a quote.</p>
        <label>Event type
          <select name="type" required>
            <option value="">Select…</option><option>Corporate catering</option><option>Team lunch / dinner</option>
            <option>Wedding / reception</option><option>Birthday / family party</option><option>Live dosa station</option>
            <option>Live music / karaoke night</option><option>DJ / dance party</option><option>Cricket screening group</option><option>Other</option>
          </select></label>
        <div class="two">
          <label>Date<input type="date" name="date" required></label>
          <label>Guests<input type="number" name="guests" min="1" inputmode="numeric" placeholder="e.g. 80" required></label>
        </div>
        <label>Your name<input name="name" autocomplete="name" required></label>
        <div class="two">
          <label>Phone<input type="tel" name="phone" autocomplete="tel" required></label>
          <label>Email<input type="email" name="email" autocomplete="email"></label>
        </div>
        <label>Anything else? <small>(location, menu ideas, music…)</small><textarea name="notes" rows="3"></textarea></label>
        <p class="err" role="alert" hidden>Please fill in event type, date, guests, name and phone.</p>
        <button type="submit" class="btn btn-gold wide">Send inquiry</button>
        <p class="fine">Opens your email app with the details filled in. Or call <a href="tel:${SITE.contacts[0].tel}">${SITE.contacts[0].phone}</a>.</p>
      </form>`;
    document.body.append(d);
    const form = $("form", d), F = form.elements;
    F.date.min = new Date().toISOString().slice(0, 10);
    document.addEventListener("click", e => {
      if (e.target.closest("[data-plan]")) { const t = e.target.closest("[data-plan]").dataset.plan; if (t) F.type.value = t; d.showModal(); }
      if (e.target === d) d.close();
    });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const f = F;
      if (!f.type.value || !f.date.value || !f.guests.value || !f.name.value.trim() || !f.phone.value.trim()) { $(".err", form).hidden = false; return; }
      const body = `Event type: ${f.type.value}\nDate: ${f.date.value}\nGuests: ${f.guests.value}\nName: ${f.name.value}\nPhone: ${f.phone.value}\nEmail: ${f.email.value}\n\n${f.notes.value}`;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Event inquiry – " + f.type.value)}&body=${encodeURIComponent(body)}`;
      d.close();
    });
  }

  /* ---------- Lazy video: poster first, load on click ---------- */
  function videoTile(v) {
    return `<button class="vid" data-src="${v.src}" aria-label="Play: ${v.alt}">
      <img src="${v.poster}" alt="${v.alt}" loading="lazy"><span class="play" aria-hidden="true"></span></button>`;
  }
  document.addEventListener("click", e => {
    const b = e.target.closest(".vid"); if (!b) return;
    const v = document.createElement("video");
    v.src = b.dataset.src; v.controls = true; v.autoplay = true; v.playsInline = true; v.preload = "auto";
    v.setAttribute("aria-label", b.getAttribute("aria-label"));
    b.replaceWith(v);
  });

  /* ---------- Renderers ---------- */
  const R = {
    status() { $$("[data-open-status]").forEach(el => { const s = openStatus(); el.textContent = s.text; el.classList.toggle("is-open", s.open); }); },

    hours() {
      const today = laNow().day, order = [1, 2, 3, 4, 5, 6, 0];
      $$("[data-hours]").forEach(el => el.innerHTML = order.map(i =>
        `<li${i === today ? ' class="today"' : ""}><span>${DAYS[i]}</span><span>${t12(SITE.hours[i][0])} – ${t12(SITE.hours[i][1])}</span></li>`).join(""));
    },

    stats() { $$("[data-stats]").forEach(el => el.innerHTML = STATS.map(s => `<div><b>${s.n}</b><span>${s.l}</span></div>`).join("")); },

    past() {
      $$("[data-past]").forEach(el => el.innerHTML = PAST_EVENTS.map(e =>
        `<a class="card ev" href="gallery.html#${e.cat}"><img src="assets/${e.img}" alt="${e.t}" loading="lazy"><div><h3>${e.t}</h3><p>${e.s}</p></div></a>`).join(""));
    },

    packages() {
      $$("[data-packages]").forEach(el => el.innerHTML = PACKAGES.map(p => `
        <article class="pkg${p.featured ? " feat" : ""}">
          ${p.featured ? '<span class="ribbon">Most popular</span>' : ""}
          <p class="tag">${p.tag}</p><h3>${p.name}</h3><p class="guests">${p.guests}</p>
          <p class="price">${p.price ? `<b>$${p.price}</b> / person` : "<b>Custom quote</b>"}</p>
          <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
          <button class="btn ${p.featured ? "btn-gold" : "btn-ghost-dark"} wide" data-plan="${p.name === "Wedding & Party" ? "Wedding / reception" : p.name === "Live Dosa Station" ? "Live dosa station" : "Corporate catering"}">Get a quote</button>
        </article>`).join(""));
    },

    events() {
      $$("[data-events]").forEach(el => {
        const filter = el.dataset.events, today = new Date().toISOString().slice(0, 10);
        const list = EVENTS.filter(e => e.date >= today && (filter === "all" || filter.split(",").includes(e.type))).sort((a, b) => a.date.localeCompare(b.date));
        const icon = { cricket: "🏏", music: "🎶", karaoke: "🎤", dj: "🪩", party: "🎉" };
        el.innerHTML = list.length ? list.map(e => {
          const d = new Date(e.date + "T12:00:00");
          return `<li class="cal-row"><time datetime="${e.date}"><b>${d.getDate()}</b>${d.toLocaleString("en-US", { month: "short" })}</time>
            <div><h3>${icon[e.type] || ""} ${e.title}${e.sample ? ' <em class="badge">Sample</em>' : ""}</h3><p>${e.time} · ${e.note}</p></div>
            <a class="btn btn-ghost-dark" href="tel:${SITE.phoneTel}">Reserve</a></li>`;
        }).join("") : `<li class="cal-empty">No upcoming events listed. Call ${SITE.phone} for the latest schedule.</li>`;
      });
    },

    menu() {
      const root = $("#menu-root"); if (!root) return;
      const section = (id, title, body, extra = "") => `<section class="m-sec" id="${id}" data-title="${title.toLowerCase()}"><h2>${title}</h2>${extra}${body}</section>`;
      const rows = items => `<ul class="m-list">${items.map(i => `<li data-name="${i.n.toLowerCase()}"><div class="m-name">${i.veg ? '<i class="veg" title="Vegetarian"></i>' : ""}<span>${i.n}${i.note ? ` <small>${i.note}</small>` : ""}</span></div><span class="m-dots"></span><b>${money(i.p)}</b></li>`).join("")}</ul>`;
      const main = MENU.map(c => section(c.id, c.title, rows(c.items))).join("");
      const specials = section("specials", "Chennai Kings Specials", `<p class="lead">${SPECIALS.intro}</p><ul class="chips">${SPECIALS.items.map(i => `<li>${i}</li>`).join("")}</ul>`);
      const happy = section("happy", "Happy Hour", `
        <p class="hh-time">${HAPPY.times}</p>
        <div class="hh-grid"><div><h3>Drinks</h3><ul class="m-list">${HAPPY.drinks.map(d => `<li><div class="m-name"><span>${d.n}</span></div><span class="m-dots"></span><b>$${d.p}</b><s>$${d.reg}</s></li>`).join("")}</ul></div>
        <div><h3>Half-price appetizers</h3><ul class="chips">${HAPPY.halfPrice.map(i => `<li>${i}</li>`).join("")}</ul><p class="fine">${HAPPY.rules}</p></div></div>`);
      const bw = section("beer-wine", "Beer & Wine", rows(BEER_WINE));
      const cat = section("catering-menu", "Catering & Party Menus", `<p class="lead">Custom menus for 15 to 800+ guests, at our party hall or at your location.</p><button class="btn btn-gold" data-plan="Corporate catering">Request a quote</button>`);
      root.innerHTML = main + specials + happy + bw + cat;

      const tabs = [["all", "Full menu"], ["specials", "Specials"], ["happy", "Happy hour"], ["beer-wine", "Beer & wine"], ["catering-menu", "Catering"]];
      const bar = $("#menu-tabs");
      bar.innerHTML = tabs.map(([k, l], i) => `<button data-tab="${k}"${i ? "" : ' class="on"'}>${l}</button>`).join("");
      const jump = $("#menu-jump");
      jump.innerHTML = MENU.map(c => `<a href="#${c.id}">${c.title}</a>`).join("");
      const apply = () => {
        const tab = $(".on", bar).dataset.tab, q = $("#menu-search").value.trim().toLowerCase();
        $$(".m-sec", root).forEach(s => {
          const isMain = MENU.some(c => c.id === s.id);
          if (q) {
            // search spans every section regardless of tab
            let any = false;
            $$("li", s).forEach(li => { const m = (li.dataset.name || li.textContent.toLowerCase()).includes(q); li.hidden = !m; if (m) any = true; });
            s.hidden = !any || s.id === "catering-menu";
          } else {
            $$("li", s).forEach(li => li.hidden = false);
            s.hidden = tab === "all" ? !isMain : s.id !== tab;
          }
        });
        jump.hidden = tab !== "all" || !!q;
        $("#menu-empty").hidden = !!$$(".m-sec", root).find(s => !s.hidden);
      };
      bar.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; $$("button", bar).forEach(x => x.classList.remove("on")); b.classList.add("on"); apply(); window.scrollTo({ top: 0 }); });
      $("#menu-search").addEventListener("input", apply);
      apply();
    },

    gallery() {
      const root = $("#gallery-root"); if (!root) return;
      const chips = $("#gallery-chips");
      chips.innerHTML = GALLERY_CATS.map(([k, l]) => `<button data-cat="${k}">${l}</button>`).join("");
      const show = cat => {
        $$("button", chips).forEach(b => b.classList.toggle("on", b.dataset.cat === cat));
        const list = cat === "all" ? GALLERY : GALLERY.filter(g => g.cat === cat);
        root.innerHTML = list.map((g, i) => g.type === "video" ? `<div class="g-item g-video">${videoTile(g)}</div>`
          : `<button class="g-item" data-i="${GALLERY.indexOf(g)}" aria-label="View: ${g.alt}"><img src="${g.src}" alt="${g.alt}" loading="lazy"></button>`).join("");
        try { history.replaceState(null, "", cat === "all" ? location.pathname : "#" + cat); } catch (_) { /* file:// preview */ }
      };
      chips.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.cat); });
      const start = location.hash.slice(1);
      show(GALLERY_CATS.some(c => c[0] === start) ? start : "all");

      const lb = $("#lightbox"), lbImg = $("img", lb); let cur = 0;
      const imgs = () => { const vis = $$("button.g-item", root).map(b => +b.dataset.i); return vis; };
      const open = i => { cur = i; lbImg.src = GALLERY[i].src; lbImg.alt = GALLERY[i].alt; if (!lb.open) lb.showModal(); };
      const step = d => { const v = imgs(); open(v[(v.indexOf(cur) + d + v.length) % v.length]); };
      root.addEventListener("click", e => { const b = e.target.closest("button.g-item"); if (b) open(+b.dataset.i); });
      $(".prev", lb).onclick = () => step(-1); $(".next", lb).onclick = () => step(1);
      $(".close", lb).onclick = () => lb.close();
      lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
      lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    },

    videos() {
      $$("[data-videos]").forEach(el => {
        const keys = el.dataset.videos.split(",");
        const list = GALLERY.filter(g => g.type === "video" && keys.some(k => g.src.includes(k)));
        el.innerHTML = list.map(v => `<div class="g-item g-video">${videoTile(v)}</div>`).join("");
      });
    },

    photos() {
      $$("[data-photos]").forEach(el => el.innerHTML = GALLERY.filter(g => g.type === "img" && g.cat === el.dataset.photos)
        .map(g => `<div class="g-item" style="cursor:default"><img src="${g.src}" alt="${g.alt}" loading="lazy"></div>`).join(""));
    },

    reviews() {
      $$("[data-reviews]").forEach(el => el.innerHTML = SITE.reviewsUrl
        ? `<a class="btn btn-gold" href="${SITE.reviewsUrl}" target="_blank" rel="noopener">Read our Google reviews</a>`
        : `<a class="btn btn-gold" href="${SITE.mapsLink}" target="_blank" rel="noopener">See reviews on Google Maps</a>`);
    },

    map() { $$("[data-map]").forEach(el => el.innerHTML = `<iframe title="Map to Chennai Kings" src="${SITE.mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`); }
  };

  buildChrome();
  buildInquiry();
  Object.values(R).forEach(fn => fn());
  setInterval(R.status, 60000);
})();
