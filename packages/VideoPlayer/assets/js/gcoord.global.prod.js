/**
 * @preserve
 * gcoord 1.0.5, geographic coordinate library
 * Copyright (c) 2023 Jiulong Hu <me@hujiulong.com>
 */
var gcoord = function() {
  "use strict";
  var t = function() {
    return t = Object.assign || function(t) {
      for (var r, e = 1, n = arguments.length; e < n; e++)
        for (var a in r = arguments[e])
          Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
      return t
    }
      ,
      t.apply(this, arguments)
  }
    , r = Math.sin
    , e = Math.cos
    , n = Math.sqrt
    , a = Math.abs
    , o = Math.PI
    , i = 6378245
    , c = .006693421622965823;
  function u(t, r) {
    return t >= 72.004 && t <= 137.8347 && r >= .8293 && r <= 55.8271
  }
  function l(t, u) {
    var l, f, s, h = (s = 300 + (l = t - 105) + 2 * (f = u - 35) + .1 * l * l + .1 * l * f + .1 * n(a(l)),
      s += 2 * (20 * r(6 * l * o) + 20 * r(2 * l * o)) / 3,
    (s += 2 * (20 * r(l * o) + 40 * r(l / 3 * o)) / 3) + 2 * (150 * r(l / 12 * o) + 300 * r(l / 30 * o)) / 3), g = function(t, e) {
      var i = 2 * t - 100 + 3 * e + .2 * e * e + .1 * t * e + .2 * n(a(t));
      return i += 2 * (20 * r(6 * t * o) + 20 * r(2 * t * o)) / 3,
        i += 2 * (20 * r(e * o) + 40 * r(e / 3 * o)) / 3,
      i + 2 * (160 * r(e / 12 * o) + 320 * r(e * o / 30)) / 3
    }(t - 105, u - 35), M = u / 180 * o, v = r(M), G = n(v = 1 - c * v * v);
    return [h = 180 * h / (i / G * e(M) * o), g = 180 * g / (i * (1 - c) / (v * G) * o)]
  }
  function f(t) {
    var r = t[0]
      , e = t[1];
    if (!u(r, e))
      return [r, e];
    var n = l(r, e);
    return [r + n[0], e + n[1]]
  }
  function s(t) {
    var r = t[0]
      , e = t[1];
    if (!u(r, e))
      return [r, e];
    for (var n = [r, e], o = n[0], i = n[1], c = f([o, i]), l = c[0] - r, s = c[1] - e; a(l) > 1e-6 || a(s) > 1e-6; )
      l = (c = f([o -= l, i -= s]))[0] - r,
        s = c[1] - e;
    return [o, i]
  }
  var h = Math.sin
    , g = Math.cos
    , M = Math.atan2
    , v = Math.sqrt
    , G = 3e3 * Math.PI / 180;
  function d(t) {
    var r = t[0] - .0065
      , e = t[1] - .006
      , n = v(r * r + e * e) - 2e-5 * h(e * G)
      , a = M(e, r) - 3e-6 * g(r * G);
    return [n * g(a), n * h(a)]
  }
  function p(t) {
    var r = t[0]
      , e = t[1]
      , n = v(r * r + e * e) + 2e-5 * h(e * G)
      , a = M(e, r) + 3e-6 * g(r * G);
    return [n * g(a) + .0065, n * h(a) + .006]
  }
  var S = 180 / Math.PI
    , P = Math.PI / 180
    , y = 6378137
    , b = 20037508.342789244;
  function B(t) {
    return [t[0] * S / y, (.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / y))) * S]
  }
  function C(t) {
    var r = Math.abs(t[0]) <= 180 ? t[0] : t[0] - 360 * (t[0] < 0 ? -1 : 1)
      , e = [y * r * P, y * Math.log(Math.tan(.25 * Math.PI + .5 * t[1] * P))];
    return e[0] > b && (e[0] = b),
    e[0] < -b && (e[0] = -b),
    e[1] > b && (e[1] = b),
    e[1] < -b && (e[1] = -b),
      e
  }
  var D, m, E, w, I, W, k = Math.abs, J = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], x = [75, 60, 45, 30, 15, 0], L = [[1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2], [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37], [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06], [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4], [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]], j = [[-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5], [.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]];
  function q(t, r, e) {
    var n = k(r) / e[9]
      , a = e[0] + e[1] * k(t)
      , o = e[2] + e[3] * n + e[4] * Math.pow(n, 2) + e[5] * Math.pow(n, 3) + e[6] * Math.pow(n, 4) + e[7] * Math.pow(n, 5) + e[8] * Math.pow(n, 6);
    return [a *= t < 0 ? -1 : 1, o *= r < 0 ? -1 : 1]
  }
  function N(t) {
    for (var r = t[0], e = t[1], n = [], a = 0; a < x.length; a++)
      if (k(e) > x[a]) {
        n = j[a];
        break
      }
    return q(r, e, n)
  }
  function O(t) {
    for (var r = t[0], e = t[1], n = [], a = 0; a < J.length; a++)
      if (e >= J[a]) {
        n = L[a];
        break
      }
    return q(r, e, n)
  }
  function T(t, r) {
    if (!t)
      throw new Error(r)
  }
  function A(t) {
    return !!t && "[object Array]" === Object.prototype.toString.call(t)
  }
  function F(t) {
    return !isNaN(Number(t)) && null !== t && !A(t)
  }
  function R() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    var e = t.length - 1;
    return function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      for (var a = e, o = t[e].apply(null, r); a--; )
        o = t[a].call(null, o);
      return o
    }
  }
  function U(t, r, e) {
    if (void 0 === e && (e = !1),
    null !== t)
      for (var n, a, o, i, c, u, l, f, s = 0, h = 0, g = t.type, M = "FeatureCollection" === g, v = "Feature" === g, G = M ? t.features.length : 1, d = 0; d < G; d++) {
        u = (f = !!(l = M ? t.features[d].geometry : v ? t.geometry : t) && "GeometryCollection" === l.type) ? l.geometries.length : 1;
        for (var p = 0; p < u; p++) {
          var S = 0
            , P = 0;
          if (null !== (i = f ? l.geometries[p] : l)) {
            var y = i.type;
            switch (s = !e || "Polygon" !== y && "MultiPolygon" !== y ? 0 : 1,
              y) {
              case null:
                break;
              case "Point":
                if (!1 === r(c = i.coordinates, h, d, S, P))
                  return !1;
                h++,
                  S++;
                break;
              case "LineString":
              case "MultiPoint":
                for (c = i.coordinates,
                       n = 0; n < c.length; n++) {
                  if (!1 === r(c[n], h, d, S, P))
                    return !1;
                  h++,
                  "MultiPoint" === y && S++
                }
                "LineString" === y && S++;
                break;
              case "Polygon":
              case "MultiLineString":
                for (c = i.coordinates,
                       n = 0; n < c.length; n++) {
                  for (a = 0; a < c[n].length - s; a++) {
                    if (!1 === r(c[n][a], h, d, S, P))
                      return !1;
                    h++
                  }
                  "MultiLineString" === y && S++,
                  "Polygon" === y && P++
                }
                "Polygon" === y && S++;
                break;
              case "MultiPolygon":
                for (c = i.coordinates,
                       n = 0; n < c.length; n++) {
                  for (P = 0,
                         a = 0; a < c[n].length; a++) {
                    for (o = 0; o < c[n][a].length - s; o++) {
                      if (!1 === r(c[n][a][o], h, d, S, P))
                        return !1;
                      h++
                    }
                    P++
                  }
                  S++
                }
                break;
              case "GeometryCollection":
                for (n = 0; n < i.geometries.length; n++)
                  if (!1 === U(i.geometries[n], r, e))
                    return !1;
                break;
              default:
                throw new Error("Unknown Geometry Type")
            }
          }
        }
      }
  }
  !function(t) {
    t.WGS84 = "WGS84",
      t.WGS1984 = "WGS84",
      t.EPSG4326 = "WGS84",
      t.GCJ02 = "GCJ02",
      t.AMap = "GCJ02",
      t.BD09 = "BD09",
      t.BD09LL = "BD09",
      t.Baidu = "BD09",
      t.BMap = "BD09",
      t.BD09MC = "BD09MC",
      t.BD09Meter = "BD09MC",
      t.EPSG3857 = "EPSG3857",
      t.EPSG900913 = "EPSG3857",
      t.EPSG102100 = "EPSG3857",
      t.WebMercator = "EPSG3857",
      t.WM = "EPSG3857"
  }(W || (W = {}));
  var z = {
    WGS84: {
      to: (D = {},
        D[W.GCJ02] = f,
        D[W.BD09] = R(p, f),
        D[W.BD09MC] = R(N, p, f),
        D[W.EPSG3857] = C,
        D)
    },
    GCJ02: {
      to: (m = {},
        m[W.WGS84] = s,
        m[W.BD09] = p,
        m[W.BD09MC] = R(N, p),
        m[W.EPSG3857] = R(C, s),
        m)
    },
    BD09: {
      to: (E = {},
        E[W.WGS84] = R(s, d),
        E[W.GCJ02] = d,
        E[W.EPSG3857] = R(C, s, d),
        E[W.BD09MC] = N,
        E)
    },
    EPSG3857: {
      to: (w = {},
        w[W.WGS84] = B,
        w[W.GCJ02] = R(f, B),
        w[W.BD09] = R(p, f, B),
        w[W.BD09MC] = R(N, p, f, B),
        w)
    },
    BD09MC: {
      to: (I = {},
        I[W.WGS84] = R(s, d, O),
        I[W.GCJ02] = R(d, O),
        I[W.EPSG3857] = R(C, s, d, O),
        I[W.BD09] = O,
        I)
    }
  };
  var H = t(t({}, W), {
    CRSTypes: W,
    transform: function(t, r, e) {
      if (T(!!t, "The args[0] input coordinate is required"),
        T(!!r, "The args[1] original coordinate system is required"),
        T(!!e, "The args[2] target coordinate system is required"),
      r === e)
        return t;
      var n = z[r];
      T(!!n, "Invalid original coordinate system: ".concat(r));
      var a = n.to[e];
      T(!!a, "Invalid target coordinate system: ".concat(e));
      var o = typeof t;
      if (T("string" === o || "object" === o, "Invalid input coordinate type: ".concat(o)),
      "string" === o)
        try {
          t = JSON.parse(t)
        } catch (u) {
          throw new Error("Invalid input coordinate: ".concat(t))
        }
      var i = !1;
      A(t) && (T(t.length >= 2, "Invalid input coordinate: ".concat(t)),
        T(F(t[0]) && F(t[1]), "Invalid input coordinate: ".concat(t)),
        t = t.map(Number),
        i = !0);
      var c = a;
      return i ? c(t) : (U(t, (function(t) {
          var r;
          r = c(t),
            t[0] = r[0],
            t[1] = r[1]
        }
      )),
        t)
    }
  });
  return H
}();
