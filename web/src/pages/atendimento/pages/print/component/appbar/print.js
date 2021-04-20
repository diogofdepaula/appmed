/* eslint-disable no-use-before-define */
/* eslint-disable no-cond-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable strict */
/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t(require("react"), require("react-dom")))
      : "function" == typeof define && define.amd
      ? define("lib", ["react", "react-dom"], t)
      : "object" == typeof exports
      ? (exports.lib = t(require("react"), require("react-dom")))
      : (e.lib = t(e.react, e["react-dom"]));
  })("undefined" != typeof self ? self : this, function (e, t) {
    return (function () {
      "use strict";
      var n = {
          629: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useReactToPrint = t.PrintContextConsumer = void 0);
            var r = n(655),
              o = n(297),
              i = n(268),
              a = Object.prototype.hasOwnProperty.call(o, "createContext"),
              l =
                Object.prototype.hasOwnProperty.call(o, "useMemo") &&
                Object.prototype.hasOwnProperty.call(o, "useCallback"),
              c = a ? o.createContext({}) : null;
            t.PrintContextConsumer = c
              ? c.Consumer
              : function () {
                  return null;
                };
            var u = {
                copyStyles: !0,
                pageStyle:
                  "@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",
                removeAfterPrint: !1,
                suppressErrors: !1
              },
              s = (function (e) {
                function t() {
                  var t = (null !== e && e.apply(this, arguments)) || this;
                  return (
                    (t.startPrint = function (e) {
                      var n = t.props,
                        r = n.onAfterPrint,
                        o = n.onPrintError,
                        i = n.print,
                        a = n.suppressErrors,
                        l = n.documentTitle;
                      setTimeout(function () {
                        if (e.contentWindow) {
                          if ((e.contentWindow.focus(), i))
                            i(e)
                              .then(t.handleRemoveIframe)
                              .catch(function (e) {
                                o
                                  ? o("print", e)
                                  : a ||
                                    console.error(
                                      "An error was thrown by the specified `print` function",
                                      e
                                    );
                              });
                          else if (e.contentWindow.print) {
                            var n = document.title;
                            l && (document.title = l),
                              e.contentWindow.print(),
                              l && (document.title = n),
                              r && r();
                          } else
                            a ||
                              console.error(
                                "Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."
                              );
                          t.handleRemoveIframe();
                        } else a || console.error("Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/");
                      }, 500);
                    }),
                    (t.triggerPrint = function (e) {
                      var n = t.props,
                        r = n.onBeforePrint,
                        o = n.onPrintError;
                      if (r) {
                        var i = r();
                        i && "function" == typeof i.then
                          ? i
                              .then(function () {
                                t.startPrint(e);
                              })
                              .catch(function (e) {
                                o && o("onBeforePrint", e);
                              })
                          : t.startPrint(e);
                      } else t.startPrint(e);
                    }),
                    (t.handleClick = function () {
                      var e = t.props,
                        n = e.onBeforeGetContent,
                        r = e.onPrintError;
                      if (n) {
                        var o = n();
                        o && "function" == typeof o.then
                          ? o.then(t.handlePrint).catch(function (e) {
                              r && r("onBeforeGetContent", e);
                            })
                          : t.handlePrint();
                      } else t.handlePrint();
                    }),
                    (t.handlePrint = function () {
                      var e = t.props,
                        n = e.bodyClass,
                        o = e.content,
                        a = e.copyStyles,
                        l = e.fonts,
                        c = e.pageStyle,
                        u = e.suppressErrors,
                        s = o();
                      if (void 0 !== s)
                        if (null !== s) {
                          var f = document.createElement("iframe");
                          (f.style.position = "absolute"),
                            (f.style.top = "-1000px"),
                            (f.style.left = "-1000px"),
                            (f.id = "printWindow"),
                            (f.title = "Print Window");
                          var p = i.findDOMNode(s);
                          if (p) {
                            var d = p instanceof Text,
                              h = document.querySelectorAll(
                                "link[rel='stylesheet']"
                              ),
                              y = d ? [] : p.querySelectorAll("img");
                            (t.linkTotal = h.length + y.length),
                              (t.linksLoaded = []),
                              (t.linksErrored = []),
                              (t.fontsLoaded = []),
                              (t.fontsErrored = []);
                            var v = function (e, n) {
                              n
                                ? t.linksLoaded.push(e)
                                : (u ||
                                    console.error(
                                      '"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',
                                      e
                                    ),
                                  t.linksErrored.push(e)),
                                t.linksLoaded.length +
                                  t.linksErrored.length +
                                  t.fontsLoaded.length +
                                  t.fontsErrored.length ===
                                  t.linkTotal && t.triggerPrint(f);
                            };
                            (f.onload = function () {
                              var e, o, i, s;
                              f.onload = null;
                              var h =
                                f.contentDocument ||
                                (null === (o = f.contentWindow) || void 0 === o
                                  ? void 0
                                  : o.document);
                              if (h) {
                                h.body.appendChild(p.cloneNode(!0)),
                                  l &&
                                    ((null === (i = f.contentDocument) ||
                                    void 0 === i
                                      ? void 0
                                      : i.fonts) &&
                                    (null === (s = f.contentWindow) ||
                                    void 0 === s
                                      ? void 0
                                      : s.FontFace)
                                      ? l.forEach(function (e) {
                                          var n = new FontFace(
                                            e.family,
                                            e.source
                                          );
                                          f.contentDocument.fonts.add(n),
                                            n.loaded
                                              .then(function (e) {
                                                t.fontsLoaded.push(e);
                                              })
                                              .catch(function (e) {
                                                t.fontsErrored.push(n),
                                                  u ||
                                                    console.error(
                                                      '"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',
                                                      n,
                                                      "The error from loading the font is:",
                                                      e
                                                    );
                                              });
                                        })
                                      : u ||
                                        console.error(
                                          '"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API'
                                        ));
                                var b = "function" == typeof c ? c() : c;
                                if ("string" != typeof b)
                                  u ||
                                    console.error(
                                      '"react-to-print" expected a "string" from `pageStyle` but received "' +
                                        typeof b +
                                        '". Styles from `pageStyle` will not be applied.'
                                    );
                                else {
                                  var m = h.createElement("style");
                                  m.appendChild(h.createTextNode(b)),
                                    h.head.appendChild(m);
                                }
                                if (
                                  (n &&
                                    (e = h.body.classList).add.apply(
                                      e,
                                      r.__spread(n.split(" "))
                                    ),
                                  !d)
                                ) {
                                  for (
                                    var g = h.querySelectorAll("canvas"),
                                      w = p.querySelectorAll("canvas"),
                                      _ = 0,
                                      P = g.length;
                                    _ < P;
                                    ++_
                                  ) {
                                    var S = (L = g[_]).getContext("2d");
                                    S && S.drawImage(w[_], 0, 0);
                                  }
                                  for (_ = 0; _ < y.length; _++) {
                                    var x = y[_],
                                      O = x.getAttribute("src");
                                    if (O) {
                                      var k = new Image();
                                      (k.onload = v.bind(null, x, !0)),
                                        (k.onerror = v.bind(null, x, !1)),
                                        (k.src = O);
                                    } else
                                      u ||
                                        console.warn(
                                          '"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',
                                          x
                                        );
                                  }
                                  var T = "input",
                                    E = p.querySelectorAll(T),
                                    j = h.querySelectorAll(T);
                                  for (_ = 0; _ < E.length; _++)
                                    j[_].value = E[_].value;
                                  var C =
                                      "input[type=checkbox],input[type=radio]",
                                    A = p.querySelectorAll(C),
                                    I = h.querySelectorAll(C);
                                  for (_ = 0; _ < A.length; _++)
                                    I[_].checked = A[_].checked;
                                  var R = "select",
                                    q = p.querySelectorAll(R),
                                    M = h.querySelectorAll(R);
                                  for (_ = 0; _ < q.length; _++)
                                    M[_].value = q[_].value;
                                }
                                if (a)
                                  for (
                                    var W = document.querySelectorAll(
                                        "style, link[rel='stylesheet']"
                                      ),
                                      F = ((_ = 0), W.length);
                                    _ < F;
                                    ++_
                                  ) {
                                    var L;
                                    if ("STYLE" === (L = W[_]).tagName) {
                                      var D = h.createElement(L.tagName),
                                        N = L.sheet;
                                      if (N) {
                                        for (
                                          var B = "",
                                            G = 0,
                                            V = N.cssRules.length;
                                          G < V;
                                          ++G
                                        )
                                          "string" ==
                                            typeof N.cssRules[G].cssText &&
                                            (B += N.cssRules[G].cssText + "\r\n");
                                        D.setAttribute(
                                          "id",
                                          "react-to-print-" + _
                                        ),
                                          D.appendChild(h.createTextNode(B)),
                                          h.head.appendChild(D);
                                      }
                                    } else if (L.getAttribute("href")) {
                                      (D = h.createElement(L.tagName)), (G = 0);
                                      for (
                                        var z = L.attributes.length;
                                        G < z;
                                        ++G
                                      ) {
                                        var H = L.attributes[G];
                                        H &&
                                          D.setAttribute(
                                            H.nodeName,
                                            H.nodeValue || ""
                                          );
                                      }
                                      (D.onload = v.bind(null, D, !0)),
                                        (D.onerror = v.bind(null, D, !1)),
                                        h.head.appendChild(D);
                                    } else
                                      u ||
                                        console.warn(
                                          '"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',
                                          L
                                        ),
                                        v(L, !0);
                                  }
                              }
                              (0 !== t.linkTotal && a) || t.triggerPrint(f);
                            }),
                              t.handleRemoveIframe(!0),
                              document.body.appendChild(f);
                          } else
                            u ||
                              console.error(
                                '"react-to-print" could not locate the DOM node corresponding with the `content` prop'
                              );
                        } else
                          u ||
                            console.error(
                              'There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.'
                            );
                      else
                        u ||
                          console.error(
                            'For "react-to-print" to work only Class based components can be printed.'
                          );
                    }),
                    (t.handleRemoveIframe = function (e) {
                      var n = t.props.removeAfterPrint;
                      if (e || n) {
                        var r = document.getElementById("printWindow");
                        r && document.body.removeChild(r);
                      }
                    }),
                    t
                  );
                }
                return (
                  r.__extends(t, e),
                  (t.prototype.render = function () {
                    var e = this.props,
                      t = e.children,
                      n = e.suppressErrors,
                      r = e.trigger;
                    if (r)
                      return o.cloneElement(r(), { onClick: this.handleClick });
                    if (!c)
                      return (
                        n ||
                          console.error(
                            '"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"'
                          ),
                        null
                      );
                    var i = { handlePrint: this.handleClick };
                    return o.createElement(c.Provider, { value: i }, t);
                  }),
                  (t.defaultProps = u),
                  t
                );
              })(o.Component);
            (t.default = s),
              (t.useReactToPrint = l
                ? function (e) {
                    var t = o.useMemo(
                      function () {
                        return new s(r.__assign(r.__assign({}, u), e));
                      },
                      [e]
                    );
                    return o.useCallback(
                      function () {
                        return t.handleClick();
                      },
                      [t]
                    );
                  }
                : function (e) {
                    e.suppressErrors ||
                      console.warn(
                        '"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'
                      );
                  });
          },
          655: function (e, t, n) {
            n.r(t),
              n.d(t, {
                __extends: function () {
                  return o;
                },
                __assign: function () {
                  return i;
                },
                __rest: function () {
                  return a;
                },
                __decorate: function () {
                  return l;
                },
                __param: function () {
                  return c;
                },
                __metadata: function () {
                  return u;
                },
                __awaiter: function () {
                  return s;
                },
                __generator: function () {
                  return f;
                },
                __exportStar: function () {
                  return p;
                },
                __values: function () {
                  return d;
                },
                __read: function () {
                  return h;
                },
                __spread: function () {
                  return y;
                },
                __spreadArrays: function () {
                  return v;
                },
                __await: function () {
                  return b;
                },
                __asyncGenerator: function () {
                  return m;
                },
                __asyncDelegator: function () {
                  return g;
                },
                __asyncValues: function () {
                  return w;
                },
                __makeTemplateObject: function () {
                  return _;
                },
                __importStar: function () {
                  return P;
                },
                __importDefault: function () {
                  return S;
                },
                __classPrivateFieldGet: function () {
                  return x;
                },
                __classPrivateFieldSet: function () {
                  return O;
                }
              });
            var r = function (e, t) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
            };
            function o(e, t) {
              function n() {
                this.constructor = e;
              }
              r(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }
            var i = function () {
              return (i =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            };
            function a(e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  t.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              }
              return n;
            }
            function l(e, t, n, r) {
              var o,
                i = arguments.length,
                a =
                  i < 3
                    ? t
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(t, n))
                    : r;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                a = Reflect.decorate(e, t, n, r);
              else
                for (var l = e.length - 1; l >= 0; l--)
                  (o = e[l]) &&
                    (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
              return i > 3 && a && Object.defineProperty(t, n, a), a;
            }
            function c(e, t) {
              return function (n, r) {
                t(n, r, e);
              };
            }
            function u(e, t) {
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.metadata
              )
                return Reflect.metadata(e, t);
            }
            function s(e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, l);
                }
                c((r = r.apply(e, t || [])).next());
              });
            }
            function f(e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (i = { next: l(0), throw: l(1), return: l(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function l(i) {
                return function (l) {
                  return (function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, i[1])).done)
                        )
                          return o;
                        switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                          case 0:
                          case 1:
                            o = i;
                            break;
                          case 4:
                            return a.label++, { value: i[1], done: !1 };
                          case 5:
                            a.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!o || (i[1] > o[0] && i[1] < o[3]))
                            ) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = i);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(i);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = t.call(e, a);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, l]);
                };
              }
            }
            function p(e, t) {
              for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
            }
            function d(e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  }
                };
              throw new TypeError(
                t ? "Object is not iterable." : "Symbol.iterator is not defined."
              );
            }
            function h(e, t) {
              var n = "function" == typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var r,
                o,
                i = n.call(e),
                a = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                  a.push(r.value);
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (o) throw o.error;
                }
              }
              return a;
            }
            function y() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(h(arguments[t]));
              return e;
            }
            function v() {
              for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
              var r = Array(e),
                o = 0;
              for (t = 0; t < n; t++)
                for (var i = arguments[t], a = 0, l = i.length; a < l; a++, o++)
                  r[o] = i[a];
              return r;
            }
            function b(e) {
              return this instanceof b ? ((this.v = e), this) : new b(e);
            }
            function m(e, t, n) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var r,
                o = n.apply(e, t || []),
                i = [];
              return (
                (r = {}),
                a("next"),
                a("throw"),
                a("return"),
                (r[Symbol.asyncIterator] = function () {
                  return this;
                }),
                r
              );
              function a(e) {
                o[e] &&
                  (r[e] = function (t) {
                    return new Promise(function (n, r) {
                      i.push([e, t, n, r]) > 1 || l(e, t);
                    });
                  });
              }
              function l(e, t) {
                try {
                  (n = o[e](t)).value instanceof b
                    ? Promise.resolve(n.value.v).then(c, u)
                    : s(i[0][2], n);
                } catch (e) {
                  s(i[0][3], e);
                }
                var n;
              }
              function c(e) {
                l("next", e);
              }
              function u(e) {
                l("throw", e);
              }
              function s(e, t) {
                e(t), i.shift(), i.length && l(i[0][0], i[0][1]);
              }
            }
            function g(e) {
              var t, n;
              return (
                (t = {}),
                r("next"),
                r("throw", function (e) {
                  throw e;
                }),
                r("return"),
                (t[Symbol.iterator] = function () {
                  return this;
                }),
                t
              );
              function r(r, o) {
                t[r] = e[r]
                  ? function (t) {
                      return (n = !n)
                        ? { value: b(e[r](t)), done: "return" === r }
                        : o
                        ? o(t)
                        : t;
                    }
                  : o;
              }
            }
            function w(e) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var t,
                n = e[Symbol.asyncIterator];
              return n
                ? n.call(e)
                : ((e = d(e)),
                  (t = {}),
                  r("next"),
                  r("throw"),
                  r("return"),
                  (t[Symbol.asyncIterator] = function () {
                    return this;
                  }),
                  t);
              function r(n) {
                t[n] =
                  e[n] &&
                  function (t) {
                    return new Promise(function (r, o) {
                      // eslint-disable-next-line no-unused-expressions
                      !(function (e, t, n, r) {
                        Promise.resolve(r).then(function (t) {
                          e({ value: t, done: n });
                        }, t);
                      })(r, o, (t = e[n](t)).done, t.value);
                    });
                  };
              }
            }
            function _(e, t) {
              return (
                Object.defineProperty
                  ? Object.defineProperty(e, "raw", { value: t })
                  : (e.raw = t),
                e
              );
            }
            function P(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
            function S(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function x(e, t) {
              if (!t.has(e))
                throw new TypeError(
                  "attempted to get private field on non-instance"
                );
              return t.get(e);
            }
            function O(e, t, n) {
              if (!t.has(e))
                throw new TypeError(
                  "attempted to set private field on non-instance"
                );
              return t.set(e, n), n;
            }
          },
          297: function (t) {
            t.exports = e;
          },
          268: function (e) {
            e.exports = t;
          }
        },
        r = {};
      function o(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = { exports: {} });
        return n[e](t, t.exports, o), t.exports;
      }
      return (
        (o.d = function (e, t) {
          for (var n in t)
            o.o(t, n) &&
              !o.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.r = function (e) {
          // eslint-disable-next-line no-unused-expressions
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        o(629)
      );
    })();
  });
  