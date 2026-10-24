// SVG graph plotter for the maths data files. VCE.plot(spec) returns an <svg> string, so a graph can sit in a
// stimulus, a stem, a multiple-choice option or a model answer.
//
// spec: {
//   x: [xmin, xmax], y: [ymin, ymax], w?, h?          plotting window and size in px (default 360 × 300)
//   xticks?, yticks?: number step, or [v | {v, l}]    tick marks; default step 1 for small windows
//   grid?: true                                       light grid at the tick marks
//   fns?: [{ f: (x) => y, dom?: [a, b], dash?, c? }]  graphs y = f(x); c = colour index 0–3
//   param?: [{ x: (t) => .., y: (t) => .., t: [a, b], dash?, c? }]   parametric / polar curves
//   lines?: [{ x } | { y } | { p: [x1, y1, x2, y2] }] dashed lines (asymptotes, guides)
//   segs?: [[x1, y1, x2, y2, c?]]                     solid segments
//   arrows?: [{ from: [x, y], to: [x, y], l?, c? }]   vectors
//   circles?: [{ c: [x, y], r, dash?, fill? }]
//   polys?: [{ p: [[x, y], ...], fill?, stroke? }]   shaded regions / shapes (stroke: false = no outline)
//   equal?: true                                      equal x and y scales (default for Argand/vector/circle pictures)
//   pts?: [{ x, y, open?, l?, pos? }]                 points; open = hollow (excluded endpoint)
//   text?: [{ x, y, t, anchor? }]                     labels in plot coordinates
//   xl?, yl?: axis names (default 'x', 'y'); noAxes?: true
// }
(() => {
  let uid = 0;
  const num = (v) => +v.toFixed(2);

  function ticks(spec, lo, hi) {
    if (Array.isArray(spec)) return spec.map((t) => (typeof t === 'number' ? { v: t, l: String(t) } : t));
    const range = hi - lo;
    const step = spec || (range <= 16 ? 1 : range <= 40 ? 5 : range <= 100 ? 10 : Math.pow(10, Math.floor(Math.log10(range / 4))));
    const out = [];
    for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) out.push({ v: +v.toFixed(6), l: String(+v.toFixed(6)) });
    return out;
  }

  VCE.plot = function plot(spec) {
    const [x0, x1] = spec.x, [y0, y1] = spec.y;
    const pad = 26;
    // Geometric pictures (Argand diagrams, vectors, circles) need equal x and y scales so circles look round.
    const equal = spec.equal ?? !!(spec.circles || spec.arrows || /^Re/.test(spec.xl || '') || spec.noAxes);
    const W = spec.w || 360;
    const H = spec.h || (equal ? Math.round(((W - 2 * pad) * (y1 - y0)) / (x1 - x0)) + 2 * pad : 300);
    const sx = (x) => num(pad + ((x - x0) / (x1 - x0)) * (W - 2 * pad));
    const sy = (y) => num(H - pad - ((y - y0) / (y1 - y0)) * (H - 2 * pad));
    const id = 'pc' + ++uid;
    let g = `<defs><clipPath id="${id}"><rect x="${pad}" y="${pad}" width="${W - 2 * pad}" height="${H - 2 * pad}"/></clipPath>`
      + `<marker id="${id}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" class="parrowhead"/></marker></defs>`;
    const xt = ticks(spec.xticks, x0, x1), yt = ticks(spec.yticks, y0, y1);
    const ax = y0 <= 0 && y1 >= 0 ? sy(0) : sy(y0), ay = x0 <= 0 && x1 >= 0 ? sx(0) : sx(x0);

    if (spec.grid) {
      for (const t of xt) g += `<line x1="${sx(t.v)}" x2="${sx(t.v)}" y1="${pad}" y2="${H - pad}" class="pgrid"/>`;
      for (const t of yt) g += `<line y1="${sy(t.v)}" y2="${sy(t.v)}" x1="${pad}" x2="${W - pad}" class="pgrid"/>`;
    }
    for (const p of spec.polys || []) g += `<polygon points="${p.p.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ')}" class="${p.fill === false ? 'pshape' : 'pfill'}${p.stroke === false ? ' nostroke' : ''}" clip-path="url(#${id})"/>`;
    for (const c of spec.circles || []) {
      const rx = Math.abs(sx(c.c[0] + c.r) - sx(c.c[0])), ry = Math.abs(sy(c.c[1] + c.r) - sy(c.c[1]));
      g += `<ellipse cx="${sx(c.c[0])}" cy="${sy(c.c[1])}" rx="${num(rx)}" ry="${num(ry)}" class="${c.fill ? 'pfill' : 'pcurve s0'}${c.dash ? ' dash' : ''}" clip-path="url(#${id})"/>`;
    }

    if (!spec.noAxes) {
      g += `<line x1="${pad - 6}" x2="${W - pad + 8}" y1="${ax}" y2="${ax}" class="paxis" marker-end="url(#${id}a)"/>`;
      g += `<line y1="${H - pad + 6}" y2="${pad - 8}" x1="${ay}" x2="${ay}" class="paxis" marker-end="url(#${id}a)"/>`;
      g += `<text x="${W - pad + 10}" y="${ax + 4}" class="plab">${spec.xl || 'x'}</text><text x="${ay + 6}" y="${pad - 10}" class="plab">${spec.yl || 'y'}</text>`;
      for (const t of xt) if (Math.abs(t.v) > 1e-9 && t.l) g += `<line x1="${sx(t.v)}" x2="${sx(t.v)}" y1="${ax - 3}" y2="${ax + 3}" class="paxis"/><text x="${sx(t.v)}" y="${ax + 15}" text-anchor="middle" class="ptick">${t.l}</text>`;
      for (const t of yt) if (Math.abs(t.v) > 1e-9 && t.l) g += `<line y1="${sy(t.v)}" y2="${sy(t.v)}" x1="${ay - 3}" x2="${ay + 3}" class="paxis"/><text x="${ay - 6}" y="${sy(t.v) + 4}" text-anchor="end" class="ptick">${t.l}</text>`;
      if (x0 <= 0 && x1 >= 0 && y0 <= 0 && y1 >= 0) g += `<text x="${ay - 6}" y="${ax + 14}" text-anchor="end" class="ptick">O</text>`;
    }

    for (const l of spec.lines || []) {
      const [a, b, c, d] = l.p || (l.x != null ? [l.x, y0, l.x, y1] : [x0, l.y, x1, l.y]);
      g += `<line x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}" class="pasym" clip-path="url(#${id})"/>`;
    }
    for (const [a, b, c, d, k] of spec.segs || []) g += `<line x1="${sx(a)}" y1="${sy(b)}" x2="${sx(c)}" y2="${sy(d)}" class="pcurve s${k || 0}" clip-path="url(#${id})"/>`;

    // Curves are sampled densely; the path is broken where the function is undefined or jumps (asymptotes).
    const span = y1 - y0;
    const path = (pts) => {
      let d = '', prev = null;
      for (const p of pts) {
        const ok = p && isFinite(p[1]) && isFinite(p[0]) && p[1] > y0 - 4 * span && p[1] < y1 + 4 * span;
        if (!ok) { prev = null; continue; }
        const jump = prev && Math.abs(p[1] - prev[1]) > 1.5 * span;
        d += `${!prev || jump ? 'M' : 'L'}${sx(p[0])},${sy(p[1])}`;
        prev = p;
      }
      return d;
    };
    for (const fn of spec.fns || []) {
      const [a, b] = fn.dom || [x0, x1];
      const lo = Math.max(a, x0), hi = Math.min(b, x1), n = 600, pts = [];
      for (let i = 0; i <= n; i++) { const x = lo + ((hi - lo) * i) / n; let y; try { y = fn.f(x); } catch (e) { y = NaN; } pts.push([x, y]); }
      g += `<path d="${path(pts)}" class="pcurve s${fn.c || 0}${fn.dash ? ' dash' : ''}" clip-path="url(#${id})"/>`;
    }
    for (const pc of spec.param || []) {
      const [a, b] = pc.t, n = 800, pts = [];
      for (let i = 0; i <= n; i++) { const t = a + ((b - a) * i) / n; pts.push([pc.x(t), pc.y(t)]); }
      g += `<path d="${path(pts)}" class="pcurve s${pc.c || 0}${pc.dash ? ' dash' : ''}" clip-path="url(#${id})"/>`;
    }
    for (const v of spec.arrows || []) {
      g += `<line x1="${sx(v.from[0])}" y1="${sy(v.from[1])}" x2="${sx(v.to[0])}" y2="${sy(v.to[1])}" class="pcurve s${v.c || 0}" marker-end="url(#${id}a)"/>`;
      if (v.l) g += `<text x="${num((sx(v.from[0]) + sx(v.to[0])) / 2 + 6)}" y="${num((sy(v.from[1]) + sy(v.to[1])) / 2 - 6)}" class="plab">${v.l}</text>`;
    }
    for (const p of spec.pts || []) {
      g += `<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="3.5" class="${p.open ? 'ppt open' : 'ppt'}"/>`;
      if (p.l) {
        const [dx, dy, an] = { ne: [6, -7, 'start'], nw: [-6, -7, 'end'], se: [6, 15, 'start'], sw: [-6, 15, 'end'], n: [0, -9, 'middle'], s: [0, 17, 'middle'], e: [7, 4, 'start'], w: [-7, 4, 'end'] }[p.pos || 'ne'];
        g += `<text x="${num(sx(p.x) + dx)}" y="${num(sy(p.y) + dy)}" text-anchor="${an}" class="plab">${p.l}</text>`;
      }
    }
    for (const t of spec.text || []) g += `<text x="${sx(t.x)}" y="${sy(t.y)}" text-anchor="${t.anchor || 'middle'}" class="plab">${t.t}</text>`;
    return `<figure class="plot" style="max-width:${W}px"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${spec.alt || 'graph'}">${g}</svg>${spec.caption ? `<figcaption>${spec.caption}</figcaption>` : ''}</figure>`;
  };
})();
