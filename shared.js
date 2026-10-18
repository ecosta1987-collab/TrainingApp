// shared.js — dynamic sidebar renderer
// Include in every module page and dashboard.html.
// Call renderSidebar(currentModuleId) on load:
//   - OP-01.html  → renderSidebar('01')
//   - OP-02.html  → renderSidebar('02')
//   - dashboard   → renderSidebar(null)

/* ══════════════════════════════════════════════════════════════════════════════
   SPAZIO SEPARATO (2026-09-30) — deve girare PRIMA di ogni lettura di localStorage.
   Due casi, stesso meccanismo:
   1. Cartella-edizione (es. _edizioni/fiera): edition.js, caricato prima di questo file,
      definisce AW_EDITION.
   2. Spazio di lavoro nel laboratorio (es. packexpo): si entra da
      "3 - APRI Packaging (editor + anteprima)" → content-editor.html?ws=packexpo. Per tutta la
      scheda del browser (sessionStorage 'aw_ws') editor E pagine learner lavorano nello spazio
      packaging: le pagine learner diventano l'ANTEPRIMA di ciò che vedrà il visitatore.
      L'editor decide SOLO dall'indirizzo (?ws=), mai dalla scheda: aprire l'editor del laboratorio
      nella stessa scheda non deve finire nello spazio packaging.
   In entrambi i casi ogni chiave aw_* di localStorage diventa awx_<id>_*: utenti, progressi,
   note, lingua, siti… non si mescolano mai con quelli del laboratorio. Senza nessuno dei due
   casi non succede niente: laboratorio come sempre.
   ══════════════════════════════════════════════════════════════════════════════ */
window.AW_WS_PRESETS = {
  packexpo: { id: 'packexpo', tenantId: 'packexpo-demo', languages: ['en', 'it', 'es', 'pt-BR', 'hi'], unitLabel: 'Line',
    menu: { notes: true, kb: false, dashboard: true, editor: true }, profiles: ['learner'],
    sites: [{ id: 'site1', name: 'Packaging Line 1' }, { id: 'site2', name: 'Packaging Line 2' }] }
};
(function () {
  if (!window.AW_EDITION) {
    var ws = null, isEditor = /content-editor\.html$/i.test(location.pathname);
    try { ws = new URLSearchParams(location.search).get('ws'); } catch (e) {}
    if (!ws && !isEditor) { try { ws = sessionStorage.getItem('aw_ws'); } catch (e) {} }
    var preset = ws && window.AW_WS_PRESETS[ws];
    if (!preset) return;
    try { sessionStorage.setItem('aw_ws', ws); } catch (e) {}
    window.AW_EDITION = JSON.parse(JSON.stringify(preset));
    window.AW_EDITION.preview = true;          // anteprima dal laboratorio, non cartella consegnata
    window.AW_WS_PREVIEW = ws;
  }
  var P = 'awx_' + window.AW_EDITION.id + '_', S = Storage.prototype, g = S.getItem, s = S.setItem, r = S.removeItem;
  // aw_ws_<nome> = la memoria dell'EDITOR di quello spazio: resta col suo nome (l'editor la trova sempre).
  function k(st, x) { return (st === window.localStorage && /^aw_/.test(x) && !/^aw_ws_/.test(x)) ? P + x : x; }
  S.getItem = function (x) { return g.call(this, k(this, x)); };
  S.setItem = function (x, v) { return s.call(this, k(this, x), v); };
  S.removeItem = function (x) { return r.call(this, k(this, x)); };
  // Ripristina demo: svuota SOLO lo spazio di questa edizione (mai il laboratorio, mai l'editor).
  window.awResetDemo = function () {
    var ks = []; for (var i = 0; i < localStorage.length; i++) { var n = localStorage.key(i); if (n && n.indexOf(P) === 0) ks.push(n); }
    ks.forEach(function (n) { r.call(localStorage, n); });
  };
})();
// Anteprima di uno spazio di lavoro: il catalogo si legge dalla memoria dell'editor di quello
// spazio (lezioni Ready), i contenuti dalle versioni PUBBLICATE (IndexedDB). Chiamata da
// translations.js (serve T); nell'editor non fa niente.
window.awWsPreviewApply = function () {
  var ws = window.AW_WS_PREVIEW; if (!ws || /content-editor\.html$/i.test(location.pathname)) return;
  var st = null; try { st = JSON.parse(localStorage.getItem('aw_ws_' + ws) || 'null'); } catch (e) {}
  var trainings = ((st && st.tracks) || []).map(function (t) {
    var prod = ((st.products || []).filter(function (p) { return p.id === t.productId; })[0]) || {};
    var lessons = [];
    (st.modules || []).forEach(function (m) {
      if (m.trackId !== t.id) return;
      (m.subsections || []).forEach(function (ss) {
        if (ss.status === 'ready') lessons.push({ id: ss.id, title: ss.title || ss.id, moduleId: m.id, moduleTitle: m.title || m.id });
      });
    });
    return { id: t.id, get label() { return awDictT(t.label || t.id); }, roleLabel: t.roleLabel, cover: null, productName: prod.name || 'TilliT', lessons: lessons };
  });
  window.AW_CONTENT = { format: 'aw-ws-preview', tenantId: window.AW_EDITION.tenantId || null, catalog: { trainings: trainings } };
  if (window.awApplyEdition) window.awApplyEdition();
};

(function () {

  // Lingue conosciute dall'app e loro nome nel menu. 08/10 (fiera): + es (America Latina), pt-BR, hi.
  // Quali compaiono nel menu: quelle dell'edizione (AW_EDITION.languages), altrimenti le 5 del laboratorio.
  window.AW_LANGS = { en: 'English', it: 'Italiano', da: 'Dansk', zh: '中文', nl: 'Nederlands',
    es: 'Español (Latinoamérica)', 'pt-BR': 'Português (Brasil)', hi: 'हिन्दी' };
  window.awLangList = function () {
    var L = window.AW_EDITION && window.AW_EDITION.languages;
    return (L && L.length) ? L.slice() : ['en', 'it', 'da', 'zh', 'nl'];
  };
  // 09/10: dizionario delle frasi dei capitoli (pkx_translations.js → PKX_DICT): "frase inglese" →
  // {it, es, pt-BR, hi}. Restituisce la frase nella lingua scelta, o l'inglese se manca.
  window.awDictT = function (s, lang) {
    if (!lang) { lang = window.LANG; if (!lang) { try { lang = localStorage.getItem('aw_lang'); } catch (e) {} } }
    if (typeof s !== 'string' || !lang || lang === 'en' || !window.PKX_DICT) return s;
    var e = window.PKX_DICT[s]; return (e && e[lang]) || s;
  };
  // BCP-47 tag for toLocaleDateString/toLocaleTimeString calls elsewhere (notes, agenda…).
  // Inglese: formato britannico nel laboratorio, americano nelle edizioni (fiera in nord America, 08/10).
  window.awLangCode = function () {
    return ({ en: window.AW_EDITION ? 'en-US' : 'en-GB', it: 'it-IT', da: 'da-DK', zh: 'zh-CN', nl: 'nl-NL',
      es: 'es-419', 'pt-BR': 'pt-BR', hi: 'hi-IN' })[window.LANG || 'en'] || 'en-GB';
  };
  // 14/10: ora "HH:MM" e data "YYYY-MM-DD" salvate → nel formato della lingua (en-US "2:00 PM", it "14:00").
  window.awFmtTime = function (hm) {
    var p = /^(\d{1,2}):(\d{2})$/.exec(String(hm || '')); if (!p) return hm || '';
    var d = new Date(2000, 0, 1, +p[1], +p[2]);
    try { return d.toLocaleTimeString(window.awLangCode(), { hour: 'numeric', minute: '2-digit' }); } catch (e) { return hm; }
  };
  window.awFmtISO = function (iso, opts) {
    var p = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || '')); if (!p) return iso || '';
    try { return new Date(+p[1], +p[2] - 1, +p[3]).toLocaleDateString(window.awLangCode(), opts || { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return iso; }
  };
  // Nomi salvati (host, chi assegna): nell'edizione il ruolo "Line supervisor" passa dal dizionario delle frasi.
  window.awWho = function (s) { return s ? window.awDictT(s) : s; };

  // ── Module registry ────────────────────────────────────────────────────────
  var MODULES = [
    { id: '01', label: 'OP-01 Login & Config', href: 'OP-01.html' },
    { id: '02', label: 'OP-02 Cockpit',        href: 'OP-02.html' },
    { id: '03', label: 'OP-03 Station View',   href: 'OP-03.html' }
  ];

  // ── Future locked groups ───────────────────────────────────────────────────
  var GROUPS = [
    { id: '04', label: 'OP-04 Activities', subs: ['04.1 Claim & Submit', '04.2 Statuses', '04.3 Filtering', '04.4 Manual trigger'] },
    { id: '05', label: 'OP-05 Orders',     subs: ['05.1 Orders view', '05.2 Starting an order', '05.3 Cancel & Suspend'] },
    { id: '06', label: 'OP-06 Downtimes',  subs: ['06.1 Downtime panel', '06.2 Assign', '06.3 Split', '06.4 Edit assigned'] },
    { id: '07', label: 'OP-07 Materials',  subs: ['07.1 BOM', '07.2 MC activity', '07.3 Scan & submit'] }
  ];

  // ── Group toggle (shared, also needed in dashboard) ────────────────────────
  window.tg = function (id) {
    var s = document.getElementById('sub-' + id);
    var c = document.getElementById('chev-' + id);
    if (!s || !c) return;
    var open = s.classList.contains('open');
    s.classList.toggle('open', !open);
    c.classList.toggle('open', !open);
  };

  // ── Main render function ───────────────────────────────────────────────────
  // currentModuleId: '01' | '02' | null (null = dashboard)
  window.renderSidebar = function (currentModuleId) {
    var el = document.getElementById('sb-modules');
    if (!el) return;

    window._sbModId = currentModuleId;

    var prog = {};
    try { prog = JSON.parse(localStorage.getItem('aw_progress') || '{}'); } catch (e) {}

    var lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
    var tl   = (window.T && window.T[lang]) || (window.T && window.T['en']) || {};

    var inIframe = (window.self !== window.top);
    var isDash   = (currentModuleId === null);

    // Classify modules into completed / current / locked
    var completedMods = MODULES.filter(function (m) { return prog[m.id] === true; });
    var currentMod    = isDash ? null : MODULES.filter(function (m) { return m.id === currentModuleId && !prog[m.id]; })[0] || null;
    var lockedMods    = MODULES.filter(function (m) { return !prog[m.id] && m.id !== currentModuleId; });

    var html       = '';
    var needMargin = false;

    // ── Completed section ──────────────────────────────────────────────────
    if (completedMods.length > 0) {
      html += '<div>';
      html += '<div class="sb-label">' + (tl['sidebar.completed'] || 'Completed') + '</div>';
      completedMods.forEach(function (m) {
        if (m.href) {
          var target = inIframe ? ' target="_parent"' : '';
          html += '<a href="' + m.href + '"' + target + ' class="sb-item done-mod" style="text-decoration:none"><div class="sb-check done">✓</div>' + m.label + '</a>';
        } else {
          html += '<div class="sb-item done-mod"><div class="sb-check done">✓</div>' + m.label + '</div>';
        }
      });
      html += '</div>';
      needMargin = true;
    }

    // ── Current section ────────────────────────────────────────────────────
    if (currentMod) {
      html += '<div' + (needMargin ? ' style="margin-top:6px"' : '') + '>';
      html += '<div class="sb-label">' + (tl['sidebar.current'] || 'Current') + '</div>';
      html += '<div class="sb-item active"><div class="sb-check current"></div>' + currentMod.label + '</div>';
      html += '</div>';
      needMargin = true;
    }

    // ── Coming next section ────────────────────────────────────────────────
    html += '<div' + (needMargin ? ' style="margin-top:6px"' : '') + '>';
    html += '<div class="sb-label">' + (tl['sidebar.comingnext'] || 'Coming next') + '</div>';

    lockedMods.forEach(function (m) {
      html += '<div class="sb-item locked"><div class="sb-check"></div>' + m.label + '</div>';
    });

    GROUPS.forEach(function (g) {
      html += '<div class="sb-group-toggle" onclick="tg(\'' + g.id + '\')">'
            + '<div class="sb-check" style="opacity:.4"></div>'
            + '<span style="opacity:.4">' + g.label + '</span>'
            + '<span class="sb-chevron" id="chev-' + g.id + '">›</span>'
            + '</div>';
      html += '<div class="sb-sublist" id="sub-' + g.id + '">';
      g.subs.forEach(function (s) {
        html += '<div class="sb-subitem locked"><div class="sb-subdot"></div>' + s + '</div>';
      });
      html += '</div>';
    });

    var utilStyle = 'margin-top:2px;font-size:13px;color:var(--text2);text-decoration:none';
    var icoAttr = 'width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;stroke:rgba(255,255,255,.72)"';

    // Glossary
    var glossTarget = inIframe ? ' target="_parent"' : '';
    html += '<a href="glossary.html"' + glossTarget + ' class="sb-item" style="' + utilStyle + ';margin-top:4px">'
          + '<svg ' + icoAttr + '><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
          + (tl['sidebar.glossary'] || 'Glossary') + '</a>';

    // My Notes (full page, like Glossary). The floating panel inside modules
    // stays for quick capture; the sidebar link navigates to notes.html.
    var notesTarget = inIframe ? ' target="_parent"' : '';
    var notesCount = 0;
    try { notesCount = (JSON.parse(localStorage.getItem('aw_notes') || '[]')).length; } catch (e) {}
    html += '<a href="notes.html"' + notesTarget + ' class="sb-item" id="sb-notes-item" style="' + utilStyle + '">'
          + '<svg ' + icoAttr + '><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
          + (tl['sidebar.notes'] || 'My Notes')
          + '<span id="sb-notes-badge" style="' + (notesCount ? '' : 'display:none;') + 'margin-left:auto;background:var(--aw-pink);color:#fff;font-size:9px;font-weight:700;padding:1px 6px;border-radius:10px">' + notesCount + '</span>'
          + '</a>';

    // Manager Dashboard
    var dashTarget = inIframe ? ' target="_parent"' : '';
    var dashClass  = 'sb-item' + (isDash ? ' active' : '');
    html += '<a href="dashboard.html"' + dashTarget + ' class="' + dashClass + '" style="' + utilStyle + '">'
          + '<svg ' + icoAttr + '><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
          + (tl['sidebar.dashboard'] || 'Team Management') + '</a>';

    // Knowledge Base (coming soon — nessuna pagina collegata ancora)
    html += '<div class="sb-item" style="' + utilStyle + ';cursor:default;opacity:.6">'
          + '<svg ' + icoAttr + '><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
          + (tl['sidebar.knowledgebase'] || 'Knowledge Base')
          + '<span style="margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:rgba(255,255,255,.7);background:rgba(255,255,255,.12);padding:2px 7px;border-radius:20px;white-space:nowrap">' + (tl['rail.soon'] || 'Soon') + '</span></div>';

    html += '</div>'; // close coming-next div

    el.innerHTML = html;

    // ── Update progress bar ────────────────────────────────────────────────
    var doneCount = Object.keys(prog).filter(function (k) { return prog[k] === true; }).length;
    var progFill  = document.getElementById('prog-fill');
    var progTxt   = document.getElementById('prog-txt');
    if (progFill) progFill.style.width = Math.round(doneCount / 2 * 100) + '%';
    if (progTxt)  progTxt.textContent  = doneCount + '/2';
  };

})();

// ── Notes persistence: single shared source (localStorage 'aw_notes') ──
// Used by the module panels (OP-01/OP-02) and the My Notes page so notes
// taken during a module appear on notes.html. Note shape:
//   { id, text, category, live, module, time }
// category is the internal Italian value ('Appunto'|'Domanda'|'Problema'),
// mapped to the UI language at render time via note.cat.* keys.
window.AW_NOTES_KEY = 'aw_notes';
window.awLoadNotes = function () {
  try { return JSON.parse(localStorage.getItem('aw_notes') || '[]'); } catch (e) { return []; }
};
window.awSaveNotes = function (arr) {
  try { localStorage.setItem('aw_notes', JSON.stringify(arr || [])); } catch (e) {}
};

// ── Per-section progress within a module (resume where you left off) ──
// Persists which sections a learner has COMPLETED inside a module + the last
// section they were on, so re-entering a module restores the done steps instead
// of forcing a restart from Intro. Key 'aw_sect' = { "01": {done:[...], last:"video", score:2}, ... }.
window.AW_SECT_KEY = 'aw_sect';
window.awLoadSect = function (moduleId) {
  try { var all = JSON.parse(localStorage.getItem('aw_sect') || '{}'); return all[moduleId] || { done: [], last: null }; }
  catch (e) { return { done: [], last: null }; }
};
window.awSaveSect = function (moduleId, obj) {
  try {
    var all = JSON.parse(localStorage.getItem('aw_sect') || '{}');
    all[moduleId] = obj || { done: [], last: null };
    localStorage.setItem('aw_sect', JSON.stringify(all));
    if (window.awLogActivity) window.awLogActivity();
  } catch (e) {}
};

// ── Daily activity log (streak / "last active" on the home welcome card) ──
// A day counts the moment the learner actually saves progress in a module
// (awSaveSect, above) — never backfilled or simulated, so it starts empty for
// everyone and only reflects real use from here on.
window.AW_ACTIVITY_KEY = 'aw_activity_log';
window.awLogActivity = function () {
  try {
    var today = new Date().toISOString().slice(0, 10);
    var log = JSON.parse(localStorage.getItem(window.AW_ACTIVITY_KEY) || '[]');
    if (log[log.length - 1] !== today) {
      log.push(today);
      if (log.length > 90) log = log.slice(-90);
      localStorage.setItem(window.AW_ACTIVITY_KEY, JSON.stringify(log));
    }
  } catch (e) {}
};
window.awLastActiveISO = function () {
  try {
    var log = JSON.parse(localStorage.getItem(window.AW_ACTIVITY_KEY) || '[]');
    return log.length ? log[log.length - 1] : null;
  } catch (e) { return null; }
};
// consecutive days of activity ending today (or ending yesterday if nothing
// logged yet today, so the streak doesn't drop to 0 mid-day) — 0 with no log.
window.awGetStreak = function () {
  try {
    var log = JSON.parse(localStorage.getItem(window.AW_ACTIVITY_KEY) || '[]');
    if (!log.length) return 0;
    var set = {}; log.forEach(function (d) { set[d] = true; });
    var cur = new Date();
    if (!set[cur.toISOString().slice(0, 10)]) cur.setDate(cur.getDate() - 1);
    var streak = 0;
    while (set[cur.toISOString().slice(0, 10)]) { streak++; cur.setDate(cur.getDate() - 1); }
    return streak;
  } catch (e) { return 0; }
};

// ── Manager-authored data: live sessions + assignments (deadlines / enroll) ──
// Written by the Manager workspace (dashboard.html) and read by the operator
// home agenda (index.html), so what a manager assigns appears in the learner's
// home. In production these come from the backend; here they persist locally.
//   aw_sessions  = [{ id, title, date:'YYYY-MM-DD', time:'HH:MM', teamsUrl,
//                     host, invitees:'all'|[names], createdBy }]
//   aw_assignments = [{ id, target:'all'|name, kind:'module'|'path',
//                       moduleId, dueDate:'YYYY-MM-DD', assignedBy, createdAt }]
window.AW_SESSIONS_KEY = 'aw_sessions';
window.AW_ASSIGN_KEY = 'aw_assignments';
window.awLoadSessions = function () {
  try { return JSON.parse(localStorage.getItem('aw_sessions') || '[]'); } catch (e) { return []; }
};
window.awSaveSessions = function (arr) {
  try { localStorage.setItem('aw_sessions', JSON.stringify(arr || [])); } catch (e) {}
};
window.awLoadAssignments = function () {
  try { return JSON.parse(localStorage.getItem('aw_assignments') || '[]'); } catch (e) { return []; }
};
window.awSaveAssignments = function (arr) {
  try { localStorage.setItem('aw_assignments', JSON.stringify(arr || [])); } catch (e) {}
};

// ── Sites & team roster: managed by the site manager ──
// Each site (plant) is an independent tenant capped at AW_SITE_CAP users.
// The manager creates sites and, inside a site, the users of that site.
// A user is NOT given a "role": instead the manager assigns which training
// COURSES the user is enrolled in — the Operator course ('op'), the Superuser
// course ('su'), or both. SU content stays locked until the OP course is
// complete, whatever the enrolment (the gate lives in access — see
// awSuUnlocked). Enrolment is an explicit manager choice, editable later on
// the user profile.
// Sites store: [{ id, name }]; the active site (the one the manager is
// viewing) is in localStorage['aw_active_site'].
// User shape:
//   { id, name, initials, siteId, trainings:['op'|'su'…], email, password,
//     mustChangePassword (bool), createdAt (ISO date),
//     op01, op02, op03 (bool),  // OP course progress, one flag per built module
//                                // (AW_OP_BUILT lists which module ids exist —
//                                // grow this array, and the field list above,
//                                // whenever a new OP-XX module goes live).
//     completedAt: {'01':iso|null,'02':iso|null,'03':iso|null}, // date each OP
//                                // module was completed — feeds the manager's
//                                // real completions-over-time chart. Written
//                                // alongside op01/op02/op03; missing/legacy
//                                // values are backfilled on load (see awMigrateUser).
//     score (num|null), time (num, hours), lastOrd (days-ago; 999 = never),
//     suDone (num) }            // SU modules completed (0..AW_SU_TOTAL)
// Legacy records with `role` are migrated on load (role→trainings + siteId).
// email/password/mustChangePassword are demo-only fields: there is no real
// auth backend yet, login.html is not wired to this store (see CLAUDE.md TODO).
window.AW_SITES_KEY = 'aw_sites';
window.AW_ACTIVE_SITE_KEY = 'aw_active_site';
window.AW_USERS_KEY = 'aw_users';
window.AW_SITE_CAP = 20;                   // max users per site
window.AW_OP_BUILT = ['01', '02', '03'];  // OP modules that actually exist (demo). OP-04..07
                                            // are on the roadmap (see AW_MODULES) but not built —
                                            // they stay out of this list until they go live.
window.AW_SU_TOTAL = 5;                    // SU modules in the SU track (SU-01…SU-04B)
// ── Sites ──
var AW_DEFAULT_SITES = [{ id: 'site1', name: 'Site 1' }, { id: 'site2', name: 'Site 2' }];
// Edizione / spazio di lavoro: i suoi siti fin dal primo accesso (anche dall'editor, che legge i siti).
if (window.AW_EDITION && window.AW_EDITION.sites && window.AW_EDITION.sites.length) AW_DEFAULT_SITES = window.AW_EDITION.sites;
window.awLoadSites = function () {
  try {
    var raw = localStorage.getItem('aw_sites');
    if (raw) { var a = JSON.parse(raw); if (a && a.length) return a; }
  } catch (e) {}
  var seed = AW_DEFAULT_SITES.map(function (s) { return { id: s.id, name: s.name }; });
  try { localStorage.setItem('aw_sites', JSON.stringify(seed)); } catch (e) {}
  return seed;
};
window.awSaveSites = function (arr) {
  try { localStorage.setItem('aw_sites', JSON.stringify(arr || [])); } catch (e) {}
};
window.awActiveSite = function () {
  var sites = window.awLoadSites(), id = null;
  try { id = localStorage.getItem('aw_active_site'); } catch (e) {}
  if (id && sites.some(function (s) { return s.id === id; })) return id;
  return sites.length ? sites[0].id : null;
};
window.awSetActiveSite = function (id) {
  try { localStorage.setItem('aw_active_site', id); } catch (e) {}
};
window.awSiteName = function (id) {
  var s = window.awLoadSites().filter(function (x) { return x.id === id; })[0];
  return s ? s.name : id;
};
// Random readable temp password: 3 letters + 3 digits + 2 letters (e.g. "kqm482rt").
window.awGenPassword = function () {
  var letters = 'abcdefghjkmnpqrstuvwxyz', digits = '23456789', s = '';
  for (var i = 0; i < 3; i++) s += letters.charAt(Math.floor(Math.random() * letters.length));
  for (var j = 0; j < 3; j++) s += digits.charAt(Math.floor(Math.random() * digits.length));
  for (var k = 0; k < 2; k++) s += letters.charAt(Math.floor(Math.random() * letters.length));
  return s;
};
// ISO date N days before today — used for seed/backfill completedAt values.
function awDaysAgoISO(n) { var d = new Date(); d.setDate(d.getDate() - n); return d.toISOString().slice(0, 10); }
// Seed roster: 9 historical users spread across Site 1 (5) and Site 2 (4).
// trainings = which courses the user is enrolled in ('op' and/or 'su').
// OP-03 went live ~7 days ago: only users who were already ahead (SU-active,
// or otherwise recently active) have had time to reach it — the rest are
// still mid-OP-02 or between OP-02 and OP-03, which is realistic, not a gap.
var AW_DEFAULT_USERS = [
  { id: 'u1', name: 'T. Martin', initials: 'TM', siteId: 'site1', trainings: ['op', 'su'], email: 't.martin@site1.local', op01: true,  op02: true,  op03: true,  completedAt: { '01': awDaysAgoISO(30), '02': awDaysAgoISO(10), '03': awDaysAgoISO(0) },  score: 96,   time: 4.0, lastOrd: 0,   suDone: 3, createdAt: '2026-05-04', mustChangePassword: false },
  { id: 'u2', name: 'S. Kumar',  initials: 'SK', siteId: 'site1', trainings: ['op', 'su'], email: 's.kumar@site1.local',  op01: true,  op02: true,  op03: true,  completedAt: { '01': awDaysAgoISO(25), '02': awDaysAgoISO(8),  '03': awDaysAgoISO(1) },  score: 92,   time: 4.2, lastOrd: 1,   suDone: 1, createdAt: '2026-05-04', mustChangePassword: false },
  { id: 'u3', name: 'A. Rossi',  initials: 'AR', siteId: 'site1', trainings: ['op'],       email: 'a.rossi@site1.local',  op01: true,  op02: true,  op03: true,  completedAt: { '01': awDaysAgoISO(35), '02': awDaysAgoISO(12), '03': awDaysAgoISO(0) },  score: 94,   time: 2.8, lastOrd: 0,   suDone: 0, createdAt: '2026-05-04', mustChangePassword: false },
  { id: 'u4', name: 'K. Lim',    initials: 'KL', siteId: 'site1', trainings: ['op'],       email: 'k.lim@site1.local',    op01: true,  op02: true,  op03: false, completedAt: { '01': awDaysAgoISO(40), '02': awDaysAgoISO(3),  '03': null },              score: 91,   time: 3.1, lastOrd: 3,   suDone: 0, createdAt: '2026-05-11', mustChangePassword: false },
  { id: 'u5', name: 'M. Santos', initials: 'MS', siteId: 'site1', trainings: ['op', 'su'], email: 'm.santos@site1.local', op01: true,  op02: true,  op03: false, completedAt: { '01': awDaysAgoISO(45), '02': awDaysAgoISO(4),  '03': null },              score: 90,   time: 4.5, lastOrd: 4,   suDone: 0, createdAt: '2026-05-11', mustChangePassword: false },
  { id: 'u6', name: 'C. Okafor', initials: 'CO', siteId: 'site2', trainings: ['op'],       email: 'c.okafor@site2.local', op01: true,  op02: false, op03: false, completedAt: { '01': awDaysAgoISO(0),  '02': null,              '03': null },              score: 90,   time: 2.1, lastOrd: 0,   suDone: 0, createdAt: '2026-05-18', mustChangePassword: false },
  { id: 'u7', name: 'P. Dubois', initials: 'PD', siteId: 'site2', trainings: ['op', 'su'], email: 'p.dubois@site2.local', op01: true,  op02: false, op03: false, completedAt: { '01': awDaysAgoISO(1),  '02': null,              '03': null },              score: 84,   time: 1.9, lastOrd: 1,   suDone: 0, createdAt: '2026-05-18', mustChangePassword: false },
  { id: 'u8', name: 'J. Weber',  initials: 'JW', siteId: 'site2', trainings: ['op'],       email: 'j.weber@site2.local',  op01: false, op02: false, op03: false, completedAt: { '01': null,             '02': null,              '03': null },              score: null, time: 0,   lastOrd: 999, suDone: 0, createdAt: '2026-06-01', mustChangePassword: true },
  { id: 'u9', name: 'R. Tanaka', initials: 'RT', siteId: 'site2', trainings: ['op'],       email: 'r.tanaka@site2.local', op01: false, op02: false, op03: false, completedAt: { '01': null,             '02': null,              '03': null },              score: null, time: 0,   lastOrd: 999, suDone: 0, createdAt: '2026-06-01', mustChangePassword: true }
];
// Migrate a legacy record (role → trainings, missing siteId → first site,
// missing/partial completedAt → synthetic backfill from op01/op02/lastOrd
// so records saved before this field existed don't break the completions chart).
function awMigrateUser(u, fallbackSite) {
  if (!u.trainings || !u.trainings.length) u.trainings = (u.role === 'superuser') ? ['op', 'su'] : ['op'];
  if (!u.siteId) u.siteId = fallbackSite;
  if (!u.completedAt) u.completedAt = {};
  // Backfill missing completedAt for every built OP module, in order, spacing
  // each one further into the past than the next so the sequence stays
  // chronological even for records saved before a given module existed.
  window.AW_OP_BUILT.forEach(function (k, i) {
    if (u.completedAt[k] === undefined) u.completedAt[k] = null;
    if (u['op' + k] && u.completedAt[k] == null) {
      u.completedAt[k] = awDaysAgoISO((u.lastOrd || 0) + (window.AW_OP_BUILT.length - 1 - i) * 8);
    }
  });
  return u;
}
window.awLoadUsers = function () {
  var fallback = (window.awLoadSites()[0] || {}).id || 'site1';
  try {
    var raw = localStorage.getItem('aw_users');
    if (raw) {
      var a = JSON.parse(raw);
      if (a && a.length) {
        var changed = false;
        a.forEach(function (u) { var t = u.trainings, s = u.siteId; awMigrateUser(u, fallback); if (u.trainings !== t || u.siteId !== s || !s || !t) changed = true; });
        if (changed) { try { localStorage.setItem('aw_users', JSON.stringify(a)); } catch (e) {} }
        return awSyncMe(a);
      }
    }
  } catch (e) {}
  var seed = AW_DEFAULT_USERS.map(function (u) { var c = {}; for (var k in u) c[k] = (u[k] && u[k].slice) ? u[k].slice() : u[k]; return c; });
  try { localStorage.setItem('aw_users', JSON.stringify(seed)); } catch (e) {}
  return awSyncMe(seed);
};
// 14/10 (3.1): la riga "You" del team (u.me, solo nelle edizioni) si rifà a ogni lettura da quello che il Learner
// ha fatto davvero: capitoli finiti (aw_progress), data (aw_progress_at), punteggio dei quiz (aw_quiz_score),
// minuti dei capitoli. Così Team Management mostra dal vivo il capitolo appena finito; Reset demo la azzera.
function awSyncMe(arr) {
  var u = (arr || []).filter(function (x) { return x.me; })[0];
  if (!u) return arr;
  var rd = function (k) { try { var o = JSON.parse(localStorage.getItem(k) || '{}'); return (o && typeof o === 'object') ? o : {}; } catch (e) { return {}; } };
  var prog = rd('aw_progress'), at = rd('aw_progress_at'), qs = rd('aw_quiz_score');
  var today = new Date(), day0 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var sc = [], mins = 0, last = null;
  if (window.AW_USER && AW_USER.name) { u.name = AW_USER.name; u.initials = AW_USER.initials || u.initials; if (AW_USER.email) u.email = AW_USER.email; }
  u.completedAt = {};
  window.AW_OP_BUILT.forEach(function (id) {
    var done = prog[id] === true, d = null;
    if (done) {
      var t = at[id] ? new Date(at[id]) : today;
      d = t.getFullYear() + '-' + ('0' + (t.getMonth() + 1)).slice(-2) + '-' + ('0' + t.getDate()).slice(-2);
      if (!last || d > last) last = d;
      if (typeof qs[id] === 'number') sc.push(qs[id]);
      var m = (window.AW_MODULES || []).filter(function (x) { return x.id === id; })[0];
      mins += (m && m.mins) || 0;
    }
    u['op' + id] = done; u.completedAt[id] = d;
  });
  u.score = sc.length ? Math.round(sc.reduce(function (a, b) { return a + b; }, 0) / sc.length) : null;
  u.time = Math.round(mins / 6) / 10;
  u.lastOrd = last ? Math.max(0, Math.round((day0 - Date.UTC(+last.slice(0, 4), +last.slice(5, 7) - 1, +last.slice(8, 10))) / 864e5)) : 999;
  return arr;
}
window.awSaveUsers = function (arr) {
  try { localStorage.setItem('aw_users', JSON.stringify(arr || [])); } catch (e) {}
};
// Courses a user is enrolled in (with legacy role fallback).
window.awUserTrainings = function (u) {
  if (u && u.trainings && u.trainings.length) return u.trainings;
  return (u && u.role === 'superuser') ? ['op', 'su'] : ['op'];
};
window.awHasTraining = function (u, key) { return window.awUserTrainings(u).indexOf(key) >= 0; };
// OP course complete = all built OP modules done (AW_OP_BUILT).
window.awOpComplete = function (u) { return !!u && window.AW_OP_BUILT.every(function (k) { return !!u['op' + k]; }); };
// SU is accessible only for users enrolled in SU who have finished OP.
window.awSuUnlocked = function (u) { return !!(u && window.awHasTraining(u, 'su') && window.awOpComplete(u)); };
// Does an assignment/session target reach a given user? Handles:
//   'all' → everyone · Array → explicit list of names · 'operators'/'superusers'
//   → legacy course groups (op/su enrolment) · any string → that user's name.
window.awAssignMatch = function (target, name, trainings) {
  if (target === 'all') return true;
  if (Object.prototype.toString.call(target) === '[object Array]') return target.indexOf(name) >= 0;
  if (target === 'operators') return (trainings || []).indexOf('op') >= 0;
  if (target === 'superusers') return (trainings || []).indexOf('su') >= 0;
  return target === name;
};
// OP progress as completed / built.
window.awOpProgress = function (u) {
  var done = u ? window.AW_OP_BUILT.filter(function (k) { return !!u['op' + k]; }).length : 0;
  return { done: done, total: window.AW_OP_BUILT.length };
};

