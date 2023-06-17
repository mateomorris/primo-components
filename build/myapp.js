function _() {
}
function B(t) {
  return t();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(B);
}
function D(t) {
  return typeof t == "function";
}
function M(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function z(t) {
  return Object.keys(t).length === 0;
}
function O(t, e) {
  t.appendChild(e);
}
function p(t, e, n) {
  t.insertBefore(e, n || null);
}
function h(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function b(t) {
  return document.createElement(t);
}
function w(t) {
  return document.createTextNode(t);
}
function k() {
  return w(" ");
}
function F(t) {
  return Array.from(t.childNodes);
}
function J(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
let N;
function g(t) {
  N = t;
}
const d = [], H = [];
let $ = [];
const I = [], K = /* @__PURE__ */ Promise.resolve();
let T = !1;
function L() {
  T || (T = !0, K.then(P));
}
function v(t) {
  $.push(t);
}
const E = /* @__PURE__ */ new Set();
let a = 0;
function P() {
  if (a !== 0)
    return;
  const t = N;
  do {
    try {
      for (; a < d.length; ) {
        const e = d[a];
        a++, g(e), Q(e.$$);
      }
    } catch (e) {
      throw d.length = 0, a = 0, e;
    }
    for (g(null), d.length = 0, a = 0; H.length; )
      H.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const n = $[e];
      E.has(n) || (E.add(n), n());
    }
    $.length = 0;
  } while (d.length);
  for (; I.length; )
    I.pop()();
  T = !1, E.clear(), g(t);
}
function Q(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(v);
  }
}
function U(t) {
  const e = [], n = [];
  $.forEach((f) => t.indexOf(f) === -1 ? e.push(f) : n.push(f)), n.forEach((f) => f()), $ = e;
}
const y = /* @__PURE__ */ new Set();
let V;
function G(t, e) {
  t && t.i && (y.delete(t), t.i(e));
}
function X(t, e, n, f) {
  if (t && t.o) {
    if (y.has(t))
      return;
    y.add(t), V.c.push(() => {
      y.delete(t), f && (n && t.d(1), f());
    }), t.o(e);
  } else
    f && f();
}
function Z(t) {
  t && t.c();
}
function R(t, e, n, f) {
  const { fragment: o, after_update: s } = t.$$;
  o && o.m(e, n), f || v(() => {
    const c = t.$$.on_mount.map(B).filter(D);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : x(c), t.$$.on_mount = [];
  }), s.forEach(v);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && (U(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), L(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(t, e, n, f, o, s, c, m = [-1]) {
  const u = N;
  g(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: _,
    not_equal: o,
    bound: A(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: A(),
    dirty: m,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  c && c(r.root);
  let i = !1;
  if (r.ctx = n ? n(t, e.props || {}, (l, C, ...S) => {
    const j = S.length ? S[0] : C;
    return r.ctx && o(r.ctx[l], r.ctx[l] = j) && (!r.skip_bound && r.bound[l] && r.bound[l](j), i && tt(t, l)), C;
  }) : [], r.update(), i = !0, x(r.before_update), r.fragment = f ? f(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = F(e.target);
      r.fragment && r.fragment.l(l), l.forEach(h);
    } else
      r.fragment && r.fragment.c();
    e.intro && G(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), P();
  }
  g(u);
}
class q {
  $destroy() {
    W(this, 1), this.$destroy = _;
  }
  $on(e, n) {
    if (!D(n))
      return _;
    const f = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return f.push(n), () => {
      const o = f.indexOf(n);
      o !== -1 && f.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !z(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function et(t) {
  let e;
  return {
    c() {
      e = b("h1"), e.textContent = "THIS IS A HEADING";
    },
    m(n, f) {
      p(n, e, f);
    },
    p: _,
    i: _,
    o: _,
    d(n) {
      n && h(e);
    }
  };
}
class nt extends q {
  constructor(e) {
    super(), Y(this, e, null, et, M, {});
  }
}
function rt(t) {
  let e, n, f, o, s, c, m, u;
  return e = new nt({}), {
    c() {
      Z(e.$$.fragment), n = k(), f = b("h1"), f.textContent = "This is the BRAND NEW tester", o = k(), s = b("h2"), c = w("The prop value is "), m = w(
        /*foo*/
        t[0]
      );
    },
    m(r, i) {
      R(e, r, i), p(r, n, i), p(r, f, i), p(r, o, i), p(r, s, i), O(s, c), O(s, m), u = !0;
    },
    p(r, [i]) {
      (!u || i & /*foo*/
      1) && J(
        m,
        /*foo*/
        r[0]
      );
    },
    i(r) {
      u || (G(e.$$.fragment, r), u = !0);
    },
    o(r) {
      X(e.$$.fragment, r), u = !1;
    },
    d(r) {
      W(e, r), r && h(n), r && h(f), r && h(o), r && h(s);
    }
  };
}
function ft(t, e, n) {
  let { foo: f = "EMPTY" } = e;
  return t.$$set = (o) => {
    "foo" in o && n(0, f = o.foo);
  }, [f];
}
let ot = class extends q {
  constructor(e) {
    super(), Y(this, e, ft, rt, M, { foo: 0 });
  }
};
const it = {
  Tester
};
export {
  ot as Tester,
  it as default
};
