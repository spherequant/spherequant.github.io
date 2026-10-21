// Style panel: try fonts, colours, case and sizes on the live page.
// Off by default. Turn on with ?panel (or any ?theme= / ?mono=), off with ?panel=off.
// Choices are kept in this browser only (localStorage), never sent anywhere.
(function () {
  var KEY = 'sq-style';
  var root = document.documentElement;

  // Every font tried so far. src: 'local' = self-hosted in assets/fonts,
  // 'google' = Google Fonts, or a stylesheet URL.
  var FONTS = {
    'Bergoom':         { src: 'local' },
    'Ioskeley Mono':   { src: 'local', mono: true },
    'Inter':           { src: 'google', q: 'Inter:wght@400;500;600' },
    'Geist':           { src: 'google', q: 'Geist:wght@400;500;600' },
    'Cal Sans':        { src: 'google', q: 'Cal+Sans' },
    'IBM Plex Sans':   { src: 'google', q: 'IBM+Plex+Sans:wght@400;500;600' },
    'Source Serif 4':  { src: 'google', q: 'Source+Serif+4:wght@400;600' },
    'Roboto Mono':     { src: 'google', q: 'Roboto+Mono:wght@400;500', mono: true },
    'Geist Mono':      { src: 'google', q: 'Geist+Mono:wght@400;500', mono: true },
    'JetBrains Mono':  { src: 'google', q: 'JetBrains+Mono:wght@400;500', mono: true },
    'IBM Plex Mono':   { src: 'google', q: 'IBM+Plex+Mono:wght@400;500', mono: true },
    'Fira Mono':       { src: 'google', q: 'Fira+Mono:wght@400;500', mono: true },
    'Source Code Pro': { src: 'google', q: 'Source+Code+Pro:wght@400;500', mono: true },
    'Space Mono':      { src: 'google', q: 'Space+Mono', mono: true },
    'Hack':            { src: 'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css', mono: true }
  };

  var DEFAULTS = {
    theme: 'green',
    heading: 'Geist', body: 'Inter', logo: 'Geist', mono: 'Roboto Mono',
    monoCase: 'uppercase', menuCase: 'none',
    logoSize: 25, menuSize: 17, bodyScale: 100
  };

  var params = new URLSearchParams(location.search);
  var s = {};
  try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) {}

  if (params.get('panel') === 'off') { s = {}; try { localStorage.removeItem(KEY); } catch (e) {} return; }
  var THEMES = ['green', 'amber', 'mono', 'paper'];
  if (THEMES.indexOf(params.get('theme')) > -1) { s.theme = params.get('theme'); s.on = true; }
  if (params.get('mono')) {
    var want = params.get('mono').toLowerCase();
    Object.keys(FONTS).forEach(function (f) { if (FONTS[f].mono && f.toLowerCase().indexOf(want) === 0) s.mono = f; });
    s.on = true;
  }
  if (params.has('panel')) s.on = true;
  if (!s.on) return;

  function cfg(k) { return s[k] != null ? s[k] : DEFAULTS[k]; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  var loaded = {};
  function load(name) {
    var f = FONTS[name];
    if (!f || f.src === 'local' || loaded[name]) return;
    loaded[name] = true;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = f.src === 'google' ? 'https://fonts.googleapis.com/css2?family=' + f.q + '&display=swap' : f.src;
    document.head.appendChild(l);
  }
  function stack(name, mono) {
    return "'" + name + "', " + (mono ? 'ui-monospace, Consolas, monospace' : '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif');
  }

  function apply() {
    var t = cfg('theme');
    if (t === 'green') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    ['heading', 'body', 'logo', 'mono'].forEach(function (k) { load(cfg(k)); });
    root.style.setProperty('--font-serif', stack(cfg('heading')));
    root.style.setProperty('--font-sans', stack(cfg('body')));
    root.style.setProperty('--font-logo', stack(cfg('logo')));
    root.style.setProperty('--font-mono', stack(cfg('mono'), true));
    root.setAttribute('data-mono-case', cfg('monoCase'));
    root.setAttribute('data-menu-case', cfg('menuCase'));
    root.style.setProperty('--logo-size', cfg('logoSize') + 'px');
    root.style.setProperty('--menu-size', cfg('menuSize') + 'px');
    root.style.setProperty('--body-scale', cfg('bodyScale') / 100);
  }
  apply();

  // Tag elements set in the mono font so the case control can reach them.
  function tagMono() {
    var probe = getComputedStyle(root).getPropertyValue('--font-mono').split(',')[0].trim().replace(/['"]/g, '');
    document.querySelectorAll('body *').forEach(function (el) {
      if (el.closest('.style-panel')) return;
      if (el.closest('.main-menu, .main-menu-mobile')) return;
      var ff = getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/['"]/g, '');
      if (ff === probe) el.classList.add('is-mono');
    });
  }

  function select(label, key, options) {
    var w = document.createElement('label');
    w.innerHTML = '<span>' + label + '</span>';
    var el = document.createElement('select');
    options.forEach(function (o) {
      var v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : o;
      var op = document.createElement('option');
      op.value = v; op.textContent = t;
      if (String(cfg(key)) === String(v)) op.selected = true;
      el.appendChild(op);
    });
    el.onchange = function () { s[key] = el.value; save(); apply(); };
    w.appendChild(el);
    return w;
  }
  function slider(label, key, min, max, unit) {
    var w = document.createElement('label');
    var out = document.createElement('em');
    out.textContent = cfg(key) + unit;
    w.innerHTML = '<span>' + label + '</span>';
    var el = document.createElement('input');
    el.type = 'range'; el.min = min; el.max = max; el.value = cfg(key);
    el.oninput = function () { s[key] = +el.value; out.textContent = el.value + unit; save(); apply(); };
    w.appendChild(el); w.appendChild(out);
    return w;
  }

  // Tag once styles are in, so computed fonts are real.
  window.addEventListener('load', tagMono);

  document.addEventListener('DOMContentLoaded', function () {
    var all = Object.keys(FONTS);
    var monos = all.filter(function (f) { return FONTS[f].mono; });
    var cases = [['uppercase', 'ALL CAPS'], ['capitalize', 'First letter'], ['lowercase', 'all lowercase'], ['none', 'As written']];

    var panel = document.createElement('div');
    panel.className = 'style-panel';
    var head = document.createElement('button');
    head.className = 'sp-toggle';
    head.textContent = 'Style';
    head.onclick = function () { panel.classList.toggle('open'); };
    var body = document.createElement('div');
    body.className = 'sp-body';
    [
      select('Colour theme', 'theme', [['green', 'Mono + green'], ['amber', 'Mono + amber'], ['mono', 'Strict mono'], ['paper', 'Paper']]),
      select('Heading font', 'heading', all),
      select('Body font', 'body', all),
      select('Logo font', 'logo', all),
      select('Mono font', 'mono', monos),
      select('Mono case', 'monoCase', cases),
      select('Menu case', 'menuCase', cases),
      slider('Logo size', 'logoSize', 14, 40, 'px'),
      slider('Menu size', 'menuSize', 11, 26, 'px'),
      slider('Body text', 'bodyScale', 70, 130, '%')
    ].forEach(function (n) { body.appendChild(n); });

    var row = document.createElement('div');
    row.className = 'sp-actions';
    var copy = document.createElement('button');
    copy.textContent = 'Copy settings';
    copy.onclick = function () {
      var out = {};
      Object.keys(DEFAULTS).forEach(function (k) { out[k] = cfg(k); });
      var txt = JSON.stringify(out, null, 2);
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(
        function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy settings'; }, 1500); },
        function () { window.prompt('Copy these settings:', txt); });
    };
    var reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.onclick = function () { s = { on: true }; save(); location.reload(); };
    row.appendChild(copy); row.appendChild(reset);
    body.appendChild(row);

    panel.appendChild(head); panel.appendChild(body);
    document.body.appendChild(panel);
  });
})();