// ── Practice scenario: dialogo ramificato (condiviso da tutti gli OP) ──
// Niente input libero, niente contatore: ogni quick-reply → risposta specifica.
// Config per pagina via initScenario(cfg); ogni .qb chiama scenarioPick(this,'<branch>').
//   cfg = { msgsId, qbtnsId, doneId,
//           branches: { <id>: { verdict:'ok'|'partial'|'ko', reply:'<i18nKey>' }, ... },
//           next?: { promptKey:'<i18nKey>', options:[{i18nKey,branch}, ...], branches:{...} } }
// Verdict 'ok' chiude lo scenario, a meno che cfg.next non definisca un secondo round:
// in quel caso le domande vengono ridisegnate (data-i18n+onclick) sugli stessi bottoni .qb
// e il tutor pone la seconda domanda; lo scenario chiude solo al termine del round finale.
// 'partial'/'ko' lasciano sempre riprovare nel round corrente.
(function () {
  var SCN = null, scnDone = false;

  window.initScenario = function (cfg) { SCN = cfg; scnDone = false; };

  function t(key) {
    var lang = window.LANG || 'en';
    var dict = (window.T && window.T[lang]) || (window.T && window.T.en) || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  function renderRoundOptions(round) {
    var qb = document.getElementById(SCN.qbtnsId);
    if (!qb || !round) return;
    var buttons = qb.querySelectorAll('.qb');
    round.options.forEach(function (opt, i) {
      var b = buttons[i]; if (!b) return;
      b.setAttribute('data-i18n', opt.i18nKey);
      b.textContent = t(opt.i18nKey);
      b.onclick = function () { scenarioPick(b, opt.branch); };
    });
  }

  window.scenarioPick = function (btn, branchId) {
    if (!SCN || scnDone) return;
    var br = SCN.branches[branchId];
    var msgs = document.getElementById(SCN.msgsId);
    if (!br || !msgs) return;

    var u = document.createElement('div');
    u.className = 'm user';
    // R4 (28/09): "OP" cablato, ignorava l'utente loggato — ogni altro avatar dell'app (topbar,
    // certificato, tutor) legge window.AW_USER.initials con questo stesso fallback.
    u.innerHTML = '<div class="mav user">' + ((window.AW_USER && window.AW_USER.initials) || 'OP') + '</div><div class="mbubble"></div>';
    u.querySelector('.mbubble').textContent = btn ? btn.textContent.trim() : '';
    msgs.appendChild(u);
    msgs.scrollTop = msgs.scrollHeight;

    var typ = document.createElement('div');
    typ.className = 'm coach';
    typ.innerHTML = '<div class="mav coach">Co</div><div class="mbubble"><div class="tdots"><span></span><span></span><span></span></div></div>';
    msgs.appendChild(typ);
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(function () {
      var bubble = typ.querySelector('.mbubble');
      bubble.innerHTML = '';
      bubble.textContent = t(br.reply);
      bubble.className = 'mbubble verdict-' + br.verdict;
      msgs.scrollTop = msgs.scrollHeight;
      if (br.verdict === 'ok') {
        if (SCN.next) {
          var round = SCN.next;
          SCN.next = null;
          SCN.branches = round.branches;
          renderRoundOptions(round);
          setTimeout(function () {
            var q = document.createElement('div');
            q.className = 'm coach';
            q.innerHTML = '<div class="mav coach">Co</div><div class="mbubble"></div>';
            q.querySelector('.mbubble').textContent = t(round.promptKey);
            msgs.appendChild(q);
            msgs.scrollTop = msgs.scrollHeight;
          }, 400);
        } else {
          scnDone = true;
          var qb = document.getElementById(SCN.qbtnsId);
          if (qb) qb.style.display = 'none';
          var done = document.getElementById(SCN.doneId);
          if (done) done.style.display = 'block';
        }
      }
    }, 650);
  };
})();

// ── Quiz flash card: scorciatoie tastiera 1/2/3 (e A/B/C) ──
// Generico per tutti gli OP: clicca la quick-option n-esima se la pagina quiz è attiva.
(function () {
  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;
    var page = document.getElementById('page-quiz');
    if (!page || getComputedStyle(page).display === 'none') return;
    var n;
    if (e.key >= '1' && e.key <= '9') n = parseInt(e.key, 10);
    else if (/^[a-cA-C]$/.test(e.key)) n = { a: 1, b: 2, c: 3 }[e.key.toLowerCase()];
    else return;
    var opts = document.querySelectorAll('#q-options .qopt');
    var btn = opts[n - 1];
    if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
  });
})();

// ── i18n: apply language to all data-i18n elements ────────────────
// Called by every page after translations.js is loaded.
// lang: 'en' | 'it' (falls back to 'en' if key missing)
function applyLang(lang) {
  window.LANG = lang;
  if (typeof window._onLangChange === 'function') window._onLangChange(lang);
  var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T['en'] : {});

  // textContent via data-i18n="key"
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Footer {year} placeholder: the data-i18n loop above re-applies the raw
  // template on every call, so substitute the current year after each pass.
  var _awf = document.querySelector('.aw-footer');
  if (_awf && _awf.textContent.indexOf('{year}') !== -1) {
    _awf.textContent = _awf.textContent.replace('{year}', new Date().getFullYear());
  }

  // Attributes via data-i18n-attr="attr:key,attr2:key2"
  document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
    el.getAttribute('data-i18n-attr').split(',').forEach(function(pair) {
      var parts = pair.trim().split(':');
      var attr  = parts[0].trim();
      var key   = parts.slice(1).join(':').trim();
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  // Update language button labels
  var langLabels = window.AW_LANGS;
  document.querySelectorAll('[data-lang-btn]').forEach(function(el) {
    el.textContent = langLabels[lang] || lang.toUpperCase();
  });

  document.documentElement.lang = lang;

  // Re-render sidebar with new language (legacy shell)
  if (typeof window.renderSidebar === 'function' && typeof window._sbModId !== 'undefined') {
    window.renderSidebar(window._sbModId);
  }
  // Refresh global shell v4 (rail tooltips, lang marker, section steps)
  if (typeof window.awRefreshChrome === 'function') window.awRefreshChrome();
  // Video: ridipinge il pannello narrazione col testo tradotto del capitolo attivo
  if (typeof window.awVaRefresh === 'function') window.awVaRefresh();
  // Concept guidati: la label "Step n of m" è testo composto, non una singola chiave data-i18n
  if (typeof window.gcRefreshStepLabels === 'function') window.gcRefreshStepLabels();
}

// Listen for language change pushed from parent frame via postMessage
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'setLang' && e.data.lang) {
    applyLang(e.data.lang);
  }
});

// ── Theme: dark mode manuale ──
// Toggle attivato dal pulsante in topbar (data-theme-btn).
// Il tema viene impostato via data-theme="dark"|"light" sull'elemento <html>.
// Ogni pagina ha un inline script in <head> che lo applica prima del paint.
var _MOON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
var _SUN_SVG  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

function applyTheme(theme) {
  theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('aw_theme', theme); } catch (e) {}
  var isDark = (theme === 'dark');
  var _lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
  var _d = (window.T && window.T[_lang]) || (window.T && window.T.en) || {};
  document.querySelectorAll('[data-theme-btn]').forEach(function(btn) {
    btn.innerHTML = isDark ? _SUN_SVG : _MOON_SVG;
    btn.title = isDark ? (_d['theme.light'] || 'Switch to light mode') : (_d['theme.dark'] || 'Switch to dark mode');
  });
}
window.applyTheme = applyTheme;

// Inizializza al caricamento della pagina (sincronizza icone con il tema già impostato)
document.addEventListener('DOMContentLoaded', function() {
  var t = localStorage.getItem('aw_theme') || 'light';
  applyTheme(t);
});

// ════════════════════════════════════════════════════════════════════════
// SHELL GLOBALE v4 — rail navy + topbar chiara (centralizzata qui)
// Ogni pagina chiama renderChrome('home'|'modules'|'glossary'|'notes'|
// 'deadlines'|'dashboard'). Inietta il rail (fisso) + la topbar chiara come
// primi figli del <body> e aggiunge la classe .aw-shell (offset 48px).
// ════════════════════════════════════════════════════════════════════════
(function () {
  // Pittogramma ufficiale (minilogo.svg) — ricolorato bianco via currentColor.
  var MINILOGO = '<svg viewBox="0 0 38 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M37.3968 0 31.3938 0C31.0779 0 30.7906 0.2585 30.7906 0.6032L30.7906 14.907C30.7906 14.9645 30.7906 14.9932 30.7619 15.0219 30.7045 15.1655 30.5896 15.2804 30.4172 15.2804 30.2449 15.2804 30.13 15.1655 30.0726 15.0219L30.0726 15.0219 24.3855 0.3734C24.2993 0.1436 24.0695 0 23.8398 0L17.808 0C17.3772 0 17.0899 0.4308 17.2623 0.8042L22.2026 13.5283C22.2026 13.5858 22.2313 13.672 22.1164 13.7868 22.1164 13.7868 22.1164 13.7868 22.1164 13.7868L21.0537 15.1368C20.8813 15.3379 20.709 15.3379 20.709 15.3379 20.393 15.3379 20.3069 15.0794 20.3069 15.0794 20.3069 15.0794 20.3069 15.0794 20.3069 15.0794L14.5624 0.3734C14.4762 0.1436 14.2464 0 14.0166 0L7.9274 0 7.87 0C7.4679 0 7.0658 0.2011 6.8073 0.517L0.1436 8.0423C0.0574 8.1572 0 8.2721 0 8.4157L0 16.2857C0 16.6017 0.2585 16.8889 0.6032 16.8889L6.6062 16.8889C6.9222 16.8889 7.2094 16.6304 7.2094 16.2857L7.2094 1.9819C7.2094 1.9244 7.2094 1.8957 7.2381 1.867 7.2955 1.7234 7.4104 1.6085 7.5828 1.6085 7.7551 1.6085 7.87 1.7234 7.9274 1.867L7.9274 1.867 13.6145 16.4868C13.7007 16.7166 13.9305 16.8602 14.1602 16.8602L15.2517 16.8602 20.0484 16.8602 20.1058 16.8602C20.1633 16.8602 20.2207 16.8602 20.2782 16.8314 20.6228 16.774 20.9388 16.6017 21.1398 16.3432L22.6334 14.6772 23.3228 16.4868C23.4089 16.7166 23.6387 16.8602 23.8685 16.8602L30.0438 16.8602 30.1013 16.8602C30.5034 16.8602 30.9055 16.6591 31.164 16.3432L37.8277 8.8178C37.9138 8.703 37.9713 8.5881 37.9713 8.4444L37.9713 0.6032C38 0.2585 37.7415 0 37.3968 0Z"/></svg>';

  // SVG Feather inline per il rail / topbar.
  var ICO = {
    home:   '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    modules:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    glossary:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    notes:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    deadlines:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    dashboard:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    help:   '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    menu:   '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    bell:   '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    mail:   '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    video:  '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    globe:  '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    check:  '<polyline points="20 6 9 17 4 12"/>',
    lock:   '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    back:   '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    bookopen:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    user:   '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    corner: '<polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>',
    reset:  '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
    edit:   '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>'
  };
  function svg(name, sw) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICO[name] + '</svg>'; }
  window.awIcon = svg;

  // Registro moduli (globale, usato da rail-drawer e dalle pagine).
  // Roadmap operatore completa (recuperata dalla MVP storica). I costruiti hanno href;
  // gli altri restano locked (href null) ma DEVONO comparire — è il percorso di training.
  // mins = stima durata (in produzione = dai contenuti); unica fonte per home/formazione, invece delle
  // due copie locali che divergevano (MIN_MAP in index.html e modules.html) — mai più numeri diversi
  window.AW_MODULES = window.AW_MODULES || [
    { id: '01', num: 'OP-01', title: 'Login & Language',        href: 'OP-01.html', mins: 8 },
    { id: '02', num: 'OP-02', title: 'Cockpit & Navigation',    href: 'OP-02.html', mins: 12 },
    { id: '03', num: 'OP-03', title: 'Station View',            href: 'OP-03.html', mins: 10 },
    { id: '04', num: 'OP-04', title: 'Activities',              href: null, subs: ['Claim & Submit', 'Statuses', 'Filtering', 'Manual trigger'], mins: 14 },
    { id: '05', num: 'OP-05', title: 'Production Orders',       href: null, subs: ['Orders view', 'Starting an order', 'Cancel & Suspend'], mins: 11 },
    { id: '06', num: 'OP-06', title: 'Downtime Management',     href: null, subs: ['Downtime panel', 'Assign', 'Split', 'Edit assigned'], mins: 13 },
    { id: '07', num: 'OP-07', title: 'Materials & Consumption', href: null, subs: ['BOM', 'MC activity', 'Scan & submit'], mins: 9 }
  ];
  // Registro moduli del corso SuperUser (SU). Placeholder: contenuti non ancora
  // costruiti (href null). Titoli tradotti via 'mod.SU-XX.title'. Mirror del track
  // SU in modules.html — usato dal workspace manager per assegnare corso/moduli SU.
  window.AW_SU_MODULES = window.AW_SU_MODULES || [
    { id: 'SU-01',  num: 'SU-01',  title: 'Insights',                            href: null },
    { id: 'SU-02',  num: 'SU-02',  title: 'User Management',                      href: null },
    { id: 'SU-03',  num: 'SU-03',  title: 'Asset Hierarchy, Materials & Events',  href: null },
    { id: 'SU-04A', num: 'SU-04A', title: 'Activity Templates — Part A',          href: null },
    { id: 'SU-04B', num: 'SU-04B', title: 'Activity Templates — Part B',          href: null }
  ];
  // Utente corrente: popolato al login (localStorage['aw_user']); fallback demo.
  window.AW_USER = window.AW_USER || (function () {
    try {
      var u = JSON.parse(localStorage.getItem('aw_user') || 'null');
      if (u && u.name) return u;
    } catch (e) {}
    return { name: 'Learner', initials: 'L' };
  })();

  // Voci del rail (in ordine). divider:true = separatore di sezione visibile solo rail aperto.
  var RAIL = [
    { key: 'home',      href: 'index.html',     tip: 'rail.home' },
    { key: 'modules',   href: 'modules.html',   tip: 'rail.modules' },
    { divider: true,    sec: 'rail.sec.learn' },
    { key: 'glossary',  href: 'glossary.html',  tip: 'rail.glossary' },
    { key: 'notes',     href: 'notes.html',     tip: 'rail.notes' },
    { divider: true,    sec: 'rail.sec.soon' },
    { key: 'kb',        href: '#',              tip: 'rail.kb',      ico: 'bookopen', soon: true },
    { divider: true,    sec: 'rail.sec.tools' },
    { key: 'dashboard', href: 'dashboard.html', tip: 'rail.dashboard' },
    // Sezione a sé, visibile solo al ruolo Configurator (authoring dei contenuti).
    { divider: true,    sec: 'rail.sec.config', configurator: true },
    { key: 'editor',    href: 'content-editor.html', tip: 'rail.editor', ico: 'edit', configurator: true }
  ];

  function tt(key, fb) {
    var lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
    var d = (window.T && window.T[lang]) || (window.T && window.T.en) || {};
    return d[key] !== undefined ? d[key] : fb;
  }

  // Titolo modulo tradotto (chiave 'mod.<id>.title', fallback al titolo EN dell'array).
  window.awModTitle = function (m) {
    if (!m) return '';
    return tt('mod.' + (m.id || '') + '.title', m.title || m.label || '');
  };
  // 16/10 notte: il numero del capitolo da mostrare. In un'edizione = la posizione nel training (1, 2, 3…), non l'id
  // interno (PKX-00.1); nel laboratorio resta il codice del modulo (OP-01). Accetta il modulo o il suo id.
  window.awChapNo = function (m) {
    if (typeof m === 'string') { var id = m; m = (window.AW_MODULES || []).filter(function (x) { return x.id === id; })[0]; if (!m) return id; }
    return !m ? '' : (m.disp || m.num || m.id || '');
  };
  // "Chapter 2" nelle frasi ("Complete Chapter 2"); senza numero pieno resta il codice.
  window.awChapLabel = function (m) {
    if (typeof m === 'string') { var id0 = m; m = (window.AW_MODULES || []).filter(function (x) { return x.id === id0; })[0] || id0; }
    var n = m && m.pos ? String(m.pos) : window.awChapNo(m);
    return /^\d+$/.test(n) ? tt('ls.chapter.n', 'Chapter {n}').replace('{n}', n) : n;
  };

  // Costruisce il rail.
  function railHTML(active) {
    var h = '<nav class="aw-rail" aria-label="Navigation">';
    // Edizione: voci di menu spente da AW_EDITION.menu (con la loro intestazione di sezione).
    var MENU = (window.AW_EDITION && window.AW_EDITION.menu) || null;
    var SEC_OF = { 'rail.sec.soon': 'kb', 'rail.sec.tools': 'dashboard' };
    RAIL.forEach(function (it) {
      if (MENU && ((it.key && MENU[it.key] === false) || (it.divider && SEC_OF[it.sec] && MENU[SEC_OF[it.sec]] === false))) return;
      // Voci riservate al Configurator (divider + item): nascoste agli altri ruoli.
      if (it.configurator && !(window.awIsConfigurator && window.awIsConfigurator())) return;
      if (it.divider) {
        h += '<div class="aw-rail-div"></div><div class="aw-rail-sec" data-i18n="' + it.sec + '">' + tt(it.sec, '') + '</div>';
        return;
      }
      var cls = (it.key === active) ? ' active' : '';
      // Path: le pagine app stanno in "Web Training MVP/", il content editor una cartella
      // sopra. Le pagine app raggiungono l'editor con "../"; l'editor (che setta
      // window.AW_RAIL_PREFIX='Web Training MVP/') prefissa le altre voci. Vedi content-editor.html.
      var pref = window.AW_RAIL_PREFIX || '';
      var hrefVal = it.href;
      if (it.key === 'editor') {
        hrefVal = pref ? 'content-editor.html' : '../content-editor.html';
        // Workspace separato (content-editor.html CE_WS): si resta nello stesso per la sessione.
        var ws = null; try { ws = sessionStorage.getItem('aw_ws'); } catch (e) {}
        if (ws && /^[a-z0-9-]{1,40}$/.test(ws)) hrefVal += '?ws=' + ws;
      }
      else if (it.href && it.href !== '#') hrefVal = pref + it.href;
      var attr = it.href === '#'
        ? ' href="#" onclick="return false;"'
        : ' href="' + hrefVal + '"';
      var lbl = tt(it.tip, it.key);
      var icoName = it.ico || it.key;
      // Voci "coming soon" (es. Knowledge Base): raggruppate sotto la sezione
      // "rail.sec.soon" (niente più badge inline, che rubava spazio all'etichetta
      // nelle lingue con testi lunghi); stato comunicato dall'intestazione sezione
      // + suffisso nel tooltip/aria-label; nessuna navigazione.
      if (it.soon) {
        var soonL = tt('rail.soon', 'Soon');
        h += '<a class="aw-rail-item aw-rail-soon" href="#" onclick="return false;" data-tipkey="' + it.tip + '" data-tip="' + lbl + ' · ' + soonL + '" aria-label="' + lbl + ' (' + soonL + ')">'
          + svg(icoName)
          + '<span class="aw-rail-label">' + lbl + '</span></a>';
        return;
      }
      h += '<a class="aw-rail-item' + cls + '"' + attr + ' data-tipkey="' + it.tip + '" data-tip="' + lbl + '" aria-label="' + lbl + '">' + svg(icoName) + '<span class="aw-rail-label">' + lbl + '</span></a>';
    });
    var menuL = tt('rail.menu', 'Menu');
    h += '<button class="aw-rail-toggle" onclick="awToggleRail()" aria-label="' + menuL + '">' + svg('menu') + '<span class="aw-rail-label" data-i18n="rail.menu">' + menuL + '</span></button>';
    var helpL = tt('rail.help', 'Help');
    h += '<a class="aw-rail-sp" href="#" onclick="return false;" data-tipkey="rail.help" data-tip="' + helpL + '" aria-label="' + helpL + '">' + svg('help') + '<span class="aw-rail-label">' + helpL + '</span></a>';
    h += '</nav>';
    return h;
  }

  // Costruisce la topbar chiara (hamburger + search/bell/mail + lingua + tema + avatar).
  function topbarHTML() {
    var pref = window.AW_RAIL_PREFIX || '';
    var langBtn = '<div class="aw-lang" data-lang-menu>'
      + '<button class="aw-lang-btn" onclick="awToggleLangMenu(this)" aria-haspopup="true">' + svg('globe') + '<span data-lang-btn>EN</span></button>'
      + '<div class="aw-lang-menu">'
      // Edizione: solo le lingue previste (AW_EDITION.languages); laboratorio: le sue 5.
      + window.awLangList().map(function (l) {
          return '<a href="#" onclick="awSetLang(\'' + l + '\');return false;" data-lang-opt="' + l + '">' + (window.AW_LANGS[l] || l) + '</a>';
        }).join('')
      + '</div></div>';
    return '<header class="aw-tb">'
      + '<a class="aw-tb-logo" href="' + pref + 'index.html" aria-label="autoware · a coesia partner">'
      +   '<img class="aw-tb-logo-pos" src="' + pref + 'logo-full-positive.png?t=23" alt="">'
      +   '<img class="aw-tb-logo-neg" src="' + pref + 'logo-full-negative.png?t=23" alt="">'
      + '</a>'
      + '<span class="aw-tb-title">Training Platform</span>'
      + '<div class="aw-tb-right">'
      +   '<div class="aw-search" data-search>'
      +     '<button class="aw-tb-ico" aria-label="' + tt('search.placeholder', 'Search') + '" onclick="awToggleSearch()">' + svg('search') + '</button>'
      +     '<div class="aw-search-panel" id="aw-search-panel">'
      +       '<div class="aw-search-bar">' + svg('search')
      +         '<input id="aw-search-in" type="text" autocomplete="off" spellcheck="false" placeholder="' + tt('search.placeholder', 'Search chapters, terms, notes…') + '" oninput="awRunSearch(this.value)" onkeydown="awSearchKey(event)">'
      +         '<button class="aw-search-x" onclick="awCloseSearch()" aria-label="Close">&times;</button></div>'
      +       '<div class="aw-search-res" id="aw-search-res"></div>'
      +     '</div>'
      +   '</div>'
      +   '<div class="aw-notif" data-notif="bell">'
      +     '<button class="aw-tb-ico" aria-label="' + tt('notif.bell.aria', 'Notifications') + '" onclick="awToggleNotif(\'bell\')">' + svg('bell') + '<span class="aw-tb-badge" id="aw-badge-bell">0</span></button>'
      +     '<div class="aw-notif-panel" id="aw-notif-panel-bell">'
      +       '<div class="aw-notif-hd">' + tt('notif.bell.title', 'Notifications') + '</div>'
      +       '<div class="aw-notif-list" id="aw-notif-list-bell"></div>'
      +       '<a class="aw-notif-viewall" href="' + pref + 'inbox.html?tab=bell" data-i18n="notif.viewall">' + tt('notif.viewall', 'View all') + '</a>'
      +     '</div>'
      +   '</div>'
      +   '<div class="aw-notif" data-notif="mail">'
      +     '<button class="aw-tb-ico" aria-label="' + tt('notif.mail.aria', 'Announcements') + '" onclick="awToggleNotif(\'mail\')">' + svg('mail') + '<span class="aw-tb-badge" id="aw-badge-mail">0</span></button>'
      +     '<div class="aw-notif-panel" id="aw-notif-panel-mail">'
      +       '<div class="aw-notif-hd">' + tt('notif.mail.title', 'Announcements') + '</div>'
      +       '<div class="aw-notif-list" id="aw-notif-list-mail"></div>'
      +       '<a class="aw-notif-viewall" href="' + pref + 'inbox.html?tab=mail" data-i18n="notif.viewall">' + tt('notif.viewall', 'View all') + '</a>'
      +     '</div>'
      +   '</div>'
      +   langBtn
      +   '<button class="aw-tb-ico" data-theme-btn onclick="applyTheme(document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\')" aria-label="Theme"></button>'
      +   avatarHTML()
      + '</div>'
      + '</header>';
  }
  // 14/10: nelle edizioni (fiera) l'avatar apre un menu per chi presenta: Presenter mode (tutte le sezioni del
  // capitolo aperte) e Reset demo (si riparte dalla Home pulita, stessa lingua). Nel laboratorio resta un cerchio.
  function avatarHTML() {
    var ini = window.AW_USER.initials || 'OP';
    if (!window.AW_EDITION) return '<div class="aw-tb-avatar">' + ini + '</div>';
    var on = window.awPresenterOn(), D = window.awDictT;
    return '<div class="aw-lang aw-me" data-lang-menu><button type="button" class="aw-tb-avatar" onclick="awToggleLangMenu(this)" aria-haspopup="true" aria-label="' + D('Demo menu') + '">' + ini + '</button>'
      + '<div class="aw-lang-menu aw-me-menu">'
      + '<a href="#" onclick="awTogglePresenter();return false;" title="' + D('All sections of a chapter open, to jump straight to Quiz or Done.') + '"><span>' + D('Presenter mode') + '</span>'
      +   '<span class="aw-me-st' + (on ? ' on' : '') + '">' + D(on ? 'On' : 'Off') + '</span></a><hr>'
      + '<a href="#" onclick="awResetDemoHome();return false;">' + tt('ed.reset', 'Reset demo') + '</a>'
      + '</div></div>';
  }
  window.awPresenterOn = function () { try { return window.localStorage.getItem('awpresenter') === '1'; } catch (e) { return false; } };
  // chiave senza "aw_": resta fuori dalla memoria dell'edizione → Reset demo non la spegne tra un visitatore e l'altro
  window.awTogglePresenter = function () { try { localStorage.setItem('awpresenter', window.awPresenterOn() ? '0' : '1'); } catch (e) {} location.reload(); };
  window.awResetDemoHome = function () {
    if (!confirm(tt('ed.reset.confirm', 'Reset the demo? Progress, notes and team changes made on this device will be cleared.'))) return;
    var keep = {}; ['aw_lang', 'aw_user', 'aw_profile'].forEach(function (k) { try { keep[k] = localStorage.getItem(k); } catch (e) {} });
    if (window.awResetDemo) window.awResetDemo();
    Object.keys(keep).forEach(function (k) { if (keep[k] != null) try { localStorage.setItem(k, keep[k]); } catch (e) {} });
    location.href = 'index.html';
  };

  // Drawer "Tutti i moduli".
  function drawerHTML() {
    var prog = {};
    try { prog = JSON.parse(localStorage.getItem('aw_progress') || '{}'); } catch (e) {}
    var firstOpen = null;
    window.AW_MODULES.forEach(function (m) { if (!firstOpen && !prog[m.id] && m.href) firstOpen = m.id; });
    var rows = window.AW_MODULES.map(function (m) {
      var done = prog[m.id] === true;
      var current = (m.id === firstOpen);
      var locked = !m.href;                 // locked = nessuna pagina ancora; i costruiti restano cliccabili
      var icCls = done ? 'done' : (current ? 'cur' : (locked ? 'lock' : ''));
      var ic = done ? svg('check') : (locked ? svg('lock') : (current ? '' : String(m.pos || window.awChapNo(m)).replace('OP-', '')));
      var statusKey = done ? tt('sidebar.completed', 'Completed')
        : (current ? tt('sidebar.current', 'Current')
        : (locked ? tt('sidebar.comingnext', 'Coming next') : tt('sidebar.available', 'Available')));
      var inner = '<span class="aw-mod-ic ' + icCls + '">' + ic + '</span>'
        + '<span class="aw-mod-tx"><span class="aw-mod-t">' + window.awChapNo(m) + ' · ' + window.awModTitle(m) + '</span>'
        + '<span class="aw-mod-s">' + statusKey + '</span></span>';
      if (locked) return '<span class="aw-mod-link locked">' + inner + '</span>';
      return '<a class="aw-mod-link" href="' + m.href + '">' + inner + '</a>';
    }).join('');
    return '<div class="aw-drawer-ov" onclick="awCloseDrawer()"></div>'
      + '<aside class="aw-drawer" role="dialog" aria-label="' + tt('rail.modules', 'Modules') + '">'
      + '<div class="aw-drawer-hd"><h3>' + tt('drawer.title', 'Training modules') + '</h3>'
      + '<button class="aw-drawer-x" onclick="awCloseDrawer()" aria-label="Close">&times;</button></div>'
      + '<div class="aw-drawer-body">' + rows + '</div></aside>';
  }

  window.awOpenDrawer = function () {
    var d = document.getElementById('aw-drawer-mount');
    if (!d) return;
    d.innerHTML = drawerHTML();
    requestAnimationFrame(function () {
      var ov = d.querySelector('.aw-drawer-ov'), dr = d.querySelector('.aw-drawer');
      if (ov) ov.classList.add('open');
      if (dr) dr.classList.add('open');
    });
  };
  window.awCloseDrawer = function () {
    var d = document.getElementById('aw-drawer-mount');
    if (!d) return;
    var ov = d.querySelector('.aw-drawer-ov'), dr = d.querySelector('.aw-drawer');
    if (ov) ov.classList.remove('open');
    if (dr) dr.classList.remove('open');
    setTimeout(function () { if (d) d.innerHTML = ''; }, 260);
  };

  // Espande/comprime il rail (mostra etichette + logo completo). Stato persistito.
  window.awToggleRail = function () {
    var open = document.body.classList.toggle('aw-rail-open');
    try { localStorage.setItem('aw_rail_open', open ? '1' : '0'); } catch (e) {}
  };

  // ── RICERCA GLOBALE ───────────────────────────────────────────────────
  // Cerca in capitoli/moduli, glossario, note, e persone (solo manager).
  // Ogni risultato è un link alla pagina di appartenenza; i moduli non ancora
  // costruiti rimandano al catalogo (modules.html). Vive nella topbar → è su ogni pagina.
  // Manager: nel demo l'Area Manager è accessibile → default sì, salvo aw_role='operator'.
  window.awIsManager = function () {
    return (localStorage.getItem('aw_role') || 'manager') !== 'operator';
  };
  // Ruolo Configurator (authoring contenuti): distinto dal manager. Nel demo è ON di
  // default così la sezione Content Editor è visibile senza setup; disattivabile con
  // localStorage['aw_configurator']='0'. In produzione = assegnazione di ruolo reale
  // (Configurator/Owner, vedi 07-handoff-team-ai/MODELLO_DOMINIO_v1.md §3).
  window.awIsConfigurator = function () {
    // Edizione: l'editor esiste solo se l'edizione lo prevede, e solo per il profilo admin.
    if (window.AW_EDITION) {
      if (window.AW_EDITION.preview) return true;   // anteprima dal laboratorio: si torna all'editor
      var p = null; try { p = localStorage.getItem('aw_profile'); } catch (e) {}
      return !!(window.AW_EDITION.menu && window.AW_EDITION.menu.editor) && p === 'admin';
    }
    return (localStorage.getItem('aw_configurator') || '1') !== '0';
  };
  function _escS(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function _chapterResults(q) {
    var out = [], SECT = ['intro', 'video', 'concepts', 'practice', 'quiz'];
    (window.AW_MODULES || []).forEach(function (m) {
      var title = window.awModTitle(m), label = window.awChapNo(m) + ' · ' + title, href = m.href || 'modules.html';
      if ((m.num + ' ' + title).toLowerCase().indexOf(q) >= 0)
        out.push({ title: label, sub: m.href ? tt('search.open', 'Open module') : tt('search.soon', 'Coming soon — opens catalog'), href: href, icon: 'modules' });
      if (m.href) SECT.forEach(function (s) {
        var lbl = tt('tab.' + s, ''); if (lbl && lbl.toLowerCase().indexOf(q) >= 0)
          out.push({ title: lbl.replace(/^\d+\.\s*/, ''), sub: label, href: href, icon: 'corner' });
      });
      (m.subs || []).forEach(function (sub, i) {
        var lbl = tt('sub.' + m.id + '.' + i, sub);
        if (lbl.toLowerCase().indexOf(q) >= 0) out.push({ title: lbl, sub: label, href: m.href || 'modules.html', icon: 'corner' });
      });
    });
    return out;
  }
  function _glossaryResults(q) {
    var out = [], lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
    (window.GLOSSARY || []).forEach(function (g) {
      var tr = (window.GLOSSARY_NAMES && GLOSSARY_NAMES[g.term] && GLOSSARY_NAMES[g.term][lang]) || '';
      if (g.term.toLowerCase().indexOf(q) >= 0 || (tr && tr.toLowerCase().indexOf(q) >= 0))
        out.push({ title: g.term, sub: (tr && tr !== g.term) ? tr : tt('search.g.glossary', 'Glossary'), href: 'glossary.html?q=' + encodeURIComponent(g.term), icon: 'glossary' });
    });
    return out;
  }
  function _noteResults(q) {
    var out = [], notes = (typeof window.awLoadNotes === 'function') ? window.awLoadNotes() : [];
    notes.forEach(function (n) {
      if ((n.text || '').toLowerCase().indexOf(q) >= 0) {
        var t = n.text.length > 60 ? n.text.slice(0, 58) + '…' : n.text;
        out.push({ title: t, sub: n.module ? String(n.module) : tt('search.g.notes', 'Notes'), href: 'notes.html?note=' + n.id, icon: 'notes' });
      }
    });
    return out;
  }
  function _peopleResults(q) {
    if (!window.awIsManager()) return [];
    var out = [], users = (typeof window.awLoadUsers === 'function') ? window.awLoadUsers() : [];
    users.forEach(function (u) {
      if ((u.name || '').toLowerCase().indexOf(q) >= 0)
        out.push({ title: u.name, sub: window.awSiteName(u.siteId), href: 'dashboard.html?tab=team&user=' + encodeURIComponent(u.id), icon: 'user' });
    });
    return out;
  }
  window.awRunSearch = function (q) {
    var res = document.getElementById('aw-search-res'); if (!res) return;
    q = (q || '').trim().toLowerCase();
    if (!q) { res.innerHTML = '<div class="aw-search-msg">' + tt('search.hint', 'Type to search chapters, terms, notes…') + '</div>'; return; }
    var groups = [
      { key: 'chapters', items: _chapterResults(q) },
      { key: 'glossary', items: _glossaryResults(q) },
      { key: 'notes', items: _noteResults(q) },
      { key: 'people', items: _peopleResults(q) }
    ];
    var html = '', total = 0;
    groups.forEach(function (g) {
      if (!g.items.length) return;
      var items = g.items.slice(0, 6); total += items.length;
      html += '<div class="aw-search-grp g-' + g.key + '">' + tt('search.g.' + g.key, g.key) + (g.items.length > 6 ? ' <span>' + g.items.length + '</span>' : '') + '</div>';
      items.forEach(function (it) {
        html += '<a class="aw-search-item g-' + g.key + '" href="' + it.href + '">'
          + '<span class="aw-search-ic">' + svg(it.icon) + '</span>'
          + '<span class="aw-search-tx"><span class="aw-search-t">' + _escS(it.title) + '</span>'
          + (it.sub ? '<span class="aw-search-s">' + _escS(it.sub) + '</span>' : '') + '</span></a>';
      });
    });
    res.innerHTML = total ? html : '<div class="aw-search-msg">' + tt('search.empty', 'No results') + '</div>';
  };
  window.awToggleSearch = function () {
    document.querySelectorAll('.aw-notif-panel.open').forEach(function (n) { n.classList.remove('open'); });
    var p = document.getElementById('aw-search-panel'); if (!p) return;
    var open = p.classList.toggle('open');
    if (open) { var i = document.getElementById('aw-search-in'); window.awRunSearch(i ? i.value : ''); if (i) setTimeout(function () { i.focus(); }, 10); }
  };
  window.awCloseSearch = function () {
    var p = document.getElementById('aw-search-panel'); if (p) p.classList.remove('open');
  };
  window.awSearchKey = function (e) {
    var res = document.getElementById('aw-search-res'); if (!res) return;
    if (e.key === 'Escape') { window.awCloseSearch(); return; }
    var items = [].slice.call(res.querySelectorAll('.aw-search-item'));
    var cur = res.querySelector('.aw-search-item.sel'), idx = items.indexOf(cur);
    if (e.key === 'Enter') { var go = cur || items[0]; if (go) window.location.href = go.getAttribute('href'); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); idx = Math.min(items.length - 1, idx + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); idx = Math.max(0, idx - 1); }
    else return;
    items.forEach(function (x) { x.classList.remove('sel'); });
    if (items[idx]) { items[idx].classList.add('sel'); items[idx].scrollIntoView({ block: 'nearest' }); }
  };
  document.addEventListener('click', function (e) {
    var s = document.querySelector('[data-search]');
    if (s && !s.contains(e.target)) window.awCloseSearch();
  });

  // ── CAMPANA + MAIL ───────────────────────────────────────────────────
  // Campana = assegnazioni/sessioni rilevanti per l'utente corrente, stessi
  // store del workspace manager (aw_assignments/aw_sessions, vedi sopra) —
  // stesso dato dell'agenda in index.html, letto qui per la topbar globale.
  // Mail = annunci del team di sviluppo (mock statico AW_ANNOUNCEMENTS; in
  // produzione = feed/CMS). "Letto" persistito per-voce in localStorage così
  // il badge si azzera dopo la prima apertura e riparte solo su voci nuove.
  var DD_READ_KEY = { bell: 'aw_notif_read', mail: 'aw_mail_read' };
  function ddReadIds(kind) {
    try { return JSON.parse(localStorage.getItem(DD_READ_KEY[kind]) || '[]'); } catch (e) { return []; }
  }
  function ddMarkRead(kind, ids) {
    try {
      var cur = ddReadIds(kind);
      ids.forEach(function (id) { if (cur.indexOf(id) === -1) cur.push(id); });
      localStorage.setItem(DD_READ_KEY[kind], JSON.stringify(cur));
    } catch (e) {}
  }
  function ddWho() {
    var me = (window.AW_USER && AW_USER.name) || 'Learner';
    var trainings = ['op'];
    try {
      var u = (window.awLoadUsers ? awLoadUsers() : []).filter(function (x) { return x.name === me; })[0];
      if (u) trainings = window.awUserTrainings(u);
    } catch (e) {}
    return { me: me, trainings: trainings };
  }
  function ddForMe(target, who) {
    return window.awAssignMatch(target, who.me, who.trainings);
  }
  function ddParseISO(iso) {
    var p = (iso || '').split('-');
    return new Date(+p[0] || 1970, (+p[1] || 1) - 1, (+p[2] || 1));
  }
  function ddModInfo(moduleId) {
    var all = (window.AW_MODULES || []).concat(window.AW_SU_MODULES || []);
    var m = all.filter(function (x) { return x.id === moduleId; })[0];
    return m ? { code: window.awChapLabel(m), href: m.href } : { code: moduleId, href: null };
  }
  function ddAssignMods(a) { return a.moduleIds || (a.moduleId ? [a.moduleId] : []); }
  // A user only "gets" a module if enrolled in that module's course (SU vs OP).
  function ddEnrolledFor(who, moduleId) {
    return (/^SU/.test(moduleId || '') ? who.trainings.indexOf('su') : who.trainings.indexOf('op')) >= 0;
  }

  // true se esiste un'assegnazione (corso o modulo) per l'utente corrente,
  // con scadenza passata, che riguarda questo modulo — riusa la stessa logica
  // di awBuildNotifications così l'overdue è consistente ovunque (bell/agenda/inbox/lista moduli).
  window.awModuleOverdue = function (moduleId) {
    try {
      var who = ddWho(), today = new Date(); today.setHours(0, 0, 0, 0);
      return (window.awLoadAssignments ? awLoadAssignments() : []).some(function (a) {
        if (!ddForMe(a.target, who)) return false;
        if (!ddEnrolledFor(who, moduleId)) return false;
        var isCourse = a.level === 'course' || a.kind === 'path';
        if (!isCourse && ddAssignMods(a).indexOf(moduleId) < 0) return false;
        var due = a.dueDate ? ddParseISO(a.dueDate) : null;
        return !!(due && due < today);
      });
    } catch (e) { return false; }
  };

  window.awBuildNotifications = function () {
    var who = ddWho(), today = new Date(); today.setHours(0, 0, 0, 0);
    var out = [];
    try {
      (window.awLoadAssignments ? awLoadAssignments() : []).forEach(function (a) {
        if (!ddForMe(a.target, who)) return;
        var isCourse = a.level === 'course' || a.kind === 'path';
        var due = a.dueDate ? ddParseISO(a.dueDate) : null;
        var overdue = !!(due && due < today);
        var subTxt = (overdue ? tt('mgr.state.overdue', 'Overdue') + ' \xB7 ' : '') + (due ? due.toLocaleDateString(window.awLangCode(), { day: 'numeric', month: 'short', year: 'numeric' }) : tt('mgr.item.nodue', 'No deadline'));
        function pushNotif(idSuffix, title, href) {
          out.push({
            id: 'a:' + a.id + idSuffix,
            kind: overdue ? 'overdue' : 'assignment',
            category: overdue ? 'overdue' : 'assignment',
            title: title, sub: subTxt,
            date: due || new Date(0), sortKey: overdue ? -1 : 1,
            href: href, ctaKey: isCourse ? 'ibx.viewpath' : 'search.open',
            assignedBy: awWho(a.assignedBy) || null, icon: 'deadlines'
          });
        }
        if (isCourse) {
          pushNotif('', tt('home.ev.duepath', 'Finish your training path'), 'modules.html');
        } else {
          // one notification per module the user is actually enrolled for
          ddAssignMods(a).forEach(function (mid) {
            if (!ddEnrolledFor(who, mid)) return;
            var mi = ddModInfo(mid);
            pushNotif(':' + mid, tt('home.ev.duemod', 'Complete {code}').replace('{code}', mi.code), mi.href || 'modules.html');
          });
        }
      });
    } catch (e) {}
    try {
      (window.awLoadSessions ? awLoadSessions() : []).forEach(function (s) {
        if (!ddForMe(s.invitees, who)) return;
        var d = ddParseISO(s.date);
        if (d < today) return;
        out.push({
          id: 's:' + s.id,
          kind: 'session',
          category: 'session',
          title: s.title || tt('home.ev.session', 'Live Q&A session'),
          sub: awFmtISO(s.date) + (s.time ? ' \xB7 ' + awFmtTime(s.time) : '') + (s.host ? ' \xB7 ' + awWho(s.host) : ''),
          date: d, sortKey: 0,
          href: s.teamsUrl || '#',
          ctaKey: 'mgr.item.join',
          host: awWho(s.host) || null,
          icon: 'video'
        });
      });
    } catch (e) {}
    out.sort(function (a, b) { return (a.sortKey - b.sortKey) || (a.date - b.date); });
    return out;
  };

  // Annunci mock del team di sviluppo, con categoria (release = novità prodotto,
  // notice = avviso operativo). daysAgo è relativo al momento in cui gira lo
  // script (non a una data fissa) così restano coerenti a qualunque data reale
  // del browser. Testi in translations.js (chiavi ann.<key>.*).
  window.AW_ANNOUNCEMENTS = window.AW_ANNOUNCEMENTS || [
    { id: 'ann-search',  daysAgo: 1,  key: 'search',  category: 'release' },
    { id: 'ann-maint',   daysAgo: 2,  key: 'maint',   category: 'notice' },
    { id: 'ann-notes',   daysAgo: 4,  key: 'notes',   category: 'release' },
    { id: 'ann-dark',    daysAgo: 9,  key: 'dark',    category: 'release' },
    { id: 'ann-browser', daysAgo: 12, key: 'browser', category: 'notice' },
    { id: 'ann-op03',    daysAgo: 16, key: 'op03',    category: 'release' }
  ];
  window.awBuildAnnouncements = function () {
    return window.AW_ANNOUNCEMENTS.map(function (a) {
      return {
        id: a.id,
        kind: a.category,
        category: a.category,
        // a.title/a.body (inglese, edizione) passano dal dizionario delle frasi
        title: a.title ? window.awDictT(a.title) : tt('ann.' + a.key + '.title', a.key),
        sub: a.body ? window.awDictT(a.body) : tt('ann.' + a.key + '.body', ''),
        daysAgo: a.daysAgo,
        href: 'inbox.html?tab=mail&item=' + encodeURIComponent(a.id),
        icon: 'mail'
      };
    }).sort(function (a, b) { return a.daysAgo - b.daysAgo; });
  };

  window.awNotifReadIds = function (kind) { return ddReadIds(kind); };
  window.awMarkNotifRead = function (kind, ids) {
    ddMarkRead(kind, Array.isArray(ids) ? ids : [ids]);
    window.awRefreshNotifBadge(kind);
  };
  window.awMarkAllNotifRead = function (kind) {
    var items = kind === 'bell' ? window.awBuildNotifications() : window.awBuildAnnouncements();
    window.awMarkNotifRead(kind, items.map(function (it) { return it.id; }));
  };

  window.awRenderNotifPanel = function (kind) {
    var list = document.getElementById('aw-notif-list-' + kind);
    if (!list) return;
    var items = kind === 'bell' ? window.awBuildNotifications() : window.awBuildAnnouncements();
    var readIds = ddReadIds(kind);
    if (!items.length) {
      list.innerHTML = '<div class="aw-notif-empty">' + tt('notif.' + kind + '.empty', 'Nothing here yet') + '</div>';
    } else {
      // Anteprima: solo le prime voci. "Leggere" scatta al clic sulla singola
      // voce (awMarkNotifRead), non più aprendo il pannello — così il badge
      // riflette davvero cosa è stato aperto, non solo cosa è stato intravisto.
      list.innerHTML = items.slice(0, 6).map(function (it) {
        var unread = readIds.indexOf(it.id) === -1;
        var tag = it.href ? 'a' : 'div';
        return '<' + tag + ' class="aw-notif-item t-' + (it.kind || kind) + (unread ? ' unread' : '') + '"'
          + (it.href ? ' href="' + it.href + '" onclick="awMarkNotifRead(\'' + kind + '\',\'' + it.id + '\')"' : '') + '>'
          + '<span class="aw-notif-ic">' + svg(it.icon || kind) + '</span>'
          + '<span class="aw-notif-tx"><span class="aw-notif-t">' + _escS(it.title) + '</span>'
          + '<span class="aw-notif-s">' + _escS(it.sub) + '</span></span>'
          + (unread ? '<span class="aw-notif-dot"></span>' : '')
          + '</' + tag + '>';
      }).join('');
    }
    window.awRefreshNotifBadge(kind);
  };

  window.awRefreshNotifBadge = function (kind) {
    var badge = document.getElementById('aw-badge-' + kind);
    if (!badge) return;
    var items = kind === 'bell' ? window.awBuildNotifications() : window.awBuildAnnouncements();
    var readIds = ddReadIds(kind);
    var n = items.filter(function (it) { return readIds.indexOf(it.id) === -1; }).length;
    badge.textContent = n > 9 ? '9+' : String(n);
    badge.style.display = n > 0 ? 'flex' : 'none';
  };
  window.awRefreshNotifBadges = function () { ['bell', 'mail'].forEach(window.awRefreshNotifBadge); };

  window.awToggleNotif = function (kind) {
    window.awCloseSearch();
    var other = kind === 'bell' ? 'mail' : 'bell';
    var op = document.getElementById('aw-notif-panel-' + other);
    if (op) op.classList.remove('open');
    var panel = document.getElementById('aw-notif-panel-' + kind);
    if (!panel) return;
    var open = panel.classList.toggle('open');
    if (open) window.awRenderNotifPanel(kind);
  };
  document.addEventListener('click', function (e) {
    document.querySelectorAll('[data-notif]').forEach(function (w) {
      if (!w.contains(e.target)) { var p = w.querySelector('.aw-notif-panel'); if (p) p.classList.remove('open'); }
    });
  });

  window.awToggleLangMenu = function (btn) {
    var menu = btn.parentElement.querySelector('.aw-lang-menu');
    if (menu) menu.classList.toggle('open');
  };
  window.awSetLang = function (lang) {
    try { localStorage.setItem('aw_lang', lang); } catch (e) {}
    // 09/10 (edizioni con il dizionario dei capitoli): le pagine fuori dalla lezione si ricaricano, così
    // anche i titoli dei capitoli già disegnati cambiano lingua. La lezione decide da sé (lesson-shell).
    if (window.AW_EDITION && window.PKX_DICT && !/lesson-shell\.html$/i.test(location.pathname)) { location.reload(); return; }
    applyLang(lang);
    document.querySelectorAll('.aw-lang-menu').forEach(function (m) { m.classList.remove('open'); });
    // legacy: propaga a eventuali iframe
    try { if (window !== window.top) window.parent.postMessage({ type: 'switchLang', lang: lang }, '*'); } catch (e) {}
  };
  document.addEventListener('click', function (e) {
    document.querySelectorAll('[data-lang-menu]').forEach(function (m) {
      if (!m.contains(e.target)) { var mm = m.querySelector('.aw-lang-menu'); if (mm) mm.classList.remove('open'); }
    });
  });

  // Inietta la shell. active = chiave voce rail attiva.
  window.renderChrome = function (active) {
    if (document.querySelector('.aw-rail')) return; // già iniettata
    document.body.classList.add('aw-shell');
    var railPref = localStorage.getItem('aw_rail_open');
    if (railPref !== '0') document.body.classList.add('aw-rail-open');
    var drawerMount = '<div id="aw-drawer-mount"></div>';
    document.body.insertAdjacentHTML('afterbegin', railHTML(active) + topbarHTML() + drawerMount);
    // marca la lingua corrente nel menu + sincronizza etichetta pulsante + tema
    var lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
    document.querySelectorAll('[data-lang-opt]').forEach(function (a) {
      a.classList.toggle('cur', a.getAttribute('data-lang-opt') === lang);
    });
    // sincronizza l'etichetta del pulsante lingua (fix: se renderChrome gira DOPO
    // applyLang la topbar resta al default "EN" — vedi glossary/notes/dashboard)
    var _ll = { en: 'English', it: 'Italiano', da: 'Dansk', zh: '中文', nl: 'Nederlands' };
    document.querySelectorAll('[data-lang-btn]').forEach(function (el) {
      el.textContent = _ll[lang] || lang.toUpperCase();
    });
    applyTheme(localStorage.getItem('aw_theme') || 'light');
    window.awRefreshNotifBadges();
  };

  // ── Percorso verticale delle sezioni (moduli) ─────────────────────────
  // Render centralizzato; lo stato (done/unlocked/current) resta nel modulo.
  // cfg = { mount, moduleNum, moduleTitle(i18nKey opzionale), sections:[{id,labelKey,time}],
  //         currentId, isDone(id), isUnlocked(idx), onSelect(id) }
  window.awRenderSteps = function (cfg) {
    window._awStepsCfg = cfg;
    var el = (typeof cfg.mount === 'string') ? document.getElementById(cfg.mount) : cfg.mount;
    if (!el) return;
    var done = 0;
    // La sezione finale (completion) non ha nulla da completare: essere lì = fatto → conta 6/6.
    cfg.sections.forEach(function (s, i) { if (cfg.isDone(s.id) || (s.id === cfg.currentId && i === cfg.sections.length - 1)) done++; });
    var stepsHTML = '<div class="aw-steps"><div class="aw-steps-line"></div>';
    cfg.sections.forEach(function (s, i) {
      var isDone = cfg.isDone(s.id);
      var isCur = (s.id === cfg.currentId);
      var unlocked = cfg.isUnlocked(i);
      var cls = isCur ? 'current' : (isDone ? 'done' : (unlocked ? '' : 'locked'));
      var dot = isDone ? svg('check') : (isCur ? '' : (unlocked ? (i + 1) : svg('lock')));
      stepsHTML += '<button type="button" class="aw-step ' + cls + '" onclick="awStepClick(\'' + s.id + '\')">'
        + '<span class="aw-step-dot">' + dot + '</span>'
        + '<span class="aw-step-lbl">' + tt(s.labelKey, s.id) + '</span>'
        + (s.time ? '<span class="aw-step-time">' + s.time + '</span>' : '')
        + '</button>';
    });
    stepsHTML += '</div>';
    var n = cfg.sections.length;
    el.innerHTML =
      '<div class="aw-spath-inner">'
      // 2026-09-15: in anteprima (?preview=1) questo link andava comunque a modules.html,
      // scavalcando la barra "← Back to editor" di awMountPreviewBar (shared.js) — l'unico
      // percorso di uscita testato era il bottone della barra, non questo, che è il primo
      // link cliccabile visibile nella colonna sezioni. Segnalato da Giulia: cliccandolo si
      // ritrovava sul catalogo generale invece che tornare all'editor.
      + (window.AW_PREVIEW
          ? '<a class="aw-spath-back" href="#" onclick="event.preventDefault();window.awClosePreview&&window.awClosePreview();">' + svg('back') + '<span>Back to editor</span></a>'
          : '<a class="aw-spath-back" href="modules.html">' + svg('back') + '<span>' + tt('rail.modules', 'Training') + '</span></a>')
      + '<div class="aw-spath-hd"><span class="aw-spath-eyebrow">' + tt('spath.module', 'Module') + ' ' + cfg.moduleNum + '</span></div>'
      + '<div class="aw-spath-title">' + (cfg.moduleTitle || '') + '</div>'
      + stepsHTML
      + '<div class="aw-spath-foot"><div class="aw-spath-foot-lbl">' + done + ' ' + tt('spath.of', 'of') + ' ' + n + ' ' + tt('spath.sections', 'sections') + '</div>'
      + '<div class="aw-spath-track"><div class="aw-spath-fill" style="width:' + Math.round(done / n * 100) + '%"></div></div></div>'
      + '<button type="button" class="aw-spath-reset" onclick="awResetChapter(\'' + cfg.moduleNum + '\')" title="' + tt('spath.reset', 'Reset chapter') + '">' + svg('reset') + '<span>' + tt('spath.reset', 'Reset chapter') + '</span></button>'
      + '</div>';
  };
  // Azzera il progresso del capitolo corrente (utile in demo/ripasso) e ricarica da capo.
  window.awResetChapter = function (moduleNum) {
    var msg = tt('spath.reset.confirm', 'Reset this chapter? Your progress in it will be cleared.');
    if (!window.confirm(msg)) return;
    try {
      var sect = JSON.parse(localStorage.getItem('aw_sect') || '{}'); delete sect[moduleNum];
      localStorage.setItem('aw_sect', JSON.stringify(sect));
      var prog = JSON.parse(localStorage.getItem('aw_progress') || '{}'); delete prog[moduleNum];
      localStorage.setItem('aw_progress', JSON.stringify(prog));
    } catch (e) {}
    location.reload();
  };
  window.awStepClick = function (id) {
    var cfg = window._awStepsCfg;
    if (cfg && typeof cfg.onSelect === 'function') cfg.onSelect(id);
  };

  // Aggiorna la shell al cambio lingua (chiamato da applyLang).
  window.awRefreshChrome = function () {
    document.querySelectorAll('.aw-rail [data-tipkey]').forEach(function (a) {
      var k = a.getAttribute('data-tipkey'), v = tt(k, '');
      if (v) {
        var lb = a.querySelector('.aw-rail-label'); if (lb) lb.textContent = v;
        // Voci "coming soon" (es. Knowledge Base): il tooltip/aria-label riportano
        // anche il suffisso "Soon", come al render iniziale in railHTML.
        if (a.classList.contains('aw-rail-soon')) {
          var soonL = tt('rail.soon', 'Soon');
          a.setAttribute('data-tip', v + ' · ' + soonL);
          a.setAttribute('aria-label', v + ' (' + soonL + ')');
        } else {
          a.setAttribute('data-tip', v); a.setAttribute('aria-label', v);
        }
      }
    });
    var lang = window.LANG || localStorage.getItem('aw_lang') || 'en';
    document.querySelectorAll('[data-lang-opt]').forEach(function (a) {
      a.classList.toggle('cur', a.getAttribute('data-lang-opt') === lang);
    });
    if (window._awStepsCfg) window.awRenderSteps(window._awStepsCfg);
    // Ricerca: placeholder input + aria-label del pulsante sono testo statico
    // iniettato al render della topbar → vanno risincronizzati qui.
    var _sIn = document.getElementById('aw-search-in');
    if (_sIn) _sIn.setAttribute('placeholder', tt('search.placeholder', _sIn.getAttribute('placeholder')));
    var _sBtn = document.querySelector('[data-search] > .aw-tb-ico');
    if (_sBtn) _sBtn.setAttribute('aria-label', tt('search.placeholder', _sBtn.getAttribute('aria-label')));
    // Campana/mail: header + aria-label sono testo statico iniettato al render
    // della topbar (stesso limite) → vanno risincronizzati qui.
    document.querySelectorAll('[data-notif]').forEach(function (w) {
      var kind = w.getAttribute('data-notif'), hd = w.querySelector('.aw-notif-hd'), btn = w.querySelector('.aw-tb-ico');
      if (hd) hd.textContent = tt('notif.' + kind + '.title', hd.textContent);
      if (btn) btn.setAttribute('aria-label', tt('notif.' + kind + '.aria', btn.getAttribute('aria-label')));
    });
    document.querySelectorAll('.aw-notif-panel.open').forEach(function (p) {
      window.awRenderNotifPanel(p.id.replace('aw-notif-panel-', ''));
    });
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // GUIDED CONCEPT ENGINE — motore condiviso per le Key Concepts (OP-01/02/03)
  // Estratto da OP-03 (2026-07-14) per eliminare la tripla duplicazione inline.
  // Contratto: anello .gc-target fisso, .pulse SOLO all'apertura; esplorato =
  // .gc-cleared (teal); .gc-ctx hero; gcFocus attenua (.gc-dim) le zone non
  // pertinenti; salto d'area gated da "Continue" (.gc-check-cont / gcAdvance).
  // Legge il lang corrente da window.LANG e le stringhe dal T globale (translations.js);
  // usa i globali di modulo conceptsSeen + refreshGates (risolti a call-time).
  // Ogni modulo definisce i propri GCX.<k>, gli fx, sc()/initConcept() e i handler
  // di sequenza (es. c1drill, dRefresh). Tutte le funzioni sono esposte su window
  // perché shared.js è un IIFE e il codice inline dei moduli le chiama come globali.
  // ═══════════════════════════════════════════════════════════════════════════
  function gcLang() { return window.LANG || localStorage.getItem('aw_lang') || 'en'; }
  function gcT(k) { var d = (typeof T !== 'undefined') && T[gcLang()]; return (d && d[k]) || k; }
  // Risolve INDIFFERENTEMENTE una chiave i18n (moduli reali) o un LocalizedText (contratto di
  // contenuto). Fix del bug A5 (Ondata 2): prima solo gli effetti setText accettavano entrambi
  // (gcEffText); tutto il resto — gcSet, i nomi delle aree, le label degli item — parlava solo
  // chiavi, e il configuratore ci passava il testo già risolto, funzionando per il fallback `|| k`.
  function gcTx(v) {
    if (v == null) return '';
    if (typeof v === 'object') return gcEffText(v); // LocalizedText { values:{locale:…} }
    return gcT(v);
  }

  // Sposta l'UNICO anello "clicca qui" (.gc-target) su un elemento.
  //
  // ── INTERVENTO 4 del Blocco 1 — IL LAMPEGGIO (R-14, decisione D2 del 18/09) ──────────────────
  // Storia, perché è un dietrofront deliberato e non una svista: il 2026-07-13 il pulse fu
  // ristretto alla SOLA apertura del concetto, su richiesta di Giulia, con la motivazione
  // "non deve distrarre mentre si legge". Il 2026-09-18 Giulia segnala l'opposto (R-14: "le
  // icone da cliccare devono lampeggiare, oggi non lo fanno") e la via scelta (D2) tiene
  // insieme le due cose: **lampeggia solo ciò che è in attesa di un'azione, e si spegne appena
  // agisci**. Siccome l'anello sta sempre e solo sull'item non ancora visto, in pratica:
  // anello posato ⇒ pulse; item cliccato ⇒ l'anello si sposta (o sparisce) e il pulse con lui.
  //
  // Misurato prima di cambiare, su 10 lezioni e 122 pose dell'anello: **41 pulsavano (34%)** —
  // solo il primo item di ogni area (gcStart/gcAdvance), mai i successivi (gcHit), e **mai
  // nessuna** nelle `sequence`, dove gcSeqRefresh chiama gcHot senza il secondo argomento. Uno
  // studente dentro un concetto `sequence` non vedeva lampeggiare nulla, mai.
  //
  // ⚠️ OPT-IN PER PAGINA (decisione Q1 del 18/09): la regola nuova vale solo dove la pagina la
  // chiede con `window.GC_PULSE_WAITING = true` — oggi il guscio lezione e l'anteprima
  // dell'editor. `OP-01/02/03.html` NON la impostano e restano al comportamento del 13/07
  // finché non passano anche loro dal guscio (decisione D1). Un chiamante può sempre forzare il
  // pulse col secondo argomento, come prima.
  //
  // Il CSS non cambia: `.gc-target.pulse` è già `animation:gcPulse 1.4s infinite` con la
  // guardia `prefers-reduced-motion` — è ciò che rende "pulsa finché non clicchi" gratuito.
  // ⚠️ `root` (opzionale) — trovato il 2026-09-22 provando OP-03.1 dopo la Fase B.
  // Dalla Fase A le schermate `SV.*` sono composte sulla STESSA Base, quindi lo stesso id
  // (`po-order`, `tab-evt`, `sv-date`…) esiste in tutte; e una lezione ne monta 2-3 insieme, più
  // il clone dell'anteprima nell'Intro. `document.getElementById` prende il PRIMO del documento:
  // misurato, l'anello finiva sul `#po-order` di una schermata **nascosta** e il concetto a
  // schermo restava senza illuminazione. Passando la radice del concetto si evidenzia quello
  // giusto. Il default resta `document`, quindi OP-01/02/03.html — che chiamano `gcHot(id)` senza
  // radice — non cambiano di un bit. La PULIZIA resta a livello di documento, di proposito:
  // serve a togliere anche gli anelli rimasti su una radice che non è più quella attiva.
  function gcHot(id, pulse, root) {
    document.querySelectorAll('.gc-target').forEach(function (e) { e.classList.remove('gc-target', 'pulse', 'gc-ring-in'); });
    if (id) {
      var scope = (root && root.querySelector) ? root : document;
      var el = null;
      try { el = scope.querySelector('#' + (window.CSS && CSS.escape ? CSS.escape(id) : id)); } catch (e2) {}
      if (!el && scope === document) el = document.getElementById(id);
      if (el) { el.classList.add('gc-target'); if (pulse || window.GC_PULSE_WAITING) el.classList.add('pulse'); }
      // 23/09 (rilievo di Giulia su OP-04.4): il bersaglio poteva stare sotto il bordo di una
      // lista scorrevole (.svp-list, il corpo del pannello) e andava cercato a mano. Ora la lista
      // scorre da sola fino a lui. Solo con una radice esplicita (i concetti del guscio e "Try
      // it"): OP-01/02/03.html chiamano gcHot senza radice e restano identiche.
      if (el && scope !== document) gcRevealInScroller(el, scope);
      // 29/09: se un contenitore con overflow taglia l'alone esterno, quell'anello passa a interno.
      if (el && scope !== document) setTimeout(function () { gcRingFit(el); }, 0);
    }
  }
  // 29/09 (anelli fucsia tagliati, misurato: 25 passi su ~250, 24 per 1-5 px): l'anello e' un box-shadow
  // ESTERNO di 5 px e ogni antenato con overflow lo taglia se il bersaglio e' a filo del bordo.
  // Se succede, l'elemento porta .gc-ring-in: stesso anello ma INTERNO, che nessun antenato taglia.
  // Solo con radice esplicita (guscio/anteprima): OP-01/02/03.html non passano di qui. Il CSS e'
  // iniettato qui (una volta) e non in shared-rNN.css, per non dover rinominare il file (cache file://).
  // Il setTimeout lascia finire lo scorrimento/reveal e i cambi di layout dell'azione appena eseguita.
  function gcRingFit(el) {
    if (!el.classList.contains('gc-target')) return;
    if (!document.getElementById('gc-ring-in-css')) {
      var st = document.createElement('style'); st.id = 'gc-ring-in-css';
      st.textContent = '.gc-target.gc-ring-in{box-shadow:inset 0 0 0 3px var(--aw-pink),inset 0 0 0 5px rgba(224,49,138,.22)}' +
        '.gc-target.gc-ring-in.pulse{animation-name:gcPulseIn}' +
        '@keyframes gcPulseIn{0%{box-shadow:inset 0 0 0 3px var(--aw-pink),inset 0 0 0 5px rgba(224,49,138,.55)}70%{box-shadow:inset 0 0 0 3px var(--aw-pink),inset 0 0 0 8px rgba(224,49,138,0)}100%{box-shadow:inset 0 0 0 3px var(--aw-pink),inset 0 0 0 5px rgba(224,49,138,0)}}';
      document.head.appendChild(st);
    }
    el.classList.remove('gc-ring-in');
    var r = el.getBoundingClientRect(), S = 5, a = el.parentElement;
    while (a && a !== document.documentElement) {
      var cs = window.getComputedStyle(a), ox = cs.overflowX !== 'visible', oy = cs.overflowY !== 'visible';
      if (ox || oy) {
        var b = a.getBoundingClientRect();
        if ((ox && (b.left > r.left - S + 0.5 || b.right < r.right + S - 0.5)) || (oy && (b.top > r.top - S + 0.5 || b.bottom < r.bottom + S - 0.5))) { el.classList.add('gc-ring-in'); return; }
      }
      a = a.parentElement;
    }
  }
  // Fa scorrere gli antenati scorrevoli DENTRO la radice (mai la pagina) finche' `el` e' visibile,
  // centrandolo. Non tocca nulla se e' gia' tutto a vista.
  function gcRevealInScroller(el, root) {
    // 10/10: i capitoli PKX (lesson-shell, telecamera l26Cam) fanno scorrere loro, lentamente e insieme
    // alla telecamera; questo scorrimento nativo partiva insieme e dava uno strattone. Spento solo lì.
    if (window.GC_CAMERA_SCROLL) return;
    var a = el.parentElement;
    while (a && a !== root && a !== document.body) {
      var cs = window.getComputedStyle(a);
      if (/(auto|scroll)/.test(cs.overflowY) && a.scrollHeight > a.clientHeight + 1) {
        var ar = a.getBoundingClientRect(), er = el.getBoundingClientRect();
        if (er.top < ar.top + 4 || er.bottom > ar.bottom - 4) {
          var d = (er.top - ar.top) - Math.max(0, (a.clientHeight - er.height) / 2);
          // Morbido solo a pagina visibile: in una scheda nascosta l'animazione non avanza e la
          // lista resterebbe ferma (misurato il 23/09).
          try { a.scrollTo({ top: a.scrollTop + d, behavior: document.hidden ? 'auto' : 'smooth' }); } catch (e) { a.scrollTop += d; }
        }
      }
      a = a.parentElement;
    }
  }
  // Mini-mappa del flusso: doneArr = booleani, primo false = "on".
  function gcPath(prefix, doneArr) {
    var total = doneArr.length, firstOpen = doneArr.indexOf(false);
    for (var i = 1; i <= total; i++) {
      var it = document.getElementById(prefix + '-pth' + i);
      if (it) it.className = 'gc-path-i' + (doneArr[i - 1] ? ' done' : ((i - 1) === firstOpen ? ' on' : ''));
      if (i < total) { var sp = document.getElementById(prefix + '-psep' + i); if (sp) sp.className = 'gc-path-sep' + (doneArr[i - 1] ? ' done' : ''); }
    }
  }
  // Pallini laterali + etichetta step. 2026-08-27: prima "of N" era fisso (3 o, per un caso solo,
  // 4 — vedi op03.d.stepfmt) indipendentemente dal numero reale di aree/step del concept; qualunque
  // sequence/checklist con un totale diverso mostrava un "of" sbagliato. Ora sempre calcolato da
  // `total` col template generico gc.stepfmt.
  function gcDots(prefix, doneArr) {
    var total = doneArr.length, firstOpen = doneArr.indexOf(false), doneN = doneArr.filter(Boolean).length;
    for (var i = 1; i <= total; i++) { var e = document.getElementById(prefix + '-d' + i); if (e) e.className = 'gc-dot' + (doneArr[i - 1] ? ' done' : ((i - 1) === firstOpen ? ' on' : '')); }
    var stepEl = document.getElementById(prefix + '-step');
    if (stepEl) {
      if (firstOpen < 0) { stepEl.setAttribute('data-i18n', 'gc.stepdone'); stepEl.textContent = gcT('gc.stepdone'); }
      else {
        stepEl.removeAttribute('data-i18n'); // il testo è composto (n/m), non una chiave singola risolvibile da applyLang
        stepEl.textContent = gcT('gc.stepfmt').replace('{n}', Math.min(doneN + 1, total)).replace('{m}', total);
      }
    }
  }
  // A5 CHIUSO (Ondata 2, §5.7 del piano). Prima questa funzione parlava SOLO chiavi i18n mentre il
  // contratto di contenuto parla LocalizedText: il configuratore le passava il testo già risolto con
  // getLT() e funzionava per il solo fallback `|| k` di gcT, scrivendo prosa dentro data-i18n (che
  // al primo applyLang veniva ri-risolta e poteva azzerarsi). Ora i due casi sono espliciti:
  //   • stringa   → è una CHIAVE i18n: si posa data-i18n (comportamento dei moduli OP-01/02/03,
  //                 invariato: applyLang deve poter ritradurre l'elemento al cambio lingua);
  //   • oggetto   → è un LocalizedText: si risolve nella lingua corrente e si RIMUOVE un eventuale
  //                 data-i18n stantio, così applyLang non sovrascrive più il testo risolto.
  function gcSet(id, val) {
    var e = document.getElementById(id);
    if (!e || val == null || val === '') return;
    if (typeof val === 'object') { e.removeAttribute('data-i18n'); e.textContent = gcEffText(val); return; }
    e.setAttribute('data-i18n', val); e.textContent = gcT(val);
  }
  function markConcept(idx) { if (typeof conceptsSeen !== 'undefined') conceptsSeen[idx] = true; if (typeof refreshGates === 'function') refreshGates(); }
  function conceptFinish(idx, doId, doneId, nextId) {
    var dc = document.getElementById(doId); if (dc) dc.style.display = 'none';
    var dn = document.getElementById(doneId); if (dn) dn.style.display = 'flex';
    var nx = document.getElementById(nextId); if (nx) nx.style.display = 'flex';
    gcHot(null); markConcept(idx);
  }

  // ── CHECKLIST ENGINE (two-tier: aree → item cliccabili) ──
  // GCX[prefix]={ idx, ctxH, ctxD, checkId, doneId, nextId, zones?, preseen?:[],
  //               areas:[ {name, zone?, items:[{id,label,ctx:[h,d],fx?,noRing?,panel?}]} ] }
  // `panel:{swatch}` (2026-09-23, OP-03.1 c1) — item SENZA bersaglio nel mockup: il controllo
  // vive nella checklist stessa, come bottone. Nessun cambiamento a gcHit/gcStart/gcHot: gcHit
  // già lavora per id generico (chi lo invoca non conta), e gcHot che non trova un elemento col
  // suo id nel mockup non mette semplicemente nessun anello — corretto, un bottone già visibile
  // nel testo non ne ha bisogno. Additivo per costruzione: nessun item esistente dichiara `panel`.
  var GCX = {}, gcRun = {};
  function gcAreaDone(area, seen) { return area.items.every(function (it) { return seen[it.id]; }); }
  function gcCurItem(prefix) { var cfg = GCX[prefix], st = gcRun[prefix], area = cfg.areas[st.ai]; for (var i = 0; i < area.items.length; i++) { if (!st.seen[area.items[i].id]) return area.items[i]; } return null; }
  function gcRenderCheck(prefix) {
    var cfg = GCX[prefix], st = gcRun[prefix], area = cfg.areas[st.ai], box = document.getElementById(cfg.checkId); if (!box) return;
    box.className = 'gc-check';
    var cur = gcCurItem(prefix), seenN = area.items.filter(function (it) { return st.seen[it.id]; }).length;
    var h = '<div class="gc-check-hd"><span class="gc-check-tag">' + gcTx(area.name) + '</span><span class="gc-check-count">' + seenN + ' / ' + area.items.length + '</span></div>';
    h += '<div class="gc-check-sub">' + gcT(st.pending ? 'gc.areaDone' : 'gc.exploreEach') + '</div><div class="gc-check-list">';
    area.items.forEach(function (it) {
      var done = !!st.seen[it.id], isCur = !st.pending && cur && cur.id === it.id;
      var cls = 'gc-check-item' + (done ? ' done' : '') + (isCur ? ' cur' : '');
      if (it.panel) {
        h += '<button type="button" class="' + cls + ' gc-check-btn" onclick="gcHit(\'' + prefix + '\',\'' + it.id + '\')"><span class="gc-check-box">' + (done ? '✓' : '') + '</span><span class="gc-check-swatch" style="background:' + it.panel.swatch + '"></span><span>' + gcTx(it.label) + '</span></button>';
      } else {
        h += '<div class="' + cls + '"><span class="gc-check-box">' + (done ? '✓' : '') + '</span><span>' + gcTx(it.label) + '</span></div>';
      }
    });
    h += '</div>';
    if (st.pending) {
      var na = cfg.areas[st.nextAi];
      h += '<button type="button" class="gc-check-cont" onclick="gcAdvance(\'' + prefix + '\')">' + gcT('gc.continue') + ' <b>' + gcTx(na.name) + '</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
    }
    box.innerHTML = h;
  }
  function gcSyncPath(prefix) { var cfg = GCX[prefix], st = gcRun[prefix], arr = cfg.areas.map(function (a) { return gcAreaDone(a, st.seen); }); gcPath(prefix, arr); gcDots(prefix, arr); return arr; }
  // R-17 — "What you have to do" ANCHE per le checklist (prima lo disegnava solo `sequence`, via
  // gcSeqFire: su 130 concetti ne restavano 86 senza). Scrive l'istruzione dell'item corrente in
  // cfg.doH, esattamente come gcSeqRefresh fa per le sequence.
  // ⚠️ Due proprietà volute:
  //   • no-op sui moduli reali: OP-01/02/03 non impostano `doH` sulle loro GCX, quindi il loro
  //     pannello resta identico bit per bit;
  //   • un item SENZA `do` non mostra un riquadro vuoto — il blocco resta nascosto. È ciò che rende
  //     additivo il backfill: i concetti non ancora scritti si vedono come oggi.
  // 24/09 (revisione OP-03→06, punto D) — "Good to know": il terzo pezzo del testo di un passo,
  // `context.tip`, per le note che non sono ne' cosa vedi ne' cosa fai (regole di sito, schermo
  // largo, configurazione). Stesse due proprieta' di gcSetDo:
  //   • no-op dove la configurazione non dichiara `ctxT` (OP-01/02/03.html non lo fanno);
  //   • senza testo il riquadro resta NASCOSTO (nessun box vuoto), e sparisce passando a un passo
  //     che non ne ha — a differenza di gcSet, che su un valore vuoto lascerebbe il testo vecchio.
  function gcSetTip(id, val) {
    if (!id) return;
    var e = document.getElementById(id); if (!e) return;
    var box = e.closest ? e.closest('.gc-tip') : null;
    var has = val != null && val !== '' && (typeof val === 'string' ? true : !!gcEffText(val));
    if (has) gcSet(id, val); else { e.removeAttribute('data-i18n'); e.textContent = ''; }
    if (box) box.style.display = has ? '' : 'none';
  }
  function gcSetDo(cfg, item) {
    if (!cfg || !cfg.doH) return;
    var h = document.getElementById(cfg.doH); if (!h) return;
    var box = h.closest ? h.closest('.gc-do') : null;
    var txt = item && item.do;
    var has = txt != null && txt !== '' && (typeof txt === 'string' ? true : !!gcEffText(txt));
    if (has) { gcSet(cfg.doH, txt); if (box) box.style.display = ''; }
    else { h.removeAttribute('data-i18n'); h.textContent = ''; if (box) box.style.display = 'none'; }
  }
  // ═══════════════════════════════════════════════════════════════════════════════════════════
  //  INTERVENTO 1 del Blocco 1 — IL RIFLETTORE IN TUTTE LE MODALITÀ (R-13)
  //  REVISIONE_CONCEPT_2026-09-18.md Parte B2 / Parte E.1.
  //
  //  Il difetto: `gcFocus` attenuava le zone prese da `cfg.zones`, che l'editor DERIVA
  //  dall'unione di `areas[].zone`. Cioè il candidato all'attenuazione era l'elenco di ciò che
  //  qualcuno accende — quindi:
  //    • `checklist_single_area`: l'elenco contiene la sola zona accesa ⇒ non attenua nulla;
  //    • `sequence`: `gcSeqStart` non chiamava mai il riflettore ⇒ non esiste;
  //    • `checklist_multi_area` che accende 2 zone su 10: le altre 8 restano a pieno contrasto,
  //      perché nessuna area le nomina.
  //  Misurato il 21/09 sullo stato pulito: il riflettore poteva funzionare su 51 concetti su 109
  //  interattivi. Non era una dimenticanza di chi li ha cablati: il motore non poteva.
  //
  //  Il fix: i CANDIDATI diventano tutte le `[data-zone]` presenti nel mockup (`cfg.zonesAll`,
  //  calcolato dal DOM da chi monta il mockup). Se `zonesAll` non c'è si ricade sul ramo storico
  //  ⇒ OP-01/02/03.html, che non lo impostano, restano invariate PER COSTRUZIONE.
  //
  //  ⚠️ Tre regole, ognuna pagata da una misura (non sono precauzioni teoriche):
  //   1. GUARDIA ANTENATO/DISCENDENTE. Le zone sono annidate in 5 mockup su 10 (StationView:
  //      `zone-po` contiene order/actions/counters; AssetHierarchy 12 coppie; anche Insights,
  //      UserManagement, LanguageSwitcher). `.gc-dim` è opacity + `pointer-events:none`, che
  //      CASCATANO sui figli: attenuare un antenato spegne e rende non cliccabile la zona accesa
  //      dentro di lui. Senza questa guardia, OP-03.1 c2 si rompe al primo click.
  //   2. `lit` VUOTO ⇒ NON SI TOCCA NIENTE. 11 aree/passi dei soli capitoli OP puntano a elementi
  //      che vivono fuori da ogni zona (le finestre modali: Start Activity, Conferma, Details).
  //      Rilluminare tutto a ogni modale produrrebbe un lampeggio; lasciando lo stato com'è, il
  //      modale risulta acceso sopra uno sfondo già attenuato — che è la resa del prodotto.
  //   3. `lit` È UN'UNIONE, non una scelta fra dichiarato e derivato: zona dichiarata sull'area
  //      + zone che contengono i suoi item + zone toccate da effetti/opzioni/validazioni. I primi
  //      due perché 4 aree dichiarano una zona che NON contiene i propri item (SU-03.4 c3,
  //      SU-04A.1b c1/c2/c3) e con `pointer-events:none` quell'item diventerebbe incliccabile; il
  //      terzo è lo stesso 4° gradino di `gcConceptCrop` — un click non può produrre la propria
  //      conseguenza dentro una zona spenta (OP-02.1 c2: si clicca la legenda, si ricolora la card).
  // ═══════════════════════════════════════════════════════════════════════════════════════════

  // Tutte le zone dichiarate dal mockup montato. È il candidato all'attenuazione.
  function gcZoneNames(root) {
    if (!root || !root.querySelectorAll) return [];
    var seen = {}, out = [];
    [].slice.call(root.querySelectorAll('[data-zone]')).forEach(function (el) {
      var z = el.getAttribute('data-zone'); if (z && !seen[z]) { seen[z] = 1; out.push(z); }
    });
    return out;
  }
  function gcZoneEl(root, z) {
    var r = (root && root.querySelector) ? root : document;
    return r.querySelector('[data-zone="' + z + '"]') || document.getElementById(z);
  }
  // La zona che CONTIENE l'elemento indicato (id, data-zone o selettore) — le tre forme che il
  // resto del motore già accetta.
  function gcZoneOfSel(root, sel) {
    if (!root || !root.querySelector || !sel) return null;
    var el = null;
    try { el = root.querySelector('#' + (window.CSS && CSS.escape ? CSS.escape(sel) : sel)); } catch (e) {}
    if (!el) { try { el = root.querySelector('[data-zone="' + sel + '"]'); } catch (e) {} }
    if (!el) { try { el = root.querySelector(sel); } catch (e) {} }
    var ze = el && el.closest ? el.closest('[data-zone]') : null;
    return ze ? ze.getAttribute('data-zone') : null;
  }
  // Le zone da tenere ACCESE. `src` è un'area di checklist ({zone, items}) oppure un passo di
  // sequence (che è item-like: id/effects/validation + trigger.options) — una regola sola per
  // entrambe le modalità, che è il punto dell'intervento.
  function gcLitZones(src, root) {
    var seen = {}, out = [];
    function add(z) { if (z && !seen[z]) { seen[z] = 1; out.push(z); } }
    if (!src) return out;
    (Array.isArray(src.zone) ? src.zone : (src.zone ? [src.zone] : [])).forEach(add);
    (src.items || [src]).forEach(function (it) {
      if (!it) return;
      add(gcZoneOfSel(root, it.id));
      (it.effects || []).forEach(function (ef) { add(gcZoneOfSel(root, ef && ef.target)); });
      ((it.options) || (it.trigger && it.trigger.options) || []).forEach(function (o) {
        if (!o) return;
        add(gcZoneOfSel(root, o.id || String(o.selector || '').replace(/^#/, '')));
        (o.effects || []).forEach(function (ef) { add(gcZoneOfSel(root, ef && ef.target)); });
      });
      (it.validation || []).forEach(function (r) { add(gcZoneOfSel(root, r && r.group)); });
    });
    return out;
  }
  function gcDimZones(zonesAll, lit, root) {
    if (!zonesAll || !zonesAll.length) return;
    if (!lit || !lit.length) return;                       // regola 2: niente da accendere, non si tocca
    var litEls = lit.map(function (z) { return gcZoneEl(root, z); }).filter(Boolean);
    zonesAll.forEach(function (z) {
      var el = gcZoneEl(root, z); if (!el) return;
      var keep = lit.indexOf(z) >= 0 || litEls.some(function (le) {  // regola 1
        return le === el || le.contains(el) || el.contains(le);
      });
      el.classList.toggle('gc-dim', !keep);
    });
  }
  // Rete di sicurezza: la Practice non deve mai ereditare l'attenuazione lasciata da un concetto
  // (con `pointer-events:none` il bersaglio dell'esercizio sarebbe incliccabile).
  function gcClearDim(root) {
    var r = (root && root.querySelectorAll) ? root : document;
    [].slice.call(r.querySelectorAll('.gc-dim')).forEach(function (e) { e.classList.remove('gc-dim'); });
    if (r.classList) r.classList.remove('gc-dim');
  }

  function gcFocus(prefix) {
    var cfg = GCX[prefix], st = gcRun[prefix]; if (!cfg || !st) return;
    var area = cfg.areas[st.ai];
    if (cfg.zonesAll && cfg.zonesAll.length) {
      var root = (st.root && st.root.querySelectorAll) ? st.root : document;
      // 06/10 (COPIONE_CAP3 §0.4): "si attenua solo dove il passo lo dichiara". OPT-IN per pagina come
      // GC_STRICT_ORDER: con `window.GC_DIM_DECLARED` un'area SENZA `zone` dichiarata non attenua niente
      // (prima si attenuavano tutte le zone tranne quelle toccate: resa incoerente, misurata il 05/10).
      // OP-01/02/03.html e le pagine che non lo impostano restano come prima.
      if (window.GC_DIM_DECLARED && !(area && area.zone && (Array.isArray(area.zone) ? area.zone.length : true))) { gcClearDim(root); return; }
      gcDimZones(cfg.zonesAll, gcLitZones(area, root), root);
      return;
    }
    // ── ramo storico, invariato: è quello che percorrono OP-01/02/03.html ──
    if (!cfg.zones) return;
    var lit = (area && area.zone) || [];
    cfg.zones.forEach(function (zid) {
      // OP-01/02/03: la zona È un id → getElementById. Mockup del content-editor: la
      // zona è un data-zone → fallback a [data-zone]. Nessuna rottura per i moduli reali.
      var el = document.getElementById(zid) || document.querySelector('[data-zone="' + zid + '"]');
      if (el) el.classList.toggle('gc-dim', lit.indexOf(zid) < 0);
    });
  }
  function gcStart(prefix) {
    var cfg = GCX[prefix]; if (!cfg) return;
    // root = radice dentro cui effetti/azioni risolvono i selettori. I moduli reali non la
    // impostano → document (comportamento invariato); il configuratore passa l'elemento del
    // mockup, così effetti e azioni non possono toccare nulla fuori dal mockup.
    gcRun[prefix] = { ai: 0, seen: {}, root: cfg.root || document }; var st = gcRun[prefix];
    // INTERVENTO 3 — il cromo del concetto attivo si dichiara qui, non al bind (vedi il commento
    // sopra `gcBindBehaviour`). Chi non passa `cfg.chrome` ottiene `'off'` (default D3); chi non
    // ha una radice propria (i moduli reali, `cfg.root` assente ⇒ `document`) non tocca nulla —
    // `document.__gcChrome` non è mai letto da un mockup che non passa da qui.
    if (cfg.root) gcSetChrome(cfg.root, cfg.chrome);
    (cfg.preseen || []).forEach(function (id) { st.seen[id] = true; });
    while (st.ai < cfg.areas.length - 1 && gcAreaDone(cfg.areas[st.ai], st.seen)) st.ai++;
    gcSyncPath(prefix); gcRenderCheck(prefix); gcFocus(prefix);
    var cur = gcCurItem(prefix); gcHot(cur ? cur.id : null, true, st.root); gcSetDo(cfg, cur);
  }
  // Risolve un id DENTRO la radice del concetto. Stessa ragione di `gcHot`: lo stesso id vive in
  // più schermate montate insieme, e `document.getElementById` prende quella sbagliata.
  function gcElIn(root, id) {
    var scope = (root && root.querySelector) ? root : document;
    try { return scope.querySelector('#' + (window.CSS && CSS.escape ? CSS.escape(id) : id)); }
    catch (e) { return document.getElementById(id); }
  }
  function gcHit(prefix, id) {
    var cfg = GCX[prefix], st = gcRun[prefix]; if (!cfg || !st || st.pending) return;
    // Solo l'area CORRENTE (23/09): cercando in tutte, un click su un elemento di un'area
    // successiva annidato/vicino a quello di adesso (es. la X del chip "Active" dentro il chip,
    // OP-04.1 c1) ne eseguiva subito l'effetto e saltava l'ordine dichiarato.
    var item = null; (cfg.areas[st.ai].items || []).forEach(function (it) { if (it.id === id) item = it; });
    if (!item) return;
    // 29/09 (Giulia, "un click alla volta"): dentro l'area corrente il motore accettava QUALUNQUE
    // item, non solo quello con l'anello (misurato in OP-01.1 c3: Sites e Roles registrati con
    // l'anello su Profile; 90 item su 168 nei 29 concetti checklist). OPT-IN per pagina come
    // GC_PULSE_WAITING: OP-01/02/03.html non lo impostano e restano a ordine libero. Gli item
    // `panel` (bottoni nella checklist, es. i colori di OP-03.1 c1) sono controlli a sé e restano liberi.
    if (window.GC_STRICT_ORDER && !item.panel) { var curIt = gcCurItem(prefix); if (curIt && curIt.id !== id) return; }
    st.seen[id] = true;
    var clicked = gcElIn(st.root, id); if (clicked && !item.noRing) clicked.classList.add('gc-cleared');
    // Tre vie, non alternative fra loro (Ondata 2):
    //   1. `effects`            → vocabolario dichiarativo, per i casi semplici;
    //   2. `simulatorActionId`  → azione NOMINATA dichiarata dal mockup, per il comportamento vero
    //                             (il campo era stato declassato a "legacy": è di prima classe);
    //   3. `fx`                 → callback JS del modulo, fallback per OP-01/02/03: si usa solo se
    //                             non c'è né 1 né 2, quindi i moduli approvati non cambiano di una
    //                             virgola.
    var hasFx1 = !!(item.effects && item.effects.length), hasFx2 = !!item.simulatorActionId;
    if (hasFx1) gcApplyEffects(item.effects, st.root);
    if (hasFx2) gcRunAction(cfg.actions, item.simulatorActionId, item.simulatorActionArg, clicked, st.root);
    if (!hasFx1 && !hasFx2 && item.fx) item.fx(clicked);
    if (item.ctx) { gcSet(cfg.ctxH, item.ctx[0]); gcSet(cfg.ctxD, item.ctx[1]); if (cfg.ctxT) gcSetTip(cfg.ctxT, item.ctx[2]); }
    gcSyncPath(prefix);
    if (gcAreaDone(cfg.areas[st.ai], st.seen)) {
      var ni = st.ai + 1; while (ni < cfg.areas.length && gcAreaDone(cfg.areas[ni], st.seen)) ni++;
      // `cfg.doId` (il contenitore che racchiude "What you have to do" + la checklist) esiste solo
      // dove il guscio lo dichiara; i moduli reali passano da `checkId` come prima.
      if (ni >= cfg.areas.length) { gcHot(null); gcSetDo(cfg, null); gcRenderCheck(prefix); conceptFinish(cfg.idx, cfg.doId || cfg.checkId, cfg.doneId, cfg.nextId); return; }
      st.pending = true; st.nextAi = ni; gcHot(null); gcSetDo(cfg, null); gcRenderCheck(prefix); return;
    }
    gcRenderCheck(prefix);
    var cur = gcCurItem(prefix); gcHot(cur ? cur.id : null, false, st.root); gcSetDo(cfg, cur);
  }
  function gcAdvance(prefix) {
    var cfg = GCX[prefix], st = gcRun[prefix]; if (!cfg || !st || !st.pending) return;
    st.ai = st.nextAi; st.pending = false;
    gcRenderCheck(prefix); gcFocus(prefix);
    var cur = gcCurItem(prefix); gcHot(cur ? cur.id : null, true, st.root); gcSetDo(cfg, cur);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DECLARATIVE EFFECTS + FIXED VALIDATION RULES + GENERIC SEQUENCE RUNNER
  // Aggiunti per il pilota "motore simulatore" del content-editor (Fase 2-bis).
  // Generalizzano ciò che nei moduli è codice bespoke (es. c5pick/c5claim/c5submit
  // di OP-03): un vocabolario dichiarativo di effetti sul markup + un set FISSO di
  // regole di validazione + un runner di sequenza che li orchestra. Tutto guidato
  // da dati (il contratto di contenuto), niente JS per-mockup. Contratto in
  // 07-handoff-team-ai/CONTRATTO_CONTENUTO_v1_esempio_OP-03.md §4.
  // ═══════════════════════════════════════════════════════════════════════════

  // Risolve un LocalizedText | stringa nella lingua corrente (fallback en).
  function gcEffText(t) {
    if (t == null) return '';
    if (typeof t === 'string') return t;
    var l = gcLang();
    return (t.values && (t.values[l] || t.values.en)) || '';
  }
  // È visibile? (usato dalle regole onlyWhenVisible)
  function gcVisible(el) { return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)); }

  // Tutti gli elementi che il selettore risolve DENTRO root (default document).
  function gcEls(root, sel) {
    if (!sel) return [];
    try { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
    catch (e) { return []; }
  }
  // setStyle — whitelist di proprietà (§5.2 del piano). Fuori whitelist non è "ignorato in
  // silenzio": è un problema che validateSubsection segnala in authoring. Il valore viene filtrato
  // da url()/expression()/@import perché sarebbero una richiesta di rete dal markup di un mockup.
  var GC_STYLE_PROPS = ['width', 'height', 'color', 'background', 'background-color', 'visibility'];
  function gcStylePropOk(p) { return GC_STYLE_PROPS.indexOf(String(p || '').toLowerCase()) >= 0; }
  function gcStyleValueOk(v) { return !/url\s*\(|expression\s*\(|javascript:|@import/i.test(String(v == null ? '' : v)); }

  // §1 — Vocabolario di effetti (9 operazioni). target = selettore CSS completo ('#ac-form',
  // '.svp-list'), risolto dentro root.
  //
  // ⚠️ CAMBIO DI SEMANTICA (Ondata 2): l'effetto si applica a TUTTE le corrispondenze del
  // selettore, non più solo alla prima (era `querySelector`). Con un `#id` non cambia nulla — una
  // sola corrispondenza — ma è la ragione meccanica per cui i concept trascritti da OP-03 costavano
  // 42 e 21 effetti: "togli ai fratelli, metti a uno" andava enumerato elemento per elemento.
  // Nessun rischio per OP-01/02/03: verificato che nessun modulo reale chiama gcApplyEffects
  // (l'unico consumatore è l'anteprima del configuratore + le azioni nominate qui sotto).
  //
  //   show | hide                   display '' / none
  //   addClass | removeClass | toggleClass
  //   setText                       LocalizedText o stringa
  //   setStyle    { prop, value }   whitelist GC_STYLE_PROPS
  //   setExclusiveClass             "una sola classe accesa", nelle due forme che il contenuto reale
  //                                 richiede (§3.6 punto 4: il pattern compare 3 volte nella sola OP-03):
  //     a) { target, className, among:['green','yellow',…] } → esclusiva fra CLASSI sullo stesso
  //        elemento  (= aSetSeg di OP-03: il badge segmento porta un colore per volta)
  //     b) { target, className, group:'<selettore>' }        → esclusiva fra ELEMENTI di un gruppo
  //        (= aSelRow / la tab attiva: la classe si toglie a tutto il gruppo e si mette al target).
  //        Senza `group` il gruppo sono i fratelli del target.
  function gcApplyEffects(effects, root) {
    root = root || document;
    (effects || []).forEach(function (ef) {
      if (!ef || !ef.target) return;
      var els = gcEls(root, ef.target);
      if (!els.length) return;
      switch (ef.op) {
        case 'show': els.forEach(function (el) { el.style.display = ''; }); break;
        case 'hide': els.forEach(function (el) { el.style.display = 'none'; }); break;
        case 'addClass': if (ef.className) els.forEach(function (el) { el.classList.add(ef.className); }); break;
        case 'removeClass': if (ef.className) els.forEach(function (el) { el.classList.remove(ef.className); }); break;
        case 'toggleClass': if (ef.className) els.forEach(function (el) { el.classList.toggle(ef.className); }); break;
        case 'setText': els.forEach(function (el) { el.textContent = gcEffText(ef.text); }); break;
        case 'setStyle':
          if (!gcStylePropOk(ef.prop)) { _gcRuleWarn('setStyle: proprietà "' + ef.prop + '" fuori whitelist (' + GC_STYLE_PROPS.join(', ') + ')'); break; }
          if (!gcStyleValueOk(ef.value)) { _gcRuleWarn('setStyle: valore rifiutato (url()/expression()/@import non ammessi)'); break; }
          els.forEach(function (el) { el.style.setProperty(String(ef.prop).toLowerCase(), String(ef.value == null ? '' : ef.value)); });
          break;
        case 'setExclusiveClass': {
          if (!ef.className) { _gcRuleWarn('setExclusiveClass senza className'); break; }
          var among = ef.among;
          if (typeof among === 'string') among = among.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
          if (Array.isArray(among) && among.length) {
            els.forEach(function (el) {
              among.forEach(function (c) { if (c !== ef.className) el.classList.remove(c); });
              el.classList.add(ef.className);
            });
          } else {
            var grp = ef.group ? gcEls(root, ef.group)
              : (els[0].parentNode ? Array.prototype.slice.call(els[0].parentNode.children) : []);
            grp.forEach(function (g) { g.classList.remove(ef.className); });
            els.forEach(function (el) { el.classList.add(ef.className); });
          }
          break;
        }
      }
    });
  }

  // §2 — Set FISSO di regole di validazione (AND fra tutte). Estendibile solo
  // aggiungendo tipi qui, mai con condizioni scritte a mano nel contenuto.
  //   require-selection            → ≥1 elemento .sel o input:checked nel gruppo
  //   require-at-least-one-of-group→ ≥1 checkbox:checked (o .sel); onlyWhenVisible
  //                                  rende la regola inerte se il gruppo è nascosto
  //
  // FAIL-CLOSED (fix bug A4, 2026-07-30): una regola che non si può VERIFICARE non passa.
  // Prima `if (!grp) return true` rendeva un selettore sbagliato/rinominato equivalente a
  // "regola disattivata": sul caso Claim & Submit il SUBMIT diventava cliccabile senza aver
  // scelto i motivi, cioè si perdeva in silenzio la regola di dominio che il pilota esisteva
  // per dimostrare. Ora manca il gruppo → gate chiuso + warning in console; e il selettore
  // rotto compare fra i problemi di validateSubsection() nel content-editor (authoring time),
  // che è il posto dove l'autore lo deve vedere. `onlyWhenVisible` resta l'UNICO modo legittimo
  // di rendere inerte una regola, e richiede comunque che il gruppo esista.
  var _gcWarned = {};
  function _gcRuleWarn(msg) { if (_gcWarned[msg]) return; _gcWarned[msg] = 1; console.warn('[gc] ' + msg); }
  function gcCheckRules(rules, root) {
    root = root || document;
    return (rules || []).every(function (r) {
      if (!r || !r.type) { _gcRuleWarn('regola senza type → gate chiuso'); return false; }
      if (!r.group) { _gcRuleWarn('regola "' + r.type + '" senza selettore di gruppo → gate chiuso'); return false; }
      var grp; try { grp = root.querySelector(r.group); } catch (e) { grp = null; }
      if (!grp) { _gcRuleWarn('selettore "' + r.group + '" non risolve nel mockup → gate chiuso (A4)'); return false; }
      if (r.type === 'require-selection') {
        return grp.querySelectorAll('.sel, input:checked').length > 0 || grp.classList.contains('sel');
      }
      if (r.type === 'require-at-least-one-of-group') {
        if (r.onlyWhenVisible && !gcVisible(grp)) return true;
        return grp.querySelectorAll('input[type=checkbox]:checked, .sel').length > 0;
      }
      _gcRuleWarn('tipo di regola non riconosciuto "' + r.type + '" → gate chiuso');
      return false;
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // §3 — AZIONI NOMINATE DEL MOCKUP + CROMO INTERATTIVO (Ondata 2, §3.5 del piano)
  //
  // Il problema misurato: `aSetSeg` in OP-03 è UNA riga di JS e costa CINQUE effetti
  // dichiarativi; il concept A intero costa 42 effetti contro ~3 righe di codice. Il
  // configuratore non era uno strumento, era un downgrade rispetto allo scrivere codice.
  // La correzione non è "più operazioni" (quelle risolvono i casi semplici, §1): è che il
  // MOCKUP porta i suoi comportamenti, NOMINATI e DICHIARATI, e il concept li referenzia
  // per nome tramite `simulatorActionId`:
  //
  //   mockup.actions   = { setStatus: { src: "api.setExclusiveClass(…)", argHint: "green|…" }, … }
  //   concept item     = { id:'st-green', simulatorActionId:'setStatus', simulatorActionArg:'green' }
  //   mockup.behaviour = [ { on:'#sv-date', effects:[…] }, { on:'.svp-qb', action:'dateQuickSelect' } ]
  //
  // `behaviour` è il cromo NON didattico: popover data, cambio libero di tab, checkbox. In OP-03
  // è circa metà di ciò che rende il mockup vivo, e la regola "markup = presentazione pura"
  // (giusta per la sicurezza) lo buttava via insieme agli handler.
  //
  // ⚠️ CHE COSA È E CHE COSA NON È LA SANDBOX — da leggere prima di aprire le `actions` a un
  // Configurator di un cliente terzo (decisione del 2026-07-30: nel v1 sono un privilegio del
  // tenant Autoware, e questo è il motivo tecnico).
  //   COSA FA: il codice è compilato con `new Function` in uno scope dove ogni globale ambientale
  //   (window/document/fetch/localStorage/eval/setTimeout/…) è SHADOWED da un parametro legato a
  //   undefined, è in strict mode, e riceve `this` = oggetto senza prototipo. Non ha modo DIRETTO
  //   di fare rete, toccare lo storage, pianificare timer o raggiungere la pagina. I selettori
  //   dell'`api` risolvono solo dentro la radice del mockup.
  //   COSA NON FA: non è un confine di sicurezza. Un'azione ostile può risalire il grafo DOM
  //   (`api.el(x).ownerDocument`) o riottenere il costruttore di Function da un letterale
  //   (`({}).constructor.constructor`). E `eval` NON è nella lista: in strict mode non può essere
  //   il nome di un parametro, quindi non è ombreggiabile — resta raggiungibile (anche se un
  //   `eval('window')` risolve comunque sul parametro ombreggiato, cioè undefined). Il confine
  //   vero, se un giorno le `actions` le scrive un terzo, è l'esecuzione fuori dal documento
  //   (Worker/iframe sandboxed) più la revisione umana del codice. Non c'è nemmeno un limite di
  //   tempo: un `while(true)` in un'azione blocca la pagina.
  // ═══════════════════════════════════════════════════════════════════════════
  // ⚠️ Niente `eval` né `arguments` in questa lista: in strict mode non sono nomi di parametro
  // ammessi e l'intera compilazione fallirebbe ("Unexpected eval or arguments in strict mode").
  var GC_ACTION_BLOCKED = ('window globalThis self parent top frames document documentElement location history '
    + 'navigator localStorage sessionStorage indexedDB caches cookieStore fetch XMLHttpRequest WebSocket '
    + 'EventSource Worker SharedWorker ServiceWorker Notification open close alert confirm prompt print '
    + 'Function setTimeout setInterval setImmediate clearTimeout clearInterval requestAnimationFrame '
    + 'queueMicrotask postMessage importScripts crypto performance screen opener frameElement matchMedia '
    + 'require module exports process global Reflect Proxy WebAssembly').split(' ');

  // L'`api` che un'azione riceve: il vocabolario di §1 in forma di funzioni, più il minimo per
  // leggere il markup (serve, ad es. per prendere l'etichetta del bottone quick-select cliccato).
  // Ogni metodo passa da gcApplyEffects, quindi la whitelist di setStyle vale anche per le azioni.
  function gcActionApi(root) {
    function fx(op, target, extra) { var e = { op: op, target: target }; if (extra) for (var k in extra) e[k] = extra[k]; gcApplyEffects([e], root); }
    return {
      el: function (sel) { return gcEls(root, sel)[0] || null; },
      all: function (sel) { return gcEls(root, sel); },
      text: function (sel) { var e = gcEls(root, sel)[0]; return e ? (e.textContent || '').trim() : ''; },
      attr: function (sel, name) { var e = gcEls(root, sel)[0]; return e ? e.getAttribute(name) : null; },
      hasClass: function (sel, c) { var e = gcEls(root, sel)[0]; return !!(e && c && e.classList.contains(c)); },
      show: function (sel) { fx('show', sel); },
      hide: function (sel) { fx('hide', sel); },
      addClass: function (sel, c) { fx('addClass', sel, { className: c }); },
      removeClass: function (sel, c) { fx('removeClass', sel, { className: c }); },
      toggleClass: function (sel, c) { fx('toggleClass', sel, { className: c }); },
      setText: function (sel, t) { fx('setText', sel, { text: t }); },
      setStyle: function (sel, p, v) { fx('setStyle', sel, { prop: p, value: v }); },
      // esclusiva fra classi sullo stesso elemento (aSetSeg)
      exclusiveClass: function (sel, className, among) { fx('setExclusiveClass', sel, { className: className, among: among }); },
      // esclusiva fra elementi di un gruppo (aSelRow, tab attiva)
      exclusiveIn: function (groupSel, className, targetSel) { fx('setExclusiveClass', targetSel, { className: className, group: groupSel }); },
      // scappatoia dichiarativa: un'azione può comporre gli effetti di §1
      effects: function (list) { gcApplyEffects(list, root); }
    };
  }
  function gcCompileAction(name, src) {
    try {
      var params = GC_ACTION_BLOCKED.concat(['api', 'arg', 'target']);
      var f = Function.apply(null, params.concat(['"use strict";\n' + (src || '')]));
      return function (api, arg, target) {
        var argv = GC_ACTION_BLOCKED.map(function () { return undefined; });
        argv.push(api, arg, target);
        return f.apply(Object.create(null), argv);
      };
    } catch (e) {
      console.warn('[gc] azione "' + name + '" non compila: ' + e.message);
      return null;
    }
  }
  // Compila a vuoto per dire all'AUTORE se un'azione ha un errore di sintassi, invece di
  // scoprirlo da un warning in console mentre l'anteprima "non fa niente" (è la stessa lezione
  // di A2/A4: un fallimento silenzioso è peggio di un fallimento rumoroso).
  function gcActionCompileError(src) {
    try {
      var params = GC_ACTION_BLOCKED.concat(['api', 'arg', 'target']);
      Function.apply(null, params.concat(['"use strict";\n' + (src || '')]));
      return null;
    } catch (e) { return e.message; }
  }
  // actions = { name: {src, argHint?} | "src" }. Ritorna un bundle da mettere su GCX[prefix].actions
  // (o cfg.actions per le sequenze). Compilazione UNA volta per mount, non per click.
  function gcMakeActions(actions, root) {
    var bundle = { fns: {}, api: gcActionApi(root), names: [] };
    Object.keys(actions || {}).forEach(function (name) {
      var a = actions[name];
      var src = (a && typeof a === 'object') ? a.src : a;
      var fn = gcCompileAction(name, src);
      if (fn) { bundle.fns[name] = fn; bundle.names.push(name); }
    });
    return bundle;
  }
  function gcRunAction(bundle, name, arg, target, root) {
    if (!name) return false;
    if (!bundle || !bundle.fns) { _gcRuleWarn('azione "' + name + '" richiesta ma il mockup non dichiara azioni'); return false; }
    var fn = bundle.fns[name];
    if (!fn) { _gcRuleWarn('azione "' + name + '" non dichiarata dal mockup'); return false; }
    try { fn(bundle.api, arg == null ? '' : arg, target || null); return true; }
    catch (e) { console.warn('[gc] azione "' + name + '" ha lanciato: ' + e.message); return false; }
  }

  // Cromo interattivo: un solo listener delegato per tipo di evento sulla radice del mockup.
  // Rule = { on:'<selettore>', event?:'click'|'change', effects?:[…], action?:'nome', arg?:'…' }
  //      | { closeOnOutside:'<selettore del pannello>', keepOpenFor?:'<selettore opener>', effects/action }
  // ⚠️ `closeOnOutside` ascolta sulla RADICE del mockup: chiude quando si clicca altrove NEL
  // mockup (il gesto realistico), non fuori da esso — un listener su document uscirebbe dal
  // confine che tutto questo modello esiste per garantire.
  // ═══════════════════════════════════════════════════════════════════════════════════════════
  //  INTERVENTO 3 del Blocco 1 — CROMO PER CONCETTO, DEFAULT `off` (R-12/R-15, D3)
  //  REVISIONE_CONCEPT_2026-09-18.md Parte E.1, punto 3 — misura dedicata del 21/09 (script a
  //  parte, non nel repo): mediana 6 elementi di cromo restano cliccabili per concetto (806 in
  //  totale su 109 concetti interattivi) anche dopo l'intervento 1 — il riflettore attenua le
  //  zone non pertinenti, ma tutto ciò che resta FUORI da una zona (barre, tab, menu) resta vivo.
  //
  //  Il vincolo che decide la forma del fix: `gcBindBehaviour` lega gli ascoltatori UNA SOLA
  //  VOLTA per lezione, al mount del mockup (`mountMockup()` in lesson-shell.html) — non ad ogni
  //  cambio di concetto. `resetMockupToOriginal()` riscrive l'innerHTML dei figli ma non tocca la
  //  radice su cui il listener è delegato, quindi il bind sopravvive intatto a ogni concetto.
  //  Bind/unbind per concetto non è quindi praticabile: il filtro va letto AL MOMENTO DEL CLICK.
  //
  //  `root.__gcChrome` = 'off' | 'all' | [selettori `.on` ammessi] — impostato dal concetto/
  //  sequence attivo (`gcSetChrome`, chiamato da `gcStart`/`gcSeqStart` con `cfg.chrome`) o dalla
  //  Practice (sempre `'all'`, impostato da chi la monta). Le regole `closeOnOutside` restano
  //  SEMPRE attive: chiudono soltanto ciò che è già aperto, non aprono nulla di nuovo che il
  //  concetto non stia già mostrando — bloccarle lascerebbe un popover aperto per sempre.
  //  Identità di una regola = il suo selettore `.on`: nessun campo `.name` nuovo, ogni regola ce
  //  l'ha già ed è stabile (lo stesso testo che l'autore legge già in `stationviewSeedBehaviour()`
  //  e simili).
  //  `mode == null` (nessun engine ha ancora scritto nulla su questa radice) ⇒ non filtra: è il
  //  caso di `runLibraryPreview`/le pagine che non impostano mai `__gcChrome` — comportamento
  //  invariato per chi non sa che questo campo esiste. OP-01/02/03.html non chiamano MAI
  //  `gcBindBehaviour` (grep confermato) → questo intervento le lascia bit per bit invariate.
  // ═══════════════════════════════════════════════════════════════════════════════════════════
  function gcChromeAllows(root, rule) {
    var mode = root && root.__gcChrome;
    if (mode == null || mode === 'all') return true;
    if (mode === 'off') return false;
    if (Array.isArray(mode)) return mode.indexOf(rule.on) >= 0;
    return true;
  }
  function gcSetChrome(root, chrome) { if (root) root.__gcChrome = (chrome == null ? 'off' : chrome); }

  function gcBindBehaviour(rules, root, actions) {
    if (!Array.isArray(rules) || !rules.length || !root) return;
    var byEvent = {};
    rules.forEach(function (r) {
      if (!r) return;
      var ev = r.event || 'click';
      (byEvent[ev] = byEvent[ev] || []).push(r);
    });
    Object.keys(byEvent).forEach(function (ev) {
      root.addEventListener(ev, function (e) {
        byEvent[ev].forEach(function (r) {
          if (r.closeOnOutside) {
            var inside = true;
            try {
              inside = !!(e.target.closest(r.closeOnOutside) || (r.keepOpenFor && e.target.closest(r.keepOpenFor)));
            } catch (x) { inside = true; }
            if (inside) return;
          } else {
            if (!gcChromeAllows(root, r)) return;
            var hit = null;
            try { hit = e.target.closest ? e.target.closest(r.on) : null; } catch (x) { hit = null; }
            if (!hit || !root.contains(hit)) return;
            if (r.effects) gcApplyEffects(r.effects, root);
            if (r.action) gcRunAction(actions, r.action, r.arg, hit, root);
            return;
          }
          if (r.effects) gcApplyEffects(r.effects, root);
          if (r.action) gcRunAction(actions, r.action, r.arg, null, root);
        });
      });
    });
  }

  // §Runner — sequenza lineare (pick→claim→answer→submit) guidata dai dati.
  // cfg = { prefix, idx, ctxH, ctxD, doH, doId?, doneId?, nextId?, steps:[ Step ] }
  // Step = { id, label, ctx:{title,body}, do, autoAdvance,
  //          trigger:{kind:'click', selector} | {kind:'choice', group, options:[{selector,value,effects?}]},
  //          effects:[Effect], validation:[Rule]? }
  // Riusa gcPath/gcDots/gcSet/gcHot + gcApplyEffects/gcCheckRules. root = document di default.
  var gcSeq = {};
  function gcSeqCurrent(cfg) { var st = cfg._st; for (var i = 0; i < cfg.steps.length; i++) if (!st.done[i]) return i; return cfg.steps.length; }
  function gcSeqStart(cfg, root) {
    root = root || document;
    // INTERVENTO 3 — stessa dichiarazione di `gcStart`: la sequence attiva il cromo che il
    // concetto porta in `cfg.chrome` (assente ⇒ `'off'`). `root` qui è sempre quello vero del
    // mockup (mai `document` di default nei chiamanti reali), quindi non serve la guardia di
    // `gcStart` sul `cfg.root` assente.
    gcSetChrome(root, cfg.chrome);
    var st = { done: cfg.steps.map(function () { return false; }), root: root, finished: false };
    cfg._st = st; if (cfg.prefix) gcSeq[cfg.prefix] = cfg;
    // binding: solo lo step corrente è azionabile (guardia in gcSeqFire)
    cfg.steps.forEach(function (step, si) {
      if (step.trigger && step.trigger.kind === 'click') {
        var el = root.querySelector(step.trigger.selector);
        if (el) el.addEventListener('click', function (e) { e.preventDefault(); gcSeqFire(cfg, si); });
      } else if (step.trigger && step.trigger.kind === 'choice') {
        (step.trigger.options || []).forEach(function (o) {
          var el = root.querySelector(o.selector);
          if (el) el.addEventListener('click', function (e) { e.preventDefault(); gcSeqFire(cfg, si, o); });
        });
      }
    });
    // qualunque cambio input (es. spunta motivo) ri-valuta lo step gated
    root.addEventListener('change', function () { gcSeqRefresh(cfg); });
    gcSeqRefresh(cfg);
    return st;
  }
  function gcSeqRefresh(cfg) {
    // 29/09: una sequence sostituita (il guscio riavvia il concetto a ogni rientro) resta agganciata
    // al 'change' della radice: senza questo scriverebbe nel pannello il testo del SUO passo.
    if (cfg._dead) return;
    var st = cfg._st, root = st.root, cur = gcSeqCurrent(cfg), n = cfg.steps.length;
    gcPath(cfg.prefix, st.done); gcDots(cfg.prefix, st.done);
    if (cur < n) {
      var step = cfg.steps[cur];
      // B10 (28/09): "Step name" era autorato ma mai mostrato in Sequence — l'elemento esiste solo
      // se buildConceptPanel lo crea (solo per c.mode==='sequence'), quindi è un no-op ovunque
      // altro. Vuoto se il passo non ha etichetta (campo facoltativo), come per gli altri testi.
      var lblEl = document.getElementById(cfg.prefix + '-seqlbl');
      if (lblEl) { var lblTx = gcTx(step.label); lblEl.style.display = lblTx ? '' : 'none'; lblEl.textContent = lblTx; }
      if (step.ctx) { if (cfg.ctxH) gcSet(cfg.ctxH, step.ctx.title || ''); if (cfg.ctxD) gcSet(cfg.ctxD, step.ctx.body || ''); }
      if (cfg.ctxT) gcSetTip(cfg.ctxT, step.ctx && step.ctx.tip);
      if (step.do && cfg.doH) gcSet(cfg.doH, step.do);
      // INTERVENTO 1 — il riflettore esiste ora anche nelle sequence (prima: mai, `gcSeqStart` non
      // riceveva né chiamava nulla di `gcFocus`). Stessa regola delle checklist: le zone accese le
      // deriva `gcLitZones` dal passo corrente. `zonesAll` assente ⇒ no-op, quindi i moduli reali
      // e qualunque chiamante che non lo imposta restano identici.
      if (cfg.zonesAll && cfg.zonesAll.length) gcDimZones(cfg.zonesAll, gcLitZones(step, root), root);
      var gateOk = !step.validation || gcCheckRules(step.validation, root);
      var tid = gcSeqRingId(step);
      var trg = tid ? root.querySelector('#' + tid) : null;
      // 24/09: con la radice, come le checklist. Senza, l'anello andava sul PRIMO elemento con
      // quell'id nel documento: con due schermate diverse montate (OP-05.3) finiva nel mockup
      // nascosto. root === document per OP-01/02/03.html (gcSeqStart senza radice): invariato.
      if (gateOk) { if (trg) trg.classList.add('ready'); gcHot(tid || null, false, root); }
      else { if (trg) trg.classList.remove('ready'); gcHot(null); }
    } else if (!st.finished) {
      st.finished = true; gcHot(null);
      conceptFinish(cfg.idx, cfg.doId || null, cfg.doneId || null, cfg.nextId || null);
    }
  }
  // id dell'elemento su cui posare l'anello per lo step corrente.
  function gcSeqRingId(step) {
    if (!step.trigger) return null;
    if (step.trigger.kind === 'click') return (step.trigger.selector || '').replace(/^#/, '');
    if (step.trigger.kind === 'choice') { var o = (step.trigger.options || [])[0]; return o ? (o.selector || '').replace(/^#/, '') : null; }
    return null;
  }
  function gcSeqFire(cfg, si, chosenOpt) {
    var st = cfg._st, root = st.root, cur = gcSeqCurrent(cfg);
    if (si !== cur) return; // solo lo step corrente è azionabile
    var step = cfg.steps[si];
    if (step.trigger && step.trigger.kind === 'choice') {
      (step.trigger.options || []).forEach(function (o) { var el = root.querySelector(o.selector); if (el) el.classList.toggle('sel', o === chosenOpt); });
      if (chosenOpt && chosenOpt.effects) gcApplyEffects(chosenOpt.effects, root);
      if (chosenOpt && chosenOpt.simulatorActionId) gcRunAction(cfg.actions, chosenOpt.simulatorActionId, chosenOpt.simulatorActionArg, null, root);
      st.choice = chosenOpt ? chosenOpt.value : null;
    }
    // gate (es. submit): se non soddisfatto non avanza, solo ri-valuta
    if (step.validation && !gcCheckRules(step.validation, root)) { gcSeqRefresh(cfg); return; }
    if (step.effects) gcApplyEffects(step.effects, root);
    if (step.simulatorActionId) gcRunAction(cfg.actions, step.simulatorActionId, step.simulatorActionArg, null, root);
    st.done[si] = true;
    // ⚠️ Il refresh è RIMANDATO DI UN TICK, non sincrono. Il cromo (gcBindBehaviour) è delegato
    // sulla radice del mockup, quindi scatta DOPO il listener diretto che questo passo ha agganciato
    // sul proprio elemento. Valutando subito il gate del passo successivo si legge uno stato che il
    // cromo non ha ancora prodotto: il gate risulta falso e l'anello NON viene posato, pur restando
    // il pulsante cliccabile — il discente perde il segnale di dove cliccare. Misurato su OP-04.3 c2
    // (ultimo passo, gate require-selection su #sa-list selezionata da `pickStartActivity`, che è
    // una regola di cromo). Vedi CONTENT_EDITOR_TECHNICAL.md §54.10.
    setTimeout(function () { gcSeqRefresh(cfg); }, 0);
  }

  // Pulizia del registro per un prefisso (fix bug C2): l'anteprima del content-editor si
  // riavvia N volte nella stessa pagina e prima lasciava GCX['spv']/gcRun['spv']/gcSeq['spv']
  // dietro di sé a ogni giro. Il DOM viene ricreato con innerHTML (quindi i listener muoiono
  // con gli elementi, non c'è leak vero) ma il registro cresceva e una config vecchia poteva
  // sopravvivere a un cambio di modalità del concept. I moduli reali non la chiamano mai.
  function gcClear(prefix) {
    if (!prefix) return;
    delete GCX[prefix]; delete gcRun[prefix]; delete gcSeq[prefix];
  }

  // 2026-08-27: la label "Step n of m" ora è testo COMPOSTO (gc.stepfmt + numeri), non più una
  // singola chiave data-i18n risolvibile dalla scansione generica di applyLang — senza questo hook
  // restava nella lingua vecchia finché non arrivava il prossimo click. Ridisegna i pannelli guidati
  // attualmente montati (checklist via gcSyncPath, sequence via gcSeqRefresh — entrambe già chiamano
  // gcDots al proprio interno), stesso schema di window.awVaRefresh per il pannello video.
  function gcRefreshStepLabels() {
    Object.keys(gcRun).forEach(function (prefix) { if (gcRun[prefix]) gcSyncPath(prefix); });
    Object.keys(gcSeq).forEach(function (prefix) { if (gcSeq[prefix] && gcSeq[prefix]._st) gcSeqRefresh(gcSeq[prefix]); });
  }

  // Esposizione su window (shared.js è un IIFE) — i moduli le chiamano come globali.
  window.gcHot = gcHot; window.gcPath = gcPath; window.gcDots = gcDots; window.gcSet = gcSet;
  // 23/09 sera (decisione di Giulia): anche nella Practice le liste scorrono da sole fino al
  // bersaglio del passo. Esposta per `lesson-shell.html`; additiva, nessun chiamante esistente cambia.
  window.gcRevealInScroller = gcRevealInScroller;
  window.markConcept = markConcept; window.conceptFinish = conceptFinish;
  window.gcStart = gcStart; window.gcHit = gcHit; window.gcAdvance = gcAdvance;
  window.gcFocus = gcFocus; window.gcRenderCheck = gcRenderCheck; window.gcSyncPath = gcSyncPath;
  // Intervento 1 — il riflettore: `gcZoneNames` la chiamano il guscio e l'anteprima per calcolare
  // `zonesAll` dal mockup montato; le altre sono esposte perché servono al riassunto in authoring
  // e alla verifica (misurare cosa si accende senza dover giocare il concetto).
  window.gcZoneNames = gcZoneNames; window.gcLitZones = gcLitZones;
  window.gcDimZones = gcDimZones; window.gcClearDim = gcClearDim; window.gcZoneOfSel = gcZoneOfSel;
  window.gcCurItem = gcCurItem; window.gcAreaDone = gcAreaDone;
  window.gcRefreshStepLabels = gcRefreshStepLabels;
  window.GCX = GCX; window.gcRun = gcRun;
  // Pilota motore simulatore (Fase 2-bis)
  window.gcApplyEffects = gcApplyEffects; window.gcCheckRules = gcCheckRules;
  window.gcSeqStart = gcSeqStart; window.gcSeqFire = gcSeqFire; window.gcSeqRefresh = gcSeqRefresh;
  window.gcClear = gcClear;
  // Intervento 3 — cromo per concetto: `gcSetChrome` la chiamano il guscio (Practice, e i punti che
  // rientrano in un concetto già visto senza ripassare da gcStart/gcSeqStart) e l'anteprima
  // dell'editor (stesso meccanismo, mai una seconda implementazione).
  window.gcSetChrome = gcSetChrome;
  // Ondata 2 — azioni nominate del mockup, cromo interattivo, whitelist di setStyle (il
  // configuratore la usa per popolare la tendina e per validare in authoring).
  window.gcMakeActions = gcMakeActions; window.gcRunAction = gcRunAction;
  window.gcActionCompileError = gcActionCompileError;
  window.gcBindBehaviour = gcBindBehaviour; window.gcTx = gcTx;
  window.GC_STYLE_PROPS = GC_STYLE_PROPS;

  // ═══════════════════════════════════════════════════════════════════════════════════════════
  //  BLOCCO 01 — LA VISTA PER CONCETTO (PIANO_FEDELTA_MOCKUP_2026-09-15.md §5)
  //
  //  Il difetto che questo blocco chiude: l'editor monta UN mockup per simulatore e lo mostra
  //  sempre INTERO, mentre i moduli approvati costruiscono a mano un'istanza RITAGLIATA per ogni
  //  concetto (OP-03: il concetto sulla PO Area mostra solo quella colonna a 300px centrata).
  //  Misurato nel palco da 428px: OP-03.html 351px con le colonne affiancate, lo stesso schermo
  //  nell'editor 1011px con le colonne impilate e la work list 600px più in basso.
  //
  //  ⚠️ Il ritaglio NON è un clone del sottoalbero. Clonare duplicherebbe gli id nel documento, e
  //  il motore usa `document.getElementById`: è esattamente il bug già preso due volte in questo
  //  progetto (§29 e 2026-09-11). Qui si usa il MASCHERAMENTO DEL PERCORSO — si nasconde tutto
  //  ciò che sta FUORI dal ritaglio, mai nulla dentro. Conseguenza utile e non ovvia: un pannello
  //  che il flusso aprirà più tardi (l'overlay Claim & Submit dentro #sv-wrap) sopravvive sempre,
  //  perché vive dentro il ritaglio. E gli id restano unici: il motore non se ne accorge.
  //
  //  Il ritaglio è DERIVATO per difetto (decisione del 15/09): le zone che un concetto illumina
  //  sono già la parte di schermo di cui parla — è quello che OP-03 fa a mano. `view.crop`
  //  esplicito serve solo per gli scarti; `view.crop: []` è la via d'uscita "mostra tutto".
  //  Stessa cosa in Practice, derivando dal `targetId` del passo.
  //
  //  "Schermata" e "ritaglio" sono la STESSA operazione a due livelli (unificate il 15/09): un
  //  selettore che punta al contenitore di una schermata dà "parti da questa schermata", uno che
  //  punta a una colonna dà "mostra solo questa colonna". Un meccanismo, non due.
  // ═══════════════════════════════════════════════════════════════════════════════════════════

  // La regola del ritaglio è iniettata dal motore, non aggiunta al CSS condiviso: su `file://` il
  // `?t=` non busta la cache, quindi una regola nuova in shared-rNN.css costringerebbe a
  // rinominare il file e a ripuntare i <link> di 11 pagine. `!important` per vincere sulle regole
  // del mockup; la classe la posa solo il motore.
  var _gcViewCss = false;
  function gcEnsureViewCss() {
    if (_gcViewCss || typeof document === 'undefined') return;
    var st = document.createElement('style');
    st.id = 'gc-view-css';
    st.textContent = '.gc-crop-off{display:none!important}';
    (document.head || document.documentElement).appendChild(st);
    _gcViewCss = true;
  }

  // Un selettore di ritaglio è un id, un data-zone o un selettore CSS — le tre forme che il resto
  // del motore già accetta (gcFocus risolve zone per id o [data-zone]).
  function gcCropResolve(root, sel) {
    if (!root || !sel) return [];
    var out = [];
    try { if (root.id === sel) out.push(root); } catch (e) {}
    try { out = out.concat([].slice.call(root.querySelectorAll('#' + (window.CSS && CSS.escape ? CSS.escape(sel) : sel)))); } catch (e) {}
    if (!out.length) { try { out = [].slice.call(root.querySelectorAll('[data-zone="' + sel + '"]')); } catch (e) {} }
    if (!out.length) { try { out = [].slice.call(root.querySelectorAll(sel)); } catch (e) {} }
    return out;
  }

  // Il ritaglio di un concetto, in tre gradini:
  //   1. `view.crop` esplicito (anche `[]`, che significa "mostra tutto");
  //   2. l'unione delle zone che il concetto illumina;
  //   3. se non ne illumina nessuna, le zone del mockup che CONTENGONO ciò che il concetto tocca.
  // Il terzo gradino non è un ripiego: `checklist_single_area` e `sequence` non dichiarano zone
  // per progetto (il riflettore serve solo al multi-area), quindi senza di esso i concetti di quei
  // due modi mostrerebbero sempre il mockup intero — su OP-03.1 sono 2 dei 4. Chiedere "quali
  // zone contengono gli elementi di cui parlo" usa le regioni che il mockup dichiara già, non
  // inventa un contenitore, e per costruzione non ritaglia via nulla di ciò che il concetto tocca.
  // Richiede il DOM montato: `root` assente ⇒ si fermano ai primi due gradini.
  window.gcConceptCrop = function (concept, root) {
    if (concept && concept.view && Array.isArray(concept.view.crop)) return concept.view.crop.slice();
    var seen = {}, out = [];
    ((concept && concept.areas) || []).forEach(function (a) {
      var zs = Array.isArray(a.zone) ? a.zone : (a.zone ? [a.zone] : []);
      zs.forEach(function (z) { if (z && !seen[z]) { seen[z] = 1; out.push(z); } });
    });
    if (!root) return out;
    // Aggiunge la zona che contiene un elemento, se non c'è già.
    function addZoneOf(sel) {
      if (!sel) return;
      var el = gcCropResolve(root, sel)[0];
      var zoneEl = el && el.closest ? el.closest('[data-zone]') : null;
      var z = zoneEl && zoneEl.getAttribute('data-zone');
      if (z && !seen[z]) { seen[z] = 1; out.push(z); }
    }
    // Terzo gradino: se non illumina zone, si parte dalle zone che contengono i suoi item.
    if (!out.length) {
      ((concept && concept.areas) || []).forEach(function (a) {
        (a.items || []).forEach(function (it) { if (it && it.id) addZoneOf(it.id); });
      });
    }
    // Quarto gradino, e non è un dettaglio: il ritaglio deve contenere anche TUTTO CIÒ CHE IL
    // CONCETTO CAMBIA. Misurato il 15/09: senza questo, 17 concetti su 130 avrebbero avuto un
    // ritaglio che nasconde il bersaglio dei propri effetti — es. il concetto sui colori di stato
    // di OP-02.1 illumina la legenda ma ricolora la card della linea, che sta fuori: il discente
    // avrebbe cliccato e non visto cambiare niente. Estendendo il ritaglio per costruzione, quel
    // fallimento non è più possibile sui ritagli derivati (su quelli espliciti la validazione lo
    // segnala, perché lì è una scelta dell'autore).
    // ⚠️ Limite dichiarato: un'azione nominata (`simulatorActionId`) può toccare qualunque cosa e
    // non è ispezionabile da qui — per quelle il ritaglio derivato non offre garanzie.
    if (out.length) {
      ((concept && concept.areas) || []).forEach(function (a) {
        (a.items || []).forEach(function (it) {
          if (!it) return;
          (it.effects || []).forEach(function (ef) { addZoneOf(ef && ef.target); });
          (it.options || []).forEach(function (o) {
            if (o && o.id) addZoneOf(o.id);
            (o && o.effects || []).forEach(function (ef) { addZoneOf(ef && ef.target); });
          });
          (it.validation || []).forEach(function (r) { addZoneOf(r && r.group); });
        });
      });
    }
    return out;
  };
  // Il ritaglio di un passo di Practice: la ZONA che contiene il suo target, non il target.
  // Misurato: ritagliando sul target nudo, il passo 3 di OP-01.1 (`ls-env`, un badge) lasciava un
  // mockup alto **18px** — un elemento solo, senza il contesto che serve a capire dove si è. La
  // zona che lo contiene è la stessa unità di senso usata dal terzo gradino di gcConceptCrop:
  // una regola sola, applicata allo stesso modo in Concepts e in Practice. Ripiego sul target
  // quando non c'è una zona attorno.
  window.gcPracticeStepCrop = function (step, root) {
    if (step && step.view && Array.isArray(step.view.crop)) return step.view.crop.slice();
    if (!step || !step.targetId) return [];
    if (root) {
      var el = gcCropResolve(root, step.targetId)[0];
      var zoneEl = el && el.closest ? el.closest('[data-zone]') : null;
      var z = zoneEl && zoneEl.getAttribute('data-zone');
      if (z) return [z];
    }
    return [step.targetId];
  };

  // Applica una vista al mockup montato in `root`. `view` = {crop:[sel], width, maxWidth, scale}.
  // Ritorna cosa ha fatto, perché il configuratore lo mostra in authoring (un ritaglio che non
  // risolve è un fallimento silenzioso: il mockup resta intero e sembra che il campo non serva).
  window.gcApplyView = function (root, view) {
    if (!root) return null;
    window.gcClearView(root);
    gcEnsureViewCss();
    view = view || {};
    var crop = Array.isArray(view.crop) ? view.crop.filter(Boolean) : [];
    var res = { cropped: false, resolved: [], unresolved: [], hidden: 0 };

    if (crop.length) {
      var targets = [];
      crop.forEach(function (sel) {
        var found = gcCropResolve(root, sel);
        if (found.length) { res.resolved.push(sel); targets = targets.concat(found); }
        else res.unresolved.push(sel);
      });
      if (targets.length) {
        // Il percorso = ogni antenato dei target fino a root, più i target stessi. Tutto ciò che
        // NON è sul percorso e non è contenuto in un target viene nascosto: quindi dentro il
        // ritaglio non si tocca niente, e fuori non resta niente.
        var onPath = [];
        function mark(el) { if (onPath.indexOf(el) === -1) onPath.push(el); }
        targets.forEach(function (t) { var n = t; while (n && n !== root) { mark(n); n = n.parentElement; } });
        mark(root);
        onPath.forEach(function (el) {
          for (var i = 0; i < el.children.length; i++) {
            var ch = el.children[i];
            if (onPath.indexOf(ch) !== -1) continue;              // sul percorso: resta
            if (targets.some(function (t) { return t.contains(ch); })) continue; // dentro un target: resta
            // ⚠️ Si nascondono solo le REGIONI, cioè ciò che il mockup ha dichiarato come zona (o
            // che ne contiene una). Il cromo non zonato resta: trovato provando il concetto 1 di
            // OP-03.1, dove la prima versione portava via il breadcrumb "Cockpit" e il badge
            // "STAGE" — cioè proprio la cornice del prodotto che la regola R01 esige, su un
            // concetto che parla di "due colonne sotto una barra superiore". `data-zone` è la
            // dichiarazione del mockup su cosa sia una parte separabile; tutto il resto è cornice.
            // Conseguenza dichiarata: su un mockup che non dichiara nessuna zona il ritaglio non
            // ha nulla da nascondere ed è un no-op — è un mockup che non ha ancora detto com'è
            // fatto, non un difetto del meccanismo.
            var isRegion = (ch.hasAttribute && ch.hasAttribute('data-zone')) || (ch.querySelector && ch.querySelector('[data-zone]'));
            if (!isRegion) continue;
            ch.classList.add('gc-crop-off');
            res.hidden++;
          }
        });
        res.cropped = true;
      }
    }

    // I moduli approvati non "zoomano": vincolano la LARGHEZZA e centrano (OP-03 concetto B:
    // max-width 300px, margin 0 auto). `scale` esiste per il caso opposto, una schermata grande
    // che deve comunque entrare; si usa solo se serve.
    var mock = root.firstElementChild;
    if (mock) {
      // ── `width` — impagina largo, poi rimpicciolisci (2026-09-15, Blocco 02) ────────────────
      // Perché non basta `scale` da solo: `scale` non cambia la larghezza di IMPAGINAZIONE, quindi
      // su un mockup a colonne fluide riduce tutto restando comunque a una colonna. Misurato su
      // StationView: a 428px di palco le colonne si impilano e il mockup è alto 1092px; a 700px
      // si affiancano e ne bastano 630. `scale` su quei 1092 dà un 1092 più piccolo, non le tre
      // colonne del prodotto. `width` invece impagina a N px — dove il mockup ha la forma che ha
      // negli screenshot — e poi lo riduce di quanto serve per entrare nel contenitore.
      //
      // Serve solo ai concetti che mostrano una schermata INTERA: un concetto ritagliato su una
      // colonna entra già da sé, ed è il motivo per cui questo campo resta esplicito e non
      // derivato (rimpicciolire ciò che ci sta già renderebbe il testo più piccolo per niente).
      if (view.width > 0) {
        var avail = root.clientWidth || (root.getBoundingClientRect ? root.getBoundingClientRect().width : 0) || 0;
        // Contenitore non ancora misurabile (pannello nascosto al momento dell'applicazione): non
        // si forza la larghezza, altrimenti il mockup sborderebbe senza che nessuno lo riduca.
        // Meglio la resa di prima che una resa rotta — e chi chiama lo vede in `res`.
        if (avail > 0) {
          mock.style.width = view.width + 'px';
          mock.style.maxWidth = 'none';   // un max-width (del dato o del CSS del mockup) lo ricompatterebbe
          var k = view.scale || (avail < view.width ? avail / view.width : 1);
          // ── `maxHeight` — entrare anche in ALTEZZA (2026-09-22) ────────────────────────────
          // Fin qui la scala si calcolava solo sulla larghezza: una schermata alta entrava di
          // lato e veniva tagliata sotto da `overflow:hidden` — senza scrollbar, quindi letta
          // come "l'immagine è tagliata" (rilievo di Giulia). Nessuna regola CSS poteva
          // rimediare, perché due righe più sotto questa funzione scrive `height` e `overflow`
          // INLINE sul contenitore, e l'inline vince su qualunque foglio.
          // Campo OPZIONALE: chi non lo passa ottiene esattamente il comportamento di prima.
          // La misura va fatta PRIMA di applicare la trasformazione, altrimenti si misura il
          // mockup già rimpicciolito e la scala si moltiplica a ogni passaggio.
          if (!view.scale && view.maxHeight > 0) {
            mock.style.transform = '';
            var natH = mock.getBoundingClientRect().height;
            if (natH > 0 && natH * k > view.maxHeight) { k = view.maxHeight / natH; res.heightFitted = true; }
          }
          res.layoutWidth = view.width;
          res.scale = k;
          if (k !== 1) {
            mock.style.transformOrigin = 'top left';
            mock.style.transform = 'scale(' + k + ')';
            // `transform` non cambia il box di layout: senza questo il contenitore resterebbe
            // alto quanto il mockup NON scalato e sotto si aprirebbe una striscia vuota alta
            // quanto la riduzione. getBoundingClientRect, a differenza di offsetHeight, tiene
            // conto della trasformazione, quindi misura l'altezza davvero occupata a schermo.
            root.style.height = Math.ceil(mock.getBoundingClientRect().height) + 'px';
            root.style.overflow = 'hidden';
          }
        } else res.widthSkipped = true;
      } else {
        if (view.maxWidth) { mock.style.maxWidth = view.maxWidth + 'px'; mock.style.marginLeft = 'auto'; mock.style.marginRight = 'auto'; }
        if (view.scale && view.scale !== 1) { mock.style.transformOrigin = 'top left'; mock.style.transform = 'scale(' + view.scale + ')'; }
      }
      root.setAttribute('data-gc-view', '1');
    }
    return res;
  };
  window.gcClearView = function (root) {
    if (!root) return;
    var off = root.querySelectorAll('.gc-crop-off');
    for (var i = 0; i < off.length; i++) off[i].classList.remove('gc-crop-off');
    var mock = root.firstElementChild;
    if (mock) { mock.style.maxWidth = ''; mock.style.marginLeft = ''; mock.style.marginRight = ''; mock.style.transform = ''; mock.style.transformOrigin = ''; mock.style.width = ''; }
    root.style.height = ''; root.style.overflow = '';
    root.removeAttribute('data-gc-view');
  };

  // Scoping CSS di un mockup del content editor (stessa logica CSSOM di content-editor.html
  // scopeMockupCss/_scopeOneSelector/_splitSelectorList), esposta qui per lesson-shell.html,
  // che deve montare mockupLibrary[simId].css senza farlo contaminare il resto della pagina.
  function gcSplitSelectorList(sel) {
    var out = [], depth = 0, cur = '', q = null;
    for (var i = 0; i < sel.length; i++) {
      var ch = sel[i];
      if (q) { cur += ch; if (ch === q && sel[i - 1] !== '\\') q = null; continue; }
      if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
      if (ch === '(' || ch === '[') depth++;
      else if (ch === ')' || ch === ']') depth--;
      if (ch === ',' && depth === 0) { out.push(cur); cur = ''; continue; }
      cur += ch;
    }
    if (cur.trim()) out.push(cur);
    return out;
  }
  function gcScopeOneSelector(sel, scope) {
    var s = sel.trim();
    if (!s) return '';
    if (/^(html|body|:root)$/i.test(s)) return scope;
    if (/^html\s+body$/i.test(s)) return scope;
    if (s === '*') return scope + ', ' + scope + ' *';
    s = s.replace(/^\s*(?:html|body|:root)\s*>?\s+/i, '');
    if (/^(html|body|:root)([.:#\[])/i.test(sel.trim())) {
      return scope + sel.trim().replace(/^(html|body|:root)/i, '');
    }
    return scope + ' ' + s;
  }
  function gcScopeRuleList(rules, scope) {
    var out = '';
    Array.prototype.slice.call(rules || []).forEach(function (rule) {
      if (rule.type === 1) {
        var scoped = gcSplitSelectorList(rule.selectorText).map(function (s) { return gcScopeOneSelector(s, scope); }).filter(Boolean).join(', ');
        if (scoped) out += scoped + '{' + rule.style.cssText + '}\n';
      } else if (rule.type === 4 || rule.type === 12) {
        out += '@' + (rule.type === 4 ? 'media ' : 'supports ') + rule.conditionText + '{\n' + gcScopeRuleList(rule.cssRules, scope) + '}\n';
      } else if (rule.type === 7 || rule.type === 5) {
        out += rule.cssText + '\n';
      }
    });
    return out;
  }
  window.gcScopeCss = function (css, scope) {
    if (!css) return '';
    var st = document.createElement('style');
    st.textContent = css;
    st.disabled = true;
    document.head.appendChild(st);
    var out = '';
    try {
      var sheet = st.sheet;
      if (!sheet) throw new Error('no sheet');
      out = gcScopeRuleList(sheet.cssRules, scope);
    } catch (e) {
      console.warn('[gc] gcScopeCss failed, CSS del mockup non applicato:', e);
      out = '';
    } finally {
      if (st.parentNode) st.parentNode.removeChild(st);
    }
    return out;
  };

  // ── Barra di anteprima "View chapter" dal Content Editor (additivo, 2026-09-10 ter) ──
  // Montata SOLO su chiamata esplicita (mai in automatico su ogni pagina). Il chiamante
  // (OP-01/02/03.html, lesson-shell.html) la usa quando l'URL porta `?preview=1`: senza quel
  // parametro il comportamento di ogni pagina resta identico a prima, byte per byte — un vero
  // operatore che apre il modulo normalmente non vede né questa barra né alcun effetto.
  window.awMountPreviewBar = function () {
    if (document.getElementById('aw-preview-bar')) return; // idempotente
    var st = document.createElement('style');
    st.textContent =
      '.aw-preview-bar{position:fixed;top:0;left:0;right:0;height:40px;z-index:1400;' +
      'display:flex;align-items:center;justify-content:center;gap:14px;background:#13294f;color:#fff;' +
      'font-size:13px;padding:0 16px;box-shadow:0 2px 10px rgba(0,0,0,.18)}' +
      '.aw-preview-bar b{font-weight:600}' +
      '.aw-preview-bar button{background:var(--aw-pink,#e0318a);color:#fff;border:0;border-radius:6px;' +
      'padding:6px 14px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;flex:none}' +
      'body.aw-preview-mode{padding-top:92px!important}' +
      'body.aw-preview-mode .aw-tb{top:40px}' +
      'body.aw-preview-mode .aw-rail{top:92px}';
    document.head.appendChild(st);
    var bar = document.createElement('div');
    bar.id = 'aw-preview-bar';
    bar.className = 'aw-preview-bar';
    bar.innerHTML =
      '<span><b>Preview</b> — simulating this chapter from the Content Editor. Nothing here is saved, your real progress is untouched.</span>' +
      '<button type="button" onclick="window.awClosePreview()">← Back to editor</button>';
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.classList.add('aw-preview-mode');
  };
  window.awClosePreview = function () {
    try { if (window.opener && !window.opener.closed) { window.close(); return; } } catch (e) {}
    // Stessa risoluzione di path di railHTML() per la voce 'editor'.
    location.href = window.AW_RAIL_PREFIX ? 'content-editor.html' : '../content-editor.html';
  };
  // 2026-09-15: la spath aveva un solo punto di uscita coperto (awClosePreview sul bottone della
  // barra + il link "Training" della sidebar, fix separato). Ma OGNI pulsante che lascia la pagina
  // di un modulo/capitolo — "← Back to Course" vicino al quiz, "Next module →" e "Open →" sulla
  // Completion Card, in OP-01/02/03.html e lesson-shell.html — puntava comunque a index.html o al
  // modulo successivo reale, bypassando l'anteprima. Un solo guard riusato ovunque invece di
  // ripetere `if(AW_PREVIEW)` in ogni onclick.
  window.awPreviewGuard = function (url) {
    if (window.AW_PREVIEW) { window.awClosePreview(); return false; }
    location.href = url;
    return false;
  };
})();

/* ══════════════════════════════════════════════════════════════════════════════
   PONTE  stato content editor → pagina lezione   (Blocco 0, 2026-09-09)

   Il guscio `lesson-shell.html` leggeva SOLO `../Content/<id>.json`, e su disco ne
   esistono 2 su 37: l'export scarica un file che va salvato a mano, quindi fra il
   concetto che si configura e il capitolo che si guarda c'era un passaggio manuale
   che nessuno faceva. Qui si separano le due cose che prima passavano dallo stesso
   canale:

     ANTEPRIMA  → questo ponte, che legge lo stato VIVO dell'editor. Editor e app
                  condividono l'origin (stesso server statico, o tutto da file://),
                  quindi condividono `localStorage`: nessun export, nessun file.
     CONSEGNA   → l'export "contract v1" dell'editor, invariato, per il team AI.

   `awLessonContent` è l'UNICA implementazione della trasformazione sections +
   mockupLibrary: `subsectionToModuleContent()` in content-editor.html la richiama
   per quei due campi, così il formato di consegna e ciò che si vede in anteprima
   non possono divergere.
   ══════════════════════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'tillit_content_editor_v3';
  window.AW_EDITOR_STATE_KEY = KEY;

  // Stato vivo del content editor, o null (chiave assente / JSON corrotto / stato
  // vuoto). Mai lancia: ogni chiamante deve poter ricadere su un'altra fonte.
  window.awEditorState = function () {
    // Edizione: uno stato "di sola lettura" ricavato dal catalogo pubblicato (awApplyEdition),
    // mai la memoria dell'editor di questo browser.
    if (window.AW_CONTENT) return window.AW_EDITION_STATE || null;
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var st = JSON.parse(raw);
      return (st && st.modules && st.modules.length) ? st : null;
    } catch (e) { return null; }
  };

  // { mod, ss } per un lessonId ("OP-03.1", "SU-04A.1b", ...), o null.
  // Confronto in maiuscolo: gli id del contratto sono minuscoli, quelli dello stato
  // maiuscoli — stessa convenzione di round-trip di mergeContractV1Doc().
  window.awLessonFind = function (st, lessonId) {
    if (!st || !lessonId) return null;
    var want = String(lessonId).toUpperCase(), mods = st.modules || [];
    for (var i = 0; i < mods.length; i++) {
      var subs = mods[i].subsections || [];
      for (var j = 0; j < subs.length; j++) {
        if (String(subs[j].id || '').toUpperCase() === want) return { mod: mods[i], ss: subs[j] };
      }
    }
    return null;
  };

  // Simulatori citati da una lezione: dai concept + dal Practice. Identica a
  // collectSimulatorIds() dell'editor, che ora delega qui.
  window.awLessonSimulatorIds = function (sections) {
    var s = sections || {}, seen = {}, out = [];
    (s.concepts || []).forEach(function (c) {
      if (c && c.simulatorId && !seen[c.simulatorId]) { seen[c.simulatorId] = 1; out.push(c.simulatorId); }
    });
    // COPIONE_CAP1 (additivo): anche la schermata d'arrivo di un passo `goToScreen` (es. il Cockpit che
    // apre la Station View di linea) deve viaggiare con la lezione, se non è già il simulatore di un concetto.
    (s.concepts || []).forEach(function (c) {
      (c && c.areas || []).forEach(function (a) { (a && a.items || []).forEach(function (it) {
        var g = it && it.goToScreen; if (g && !seen[g]) { seen[g] = 1; out.push(g); }
      }); });
    });
    var mv = s.practice && s.practice.mockupVariant;
    if (mv && !seen[mv]) { seen[mv] = 1; out.push(mv); }
    return out;
  };

  // Le due parti del documento contract-v1 che servono a RENDERIZZARE una lezione:
  // `sections` (tutorFAQ → tutorFaq, senza il campo editor-only legacyImageUrl) e
  // `mockupLibrary` (i mockup Livello 1 dei simulatori citati, così il documento è
  // autosufficiente). Vedi il commento di blocco sopra: unica implementazione.
  window.awLessonContent = function (st, mod, ss) {
    var s = (ss && ss.sections) || {}, lib = {};
    window.awLessonSimulatorIds(s).forEach(function (id) {
      if (st && st.mockups && st.mockups[id]) lib[id] = st.mockups[id];
    });
    return {
      sections: {
        intro: s.intro,
        video: s.video,
        concepts: (s.concepts || []).map(function (c) {
          var out = {};
          Object.keys(c).forEach(function (k) { if (k !== 'legacyImageUrl') out[k] = c[k]; });
          // D3 (25/09): un concept senza vista propria eredita la vista di default della sua
          // schermata (`st.screenCatalog[sim].view`, impostata nell'area Screens). Chi ha una vista
          // la tiene: nessun dato esistente cambia.
          var dv = c.simulatorId && st && st.screenCatalog && st.screenCatalog[c.simulatorId] && st.screenCatalog[c.simulatorId].view;
          if (!c.view && dv) out.view = JSON.parse(JSON.stringify(dv));
          return out;
        }),
        practice: s.practice,
        quiz: s.quiz,
        completion: s.completion,
        tutorFaq: s.tutorFAQ || []
      },
      mockupLibrary: lib
    };
  };

  // ── Sezioni escludibili (25/09, INVENTARIO_CONTENT_EDITOR §3.2) ─────────────────────────────
  // Una sezione si accende o si spegne su TRE livelli, e ogni livello eredita da quello sopra:
  //   training   → track.sectionDefaults  = { video:'off', ... }
  //   capitolo   → mod.sectionOverrides   = { quiz:'off', ... }
  //   sotto-cap. → ss.sectionOverrides    = { video:'on', ... }
  // Una chiave assente vuol dire "eredita"; in cima alla catena tutto è acceso. Nessun dato =
  // tutto acceso = comportamento di prima: non serve alcuna migrazione.
  // Unica implementazione: la usano l'editor (interruttori, validazione) e awLessonDoc (pagina).
  window.AW_SECTION_KEYS = ['intro', 'video', 'concepts', 'practice', 'quiz', 'completion', 'tutor'];
  window.awSectionState = function (st, mod, ss) {
    var tr = ((st && st.tracks) || []).filter(function (t) { return mod && t.id === mod.trackId; })[0];
    var levels = [['training', tr && tr.sectionDefaults], ['chapter', mod && mod.sectionOverrides], ['here', ss && ss.sectionOverrides]];
    var out = {};
    window.AW_SECTION_KEYS.forEach(function (k) {
      var on = true, from = 'default';
      levels.forEach(function (lv) {
        var v = lv[1] && lv[1][k];
        if (v === 'on' || v === 'off') { on = v === 'on'; from = lv[0]; }
      });
      out[k] = { on: on, from: from };
    });
    return out;
  };
  window.awActiveSections = function (st, mod, ss) {
    var s = window.awSectionState(st, mod, ss);
    return window.AW_SECTION_KEYS.filter(function (k) { return s[k].on; });
  };

  // Documento che lesson-shell.html sa leggere, costruito dallo stato vivo.
  // NON è il documento di consegna: `meta` porta solo i campi che la pagina legge
  // davvero (oggi il solo `trackId`) più groupId/editorStatus, utili a chi guarda.
  // I minuti stimati e `order` restano fuori: dipendono da helper dell'editor
  // (calcMinutes/parseSubsectionOrder) e il guscio non li usa.
  window.awLessonDoc = function (st, lessonId) {
    var f = window.awLessonFind(st, lessonId);
    if (!f) return null;
    var c = window.awLessonContent(st, f.mod, f.ss);
    return {
      id: String(f.ss.id).toLowerCase(),
      moduleId: String(f.ss.id).toLowerCase(),
      version: 1,
      meta: {
        groupId: String(f.mod.id).toLowerCase(),
        trackId: f.mod.trackId,
        editorStatus: f.ss.status || 'draft',
        // Sezioni accese per questo sotto-capitolo (vedi awSectionState). Un documento senza
        // questo campo (Content/*.json, versioni pubblicate prima del 25/09) = tutte accese.
        sections: window.awActiveSections(st, f.mod, f.ss)
      },
      mockupLibrary: c.mockupLibrary,
      sections: c.sections
    };
  };

  // Indice reale di quello che è autorato, per modulo:
  //   { "OP-04": { trackId, title, lessons:[{id,title,status,hasContent}] }, ... }
  // `modules.html` lo usa al posto delle sue liste statiche di capitoli, che sono
  // ferme a una tassonomia più vecchia (OP-06 vi risulta a 4 capitoli quando ne
  // esistono 2, SU-04B a 6 quando sono 7, SU-05 manca del tutto).
  window.awLessonIndex = function (st) {
    var out = {};
    ((st && st.modules) || []).forEach(function (m) {
      out[String(m.id).toUpperCase()] = {
        trackId: m.trackId,
        title: m.title || m.id,
        lessons: (m.subsections || []).map(function (ss) {
          var s = ss.sections || {};
          return {
            id: ss.id,
            title: ss.title || ss.id,
            status: ss.status || 'draft',
            hasContent: !!((s.concepts && s.concepts.length) || (s.quiz && s.quiz.questions && s.quiz.questions.length))
          };
        })
      };
    });
    return out;
  };
})();

/* ══════════════════════════════════════════════════════════════════════════════
   VERSIONI PUBBLICATE dei sotto-training   (2026-09-25, PIANO_PUBBLICAZIONE_2026-09-25.md)

   Prima di questo blocco "pubblicato" non esisteva: chi impara leggeva lo stato VIVO
   dell'editor (ponte qui sopra), quindi un ritocco a un capitolo già Ready si vedeva
   subito, anche a metà lavoro. Ora il content editor, con "Publish", fotografa un
   sotto-training (Course) e lo scrive qui; `modules.html` e `lesson-shell.html` (fuori
   dall'anteprima) leggono SOLO questa fotografia.

   Perché IndexedDB e non localStorage: lo stato dell'editor pesa già ~2,3 MB su ~5 MB
   (misurato il 25/09) e una versione pubblicata del corso Operator ~1,5 MB (mockup
   inclusi). IndexedDB ha centinaia di MB. È asincrono: ogni funzione torna una Promise.
   Nell'app di produzione questo è una tabella del database, con la stessa forma.

   Forma di una versione (una per Course, l'ultima in `latest`, tutte in `history`):
     { courseId, version, publishedAt, publishedBy,
       chapters: { <ssId>: { moduleId, title, sections, sims:[simId] } },
       mockups:  { <simId>: <mockup> },          ← condivisi tra i capitoli
       excluded: [ { ssId, title, reason } ] }
   ══════════════════════════════════════════════════════════════════════════════ */
(function () {
  var DB_NAME = 'aw_publications', DB_VER = 1, _dbp = null;
  function openDb() {
    if (_dbp) return _dbp;
    _dbp = new Promise(function (ok, ko) {
      if (!window.indexedDB) { ko(new Error('IndexedDB not available')); return; }
      var r = indexedDB.open(DB_NAME, DB_VER);
      r.onupgradeneeded = function () {
        var db = r.result;
        if (!db.objectStoreNames.contains('latest')) db.createObjectStore('latest', { keyPath: 'courseId' });
        if (!db.objectStoreNames.contains('history')) db.createObjectStore('history', { keyPath: ['courseId', 'version'] });
      };
      r.onsuccess = function () { ok(r.result); };
      r.onerror = function () { _dbp = null; ko(r.error); };
    });
    return _dbp;
  }
  function req(store, mode, fn) {
    return openDb().then(function (db) {
      return new Promise(function (ok, ko) {
        var tx = db.transaction(store, mode), out;
        var r = fn(tx.objectStore(store));
        if (r) r.onsuccess = function () { out = r.result; };
        tx.oncomplete = function () { ok(out); };
        tx.onerror = function () { ko(tx.error); };
        tx.onabort = function () { ko(tx.error); };
      });
    });
  }
  // Ultima versione pubblicata di ogni Course: { <courseId>: pub }. Mai lancia: {} se
  // IndexedDB manca o fallisce (chi impara vedrà "nessun capitolo pubblicato").
  // Edizione (2026-09-30, demo PackExpo): se la pagina ha caricato un file di contenuti
  // (`var AW_CONTENT = {tenantId, publications:{…}}`, scritto da "Export edition" dell'editor),
  // le pubblicazioni vengono SOLO da lì — niente IndexedDB, funziona su un PC qualunque anche
  // da file://. Senza quel file il comportamento è quello di sempre.
  window.awPubAll = function () {
    if (window.AW_CONTENT && window.AW_CONTENT.publications)
      return Promise.resolve(JSON.parse(JSON.stringify(window.AW_CONTENT.publications)));
    return req('latest', 'readonly', function (s) { return s.getAll(); })
      .then(function (arr) { var m = {}; (arr || []).forEach(function (p) { m[p.courseId] = p; }); return m; })
      .catch(function (e) { console.warn('[publications] read failed:', e); return {}; });
  };
  window.awPubLatest = function (courseId) {
    return req('latest', 'readonly', function (s) { return s.get(courseId); }).catch(function () { return null; });
  };
  window.awPubPut = function (pub) {
    return openDb().then(function (db) {
      return new Promise(function (ok, ko) {
        var tx = db.transaction(['latest', 'history'], 'readwrite');
        tx.objectStore('latest').put(pub);
        tx.objectStore('history').put(pub);
        tx.oncomplete = function () { ok(pub); };
        tx.onerror = function () { ko(tx.error); };
        tx.onabort = function () { ko(tx.error); };
      });
    });
  };
  // Fase 2 pezzo 3 (2026-09-29, BASE_VARIANTI_ACCESSI §4.3): `pubs` ora può contenere, oltre
  // alle pubblicazioni base (chiave = trackId puro), pubblicazioni per cliente (content-editor.html
  // §80/pubKey, chiave "trackId::tenantId", con `.tenantId`/`.trackId` propri sull'oggetto). Un
  // cliente con una pubblicazione propria per un Course la vede TUTTA INTERA al posto del base —
  // mai un mix lezione-per-lezione fra le due. `tenantId` è il TERZO parametro, opzionale: senza
  // di esso il comportamento resta quello di prima di oggi (solo pubblicazioni base), quindi ogni
  // chiamante che non lo passa non cambia risposta.
  function pubsResolvedForTenant(pubs, tenantId) {
    var byCourse = {};
    Object.keys(pubs || {}).forEach(function (k) {
      var p = pubs[k];
      if (!p.tenantId) byCourse[p.trackId || p.courseId] = p;   // prima passata: solo il base
    });
    if (tenantId) {
      Object.keys(pubs || {}).forEach(function (k) {
        var p = pubs[k];
        if (p.tenantId === tenantId) byCourse[p.trackId || p.courseId] = p;   // il cliente vince sul base
      });
    }
    return byCourse;
  }
  // Documento che lesson-shell.html sa leggere (stessa forma di awLessonDoc) costruito
  // dalla versione pubblicata, o null se il capitolo non è in nessuna versione.
  window.awPubLessonDoc = function (pubs, lessonId, tenantId) {
    var want = String(lessonId || '').toUpperCase();
    var byCourse = pubsResolvedForTenant(pubs, tenantId);
    var courses = Object.keys(byCourse);
    for (var i = 0; i < courses.length; i++) {
      var p = byCourse[courses[i]], chIds = Object.keys(p.chapters || {});
      for (var j = 0; j < chIds.length; j++) {
        if (chIds[j].toUpperCase() !== want) continue;
        var ch = p.chapters[chIds[j]], lib = {};
        (ch.sims || []).forEach(function (s) { if (p.mockups && p.mockups[s]) lib[s] = p.mockups[s]; });
        return {
          id: String(chIds[j]).toLowerCase(), moduleId: String(chIds[j]).toLowerCase(),
          version: p.version,
          meta: { groupId: String(ch.moduleId || '').toLowerCase(), trackId: p.trackId || p.courseId, editorStatus: 'published', publishedAt: p.publishedAt,
                  sections: ch.active || null },   // null = versione pubblicata prima del 25/09: tutte accese
          mockupLibrary: lib, sections: ch.sections
        };
      }
    }
    return null;
  };
  // Insieme dei capitoli pubblicati: { "OP-04.1": true, ... } (chiavi in maiuscolo).
  window.awPubLessonSet = function (pubs, tenantId) {
    var set = {};
    var byCourse = pubsResolvedForTenant(pubs, tenantId);
    Object.keys(byCourse).forEach(function (course) {
      Object.keys((byCourse[course] && byCourse[course].chapters) || {}).forEach(function (id) { set[id.toUpperCase()] = true; });
    });
    return set;
  };
})();

/* ══════════════════════════════════════════════════════════════════════════════
   PERIODO DI DISPONIBILITÀ   (2026-09-25, BASE_VARIANTI_ACCESSI §3.3-3.4, MODELLO_DOMINIO §4-5)

   Tre livelli, vince il più specifico, campo per campo (un override che fissa solo la data
   di fine eredita l'inizio dal livello sotto — è il caso della proroga di una persona):
     utente (proroga individuale) > sito (hypercare scaglionato) > region > cliente×training
   Dati scritti dal content editor (Autoware): `courseAccess[].availableFrom/Until/
   toolsAfterExpiry` e `accessOverrides[] {tenantId, courseId, target:{type,id}, availableFrom,
   availableUntil, reason}`. Date 'YYYY-MM-DD', fine INCLUSA. A scadenza non si cancella nulla:
   chi impara vede il training bloccato con un messaggio; glossario/KB seguono il flag.
   ══════════════════════════════════════════════════════════════════════════════ */
(function () {
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  window.awToday = today;
  // Chi sta guardando: utente del roster con lo stesso nome dell'utente loggato, il suo sito
  // (o il sito attivo), il cliente (nel prototipo il primo, uno solo reale), la region che
  // contiene quel sito.
  window.awLearnerContext = function (st) {
    st = st || {};
    var me = window.AW_USER && window.AW_USER.name;
    var users = (typeof window.awLoadUsers === 'function') ? window.awLoadUsers() : [];
    var u = users.filter(function (x) { return x.name === me; })[0] || null;
    var siteId = (u && u.siteId) || ((typeof window.awActiveSite === 'function') ? window.awActiveSite() : null);
    var tenantId = (st.tenants && st.tenants[0] && st.tenants[0].id) || null;
    var region = (st.regions || []).filter(function (r) { return r.tenantId === tenantId && (r.siteIds || []).indexOf(siteId) >= 0; })[0] || null;
    return { userId: u ? u.id : null, userName: me || null, siteId: siteId, tenantId: tenantId, regionId: region ? region.id : null };
  };
  // Periodo effettivo di un Course per un contesto {tenantId, regionId, siteId, userId}.
  window.awAccessWindow = function (st, courseId, ctx) {
    st = st || {}; ctx = ctx || {};
    var base = (st.courseAccess || []).filter(function (a) { return a.tenantId === ctx.tenantId && a.courseId === courseId; })[0] || null;
    var ov = st.accessOverrides || [];
    var pick = function (type, id) {
      if (!id) return null;
      return ov.filter(function (o) { return o.tenantId === ctx.tenantId && o.courseId === courseId && o.target && o.target.type === type && o.target.id === id; })[0] || null;
    };
    var chain = [['user', pick('user', ctx.userId)], ['site', pick('site', ctx.siteId)], ['region', pick('region', ctx.regionId)], ['client', base]];
    var from = null, until = null, fromSrc = null, untilSrc = null;
    chain.forEach(function (c) {
      var r = c[1]; if (!r) return;
      if (!from && r.availableFrom) { from = r.availableFrom; fromSrc = c[0]; }
      if (!until && r.availableUntil) { until = r.availableUntil; untilSrc = c[0]; }
    });
    var t = today(), status = 'open';
    if (from && t < from) status = 'notyet';
    else if (until && t > until) status = 'ended';
    var tools = (base && base.toolsAfterExpiry) || { glossary: true, knowledgeBase: true };
    return { status: status, from: from, until: until, fromSrc: fromSrc, untilSrc: untilSrc, hasAccess: !!base, tools: tools };
  };
  // Stato per chi impara ORA (usato da modules.html / lesson-shell.html / glossary.html).
  window.awAccessStatus = function (courseId) {
    // Edizione con file di contenuti: sempre aperto (nessuno stato editor da cui leggere periodi).
    if (window.AW_CONTENT) return { status: 'open', from: null, until: null, tools: { glossary: true, knowledgeBase: true } };
    var st = (typeof window.awEditorState === 'function') ? window.awEditorState() : null;
    if (!st) return { status: 'open', from: null, until: null, tools: { glossary: true, knowledgeBase: true } };
    return window.awAccessWindow(st, courseId, window.awLearnerContext(st));
  };
  // Il cliente di chi impara ORA, per scegliere quale pubblicazione mostrare (Fase 2 pezzo 3,
  // 2026-09-29) — stesso `awLearnerContext` di sopra, riusato invece di un secondo meccanismo.
  // null se non c'è stato editor in questo browser o nessun tenant riconosciuto: i chiamanti
  // trattano null come "nessun cliente" e ricadono sul base, comportamento invariato.
  window.awLearnerTenantId = function () {
    // Edizione: il cliente è quello dichiarato nel file di contenuti.
    if (window.AW_CONTENT) return window.AW_CONTENT.tenantId || null;
    var st = (typeof window.awEditorState === 'function') ? window.awEditorState() : null;
    if (!st) return null;
    return window.awLearnerContext(st).tenantId || null;
  };
  window.awFmtDay = function (iso) {
    if (!iso) return '';
    try { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return iso; }
  };
})();

/* ── Generic toast (shared) — usato dalle azioni riga della Trascrizione ── */
(function () {
  var el = null, timer = null;
  window.awToast = function (msg) {
    if (!el) { el = document.createElement('div'); el.className = 'aw-toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  };
})();

/* ── VIDEO section (shared): player + pannello Trascrizione ──────────────────
   Layout a due colonne (player a sinistra, trascrizione navigabile a destra).
   La trascrizione è un elenco verticale di righe (timecode + testo) raggruppate
   sotto intestazioni di capitolo. La riga corrispondente al tempo di riproduzione
   è evidenziata (accento magenta) e il pannello fa auto-scroll (sospeso se
   l'utente scrolla, ripristinabile con "torna al punto corrente" / toggle
   "Follow along"). Click su una riga o su un'intestazione → salto del video a
   quel timecode; la stessa sorgente di timecode alimenta anche i marcatori di
   capitolo sulla scrubber (.va-chaprail).
   Dati: i capitoli si leggono dai nodi nascosti #va-src .va-ch (titolo/tempo/
   narrazione, tradotti da applyLang). Le righe fini vengono dai cue del video se
   il modulo espone window.awVideoCues(lang) (OP-02 li ricava dai VTT/SRT reali),
   altrimenti si usa una riga per capitolo (la narrazione). La trascrizione e i CC
   del player restano indipendenti: condividono solo il dato grezzo per-lingua.
   Ogni riga espone Copy / Copia link / Salva tra le note (stub verso lo store
   condiviso awLoadNotes/awSaveNotes, campo aggiuntivo "videoRef") + termini di
   Glossary linkati (letti da GLOSSARY/GLOSSARY_NAMES, sola lettura).
   Contratto opzionale del modulo:
     window.awVideoTime()      → secondi correnti di riproduzione
     window.awVideoSeek(sec)   → porta il video/playhead a quel punto
     window.awVideoCues(lang)  → [{start,end,text}] righe fini (se disponibili) */
(function () {
  var chaps = [], lines = [], userScrolled = false, autoScrolling = false, _asT = null,
      _scrollBound = false, _lastCur = -1, _follow = true,
      _searchQ = '', _searchHits = [], _searchIdx = -1, _gterms = null, _gpopEl = null,
      _selectMode = false, _selected = {}, _expanded = {}, _lastExpCi = -1;

  function vLang() { return window.LANG || localStorage.getItem('aw_lang') || 'en'; }
  function vT(k) { var d = (typeof T !== 'undefined') && T[vLang()]; return (d && d[k]) || k; }
  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function toSec(mmss) { var p = (mmss || '0:0').split(':'); return (+p[0]) * 60 + (+p[1]); }
  function fmt(t) { t = Math.max(0, t | 0); var m = (t / 60) | 0, s = t % 60; return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
  function videoTime() { return (typeof window.awVideoTime === 'function') ? (window.awVideoTime() || 0) : 0; }
  function reduceMotion() { try { return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function totalDur() { return chaps.length ? chaps[chaps.length - 1].end : 0; }

  function readChaps() {
    var out = [];
    document.querySelectorAll('#page-video #va-src .va-ch').forEach(function (ch) {
      var tEl = ch.querySelector('.va-ch-time'), tiEl = ch.querySelector('.va-ch-title'),
          voEl = ch.querySelector('.va-ch-vo'), nEl = ch.querySelector('.va-ch-num');
      var tm = ((tEl ? tEl.textContent : '') || '').match(/(\d+):(\d+)/g) || [];
      var st = tm[0] ? toSec(tm[0]) : 0, en = tm[1] ? toSec(tm[1]) : st;
      out.push({ num: nEl ? nEl.textContent.trim() : '', title: tiEl ? tiEl.textContent.trim() : '',
                 vo: voEl ? voEl.textContent.trim() : '', start: st, end: en });
    });
    return out;
  }
  function chapIdxAt(t) { var idx = 0; for (var i = 0; i < chaps.length; i++) { if (t >= chaps[i].start) idx = i; } return idx; }

  // Il pannello non deve MAI far scrollare la pagina intera: la lista capitoli/righe è
  // vincolata (max-height sincronizzato via JS) all'altezza della colonna video (.va-main),
  // così solo l'elenco scrolla al suo interno — mai il documento — qualunque sia il numero
  // di capitoli aperti cumulativamente (vedi highlight()). Richiamata: da render() (anche mentre
  // la sezione Video è ancora display:none, es. al caricamento pagina → .va-main misura 0 in quel
  // momento, corretto poi da gs() via window.awVaSyncHeight quando si entra davvero nella sezione),
  // da un ResizeObserver su .va-main (resize finestra / aspect-ratio) e da un listener 'resize' di
  // scorta (il solo ResizeObserver non si è dimostrato affidabile su ogni resize in test headless).
  var _ro = null, _rzT = null;
  function syncTrHeight() {
    var tr = document.getElementById('va-tr');
    var main = document.querySelector('#page-video .va-main');
    var list = document.getElementById('va-tr-list');
    if (!list) return;
    var sum = document.querySelector('#page-video .va-tr-sum');
    var tools = document.querySelector('#page-video .va-tr-tools');
    var selbar = document.getElementById('va-tr-selbar');
    var chrome = (sum ? sum.offsetHeight : 0) + (tools ? tools.offsetHeight : 0) + ((selbar && !selbar.hidden) ? selbar.offsetHeight : 0);
    var target;
    if (tr && tr.classList.contains('is-expanded')) {
      // "finestra" espansa (vedi awVaExpandToggle): l'altezza segue quella del riquadro fluttuante
      // (86vh, stesso valore della regola CSS .va-tr.is-expanded), non più quella della colonna video.
      target = window.innerHeight * 0.86 - chrome;
    } else if (main) {
      target = main.offsetHeight - chrome;
    } else return;
    // height FISSA, non max-height: con max-height il pannello si accorciava/allungava assecondando
    // il contenuto (fino al tetto), e siccome .va-tr sta nella stessa riga grid di .va-main, la riga
    // (quindi tutta la sezione) seguiva a ruota — "si allunga leggermente quando apro i capitoli",
    // segnalato da Giulia. Con un'altezza fissa .va-tr non cambia MAI dimensione: il contenuto in
    // eccesso scrolla dentro, il resto della sezione resta immobile.
    list.style.height = Math.max(220, target) + 'px';
    if (!_ro && main && typeof ResizeObserver !== 'undefined') {
      _ro = new ResizeObserver(function () { syncTrHeight(); });
      _ro.observe(main);
      window.addEventListener('resize', function () { clearTimeout(_rzT); _rzT = setTimeout(syncTrHeight, 150); });
    }
  }

  // ── Espandi il pannello a "finestra" mobile (come le Sticky Notes di Windows: un riquadro più
  // grande e centrato, non a piena pagina) — utile per leggere la trascrizione più comodamente
  // senza dover rimpicciolire il video (richiesta Giulia 2026-07-18 quater). ──
  var _expandedPanel = false, _backdropEl = null;
  var ICO_EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';
  var ICO_COLLAPSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';
  function escCollapse(e) { if (e.key === 'Escape') expandToggle(); }
  function expandToggle() {
    var tr = document.getElementById('va-tr'); if (!tr) return;
    _expandedPanel = !_expandedPanel;
    tr.classList.toggle('is-expanded', _expandedPanel);
    var btn = document.getElementById('va-tr-expand');
    if (btn) {
      btn.innerHTML = _expandedPanel ? ICO_COLLAPSE : ICO_EXPAND;
      btn.setAttribute('aria-pressed', _expandedPanel ? 'true' : 'false');
      var lbl = vT(_expandedPanel ? 'video.collapse' : 'video.expandwin');
      btn.title = lbl; btn.setAttribute('aria-label', lbl);
    }
    if (_expandedPanel) {
      if (!_backdropEl) {
        _backdropEl = document.createElement('div');
        _backdropEl.className = 'va-tr-backdrop';
        _backdropEl.addEventListener('click', expandToggle);
        document.body.appendChild(_backdropEl);
      }
      document.addEventListener('keydown', escCollapse);
    } else if (_backdropEl) {
      _backdropEl.remove(); _backdropEl = null;
      document.removeEventListener('keydown', escCollapse);
    }
    syncTrHeight();
  }

  // 12/10 — modalità "testo del video" (additiva): se il modulo espone window.awVideoOutline(lang) →
  // {chapters:[{num,title,start,end,rows:[{start,end,kind,label,text}]}]}, il pannello non è una
  // trascrizione di un parlato ma la scaletta del video (cartello, voci, key message), una riga per
  // voce, ognuna col suo istante. Usata da lesson-shell (video muti della fiera); OP-01/02/03 non la
  // espongono e restano identici. Ricerca, selezione → nota, .srt e barra dei capitoli lavorano sulle
  // stesse righe.
  var _ol = false;
  function buildOutline() {
    var o = (typeof window.awVideoOutline === 'function') ? window.awVideoOutline(vLang()) : null;
    if (!o || !o.chapters || !o.chapters.length) return false;
    chaps = []; lines = [];
    o.chapters.forEach(function (c, ci) {
      chaps.push({ num: c.num || '', title: c.title || '', vo: '', start: c.start, end: c.end,
                   cstart: (c.rows && c.rows.length) ? c.rows[0].start : null });
      (c.rows || []).forEach(function (r) {
        lines.push({ start: r.start, end: r.end, chap: ci, kind: r.kind || 'item', label: r.label || '', body: r.text || '',
                     text: (r.label ? r.label + ' — ' : '') + (r.text || '') });
      });
    });
    return true;
  }

  function buildLines() {
    _ol = buildOutline();
    if (_ol) return;
    chaps = readChaps();
    var cues = (typeof window.awVideoCues === 'function') ? window.awVideoCues(vLang()) : null;
    if (cues && cues.length) lines = cues.map(function (c) { return { start: c.start, end: c.end, text: c.text }; });
    else lines = chaps.map(function (c) { return { start: c.start, end: c.end, text: c.vo }; });
    // Per ogni capitolo, il momento in cui il suo testo VISIBILE inizia davvero = inizio della sua
    // prima battuta (non il marcatore .ts, che può cadere in mezzo alla battuta del capitolo
    // precedente quando una sezione ne raggruppa più d'una). Serve a far avanzare l'evidenziazione
    // "corrente" solo quando parte il testo di quel capitolo, non prima (richiesta Giulia 2026-07-23:
    // "mentre leggo la sezione 1 si illumina già la 2"). I capitoli senza battute proprie restano
    // cstart=null → non diventano mai "correnti" (li si salta).
    chaps.forEach(function (ch, ci) {
      var next = chaps[ci + 1] ? chaps[ci + 1].start : Infinity;
      var own = lines.filter(function (ln) { return ln.start >= ch.start && ln.start < next; });
      ch.cstart = own.length ? own[0].start : null;
    });
  }
  // Capitolo "corrente" in base al testo effettivamente in riproduzione (cstart), NON al marcatore
  // di inizio capitolo. Prima del primo contenuto (t < prima cstart) → primo capitolo non vuoto.
  function curChapIdx(t) {
    var idx = -1;
    for (var i = 0; i < chaps.length; i++) { if (chaps[i].cstart != null && t >= chaps[i].cstart) idx = i; }
    if (idx < 0) { for (var j = 0; j < chaps.length; j++) { if (chaps[j].cstart != null) { idx = j; break; } } }
    return idx < 0 ? 0 : idx;
  }

  // ── Glossary term linking (sola lettura di GLOSSARY/GLOSSARY_NAMES — nessuna duplicazione dati) ──
  // Language-aware: linka sia il termine EN sia la sua traduzione nella lingua corrente
  // (GLOSSARY_NAMES), così gli stessi concetti si evidenziano in tutte le lingue.
  // I termini con g.noLink (es. i tenant Production/Stage) non auto-linkano: nelle
  // trascrizioni "production"/"stage" non indicano mai il tenant → falso positivo.
  // Cache per-lingua (si ricostruisce al cambio lingua).
  function glossary() {
    var lang = vLang();
    if (_gterms && _gterms.lang === lang) return _gterms;
    var list = (typeof GLOSSARY !== 'undefined') ? GLOSSARY : [];
    var names = (typeof GLOSSARY_NAMES !== 'undefined') ? GLOSSARY_NAMES : {};
    var esc2 = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    var map = {}, forms = [];
    list.forEach(function (g) {
      if (g.noLink) return;
      var surf = [g.term];
      var tr = names[g.term] && names[g.term][lang];
      if (tr && tr !== g.term) surf.push(tr);
      surf.forEach(function (s) {
        var key = s.toLowerCase();
        if (!map[key]) { map[key] = g; forms.push(s); }
      });
    });
    forms.sort(function (a, b) { return b.length - a.length; });      // frasi lunghe prima
    // \b funziona solo su parole ASCII → i termini CJK (zh) vanno matchati senza word-boundary
    var asc = forms.filter(function (s) { return /[A-Za-z0-9]/.test(s); });
    var cjk = forms.filter(function (s) { return !/[A-Za-z0-9]/.test(s); });
    var parts = [];
    if (asc.length) parts.push('\\b(?:' + asc.map(esc2).join('|') + ')\\b');
    if (cjk.length) parts.push('(?:' + cjk.map(esc2).join('|') + ')');
    _gterms = {
      lang: lang,
      re: parts.length ? new RegExp('(' + parts.join('|') + ')', 'gi') : null,
      map: map
    };
    return _gterms;
  }
  function linkGlossary(text) {
    var g = glossary(), safe = esc(text);
    if (!g.re) return safe;
    return safe.replace(g.re, function (m) {
      if (!g.map[m.toLowerCase()]) return m;
      return '<span class="va-gterm" tabindex="0" data-term="' + esc(m) + '">' + m + '</span>';
    });
  }
  var _gHideT = null;
  function gpop() {
    if (_gpopEl) return _gpopEl;
    _gpopEl = document.createElement('div'); _gpopEl.className = 'va-gpop'; _gpopEl.setAttribute('role', 'tooltip');
    // il mouse deve poter transitare dal termine al popover (per raggiungere il link) senza che si chiuda
    _gpopEl.addEventListener('mouseenter', function () { clearTimeout(_gHideT); });
    _gpopEl.addEventListener('mouseleave', hideGtermSoon);
    document.body.appendChild(_gpopEl);
    return _gpopEl;
  }
  function showGterm(el) {
    var g = glossary().map[(el.dataset.term || '').toLowerCase()]; if (!g) return;
    clearTimeout(_gHideT);
    var def = g[vLang()] || g.en, pop = gpop();
    pop.innerHTML = '<div class="va-gpop-term">' + esc(g.term) + '</div>' +
                     '<div class="va-gpop-def">' + esc(def) + '</div>' +
                     '<a class="va-gpop-link" href="glossary.html?q=' + encodeURIComponent(g.term) + '">' + esc(vT('video.gloss.open')) + '</a>';
    pop.classList.add('show');
    var r = el.getBoundingClientRect(), pr = pop.getBoundingClientRect();
    var left = Math.max(8, Math.min(window.innerWidth - pr.width - 8, r.left));
    var top = r.top - pr.height - 10;
    if (top < 8) top = r.bottom + 10;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }
  // chiusura ritardata: dà il tempo al mouse di raggiungere il popover (link "Vedi nel Glossario")
  function hideGtermSoon() { clearTimeout(_gHideT); _gHideT = setTimeout(function () { if (_gpopEl) _gpopEl.classList.remove('show'); }, 200); }
  function gotoGlossary(term) { location.href = 'glossary.html?q=' + encodeURIComponent(term); }

  // ── My Notes (stub via store condiviso): usato dal salvataggio multi-riga (vedi saveSelected) ──
  function moduleMeta() { return { id: window.MODID || (document.title || '').slice(0, 5) || 'MOD', label: window.MODULE_LABEL || document.title || 'Module' }; }

  // ── Esporta l'intero SRT della lingua corrente ──
  function pad(n, w) { n = String(Math.max(0, Math.round(n))); while (n.length < w) n = '0' + n; return n; }
  function fmtSRT(t) {
    t = Math.max(0, t || 0);
    var h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = Math.floor(t % 60), ms = Math.round((t - Math.floor(t)) * 1000);
    return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ',' + pad(ms, 3);
  }
  function downloadSRT() {
    if (!lines.length) return;
    if (!window.confirm(vT('video.srt.confirm'))) return;
    var body = lines.map(function (ln, i) {
      var end = (i + 1 < lines.length) ? lines[i + 1].start : (ln.end || ln.start + 4);
      return (i + 1) + '\n' + fmtSRT(ln.start) + ' --> ' + fmtSRT(end) + '\n' + ln.text + '\n';
    }).join('\n');
    var blob = new Blob([body], { type: 'text/plain' });
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = (moduleMeta().id || 'transcript') + '-' + vLang() + '.srt';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    window.awToast(vT('video.act.srtdone'));
  }

  // ── Seleziona più righe e salvale come un'unica nota ──
  function toggleSelect(row, ln) {
    if (_selected[ln.start]) delete _selected[ln.start]; else _selected[ln.start] = ln;
    row.classList.toggle('is-selected', !!_selected[ln.start]);
    updateSelectUI();
  }
  function updateSelectUI() {
    var bar = document.getElementById('va-tr-selbar'); if (!bar) return;
    bar.hidden = !_selectMode;
    var n = Object.keys(_selected).length;
    var cnt = document.getElementById('va-tr-selcount'); if (cnt) cnt.textContent = n;
    var save = document.getElementById('va-tr-selsave'); if (save) save.disabled = n === 0;
    var list = document.getElementById('va-tr-list'); if (list) list.classList.toggle('sel-mode', _selectMode);
    var total = list ? list.querySelectorAll('.va-tr-line').length : 0;
    var allBtn = document.getElementById('va-tr-selall');
    if (allBtn) {
      var allOn = total > 0 && n === total;
      allBtn.textContent = vT(allOn ? 'video.select.none' : 'video.select.all');
      allBtn.setAttribute('aria-pressed', allOn ? 'true' : 'false');
    }
  }
  // "Seleziona tutto": seleziona ogni riga renderizzata (anche se il suo capitolo è chiuso/collassato)
  // — usa i dati già calcolati e appesi alla riga in render() (`r._lnData`), niente ricalcolo.
  // Se tutte le righe sono già selezionate, il bottone (stesso, riusa il testo) deseleziona invece.
  function selectAllLines() {
    var list = document.getElementById('va-tr-list'); if (!list) return;
    var rows = list.querySelectorAll('.va-tr-line');
    var total = rows.length, n = Object.keys(_selected).length;
    var turnOn = !(total > 0 && n === total);
    _selected = {};
    rows.forEach(function (r) {
      r.classList.toggle('is-selected', turnOn);
      if (turnOn && r._lnData) _selected[r._lnData.start] = r._lnData;
    });
    updateSelectUI();
  }
  function saveSelected() {
    var keys = Object.keys(_selected).map(Number).sort(function (a, b) { return a - b; });
    if (!keys.length) return;
    var mm = moduleMeta(), notes = (typeof window.awLoadNotes === 'function') ? window.awLoadNotes() : [], now = new Date();
    var body = keys.map(function (t) { return '[' + fmt(t) + '] ' + _selected[t].text; }).join('\n');
    var note = { id: Date.now(), text: body, category: 'Appunto', live: false, module: mm.label,
      time: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) + ' - ' + now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
      videoRef: { mod: mm.id, t: keys[0], lines: keys } };
    notes.unshift(note);
    if (typeof window.awSaveNotes === 'function') window.awSaveNotes(notes);
    if (typeof window.updateBadge === 'function') window.updateBadge();
    window.awToast(vT('video.act.notesaved'));
    window.awVaSelectMode(false);
  }

  function keyAct(t) { return function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); seekTo(t); } }; }

  function render() {
    var list = document.getElementById('va-tr-list'); if (!list) return;
    userScrolled = false; _lastCur = -1;
    var jb = document.getElementById('va-tr-jump'); if (jb) jb.hidden = true;
    buildLines();
    list.innerHTML = '';
    chaps.forEach(function (ch, ci) {
      // istante a cui saltare/etichettare = inizio del testo reale del capitolo (prima battuta),
      // non il marcatore .ts (che può cadere a metà della battuta del capitolo precedente).
      var seekT = (ch.cstart != null) ? ch.cstart : ch.start;
      var h = document.createElement('div');
      h.className = 'va-tr-chap'; h.setAttribute('role', 'button'); h.tabIndex = 0; h.dataset.t = seekT;
      h.innerHTML = (_ol ? '<span class="va-tr-chap-n' + (ch.num ? '' : ' is-blank') + '">' + esc(ch.num) + '</span>'
                         : '<span class="va-tr-chap-n">' + (ci + 1) + '</span>') +
                    '<span class="va-tr-chap-t">' + esc(ch.title) + '</span>' +
                    '<span class="va-tr-chap-st"></span>' +
                    '<button type="button" class="va-tr-chap-toggle" aria-expanded="false" aria-label="' + esc(vT('video.chap.toggle')) + '" title="' + esc(vT('video.chap.toggle')) + '">' +
                      '<svg class="va-tr-chap-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
                    '</button>';
      h.addEventListener('click', function () { seekTo(seekT); });
      h.addEventListener('keydown', keyAct(seekT));
      h.querySelector('.va-tr-chap-toggle').addEventListener('click', function (e) {
        e.stopPropagation();
        _expanded[ci] = !_expanded[ci];
        applyExpandVisibility();
      });
      // ogni capitolo (titolo + sue righe) è raccolto in un blocco (.va-tr-group): permette di dare
      // ombra/tinta coerenti con lo stato (upcoming/current/done) all'INTERO raggruppamento, non solo
      // al titolo, così i confini tra capitoli si leggono a colpo d'occhio (richiesta Giulia 2026-07-17).
      var grp = document.createElement('div');
      grp.className = 'va-tr-group'; grp.dataset.chap = ci;
      grp.appendChild(h);
      var next = chaps[ci + 1] ? chaps[ci + 1].start : Infinity;
      // Un solo blocco di testo per capitolo (NON una riga per ogni cue del VTT): più cue reali
      // che cadono nello stesso capitolo vengono uniti in un unico paragrafo continuo, come già
      // avviene "naturalmente" in OP-01/OP-03 (narrazione singola, senza cue fini). Prima ogni cue
      // aveva la sua riga con bordo/evidenziazione propria: con un video reale (OP-02) questo
      // introduceva più "sotto-capitoli" con evidenziazioni che si spostavano da una riga all'altra
      // — letto da Giulia come "movimento" fastidioso e non voluto (2026-07-18 ter). Il dato fine
      // per-cue resta comunque disponibile in `lines`/`buildLines()` per l'export SRT (downloadSRT),
      // che continua quindi a esportare i timestamp reali riga per riga anche se qui è collassato.
      if (_ol) {
        // testo del video: una riga per voce (cartello, voci, key message), ognuna col suo istante
        lines.filter(function (ln) { return ln.chap === ci; }).forEach(function (ln) {
          var r = document.createElement('div');
          r.className = 'va-tr-line va-ol-' + ln.kind; r.dataset.t = ln.start; r.dataset.chap = ci;
          r.innerHTML = '<span class="va-tr-sel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>' +
                        '<button type="button" class="va-tr-tc" title="' + esc(vT('video.jumpto')) + '" aria-label="' + esc(vT('video.jumpto')) + ' ' + fmt(ln.start) + '">' + fmt(ln.start) + '</button>' +
                        '<span class="va-ol-b">' + (ln.label ? '<span class="va-ol-lb">' + esc(ln.label) + '</span>' : '') +
                        '<span class="va-tr-tx">' + linkGlossary(ln.body) + '</span></span>';
          r.addEventListener('click', function (e) {
            if (e.target.closest('.va-gterm')) return;
            if (_selectMode) { toggleSelect(r, ln); return; }
          });
          r.querySelector('.va-tr-tc').addEventListener('click', function (e) { e.stopPropagation(); seekTo(ln.start); });
          r._lnData = ln;
          grp.appendChild(r);
        });
        list.appendChild(grp);
        return;
      }
      var chapLines = lines.filter(function (ln) { return ln.start >= ch.start && ln.start < next; });
      if (chapLines.length) {
        var mergedLn = { start: seekT, text: chapLines.map(function (c) { return c.text; }).join(' ') };
        var r = document.createElement('div');
        r.className = 'va-tr-line'; r.dataset.t = seekT; r.dataset.chap = ci;
        r.innerHTML = '<span class="va-tr-sel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>' +
                      '<button type="button" class="va-tr-tc" title="' + esc(vT('video.jumpto')) + '" aria-label="' + esc(vT('video.jumpto')) + ' ' + fmt(seekT) + '">' + fmt(seekT) + '</button>' +
                      '<span class="va-tr-tx">' + chapLines.map(function (c) { return linkGlossary(c.text); }).join(' ') + '</span>';
        r.addEventListener('click', function (e) {
          if (e.target.closest('.va-gterm')) return;
          if (_selectMode) { toggleSelect(r, mergedLn); return; }
          // click sul resto della riga: solo lettura/selezione testo, nessuna azione sul video
        });
        r.querySelector('.va-tr-tc').addEventListener('click', function (e) { e.stopPropagation(); seekTo(seekT); });
        r._lnData = mergedLn; // riusato da "Select all" (awVaSelectAll) per selezionare ogni riga senza doverla ricalcolare
        grp.appendChild(r);
      }
      list.appendChild(grp);
    });
    // 12/10: legato all'ELEMENTO, non una volta per pagina: se il pannello viene ricostruito (lesson-shell lo
    // rifà al cambio lingua) la lista nuova non aveva più scroll/"torna al punto" né il glossario al passaggio.
    _scrollBound = !!list._awBound; list._awBound = true;
    if (!_scrollBound) {
      list.addEventListener('scroll', function () {
        if (autoScrolling || !_follow) return;
        userScrolled = true;
        var b = document.getElementById('va-tr-jump'); if (b) b.hidden = false;
      });
      list.addEventListener('mouseover', function (e) { var t = e.target.closest('.va-gterm'); if (t) showGterm(t); });
      list.addEventListener('mouseout', function (e) { var t = e.target.closest('.va-gterm'); if (t) hideGtermSoon(); });
      list.addEventListener('focusin', function (e) { var t = e.target.closest('.va-gterm'); if (t) showGterm(t); });
      list.addEventListener('focusout', function (e) { var t = e.target.closest('.va-gterm'); if (t) hideGtermSoon(); });
      list.addEventListener('click', function (e) { var t = e.target.closest('.va-gterm'); if (t) gotoGlossary(t.dataset.term); });
      _scrollBound = true;
    }
    buildRail();
    // capitoli chiusi di default (solo titoli): il primo si apre SUBITO (vedi highlight(), _lastExpCi
    // parte da -1 apposta per far scattare l'espansione al primissimo render), i successivi si aprono
    // via cumulo mano a mano che la riproduzione li raggiunge, o manualmente col chevron.
    _expanded = {};
    applyExpandVisibility();
    _lastExpCi = -1;
    highlight(videoTime());
    syncTrHeight();
    if (_searchQ) doSearch(_searchQ);
    _selected = {}; updateSelectUI();
  }

  function applyExpandVisibility() {
    var list = document.getElementById('va-tr-list'); if (!list) return;
    list.querySelectorAll('.va-tr-line').forEach(function (r) { r.style.display = _expanded[+r.dataset.chap] ? '' : 'none'; });
    list.querySelectorAll('.va-tr-chap').forEach(function (h, i) {
      var open = !!_expanded[i];
      h.classList.toggle('is-open', open);
      var tb = h.querySelector('.va-tr-chap-toggle'); if (tb) tb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ── Marcatori di capitolo sulla scrubber (stessa sorgente timecode della trascrizione) ──
  function buildRail() {
    var rail = document.getElementById('va-chaprail'); if (!rail) return;
    rail.innerHTML = '';
    var total = totalDur() || 1;
    chaps.forEach(function (ch, i) {
      var segEnd = (i + 1 < chaps.length) ? chaps[i + 1].start : ch.end;
      var w = Math.max(0, (segEnd - ch.start) / total * 100);
      var seg = document.createElement('button');
      seg.type = 'button'; seg.className = 'va-chaprail-seg'; seg.style.width = w + '%';
      seg.title = ch.num + ' · ' + ch.title;
      seg.setAttribute('aria-label', ch.num + ' ' + ch.title);
      seg.addEventListener('click', function () { seekTo(ch.start); });
      rail.appendChild(seg);
    });
    var fill = document.createElement('div'); fill.className = 'va-chaprail-fill'; fill.id = 'va-chaprail-fill';
    rail.appendChild(fill);
    updateRail(videoTime());
  }
  function updateRail(t) {
    var fill = document.getElementById('va-chaprail-fill'); if (!fill) return;
    var total = totalDur() || 1;
    fill.style.width = Math.max(0, Math.min(100, t / total * 100)) + '%';
    var rail = document.getElementById('va-chaprail'), ci = curChapIdx(t);
    if (rail) rail.querySelectorAll('.va-chaprail-seg').forEach(function (seg, i) {
      seg.classList.toggle('is-done', i < ci); seg.classList.toggle('is-current', i === ci);
    });
  }

  function updateSumCount(ci) {
    var b = document.getElementById('va-tr-sum-count'); if (!b) return;
    b.textContent = ci + '/' + chaps.length;
    b.classList.toggle('is-done', ci >= chaps.length);
  }

  function highlight(t) {
    updateRail(t);
    var list = document.getElementById('va-tr-list'); if (!list) return;
    var rows = list.querySelectorAll('.va-tr-line'), curLine = -1;
    var ci = curChapIdx(t);
    // riga corrente = quella del capitolo corrente (le righe hanno dataset.chap = indice capitolo);
    // così l'evidenziazione segue il capitolo del testo in riproduzione, non il marcatore .ts.
    if (_ol) rows.forEach(function (r, i) { if (t >= +r.dataset.t) curLine = i; });   // testo del video: la voce in corso
    else rows.forEach(function (r, i) { if (+r.dataset.chap === ci) curLine = i; });
    updateSumCount(t >= totalDur() ? chaps.length : ci);
    // Accordion cumulativo: ogni capitolo raggiunto dalla riproduzione resta aperto (non si
    // richiude più) così il testo già letto scorre leggibile fino all'ultimo capitolo. Il pannello
    // non per questo cresce oltre il video: l'altezza è vincolata da syncTrHeight(), quindi qui
    // scrolla solo la lista interna, mai la pagina (vedi commento su syncTrHeight più sopra).
    if (ci !== _lastExpCi) {
      for (var k = 0; k <= ci; k++) _expanded[k] = true;
      applyExpandVisibility();
      _lastExpCi = ci;
    }
    // Niente più "riga già ascoltata" sbiadita (era `is-past`): con una riga sola per capitolo
    // (vedi render()) sbiadire il testo dei capitoli passati si sommava alla tinta di sfondo
    // "done" e rendeva il testo poco leggibile al rileggere — segnalato da Giulia (2026-07-18 ter).
    // Lo stato "completato" resta comunicato solo dall'header del capitolo (badge/etichetta), il
    // testo del corpo mantiene sempre piena leggibilità.
    rows.forEach(function (r, i) {
      var on = i === curLine;
      r.classList.toggle('is-current', on);
      if (on) r.setAttribute('aria-current', 'true'); else r.removeAttribute('aria-current');
    });
    var heads = list.querySelectorAll('.va-tr-chap');
    heads.forEach(function (h, i) {
      h.classList.remove('is-done', 'is-current', 'is-upcoming');
      var grp = h.parentElement; if (grp) grp.classList.remove('is-done', 'is-current', 'is-upcoming');
      var st = h.querySelector('.va-tr-chap-st');
      var state = (i < ci) ? 'is-done' : (i === ci) ? 'is-current' : 'is-upcoming';
      h.classList.add(state); if (grp) grp.classList.add(state);
      if (i < ci) { if (st) st.textContent = vT('video.st.done'); }
      else if (i === ci) { if (st) st.textContent = vT('video.st.now'); }
      else { if (st) st.textContent = fmt(chaps[i] ? (chaps[i].cstart != null ? chaps[i].cstart : chaps[i].start) : 0); }
    });
    // auto-scroll solo al cambio di riga corrente (evita jitter ad ogni timeupdate), solo se il follow è attivo
    if (curLine >= 0 && curLine !== _lastCur && !userScrolled && _follow) {
      var row = rows[curLine];
      autoScrolling = true;
      // row.offsetTop è relativo al più vicino antenato POSIZIONATO (.va-tr, essendo .va-tr-list
      // e .va-tr-group entrambi position:static) e NON alla lista scrollabile: usarlo direttamente
      // sballava il centraggio di ~140px (l'altezza di sum+tools sopra la lista) — bug reale dietro
      // al "non sembra mai centrato" segnalato da Giulia. getBoundingClientRect() è indipendente
      // dalla catena di offsetParent e dà la posizione REALE della riga dentro il contenuto scrollato.
      var rowRect = row.getBoundingClientRect(), listRect = list.getBoundingClientRect();
      var rowTopInList = (rowRect.top - listRect.top) + list.scrollTop;
      list.scrollTo({ top: rowTopInList - list.clientHeight / 2 + row.offsetHeight / 2, behavior: reduceMotion() ? 'auto' : 'smooth' });
      clearTimeout(_asT); _asT = setTimeout(function () { autoScrolling = false; }, 500);
    }
    _lastCur = curLine;
  }

  function seekTo(t) {
    if (typeof window.awVideoSeek === 'function') window.awVideoSeek(t);
    userScrolled = false;
    var jb = document.getElementById('va-tr-jump'); if (jb) jb.hidden = true;
    highlight(t);
  }

  // ── Ricerca nella trascrizione (filtra/evidenzia le righe, salta tra le occorrenze) ──
  function doSearch(q) {
    _searchQ = (q || '').trim();
    var list = document.getElementById('va-tr-list'); if (!list) return;
    var rows = list.querySelectorAll('.va-tr-line'), ql = _searchQ.toLowerCase();
    _searchHits = [];
    rows.forEach(function (r) {
      var txt = (r.querySelector('.va-tr-tx').textContent || '').toLowerCase();
      var hit = ql && txt.indexOf(ql) !== -1;
      r.classList.toggle('is-hit', !!hit);
      r.classList.toggle('is-dim', !!ql && !hit);
      r.classList.remove('is-hit-cur');
      if (hit) { _searchHits.push(r); _expanded[+r.dataset.chap] = true; } // il risultato deve essere visibile anche se il capitolo era chiuso
    });
    if (_searchHits.length) applyExpandVisibility();
    _searchIdx = _searchHits.length ? 0 : -1;
    if (_searchIdx >= 0) _searchHits[0].classList.add('is-hit-cur');
    updateSearchUI();
  }
  function focusHit(i) {
    _searchHits.forEach(function (r) { r.classList.remove('is-hit-cur'); });
    var r = _searchHits[i]; if (!r) return;
    r.classList.add('is-hit-cur');
    r.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
  }
  function updateSearchUI() {
    var cnt = document.getElementById('va-tr-count');
    if (cnt) {
      if (!_searchQ) { cnt.hidden = true; cnt.classList.remove('is-empty'); }
      else if (!_searchHits.length) { cnt.hidden = false; cnt.classList.add('is-empty'); cnt.textContent = vT('video.search.none'); }
      else { cnt.hidden = false; cnt.classList.remove('is-empty'); cnt.textContent = (_searchIdx + 1) + ' / ' + _searchHits.length; }
    }
    var nb = document.getElementById('va-tr-next'), pb = document.getElementById('va-tr-prev'), dis = _searchHits.length < 2;
    if (nb) nb.disabled = dis; if (pb) pb.disabled = dis;
  }

  window.awVaBuild = render;                               // (ri)costruisce la trascrizione
  window.awVaSyncHeight = syncTrHeight;                    // richiamata da gs() quando si entra nella sezione Video (.va-main è 0 finché la sezione è display:none)
  window.awVaRefresh = render;                             // compat: chiamato da applyLang al cambio lingua
  window.awVaProgress = function (sec) { highlight(sec); };// aggiorna la riga corrente dal player
  window.awVaJump = function () {                          // "torna al punto corrente" (compare quando si scrolla manualmente lontano dalla riga in corso)
    userScrolled = false; _lastCur = -1;
    var jb = document.getElementById('va-tr-jump'); if (jb) jb.hidden = true;
    highlight(videoTime());
  };
  window.awVaSearch = doSearch;
  window.awVaSearchNext = function () { if (!_searchHits.length) return; _searchIdx = (_searchIdx + 1) % _searchHits.length; focusHit(_searchIdx); updateSearchUI(); seekTo(+_searchHits[_searchIdx].dataset.t); };
  window.awVaSearchPrev = function () { if (!_searchHits.length) return; _searchIdx = (_searchIdx - 1 + _searchHits.length) % _searchHits.length; focusHit(_searchIdx); updateSearchUI(); seekTo(+_searchHits[_searchIdx].dataset.t); };
  window.awVaDownloadSRT = downloadSRT;
  window.awVaSelectMode = function (on) {                  // modalità "seleziona più righe da salvare come nota"
    _selectMode = (typeof on === 'boolean') ? on : !_selectMode;
    if (!_selectMode) {
      var list = document.getElementById('va-tr-list');
      if (list) list.querySelectorAll('.va-tr-line.is-selected').forEach(function (r) { r.classList.remove('is-selected'); });
      _selected = {};
    }
    var btn = document.getElementById('va-tr-selbtn'); if (btn) btn.setAttribute('aria-pressed', _selectMode ? 'true' : 'false');
    updateSelectUI();
  };
  window.awVaSaveSelected = saveSelected;
  window.awVaSelectAll = selectAllLines;
  window.awVaExpandToggle = expandToggle;
  // no-op di compatibilità per eventuali handler legacy della vecchia striscia a chip
  window.awVaSelect = function () {};
  window.awVaScroll = function () {};

  // deep-link ?t=NN: seek automatico al timecode indicato (generato da "Copy link")
  document.addEventListener('DOMContentLoaded', function () {
    var m = location.search.match(/[?&]t=(\d+(?:\.\d+)?)/);
    if (m && document.getElementById('page-video')) {
      var apply = function () { seekTo(+m[1]); };
      setTimeout(apply, 300);
    }
  });
})();

/* ══════════════════════════════════════════════════════════════════════════════
   EDIZIONE (2026-09-30, demo PackExpo)
   Chiamata da `content.js` (Export edition del content editor), caricato DOPO shared.js e
   translations.js. Sostituisce gli elenchi scritti nel codice (OP-01…07, SU, "TilliT Operator
   Training") con il catalogo pubblicato: il learner vede SOLO i training del file.
   Senza content.js non viene mai chiamata → comportamento invariato.
   `edition.js` (opzionale, prima di content.js): var AW_EDITION = { id, menu:{notes,kb,dashboard,editor} }.
   ══════════════════════════════════════════════════════════════════════════════ */
window.awApplyEdition = function () {
  var C = window.AW_CONTENT; if (!C || !C.catalog) return;
  var trs = C.catalog.trainings || [], tr = trs[0] || { id: 'X', label: 'Training', lessons: [] };
  window.AW_EDITION_TRAINING = tr;
  // 16/10: il nome del corso si legge nella lingua scelta (PKX_DICT arriva dopo, quindi si risolve a ogni lettura)
  (function () { var raw = tr.label; Object.defineProperty(tr, 'label', { configurable: true, enumerable: true, get: function () { return window.awDictT ? awDictT(raw) : raw; } }); })();
  // Una voce per LEZIONE: il progresso (aw_progress / aw_sect) è salvato per id di lezione.
  // 09/10: titoli "vivi" — ogni lettura passa dal dizionario delle frasi (awDictT) nella lingua del momento.
  function dyn(o, k, raw) { Object.defineProperty(o, k, { enumerable: true, configurable: true, get: function () { return window.awDictT ? window.awDictT(raw) : raw; } }); return o; }
  // 14/10: sezioni e minuti di ogni capitolo calcolati come in lesson-shell (SECTS in boot(), buildStepDefs):
  // prima Home/Library dicevano "~6 min" e 6 passi con Video per tutti, la lezione altri numeri.
  var pubs = (C.publications && C.publications[tr.id] && C.publications[tr.id].chapters) || {};
  function plan(id) {
    var ch = pubs[id] || {}, S = ch.sections || {}, on = function (k) { return !Array.isArray(ch.active) || ch.active.indexOf(k) >= 0; };
    var vid = (typeof PKX_VIDEO !== 'undefined' && PKX_VIDEO[id]) || null, vch = (S.video && S.video.chapters) || [];
    var pr = S.practice || {}, nP = (pr.steps || []).length + ((pr.sequence && (pr.sequence.items || []).length >= 2) ? 1 : 0) + ((pr.scenario && (pr.scenario.options || []).length) ? 1 : 0);
    var nC = (S.concepts || []).length, nQ = ((S.quiz || {}).questions || []).length, sects = [];
    if (on('intro')) sects.push('intro');
    if (on('video') && (vid || vch.length)) sects.push('video');
    if (on('concepts') && nC) sects.push('concepts');
    if (on('practice') && nP) sects.push('practice');
    if (on('quiz') && nQ) sects.push('quiz');
    if (on('completion')) sects.push('completion');
    return { sects: sects, mins: function () {
      var L = window.LANG || 'en', vSec = vch.reduce(function (mx, c) { return Math.max(mx, c.timestampSeconds || 0); }, 0);
      if (vid) vSec = ((vid.text && (vid.text[vid.files && vid.files[L] ? L : 'en'])) || {}).duration || vSec;
      var m = { intro: 1, video: vSec ? Math.max(1, Math.ceil(vSec / 60)) : 3, concepts: Math.max(2, nC), practice: Math.max(2, nP), quiz: Math.max(2, nQ), completion: 0 };
      return sects.reduce(function (s, k) { return s + (m[k] || 0); }, 0);
    } };
  }
  window.AW_MODULES = (tr.lessons || []).map(function (l, k) {
    // getter: pkx_video.js (PKX_VIDEO) può arrivare dopo content.js
    // 16/10 notte (Giulia): a schermo i capitoli hanno il numero pieno (1, 2, 3, 4), non l'id interno (PKX-00.1):
    // `num` resta l'id (è la chiave di note e progressi), `disp` è quello che si mostra (awChapNo/awChapLabel).
    // 16/10 (Giulia): torna la sigla, col numero giusto → PKX-01…PKX-04 (`pos` = 1, 2… per "Chapter 1" e l'icona)
    var o = dyn({ id: l.id, num: l.id, pos: k + 1, disp: (/^[A-Za-z]+-/.test(l.id) ? l.id.split('-')[0] + '-' : '') + (k < 9 ? '0' : '') + (k + 1), href: 'lesson-shell.html?lesson=' + encodeURIComponent(l.id) }, 'title', l.title);
    Object.defineProperty(o, 'sects', { enumerable: true, configurable: true, get: function () { return plan(l.id).sects; } });
    Object.defineProperty(o, 'mins', { enumerable: true, configurable: true, get: function () { return plan(l.id).mins(); } });
    return o;
  });
  window.AW_SU_MODULES = [];
  window.AW_OP_BUILT = window.AW_MODULES.map(function (m) { return m.id; });
  window.AW_SU_TOTAL = 0;
  // Stato di sola lettura per le funzioni che lo leggono (catalogo, lezione successiva, nome corso).
  var mods = [], byId = {};
  trs.forEach(function (t) {
    (t.lessons || []).forEach(function (l) {
      var m = byId[l.moduleId];
      if (!m) { m = byId[l.moduleId] = dyn({ id: l.moduleId, trackId: t.id, subsections: [] }, 'title', l.moduleTitle); mods.push(m); }
      m.subsections.push(dyn({ id: l.id, status: 'ready' }, 'title', l.title));
    });
  });
  window.AW_EDITION_STATE = {
    modules: mods,
    tracks: trs.map(function (t) { return { id: t.id, get label() { return awDictT(t.label); }, roleLabel: t.roleLabel, productId: 'p-' + t.id }; }),
    products: trs.map(function (t) { return { id: 'p-' + t.id, name: t.productName || 'TilliT' }; }),
    tenants: C.tenantId ? [{ id: C.tenantId }] : []
  };
  var E = window.AW_EDITION || {};
  // 16/10 sera (Giulia: "esce sempre Learner anche se metto un'altra mail? io lo sbloccherei"): nome e iniziali
  // vengono dall'email del login (login.html → aw_user), come nel laboratorio; "Learner" solo senza login.
  window.AW_USER = (function () {
    try { var u = JSON.parse(localStorage.getItem('aw_user') || 'null'); if (u && u.name) return u; } catch (e) {}
    return { name: 'Learner', initials: 'L' };
  })();
  // Lingue dell'edizione: se quella salvata non è prevista, si torna alla prima.
  if (E.languages && E.languages.length) {
    var cur = null; try { cur = localStorage.getItem('aw_lang'); } catch (e) {}
    if (E.languages.indexOf(cur) < 0) { try { localStorage.setItem('aw_lang', E.languages[0]); } catch (e) {} window.LANG = E.languages[0]; }
  }
  // Testi legati al training: il nome del training al posto di "TilliT Operator Training" /
  // "Operator course" / "OP progress"; l'unità organizzativa (Site, Area, Line…) da E.unitLabel.
  var unit = E.unitLabel || 'Site', unitL = unit.toLowerCase();
  var TR = {
    'mgr.course.op': tr.label, 'mgr.course.op.full': tr.label, 'mgr.f.opcourse': tr.label,
    'mgr.chip.operators': tr.label, 'mgr.attn.chip.op': tr.label, 'mgr.team.opprog': 'Progress',
    'mgr.toast.opadded': 'Training assigned', 'mgr.toast.opremoved': 'Training removed',
    'mgr.ov.st.trained.tip': 'Finished every chapter of the training',
    // 15/10: "operators" → il termine dell'app (Learner), come "Team: {n} Learners"
    'mgr.f.allteam': 'All team ({n} learners)', 'mgr.ov.st.avgscore.tip': 'Average quiz score across each learner’s completed chapters'
  };
  // 08/10 (lingue della fiera): testi delle edizioni per lingua da translations.js (T_EDITION):
  // .fixed = le frasi fisse qui sopra tradotte; .unit[<unità>] = chiavi riscritte per l'unità (es. "linea"
  // al posto di "sito" in italiano). Le lingue che hanno .unit non passano dal rimpiazzo inglese qui sotto.
  var TE = window.T_EDITION || {}, TEU = (TE.unit && TE.unit[unit]) || {};
  if (window.T) Object.keys(window.T).forEach(function (l) {
    var d = window.T[l]; if (!d) return;
    var fx = (TE.fixed && TE.fixed[l]) || {};
    Object.keys(TR).forEach(function (k) { d[k] = fx[k] || (window.awDictT ? awDictT(TR[k], l) : TR[k]); });
    Object.keys(fx).forEach(function (k) { if (!(k in TR)) d[k] = fx[k]; });   // es. Home / Team Management tradotti (09/10)
    if (unit === 'Site') return;
    if (TEU[l]) { Object.keys(TEU[l]).forEach(function (k) { d[k] = TEU[l][k]; }); return; }
    Object.keys(d).forEach(function (k) {
      if (!/^(mgr|dash)\./.test(k) || typeof d[k] !== 'string') return;
      // (?<!\{)…(?!\}): i segnaposto come {site} restano intatti (prima diventavano {line}).
      d[k] = d[k].replace(/\bSites\b/g, unit + 's').replace(/\bSite\b/g, unit).replace(/(?<!\{)\bsites\b(?!\})/g, unitL + 's').replace(/(?<!\{)\bsite\b(?!\})/g, unitL);
    });
  });
  // Team Management: siti dell'edizione + le 9 persone finte, con progressi sulle lezioni DEL
  // training (non su OP-01/02/03). Vale solo per il primo avvio (o dopo "Ripristina demo").
  if (E.sites && E.sites.length) AW_DEFAULT_SITES = E.sites;
  var ids = window.AW_OP_BUILT, n = ids.length, SHARE = [1, 1, 1, 0.7, 0.7, 0.35, 0.35, 0, 0];
  // Le persone finte sono legate alle lezioni del training: se cambiano (anteprima che cresce,
  // nuovo export) o se qualcuno le ha create con i default del laboratorio (es. l'editor, che
  // legge gli utenti prima dell'anteprima), si rigenerano con siti e progressi giusti.
  var seedKey = (E.id || '') + '|' + ids.join(',') + '|d3', oldKey = null;   // |d3 = dati del 14/10 + riga "You" (rigenera)
  try { oldKey = localStorage.getItem('aw_seedkey'); } catch (e) {}
  // 14/10 (D1 Giulia): chi assegna e chi tiene la live session è un RUOLO, non un nome inventato.
  window.AW_MANAGER_NAME = 'Line supervisor';
  // 14/10: annunci della posta veri per la demo (via OP-03, "bacheca condivisa" falsa e dark mode da rifare).
  window.AW_ANNOUNCEMENTS = [
    { id: 'ann-search', daysAgo: 1, key: 'search', category: 'release' },
    { id: 'ann-maint', daysAgo: 2, key: 'maint', category: 'notice' },
    { id: 'ann-pkx-video', daysAgo: 4, key: 'pkxvideo', category: 'release',
      title: 'Chapter 3 now has a video', body: 'Your Station View now opens with a short video, in all five languages, with subtitles.' },
    { id: 'ann-pkx-gloss', daysAgo: 8, key: 'pkxgloss', category: 'release',
      title: 'The training glossary is ready', body: 'All the TilliT terms of the training in one place, with a translation under each term. Save it as a PDF.' },
    { id: 'ann-browser', daysAgo: 12, key: 'browser', category: 'notice' }
  ];
  if (oldKey !== seedKey) {
    try { ['aw_users', 'aw_sites', 'aw_active_site'].forEach(function (k) { localStorage.removeItem(k); }); localStorage.setItem('aw_seedkey', seedKey); } catch (e) {}
    // 14/10: un'assegnazione e una live session VERE (prima la Home le inventava per conto suo: "E. Bianchi",
    // scadenze che Team Management e la campanella non vedevano). Stesso dato in tutte le pagine.
    var site0 = ((E.sites || [])[0] || {}).id || 'site1';
    var isoIn = function (n) { var d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
    awSaveAssignments([{ id: 'demo-a1', target: 'all', level: 'course', moduleIds: ids.slice(), moduleId: null, dueDate: isoIn(5), note: null,
      siteId: site0, assignedBy: 'Line supervisor', createdAt: isoIn(-9) }]);
    awSaveSessions([{ id: 'demo-s1', title: null, date: isoIn(2), time: '14:00', teamsUrl: '', host: 'Line supervisor', invitees: 'all',
      description: null, materials: null, expected: null, siteId: site0, createdBy: 'Line supervisor' }]);
  }
  AW_DEFAULT_USERS = AW_DEFAULT_USERS.map(function (u, i) {
    var c = JSON.parse(JSON.stringify(u)), done = Math.round((SHARE[i] || 0) * n);
    delete c.op01; delete c.op02; delete c.op03;
    c.trainings = ['op']; c.suDone = 0; c.completedAt = {};
    ids.forEach(function (id, j) {
      c['op' + id] = j < done;
      c.completedAt[id] = j < done ? awDaysAgoISO((done - 1 - j) * 3 + i) : null;
    });
    // 14/10: dati credibili per la fiera — quiz da 3 domande (soglia 2) → per quiz 67 o 100, la persona ha
    // la media dei suoi; iscritti 9-13 giorni fa (training appena uscito, non "135 days ago"); ultima
    // attività = l'ultimo capitolo finito (o più recente per chi è a metà del capitolo dopo).
    var SC = [100, 89, 89, 83, 100, 100, 67, null, null], LAST = [0, 1, 0, 3, 2, 1, 4, 999, 999];
    c.score = done ? SC[i] : null;
    c.lastOrd = Math.min(LAST[i], i);   // l'ultimo capitolo finito è di i giorni fa (completedAt qui sopra)
    c.createdAt = awDaysAgoISO(13 - Math.floor(i / 2));
    if (!done) { c.score = null; c.time = 0; c.lastOrd = 999; }
    c.email = String(c.email).replace(/@site(\d)\.local$/, '@line$1.demo');
    return c;
  });
  // 14/10 (3.1): il Learner è una riga del team della prima linea ("You"): i dati li rifà awSyncMe a ogni lettura.
  AW_DEFAULT_USERS.push({ id: 'me', me: true, name: 'Learner', initials: 'LE', siteId: ((E.sites || [])[0] || {}).id || 'site1',
    trainings: ['op'], email: null, completedAt: {}, score: null, time: 0, lastOrd: 999, suDone: 0,
    createdAt: awDaysAgoISO(9), mustChangePassword: false });
};

// 14/10: le sezioni di un capitolo per i passi e la % di Home/Library — nell'edizione quelle vere del
// capitolo (awApplyEdition), altrimenti le 6 dei moduli OP del laboratorio (invariato).
window.awSectKeys = function (id) {
  var m = (window.AW_MODULES || []).filter(function (x) { return x.id === id; })[0];
  return (m && m.sects && m.sects.length) ? m.sects : ['intro', 'video', 'concepts', 'practice', 'quiz', 'anchor'];
};

// ═══ MARCHIO NEI MOCKUP (13/10, Giulia) ═══
// ROIMA non deve comparire da nessuna parte: nelle schermate simulate di TilliT il marchio diventa
// "autoware | TilliT" col logo Autoware vero. Il markup salvato nelle schermate (seed, pubblicazioni,
// edizioni) dice ancora <span class="tl-logo-a">ROIMA</span> (barra in alto) e <span class="lg-brand-a">
// (mockup del login): si sostituisce quando la schermata entra nella pagina, ovunque (lezione, editor,
// riepilogo PDF), senza toccare le revisioni delle ~20 schermate. Il testo "TilliT" resta com'è.
window.AW_MOCK_LOGO = 'data:image/png;base64,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';
// 13/10 notte (Giulia): nei mockup resta SOLO "TilliT" — niente ROIMA e niente logo Autoware (il logo
// Autoware sta nell'angolo dei video e nel guscio dell'app, non dentro lo schermo di TilliT). La parte
// a sinistra (tl-logo-a / lg-brand-a) e la lineetta (…-sep) si nascondono; AW_MOCK_LOGO resta definito.
window.awBrandMock = function (root) {
  root = root || document;
  if (!root.querySelectorAll) return;
  Array.prototype.forEach.call(root.querySelectorAll('.tl-logo-a:not([data-aw]),.lg-brand-a:not([data-aw])'), function (a) {
    a.setAttribute('data-aw', '1');
    a.style.display = 'none';
    var sep = a.nextElementSibling;
    if (sep && /(^|\s)(tl-logo-sep|lg-brand-sep)(\s|$)/.test(sep.className)) sep.style.display = 'none';
    // il blocco del marchio resta largo quanto la sidebar (152 − 12 di margine), così "Cockpit ▾" accanto
    // parte dove inizia il contenuto, come nello screenshot vero (non scivola sopra il menu)
    if (a.parentNode && a.parentNode.classList && a.parentNode.classList.contains('tl-logo')) a.parentNode.style.minWidth = '140px';
  });
};
(function () {
  if (typeof MutationObserver === 'undefined') return;
  var queued = false;
  function run() { queued = false; window.awBrandMock(document); }
  function start() {
    run();
    new MutationObserver(function () { if (!queued) { queued = true; setTimeout(run, 0); } })
      .observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
// Stessa sostituzione sul markup come testo, per le anteprime in <iframe srcdoc> del content editor
// (lì dentro shared.js non c'è).
window.awBrandHtml = function (html) {
  return String(html || '')
    .replace(/<div class="tl-logo">/g, '<div class="tl-logo" style="min-width:140px">')
    .replace(/<span class="(tl-logo-a|lg-brand-a)">[^<]*<\/span>/g, '<span class="$1" data-aw="1" style="display:none"></span>')
    .replace(/<span class="(tl-logo-sep|lg-brand-sep)"><\/span>/g, '<span class="$1" style="display:none"></span>');
};
