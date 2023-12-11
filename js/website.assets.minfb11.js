! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(p, e) {
	var t = [],
		c = t.slice,
		m = t.concat,
		s = t.push,
		r = t.indexOf,
		n = {},
		i = n.toString,
		g = n.hasOwnProperty,
		v = {},
		y = p.document,
		o = "2.1.4",
		S = function(e, t) {
			return new S.fn.init(e, t)
		},
		a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		l = /^-ms-/,
		u = /-([\da-z])/gi,
		d = function(e, t) {
			return t.toUpperCase()
		};

	function f(e) {
		var t = "length" in e && e.length,
			n = S.type(e);
		return "function" !== n && !S.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	S.fn = S.prototype = {
		jquery: o,
		constructor: S,
		selector: "",
		length: 0,
		toArray: function() {
			return c.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
		},
		pushStack: function(e) {
			var t = S.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return S.each(this, e, t)
		},
		map: function(n) {
			return this.pushStack(S.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(c.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: s,
		sort: t.sort,
		splice: t.splice
	}, S.extend = S.fn.extend = function() {
		var e, t, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || S.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (i = e[t]) && (u && i && (S.isPlainObject(i) || (r = S.isArray(i))) ? (o = r ? (r = !1, n && S.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, a[t] = S.extend(u, o, i)) : void 0 !== i && (a[t] = i));
		return a
	}, S.extend({
		expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === S.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !S.isArray(e) && 0 <= e - parseFloat(e) + 1
		},
		isPlainObject: function(e) {
			return !("object" !== S.type(e) || e.nodeType || S.isWindow(e) || e.constructor && !g.call(e.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			(e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(l, "ms-").replace(u, d)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var i = 0,
				r = e.length,
				o = f(e);
			if (n) {
				if (o)
					for (; i < r && !1 !== t.apply(e[i], n); i++);
				else
					for (i in e)
						if (!1 === t.apply(e[i], n)) break
			} else if (o)
				for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(a, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (f(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : r.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
			return i
		},
		map: function(e, t, n) {
			var i, r = 0,
				o = e.length,
				a = [];
			if (f(e))
				for (; r < o; r++) null != (i = t(e[r], r, n)) && a.push(i);
			else
				for (r in e) null != (i = t(e[r], r, n)) && a.push(i);
			return m.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, r;
			if ("string" == typeof t && (n = e[t], t = e, e = n), S.isFunction(e)) return i = c.call(arguments, 2), (r = function() {
				return e.apply(t || this, i.concat(c.call(arguments)))
			}).guid = e.guid = e.guid || S.guid++, r
		},
		now: Date.now,
		support: v
	}), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var h = function(n) {
		var e, p, w, o, i, m, d, g, $, u, c, v, x, r, y, b, a, s, S, E = "sizzle" + 1 * new Date,
			C = n.document,
			k = 0,
			f = 0,
			l = oe(),
			h = oe(),
			T = oe(),
			_ = function(e, t) {
				return e === t && (c = !0), 0
			},
			A = {}.hasOwnProperty,
			t = [],
			P = t.pop,
			M = t.push,
			O = t.push,
			D = t.slice,
			N = function(e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			I = "[\\x20\\t\\r\\n\\f]",
			L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			F = L.replace("w", "w#"),
			R = "\\[" + I + "*(" + L + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
			z = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
			H = new RegExp(I + "+", "g"),
			U = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
			q = new RegExp("^" + I + "*," + I + "*"),
			V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			B = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
			W = new RegExp(z),
			Y = new RegExp("^" + F + "$"),
			G = {
				ID: new RegExp("^#(" + L + ")"),
				CLASS: new RegExp("^\\.(" + L + ")"),
				TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + z),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + j + ")$", "i"),
				needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Q = /[+~]/,
			ee = /'|\\/g,
			te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
			ne = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			ie = function() {
				v()
			};
		try {
			O.apply(t = D.call(C.childNodes), C.childNodes), t[C.childNodes.length].nodeType
		} catch (e) {
			O = {
				apply: t.length ? function(e, t) {
					M.apply(e, D.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}

		function re(e, t, n, i) {
			var r, o, a, s, l, u, c, d, f, h;
			if ((t ? t.ownerDocument || t : C) !== x && v(t), n = n || [], s = (t = t || x).nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!i && y) {
				if (11 !== s && (r = J.exec(e)))
					if (a = r[1]) {
						if (9 === s) {
							if (!(o = t.getElementById(a)) || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && S(t, o) && o.id === a) return n.push(o), n
					} else {
						if (r[2]) return O.apply(n, t.getElementsByTagName(e)), n;
						if ((a = r[3]) && p.getElementsByClassName) return O.apply(n, t.getElementsByClassName(a)), n
					} if (p.qsa && (!b || !b.test(e))) {
					if (d = c = E, f = t, h = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (u = m(e), (c = t.getAttribute("id")) ? d = c.replace(ee, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + me(u[l]);
						f = Q.test(e) && he(t.parentNode) || t, h = u.join(",")
					}
					if (h) try {
						return O.apply(n, f.querySelectorAll(h)), n
					} catch (e) {} finally {
						c || t.removeAttribute("id")
					}
				}
			}
			return g(e.replace(U, "$1"), t, n, i)
		}

		function oe() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
			}
		}

		function ae(e) {
			return e[E] = !0, e
		}

		function se(e) {
			var t = x.createElement("div");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function le(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
		}

		function ue(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function ce(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function de(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function fe(a) {
			return ae(function(o) {
				return o = +o, ae(function(e, t) {
					for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function he(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in p = re.support = {}, i = re.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, v = re.setDocument = function(e) {
				var t, n, l = e ? e.ownerDocument || e : C;
				return l !== x && 9 === l.nodeType && l.documentElement ? (r = (x = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), y = !i(l), p.attributes = se(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), p.getElementsByTagName = se(function(e) {
					return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
				}), p.getElementsByClassName = K.test(l.getElementsByClassName), p.getById = se(function(e) {
					return r.appendChild(e).id = E, !l.getElementsByName || !l.getElementsByName(E).length
				}), p.getById ? (w.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && y) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, w.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete w.find.ID, w.filter.ID = function(e) {
					var n = e.replace(te, ne);
					return function(e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}), w.find.TAG = p.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						r = 0,
						o = t.getElementsByTagName(e);
					if ("*" !== e) return o;
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}, w.find.CLASS = p.getElementsByClassName && function(e, t) {
					if (y) return t.getElementsByClassName(e)
				}, a = [], b = [], (p.qsa = K.test(l.querySelectorAll)) && (se(function(e) {
					r.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + I + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + E + "-]").length || b.push("~="), e.querySelectorAll(":checked").length || b.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || b.push(".#.+[+~]")
				}), se(function(e) {
					var t = l.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
				})), (p.matchesSelector = K.test(s = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && se(function(e) {
					p.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), a.push("!=", z)
				}), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(r.compareDocumentPosition), S = t || K.test(r.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, _ = t ? function(e, t) {
					if (e === t) return c = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === C && S(C, e) ? -1 : t === l || t.ownerDocument === C && S(C, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return c = !0, 0;
					var n, i = 0,
						r = e.parentNode,
						o = t.parentNode,
						a = [e],
						s = [t];
					if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : u ? N(u, e) - N(u, t) : 0;
					if (r === o) return ue(e, t);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (; a[i] === s[i];) i++;
					return i ? ue(a[i], s[i]) : a[i] === C ? -1 : s[i] === C ? 1 : 0
				}, l) : x
			}, re.matches = function(e, t) {
				return re(e, null, null, t)
			}, re.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== x && v(e), t = t.replace(B, "='$1']"), p.matchesSelector && y && (!a || !a.test(t)) && (!b || !b.test(t))) try {
					var n = s.call(e, t);
					if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {}
				return 0 < re(t, x, null, [e]).length
			}, re.contains = function(e, t) {
				return (e.ownerDocument || e) !== x && v(e), S(e, t)
			}, re.attr = function(e, t) {
				(e.ownerDocument || e) !== x && v(e);
				var n = w.attrHandle[t.toLowerCase()],
					i = n && A.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
				return void 0 !== i ? i : p.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, re.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, re.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					r = 0;
				if (c = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(_), c) {
					for (; t = e[r++];) t === e[r] && (i = n.push(r));
					for (; i--;) e.splice(n[i], 1)
				}
				return u = null, e
			}, o = re.getText = function(e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[i++];) n += o(t);
				return n
			}, (w = re.selectors = {
				cacheLength: 50,
				createPseudo: ae,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = l[e + " "];
						return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && l(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, i, r) {
						return function(e) {
							var t = re.attr(e, n);
							return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(H, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function(h, e, t, p, m) {
						var g = "nth" !== h.slice(0, 3),
							v = "last" !== h.slice(-4),
							y = "of-type" === e;
						return 1 === p && 0 === m ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var i, r, o, a, s, l, u = g !== v ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								d = y && e.nodeName.toLowerCase(),
								f = !n && !y;
							if (c) {
								if (g) {
									for (; u;) {
										for (o = e; o = o[u];)
											if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
										l = u = "only" === h && !l && "nextSibling"
									}
									return !0
								}
								if (l = [v ? c.firstChild : c.lastChild], v && f) {
									for (s = (i = (r = c[E] || (c[E] = {}))[h] || [])[0] === k && i[1], a = i[0] === k && i[2], o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop();)
										if (1 === o.nodeType && ++a && o === e) {
											r[h] = [k, s, a];
											break
										}
								} else if (f && (i = (e[E] || (e[E] = {}))[h]) && i[0] === k) a = i[1];
								else
									for (;
										(o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++a || (f && ((o[E] || (o[E] = {}))[h] = [k, a]), o !== e)););
								return (a -= m) === p || a % p == 0 && 0 <= a / p
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
						return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
							for (var n, i = a(e, o), r = i.length; r--;) e[n = N(e, i[r])] = !(t[n] = i[r])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: ae(function(e) {
						var i = [],
							r = [],
							s = d(e.replace(U, "$1"));
						return s[E] ? ae(function(e, t, n, i) {
							for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
						}) : function(e, t, n) {
							return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
						}
					}),
					has: ae(function(t) {
						return function(e) {
							return 0 < re(t, e).length
						}
					}),
					contains: ae(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
							}
					}),
					lang: ae(function(n) {
						return Y.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === r
					},
					focus: function(e) {
						return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !w.pseudos.empty(e)
					},
					header: function(e) {
						return Z.test(e.nodeName)
					},
					input: function(e) {
						return X.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: fe(function() {
						return [0]
					}),
					last: fe(function(e, t) {
						return [t - 1]
					}),
					eq: fe(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: fe(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: fe(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: fe(function(e, t, n) {
						for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
						return e
					}),
					gt: fe(function(e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = w.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[e] = ce(e);
		for (e in {
				submit: !0,
				reset: !0
			}) w.pseudos[e] = de(e);

		function pe() {}

		function me(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function ge(a, e, t) {
			var s = e.dir,
				l = t && "parentNode" === s,
				u = f++;
			return e.first ? function(e, t, n) {
				for (; e = e[s];)
					if (1 === e.nodeType || l) return a(e, t, n)
			} : function(e, t, n) {
				var i, r, o = [k, u];
				if (n) {
					for (; e = e[s];)
						if ((1 === e.nodeType || l) && a(e, t, n)) return !0
				} else
					for (; e = e[s];)
						if (1 === e.nodeType || l) {
							if ((i = (r = e[E] || (e[E] = {}))[s]) && i[0] === k && i[1] === u) return o[2] = i[2];
							if ((r[s] = o)[2] = a(e, t, n)) return !0
						}
			}
		}

		function ve(r) {
			return 1 < r.length ? function(e, t, n) {
				for (var i = r.length; i--;)
					if (!r[i](e, t, n)) return !1;
				return !0
			} : r[0]
		}

		function ye(e, t, n, i, r) {
			for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
			return a
		}

		function be(h, p, m, g, v, e) {
			return g && !g[E] && (g = be(g)), v && !v[E] && (v = be(v, e)), ae(function(e, t, n, i) {
				var r, o, a, s = [],
					l = [],
					u = t.length,
					c = e || function(e, t, n) {
						for (var i = 0, r = t.length; i < r; i++) re(e, t[i], n);
						return n
					}(p || "*", n.nodeType ? [n] : n, []),
					d = !h || !e && p ? c : ye(c, s, h, n, i),
					f = m ? v || (e ? h : u || g) ? [] : t : d;
				if (m && m(d, f, n, i), g)
					for (r = ye(f, l), g(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
				if (e) {
					if (v || h) {
						if (v) {
							for (r = [], o = f.length; o--;)(a = f[o]) && r.push(d[o] = a);
							v(null, f = [], r, i)
						}
						for (o = f.length; o--;)(a = f[o]) && -1 < (r = v ? N(e, a) : s[o]) && (e[r] = !(t[r] = a))
					}
				} else f = ye(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : O.apply(t, f)
			})
		}

		function we(e) {
			for (var r, t, n, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = ge(function(e) {
					return e === r
				}, a, !0), u = ge(function(e) {
					return -1 < N(r, e)
				}, a, !0), c = [function(e, t, n) {
					var i = !o && (n || t !== $) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
					return r = null, i
				}]; s < i; s++)
				if (t = w.relative[e[s].type]) c = [ge(ve(c), t)];
				else {
					if ((t = w.filter[e[s].type].apply(null, e[s].matches))[E]) {
						for (n = ++s; n < i && !w.relative[e[n].type]; n++);
						return be(1 < s && ve(c), 1 < s && me(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(U, "$1"), t, s < n && we(e.slice(s, n)), n < i && we(e = e.slice(n)), n < i && me(e))
					}
					c.push(t)
				} return ve(c)
		}
		return pe.prototype = w.filters = w.pseudos, w.setFilters = new pe, m = re.tokenize = function(e, t) {
			var n, i, r, o, a, s, l, u = h[e + " "];
			if (u) return t ? 0 : u.slice(0);
			for (a = e, s = [], l = w.preFilter; a;) {
				for (o in n && !(i = q.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = V.exec(a)) && (n = i.shift(), r.push({
						value: n,
						type: i[0].replace(U, " ")
					}), a = a.slice(n.length)), w.filter) !(i = G[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
					value: n,
					type: o,
					matches: i
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? re.error(e) : h(e, s).slice(0)
		}, d = re.compile = function(e, t) {
			var n, g, v, y, b, i, r = [],
				o = [],
				a = T[e + " "];
			if (!a) {
				for (t || (t = m(e)), n = t.length; n--;)(a = we(t[n]))[E] ? r.push(a) : o.push(a);
				(a = T(e, (g = o, y = 0 < (v = r).length, b = 0 < g.length, i = function(e, t, n, i, r) {
					var o, a, s, l = 0,
						u = "0",
						c = e && [],
						d = [],
						f = $,
						h = e || b && w.find.TAG("*", r),
						p = k += null == f ? 1 : Math.random() || .1,
						m = h.length;
					for (r && ($ = t !== x && t); u !== m && null != (o = h[u]); u++) {
						if (b && o) {
							for (a = 0; s = g[a++];)
								if (s(o, t, n)) {
									i.push(o);
									break
								} r && (k = p)
						}
						y && ((o = !s && o) && l--, e && c.push(o))
					}
					if (l += u, y && u !== l) {
						for (a = 0; s = v[a++];) s(c, d, t, n);
						if (e) {
							if (0 < l)
								for (; u--;) c[u] || d[u] || (d[u] = P.call(i));
							d = ye(d)
						}
						O.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && re.uniqueSort(i)
					}
					return r && (k = p, $ = f), c
				}, y ? ae(i) : i))).selector = e
			}
			return a
		}, g = re.select = function(e, t, n, i) {
			var r, o, a, s, l, u = "function" == typeof e && e,
				c = !i && m(e = u.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && p.getById && 9 === t.nodeType && y && w.relative[o[1].type]) {
					if (!(t = (w.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					u && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = G.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
					if ((l = w.find[s]) && (i = l(a.matches[0].replace(te, ne), Q.test(o[0].type) && he(t.parentNode) || t))) {
						if (o.splice(r, 1), !(e = i.length && me(o))) return O.apply(n, i), n;
						break
					}
			}
			return (u || d(e, c))(i, t, !y, n, Q.test(e) && he(t.parentNode) || t), n
		}, p.sortStable = E.split("").sort(_).join("") === E, p.detectDuplicates = !!c, v(), p.sortDetached = se(function(e) {
			return 1 & e.compareDocumentPosition(x.createElement("div"))
		}), se(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), p.attributes && se(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), se(function(e) {
			return null == e.getAttribute("disabled")
		}) || le(j, function(e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), re
	}(p);
	S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains;
	var b = S.expr.match.needsContext,
		w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		$ = /^.[^:#\[\.,]*$/;

	function x(e, n, i) {
		if (S.isFunction(n)) return S.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== i
		});
		if (n.nodeType) return S.grep(e, function(e) {
			return e === n !== i
		});
		if ("string" == typeof n) {
			if ($.test(n)) return S.filter(n, e, i);
			n = S.filter(n, e)
		}
		return S.grep(e, function(e) {
			return 0 <= r.call(n, e) !== i
		})
	}
	S.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, S.fn.extend({
		find: function(e) {
			var t, n = this.length,
				i = [],
				r = this;
			if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
				for (t = 0; t < n; t++)
					if (S.contains(r[t], this)) return !0
			}));
			for (t = 0; t < n; t++) S.find(e, r[t], i);
			return (i = this.pushStack(1 < n ? S.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
		},
		filter: function(e) {
			return this.pushStack(x(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(x(this, e || [], !0))
		},
		is: function(e) {
			return !!x(this, "string" == typeof e && b.test(e) ? S(e) : e || [], !1).length
		}
	});
	var E, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(S.fn.init = function(e, t) {
		var n, i;
		if (!e) return this;
		if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== E.ready ? E.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this));
		if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : C.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || E).find(e) : this.constructor(t).find(e);
		if (n[1]) {
			if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), w.test(n[1]) && S.isPlainObject(t))
				for (n in t) S.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
			return this
		}
		return (i = y.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = y, this.selector = e, this
	}).prototype = S.fn, E = S(y);
	var k = /^(?:parents|prev(?:Until|All))/,
		T = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function _(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	S.extend({
		dir: function(e, t, n) {
			for (var i = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && S(e).is(n)) break;
					i.push(e)
				} return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), S.fn.extend({
		has: function(e) {
			var t = S(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (S.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, r = this.length, o = [], a = b.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; i < r; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
						o.push(n);
						break
					} return this.pushStack(1 < o.length ? S.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(S.unique(S.merge(this.get(), S(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), S.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return S.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return S.dir(e, "parentNode", n)
		},
		next: function(e) {
			return _(e, "nextSibling")
		},
		prev: function(e) {
			return _(e, "previousSibling")
		},
		nextAll: function(e) {
			return S.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return S.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return S.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return S.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return S.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return S.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || S.merge([], e.childNodes)
		}
	}, function(i, r) {
		S.fn[i] = function(e, t) {
			var n = S.map(this, r, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (T[i] || S.unique(n), k.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var A, P = /\S+/g,
		M = {};

	function O() {
		y.removeEventListener("DOMContentLoaded", O, !1), p.removeEventListener("load", O, !1), S.ready()
	}
	S.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? M[r] || (n = M[e = r] = {}, S.each(e.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : S.extend({}, r);
		var t, i, o, a, s, l, u = [],
			c = !r.once && [],
			d = function(e) {
				for (t = r.memory && e, i = !0, l = a || 0, a = 0, s = u.length, o = !0; u && l < s; l++)
					if (!1 === u[l].apply(e[0], e[1]) && r.stopOnFalse) {
						t = !1;
						break
					} o = !1, u && (c ? c.length && d(c.shift()) : t ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var e = u.length;
						! function i(e) {
							S.each(e, function(e, t) {
								var n = S.type(t);
								"function" === n ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== n && i(t)
							})
						}(arguments), o ? s = u.length : t && (a = e, d(t))
					}
					return this
				},
				remove: function() {
					return u && S.each(arguments, function(e, t) {
						for (var n; - 1 < (n = S.inArray(t, u, n));) u.splice(n, 1), o && (n <= s && s--, n <= l && l--)
					}), this
				},
				has: function(e) {
					return e ? -1 < S.inArray(e, u) : !(!u || !u.length)
				},
				empty: function() {
					return u = [], s = 0, this
				},
				disable: function() {
					return u = c = t = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return c = void 0, t || f.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !u || i && !c || (t = [e, (t = t || []).slice ? t.slice() : t], o ? c.push(t) : d(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return f
	}, S.extend({
		Deferred: function(e) {
			var o = [
					["resolve", "done", S.Callbacks("once memory"), "resolved"],
					["reject", "fail", S.Callbacks("once memory"), "rejected"],
					["notify", "progress", S.Callbacks("memory")]
				],
				r = "pending",
				a = {
					state: function() {
						return r
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					then: function() {
						var r = arguments;
						return S.Deferred(function(i) {
							S.each(o, function(e, t) {
								var n = S.isFunction(r[e]) && r[e];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && S.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
								})
							}), r = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? S.extend(e, a) : a
					}
				},
				s = {};
			return a.pipe = a.then, S.each(o, function(e, t) {
				var n = t[2],
					i = t[3];
				a[t[1]] = n.add, i && n.add(function() {
					r = i
				}, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? a : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var r, t, n, i = 0,
				o = c.call(arguments),
				a = o.length,
				s = 1 !== a || e && S.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : S.Deferred(),
				u = function(t, n, i) {
					return function(e) {
						n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (1 < a)
				for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) o[i] && S.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --s;
			return s || l.resolveWith(n, o), l.promise()
		}
	}), S.fn.ready = function(e) {
		return S.ready.promise().done(e), this
	}, S.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? S.readyWait++ : S.ready(!0)
		},
		ready: function(e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || (A.resolveWith(y, [S]), S.fn.triggerHandler && (S(y).triggerHandler("ready"), S(y).off("ready")))
		}
	}), S.ready.promise = function(e) {
		return A || (A = S.Deferred(), "complete" === y.readyState ? setTimeout(S.ready) : (y.addEventListener("DOMContentLoaded", O, !1), p.addEventListener("load", O, !1))), A.promise(e)
	}, S.ready.promise();
	var D = S.access = function(e, t, n, i, r, o, a) {
		var s = 0,
			l = e.length,
			u = null == n;
		if ("object" === S.type(n))
			for (s in r = !0, n) S.access(e, t, s, n[s], !0, o, a);
		else if (void 0 !== i && (r = !0, S.isFunction(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function(e, t, n) {
				return u.call(S(e), n)
			})), t))
			for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
		return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
	};

	function N() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = S.expando + N.uid++
	}
	S.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, N.uid = 1, N.accepts = S.acceptData, N.prototype = {
		key: function(t) {
			if (!N.accepts(t)) return 0;
			var n = {},
				i = t[this.expando];
			if (!i) {
				i = N.uid++;
				try {
					n[this.expando] = {
						value: i
					}, Object.defineProperties(t, n)
				} catch (e) {
					n[this.expando] = i, S.extend(t, n)
				}
			}
			return this.cache[i] || (this.cache[i] = {}), i
		},
		set: function(e, t, n) {
			var i, r = this.key(e),
				o = this.cache[r];
			if ("string" == typeof t) o[t] = n;
			else if (S.isEmptyObject(o)) S.extend(this.cache[r], t);
			else
				for (i in t) o[i] = t[i];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var i;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, S.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i, r, o = this.key(e),
				a = this.cache[o];
			if (void 0 === t) this.cache[o] = {};
			else {
				n = (i = S.isArray(t) ? t.concat(t.map(S.camelCase)) : (r = S.camelCase(t), t in a ? [t, r] : (i = r) in a ? [i] : i.match(P) || [])).length;
				for (; n--;) delete a[i[n]]
			}
		},
		hasData: function(e) {
			return !S.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var j = new N,
		I = new N,
		L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		F = /([A-Z])/g;

	function R(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(F, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : L.test(n) ? S.parseJSON(n) : n)
				} catch (e) {}
				I.set(e, t, n)
			} else n = void 0;
		return n
	}
	S.extend({
		hasData: function(e) {
			return I.hasData(e) || j.hasData(e)
		},
		data: function(e, t, n) {
			return I.access(e, t, n)
		},
		removeData: function(e, t) {
			I.remove(e, t)
		},
		_data: function(e, t, n) {
			return j.access(e, t, n)
		},
		_removeData: function(e, t) {
			j.remove(e, t)
		}
	}), S.fn.extend({
		data: function(i, e) {
			var t, n, r, o = this[0],
				a = o && o.attributes;
			if (void 0 !== i) return "object" == typeof i ? this.each(function() {
				I.set(this, i)
			}) : D(this, function(t) {
				var e, n = S.camelCase(i);
				if (o && void 0 === t) return void 0 !== (e = I.get(o, i)) ? e : void 0 !== (e = I.get(o, n)) ? e : void 0 !== (e = R(o, n, void 0)) ? e : void 0;
				this.each(function() {
					var e = I.get(this, n);
					I.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && I.set(this, i, t)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (r = I.get(o), 1 === o.nodeType && !j.get(o, "hasDataAttrs"))) {
				for (t = a.length; t--;) a[t] && 0 === (n = a[t].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), R(o, n, r[n]));
				j.set(o, "hasDataAttrs", !0)
			}
			return r
		},
		removeData: function(e) {
			return this.each(function() {
				I.remove(this, e)
			})
		}
	}), S.extend({
		queue: function(e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = j.get(e, t), n && (!i || S.isArray(n) ? i = j.access(e, t, S.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = S.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = S._queueHooks(e, t);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
				S.dequeue(e, t)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return j.get(e, n) || j.access(e, n, {
				empty: S.Callbacks("once memory").add(function() {
					j.remove(e, [t + "queue", n])
				})
			})
		}
	}), S.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = S.queue(this, t, n);
				S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				S.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				r = S.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = j.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(t)
		}
	});
	var z, H, U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		q = ["Top", "Right", "Bottom", "Left"],
		V = function(e, t) {
			return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
		},
		B = /^(?:checkbox|radio)$/i;
	z = y.createDocumentFragment().appendChild(y.createElement("div")), (H = y.createElement("input")).setAttribute("type", "radio"), H.setAttribute("checked", "checked"), H.setAttribute("name", "t"), z.appendChild(H), v.checkClone = z.cloneNode(!0).cloneNode(!0).lastChild.checked, z.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!z.cloneNode(!0).lastChild.defaultValue;
	var W = "undefined";
	v.focusinBubbles = "onfocusin" in p;
	var Y = /^key/,
		G = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Z = /^([^.]*)(?:\.(.+)|)$/;

	function K() {
		return !0
	}

	function J() {
		return !1
	}

	function Q() {
		try {
			return y.activeElement
		} catch (e) {}
	}
	S.event = {
		global: {},
		add: function(t, e, n, i, r) {
			var o, a, s, l, u, c, d, f, h, p, m, g = j.get(t);
			if (g)
				for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = S.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
						return typeof S !== W && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
					}), u = (e = (e || "").match(P) || [""]).length; u--;) h = m = (s = Z.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = S.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = S.event.special[h] || {}, c = S.extend({
					type: h,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && S.expr.match.needsContext.test(r),
					namespace: p.join(".")
				}, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a, !1)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), S.event.global[h] = !0)
		},
		remove: function(e, t, n, i, r) {
			var o, a, s, l, u, c, d, f, h, p, m, g = j.hasData(e) && j.get(e);
			if (g && (l = g.events)) {
				for (u = (t = (t || "").match(P) || [""]).length; u--;)
					if (h = m = (s = Z.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
						for (d = S.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
						a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || S.removeEvent(e, h, g.handle), delete l[h])
					} else
						for (h in l) S.event.remove(e, h + t[u], n, i, !0);
				S.isEmptyObject(l) && (delete g.handle, j.remove(e, "events"))
			}
		},
		trigger: function(e, t, n, i) {
			var r, o, a, s, l, u, c, d = [n || y],
				f = g.call(e, "type") ? e.type : e,
				h = g.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = a = n = n || y, 3 !== n.nodeType && 8 !== n.nodeType && !X.test(f + S.event.triggered) && (0 <= f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[S.expando] ? e : new S.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!i && !c.noBubble && !S.isWindow(n)) {
					for (s = c.delegateType || f, X.test(s + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
					a === (n.ownerDocument || y) && d.push(a.defaultView || a.parentWindow || p)
				}
				for (r = 0;
					(o = d[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? s : c.bindType || f, (u = (j.get(o, "events") || {})[e.type] && j.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && S.acceptData(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !S.acceptData(n) || l && S.isFunction(n[f]) && !S.isWindow(n) && ((a = n[l]) && (n[l] = null), n[S.event.triggered = f](), S.event.triggered = void 0, a && (n[l] = a)), e.result
			}
		},
		dispatch: function(e) {
			e = S.event.fix(e);
			var t, n, i, r, o, a, s = c.call(arguments),
				l = (j.get(this, "events") || {})[e.type] || [],
				u = S.event.special[e.type] || {};
			if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
				for (a = S.event.handlers.call(this, e, l), t = 0;
					(r = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, r, o, a = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== e.type) {
						for (i = [], n = 0; n < s; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? 0 <= S(r, this).index(l) : S.find(r, this, null, [l]).length), i[r] && i.push(o);
						i.length && a.push({
							elem: l,
							handlers: i
						})
					} return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, r, o = t.button;
				return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || y).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[S.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = G.test(r) ? this.mouseHooks : Y.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new S.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
			return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== Q() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === Q() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return S.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var r = S.extend(new S.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? S.event.trigger(r, null, t) : S.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, S.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, S.Event = function(e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : J) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), this[S.expando] = !0
	}, S.Event.prototype = {
		isDefaultPrevented: J,
		isPropagationStopped: J,
		isImmediatePropagationStopped: J,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = K, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = K, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, S.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, r) {
		S.event.special[e] = {
			delegateType: r,
			bindType: r,
			handle: function(e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
			}
		}
	}), v.focusinBubbles || S.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		var r = function(e) {
			S.event.simulate(i, e.target, S.event.fix(e), !0)
		};
		S.event.special[i] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = j.access(e, i);
				t || e.addEventListener(n, r, !0), j.access(e, i, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = j.access(e, i) - 1;
				t ? j.access(e, i, t) : (e.removeEventListener(n, r, !0), j.remove(e, i))
			}
		}
	}), S.fn.extend({
		on: function(e, t, n, i, r) {
			var o, a;
			if ("object" == typeof e) {
				for (a in "string" != typeof t && (n = n || t, t = void 0), e) this.on(a, t, n, e[a], r);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = J;
			else if (!i) return this;
			return 1 === r && (o = i, (i = function(e) {
				return S().off(e), o.apply(this, arguments)
			}).guid = o.guid || (o.guid = S.guid++)), this.each(function() {
				S.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = J), this.each(function() {
				S.event.remove(this, e, n, t)
			});
			for (r in e) this.off(r, t, e[r]);
			return this
		},
		trigger: function(e, t) {
			return this.each(function() {
				S.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return S.event.trigger(e, t, n, !0)
		}
	});
	var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		te = /<([\w:]+)/,
		ne = /<|&#?\w+;/,
		ie = /<(?:script|style|link)/i,
		re = /checked\s*(?:[^=]|=\s*.checked.)/i,
		oe = /^$|\/(?:java|ecma)script/i,
		ae = /^true\/(.*)/,
		se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		le = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ue(e, t) {
		return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function ce(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function de(e) {
		var t = ae.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function fe(e, t) {
		for (var n = 0, i = e.length; n < i; n++) j.set(e[n], "globalEval", !t || j.get(t[n], "globalEval"))
	}

	function he(e, t) {
		var n, i, r, o, a, s, l, u;
		if (1 === t.nodeType) {
			if (j.hasData(e) && (o = j.access(e), a = j.set(t, o), u = o.events))
				for (r in delete a.handle, a.events = {}, u)
					for (n = 0, i = u[r].length; n < i; n++) S.event.add(t, r, u[r][n]);
			I.hasData(e) && (s = I.access(e), l = S.extend({}, s), I.set(t, l))
		}
	}

	function pe(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], n) : n
	}
	le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, S.extend({
		clone: function(e, t, n) {
			var i, r, o, a, s, l, u, c = e.cloneNode(!0),
				d = S.contains(e.ownerDocument, e);
			if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
				for (a = pe(c), i = 0, r = (o = pe(e)).length; i < r; i++) s = o[i], "input" === (u = (l = a[i]).nodeName.toLowerCase()) && B.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || pe(e), a = a || pe(c), i = 0, r = o.length; i < r; i++) he(o[i], a[i]);
				else he(e, c);
			return 0 < (a = pe(c, "script")).length && fe(a, !d && pe(e, "script")), c
		},
		buildFragment: function(e, t, n, i) {
			for (var r, o, a, s, l, u, c = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
				if ((r = e[f]) || 0 === r)
					if ("object" === S.type(r)) S.merge(d, r.nodeType ? [r] : r);
					else if (ne.test(r)) {
				for (o = o || c.appendChild(t.createElement("div")), a = (te.exec(r) || ["", ""])[1].toLowerCase(), s = le[a] || le._default, o.innerHTML = s[1] + r.replace(ee, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
				S.merge(d, o.childNodes), (o = c.firstChild).textContent = ""
			} else d.push(t.createTextNode(r));
			for (c.textContent = "", f = 0; r = d[f++];)
				if ((!i || -1 === S.inArray(r, i)) && (l = S.contains(r.ownerDocument, r), o = pe(c.appendChild(r), "script"), l && fe(o), n))
					for (u = 0; r = o[u++];) oe.test(r.type || "") && n.push(r);
			return c
		},
		cleanData: function(e) {
			for (var t, n, i, r, o = S.event.special, a = 0; void 0 !== (n = e[a]); a++) {
				if (S.acceptData(n) && (r = n[j.expando]) && (t = j.cache[r])) {
					if (t.events)
						for (i in t.events) o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
					j.cache[r] && delete j.cache[r]
				}
				delete I.cache[n[I.expando]]
			}
		}
	}), S.fn.extend({
		text: function(e) {
			return D(this, function(e) {
				return void 0 === e ? S.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ue(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = ue(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? S.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || S.cleanData(pe(n)), n.parentNode && (t && S.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(pe(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return S.clone(this, e, t)
			})
		},
		html: function(e) {
			return D(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ie.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(ee, "<$1></$2>");
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(pe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, S.cleanData(pe(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(n, i) {
			n = m.apply([], n);
			var e, t, r, o, a, s, l = 0,
				u = this.length,
				c = this,
				d = u - 1,
				f = n[0],
				h = S.isFunction(f);
			if (h || 1 < u && "string" == typeof f && !v.checkClone && re.test(f)) return this.each(function(e) {
				var t = c.eq(e);
				h && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
			});
			if (u && (t = (e = S.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
				for (o = (r = S.map(pe(e, "script"), ce)).length; l < u; l++) a = e, l !== d && (a = S.clone(a, !0, !0), o && S.merge(r, pe(a, "script"))), i.call(this[l], a, l);
				if (o)
					for (s = r[r.length - 1].ownerDocument, S.map(r, de), l = 0; l < o; l++) a = r[l], oe.test(a.type || "") && !j.access(a, "globalEval") && S.contains(s, a) && (a.src ? S._evalUrl && S._evalUrl(a.src) : S.globalEval(a.textContent.replace(se, "")))
			}
			return this
		}
	}), S.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		S.fn[e] = function(e) {
			for (var t, n = [], i = S(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), S(i[o])[a](t), s.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var me, ge = {};

	function ve(e, t) {
		var n, i = S(t.createElement(e)).appendTo(t.body),
			r = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(i[0])) ? n.display : S.css(i[0], "display");
		return i.detach(), r
	}

	function ye(e) {
		var t = y,
			n = ge[e];
		return n || ("none" !== (n = ve(e, t)) && n || ((t = (me = (me || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ve(e, t), me.detach()), ge[e] = n), n
	}
	var be = /^margin/,
		we = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"),
		$e = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : p.getComputedStyle(e, null)
		};

	function xe(e, t, n) {
		var i, r, o, a, s = e.style;
		return (n = n || $e(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), we.test(a) && be.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Se(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		var t, n, i = y.documentElement,
			r = y.createElement("div"),
			o = y.createElement("div");

		function e() {
			o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", i.appendChild(r);
			var e = p.getComputedStyle(o, null);
			t = "1%" !== e.top, n = "4px" === e.width, i.removeChild(r)
		}
		o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(o), p.getComputedStyle && S.extend(v, {
			pixelPosition: function() {
				return e(), t
			},
			boxSizingReliable: function() {
				return null == n && e(), n
			},
			reliableMarginRight: function() {
				var e, t = o.appendChild(y.createElement("div"));
				return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", i.appendChild(r), e = !parseFloat(p.getComputedStyle(t, null).marginRight), i.removeChild(r), o.removeChild(t), e
			}
		}))
	}(), S.swap = function(e, t, n, i) {
		var r, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
		return r
	};
	var Ee = /^(none|table(?!-c[ea]).+)/,
		Ce = new RegExp("^(" + U + ")(.*)$", "i"),
		ke = new RegExp("^([+-])=(" + U + ")", "i"),
		Te = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		_e = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ae = ["Webkit", "O", "Moz", "ms"];

	function Pe(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ae.length; r--;)
			if ((t = Ae[r] + n) in e) return t;
		return i
	}

	function Me(e, t, n) {
		var i = Ce.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function Oe(e, t, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += S.css(e, n + q[o], !0, r)), i ? ("content" === n && (a -= S.css(e, "padding" + q[o], !0, r)), "margin" !== n && (a -= S.css(e, "border" + q[o] + "Width", !0, r))) : (a += S.css(e, "padding" + q[o], !0, r), "padding" !== n && (a += S.css(e, "border" + q[o] + "Width", !0, r)));
		return a
	}

	function De(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = $e(e),
			a = "border-box" === S.css(e, "boxSizing", !1, o);
		if (r <= 0 || null == r) {
			if (((r = xe(e, t, o)) < 0 || null == r) && (r = e.style[t]), we.test(r)) return r;
			i = a && (v.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + Oe(e, t, n || (a ? "border" : "content"), i, o) + "px"
	}

	function Ne(e, t) {
		for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = j.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && V(i) && (o[a] = j.access(i, "olddisplay", ye(i.nodeName)))) : (r = V(i), "none" === n && r || j.set(i, "olddisplay", r ? n : S.css(i, "display"))));
		for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function je(e, t, n, i, r) {
		return new je.prototype.init(e, t, n, i, r)
	}
	S.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = xe(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, a, s = S.camelCase(t),
					l = e.style;
				if (t = S.cssProps[s] || (S.cssProps[s] = Pe(l, s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
				"string" == (o = typeof n) && (r = ke.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(S.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || S.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
			}
		},
		css: function(e, t, n, i) {
			var r, o, a, s = S.camelCase(t);
			return t = S.cssProps[s] || (S.cssProps[s] = Pe(e.style, s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = xe(e, t, i)), "normal" === r && t in _e && (r = _e[t]), "" === n || n ? (o = parseFloat(r), !0 === n || S.isNumeric(o) ? o || 0 : r) : r
		}
	}), S.each(["height", "width"], function(e, r) {
		S.cssHooks[r] = {
			get: function(e, t, n) {
				if (t) return Ee.test(S.css(e, "display")) && 0 === e.offsetWidth ? S.swap(e, Te, function() {
					return De(e, r, n)
				}) : De(e, r, n)
			},
			set: function(e, t, n) {
				var i = n && $e(e);
				return Me(0, t, n ? Oe(e, r, n, "border-box" === S.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), S.cssHooks.marginRight = Se(v.reliableMarginRight, function(e, t) {
		if (t) return S.swap(e, {
			display: "inline-block"
		}, xe, [e, "marginRight"])
	}), S.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(r, o) {
		S.cssHooks[r + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + q[t] + o] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, be.test(r) || (S.cssHooks[r + o].set = Me)
	}), S.fn.extend({
		css: function(e, t) {
			return D(this, function(e, t, n) {
				var i, r, o = {},
					a = 0;
				if (S.isArray(t)) {
					for (i = $e(e), r = t.length; a < r; a++) o[t[a]] = S.css(e, t[a], !1, i);
					return o
				}
				return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function() {
			return Ne(this, !0)
		},
		hide: function() {
			return Ne(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				V(this) ? S(this).show() : S(this).hide()
			})
		}
	}), ((S.Tween = je).prototype = {
		constructor: je,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = je.propHooks[this.prop];
			return e && e.get ? e.get(this) : je.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = je.propHooks[this.prop];
			return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : je.propHooks._default.set(this), this
		}
	}).init.prototype = je.prototype, (je.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
			},
			set: function(e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[S.cssProps[e.prop]] || S.cssHooks[e.prop]) ? S.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}).scrollTop = je.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, S.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, S.fx = je.prototype.init, S.fx.step = {};
	var Ie, Le, Fe, Re, ze, He = /^(?:toggle|show|hide)$/,
		Ue = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
		qe = /queueHooks$/,
		Ve = [function(t, e, n) {
			var i, r, o, a, s, l, u, c = this,
				d = {},
				f = t.style,
				h = t.nodeType && V(t),
				p = j.get(t, "fxshow");
			for (i in n.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
					s.unqueued || l()
				}), s.unqueued++, c.always(function() {
					c.always(function() {
						s.unqueued--, S.queue(t, "fx").length || s.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = S.css(t, "display")) ? j.get(t, "olddisplay") || ye(t.nodeName) : u) && "none" === S.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
					f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
				})), e)
				if (r = e[i], He.exec(r)) {
					if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
						if ("show" !== r || !p || void 0 === p[i]) continue;
						h = !0
					}
					d[i] = p && p[i] || S.style(t, i)
				} else u = void 0;
			if (S.isEmptyObject(d)) "inline" === ("none" === u ? ye(t.nodeName) : u) && (f.display = u);
			else
				for (i in p ? "hidden" in p && (h = p.hidden) : p = j.access(t, "fxshow", {}), o && (p.hidden = !h), h ? S(t).show() : c.done(function() {
						S(t).hide()
					}), c.done(function() {
						var e;
						for (e in j.remove(t, "fxshow"), d) S.style(t, e, d[e])
					}), d) a = Ge(h ? p[i] : 0, i, c), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}],
		Be = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					r = Ue.exec(t),
					o = r && r[3] || (S.cssNumber[e] ? "" : "px"),
					a = (S.cssNumber[e] || "px" !== o && +i) && Ue.exec(S.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o)
					for (o = o || a[3], r = r || [], a = +i || 1; a /= s = s || ".5", S.style(n.elem, e, a + o), s !== (s = n.cur() / i) && 1 !== s && --l;);
				return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};

	function We() {
		return setTimeout(function() {
			Ie = void 0
		}), Ie = S.now()
	}

	function Ye(e, t) {
		var n, i = 0,
			r = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = q[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function Ge(e, t, n) {
		for (var i, r = (Be[t] || []).concat(Be["*"]), o = 0, a = r.length; o < a; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function Xe(o, e, t) {
		var n, a, i = 0,
			r = Ve.length,
			s = S.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (a) return !1;
				for (var e = Ie || We(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
				return s.notifyWith(o, [u, n, t]), n < 1 && r ? t : (s.resolveWith(o, [u]), !1)
			},
			u = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, {
					specialEasing: {}
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ie || We(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = S.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? u.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) u.tweens[t].run(1);
					return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this
				}
			}),
			c = u.props;
		for (function(e, t) {
				var n, i, r, o, a;
				for (n in e)
					if (r = t[i = S.camelCase(n)], o = e[n], S.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = S.cssHooks[i]) && "expand" in a)
						for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
					else t[i] = r
			}(c, u.opts.specialEasing); i < r; i++)
			if (n = Ve[i].call(u, o, c, u.opts)) return n;
		return S.map(c, Ge, u), S.isFunction(u.opts.start) && u.opts.start.call(o, u), S.fx.timer(S.extend(l, {
			elem: o,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}
	S.Animation = S.extend(Xe, {
		tweener: function(e, t) {
			for (var n, i = 0, r = (e = S.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < r; i++) n = e[i], Be[n] = Be[n] || [], Be[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Ve.unshift(e) : Ve.push(e)
		}
	}), S.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? S.extend({}, e) : {
			complete: n || !n && t || S.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !S.isFunction(t) && t
		};
		return i.duration = S.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in S.fx.speeds ? S.fx.speeds[i.duration] : S.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			S.isFunction(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
		}, i
	}, S.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(V).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(t, e, n, i) {
			var r = S.isEmptyObject(t),
				o = S.speed(e, n, i),
				a = function() {
					var e = Xe(this, S.extend({}, t), o);
					(r || j.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(r, e, o) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
				var e = !0,
					t = null != r && r + "queueHooks",
					n = S.timers,
					i = j.get(this);
				if (t) i[t] && i[t].stop && a(i[t]);
				else
					for (t in i) i[t] && i[t].stop && qe.test(t) && a(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || S.dequeue(this, r)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var e, t = j.get(this),
					n = t[a + "queue"],
					i = t[a + "queueHooks"],
					r = S.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, S.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), S.each(["toggle", "show", "hide"], function(e, i) {
		var r = S.fn[i];
		S.fn[i] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Ye(i, !0), e, t, n)
		}
	}), S.each({
		slideDown: Ye("show"),
		slideUp: Ye("hide"),
		slideToggle: Ye("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, i) {
		S.fn[e] = function(e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), S.timers = [], S.fx.tick = function() {
		var e, t = 0,
			n = S.timers;
		for (Ie = S.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || S.fx.stop(), Ie = void 0
	}, S.fx.timer = function(e) {
		S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
	}, S.fx.interval = 13, S.fx.start = function() {
		Le || (Le = setInterval(S.fx.tick, S.fx.interval))
	}, S.fx.stop = function() {
		clearInterval(Le), Le = null
	}, S.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, S.fn.delay = function(i, e) {
		return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
			var n = setTimeout(e, i);
			t.stop = function() {
				clearTimeout(n)
			}
		})
	}, Fe = y.createElement("input"), ze = (Re = y.createElement("select")).appendChild(y.createElement("option")), Fe.type = "checkbox", v.checkOn = "" !== Fe.value, v.optSelected = ze.selected, Re.disabled = !0, v.optDisabled = !ze.disabled, (Fe = y.createElement("input")).value = "t", Fe.type = "radio", v.radioValue = "t" === Fe.value;
	var Ze, Ke = S.expr.attrHandle;
	S.fn.extend({
		attr: function(e, t) {
			return D(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				S.removeAttr(this, e)
			})
		}
	}), S.extend({
		attr: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === W ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (t = t.toLowerCase(), i = S.attrHooks[t] || (S.expr.match.bool.test(t) ? Ze : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void S.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				o = t && t.match(P);
			if (o && 1 === e.nodeType)
				for (; n = o[r++];) i = S.propFix[n] || n, S.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!v.radioValue && "radio" === t && S.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), Ze = {
		set: function(e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var o = Ke[t] || S.find.attr;
		Ke[t] = function(e, t, n) {
			var i, r;
			return n || (r = Ke[t], Ke[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, Ke[t] = r), i
		}
	});
	var Je = /^(?:input|select|textarea|button)$/i;
	S.fn.extend({
		prop: function(e, t) {
			return D(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[S.propFix[e] || e]
			})
		}
	}), S.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !S.isXMLDoc(e)) && (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || Je.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), v.optSelected || (S.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		S.propFix[this.toLowerCase()] = this
	});
	var Qe = /[\t\r\n\f]/g;
	S.fn.extend({
		addClass: function(t) {
			var e, n, i, r, o, a, s = "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (S.isFunction(t)) return this.each(function(e) {
				S(this).addClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(P) || []; l < u; l++)
					if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : " ")) {
						for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						a = S.trim(i), n.className !== a && (n.className = a)
					} return this
		},
		removeClass: function(t) {
			var e, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof t && t,
				l = 0,
				u = this.length;
			if (S.isFunction(t)) return this.each(function(e) {
				S(this).removeClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(P) || []; l < u; l++)
					if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : "")) {
						for (o = 0; r = e[o++];)
							for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
						a = t ? S.trim(i) : "", n.className !== a && (n.className = a)
					} return this
		},
		toggleClass: function(r, t) {
			var o = typeof r;
			return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : S.isFunction(r) ? this.each(function(e) {
				S(this).toggleClass(r.call(this, e, this.className, t), t)
			}) : this.each(function() {
				if ("string" === o)
					for (var e, t = 0, n = S(this), i = r.match(P) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else o !== W && "boolean" !== o || (this.className && j.set(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : j.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
				if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Qe, " ").indexOf(t)) return !0;
			return !1
		}
	});
	var et = /\r/g;
	S.fn.extend({
		val: function(n) {
			var i, e, r, t = this[0];
			return arguments.length ? (r = S.isFunction(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = r ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
			})) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(et, "") : null == e ? "" : e : void 0
		}
	}), S.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = S.find.attr(e, "value");
					return null != t ? t : S.trim(S.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
						if (((n = i[l]).selected || l === r) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !S.nodeName(n.parentNode, "optgroup"))) {
							if (t = S(n).val(), o) return t;
							a.push(t)
						} return a
				},
				set: function(e, t) {
					for (var n, i, r = e.options, o = S.makeArray(t), a = r.length; a--;)((i = r[a]).selected = 0 <= S.inArray(i.value, o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), S.each(["radio", "checkbox"], function() {
		S.valHooks[this] = {
			set: function(e, t) {
				if (S.isArray(t)) return e.checked = 0 <= S.inArray(S(e).val(), t)
			}
		}, v.checkOn || (S.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
		S.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), S.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var tt = S.now(),
		nt = /\?/;
	S.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, S.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
	};
	var it = /#.*$/,
		rt = /([?&])_=[^&]*/,
		ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		at = /^(?:GET|HEAD)$/,
		st = /^\/\//,
		lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		ut = {},
		ct = {},
		dt = "*/".concat("*"),
		ft = p.location.href,
		ht = lt.exec(ft.toLowerCase()) || [];

	function pt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				r = e.toLowerCase().match(P) || [];
			if (S.isFunction(t))
				for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function mt(t, r, o, a) {
		var s = {},
			l = t === ct;

		function u(e) {
			var i;
			return s[e] = !0, S.each(t[e] || [], function(e, t) {
				var n = t(r, o, a);
				return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
			}), i
		}
		return u(r.dataTypes[0]) || !s["*"] && u("*")
	}

	function gt(e, t) {
		var n, i, r = S.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && S.extend(!0, e, i), e
	}
	S.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ft,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ht[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": dt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": S.parseJSON,
				"text xml": S.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? gt(gt(e, S.ajaxSettings), t) : gt(S.ajaxSettings, e)
		},
		ajaxPrefilter: pt(ut),
		ajaxTransport: pt(ct),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, d, f, n, h, i, p, r, m = S.ajaxSetup({}, t),
				g = m.context || m,
				v = m.context && (g.nodeType || g.jquery) ? S(g) : S.event,
				y = S.Deferred(),
				b = S.Callbacks("once memory"),
				w = m.statusCode || {},
				o = {},
				a = {},
				$ = 0,
				s = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === $) {
							if (!n)
								for (n = {}; t = ot.exec(f);) n[t[1].toLowerCase()] = t[2];
							t = n[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === $ ? f : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return $ || (e = a[n] = a[n] || e, o[e] = t), this
					},
					overrideMimeType: function(e) {
						return $ || (m.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if ($ < 2)
								for (t in e) w[t] = [w[t], e[t]];
							else x.always(e[x.status]);
						return this
					},
					abort: function(e) {
						var t = e || s;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (y.promise(x).complete = b.add, x.success = x.done, x.error = x.fail, m.url = ((e || m.url || ft) + "").replace(it, "").replace(st, ht[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = S.trim(m.dataType || "*").toLowerCase().match(P) || [""], null == m.crossDomain && (i = lt.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === ht[1] && i[2] === ht[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ht[3] || ("http:" === ht[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), mt(ut, m, t, x), 2 === $) return x;
			for (r in (p = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !at.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (nt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = rt.test(d) ? d.replace(rt, "$1_=" + tt++) : d + (nt.test(d) ? "&" : "?") + "_=" + tt++)), m.ifModified && (S.lastModified[d] && x.setRequestHeader("If-Modified-Since", S.lastModified[d]), S.etag[d] && x.setRequestHeader("If-None-Match", S.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + dt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
			if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === $)) return x.abort();
			for (r in s = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) x[r](m[r]);
			if (c = mt(ct, m, t, x)) {
				x.readyState = 1, p && v.trigger("ajaxSend", [x, m]), m.async && 0 < m.timeout && (h = setTimeout(function() {
					x.abort("timeout")
				}, m.timeout));
				try {
					$ = 1, c.send(o, l)
				} catch (e) {
					if (!($ < 2)) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, i) {
				var r, o, a, s, l, u = t;
				2 !== $ && ($ = 2, h && clearTimeout(h), c = void 0, f = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					for (var i, r, o, a, s = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (r in s)
							if (s[r] && s[r].test(i)) {
								l.unshift(r);
								break
							} if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || e.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							a || (a = r)
						}
						o = o || a
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(m, x, n)), s = function(e, t, n, i) {
					var r, o, a, s, l, u = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
					for (o = c.shift(); o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(a = u[l + " " + o] || u["* " + o]))
							for (r in u)
								if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
									!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e.throws) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, s, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (S.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (S.etag[d] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || u) + "", r ? y.resolveWith(g, [o, u, x]) : y.rejectWith(g, [x, u, a]), x.statusCode(w), w = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : a]), b.fireWith(g, [x, u]), p && (v.trigger("ajaxComplete", [x, m]), --S.active || S.event.trigger("ajaxStop")))
			}
			return x
		},
		getJSON: function(e, t, n) {
			return S.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return S.get(e, void 0, t, "script")
		}
	}), S.each(["get", "post"], function(e, r) {
		S[r] = function(e, t, n, i) {
			return S.isFunction(t) && (i = i || n, n = t, t = void 0), S.ajax({
				url: e,
				type: r,
				dataType: i,
				data: t,
				success: n
			})
		}
	}), S._evalUrl = function(e) {
		return S.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, S.fn.extend({
		wrapAll: function(t) {
			var e;
			return S.isFunction(t) ? this.each(function(e) {
				S(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(n) {
			return S.isFunction(n) ? this.each(function(e) {
				S(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = S(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = S.isFunction(t);
			return this.each(function(e) {
				S(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
			}).end()
		}
	}), S.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, S.expr.filters.visible = function(e) {
		return !S.expr.filters.hidden(e)
	};
	var vt = /%20/g,
		yt = /\[\]$/,
		bt = /\r?\n/g,
		wt = /^(?:submit|button|image|reset|file)$/i,
		$t = /^(?:input|select|textarea|keygen)/i;

	function xt(n, e, i, r) {
		var t;
		if (S.isArray(e)) S.each(e, function(e, t) {
			i || yt.test(n) ? r(n, t) : xt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
		});
		else if (i || "object" !== S.type(e)) r(n, e);
		else
			for (t in e) xt(n + "[" + t + "]", e[t], i, r)
	}
	S.param = function(e, t) {
		var n, i = [],
			r = function(e, t) {
				t = S.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
			r(this.name, this.value)
		});
		else
			for (n in e) xt(n, e[n], t, r);
		return i.join("&").replace(vt, "+")
	}, S.fn.extend({
		serialize: function() {
			return S.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = S.prop(this, "elements");
				return e ? S.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !S(this).is(":disabled") && $t.test(this.nodeName) && !wt.test(e) && (this.checked || !B.test(e))
			}).map(function(e, t) {
				var n = S(this).val();
				return null == n ? null : S.isArray(n) ? S.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(bt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(bt, "\r\n")
				}
			}).get()
		}
	}), S.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var St = 0,
		Et = {},
		Ct = {
			0: 200,
			1223: 204
		},
		kt = S.ajaxSettings.xhr();
	p.attachEvent && p.attachEvent("onunload", function() {
		for (var e in Et) Et[e]()
	}), v.cors = !!kt && "withCredentials" in kt, v.ajax = kt = !!kt, S.ajaxTransport(function(o) {
		var a;
		if (v.cors || kt && !o.crossDomain) return {
			send: function(e, t) {
				var n, i = o.xhr(),
					r = ++St;
				if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
					for (n in o.xhrFields) i[n] = o.xhrFields[n];
				for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
				a = function(e) {
					return function() {
						a && (delete Et[r], a = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(Ct[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
							text: i.responseText
						} : void 0, i.getAllResponseHeaders()))
					}
				}, i.onload = a(), i.onerror = a("error"), a = Et[r] = a("abort");
				try {
					i.send(o.hasContent && o.data || null)
				} catch (e) {
					if (a) throw e
				}
			},
			abort: function() {
				a && a()
			}
		}
	}), S.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return S.globalEval(e), e
			}
		}
	}), S.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), S.ajaxTransport("script", function(n) {
		var i, r;
		if (n.crossDomain) return {
			send: function(e, t) {
				i = S("<script>").prop({
					async: !0,
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", r = function(e) {
					i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), y.head.appendChild(i[0])
			},
			abort: function() {
				r && r()
			}
		}
	});
	var Tt = [],
		_t = /(=)\?(?=&|$)|\?\?/;
	S.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Tt.pop() || S.expando + "_" + tt++;
			return this[e] = !0, e
		}
	}), S.ajaxPrefilter("json jsonp", function(e, t, n) {
		var i, r, o, a = !1 !== e.jsonp && (_t.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(_t, "$1" + i) : !1 !== e.jsonp && (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
			return o || S.error(i + " was not called"), o[0]
		}, e.dataTypes[0] = "json", r = p[i], p[i] = function() {
			o = arguments
		}, n.always(function() {
			p[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Tt.push(i)), o && S.isFunction(r) && r(o[0]), o = r = void 0
		}), "script"
	}), S.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || y;
		var i = w.exec(e),
			r = !n && [];
		return i ? [t.createElement(i[1])] : (i = S.buildFragment([e], t, r), r && r.length && S(r).remove(), S.merge([], i.childNodes))
	};
	var At = S.fn.load;
	S.fn.load = function(e, t, n) {
		if ("string" != typeof e && At) return At.apply(this, arguments);
		var i, r, o, a = this,
			s = e.indexOf(" ");
		return 0 <= s && (i = S.trim(e.slice(s)), e = e.slice(0, s)), S.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && S.ajax({
			url: e,
			type: r,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		S.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), S.expr.filters.animated = function(t) {
		return S.grep(S.timers, function(e) {
			return t === e.elem
		}).length
	};
	var Pt = p.document.documentElement;

	function Mt(e) {
		return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	S.offset = {
		setOffset: function(e, t, n) {
			var i, r, o, a, s, l, u = S.css(e, "position"),
				c = S(e),
				d = {};
			"static" === u && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), l = S.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
		}
	}, S.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				S.offset.setOffset(this, t, e)
			});
			var e, n, i = this[0],
				r = {
					top: 0,
					left: 0
				},
				o = i && i.ownerDocument;
			return o ? (e = o.documentElement, S.contains(e, i) ? (typeof i.getBoundingClientRect !== W && (r = i.getBoundingClientRect()), n = Mt(o), {
				top: r.top + n.pageYOffset - e.clientTop,
				left: r.left + n.pageXOffset - e.clientLeft
			}) : r) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === S.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (i = e.offset()), i.top += S.css(e[0], "borderTopWidth", !0), i.left += S.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - S.css(n, "marginTop", !0),
					left: t.left - i.left - S.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Pt; e && !S.nodeName(e, "html") && "static" === S.css(e, "position");) e = e.offsetParent;
				return e || Pt
			})
		}
	}), S.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, r) {
		var o = "pageYOffset" === r;
		S.fn[t] = function(e) {
			return D(this, function(e, t, n) {
				var i = Mt(e);
				if (void 0 === n) return i ? i[r] : e[t];
				i ? i.scrollTo(o ? p.pageXOffset : n, o ? n : p.pageYOffset) : e[t] = n
			}, t, e, arguments.length, null)
		}
	}), S.each(["top", "left"], function(e, n) {
		S.cssHooks[n] = Se(v.pixelPosition, function(e, t) {
			if (t) return t = xe(e, n), we.test(t) ? S(e).position()[n] + "px" : t
		})
	}), S.each({
		Height: "height",
		Width: "width"
	}, function(o, a) {
		S.each({
			padding: "inner" + o,
			content: a,
			"": "outer" + o
		}, function(i, e) {
			S.fn[e] = function(e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					r = i || (!0 === e || !0 === t ? "margin" : "border");
				return D(this, function(e, t, n) {
					var i;
					return S.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
				}, a, n ? e : void 0, n, null)
			}
		})
	}), S.fn.size = function() {
		return this.length
	}, S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return S
	});
	var Ot = p.jQuery,
		Dt = p.$;
	return S.noConflict = function(e) {
		return p.$ === S && (p.$ = Dt), e && p.jQuery === S && (p.jQuery = Ot), S
	}, typeof e === W && (p.jQuery = p.$ = S), S
}),
function() {
	var i, t, n, l, r, o = function(e, t) {
			return function() {
				return e.apply(t, arguments)
			}
		},
		a = [].indexOf || function(e) {
			for (var t = 0, n = this.length; t < n; t++)
				if (t in this && this[t] === e) return t;
			return -1
		};
	t = function() {
		function e() {}
		return e.prototype.extend = function(e, t) {
			var n, i;
			for (n in t) i = t[n], null == e[n] && (e[n] = i);
			return e
		}, e.prototype.isMobile = function(e) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
		}, e.prototype.createEvent = function(e, t, n, i) {
			var r;
			return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e, r
		}, e.prototype.emitEvent = function(e, t) {
			return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
		}, e.prototype.addEvent = function(e, t, n) {
			return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
		}, e.prototype.removeEvent = function(e, t, n) {
			return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
		}, e.prototype.innerHeight = function() {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, e
	}(), n = this.WeakMap || this.MozWeakMap || (n = function() {
		function e() {
			this.keys = [], this.values = []
		}
		return e.prototype.get = function(e) {
			var t, n, i, r;
			for (t = n = 0, i = (r = this.keys).length; n < i; t = ++n)
				if (r[t] === e) return this.values[t]
		}, e.prototype.set = function(e, t) {
			var n, i, r, o;
			for (n = i = 0, r = (o = this.keys).length; i < r; n = ++i)
				if (o[n] === e) return void(this.values[n] = t);
			return this.keys.push(e), this.values.push(t)
		}, e
	}()), i = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (i = function() {
		function e() {
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return e.notSupported = !0, e.prototype.observe = function() {}, e
	}()), l = this.getComputedStyle || function(n, e) {
		return this.getPropertyValue = function(e) {
			var t;
			return "float" === e && (e = "styleFloat"), r.test(e) && e.replace(r, function(e, t) {
				return t.toUpperCase()
			}), (null != (t = n.currentStyle) ? t[e] : void 0) || null
		}, this
	}, r = /(\-([a-z]){1})/g, this.WOW = function() {
		function e(e) {
			null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return e.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null
		}, e.prototype.init = function() {
			var e;
			return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, e.prototype.start = function() {
			var r, e, t, n, a;
			if (this.stopped = !1, this.boxes = function() {
					var e, t, n, i;
					for (i = [], e = 0, t = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; e < t; e++) r = n[e], i.push(r);
					return i
				}.call(this), this.all = function() {
					var e, t, n, i;
					for (i = [], e = 0, t = (n = this.boxes).length; e < t; e++) r = n[e], i.push(r);
					return i
				}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (e = 0, t = (n = this.boxes).length; e < t; e++) r = n[e], this.applyStyle(r, !0);
			if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new i((a = this, function(e) {
				var t, n, r, o, i;
				for (i = [], t = 0, n = e.length; t < n; t++) o = e[t], i.push(function() {
					var e, t, n, i;
					for (i = [], e = 0, t = (n = o.addedNodes || []).length; e < t; e++) r = n[e], i.push(this.doSync(r));
					return i
				}.call(a));
				return i
			})).observe(document.body, {
				childList: !0,
				subtree: !0
			})
		}, e.prototype.stop = function() {
			if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
		}, e.prototype.sync = function(e) {
			if (i.notSupported) return this.doSync(this.element)
		}, e.prototype.doSync = function(e) {
			var t, n, i, r, o;
			if (null == e && (e = this.element), 1 === e.nodeType) {
				for (o = [], n = 0, i = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n < i; n++) t = r[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
				return o
			}
		}, e.prototype.show = function(e) {
			return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
		}, e.prototype.applyStyle = function(e, t) {
			var n, i, r, o;
			return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
				return o.customStyle(e, t, i, n, r)
			}))
		}, e.prototype.animate = "requestAnimationFrame" in window ? function(e) {
			return window.requestAnimationFrame(e)
		} : function(e) {
			return e()
		}, e.prototype.resetStyle = function() {
			var e, t, n, i, r;
			for (r = [], t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t], r.push(e.style.visibility = "visible");
			return r
		}, e.prototype.resetAnimation = function(e) {
			var t;
			if (0 <= e.type.toLowerCase().indexOf("animationend")) return (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim()
		}, e.prototype.customStyle = function(e, t, n, i, r) {
			return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
				animationDuration: n
			}), i && this.vendorSet(e.style, {
				animationDelay: i
			}), r && this.vendorSet(e.style, {
				animationIterationCount: r
			}), this.vendorSet(e.style, {
				animationName: t ? "none" : this.cachedAnimationName(e)
			}), e
		}, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(r, e) {
			var o, t, a, s;
			for (o in t = [], e) a = e[o], r["" + o] = a, t.push(function() {
				var e, t, n, i;
				for (i = [], e = 0, t = (n = this.vendors).length; e < t; e++) s = n[e], i.push(r["" + s + o.charAt(0).toUpperCase() + o.substr(1)] = a);
				return i
			}.call(this));
			return t
		}, e.prototype.vendorCSS = function(e, t) {
			var n, i, r, o, a, s;
			for (o = (a = l(e)).getPropertyCSSValue(t), n = 0, i = (r = this.vendors).length; n < i; n++) s = r[n], o = o || a.getPropertyCSSValue("-" + s + "-" + t);
			return o
		}, e.prototype.animationName = function(t) {
			var n;
			try {
				n = this.vendorCSS(t, "animation-name").cssText
			} catch (e) {
				n = l(t).getPropertyValue("animation-name")
			}
			return "none" === n ? "" : n
		}, e.prototype.cacheAnimationName = function(e) {
			return this.animationNameCache.set(e, this.animationName(e))
		}, e.prototype.cachedAnimationName = function(e) {
			return this.animationNameCache.get(e)
		}, e.prototype.scrollHandler = function() {
			return this.scrolled = !0
		}, e.prototype.scrollCallback = function() {
			var r;
			if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
					var e, t, n, i;
					for (i = [], e = 0, t = (n = this.boxes).length; e < t; e++)(r = n[e]) && (this.isVisible(r) ? this.show(r) : i.push(r));
					return i
				}.call(this), !this.boxes.length && !this.config.live)) return this.stop()
		}, e.prototype.offsetTop = function(e) {
			for (var t; void 0 === e.offsetTop;) e = e.parentNode;
			for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
			return t
		}, e.prototype.isVisible = function(e) {
			var t, n, i, r, o;
			return n = e.getAttribute("data-wow-offset") || this.config.offset, r = (o = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, t = (i = this.offsetTop(e)) + e.clientHeight, i <= r && o <= t
		}, e.prototype.util = function() {
			return null != this._util ? this._util : this._util = new t
		}, e.prototype.disabled = function() {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, e
	}()
}.call(this),
	function(L) {
		"use strict";

		function p(o, a) {
			return a = a || Error,
				function() {
					var e, t, n = arguments,
						i = n[0],
						r = "[" + (o ? o + ":" : "") + i + "] ";
					for (r += n[1].replace(/\{\d+\}/g, function(e) {
							var t = +e.slice(1, -1) + 2;
							return t < n.length ? je(n[t]) : e
						}), r += "\nhttp://errors.angularjs.org/1.5.8/" + (o ? o + "/" : "") + i, t = 2, e = "?"; t < n.length; t++, e = "&") r += e + "p" + (t - 2) + "=" + encodeURIComponent(je(n[t]));
					return new a(r)
				}
		}
		var o = /^\/(.+)\/([a-z]*)$/,
			d = "validity",
			F = Object.prototype.hasOwnProperty,
			S = function(e) {
				return pe(e) ? e.toLowerCase() : e
			},
			c = function(e) {
				return pe(e) ? e.toUpperCase() : e
			};
		"i" !== "I".toLowerCase() && (S = function(e) {
			return pe(e) ? e.replace(/[A-Z]/g, function(e) {
				return String.fromCharCode(32 | e.charCodeAt(0))
			}) : e
		}, c = function(e) {
			return pe(e) ? e.replace(/[a-z]/g, function(e) {
				return String.fromCharCode(-33 & e.charCodeAt(0))
			}) : e
		});
		var R, ue, a, g, s = [].slice,
			n = [].splice,
			e = [].push,
			z = Object.prototype.toString,
			l = Object.getPrototypeOf,
			u = p("ng"),
			C = L.angular || (L.angular = {}),
			t = 0;

		function N(e) {
			if (null == e || A(e)) return !1;
			if (me(e) || pe(e) || ue && e instanceof ue) return !0;
			var t = "length" in Object(e) && e.length;
			return $(t) && (0 <= t && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
		}

		function ce(e, t, n) {
			var i, r;
			if (e)
				if (ge(e))
					for (i in e) "prototype" == i || "length" == i || "name" == i || e.hasOwnProperty && !e.hasOwnProperty(i) || t.call(n, e[i], i, e);
				else if (me(e) || N(e)) {
				var o = "object" != typeof e;
				for (i = 0, r = e.length; i < r; i++)(o || i in e) && t.call(n, e[i], i, e)
			} else if (e.forEach && e.forEach !== ce) e.forEach(t, n, e);
			else if (w(e))
				for (i in e) t.call(n, e[i], i, e);
			else if ("function" == typeof e.hasOwnProperty)
				for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
			else
				for (i in e) F.call(e, i) && t.call(n, e[i], i, e);
			return e
		}

		function f(e, t, n) {
			for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
			return i
		}

		function v(n) {
			return function(e, t) {
				n(t, e)
			}
		}

		function _() {
			return ++t
		}

		function h(e, t) {
			t ? e.$$hashKey = t : delete e.$$hashKey
		}

		function m(e, t, n) {
			for (var i = e.$$hashKey, r = 0, o = t.length; r < o; ++r) {
				var a = t[r];
				if (he(a) || ge(a))
					for (var s = Object.keys(a), l = 0, u = s.length; l < u; l++) {
						var c = s[l],
							d = a[c];
						n && he(d) ? E(d) ? e[c] = new Date(d.valueOf()) : T(d) ? e[c] = new RegExp(d) : d.nodeName ? e[c] = d.cloneNode(!0) : D(d) ? e[c] = d.clone() : (he(e[c]) || (e[c] = me(d) ? [] : {}), m(e[c], [d], !0)) : e[c] = d
					}
			}
			return h(e, i), e
		}

		function de(e) {
			return m(e, s.call(arguments, 1), !1)
		}

		function y(e) {
			return parseInt(e, 10)
		}

		function H(e, t) {
			return de(Object.create(e), t)
		}

		function U() {}

		function x(e) {
			return e
		}

		function k(e) {
			return function() {
				return e
			}
		}

		function b(e) {
			return ge(e.toString) && e.toString !== z
		}

		function fe(e) {
			return void 0 === e
		}

		function q(e) {
			return void 0 !== e
		}

		function he(e) {
			return null !== e && "object" == typeof e
		}

		function w(e) {
			return null !== e && "object" == typeof e && !l(e)
		}

		function pe(e) {
			return "string" == typeof e
		}

		function $(e) {
			return "number" == typeof e
		}

		function E(e) {
			return "[object Date]" === z.call(e)
		}
		R = L.document.documentMode, U.$inject = [], x.$inject = [];
		var me = Array.isArray;

		function ge(e) {
			return "function" == typeof e
		}

		function T(e) {
			return "[object RegExp]" === z.call(e)
		}

		function A(e) {
			return e && e.window === e
		}

		function ve(e) {
			return e && e.$evalAsync && e.$watch
		}

		function ye(e) {
			return "boolean" == typeof e
		}

		function P(e) {
			return e && ge(e.then)
		}
		var M = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
			be = function(e) {
				return pe(e) ? e.trim() : e
			},
			O = function(e) {
				return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			};

		function D(e) {
			return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
		}

		function we(e) {
			return S(e.nodeName || e[0] && e[0].nodeName)
		}

		function $e(e, t) {
			var n = e.indexOf(t);
			return 0 <= n && e.splice(n, 1), n
		}

		function j(e, n) {
			var t, i, r = [],
				o = [];
			if (n) {
				if ((i = n) && $(i.length) && M.test(z.call(i)) || (t = n, "[object ArrayBuffer]" === z.call(t))) throw u("cpta", "Can't copy! TypedArray destination cannot be mutated.");
				if (e === n) throw u("cpi", "Can't copy! Source and destination are identical.");
				return me(n) ? n.length = 0 : ce(n, function(e, t) {
					"$$hashKey" !== t && delete n[t]
				}), r.push(e), o.push(n), a(e, n)
			}
			return s(e);

			function a(e, t) {
				var n, i = t.$$hashKey;
				if (me(e))
					for (var r = 0, o = e.length; r < o; r++) t.push(s(e[r]));
				else if (w(e))
					for (n in e) t[n] = s(e[n]);
				else if (e && "function" == typeof e.hasOwnProperty)
					for (n in e) e.hasOwnProperty(n) && (t[n] = s(e[n]));
				else
					for (n in e) F.call(e, n) && (t[n] = s(e[n]));
				return h(t, i), t
			}

			function s(e) {
				if (!he(e)) return e;
				var t = r.indexOf(e);
				if (-1 !== t) return o[t];
				if (A(e) || ve(e)) throw u("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
				var n = !1,
					i = function(e) {
						switch (z.call(e)) {
							case "[object Int8Array]":
							case "[object Int16Array]":
							case "[object Int32Array]":
							case "[object Float32Array]":
							case "[object Float64Array]":
							case "[object Uint8Array]":
							case "[object Uint8ClampedArray]":
							case "[object Uint16Array]":
							case "[object Uint32Array]":
								return new e.constructor(s(e.buffer), e.byteOffset, e.length);
							case "[object ArrayBuffer]":
								if (e.slice) return e.slice(0);
								var t = new ArrayBuffer(e.byteLength);
								return new Uint8Array(t).set(new Uint8Array(e)), t;
							case "[object Boolean]":
							case "[object Number]":
							case "[object String]":
							case "[object Date]":
								return new e.constructor(e.valueOf());
							case "[object RegExp]":
								var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
								return n.lastIndex = e.lastIndex, n;
							case "[object Blob]":
								return new e.constructor([e], {
									type: e.type
								})
						}
						if (ge(e.cloneNode)) return e.cloneNode(!0)
					}(e);
				return void 0 === i && (i = me(e) ? [] : Object.create(l(e)), n = !0), r.push(e), o.push(i), n ? a(e, i) : i
			}
		}

		function xe(e, t) {
			if (e === t) return !0;
			if (null === e || null === t) return !1;
			if (e != e && t != t) return !0;
			var n, i, r, o = typeof e;
			if (o == typeof t && "object" == o) {
				if (!me(e)) {
					if (E(e)) return !!E(t) && xe(e.getTime(), t.getTime());
					if (T(e)) return !!T(t) && e.toString() == t.toString();
					if (ve(e) || ve(t) || A(e) || A(t) || me(t) || E(t) || T(t)) return !1;
					for (i in r = _e(), e)
						if ("$" !== i.charAt(0) && !ge(e[i])) {
							if (!xe(e[i], t[i])) return !1;
							r[i] = !0
						} for (i in t)
						if (!(i in r) && "$" !== i.charAt(0) && q(t[i]) && !ge(t[i])) return !1;
					return !0
				}
				if (!me(t)) return !1;
				if ((n = e.length) == t.length) {
					for (i = 0; i < n; i++)
						if (!xe(e[i], t[i])) return !1;
					return !0
				}
			}
			return !1
		}
		var I = function() {
				if (!q(I.rules)) {
					var e = L.document.querySelector("[ng-csp]") || L.document.querySelector("[data-ng-csp]");
					if (e) {
						var t = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
						I.rules = {
							noUnsafeEval: !t || -1 !== t.indexOf("no-unsafe-eval"),
							noInlineStyle: !t || -1 !== t.indexOf("no-inline-style")
						}
					} else I.rules = {
						noUnsafeEval: function() {
							try {
								return new Function(""), !1
							} catch (e) {
								return !0
							}
						}(),
						noInlineStyle: !1
					}
				}
				return I.rules
			},
			V = function() {
				if (q(V.name_)) return V.name_;
				var e, t, n, i, r = te.length;
				for (t = 0; t < r; ++t)
					if (n = te[t], e = L.document.querySelector("[" + n.replace(":", "\\:") + "jq]")) {
						i = e.getAttribute(n + "jq");
						break
					} return V.name_ = i
			};

		function B(e, t, n) {
			return e.concat(s.call(t, n))
		}

		function Se(e, t) {
			return s.call(e, t || 0)
		}

		function Ee(e, t) {
			var n = 2 < arguments.length ? Se(arguments, 2) : [];
			return !ge(t) || t instanceof RegExp ? t : n.length ? function() {
				return arguments.length ? t.apply(e, B(n, arguments, 0)) : t.apply(e, n)
			} : function() {
				return arguments.length ? t.apply(e, arguments) : t.call(e)
			}
		}

		function i(e, t) {
			var n = t;
			return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? n = void 0 : A(t) ? n = "$WINDOW" : t && L.document === t ? n = "$DOCUMENT" : ve(t) && (n = "$SCOPE"), n
		}

		function W(e, t) {
			if (!fe(e)) return $(t) || (t = t ? 2 : null), JSON.stringify(e, i, t)
		}

		function Y(e) {
			return pe(e) ? JSON.parse(e) : e
		}
		var r = /:/g;

		function G(e, t) {
			e = e.replace(r, "");
			var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
			return isNaN(n) ? t : n
		}

		function X(e, t, n) {
			n = n ? -1 : 1;
			var i, r, o = e.getTimezoneOffset();
			return i = e, r = n * (G(t, o) - o), (i = new Date(i.getTime())).setMinutes(i.getMinutes() + r), i
		}

		function Ce(e) {
			e = ue(e).clone();
			try {
				e.empty()
			} catch (e) {}
			var t = ue("<div>").append(e).html();
			try {
				return e[0].nodeType === Pe ? S(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
					return "<" + S(t)
				})
			} catch (e) {
				return S(t)
			}
		}

		function Z(e) {
			try {
				return decodeURIComponent(e)
			} catch (e) {}
		}

		function K(e) {
			var r = {};
			return ce((e || "").split("&"), function(e) {
				var t, n, i;
				e && (n = e = e.replace(/\+/g, "%20"), -1 !== (t = e.indexOf("=")) && (n = e.substring(0, t), i = e.substring(t + 1)), q(n = Z(n)) && (i = !q(i) || Z(i), F.call(r, n) ? me(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i))
			}), r
		}

		function J(e) {
			var n = [];
			return ce(e, function(e, t) {
				me(e) ? ce(e, function(e) {
					n.push(ee(t, !0) + (!0 === e ? "" : "=" + ee(e, !0)))
				}) : n.push(ee(t, !0) + (!0 === e ? "" : "=" + ee(e, !0)))
			}), n.length ? n.join("&") : ""
		}

		function Q(e) {
			return ee(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function ee(e, t) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
		}
		var te = ["ng-", "data-ng-", "ng:", "x-ng-"];

		function ne(n, i, r) {
			he(r) || (r = {}), r = de({
				strictDi: !1
			}, r);
			var t = function() {
					if ((n = ue(n)).injector()) {
						var e = n[0] === L.document ? "document" : Ce(n);
						throw u("btstrpd", "App already bootstrapped with this element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
					}(i = i || []).unshift(["$provide", function(e) {
						e.value("$rootElement", n)
					}]), r.debugInfoEnabled && i.push(["$compileProvider", function(e) {
						e.debugInfoEnabled(!0)
					}]), i.unshift("ng");
					var t = jt(i, r.strictDi);
					return t.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, i) {
						e.$apply(function() {
							t.data("$injector", i), n(t)(e)
						})
					}]), t
				},
				e = /^NG_ENABLE_DEBUG_INFO!/,
				o = /^NG_DEFER_BOOTSTRAP!/;
			if (L && e.test(L.name) && (r.debugInfoEnabled = !0, L.name = L.name.replace(e, "")), L && !o.test(L.name)) return t();
			L.name = L.name.replace(o, ""), C.resumeBootstrap = function(e) {
				return ce(e, function(e) {
					i.push(e)
				}), t()
			}, ge(C.resumeDeferredBootstrap) && C.resumeDeferredBootstrap()
		}
		var ie = /[A-Z]/g;

		function ke(e, n) {
			return n = n || "_", e.replace(ie, function(e, t) {
				return (t ? n : "") + e.toLowerCase()
			})
		}
		var re = !1;

		function Te(e, t, n) {
			if (!e) throw u("areq", "Argument '{0}' is {1}", t || "?", n || "required");
			return e
		}

		function oe(e, t, n) {
			return n && me(e) && (e = e[e.length - 1]), Te(ge(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
		}

		function ae(e, t) {
			if ("hasOwnProperty" === e) throw u("badname", "hasOwnProperty is not a valid {0} name", t)
		}

		function se(e, t, n) {
			if (!t) return e;
			for (var i, r = t.split("."), o = e, a = r.length, s = 0; s < a; s++) i = r[s], e && (e = (o = e)[i]);
			return !n && ge(e) ? Ee(o, e) : e
		}

		function le(e) {
			for (var t, n = e[0], i = e[e.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(t || e[r] !== n) && (t || (t = ue(s.call(e, 0, r))), t.push(n));
			return t || e
		}

		function _e() {
			return Object.create(null)
		}
		var Ae = 1,
			Pe = 3,
			Me = 8,
			Oe = 9,
			De = 11;

		function Ne(e, t) {
			if (me(e)) {
				t = t || [];
				for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
			} else if (he(e))
				for (var r in t = t || {}, e) "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r]);
			return t || e
		}

		function je(e) {
			return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : fe(e) ? "undefined" : "string" != typeof e ? (t = e, n = [], JSON.stringify(t, function(e, t) {
				if (he(t = i(e, t))) {
					if (0 <= n.indexOf(t)) return "...";
					n.push(t)
				}
				return t
			})) : e;
			var t, n
		}
		tt.expando = "ng339";
		var Ie = tt.cache = {},
			Le = 1,
			Fe = function(e, t, n) {
				e.addEventListener(t, n, !1)
			},
			Re = function(e, t, n) {
				e.removeEventListener(t, n, !1)
			};
		tt._data = function(e) {
			return this.cache[e[this.expando]] || {}
		};
		var ze = /([\:\-\_]+(.))/g,
			He = /^moz([A-Z])/,
			Ue = {
				mouseleave: "mouseout",
				mouseenter: "mouseover"
			},
			qe = p("jqLite");

		function Ve(e) {
			return e.replace(ze, function(e, t, n, i) {
				return i ? n.toUpperCase() : n
			}).replace(He, "Moz$1")
		}
		var Be = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			We = /<|&#?\w+;/,
			Ye = /<([\w:-]+)/,
			Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			Xe = {
				option: [1, '<select multiple="multiple">', "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

		function Ze(e) {
			return !We.test(e)
		}

		function Ke(e) {
			var t = e.nodeType;
			return t === Ae || !t || t === Oe
		}

		function Je(e, t) {
			var n, i, r, o, a = t.createDocumentFragment(),
				s = [];
			if (Ze(e)) s.push(t.createTextNode(e));
			else {
				for (n = a.appendChild(t.createElement("div")), i = (Ye.exec(e) || ["", ""])[1].toLowerCase(), r = Xe[i] || Xe._default, n.innerHTML = r[1] + e.replace(Ge, "<$1></$2>") + r[2], o = r[0]; o--;) n = n.lastChild;
				s = B(s, n.childNodes), (n = a.firstChild).textContent = ""
			}
			return a.textContent = "", a.innerHTML = "", ce(s, function(e) {
				a.appendChild(e)
			}), a
		}

		function Qe(e, t) {
			var n = e.parentNode;
			n && n.replaceChild(t, e), t.appendChild(e)
		}
		Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
		var et = L.Node.prototype.contains || function(e) {
			return !!(16 & this.compareDocumentPosition(e))
		};

		function tt(e) {
			if (e instanceof tt) return e;
			var t, n, i, r;
			if (pe(e) && (e = be(e), t = !0), !(this instanceof tt)) {
				if (t && "<" != e.charAt(0)) throw qe("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
				return new tt(e)
			}
			dt(this, t ? (n = e, i = i || L.document, (r = Be.exec(n)) ? [i.createElement(r[1])] : (r = Je(n, i)) ? r.childNodes : []) : e)
		}

		function nt(e) {
			return e.cloneNode(!0)
		}

		function it(e, t) {
			if (t || ot(e), e.querySelectorAll)
				for (var n = e.querySelectorAll("*"), i = 0, r = n.length; i < r; i++) ot(n[i])
		}

		function rt(n, e, i, t) {
			if (q(t)) throw qe("offargs", "jqLite#off() does not support the `selector` argument");
			var r = at(n),
				o = r && r.events,
				a = r && r.handle;
			if (a)
				if (e) {
					var s = function(e) {
						var t = o[e];
						q(i) && $e(t || [], i), q(i) && t && 0 < t.length || (Re(n, e, a), delete o[e])
					};
					ce(e.split(" "), function(e) {
						s(e), Ue[e] && s(Ue[e])
					})
				} else
					for (e in o) "$destroy" !== e && Re(n, e, a), delete o[e]
		}

		function ot(e, t) {
			var n = e.ng339,
				i = n && Ie[n];
			if (i) {
				if (t) return void delete i.data[t];
				i.handle && (i.events.$destroy && i.handle({}, "$destroy"), rt(e)), delete Ie[n], e.ng339 = void 0
			}
		}

		function at(e, t) {
			var n = e.ng339,
				i = n && Ie[n];
			return t && !i && (e.ng339 = n = ++Le, i = Ie[n] = {
				events: {},
				data: {},
				handle: void 0
			}), i
		}

		function st(e, t, n) {
			if (Ke(e)) {
				var i = q(n),
					r = !i && t && !he(t),
					o = !t,
					a = at(e, !r),
					s = a && a.data;
				if (i) s[t] = n;
				else {
					if (o) return s;
					if (r) return s && s[t];
					de(s, t)
				}
			}
		}

		function lt(e, t) {
			return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
		}

		function ut(t, e) {
			e && t.setAttribute && ce(e.split(" "), function(e) {
				t.setAttribute("class", be((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + be(e) + " ", " ")))
			})
		}

		function ct(e, t) {
			if (t && e.setAttribute) {
				var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
				ce(t.split(" "), function(e) {
					e = be(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
				}), e.setAttribute("class", be(n))
			}
		}

		function dt(e, t) {
			if (t)
				if (t.nodeType) e[e.length++] = t;
				else {
					var n = t.length;
					if ("number" == typeof n && t.window !== t) {
						if (n)
							for (var i = 0; i < n; i++) e[e.length++] = t[i]
					} else e[e.length++] = t
				}
		}

		function ft(e, t) {
			return ht(e, "$" + (t || "ngController") + "Controller")
		}

		function ht(e, t, n) {
			e.nodeType == Oe && (e = e.documentElement);
			for (var i = me(t) ? t : [t]; e;) {
				for (var r = 0, o = i.length; r < o; r++)
					if (q(n = ue.data(e, i[r]))) return n;
				e = e.parentNode || e.nodeType === De && e.host
			}
		}

		function pt(e) {
			for (it(e, !0); e.firstChild;) e.removeChild(e.firstChild)
		}

		function mt(e, t) {
			t || it(e);
			var n = e.parentNode;
			n && n.removeChild(e)
		}
		var gt = tt.prototype = {
				ready: function(e) {
					var t = !1;

					function n() {
						t || (t = !0, e())
					}
					"complete" === L.document.readyState ? L.setTimeout(n) : (this.on("DOMContentLoaded", n), tt(L).on("load", n))
				},
				toString: function() {
					var t = [];
					return ce(this, function(e) {
						t.push("" + e)
					}), "[" + t.join(", ") + "]"
				},
				eq: function(e) {
					return ue(0 <= e ? this[e] : this[this.length + e])
				},
				length: 0,
				push: e,
				sort: [].sort,
				splice: [].splice
			},
			vt = {};
		ce("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
			vt[S(e)] = e
		});
		var yt = {};
		ce("input,select,option,textarea,button,form,details".split(","), function(e) {
			yt[e] = !0
		});
		var bt = {
			ngMinlength: "minlength",
			ngMaxlength: "maxlength",
			ngMin: "min",
			ngMax: "max",
			ngPattern: "pattern"
		};

		function wt(e, t) {
			var n = vt[t.toLowerCase()];
			return n && yt[we(e)] && n
		}

		function $t(e, t, n) {
			n.call(e, t)
		}

		function xt(e, t, n) {
			var i = t.relatedTarget;
			i && (i === e || et.call(e, i)) || n.call(e, t)
		}

		function St() {
			this.$get = function() {
				return de(tt, {
					hasClass: function(e, t) {
						return e.attr && (e = e[0]), lt(e, t)
					},
					addClass: function(e, t) {
						return e.attr && (e = e[0]), ct(e, t)
					},
					removeClass: function(e, t) {
						return e.attr && (e = e[0]), ut(e, t)
					}
				})
			}
		}

		function Et(e, t) {
			var n = e && e.$$hashKey;
			if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
			var i = typeof e;
			return "function" == i || "object" == i && null !== e ? e.$$hashKey = i + ":" + (t || _)() : i + ":" + e
		}

		function Ct(e, t) {
			if (t) {
				var n = 0;
				this.nextUid = function() {
					return ++n
				}
			}
			ce(e, this.put, this)
		}
		ce({
			data: st,
			removeData: ot,
			hasData: function(e) {
				for (var t in Ie[e.ng339]) return !0;
				return !1
			},
			cleanData: function(e) {
				for (var t = 0, n = e.length; t < n; t++) ot(e[t])
			}
		}, function(e, t) {
			tt[t] = e
		}), ce({
			data: st,
			inheritedData: ht,
			scope: function(e) {
				return ue.data(e, "$scope") || ht(e.parentNode || e, ["$isolateScope", "$scope"])
			},
			isolateScope: function(e) {
				return ue.data(e, "$isolateScope") || ue.data(e, "$isolateScopeNoTemplate")
			},
			controller: ft,
			injector: function(e) {
				return ht(e, "$injector")
			},
			removeAttr: function(e, t) {
				e.removeAttribute(t)
			},
			hasClass: lt,
			css: function(e, t, n) {
				if (t = Ve(t), !q(n)) return e.style[t];
				e.style[t] = n
			},
			attr: function(e, t, n) {
				var i = e.nodeType;
				if (i !== Pe && 2 !== i && i !== Me) {
					var r = S(t);
					if (vt[r]) {
						if (!q(n)) return e[t] || (e.attributes.getNamedItem(t) || U).specified ? r : void 0;
						n ? (e[t] = !0, e.setAttribute(t, r)) : (e[t] = !1, e.removeAttribute(r))
					} else if (q(n)) e.setAttribute(t, n);
					else if (e.getAttribute) {
						var o = e.getAttribute(t, 2);
						return null === o ? void 0 : o
					}
				}
			},
			prop: function(e, t, n) {
				if (!q(n)) return e[t];
				e[t] = n
			},
			text: function() {
				return e.$dv = "", e;

				function e(e, t) {
					if (fe(t)) {
						var n = e.nodeType;
						return n === Ae || n === Pe ? e.textContent : ""
					}
					e.textContent = t
				}
			}(),
			val: function(e, t) {
				if (fe(t)) {
					if (e.multiple && "select" === we(e)) {
						var n = [];
						return ce(e.options, function(e) {
							e.selected && n.push(e.value || e.text)
						}), 0 === n.length ? null : n
					}
					return e.value
				}
				e.value = t
			},
			html: function(e, t) {
				if (fe(t)) return e.innerHTML;
				it(e, !0), e.innerHTML = t
			},
			empty: pt
		}, function(u, e) {
			tt.prototype[e] = function(e, t) {
				var n, i, r = this.length;
				if (u !== pt && fe(2 == u.length && u !== lt && u !== ft ? e : t)) {
					if (he(e)) {
						for (n = 0; n < r; n++)
							if (u === st) u(this[n], e);
							else
								for (i in e) u(this[n], i, e[i]);
						return this
					}
					for (var o = u.$dv, a = fe(o) ? Math.min(r, 1) : r, s = 0; s < a; s++) {
						var l = u(this[s], e, t);
						o = o ? o + l : l
					}
					return o
				}
				for (n = 0; n < r; n++) u(this[n], e, t);
				return this
			}
		}), ce({
			removeData: ot,
			on: function(r, e, o, t) {
				if (q(t)) throw qe("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
				if (Ke(r)) {
					var s, l, n, i = at(r, !0),
						a = i.events,
						u = i.handle;
					u || (u = i.handle = (l = a, (n = function(e, t) {
						e.isDefaultPrevented = function() {
							return e.defaultPrevented
						};
						var n = l[t || e.type],
							i = n ? n.length : 0;
						if (i) {
							if (fe(e.immediatePropagationStopped)) {
								var r = e.stopImmediatePropagation;
								e.stopImmediatePropagation = function() {
									e.immediatePropagationStopped = !0, e.stopPropagation && e.stopPropagation(), r && r.call(e)
								}
							}
							e.isImmediatePropagationStopped = function() {
								return !0 === e.immediatePropagationStopped
							};
							var o = n.specialHandlerWrapper || $t;
							1 < i && (n = Ne(n));
							for (var a = 0; a < i; a++) e.isImmediatePropagationStopped() || o(s, e, n[a])
						}
					}).elem = s = r, n));
					for (var c = 0 <= e.indexOf(" ") ? e.split(" ") : [e], d = c.length, f = function(e, t, n) {
							var i = a[e];
							i || ((i = a[e] = []).specialHandlerWrapper = t, "$destroy" === e || n || Fe(r, e, u)), i.push(o)
						}; d--;) e = c[d], Ue[e] ? (f(Ue[e], xt), f(e, void 0, !0)) : f(e)
				}
			},
			off: rt,
			one: function(t, n, i) {
				(t = ue(t)).on(n, function e() {
					t.off(n, i), t.off(n, e)
				}), t.on(n, i)
			},
			replaceWith: function(t, e) {
				var n, i = t.parentNode;
				it(t), ce(new tt(e), function(e) {
					n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
				})
			},
			children: function(e) {
				var t = [];
				return ce(e.childNodes, function(e) {
					e.nodeType === Ae && t.push(e)
				}), t
			},
			contents: function(e) {
				return e.contentDocument || e.childNodes || []
			},
			append: function(e, t) {
				var n = e.nodeType;
				if (n === Ae || n === De)
					for (var i = 0, r = (t = new tt(t)).length; i < r; i++) {
						var o = t[i];
						e.appendChild(o)
					}
			},
			prepend: function(t, e) {
				if (t.nodeType === Ae) {
					var n = t.firstChild;
					ce(new tt(e), function(e) {
						t.insertBefore(e, n)
					})
				}
			},
			wrap: function(e, t) {
				Qe(e, ue(t).eq(0).clone()[0])
			},
			remove: mt,
			detach: function(e) {
				mt(e, !0)
			},
			after: function(e, t) {
				for (var n = e, i = e.parentNode, r = 0, o = (t = new tt(t)).length; r < o; r++) {
					var a = t[r];
					i.insertBefore(a, n.nextSibling), n = a
				}
			},
			addClass: ct,
			removeClass: ut,
			toggleClass: function(n, e, i) {
				e && ce(e.split(" "), function(e) {
					var t = i;
					fe(t) && (t = !lt(n, e)), (t ? ct : ut)(n, e)
				})
			},
			parent: function(e) {
				var t = e.parentNode;
				return t && t.nodeType !== De ? t : null
			},
			next: function(e) {
				return e.nextElementSibling
			},
			find: function(e, t) {
				return e.getElementsByTagName ? e.getElementsByTagName(t) : []
			},
			clone: nt,
			triggerHandler: function(t, e, n) {
				var i, r, o, a = e.type || e,
					s = at(t),
					l = s && s.events,
					u = l && l[a];
				u && (i = {
					preventDefault: function() {
						this.defaultPrevented = !0
					},
					isDefaultPrevented: function() {
						return !0 === this.defaultPrevented
					},
					stopImmediatePropagation: function() {
						this.immediatePropagationStopped = !0
					},
					isImmediatePropagationStopped: function() {
						return !0 === this.immediatePropagationStopped
					},
					stopPropagation: U,
					type: a,
					target: t
				}, e.type && (i = de(i, e)), r = Ne(u), o = n ? [i].concat(n) : [i], ce(r, function(e) {
					i.isImmediatePropagationStopped() || e.apply(t, o)
				}))
			}
		}, function(a, e) {
			tt.prototype[e] = function(e, t, n) {
				for (var i, r = 0, o = this.length; r < o; r++) fe(i) ? q(i = a(this[r], e, t, n)) && (i = ue(i)) : dt(i, a(this[r], e, t, n));
				return q(i) ? i : this
			}, tt.prototype.bind = tt.prototype.on, tt.prototype.unbind = tt.prototype.off
		}), Ct.prototype = {
			put: function(e, t) {
				this[Et(e, this.nextUid)] = t
			},
			get: function(e) {
				return this[Et(e, this.nextUid)]
			},
			remove: function(e) {
				var t = this[e = Et(e, this.nextUid)];
				return delete this[e], t
			}
		};
		var kt = [function() {
				this.$get = [function() {
					return Ct
				}]
			}],
			Tt = /^([^\(]+?)=>/,
			_t = /^[^\(]*\(\s*([^\)]*)\)/m,
			At = /,/,
			Pt = /^\s*(_?)(\S+?)\1\s*$/,
			Mt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
			Ot = p("$injector");

		function Dt(e) {
			return Function.prototype.toString.call(e) + " "
		}

		function Nt(e) {
			var t = Dt(e).replace(Mt, "");
			return t.match(Tt) || t.match(_t)
		}

		function jt(e, u) {
			u = !0 === u;
			var r = {},
				o = "Provider",
				s = [],
				a = new Ct([], !0),
				c = {
					$provide: {
						provider: f(h),
						factory: f(p),
						service: f(function(e, t) {
							return p(e, ["$injector", function(e) {
								return e.instantiate(t)
							}])
						}),
						value: f(function(e, t) {
							return p(e, k(t), !1)
						}),
						constant: f(function(e, t) {
							ae(e, "constant"), c[e] = t, n[e] = t
						}),
						decorator: function(e, t) {
							var n = l.get(e + o),
								i = n.$get;
							n.$get = function() {
								var e = d.invoke(i, n);
								return d.invoke(t, null, {
									$delegate: e
								})
							}
						}
					}
				},
				l = c.$injector = m(c, function(e, t) {
					throw C.isString(t) && s.push(t), Ot("unpr", "Unknown provider: {0}", s.join(" <- "))
				}),
				n = {},
				t = m(n, function(e, t) {
					var n = l.get(e + o, t);
					return d.invoke(n.$get, n, void 0, e)
				}),
				d = t;
			c["$injector" + o] = {
				$get: k(t)
			};
			var i = function n(e) {
				Te(fe(e) || me(e), "modulesToLoad", "not an array");
				var i, r = [];
				return ce(e, function(e) {
					if (!a.get(e)) {
						a.put(e, !0);
						try {
							pe(e) ? (i = g(e), r = r.concat(n(i.requires)).concat(i._runBlocks), t(i._invokeQueue), t(i._configBlocks)) : ge(e) ? r.push(l.invoke(e)) : me(e) ? r.push(l.invoke(e)) : oe(e, "module")
						} catch (t) {
							throw me(e) && (e = e[e.length - 1]), t.message && t.stack && -1 == t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Ot("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
						}
					}

					function t(e) {
						var t, n;
						for (t = 0, n = e.length; t < n; t++) {
							var i = e[t],
								r = l.get(i[0]);
							r[i[1]].apply(r, i[2])
						}
					}
				}), r
			}(e);
			return (d = t.get("$injector")).strictDi = u, ce(i, function(e) {
				e && d.invoke(e)
			}), d;

			function f(n) {
				return function(e, t) {
					if (!he(e)) return n(e, t);
					ce(e, v(n))
				}
			}

			function h(e, t) {
				if (ae(e, "service"), (ge(t) || me(t)) && (t = l.instantiate(t)), !t.$get) throw Ot("pget", "Provider '{0}' must define $get factory method.", e);
				return c[e + o] = t
			}

			function p(e, t, n) {
				return h(e, {
					$get: !1 !== n ? (i = e, r = t, function() {
						var e = d.invoke(r, this);
						if (fe(e)) throw Ot("undef", "Provider '{0}' must return a value from $get factory method.", i);
						return e
					}) : t
				});
				var i, r
			}

			function m(n, i) {
				function l(e, t) {
					if (n.hasOwnProperty(e)) {
						if (n[e] === r) throw Ot("cdep", "Circular dependency found: {0}", e + " <- " + s.join(" <- "));
						return n[e]
					}
					try {
						return s.unshift(e), n[e] = r, n[e] = i(e, t)
					} catch (t) {
						throw n[e] === r && delete n[e], t
					} finally {
						s.shift()
					}
				}

				function a(e, t, n) {
					for (var i = [], r = jt.$$annotate(e, u, n), o = 0, a = r.length; o < a; o++) {
						var s = r[o];
						if ("string" != typeof s) throw Ot("itkn", "Incorrect injection token! Expected service name as string, got {0}", s);
						i.push(t && t.hasOwnProperty(s) ? t[s] : l(s, n))
					}
					return i
				}
				return {
					invoke: function(e, t, n, i) {
						"string" == typeof n && (i = n, n = null);
						var r, o = a(e, n, i);
						return me(e) && (e = e[e.length - 1]), r = e, R <= 11 || "function" != typeof r || !/^(?:class\b|constructor\()/.test(Dt(r)) ? e.apply(t, o) : (o.unshift(null), new(Function.prototype.bind.apply(e, o)))
					},
					instantiate: function(e, t, n) {
						var i = me(e) ? e[e.length - 1] : e,
							r = a(e, t, n);
						return r.unshift(null), new(Function.prototype.bind.apply(i, r))
					},
					get: l,
					annotate: jt.$$annotate,
					has: function(e) {
						return c.hasOwnProperty(e + o) || n.hasOwnProperty(e)
					}
				}
			}
		}

		function It() {
			var e = !0;
			this.disableAutoScrolling = function() {
				e = !1
			}, this.$get = ["$window", "$location", "$rootScope", function(i, r, o) {
				var a = i.document;

				function s(e) {
					if (e) {
						e.scrollIntoView();
						var t = function() {
							var e = l.yOffset;
							if (ge(e)) e = e();
							else if (D(e)) {
								var t = e[0];
								e = "fixed" !== i.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom
							} else $(e) || (e = 0);
							return e
						}();
						if (t) {
							var n = e.getBoundingClientRect().top;
							i.scrollBy(0, n - t)
						}
					} else i.scrollTo(0, 0)
				}

				function l(e) {
					var t, n, i;
					(e = pe(e) ? e : r.hash()) ? (t = a.getElementById(e)) ? s(t): (n = a.getElementsByName(e), i = null, Array.prototype.some.call(n, function(e) {
						if ("a" === we(e)) return i = e, !0
					}), (t = i) ? s(t) : "top" === e && s(null)): s(null)
				}
				return e && o.$watch(function() {
					return r.hash()
				}, function(e, t) {
					var n, i;
					e === t && "" === e || (n = function() {
						o.$evalAsync(l)
					}, "complete" === (i = i || L).document.readyState ? i.setTimeout(n) : ue(i).on("load", n))
				}), l
			}]
		}
		jt.$$annotate = function(e, t, n) {
			var i, r, o;
			if ("function" == typeof e) {
				if (!(i = e.$inject)) {
					if (i = [], e.length) {
						if (t) throw pe(n) && n || (n = e.name || ((o = Nt(e)) ? "function(" + (o[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn")), Ot("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
						ce(Nt(e)[1].split(At), function(e) {
							e.replace(Pt, function(e, t, n) {
								i.push(n)
							})
						})
					}
					e.$inject = i
				}
			} else me(e) ? (oe(e[r = e.length - 1], "fn"), i = e.slice(0, r)) : oe(e, "fn", !0);
			return i
		};
		var Lt = p("$animate"),
			Ft = "ng-animate";

		function Rt(e, t) {
			return e || t ? e ? t ? (me(e) && (e = e.join(" ")), me(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
		}

		function zt(e) {
			return he(e) ? e : {}
		}
		var Ht = function() {
				this.$get = U
			},
			Ut = function() {
				var m = new Ct,
					g = [];
				this.$get = ["$$AnimateRunner", "$rootScope", function(d, f) {
					return {
						enabled: U,
						on: U,
						off: U,
						pin: U,
						push: function(e, t, n, i) {
							var r, o, a, s, l, u;
							i && i(), (n = n || {}).from && e.css(n.from), n.to && e.css(n.to), (n.addClass || n.removeClass) && (r = e, o = n.addClass, a = n.removeClass, l = h(s = m.get(r) || {}, o, !0), u = h(s, a, !1), (l || u) && (m.put(r, s), g.push(r), 1 === g.length && f.$$postDigest(p)));
							var c = new d;
							return c.complete(), c
						}
					};

					function h(t, e, n) {
						var i = !1;
						return e && ce(e = pe(e) ? e.split(" ") : me(e) ? e : [], function(e) {
							e && (i = !0, t[e] = n)
						}), i
					}

					function p() {
						ce(g, function(e) {
							var t = m.get(e);
							if (t) {
								var n = function(e) {
										pe(e) && (e = e.split(" "));
										var t = _e();
										return ce(e, function(e) {
											e.length && (t[e] = !0)
										}), t
									}(e.attr("class")),
									i = "",
									r = "";
								ce(t, function(e, t) {
									e !== !!n[t] && (e ? i += (i.length ? " " : "") + t : r += (r.length ? " " : "") + t)
								}), ce(e, function(e) {
									i && ct(e, i), r && ut(e, r)
								}), m.remove(e)
							}
						}), g.length = 0
					}
				}]
			},
			qt = ["$provide", function(i) {
				var r = this;
				this.$$registeredAnimations = Object.create(null), this.register = function(e, t) {
					if (e && "." !== e.charAt(0)) throw Lt("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
					var n = e + "-animation";
					r.$$registeredAnimations[e.substr(1)] = n, i.factory(n, t)
				}, this.classNameFilter = function(e) {
					if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter && new RegExp("(\\s+|\\/)" + Ft + "(\\s+|\\/)").test(this.$$classNameFilter.toString()))) throw Lt("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ft);
					return this.$$classNameFilter
				}, this.$get = ["$$animateQueue", function(o) {
					function r(e, t, n) {
						if (n) {
							var i = function(e) {
								for (var t = 0; t < e.length; t++) {
									var n = e[t];
									if (1 === n.nodeType) return n
								}
							}(n);
							!i || i.parentNode || i.previousElementSibling || (n = null)
						}
						n ? n.after(e) : t.prepend(e)
					}
					return {
						on: o.on,
						off: o.off,
						pin: o.pin,
						enabled: o.enabled,
						cancel: function(e) {
							e.end && e.end()
						},
						enter: function(e, t, n, i) {
							return t = t && ue(t), n = n && ue(n), r(e, t = t || n.parent(), n), o.push(e, "enter", zt(i))
						},
						move: function(e, t, n, i) {
							return t = t && ue(t), n = n && ue(n), r(e, t = t || n.parent(), n), o.push(e, "move", zt(i))
						},
						leave: function(e, t) {
							return o.push(e, "leave", zt(t), function() {
								e.remove()
							})
						},
						addClass: function(e, t, n) {
							return (n = zt(n)).addClass = Rt(n.addclass, t), o.push(e, "addClass", n)
						},
						removeClass: function(e, t, n) {
							return (n = zt(n)).removeClass = Rt(n.removeClass, t), o.push(e, "removeClass", n)
						},
						setClass: function(e, t, n, i) {
							return (i = zt(i)).addClass = Rt(i.addClass, t), i.removeClass = Rt(i.removeClass, n), o.push(e, "setClass", i)
						},
						animate: function(e, t, n, i, r) {
							return (r = zt(r)).from = r.from ? de(r.from, t) : t, r.to = r.to ? de(r.to, n) : n, i = i || "ng-inline-animate", r.tempClasses = Rt(r.tempClasses, i), o.push(e, "animate", r)
						}
					}
				}]
			}],
			Vt = function() {
				this.$get = ["$$rAF", function(t) {
					var n = [];

					function i(e) {
						n.push(e), 1 < n.length || t(function() {
							for (var e = 0; e < n.length; e++) n[e]();
							n = []
						})
					}
					return function() {
						var t = !1;
						return i(function() {
								t = !0
							}),
							function(e) {
								t ? e() : i(e)
							}
					}
				}]
			},
			Bt = function() {
				this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(t, e, i, r, o) {
					function n(e) {
						this.setHost(e);
						var n = i();
						this._doneCallbacks = [], this._tick = function(e) {
							var t = r[0];
							t && t.hidden ? o(e, 0, !1) : n(e)
						}, this._state = 0
					}
					return n.chain = function(e, n) {
						var i = 0;
						! function t() {
							i !== e.length ? e[i](function(e) {
								!1 !== e ? (i++, t()) : n(!1)
							}) : n(!0)
						}()
					}, n.all = function(t, n) {
						var i = 0,
							r = !0;

						function o(e) {
							r = r && e, ++i === t.length && n(r)
						}
						ce(t, function(e) {
							e.done(o)
						})
					}, n.prototype = {
						setHost: function(e) {
							this.host = e || {}
						},
						done: function(e) {
							2 === this._state ? e() : this._doneCallbacks.push(e)
						},
						progress: U,
						getPromise: function() {
							if (!this.promise) {
								var e = this;
								this.promise = t(function(t, n) {
									e.done(function(e) {
										!1 === e ? n() : t()
									})
								})
							}
							return this.promise
						},
						then: function(e, t) {
							return this.getPromise().then(e, t)
						},
						catch: function(e) {
							return this.getPromise().catch(e)
						},
						finally: function(e) {
							return this.getPromise().finally(e)
						},
						pause: function() {
							this.host.pause && this.host.pause()
						},
						resume: function() {
							this.host.resume && this.host.resume()
						},
						end: function() {
							this.host.end && this.host.end(), this._resolve(!0)
						},
						cancel: function() {
							this.host.cancel && this.host.cancel(), this._resolve(!1)
						},
						complete: function(e) {
							var t = this;
							0 === t._state && (t._state = 1, t._tick(function() {
								t._resolve(e)
							}))
						},
						_resolve: function(t) {
							2 !== this._state && (ce(this._doneCallbacks, function(e) {
								e(t)
							}), this._doneCallbacks.length = 0, this._state = 2)
						}
					}, n
				}]
			},
			Wt = function() {
				this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, e, s) {
					return function(e, t) {
						var n = t || {};
						n.$$prepared || (n = j(n)), n.cleanupStyles && (n.from = n.to = null), n.from && (e.css(n.from), n.from = null);
						var i, r = new s;
						return {
							start: o,
							end: o
						};

						function o() {
							return a(function() {
								n.addClass && (e.addClass(n.addClass), n.addClass = null), n.removeClass && (e.removeClass(n.removeClass), n.removeClass = null), n.to && (e.css(n.to), n.to = null), i || r.complete(), i = !0
							}), r
						}
					}
				}]
			};

		function Yt(s, e, t, l) {
			var u = this,
				c = s.location,
				d = s.history,
				i = s.setTimeout,
				n = s.clearTimeout,
				r = {};
			u.isMock = !1;
			var o = 0,
				a = [];

			function f(e) {
				try {
					e.apply(null, Se(arguments, 1))
				} finally {
					if (0 == --o)
						for (; a.length;) try {
							a.pop()()
						} catch (e) {
							t.error(e)
						}
				}
			}
			u.$$completeOutstandingRequest = f, u.$$incOutstandingRequestCount = function() {
				o++
			}, u.notifyWhenNoOutstandingRequests = function(e) {
				0 === o ? e() : a.push(e)
			};
			var h, p, m = c.href,
				g = e.find("base"),
				v = null,
				y = l.history ? function() {
					try {
						return d.state
					} catch (e) {}
				} : U;
			S(), p = h, u.url = function(e, t, n) {
				if (fe(n) && (n = null), c !== s.location && (c = s.location), d !== s.history && (d = s.history), e) {
					var i = p === n;
					if (m === e && (!l.history || i)) return u;
					var r = m && qn(m) === qn(e);
					return m = e, p = n, !l.history || r && i ? (r || (v = e), t ? c.replace(e) : r ? c.hash = -1 === (a = (o = e).indexOf("#")) ? "" : o.substr(a) : c.href = e, c.href !== e && (v = e)) : (d[t ? "replaceState" : "pushState"](n, "", e), S(), p = h), v && (v = e), u
				}
				return v || c.href.replace(/%27/g, "'");
				var o, a
			}, u.state = function() {
				return h
			};
			var b = [],
				w = !1;

			function $() {
				v = null, S(), E()
			}
			var x = null;

			function S() {
				xe(h = fe(h = y()) ? null : h, x) && (h = x), x = h
			}

			function E() {
				m === u.url() && p === h || (m = u.url(), p = h, ce(b, function(e) {
					e(u.url(), h)
				}))
			}
			u.onUrlChange = function(e) {
				return w || (l.history && ue(s).on("popstate", $), ue(s).on("hashchange", $), w = !0), b.push(e), e
			}, u.$$applicationDestroyed = function() {
				ue(s).off("hashchange popstate", $)
			}, u.$$checkUrlChange = E, u.baseHref = function() {
				var e = g.attr("href");
				return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
			}, u.defer = function(e, t) {
				var n;
				return o++, n = i(function() {
					delete r[n], f(e)
				}, t || 0), r[n] = !0, n
			}, u.defer.cancel = function(e) {
				return !!r[e] && (delete r[e], n(e), f(U), !0)
			}
		}

		function Gt() {
			this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, i) {
				return new Yt(e, i, t, n)
			}]
		}

		function Xt() {
			this.$get = function() {
				var d = {};

				function e(e, t) {
					if (e in d) throw p("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
					var n = 0,
						i = de({}, t, {
							id: e
						}),
						r = _e(),
						o = t && t.capacity || Number.MAX_VALUE,
						a = _e(),
						s = null,
						l = null;
					return d[e] = {
						put: function(e, t) {
							if (!fe(t)) return o < Number.MAX_VALUE && u(a[e] || (a[e] = {
								key: e
							})), e in r || n++, r[e] = t, o < n && this.remove(l.key), t
						},
						get: function(e) {
							if (o < Number.MAX_VALUE) {
								var t = a[e];
								if (!t) return;
								u(t)
							}
							return r[e]
						},
						remove: function(e) {
							if (o < Number.MAX_VALUE) {
								var t = a[e];
								if (!t) return;
								t == s && (s = t.p), t == l && (l = t.n), c(t.n, t.p), delete a[e]
							}
							e in r && (delete r[e], n--)
						},
						removeAll: function() {
							r = _e(), n = 0, a = _e(), s = l = null
						},
						destroy: function() {
							a = i = r = null, delete d[e]
						},
						info: function() {
							return de({}, i, {
								size: n
							})
						}
					};

					function u(e) {
						e != s && (l ? l == e && (l = e.n) : l = e, c(e.n, e.p), c(e, s), (s = e).n = null)
					}

					function c(e, t) {
						e != t && (e && (e.p = t), t && (t.n = e))
					}
				}
				return e.info = function() {
					var n = {};
					return ce(d, function(e, t) {
						n[t] = e.info()
					}), n
				}, e.get = function(e) {
					return d[e]
				}, e
			}
		}

		function Zt() {
			this.$get = ["$cacheFactory", function(e) {
				return e("templates")
			}]
		}
		var Kt = p("$compile"),
			Jt = new function() {};

		function Qt(n, t) {
			var p = {},
				m = "Directive",
				j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
				I = /(([\w\-]+)(?:\:([^;]+))?;?)/,
				c = function(e) {
					var t, n = {},
						i = "ngSrc,ngSrcset,src,srcset".split(",");
					for (t = 0; t < i.length; t++) n[i[t]] = !0;
					return n
				}(),
				f = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
				d = /^(on[a-z]+|formaction)$/,
				s = _e();

			function o(e, i, r) {
				var o = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
					a = _e();
				return ce(e, function(e, t) {
					if (e in s) a[t] = s[e];
					else {
						var n = e.match(o);
						if (!n) throw Kt("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", i, t, e, r ? "controller bindings definition" : "isolate scope definition");
						a[t] = {
							mode: n[1][0],
							collection: "*" === n[2],
							optional: "?" === n[3],
							attrName: n[4] || t
						}, n[4] && (s[e] = a[t])
					}
				}), a
			}

			function g(e, t) {
				var n = {
					isolateScope: null,
					bindToController: null
				};
				if (he(e.scope) && (!0 === e.bindToController ? (n.bindToController = o(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = o(e.scope, t, !1)), he(e.bindToController) && (n.bindToController = o(e.bindToController, t, !0)), he(n.bindToController)) {
					var i = e.controller,
						r = e.controllerAs;
					if (!i) throw Kt("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
					if (!ln(i, r)) throw Kt("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
				}
				return n
			}
			this.directive = function e(l, t) {
				return ae(l, "directive"), pe(l) ? (function(e) {
					var t = e.charAt(0);
					if (!t || t !== S(t)) throw Kt("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
					if (e !== e.trim()) throw Kt("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
				}(l), Te(t, "directiveFactory"), p.hasOwnProperty(l) || (p[l] = [], n.factory(l + m, ["$injector", "$exceptionHandler", function(o, a) {
					var s = [];
					return ce(p[l], function(e, t) {
						try {
							var n = o.invoke(e);
							ge(n) ? n = {
								compile: k(n)
							} : !n.compile && n.link && (n.compile = k(n.link)), n.priority = n.priority || 0, n.index = t, n.name = n.name || l, n.require = (r = (i = n).require || i.controller && i.name, !me(r) && he(r) && ce(r, function(e, t) {
								var n = e.match(f);
								e.substring(n[0].length) || (r[t] = n[0] + t)
							}), r), n.restrict = n.restrict || "EA", n.$$moduleName = e.$$moduleName, s.push(n)
						} catch (e) {
							a(e)
						}
						var i, r
					}), s
				}])), p[l].push(t)) : ce(l, v(e)), this
			}, this.component = function(e, r) {
				var o = r.controller || function() {};

				function n(i) {
					function e(n) {
						return ge(n) || me(n) ? function(e, t) {
							return i.invoke(n, this, {
								$element: e,
								$attrs: t
							})
						} : n
					}
					var t = r.template || r.templateUrl ? r.template : "",
						n = {
							controller: o,
							controllerAs: ln(r.controller) || r.controllerAs || "$ctrl",
							template: e(t),
							templateUrl: e(r.templateUrl),
							transclude: r.transclude,
							scope: {},
							bindToController: r.bindings || {},
							restrict: "E",
							require: r.require
						};
					return ce(r, function(e, t) {
						"$" === t.charAt(0) && (n[t] = e)
					}), n
				}
				return ce(r, function(e, t) {
					"$" === t.charAt(0) && (n[t] = e, ge(o) && (o[t] = e))
				}), n.$inject = ["$injector"], this.directive(e, n)
			}, this.aHrefSanitizationWhitelist = function(e) {
				return q(e) ? (t.aHrefSanitizationWhitelist(e), this) : t.aHrefSanitizationWhitelist()
			}, this.imgSrcSanitizationWhitelist = function(e) {
				return q(e) ? (t.imgSrcSanitizationWhitelist(e), this) : t.imgSrcSanitizationWhitelist()
			};
			var u = !0;
			this.debugInfoEnabled = function(e) {
				return q(e) ? (u = e, this) : u
			};
			var $ = 10;
			this.onChangesTtl = function(e) {
				return arguments.length ? ($ = e, this) : $
			}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(h, E, V, e, y, B, o, i, r, v) {
				var a, b = /^\w/,
					w = L.document.createElement("div"),
					t = $;

				function s() {
					try {
						if (!--t) throw a = void 0, Kt("infchng", "{0} $onChanges() iterations reached. Aborting!\n", $);
						o.$apply(function() {
							for (var e = [], t = 0, n = a.length; t < n; ++t) try {
								a[t]()
							} catch (t) {
								e.push(t)
							}
							if (a = void 0, e.length) throw e
						})
					} finally {
						t++
					}
				}

				function W(e, t) {
					if (t) {
						var n, i, r, o = Object.keys(t);
						for (n = 0, i = o.length; n < i; n++) this[r = o[n]] = t[r]
					} else this.$attr = {};
					this.$$element = e
				}

				function _(e, t) {
					try {
						e.addClass(t)
					} catch (e) {}
				}
				W.prototype = {
					$normalize: nn,
					$addClass: function(e) {
						e && 0 < e.length && r.addClass(this.$$element, e)
					},
					$removeClass: function(e) {
						e && 0 < e.length && r.removeClass(this.$$element, e)
					},
					$updateClass: function(e, t) {
						var n = rn(e, t);
						n && n.length && r.addClass(this.$$element, n);
						var i = rn(t, e);
						i && i.length && r.removeClass(this.$$element, i)
					},
					$set: function(e, t, n, i) {
						var r, o = wt(this.$$element[0], e),
							a = bt[e],
							s = e;
						if (o ? (this.$$element.prop(e, t), i = o) : a && (this[a] = t, s = a), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = ke(e, "-")), "a" === (r = we(this.$$element)) && ("href" === e || "xlinkHref" === e) || "img" === r && "src" === e) this[e] = t = v(t, "src" === e);
						else if ("img" === r && "srcset" === e && q(t)) {
							for (var l = "", u = be(t), c = /\s/.test(u) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/, d = u.split(c), f = Math.floor(d.length / 2), h = 0; h < f; h++) {
								var p = 2 * h;
								l += v(be(d[p]), !0), l += " " + be(d[p + 1])
							}
							var m = be(d[2 * h]).split(/\s/);
							l += v(be(m[0]), !0), 2 === m.length && (l += " " + be(m[1])), this[e] = t = l
						}!1 !== n && (null === t || fe(t) ? this.$$element.removeAttr(i) : b.test(i) ? this.$$element.attr(i, t) : function(e, t, n) {
							w.innerHTML = "<span " + t + ">";
							var i = w.firstChild.attributes,
								r = i[0];
							i.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
						}(this.$$element[0], i, t));
						var g = this.$$observers;
						g && ce(g[s], function(e) {
							try {
								e(t)
							} catch (e) {
								V(e)
							}
						})
					},
					$observe: function(e, t) {
						var n = this,
							i = n.$$observers || (n.$$observers = _e()),
							r = i[e] || (i[e] = []);
						return r.push(t), o.$evalAsync(function() {
								r.$$inter || !n.hasOwnProperty(e) || fe(n[e]) || t(n[e])
							}),
							function() {
								$e(r, t)
							}
					}
				};
				var n = E.startSymbol(),
					l = E.endSymbol(),
					Y = "{{" == n && "}}" == l ? x : function(e) {
						return e.replace(/\{\{/g, n).replace(/}}/g, l)
					},
					C = /^ngAttr[A-Z]/,
					k = /^(.+)Start$/;
				return G.$$addBindingInfo = u ? function(e, t) {
					var n = e.data("$binding") || [];
					me(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
				} : U, G.$$addBindingClass = u ? function(e) {
					_(e, "ng-binding")
				} : U, G.$$addScopeInfo = u ? function(e, t, n, i) {
					var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
					e.data(r, t)
				} : U, G.$$addScopeClass = u ? function(e, t) {
					_(e, t ? "ng-isolate-scope" : "ng-scope")
				} : U, G.$$createComment = function(e, t) {
					var n = "";
					return u && (n = " " + (e || "") + ": ", t && (n += t + " ")), L.document.createComment(n)
				}, G;

				function G(c, e, t, n, d) {
					c instanceof ue || (c = ue(c));
					for (var i = /\S+/, r = 0, o = c.length; r < o; r++) {
						var a = c[r];
						a.nodeType === Pe && a.nodeValue.match(i) && Qe(a, c[r] = L.document.createElement("span"))
					}
					var f = A(c, e, c, t, n, d);
					G.$$addScopeClass(c);
					var h = null;
					return function(e, t, n) {
						Te(e, "scope"), d && d.needsNewScope && (e = e.$parent.$new());
						var i, r, o, a = (n = n || {}).parentBoundTranscludeFn,
							s = n.transcludeControllers,
							l = n.futureParentElement;
						if (a && a.$$boundTransclude && (a = a.$$boundTransclude), h || (r = (i = l) && i[0], h = r && "foreignobject" !== we(r) && z.call(r).match(/SVG/) ? "svg" : "html"), o = "html" !== h ? ue(re(h, ue("<div>").append(c).html())) : t ? gt.clone.call(c) : c, s)
							for (var u in s) o.data("$" + u + "Controller", s[u].instance);
						return G.$$addScopeInfo(o, e), t && t(o, e), f && f(e, o, o, a), o
					}
				}

				function A(e, h, t, n, i, r) {
					for (var o, a, s, l, u, c, p, m = [], d = 0; d < e.length; d++) o = new W, (s = (a = X(e[d], [], o, 0 === d ? n : void 0, i)).length ? M(a, e[d], o, h, t, null, [], [], r) : null) && s.scope && G.$$addScopeClass(o.$$element), u = s && s.terminal || !(l = e[d].childNodes) || !l.length ? null : A(l, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : h), (s || u) && (m.push(d, s, u), c = !0, p = p || s), r = null;
					return c ? function(e, t, n, i) {
						var r, o, a, s, l, u, c, d;
						if (p) {
							var f = t.length;
							for (d = new Array(f), l = 0; l < m.length; l += 3) d[c = m[l]] = t[c]
						} else d = t;
						for (l = 0, u = m.length; l < u;) a = d[m[l++]], r = m[l++], o = m[l++], r ? (r.scope ? (s = e.$new(), G.$$addScopeInfo(ue(a), s)) : s = e, r(o, s, a, n, r.transcludeOnThisElement ? P(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && h ? P(e, h) : null)) : o && o(e, a.childNodes, void 0, i)
					} : null
				}

				function P(o, a, s) {
					function e(e, t, n, i, r) {
						return e || ((e = o.$new(!1, r)).$$transcluded = !0), a(e, t, {
							parentBoundTranscludeFn: s,
							transcludeControllers: n,
							futureParentElement: i
						})
					}
					var t = e.$$slots = _e();
					for (var n in a.$$slots) a.$$slots[n] ? t[n] = P(o, a.$$slots[n], s) : t[n] = null;
					return e
				}

				function X(e, t, n, i, r) {
					var o, a, s, l, u, c = e.nodeType,
						d = n.$attr;
					switch (c) {
						case Ae:
							T(t, nn(we(e)), "E", i, r);
							for (var f, h, p, m, g, v, y = e.attributes, b = 0, w = y && y.length; b < w; b++) {
								var $ = !1,
									x = !1;
								h = (f = y[b]).name, g = be(f.value), m = nn(h), (v = C.test(m)) && (h = h.replace(tn, "").substr(8).replace(/_(.)/g, function(e, t) {
									return t.toUpperCase()
								}));
								var S = m.match(k);
								S && O(S[1]) && (x = ($ = h).substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), d[p = nn(h.toLowerCase())] = h, !v && n.hasOwnProperty(p) || (n[p] = g, wt(e, p) && (n[p] = !0)), N(e, t, g, p, v), T(t, p, "A", i, r, $, x)
							}
							if (he(a = e.className) && (a = a.animVal), pe(a) && "" !== a)
								for (; o = I.exec(a);) T(t, p = nn(o[2]), "C", i, r) && (n[p] = be(o[3])), a = a.substr(o.index + o[0].length);
							break;
						case Pe:
							if (11 === R)
								for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Pe;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
							s = t, l = e.nodeValue, (u = E(l, !0)) && s.push({
								priority: 0,
								compile: function(e) {
									var t = e.parent(),
										i = !!t.length;
									return i && G.$$addBindingClass(t),
										function(e, t) {
											var n = t.parent();
											i || G.$$addBindingClass(n), G.$$addBindingInfo(n, u.expressions), e.$watch(u, function(e) {
												t[0].nodeValue = e
											})
										}
								}
							});
							break;
						case Me:
							! function(e, t, n, i, r) {
								try {
									var o = j.exec(e.nodeValue);
									if (o) {
										var a = nn(o[1]);
										T(t, a, "M", i, r) && (n[a] = be(o[2]))
									}
								} catch (e) {}
							}(e, t, n, i, r)
					}
					return t.sort(D), t
				}

				function Z(e, t, n) {
					var i = [],
						r = 0;
					if (t && e.hasAttribute && e.hasAttribute(t))
						do {
							if (!e) throw Kt("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
							e.nodeType == Ae && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
						} while (0 < r);
					else i.push(e);
					return ue(i)
				}

				function K(o, a, s) {
					return function(e, t, n, i, r) {
						return t = Z(t[0], a, s), o(e, t, n, i, r)
					}
				}

				function J(e, t, n, i, r, o) {
					var a;
					return e ? G(t, n, i, r, o) : function() {
						return a || (a = G(t, n, i, r, o), t = n = o = null), a.apply(this, arguments)
					}
				}

				function M(e, $, x, t, n, i, S, E, r) {
					r = r || {};
					for (var o, a, s, l, u, c = -Number.MAX_VALUE, C = r.newScopeDirective, k = r.controllerDirectives, T = r.newIsolateScopeDirective, _ = r.templateDirective, d = r.nonTlbTranscludeDirective, f = !1, h = !1, A = r.hasElementTranscludeDirective, p = x.$$element = ue($), m = i, g = t, v = !1, y = !1, b = 0, w = e.length; b < w; b++) {
						var P = (o = e[b]).$$start,
							M = o.$$end;
						if (P && (p = Z($, P, M)), s = void 0, c > o.priority) break;
						if ((u = o.scope) && (o.templateUrl || (he(u) ? (ie("new/isolated scope", T || C, o, p), T = o) : ie("new/isolated scope", T, o, p)), C = C || o), a = o.name, !v && (o.replace && (o.templateUrl || o.template) || o.transclude && !o.$$tlb)) {
							for (var O, D = b + 1; O = e[D++];)
								if (O.transclude && !O.$$tlb || O.replace && (O.templateUrl || O.template)) {
									y = !0;
									break
								} v = !0
						}
						if (!o.templateUrl && o.controller && (u = o.controller, k = k || _e(), ie("'" + a + "' controller", k[a], o, p), k[a] = o), u = o.transclude)
							if (f = !0, o.$$tlb || (ie("transclusion", d, o, p), d = o), "element" == u) A = !0, c = o.priority, s = p, p = x.$$element = ue(G.$$createComment(a, x[a])), $ = p[0], oe(n, Se(s), $), s[0].$$parentNode = s[0].parentNode, g = J(y, s, t, c, m && m.name, {
								nonTlbTranscludeDirective: d
							});
							else {
								var N = _e();
								if (s = ue(nt($)).contents(), he(u)) {
									s = [];
									var j = _e(),
										I = _e();
									for (var L in ce(u, function(e, t) {
											var n = "?" === e.charAt(0);
											e = n ? e.substring(1) : e, j[e] = t, N[t] = null, I[t] = n
										}), ce(p.contents(), function(e) {
											var t = j[nn(we(e))];
											t ? (I[t] = !0, N[t] = N[t] || [], N[t].push(e)) : s.push(e)
										}), ce(I, function(e, t) {
											if (!e) throw Kt("reqslot", "Required transclusion slot `{0}` was not filled.", t)
										}), N) N[L] && (N[L] = J(y, N[L], t))
								}
								p.empty(), (g = J(y, s, t, void 0, void 0, {
									needsNewScope: o.$$isolateScope || o.$$newScope
								})).$$slots = N
							} if (o.template)
							if (h = !0, ie("template", _, o, p), u = ge((_ = o).template) ? o.template(p, x) : o.template, u = Y(u), o.replace) {
								if (m = o, s = Ze(u) ? [] : on(re(o.templateNamespace, be(u))), $ = s[0], 1 != s.length || $.nodeType !== Ae) throw Kt("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", a, "");
								oe(n, p, $);
								var F = {
										$attr: {}
									},
									R = X($, [], F),
									z = e.splice(b + 1, e.length - (b + 1));
								(T || C) && ee(R, T, C), e = e.concat(R).concat(z), te(x, F), w = e.length
							} else p.html(u);
						if (o.templateUrl) h = !0, ie("template", _, o, p), (_ = o).replace && (m = o), q = ne(e.splice(b, e.length - b), p, x, n, f && g, S, E, {
							controllerDirectives: k,
							newScopeDirective: C !== o && C,
							newIsolateScopeDirective: T,
							templateDirective: _,
							nonTlbTranscludeDirective: d
						}), w = e.length;
						else if (o.compile) try {
							l = o.compile(p, x, g);
							var H = o.$$originalDirective || o;
							ge(l) ? U(null, Ee(H, l), P, M) : l && U(Ee(H, l.pre), Ee(H, l.post), P, M)
						} catch (e) {
							V(e, Ce(p))
						}
						o.terminal && (q.terminal = !0, c = Math.max(c, o.priority))
					}
					return q.scope = C && !0 === C.scope, q.transcludeOnThisElement = f, q.templateOnThisElement = h, q.transclude = g, r.hasElementTranscludeDirective = A, q;

					function U(e, t, n, i) {
						e && (n && (e = K(e, n, i)), e.require = o.require, e.directiveName = a, (T === o || o.$$isolateScope) && (e = ae(e, {
							isolateScope: !0
						})), S.push(e)), t && (n && (t = K(t, n, i)), t.require = o.require, t.directiveName = a, (T === o || o.$$isolateScope) && (t = ae(t, {
							isolateScope: !0
						})), E.push(t))
					}

					function q(e, t, n, i, a) {
						var r, o, s, l, u, c, d, f, h, p;
						for (var m in $ === n ? f = (h = x).$$element : h = new W(f = ue(n), x), u = t, T ? l = t.$new(!0) : C && (u = t.$parent), a && ((d = function(e, t, n, i) {
								var r;
								if (ve(e) || (i = n, n = t, t = e, e = void 0), A && (r = c), n || (n = A ? f.parent() : f), !i) return a(e, t, r, n, w);
								var o = a.$$slots[i];
								if (o) return o(e, t, r, n, w);
								if (fe(o)) throw Kt("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, Ce(f))
							}).$$boundTransclude = a, d.isSlotFilled = function(e) {
								return !!a.$$slots[e]
							}), k && (c = function(e, t, n, i, r, o, a) {
								var s = _e();
								for (var l in i) {
									var u = i[l],
										c = {
											$scope: u === a || u.$$isolateScope ? r : o,
											$element: e,
											$attrs: t,
											$transclude: n
										},
										d = u.controller;
									"@" == d && (d = t[u.name]);
									var f = B(d, c, !0, u.controllerAs);
									s[u.name] = f, e.data("$" + u.name + "Controller", f.instance)
								}
								return s
							}(f, h, d, k, l, t, T)), T && (G.$$addScopeInfo(f, l, !0, !(_ && (_ === T || _ === T.$$originalDirective))), G.$$addScopeClass(f, !0), l.$$isolateBindings = T.$$isolateBindings, (p = le(t, h, l, l.$$isolateBindings, T)).removeWatches && l.$on("$destroy", p.removeWatches)), c) {
							var g = k[m],
								v = c[m],
								y = g.$$bindings.bindToController;
							v.identifier && y ? v.bindingInfo = le(u, h, v.instance, y, g) : v.bindingInfo = {};
							var b = v();
							b !== v.instance && (v.instance = b, f.data("$" + g.name + "Controller", b), v.bindingInfo.removeWatches && v.bindingInfo.removeWatches(), v.bindingInfo = le(u, h, v.instance, y, g))
						}
						for (ce(k, function(e, t) {
								var n = e.require;
								e.bindToController && !me(n) && he(n) && de(c[t].instance, Q(t, n, f, c))
							}), ce(c, function(e) {
								var t = e.instance;
								if (ge(t.$onChanges)) try {
									t.$onChanges(e.bindingInfo.initialChanges)
								} catch (e) {
									V(e)
								}
								if (ge(t.$onInit)) try {
									t.$onInit()
								} catch (e) {
									V(e)
								}
								ge(t.$doCheck) && (u.$watch(function() {
									t.$doCheck()
								}), t.$doCheck()), ge(t.$onDestroy) && u.$on("$destroy", function() {
									t.$onDestroy()
								})
							}), r = 0, o = S.length; r < o; r++) se(s = S[r], s.isolateScope ? l : t, f, h, s.require && Q(s.directiveName, s.require, f, c), d);
						var w = t;
						for (T && (T.template || null === T.templateUrl) && (w = l), e && e(w, n.childNodes, void 0, a), r = E.length - 1; 0 <= r; r--) se(s = E[r], s.isolateScope ? l : t, f, h, s.require && Q(s.directiveName, s.require, f, c), d);
						ce(c, function(e) {
							var t = e.instance;
							ge(t.$postLink) && t.$postLink()
						})
					}
				}

				function Q(n, e, i, r) {
					var o;
					if (pe(e)) {
						var t = e.match(f),
							a = e.substring(t[0].length),
							s = t[1] || t[3],
							l = "?" === t[2];
						if ("^^" === s ? i = i.parent() : o = (o = r && r[a]) && o.instance, !o) {
							var u = "$" + a + "Controller";
							o = s ? i.inheritedData(u) : i.data(u)
						}
						if (!o && !l) throw Kt("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, n)
					} else if (me(e)) {
						o = [];
						for (var c = 0, d = e.length; c < d; c++) o[c] = Q(n, e[c], i, r)
					} else he(e) && (o = {}, ce(e, function(e, t) {
						o[t] = Q(n, e, i, r)
					}));
					return o || null
				}

				function ee(e, t, n) {
					for (var i = 0, r = e.length; i < r; i++) e[i] = H(e[i], {
						$$isolateScope: t,
						$$newScope: n
					})
				}

				function T(e, t, n, i, r, o, a) {
					if (t === r) return null;
					var s = null;
					if (p.hasOwnProperty(t))
						for (var l, u = h.get(t + m), c = 0, d = u.length; c < d; c++) try {
							if (l = u[c], (fe(i) || i > l.priority) && -1 != l.restrict.indexOf(n)) {
								if (o && (l = H(l, {
										$$start: o,
										$$end: a
									})), !l.$$bindings) {
									var f = l.$$bindings = g(l, l.name);
									he(f.isolateScope) && (l.$$isolateBindings = f.isolateScope)
								}
								e.push(l), s = l
							}
						} catch (e) {
							V(e)
						}
					return s
				}

				function O(e) {
					if (p.hasOwnProperty(e))
						for (var t = h.get(e + m), n = 0, i = t.length; n < i; n++)
							if (t[n].multiElement) return !0;
					return !1
				}

				function te(n, i) {
					var r = i.$attr,
						o = n.$attr;
					n.$$element, ce(n, function(e, t) {
						"$" != t.charAt(0) && (i[t] && i[t] !== e && (e += ("style" === t ? ";" : " ") + i[t]), n.$set(t, e, !0, r[t]))
					}), ce(i, function(e, t) {
						n.hasOwnProperty(t) || "$" === t.charAt(0) || (n[t] = e, "class" !== t && "style" !== t && (o[t] = r[t]))
					})
				}

				function ne(f, h, p, m, g, v, y, b) {
					var w, $, x = [],
						S = h[0],
						E = f.shift(),
						C = H(E, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: E
						}),
						k = ge(E.templateUrl) ? E.templateUrl(h, p) : E.templateUrl,
						T = E.templateNamespace;
					return h.empty(), e(k).then(function(e) {
							var n, t, i, r;
							if (e = Y(e), E.replace) {
								if (i = Ze(e) ? [] : on(re(T, be(e))), n = i[0], 1 != i.length || n.nodeType !== Ae) throw Kt("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", E.name, k);
								t = {
									$attr: {}
								}, oe(m, h, n);
								var o = X(n, [], t);
								he(E.scope) && ee(o, !0), f = o.concat(f), te(p, t)
							} else n = S, h.html(e);
							for (f.unshift(C), w = M(f, n, p, g, h, E, v, y, b), ce(m, function(e, t) {
									e == n && (m[t] = h[0])
								}), $ = A(h[0].childNodes, g); x.length;) {
								var a = x.shift(),
									s = x.shift(),
									l = x.shift(),
									u = x.shift(),
									c = h[0];
								if (!a.$$destroyed) {
									if (s !== S) {
										var d = s.className;
										b.hasElementTranscludeDirective && E.replace || (c = nt(n)), oe(l, ue(s), c), _(ue(c), d)
									}
									r = w.transcludeOnThisElement ? P(a, w.transclude, u) : u, w($, a, c, m, r)
								}
							}
							x = null
						}),
						function(e, t, n, i, r) {
							var o = r;
							t.$$destroyed || (x ? x.push(t, n, i, o) : (w.transcludeOnThisElement && (o = P(t, w.transclude, r)), w($, t, n, i, o)))
						}
				}

				function D(e, t) {
					var n = t.priority - e.priority;
					return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
				}

				function ie(e, t, n, i) {
					function r(e) {
						return e ? " (module: " + e + ")" : ""
					}
					if (t) throw Kt("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, r(t.$$moduleName), n.name, r(n.$$moduleName), e, Ce(i))
				}

				function re(e, t) {
					switch (e = S(e || "html")) {
						case "svg":
						case "math":
							var n = L.document.createElement("div");
							return n.innerHTML = "<" + e + ">" + t + "</" + e + ">", n.childNodes[0].childNodes;
						default:
							return t
					}
				}

				function N(e, t, o, a, s) {
					var l = function(e, t) {
						if ("srcdoc" == t) return i.HTML;
						var n = we(e);
						return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? i.RESOURCE_URL : void 0
					}(e, a);
					s = c[a] || s;
					var u = E(o, !0, l, s);
					if (u) {
						if ("multiple" === a && "select" === we(e)) throw Kt("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Ce(e));
						t.push({
							priority: 100,
							compile: function() {
								return {
									pre: function(e, t, n) {
										var i = n.$$observers || (n.$$observers = _e());
										if (d.test(a)) throw Kt("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
										var r = n[a];
										r !== o && (u = r && E(r, !0, l, s), o = r), u && (n[a] = u(e), (i[a] || (i[a] = [])).$$inter = !0, (n.$$observers && n.$$observers[a].$$scope || e).$watch(u, function(e, t) {
											"class" === a && e != t ? n.$updateClass(e, t) : n.$set(a, e)
										}))
									}
								}
							}
						})
					}
				}

				function oe(e, t, n) {
					var i, r, o = t[0],
						a = t.length,
						s = o.parentNode;
					if (e)
						for (i = 0, r = e.length; i < r; i++)
							if (e[i] == o) {
								e[i++] = n;
								for (var l = i, u = l + a - 1, c = e.length; l < c; l++, u++) u < c ? e[l] = e[u] : delete e[l];
								e.length -= a - 1, e.context === o && (e.context = n);
								break
							} s && s.replaceChild(n, o);
					var d = L.document.createDocumentFragment();
					for (i = 0; i < a; i++) d.appendChild(t[i]);
					for (ue.hasData(o) && (ue.data(n, ue.data(o)), ue(o).off("$destroy")), ue.cleanData(d.querySelectorAll("*")), i = 1; i < a; i++) delete t[i];
					t[0] = n, t.length = 1
				}

				function ae(e, t) {
					return de(function() {
						return e.apply(null, arguments)
					}, e, t)
				}

				function se(e, t, n, i, r, o) {
					try {
						e(t, n, i, r, o)
					} catch (e) {
						V(e, Ce(n))
					}
				}

				function le(d, f, h, e, p) {
					var i, m = [],
						g = {};

					function v(e, t, n) {
						ge(h.$onChanges) && t !== n && (a || (d.$$postDigest(s), a = []), i || (i = {}, a.push(r)), i[e] && (n = i[e].previousValue), i[e] = new en(n, t))
					}

					function r() {
						h.$onChanges(i), i = void 0
					}
					return ce(e, function(e, n) {
						var t, i, r, o, a, s = e.attrName,
							l = e.optional;
						switch (e.mode) {
							case "@":
								l || F.call(f, s) || (h[n] = f[s] = void 0), f.$observe(s, function(e) {
									if (pe(e) || ye(e)) {
										var t = h[n];
										v(n, e, t), h[n] = e
									}
								}), f.$$observers[s].$$scope = d, pe(t = f[s]) ? h[n] = E(t)(d) : ye(t) && (h[n] = t), g[n] = new en(Jt, h[n]);
								break;
							case "=":
								if (!F.call(f, s)) {
									if (l) break;
									f[s] = void 0
								}
								if (l && !f[s]) break;
								i = y(f[s]), o = i.literal ? xe : function(e, t) {
									return e === t || e != e && t != t
								}, r = i.assign || function() {
									throw t = h[n] = i(d), Kt("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", f[s], s, p.name)
								}, t = h[n] = i(d);
								var u = function(e) {
									return o(e, h[n]) || (o(e, t) ? r(d, e = h[n]) : h[n] = e), t = e
								};
								u.$stateful = !0, a = e.collection ? d.$watchCollection(f[s], u) : d.$watch(y(f[s], u), null, i.literal), m.push(a);
								break;
							case "<":
								if (!F.call(f, s)) {
									if (l) break;
									f[s] = void 0
								}
								if (l && !f[s]) break;
								i = y(f[s]);
								var c = h[n] = i(d);
								g[n] = new en(Jt, h[n]), a = d.$watch(i, function(e, t) {
									if (t === e) {
										if (t === c) return;
										t = c
									}
									v(n, e, t), h[n] = e
								}, i.literal), m.push(a);
								break;
							case "&":
								if ((i = f.hasOwnProperty(s) ? y(f[s]) : U) === U && l) break;
								h[n] = function(e) {
									return i(d, e)
								}
						}
					}), {
						initialChanges: g,
						removeWatches: m.length && function() {
							for (var e = 0, t = m.length; e < t; ++e) m[e]()
						}
					}
				}
			}]
		}

		function en(e, t) {
			this.previousValue = e, this.currentValue = t
		}
		Qt.$inject = ["$provide", "$$sanitizeUriProvider"], en.prototype.isFirstChange = function() {
			return this.previousValue === Jt
		};
		var tn = /^((?:x|data)[\:\-_])/i;

		function nn(e) {
			return Ve(e.replace(tn, ""))
		}

		function rn(e, t) {
			var n = "",
				i = e.split(/\s+/),
				r = t.split(/\s+/);
			e: for (var o = 0; o < i.length; o++) {
				for (var a = i[o], s = 0; s < r.length; s++)
					if (a == r[s]) continue e;
				n += (0 < n.length ? " " : "") + a
			}
			return n
		}

		function on(e) {
			var t = (e = ue(e)).length;
			if (t <= 1) return e;
			for (; t--;) e[t].nodeType === Me && n.call(e, t, 1);
			return e
		}
		var an = p("$controller"),
			sn = /^(\S+)(\s+as\s+([\w$]+))?$/;

		function ln(e, t) {
			if (t && pe(t)) return t;
			if (pe(e)) {
				var n = sn.exec(e);
				if (n) return n[3]
			}
		}

		function un() {
			var f = {},
				h = !1;
			this.has = function(e) {
				return f.hasOwnProperty(e)
			}, this.register = function(e, t) {
				ae(e, "controller"), he(e) ? de(f, e) : f[e] = t
			}, this.allowGlobals = function() {
				h = !0
			}, this.$get = ["$injector", "$window", function(u, c) {
				return function(t, n, e, i) {
					var r, o, a, s;
					if (e = !0 === e, i && pe(i) && (s = i), pe(t)) {
						if (!(o = t.match(sn))) throw an("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", t);
						a = o[1], s = s || o[3], oe(t = f.hasOwnProperty(a) ? f[a] : se(n.$scope, a, !0) || (h ? se(c, a, !0) : void 0), a, !0)
					}
					if (e) {
						var l = (me(t) ? t[t.length - 1] : t).prototype;
						return r = Object.create(l || null), s && d(n, s, r, a || t.name), de(function() {
							var e = u.invoke(t, r, n, a);
							return e !== r && (he(e) || ge(e)) && (r = e, s && d(n, s, r, a || t.name)), r
						}, {
							instance: r,
							identifier: s
						})
					}
					return r = u.instantiate(t, n, a), s && d(n, s, r, a || t.name), r
				};

				function d(e, t, n, i) {
					if (!e || !he(e.$scope)) throw p("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
					e.$scope[t] = n
				}
			}]
		}

		function cn() {
			this.$get = ["$window", function(e) {
				return ue(e.document)
			}]
		}

		function dn() {
			this.$get = ["$log", function(n) {
				return function(e, t) {
					n.error.apply(n, arguments)
				}
			}]
		}
		var fn = function() {
				this.$get = ["$document", function(t) {
					return function(e) {
						return e ? !e.nodeType && e instanceof ue && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
					}
				}]
			},
			hn = "application/json",
			pn = {
				"Content-Type": hn + ";charset=utf-8"
			},
			mn = /^\[|^\{(?!\{)/,
			gn = {
				"[": /]$/,
				"{": /}$/
			},
			vn = /^\)\]\}',?\n/,
			yn = p("$http"),
			bn = function(e) {
				return function() {
					throw yn("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
				}
			};

		function wn(e) {
			return he(e) ? E(e) ? e.toISOString() : W(e) : e
		}

		function $n() {
			this.$get = function() {
				return function(e) {
					if (!e) return "";
					var n = [];
					return f(e, function(e, t) {
						null === e || fe(e) || (me(e) ? ce(e, function(e) {
							n.push(ee(t) + "=" + ee(wn(e)))
						}) : n.push(ee(t) + "=" + ee(wn(e))))
					}), n.join("&")
				}
			}
		}

		function xn() {
			this.$get = function() {
				return function(e) {
					if (!e) return "";
					var t = [];
					return function n(e, i, r) {
						null === e || fe(e) || (me(e) ? ce(e, function(e, t) {
							n(e, i + "[" + (he(e) ? t : "") + "]")
						}) : he(e) && !E(e) ? f(e, function(e, t) {
							n(e, i + (r ? "" : "[") + t + (r ? "" : "]"))
						}) : t.push(ee(i) + "=" + ee(wn(e))))
					}(e, "", !0), t.join("&")
				}
			}
		}

		function Sn(e, t) {
			if (pe(e)) {
				var n = e.replace(vn, "").trim();
				if (n) {
					var i = t("Content-Type");
					(i && 0 === i.indexOf(hn) || (o = (r = n).match(mn)) && gn[o[0]].test(r)) && (e = Y(n))
				}
			}
			var r, o;
			return e
		}

		function En(e) {
			var t, n = _e();

			function i(e, t) {
				e && (n[e] = n[e] ? n[e] + ", " + t : t)
			}
			return pe(e) ? ce(e.split("\n"), function(e) {
				t = e.indexOf(":"), i(S(be(e.substr(0, t))), be(e.substr(t + 1)))
			}) : he(e) && ce(e, function(e, t) {
				i(S(t), be(e))
			}), n
		}

		function Cn(n) {
			var i;
			return function(e) {
				if (i || (i = En(n)), e) {
					var t = i[S(e)];
					return void 0 === t && (t = null), t
				}
				return i
			}
		}

		function kn(t, n, i, e) {
			return ge(e) ? e(t, n, i) : (ce(e, function(e) {
				t = e(t, n, i)
			}), t)
		}

		function Tn(e) {
			return 200 <= e && e < 300
		}

		function _n() {
			var $ = this.defaults = {
					transformResponse: [Sn],
					transformRequest: [function(e) {
						return he(e) && (i = e, "[object File]" !== z.call(i)) && (n = e, "[object Blob]" !== z.call(n)) && (t = e, "[object FormData]" !== z.call(t)) ? W(e) : e;
						var t, n, i
					}],
					headers: {
						common: {
							Accept: "application/json, text/plain, */*"
						},
						post: Ne(pn),
						put: Ne(pn),
						patch: Ne(pn)
					},
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					paramSerializer: "$httpParamSerializer"
				},
				x = !1;
			this.useApplyAsync = function(e) {
				return q(e) ? (x = !!e, this) : x
			};
			var u = !0;
			this.useLegacyPromiseExtensions = function(e) {
				return q(e) ? (u = !!e, this) : u
			};
			var t = this.interceptors = [];
			this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(m, g, e, v, y, s) {
				var b = e("$http");
				$.paramSerializer = pe($.paramSerializer) ? s.get($.paramSerializer) : $.paramSerializer;
				var l = [];

				function w(e) {
					if (!he(e)) throw p("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
					if (!pe(e.url)) throw p("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", e.url);
					var n = de({
						method: "get",
						transformRequest: $.transformRequest,
						transformResponse: $.transformResponse,
						paramSerializer: $.paramSerializer
					}, e);
					n.headers = function(e) {
						var t, n, i, r, o, a, s, l = $.headers,
							u = de({}, e.headers);
						l = de({}, l.common, l[S(e.method)]);
						e: for (t in l) {
							for (i in n = S(t), u)
								if (S(i) === n) continue e;
							u[t] = l[t]
						}
						return r = u, o = Ne(e), s = {}, ce(r, function(e, t) {
							ge(e) ? null != (a = e(o)) && (s[t] = a) : s[t] = e
						}), s
					}(e), n.method = c(n.method), n.paramSerializer = pe(n.paramSerializer) ? s.get(n.paramSerializer) : n.paramSerializer;
					var t = [],
						i = [],
						r = y.when(n);
					return ce(l, function(e) {
						(e.request || e.requestError) && t.unshift(e.request, e.requestError), (e.response || e.responseError) && i.push(e.response, e.responseError)
					}), (r = o(r = (r = o(r, t)).then(function(e) {
						var n = e.headers,
							t = kn(e.data, Cn(n), void 0, e.transformRequest);
						return fe(t) && ce(n, function(e, t) {
								"content-type" === S(t) && delete n[t]
							}), fe(e.withCredentials) && !fe($.withCredentials) && (e.withCredentials = $.withCredentials),
							function(r, e) {
								var o, t, n, i, a = y.defer(),
									s = a.promise,
									l = r.headers,
									u = (n = r.url, 0 < (i = r.paramSerializer(r.params)).length && (n += (-1 == n.indexOf("?") ? "?" : "&") + i), n);
								if (w.pendingRequests.push(r), s.then(p, p), !r.cache && !$.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (o = he(r.cache) ? r.cache : he($.cache) ? $.cache : b), o && (q(t = o.get(u)) ? P(t) ? t.then(h, h) : me(t) ? f(t[1], t[0], Ne(t[2]), t[3]) : f(t, 200, {}, "OK") : o.put(u, s)), fe(t)) {
									var c = Yi(r.url) ? g()[r.xsrfCookieName || $.xsrfCookieName] : void 0;
									c && (l[r.xsrfHeaderName || $.xsrfHeaderName] = c), m(r.method, u, e, function(e, t, n, i) {
										function r() {
											f(t, e, n, i)
										}
										o && (Tn(e) ? o.put(u, [e, t, En(n), i]) : o.remove(u)), x ? v.$applyAsync(r) : (r(), v.$$phase || v.$apply())
									}, l, r.timeout, r.withCredentials, r.responseType, d(r.eventHandlers), d(r.uploadEventHandlers))
								}
								return s;

								function d(e) {
									if (e) {
										var t = {};
										return ce(e, function(n, e) {
											t[e] = function(e) {
												function t() {
													n(e)
												}
												x ? v.$applyAsync(t) : v.$$phase ? t() : v.$apply(t)
											}
										}), t
									}
								}

								function f(e, t, n, i) {
									(Tn(t = -1 <= t ? t : 0) ? a.resolve : a.reject)({
										data: e,
										status: t,
										headers: Cn(n),
										config: r,
										statusText: i
									})
								}

								function h(e) {
									f(e.data, e.status, Ne(e.headers()), e.statusText)
								}

								function p() {
									var e = w.pendingRequests.indexOf(r); - 1 !== e && w.pendingRequests.splice(e, 1)
								}
							}(e, t).then(a, a)
					}), i)).error = u ? (r.success = function(t) {
						return oe(t, "fn"), r.then(function(e) {
							t(e.data, e.status, e.headers, n)
						}), r
					}, function(t) {
						return oe(t, "fn"), r.then(null, function(e) {
							t(e.data, e.status, e.headers, n)
						}), r
					}) : (r.success = bn("success"), bn("error")), r;

					function o(e, t) {
						for (var n = 0, i = t.length; n < i;) {
							var r = t[n++],
								o = t[n++];
							e = e.then(r, o)
						}
						return t.length = 0, e
					}

					function a(e) {
						var t = de({}, e);
						return t.data = kn(e.data, e.headers, e.status, n.transformResponse), Tn(e.status) ? t : y.reject(t)
					}
				}
				return ce(t, function(e) {
						l.unshift(pe(e) ? s.get(e) : s.invoke(e))
					}), w.pendingRequests = [],
					function(e) {
						ce(arguments, function(n) {
							w[n] = function(e, t) {
								return w(de({}, t || {}, {
									method: n,
									url: e
								}))
							}
						})
					}("get", "delete", "head", "jsonp"),
					function(e) {
						ce(arguments, function(i) {
							w[i] = function(e, t, n) {
								return w(de({}, n || {}, {
									method: i,
									url: e,
									data: t
								}))
							}
						})
					}("post", "put", "patch"), w.defaults = $, w
			}]
		}

		function An() {
			this.$get = function() {
				return function() {
					return new L.XMLHttpRequest
				}
			}
		}

		function Pn() {
			this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, i) {
				return y = i, b = (v = e).defer, w = t, $ = n[0],
					function(e, i, t, u, n, r, o, a, s, l) {
						if (v.$$incOutstandingRequestCount(), i = i || v.url(), "jsonp" === S(e)) var c = w.createCallback(i),
							d = function(e, a, t) {
								e = e.replace("JSON_CALLBACK", a);
								var s = $.createElement("script"),
									l = null;
								return s.type = "text/javascript", s.src = e, s.async = !0, Fe(s, "load", l = function(e) {
									Re(s, "load", l), Re(s, "error", l), $.body.removeChild(s), s = null;
									var t, n, i, r = -1,
										o = "unknown";
									e && ("load" !== e.type || w.wasCalled(a) || (e = {
										type: "error"
									}), o = e.type, r = "error" === e.type ? 404 : 200), n = o, i = 200 === (t = r) && w.getResponse(c), g(u, t, i, "", n), w.removeCallback(c)
								}), Fe(s, "error", l), $.body.appendChild(s), l
							}(i, c);
						else {
							var f = y(e, i);
							f.open(e, i, !0), ce(n, function(e, t) {
								q(e) && f.setRequestHeader(t, e)
							}), f.onload = function() {
								var e = f.statusText || "",
									t = "response" in f ? f.response : f.responseText,
									n = 1223 === f.status ? 204 : f.status;
								0 === n && (n = t ? 200 : "file" == Wi(i).protocol ? 404 : 0), g(u, n, t, f.getAllResponseHeaders(), e)
							};
							var h = function() {
								g(u, -1, null, null, "")
							};
							if (f.onerror = h, f.onabort = h, ce(s, function(e, t) {
									f.addEventListener(t, e)
								}), ce(l, function(e, t) {
									f.upload.addEventListener(t, e)
								}), o && (f.withCredentials = !0), a) try {
								f.responseType = a
							} catch (e) {
								if ("json" !== a) throw e
							}
							f.send(fe(t) ? null : t)
						}
						if (0 < r) var p = b(m, r);
						else P(r) && r.then(m);

						function m() {
							d && d(), f && f.abort()
						}

						function g(e, t, n, i, r) {
							q(p) && b.cancel(p), d = f = null, e(t, n, i, r), v.$$completeOutstandingRequest(U)
						}
					};
				var v, y, b, w, $
			}]
		}
		var Mn = C.$interpolateMinErr = p("$interpolate");

		function On() {
			var E = "{{",
				C = "}}";
			this.startSymbol = function(e) {
				return e ? (E = e, this) : E
			}, this.endSymbol = function(e) {
				return e ? (C = e, this) : C
			}, this.$get = ["$parse", "$exceptionHandler", "$sce", function(v, y, b) {
				var w = E.length,
					$ = C.length,
					t = new RegExp(E.replace(/./g, e), "g"),
					n = new RegExp(C.replace(/./g, e), "g");

				function e(e) {
					return "\\\\\\" + e
				}

				function x(e) {
					return e.replace(t, E).replace(n, C)
				}

				function S(e, t, n, i) {
					var r;
					return r = e.$watch(function(e) {
						return r(), i(e)
					}, t, n)
				}

				function i(r, e, t, i) {
					var n;
					if (!r.length || -1 === r.indexOf(E)) return e || ((n = k(x(r))).exp = r, n.expressions = [], n.$$watchDelegate = S), n;
					i = !!i;
					for (var o, a, s, l = 0, u = [], c = [], d = r.length, f = [], h = []; l < d;) {
						if (-1 == (o = r.indexOf(E, l)) || -1 == (a = r.indexOf(C, o + w))) {
							l !== d && f.push(x(r.substring(l)));
							break
						}
						l !== o && f.push(x(r.substring(l, o))), s = r.substring(o + w, a), u.push(s), c.push(v(s, g)), l = a + $, h.push(f.length), f.push("")
					}
					if (t && 1 < f.length && Mn.throwNoconcat(r), !e || u.length) {
						var p = function(e) {
								for (var t = 0, n = u.length; t < n; t++) {
									if (i && fe(e[t])) return;
									f[h[t]] = e[t]
								}
								return f.join("")
							},
							m = function(e) {
								return t ? b.getTrusted(t, e) : b.valueOf(e)
							};
						return de(function(e) {
							var t = 0,
								n = u.length,
								i = new Array(n);
							try {
								for (; t < n; t++) i[t] = c[t](e);
								return p(i)
							} catch (e) {
								y(Mn.interr(r, e))
							}
						}, {
							exp: r,
							expressions: u,
							$$watchDelegate: function(i, r) {
								var o;
								return i.$watchGroup(c, function(e, t) {
									var n = p(e);
									ge(r) && r.call(this, n, e !== t ? o : n, i), o = n
								})
							}
						})
					}

					function g(e) {
						try {
							return e = m(e), i && !q(e) ? e : function(e) {
								if (null == e) return "";
								switch (typeof e) {
									case "string":
										break;
									case "number":
										e = "" + e;
										break;
									default:
										e = W(e)
								}
								return e
							}(e)
						} catch (e) {
							y(Mn.interr(r, e))
						}
					}
				}
				return i.startSymbol = function() {
					return E
				}, i.endSymbol = function() {
					return C
				}, i
			}]
		}

		function Dn() {
			this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(h, p, m, g, v) {
				var y = {};

				function e(e, t, n, i) {
					var r = 4 < arguments.length,
						o = r ? Se(arguments, 4) : [],
						a = p.setInterval,
						s = p.clearInterval,
						l = 0,
						u = q(i) && !i,
						c = (u ? g : m).defer(),
						d = c.promise;
					return n = q(n) ? n : 0, d.$$intervalId = a(function() {
						u ? v.defer(f) : h.$evalAsync(f), c.notify(l++), 0 < n && n <= l && (c.resolve(l), s(d.$$intervalId), delete y[d.$$intervalId]), u || h.$apply()
					}, t), y[d.$$intervalId] = c, d;

					function f() {
						r ? e.apply(null, o) : e(l)
					}
				}
				return e.cancel = function(e) {
					return !!(e && e.$$intervalId in y) && (y[e.$$intervalId].reject("canceled"), p.clearInterval(e.$$intervalId), delete y[e.$$intervalId], !0)
				}, e
			}]
		}
		Mn.throwNoconcat = function(e) {
			throw Mn("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
		}, Mn.interr = function(e, t) {
			return Mn("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
		};
		var Nn = function() {
				this.$get = ["$window", function(e) {
					var o = e.angular.callbacks,
						a = {};
					return {
						createCallback: function(e) {
							var t, n = "_" + (o.$$counter++).toString(36),
								i = "angular.callbacks." + n,
								r = ((t = function(e) {
									t.data = e, t.called = !0
								}).id = n, t);
							return a[i] = o[n] = r, i
						},
						wasCalled: function(e) {
							return a[e].called
						},
						getResponse: function(e) {
							return a[e].data
						},
						removeCallback: function(e) {
							var t = a[e];
							delete o[t.id], delete a[e]
						}
					}
				}]
			},
			jn = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
			In = {
				http: 80,
				https: 443,
				ftp: 21
			},
			Ln = p("$location");

		function Fn(e) {
			for (var t = e.split("/"), n = t.length; n--;) t[n] = Q(t[n]);
			return t.join("/")
		}

		function Rn(e, t) {
			var n = Wi(e);
			t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = y(n.port) || In[n.protocol] || null
		}

		function zn(e, t) {
			var n = "/" !== e.charAt(0);
			n && (e = "/" + e);
			var i = Wi(e);
			t.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), t.$$search = K(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
		}

		function Hn(e, t) {
			return 0 === e.lastIndexOf(t, 0)
		}

		function Un(e, t) {
			if (Hn(t, e)) return t.substr(e.length)
		}

		function qn(e) {
			var t = e.indexOf("#");
			return -1 == t ? e : e.substr(0, t)
		}

		function Vn(e) {
			return e.replace(/(#.+)|#$/, "$1")
		}

		function Bn(o, a, s) {
			this.$$html5 = !0, s = s || "", Rn(o, this), this.$$parse = function(e) {
				var t = Un(a, e);
				if (!pe(t)) throw Ln("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, a);
				zn(t, this), this.$$path || (this.$$path = "/"), this.$$compose()
			}, this.$$compose = function() {
				var e = J(this.$$search),
					t = this.$$hash ? "#" + Q(this.$$hash) : "";
				this.$$url = Fn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = a + this.$$url.substr(1)
			}, this.$$parseLinkUrl = function(e, t) {
				return t && "#" === t[0] ? (this.hash(t.slice(1)), !0) : (q(n = Un(o, e)) ? r = q(n = Un(s, i = n)) ? a + (Un("/", n) || n) : o + i : q(n = Un(a, e)) ? r = a + n : a == e + "/" && (r = a), r && this.$$parse(r), !!r);
				var n, i, r
			}
		}

		function Wn(l, u, c) {
			Rn(l, this), this.$$parse = function(e) {
				var t, n, i, r, o, a, s = Un(l, e) || Un(u, e);
				fe(s) || "#" !== s.charAt(0) ? this.$$html5 ? t = s : (t = "", fe(s) && (l = e, this.replace())) : fe(t = Un(c, s)) && (t = s), zn(t, this), this.$$path = (n = this.$$path, a = /^\/[A-Z]:(\/.*)/, Hn(i = t, r = l) && (i = i.replace(r, "")), a.exec(i) ? n : (o = a.exec(n)) ? o[1] : n), this.$$compose()
			}, this.$$compose = function() {
				var e = J(this.$$search),
					t = this.$$hash ? "#" + Q(this.$$hash) : "";
				this.$$url = Fn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = l + (this.$$url ? c + this.$$url : "")
			}, this.$$parseLinkUrl = function(e, t) {
				return qn(l) == qn(e) && (this.$$parse(e), !0)
			}
		}

		function Yn(r, o, a) {
			this.$$html5 = !0, Wn.apply(this, arguments), this.$$parseLinkUrl = function(e, t) {
				return t && "#" === t[0] ? (this.hash(t.slice(1)), !0) : (r == qn(e) ? n = e : (i = Un(o, e)) ? n = r + a + i : o === e + "/" && (n = o), n && this.$$parse(n), !!n);
				var n, i
			}, this.$$compose = function() {
				var e = J(this.$$search),
					t = this.$$hash ? "#" + Q(this.$$hash) : "";
				this.$$url = Fn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + a + this.$$url
			}
		}
		var Gn = {
			$$absUrl: "",
			$$html5: !1,
			$$replace: !1,
			absUrl: Xn("$$absUrl"),
			url: function(e) {
				if (fe(e)) return this.$$url;
				var t = jn.exec(e);
				return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
			},
			protocol: Xn("$$protocol"),
			host: Xn("$$host"),
			port: Xn("$$port"),
			path: Zn("$$path", function(e) {
				return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
			}),
			search: function(n, e) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if (pe(n) || $(n)) n = n.toString(), this.$$search = K(n);
						else {
							if (!he(n)) throw Ln("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
							ce(n = j(n, {}), function(e, t) {
								null == e && delete n[t]
							}), this.$$search = n
						}
						break;
					default:
						fe(e) || null === e ? delete this.$$search[n] : this.$$search[n] = e
				}
				return this.$$compose(), this
			},
			hash: Zn("$$hash", function(e) {
				return null !== e ? e.toString() : ""
			}),
			replace: function() {
				return this.$$replace = !0, this
			}
		};

		function Xn(e) {
			return function() {
				return this[e]
			}
		}

		function Zn(t, n) {
			return function(e) {
				return fe(e) ? this[t] : (this[t] = n(e), this.$$compose(), this)
			}
		}

		function Kn() {
			var v = "",
				y = {
					enabled: !1,
					requireBase: !0,
					rewriteLinks: !0
				};
			this.hashPrefix = function(e) {
				return q(e) ? (v = e, this) : v
			}, this.html5Mode = function(e) {
				return ye(e) ? (y.enabled = e, this) : he(e) ? (ye(e.enabled) && (y.enabled = e.enabled), ye(e.requireBase) && (y.requireBase = e.requireBase), ye(e.rewriteLinks) && (y.rewriteLinks = e.rewriteLinks), this) : y
			}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(a, s, t, r, o) {
				var l, e, n, i, u = s.baseHref(),
					c = s.url();
				if (y.enabled) {
					if (!u && y.requireBase) throw Ln("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
					n = (i = c).substring(0, i.indexOf("/", i.indexOf("//") + 2)) + (u || "/"), e = t.history ? Bn : Yn
				} else n = qn(c), e = Wn;
				var d, f = (d = n).substr(0, qn(d).lastIndexOf("/") + 1);
				(l = new e(n, f, "#" + v)).$$parseLinkUrl(c, c), l.$$state = s.state();
				var h = /^\s*(javascript|mailto):/i;

				function p(e, t, n) {
					var i = l.url(),
						r = l.$$state;
					try {
						s.url(e, t, n), l.$$state = s.state()
					} catch (e) {
						throw l.url(i), l.$$state = r, e
					}
				}
				r.on("click", function(e) {
					if (y.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
						for (var t = ue(e.target);
							"a" !== we(t[0]);)
							if (t[0] === r[0] || !(t = t.parent())[0]) return;
						var n = t.prop("href"),
							i = t.attr("href") || t.attr("xlink:href");
						he(n) && "[object SVGAnimatedString]" === n.toString() && (n = Wi(n.animVal).href), h.test(n) || !n || t.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(n, i) && (e.preventDefault(), l.absUrl() != s.url() && (a.$apply(), o.angular["ff-684208-preventDefault"] = !0))
					}
				}), Vn(l.absUrl()) != Vn(c) && s.url(l.absUrl(), !0);
				var m = !0;
				return s.onUrlChange(function(i, r) {
					fe(Un(f, i)) ? o.location.href = i : (a.$evalAsync(function() {
						var e, t = l.absUrl(),
							n = l.$$state;
						i = Vn(i), l.$$parse(i), l.$$state = r, e = a.$broadcast("$locationChangeStart", i, t, r, n).defaultPrevented, l.absUrl() === i && (e ? (l.$$parse(t), p(t, !1, l.$$state = n)) : (m = !1, g(t, n)))
					}), a.$$phase || a.$digest())
				}), a.$watch(function() {
					var n = Vn(s.url()),
						e = Vn(l.absUrl()),
						i = s.state(),
						r = l.$$replace,
						o = n !== e || l.$$html5 && t.history && i !== l.$$state;
					(m || o) && (m = !1, a.$evalAsync(function() {
						var e = l.absUrl(),
							t = a.$broadcast("$locationChangeStart", e, n, l.$$state, i).defaultPrevented;
						l.absUrl() === e && (t ? (l.$$parse(n), l.$$state = i) : (o && p(e, r, i === l.$$state ? null : l.$$state), g(n, i)))
					})), l.$$replace = !1
				}), l;

				function g(e, t) {
					a.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
				}
			}]
		}

		function Jn() {
			var n = !0,
				i = this;
			this.debugEnabled = function(e) {
				return q(e) ? (n = e, this) : n
			}, this.$get = ["$window", function(r) {
				return {
					log: t("log"),
					info: t("info"),
					warn: t("warn"),
					error: t("error"),
					debug: (e = t("debug"), function() {
						n && e.apply(i, arguments)
					})
				};
				var e;

				function t(e) {
					var t = r.console || {},
						i = t[e] || t.log || U,
						n = !1;
					try {
						n = !!i.apply
					} catch (e) {}
					return n ? function() {
						var n = [];
						return ce(arguments, function(e) {
							var t;
							n.push(((t = e) instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t))
						}), i.apply(t, n)
					} : function(e, t) {
						i(e, null == t ? "" : t)
					}
				}
			}]
		}
		ce([Yn, Wn, Bn], function(t) {
			t.prototype = Object.create(Gn), t.prototype.state = function(e) {
				if (!arguments.length) return this.$$state;
				if (t !== Bn || !this.$$html5) throw Ln("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
				return this.$$state = fe(e) ? null : e, this
			}
		});
		var Qn = p("$parse");

		function ei(e, t) {
			if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Qn("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
			return e
		}

		function ti(e) {
			return e + ""
		}

		function ni(e, t) {
			if (e) {
				if (e.constructor === e) throw Qn("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
				if (e.window === e) throw Qn("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
				if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Qn("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
				if (e === Object) throw Qn("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
			}
			return e
		}
		var ii = Function.prototype.call,
			ri = Function.prototype.apply,
			oi = Function.prototype.bind;

		function ai(e, t) {
			if (e) {
				if (e.constructor === e) throw Qn("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
				if (e === ii || e === ri || e === oi) throw Qn("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
			}
		}

		function si(e, t) {
			if (e && (e === (0).constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw Qn("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
		}
		var li = _e();
		ce("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
			li[e] = !0
		});
		var ui = {
				n: "\n",
				f: "\f",
				r: "\r",
				t: "\t",
				v: "\v",
				"'": "'",
				'"': '"'
			},
			ci = function(e) {
				this.options = e
			};
		ci.prototype = {
			constructor: ci,
			lex: function(e) {
				for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
					var t = this.text.charAt(this.index);
					if ('"' === t || "'" === t) this.readString(t);
					else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
					else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
					else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
						index: this.index,
						text: t
					}), this.index++;
					else if (this.isWhitespace(t)) this.index++;
					else {
						var n = t + this.peek(),
							i = n + this.peek(2),
							r = li[t],
							o = li[n],
							a = li[i];
						if (r || o || a) {
							var s = a ? i : o ? n : t;
							this.tokens.push({
								index: this.index,
								text: s,
								operator: !0
							}), this.index += s.length
						} else this.throwError("Unexpected next character ", this.index, this.index + 1)
					}
				}
				return this.tokens
			},
			is: function(e, t) {
				return -1 !== t.indexOf(e)
			},
			peek: function(e) {
				var t = e || 1;
				return this.index + t < this.text.length && this.text.charAt(this.index + t)
			},
			isNumber: function(e) {
				return "0" <= e && e <= "9" && "string" == typeof e
			},
			isWhitespace: function(e) {
				return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
			},
			isIdentifierStart: function(e) {
				return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
			},
			isValidIdentifierStart: function(e) {
				return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
			},
			isIdentifierContinue: function(e) {
				return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
			},
			isValidIdentifierContinue: function(e, t) {
				return this.isValidIdentifierStart(e, t) || this.isNumber(e)
			},
			codePointAt: function(e) {
				return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
			},
			peekMultichar: function() {
				var e = this.text.charAt(this.index),
					t = this.peek();
				if (!t) return e;
				var n = e.charCodeAt(0),
					i = t.charCodeAt(0);
				return 55296 <= n && n <= 56319 && 56320 <= i && i <= 57343 ? e + t : e
			},
			isExpOperator: function(e) {
				return "-" === e || "+" === e || this.isNumber(e)
			},
			throwError: function(e, t, n) {
				n = n || this.index;
				var i = q(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
				throw Qn("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text)
			},
			readNumber: function() {
				for (var e = "", t = this.index; this.index < this.text.length;) {
					var n = S(this.text.charAt(this.index));
					if ("." == n || this.isNumber(n)) e += n;
					else {
						var i = this.peek();
						if ("e" == n && this.isExpOperator(i)) e += n;
						else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1)) e += n;
						else {
							if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1)) break;
							this.throwError("Invalid exponent")
						}
					}
					this.index++
				}
				this.tokens.push({
					index: t,
					text: e,
					constant: !0,
					value: Number(e)
				})
			},
			readIdent: function() {
				var e = this.index;
				for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
					var t = this.peekMultichar();
					if (!this.isIdentifierContinue(t)) break;
					this.index += t.length
				}
				this.tokens.push({
					index: e,
					text: this.text.slice(e, this.index),
					identifier: !0
				})
			},
			readString: function(e) {
				var t = this.index;
				this.index++;
				for (var n = "", i = e, r = !1; this.index < this.text.length;) {
					var o = this.text.charAt(this.index);
					if (i += o, r) {
						if ("u" === o) {
							var a = this.text.substring(this.index + 1, this.index + 5);
							a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
						} else n += ui[o] || o;
						r = !1
					} else if ("\\" === o) r = !0;
					else {
						if (o === e) return this.index++, void this.tokens.push({
							index: t,
							text: i,
							constant: !0,
							value: n
						});
						n += o
					}
					this.index++
				}
				this.throwError("Unterminated quote", t)
			}
		};
		var di = function(e, t) {
			this.lexer = e, this.options = t
		};

		function fi(e, t) {
			return void 0 !== e ? e : t
		}

		function hi(e, t) {
			return void 0 === e ? t : void 0 === t ? e : e + t
		}

		function pi(e, t) {
			return !e(t).$stateful
		}

		function mi(e, t) {
			var n, i;
			switch (e.type) {
				case di.Program:
					n = !0, ce(e.body, function(e) {
						mi(e.expression, t), n = n && e.expression.constant
					}), e.constant = n;
					break;
				case di.Literal:
					e.constant = !0, e.toWatch = [];
					break;
				case di.UnaryExpression:
					mi(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
					break;
				case di.BinaryExpression:
					mi(e.left, t), mi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
					break;
				case di.LogicalExpression:
					mi(e.left, t), mi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case di.ConditionalExpression:
					mi(e.test, t), mi(e.alternate, t), mi(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case di.Identifier:
					e.constant = !1, e.toWatch = [e];
					break;
				case di.MemberExpression:
					mi(e.object, t), e.computed && mi(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
					break;
				case di.CallExpression:
					n = !!e.filter && pi(t, e.callee.name), i = [], ce(e.arguments, function(e) {
						mi(e, t), n = n && e.constant, e.constant || i.push.apply(i, e.toWatch)
					}), e.constant = n, e.toWatch = e.filter && pi(t, e.callee.name) ? i : [e];
					break;
				case di.AssignmentExpression:
					mi(e.left, t), mi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
					break;
				case di.ArrayExpression:
					n = !0, i = [], ce(e.elements, function(e) {
						mi(e, t), n = n && e.constant, e.constant || i.push.apply(i, e.toWatch)
					}), e.constant = n, e.toWatch = i;
					break;
				case di.ObjectExpression:
					n = !0, i = [], ce(e.properties, function(e) {
						mi(e.value, t), n = n && e.value.constant && !e.computed, e.value.constant || i.push.apply(i, e.value.toWatch)
					}), e.constant = n, e.toWatch = i;
					break;
				case di.ThisExpression:
				case di.LocalsExpression:
					e.constant = !1, e.toWatch = []
			}
		}

		function gi(e) {
			if (1 == e.length) {
				var t = e[0].expression,
					n = t.toWatch;
				return 1 !== n.length ? n : n[0] !== t ? n : void 0
			}
		}

		function vi(e) {
			return e.type === di.Identifier || e.type === di.MemberExpression
		}

		function yi(e) {
			if (1 === e.body.length && vi(e.body[0].expression)) return {
				type: di.AssignmentExpression,
				left: e.body[0].expression,
				right: {
					type: di.NGValueParameter
				},
				operator: "="
			}
		}

		function bi(e) {
			return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === di.Literal || e.body[0].expression.type === di.ArrayExpression || e.body[0].expression.type === di.ObjectExpression)
		}

		function wi(e) {
			return e.constant
		}

		function $i(e, t) {
			this.astBuilder = e, this.$filter = t
		}

		function xi(e, t) {
			this.astBuilder = e, this.$filter = t
		}
		di.Program = "Program", di.ExpressionStatement = "ExpressionStatement", di.AssignmentExpression = "AssignmentExpression", di.ConditionalExpression = "ConditionalExpression", di.LogicalExpression = "LogicalExpression", di.BinaryExpression = "BinaryExpression", di.UnaryExpression = "UnaryExpression", di.CallExpression = "CallExpression", di.MemberExpression = "MemberExpression", di.Identifier = "Identifier", di.Literal = "Literal", di.ArrayExpression = "ArrayExpression", di.Property = "Property", di.ObjectExpression = "ObjectExpression", di.ThisExpression = "ThisExpression", di.LocalsExpression = "LocalsExpression", di.NGValueParameter = "NGValueParameter", di.prototype = {
			ast: function(e) {
				this.text = e, this.tokens = this.lexer.lex(e);
				var t = this.program();
				return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
			},
			program: function() {
				for (var e = [];;)
					if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
						type: di.Program,
						body: e
					}
			},
			expressionStatement: function() {
				return {
					type: di.ExpressionStatement,
					expression: this.filterChain()
				}
			},
			filterChain: function() {
				for (var e = this.expression(); this.expect("|");) e = this.filter(e);
				return e
			},
			expression: function() {
				return this.assignment()
			},
			assignment: function() {
				var e = this.ternary();
				return this.expect("=") && (e = {
					type: di.AssignmentExpression,
					left: e,
					right: this.assignment(),
					operator: "="
				}), e
			},
			ternary: function() {
				var e, t, n = this.logicalOR();
				return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
					type: di.ConditionalExpression,
					test: n,
					alternate: e,
					consequent: t
				}) : n
			},
			logicalOR: function() {
				for (var e = this.logicalAND(); this.expect("||");) e = {
					type: di.LogicalExpression,
					operator: "||",
					left: e,
					right: this.logicalAND()
				};
				return e
			},
			logicalAND: function() {
				for (var e = this.equality(); this.expect("&&");) e = {
					type: di.LogicalExpression,
					operator: "&&",
					left: e,
					right: this.equality()
				};
				return e
			},
			equality: function() {
				for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
					type: di.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.relational()
				};
				return t
			},
			relational: function() {
				for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
					type: di.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.additive()
				};
				return t
			},
			additive: function() {
				for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
					type: di.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.multiplicative()
				};
				return t
			},
			multiplicative: function() {
				for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
					type: di.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.unary()
				};
				return t
			},
			unary: function() {
				var e;
				return (e = this.expect("+", "-", "!")) ? {
					type: di.UnaryExpression,
					operator: e.text,
					prefix: !0,
					argument: this.unary()
				} : this.primary()
			},
			primary: function() {
				var e, t;
				for (this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = j(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
						type: di.Literal,
						value: this.options.literals[this.consume().text]
					} : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek()); t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
					type: di.CallExpression,
					callee: e,
					arguments: this.parseArguments()
				}, this.consume(")")) : "[" === t.text ? (e = {
					type: di.MemberExpression,
					object: e,
					property: this.expression(),
					computed: !0
				}, this.consume("]")) : "." === t.text ? e = {
					type: di.MemberExpression,
					object: e,
					property: this.identifier(),
					computed: !1
				} : this.throwError("IMPOSSIBLE");
				return e
			},
			filter: function(e) {
				for (var t = [e], n = {
						type: di.CallExpression,
						callee: this.identifier(),
						arguments: t,
						filter: !0
					}; this.expect(":");) t.push(this.expression());
				return n
			},
			parseArguments: function() {
				var e = [];
				if (")" !== this.peekToken().text)
					for (; e.push(this.filterChain()), this.expect(","););
				return e
			},
			identifier: function() {
				var e = this.consume();
				return e.identifier || this.throwError("is not a valid identifier", e), {
					type: di.Identifier,
					name: e.text
				}
			},
			constant: function() {
				return {
					type: di.Literal,
					value: this.consume().value
				}
			},
			arrayDeclaration: function() {
				var e = [];
				if ("]" !== this.peekToken().text)
					do {
						if (this.peek("]")) break;
						e.push(this.expression())
					} while (this.expect(","));
				return this.consume("]"), {
					type: di.ArrayExpression,
					elements: e
				}
			},
			object: function() {
				var e, t = [];
				if ("}" !== this.peekToken().text)
					do {
						if (this.peek("}")) break;
						e = {
							type: di.Property,
							kind: "init"
						}, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
					} while (this.expect(","));
				return this.consume("}"), {
					type: di.ObjectExpression,
					properties: t
				}
			},
			throwError: function(e, t) {
				throw Qn("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
			},
			consume: function(e) {
				if (0 === this.tokens.length) throw Qn("ueoe", "Unexpected end of expression: {0}", this.text);
				var t = this.expect(e);
				return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
			},
			peekToken: function() {
				if (0 === this.tokens.length) throw Qn("ueoe", "Unexpected end of expression: {0}", this.text);
				return this.tokens[0]
			},
			peek: function(e, t, n, i) {
				return this.peekAhead(0, e, t, n, i)
			},
			peekAhead: function(e, t, n, i, r) {
				if (this.tokens.length > e) {
					var o = this.tokens[e],
						a = o.text;
					if (a === t || a === n || a === i || a === r || !t && !n && !i && !r) return o
				}
				return !1
			},
			expect: function(e, t, n, i) {
				var r = this.peek(e, t, n, i);
				return !!r && (this.tokens.shift(), r)
			},
			selfReferential: {
				this: {
					type: di.ThisExpression
				},
				$locals: {
					type: di.LocalsExpression
				}
			}
		}, $i.prototype = {
			compile: function(e, t) {
				var r = this,
					n = this.astBuilder.ast(e);
				this.state = {
					nextId: 0,
					filters: {},
					expensiveChecks: t,
					fn: {
						vars: [],
						body: [],
						own: {}
					},
					assign: {
						vars: [],
						body: [],
						own: {}
					},
					inputs: []
				}, mi(n, r.$filter);
				var i, o = "";
				if (this.stage = "assign", i = yi(n)) {
					this.state.computing = "assign";
					var a = this.nextId();
					this.recurse(i, a), this.return_(a), o = "fn.assign=" + this.generateFunction("assign", "s,v,l")
				}
				var s = gi(n.body);
				r.stage = "inputs", ce(s, function(e, t) {
					var n = "fn" + t;
					r.state[n] = {
						vars: [],
						body: [],
						own: {}
					}, r.state.computing = n;
					var i = r.nextId();
					r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
				}), this.state.computing = "fn", this.stage = "main", this.recurse(n);
				var l = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + o + this.watchFns() + "return fn;",
					u = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", l)(this.$filter, ei, ni, ai, ti, si, fi, hi, e);
				return this.state = this.stage = void 0, u.literal = bi(n), u.constant = wi(n), u
			},
			USE: "use",
			STRICT: "strict",
			watchFns: function() {
				var t = [],
					e = this.state.inputs,
					n = this;
				return ce(e, function(e) {
					t.push("var " + e + "=" + n.generateFunction(e, "s"))
				}), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
			},
			generateFunction: function(e, t) {
				return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
			},
			filterPrefix: function() {
				var n = [],
					i = this;
				return ce(this.state.filters, function(e, t) {
					n.push(e + "=$filter(" + i.escape(t) + ")")
				}), n.length ? "var " + n.join(",") + ";" : ""
			},
			varsPrefix: function(e) {
				return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
			},
			body: function(e) {
				return this.state[e].body.join("")
			},
			recurse: function(n, t, e, i, r, o) {
				var a, s, l, u, c, d = this;
				if (i = i || U, !o && q(n.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", n.watchId)), this.lazyRecurse(n, t, e, i, r, !0));
				switch (n.type) {
					case di.Program:
						ce(n.body, function(e, t) {
							d.recurse(e.expression, void 0, void 0, function(e) {
								s = e
							}), t !== n.body.length - 1 ? d.current().body.push(s, ";") : d.return_(s)
						});
						break;
					case di.Literal:
						u = this.escape(n.value), this.assign(t, u), i(u);
						break;
					case di.UnaryExpression:
						this.recurse(n.argument, void 0, void 0, function(e) {
							s = e
						}), u = n.operator + "(" + this.ifDefined(s, 0) + ")", this.assign(t, u), i(u);
						break;
					case di.BinaryExpression:
						this.recurse(n.left, void 0, void 0, function(e) {
							a = e
						}), this.recurse(n.right, void 0, void 0, function(e) {
							s = e
						}), u = "+" === n.operator ? this.plus(a, s) : "-" === n.operator ? this.ifDefined(a, 0) + n.operator + this.ifDefined(s, 0) : "(" + a + ")" + n.operator + "(" + s + ")", this.assign(t, u), i(u);
						break;
					case di.LogicalExpression:
						t = t || this.nextId(), d.recurse(n.left, t), d.if_("&&" === n.operator ? t : d.not(t), d.lazyRecurse(n.right, t)), i(t);
						break;
					case di.ConditionalExpression:
						t = t || this.nextId(), d.recurse(n.test, t), d.if_(t, d.lazyRecurse(n.alternate, t), d.lazyRecurse(n.consequent, t)), i(t);
						break;
					case di.Identifier:
						t = t || this.nextId(), e && (e.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", n.name) + "?l:s"), e.computed = !1, e.name = n.name), ei(n.name), d.if_("inputs" === d.stage || d.not(d.getHasOwnProperty("l", n.name)), function() {
							d.if_("inputs" === d.stage || "s", function() {
								r && 1 !== r && d.if_(d.not(d.nonComputedMember("s", n.name)), d.lazyAssign(d.nonComputedMember("s", n.name), "{}")), d.assign(t, d.nonComputedMember("s", n.name))
							})
						}, t && d.lazyAssign(t, d.nonComputedMember("l", n.name))), (d.state.expensiveChecks || Ei(n.name)) && d.addEnsureSafeObject(t), i(t);
						break;
					case di.MemberExpression:
						a = e && (e.context = this.nextId()) || this.nextId(), t = t || this.nextId(), d.recurse(n.object, a, void 0, function() {
							d.if_(d.notNull(a), function() {
								r && 1 !== r && d.addEnsureSafeAssignContext(a), n.computed ? (s = d.nextId(), d.recurse(n.property, s), d.getStringValue(s), d.addEnsureSafeMemberName(s), r && 1 !== r && d.if_(d.not(d.computedMember(a, s)), d.lazyAssign(d.computedMember(a, s), "{}")), u = d.ensureSafeObject(d.computedMember(a, s)), d.assign(t, u), e && (e.computed = !0, e.name = s)) : (ei(n.property.name), r && 1 !== r && d.if_(d.not(d.nonComputedMember(a, n.property.name)), d.lazyAssign(d.nonComputedMember(a, n.property.name), "{}")), u = d.nonComputedMember(a, n.property.name), (d.state.expensiveChecks || Ei(n.property.name)) && (u = d.ensureSafeObject(u)), d.assign(t, u), e && (e.computed = !1, e.name = n.property.name))
							}, function() {
								d.assign(t, "undefined")
							}), i(t)
						}, !!r);
						break;
					case di.CallExpression:
						t = t || this.nextId(), n.filter ? (s = d.filter(n.callee.name), l = [], ce(n.arguments, function(e) {
							var t = d.nextId();
							d.recurse(e, t), l.push(t)
						}), u = s + "(" + l.join(",") + ")", d.assign(t, u), i(t)) : (s = d.nextId(), a = {}, l = [], d.recurse(n.callee, s, a, function() {
							d.if_(d.notNull(s), function() {
								d.addEnsureSafeFunction(s), ce(n.arguments, function(e) {
									d.recurse(e, d.nextId(), void 0, function(e) {
										l.push(d.ensureSafeObject(e))
									})
								}), u = a.name ? (d.state.expensiveChecks || d.addEnsureSafeObject(a.context), d.member(a.context, a.name, a.computed) + "(" + l.join(",") + ")") : s + "(" + l.join(",") + ")", u = d.ensureSafeObject(u), d.assign(t, u)
							}, function() {
								d.assign(t, "undefined")
							}), i(t)
						}));
						break;
					case di.AssignmentExpression:
						if (s = this.nextId(), a = {}, !vi(n.left)) throw Qn("lval", "Trying to assign a value to a non l-value");
						this.recurse(n.left, void 0, a, function() {
							d.if_(d.notNull(a.context), function() {
								d.recurse(n.right, s), d.addEnsureSafeObject(d.member(a.context, a.name, a.computed)), d.addEnsureSafeAssignContext(a.context), u = d.member(a.context, a.name, a.computed) + n.operator + s, d.assign(t, u), i(t || u)
							})
						}, 1);
						break;
					case di.ArrayExpression:
						l = [], ce(n.elements, function(e) {
							d.recurse(e, d.nextId(), void 0, function(e) {
								l.push(e)
							})
						}), u = "[" + l.join(",") + "]", this.assign(t, u), i(u);
						break;
					case di.ObjectExpression:
						c = !(l = []), ce(n.properties, function(e) {
							e.computed && (c = !0)
						}), c ? (t = t || this.nextId(), this.assign(t, "{}"), ce(n.properties, function(e) {
							e.computed ? (a = d.nextId(), d.recurse(e.key, a)) : a = e.key.type === di.Identifier ? e.key.name : "" + e.key.value, s = d.nextId(), d.recurse(e.value, s), d.assign(d.member(t, a, e.computed), s)
						})) : (ce(n.properties, function(t) {
							d.recurse(t.value, n.constant ? void 0 : d.nextId(), void 0, function(e) {
								l.push(d.escape(t.key.type === di.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
							})
						}), u = "{" + l.join(",") + "}", this.assign(t, u)), i(t || u);
						break;
					case di.ThisExpression:
						this.assign(t, "s"), i("s");
						break;
					case di.LocalsExpression:
						this.assign(t, "l"), i("l");
						break;
					case di.NGValueParameter:
						this.assign(t, "v"), i("v")
				}
			},
			getHasOwnProperty: function(e, t) {
				var n = e + "." + t,
					i = this.current().own;
				return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), i[n]
			},
			assign: function(e, t) {
				if (e) return this.current().body.push(e, "=", t, ";"), e
			},
			filter: function(e) {
				return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
			},
			ifDefined: function(e, t) {
				return "ifDefined(" + e + "," + this.escape(t) + ")"
			},
			plus: function(e, t) {
				return "plus(" + e + "," + t + ")"
			},
			return_: function(e) {
				this.current().body.push("return ", e, ";")
			},
			if_: function(e, t, n) {
				if (!0 === e) t();
				else {
					var i = this.current().body;
					i.push("if(", e, "){"), t(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
				}
			},
			not: function(e) {
				return "!(" + e + ")"
			},
			notNull: function(e) {
				return e + "!=null"
			},
			nonComputedMember: function(e, t) {
				return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
			},
			computedMember: function(e, t) {
				return e + "[" + t + "]"
			},
			member: function(e, t, n) {
				return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
			},
			addEnsureSafeObject: function(e) {
				this.current().body.push(this.ensureSafeObject(e), ";")
			},
			addEnsureSafeMemberName: function(e) {
				this.current().body.push(this.ensureSafeMemberName(e), ";")
			},
			addEnsureSafeFunction: function(e) {
				this.current().body.push(this.ensureSafeFunction(e), ";")
			},
			addEnsureSafeAssignContext: function(e) {
				this.current().body.push(this.ensureSafeAssignContext(e), ";")
			},
			ensureSafeObject: function(e) {
				return "ensureSafeObject(" + e + ",text)"
			},
			ensureSafeMemberName: function(e) {
				return "ensureSafeMemberName(" + e + ",text)"
			},
			ensureSafeFunction: function(e) {
				return "ensureSafeFunction(" + e + ",text)"
			},
			getStringValue: function(e) {
				this.assign(e, "getStringValue(" + e + ")")
			},
			ensureSafeAssignContext: function(e) {
				return "ensureSafeAssignContext(" + e + ",text)"
			},
			lazyRecurse: function(e, t, n, i, r, o) {
				var a = this;
				return function() {
					a.recurse(e, t, n, i, r, o)
				}
			},
			lazyAssign: function(e, t) {
				var n = this;
				return function() {
					n.assign(e, t)
				}
			},
			stringEscapeRegex: /[^ a-zA-Z0-9]/g,
			stringEscapeFn: function(e) {
				return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			},
			escape: function(e) {
				if (pe(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
				if ($(e)) return e.toString();
				if (!0 === e) return "true";
				if (!1 === e) return "false";
				if (null === e) return "null";
				if (void 0 === e) return "undefined";
				throw Qn("esc", "IMPOSSIBLE")
			},
			nextId: function(e, t) {
				var n = "v" + this.state.nextId++;
				return e || this.current().vars.push(n + (t ? "=" + t : "")), n
			},
			current: function() {
				return this.state[this.state.computing]
			}
		}, xi.prototype = {
			compile: function(e, t) {
				var n, i, r = this,
					o = this.astBuilder.ast(e);
				this.expression = e, this.expensiveChecks = t, mi(o, r.$filter), (n = yi(o)) && (i = this.recurse(n));
				var a, s = gi(o.body);
				s && (a = [], ce(s, function(e, t) {
					var n = r.recurse(e);
					e.input = n, a.push(n), e.watchId = t
				}));
				var l = [];
				ce(o.body, function(e) {
					l.push(r.recurse(e.expression))
				});
				var u = 0 === o.body.length ? U : 1 === o.body.length ? l[0] : function(t, n) {
					var i;
					return ce(l, function(e) {
						i = e(t, n)
					}), i
				};
				return i && (u.assign = function(e, t, n) {
					return i(e, n, t)
				}), a && (u.inputs = a), u.literal = bi(o), u.constant = wi(o), u
			},
			recurse: function(e, l, t) {
				var a, u, c, d = this;
				if (e.input) return this.inputs(e.input, e.watchId);
				switch (e.type) {
					case di.Literal:
						return this.value(e.value, l);
					case di.UnaryExpression:
						return u = this.recurse(e.argument), this["unary" + e.operator](u, l);
					case di.BinaryExpression:
					case di.LogicalExpression:
						return a = this.recurse(e.left), u = this.recurse(e.right), this["binary" + e.operator](a, u, l);
					case di.ConditionalExpression:
						return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), l);
					case di.Identifier:
						return ei(e.name, d.expression), d.identifier(e.name, d.expensiveChecks || Ei(e.name), l, t, d.expression);
					case di.MemberExpression:
						return a = this.recurse(e.object, !1, !!t), e.computed || (ei(e.property.name, d.expression), u = e.property.name), e.computed && (u = this.recurse(e.property)), e.computed ? this.computedMember(a, u, l, t, d.expression) : this.nonComputedMember(a, u, d.expensiveChecks, l, t, d.expression);
					case di.CallExpression:
						return c = [], ce(e.arguments, function(e) {
							c.push(d.recurse(e))
						}), e.filter && (u = this.$filter(e.callee.name)), e.filter || (u = this.recurse(e.callee, !0)), e.filter ? function(e, t, n, i) {
							for (var r = [], o = 0; o < c.length; ++o) r.push(c[o](e, t, n, i));
							var a = u.apply(void 0, r, i);
							return l ? {
								context: void 0,
								name: void 0,
								value: a
							} : a
						} : function(e, t, n, i) {
							var r, o = u(e, t, n, i);
							if (null != o.value) {
								ni(o.context, d.expression), ai(o.value, d.expression);
								for (var a = [], s = 0; s < c.length; ++s) a.push(ni(c[s](e, t, n, i), d.expression));
								r = ni(o.value.apply(o.context, a), d.expression)
							}
							return l ? {
								value: r
							} : r
						};
					case di.AssignmentExpression:
						return a = this.recurse(e.left, !0, 1), u = this.recurse(e.right),
							function(e, t, n, i) {
								var r = a(e, t, n, i),
									o = u(e, t, n, i);
								return ni(r.value, d.expression), si(r.context), r.context[r.name] = o, l ? {
									value: o
								} : o
							};
					case di.ArrayExpression:
						return c = [], ce(e.elements, function(e) {
								c.push(d.recurse(e))
							}),
							function(e, t, n, i) {
								for (var r = [], o = 0; o < c.length; ++o) r.push(c[o](e, t, n, i));
								return l ? {
									value: r
								} : r
							};
					case di.ObjectExpression:
						return c = [], ce(e.properties, function(e) {
								e.computed ? c.push({
									key: d.recurse(e.key),
									computed: !0,
									value: d.recurse(e.value)
								}) : c.push({
									key: e.key.type === di.Identifier ? e.key.name : "" + e.key.value,
									computed: !1,
									value: d.recurse(e.value)
								})
							}),
							function(e, t, n, i) {
								for (var r = {}, o = 0; o < c.length; ++o) c[o].computed ? r[c[o].key(e, t, n, i)] = c[o].value(e, t, n, i) : r[c[o].key] = c[o].value(e, t, n, i);
								return l ? {
									value: r
								} : r
							};
					case di.ThisExpression:
						return function(e) {
							return l ? {
								value: e
							} : e
						};
					case di.LocalsExpression:
						return function(e, t) {
							return l ? {
								value: t
							} : t
						};
					case di.NGValueParameter:
						return function(e, t, n) {
							return l ? {
								value: n
							} : n
						}
				}
			},
			"unary+": function(o, a) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i);
					return r = q(r) ? +r : 0, a ? {
						value: r
					} : r
				}
			},
			"unary-": function(o, a) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i);
					return r = q(r) ? -r : 0, a ? {
						value: r
					} : r
				}
			},
			"unary!": function(o, a) {
				return function(e, t, n, i) {
					var r = !o(e, t, n, i);
					return a ? {
						value: r
					} : r
				}
			},
			"binary+": function(o, a, s) {
				return function(e, t, n, i) {
					var r = hi(o(e, t, n, i), a(e, t, n, i));
					return s ? {
						value: r
					} : r
				}
			},
			"binary-": function(s, l, u) {
				return function(e, t, n, i) {
					var r = s(e, t, n, i),
						o = l(e, t, n, i),
						a = (q(r) ? r : 0) - (q(o) ? o : 0);
					return u ? {
						value: a
					} : a
				}
			},
			"binary*": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) * a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary/": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) / a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary%": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) % a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary===": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) === a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary!==": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) !== a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary==": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) == a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary!=": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) != a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary<": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) < a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary>": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) > a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary<=": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) <= a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary>=": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) >= a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary&&": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) && a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"binary||": function(o, a, s) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) || a(e, t, n, i);
					return s ? {
						value: r
					} : r
				}
			},
			"ternary?:": function(o, a, s, l) {
				return function(e, t, n, i) {
					var r = o(e, t, n, i) ? a(e, t, n, i) : s(e, t, n, i);
					return l ? {
						value: r
					} : r
				}
			},
			value: function(e, t) {
				return function() {
					return t ? {
						context: void 0,
						name: void 0,
						value: e
					} : e
				}
			},
			identifier: function(a, s, l, u, c) {
				return function(e, t, n, i) {
					var r = t && a in t ? t : e;
					u && 1 !== u && r && !r[a] && (r[a] = {});
					var o = r ? r[a] : void 0;
					return s && ni(o, c), l ? {
						context: r,
						name: a,
						value: o
					} : o
				}
			},
			computedMember: function(s, l, u, c, d) {
				return function(e, t, n, i) {
					var r, o, a = s(e, t, n, i);
					return null != a && (ei(r = ti(r = l(e, t, n, i)), d), c && 1 !== c && (si(a), a && !a[r] && (a[r] = {})), ni(o = a[r], d)), u ? {
						context: a,
						name: r,
						value: o
					} : o
				}
			},
			nonComputedMember: function(a, s, l, u, c, d) {
				return function(e, t, n, i) {
					var r = a(e, t, n, i);
					c && 1 !== c && (si(r), r && !r[s] && (r[s] = {}));
					var o = null != r ? r[s] : void 0;
					return (l || Ei(s)) && ni(o, d), u ? {
						context: r,
						name: s,
						value: o
					} : o
				}
			},
			inputs: function(r, o) {
				return function(e, t, n, i) {
					return i ? i[o] : r(e, t, n)
				}
			}
		};
		var Si = function(e, t, n) {
			this.lexer = e, this.$filter = t, this.options = n, this.ast = new di(e, n), this.astCompiler = n.csp ? new xi(this.ast, t) : new $i(this.ast, t)
		};

		function Ei(e) {
			return "constructor" == e
		}
		Si.prototype = {
			constructor: Si,
			parse: function(e) {
				return this.astCompiler.compile(e, this.options.expensiveChecks)
			}
		};
		var Ci = Object.prototype.valueOf;

		function ki(e) {
			return ge(e.valueOf) ? e.valueOf() : Ci.call(e)
		}

		function Ti() {
			var n, i, b = _e(),
				w = _e(),
				r = {
					true: !0,
					false: !1,
					null: null,
					undefined: void 0
				};
			this.addLiteral = function(e, t) {
				r[e] = t
			}, this.setIdentifierFns = function(e, t) {
				return n = e, i = t, this
			}, this.$get = ["$filter", function(u) {
				var e = I().noUnsafeEval,
					c = {
						csp: e,
						expensiveChecks: !1,
						literals: j(r),
						isIdentifierStart: ge(n) && n,
						isIdentifierContinue: ge(i) && i
					},
					d = {
						csp: e,
						expensiveChecks: !0,
						literals: j(r),
						isIdentifierStart: ge(n) && n,
						isIdentifierContinue: ge(i) && i
					},
					f = !1;
				return t.$$runningExpensiveChecks = function() {
					return f
				}, t;

				function t(e, t, n) {
					var i, r, o;
					switch (n = n || f, typeof e) {
						case "string":
							e = e.trim();
							var a = n ? w : b;
							if (!(i = a[o = e])) {
								":" === e.charAt(0) && ":" === e.charAt(1) && (r = !0, e = e.substring(2));
								var s = n ? d : c,
									l = new ci(s);
								(i = new Si(l, u, s).parse(e)).constant ? i.$$watchDelegate = v : r ? i.$$watchDelegate = i.literal ? g : m : i.inputs && (i.$$watchDelegate = p), n && (i = function e(o) {
									if (!o) return o;
									n.$$watchDelegate = o.$$watchDelegate, n.assign = e(o.assign), n.constant = o.constant, n.literal = o.literal;
									for (var t = 0; o.inputs && t < o.inputs.length; ++t) o.inputs[t] = e(o.inputs[t]);
									return n.inputs = o.inputs, n;

									function n(e, t, n, i) {
										var r = f;
										f = !0;
										try {
											return o(e, t, n, i)
										} finally {
											f = r
										}
									}
								}(i)), a[o] = i
							}
							return y(i, t);
						case "function":
							return y(e, t);
						default:
							return y(U, t)
					}
				}

				function h(e, t) {
					return null == e || null == t ? e === t : ("object" != typeof e || "object" != typeof(e = ki(e))) && (e === t || e != e && t != t)
				}

				function p(e, t, n, o, i) {
					var a, s = o.inputs;
					if (1 === s.length) {
						var r = h;
						return s = s[0], e.$watch(function(e) {
							var t = s(e);
							return h(t, r) || (a = o(e, void 0, void 0, [t]), r = t && ki(t)), a
						}, t, n, i)
					}
					for (var l = [], u = [], c = 0, d = s.length; c < d; c++) l[c] = h, u[c] = null;
					return e.$watch(function(e) {
						for (var t = !1, n = 0, i = s.length; n < i; n++) {
							var r = s[n](e);
							(t || (t = !h(r, l[n]))) && (u[n] = r, l[n] = r && ki(r))
						}
						return t && (a = o(e, void 0, void 0, u)), a
					}, t, n, i)
				}

				function m(e, i, t, n) {
					var r, o;
					return r = e.$watch(function(e) {
						return n(e)
					}, function(e, t, n) {
						o = e, ge(i) && i.apply(this, arguments), q(e) && n.$$postDigest(function() {
							q(o) && r()
						})
					}, t)
				}

				function g(e, i, t, n) {
					var r, o;
					return r = e.$watch(function(e) {
						return n(e)
					}, function(e, t, n) {
						o = e, ge(i) && i.call(this, e, t, n), a(e) && n.$$postDigest(function() {
							a(o) && r()
						})
					}, t);

					function a(e) {
						var t = !0;
						return ce(e, function(e) {
							q(e) || (t = !1)
						}), t
					}
				}

				function v(e, t, n, i) {
					var r;
					return r = e.$watch(function(e) {
						return r(), i(e)
					}, t, n)
				}

				function y(a, s) {
					if (!s) return a;
					var e = a.$$watchDelegate,
						o = !1,
						t = e !== g && e !== m ? function(e, t, n, i) {
							var r = o && i ? i[0] : a(e, t, n, i);
							return s(r, e, t)
						} : function(e, t, n, i) {
							var r = a(e, t, n, i),
								o = s(r, e, t);
							return q(r) ? o : r
						};
					return a.$$watchDelegate && a.$$watchDelegate !== p ? t.$$watchDelegate = a.$$watchDelegate : s.$stateful || (t.$$watchDelegate = p, o = !a.inputs, t.inputs = a.inputs ? a.inputs : [a]), t
				}
			}]
		}

		function _i() {
			this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
				return Pi(function(e) {
					t.$evalAsync(e)
				}, e)
			}]
		}

		function Ai() {
			this.$get = ["$browser", "$exceptionHandler", function(t, e) {
				return Pi(function(e) {
					t.defer(e)
				}, e)
			}]
		}

		function Pi(t, a) {
			var n = p("$q", TypeError),
				i = function() {
					var e = new l;
					return e.resolve = o(e, e.resolve), e.reject = o(e, e.reject), e.notify = o(e, e.notify), e
				};

			function e() {
				this.$$state = {
					status: 0
				}
			}

			function o(t, n) {
				return function(e) {
					n.call(t, e)
				}
			}

			function s(e) {
				!e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
					! function(e) {
						var t, n, i;
						i = e.pending, e.processScheduled = !1, e.pending = void 0;
						for (var r = 0, o = i.length; r < o; ++r) {
							n = i[r][0], t = i[r][e.status];
							try {
								ge(t) ? n.resolve(t(e.value)) : 1 === e.status ? n.resolve(e.value) : n.reject(e.value)
							} catch (e) {
								n.reject(e), a(e)
							}
						}
					}(e)
				}))
			}

			function l() {
				this.promise = new e
			}
			de(e.prototype, {
				then: function(e, t, n) {
					if (fe(e) && fe(t) && fe(n)) return this;
					var i = new l;
					return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, e, t, n]), 0 < this.$$state.status && s(this.$$state), i.promise
				},
				catch: function(e) {
					return this.then(null, e)
				},
				finally: function(t, e) {
					return this.then(function(e) {
						return u(e, !0, t)
					}, function(e) {
						return u(e, !1, t)
					}, e)
				}
			}), de(l.prototype, {
				resolve: function(e) {
					this.promise.$$state.status || (e === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
				},
				$$resolve: function(e) {
					var t, n = this,
						i = !1;
					try {
						(he(e) || ge(e)) && (t = e && e.then), ge(t) ? (this.promise.$$state.status = -1, t.call(e, function(e) {
							i || (i = !0, n.$$resolve(e))
						}, r, o(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, s(this.promise.$$state))
					} catch (e) {
						r(e), a(e)
					}

					function r(e) {
						i || (i = !0, n.$$reject(e))
					}
				},
				reject: function(e) {
					this.promise.$$state.status || this.$$reject(e)
				},
				$$reject: function(e) {
					this.promise.$$state.value = e, this.promise.$$state.status = 2, s(this.promise.$$state)
				},
				notify: function(r) {
					var o = this.promise.$$state.pending;
					this.promise.$$state.status <= 0 && o && o.length && t(function() {
						for (var e, t, n = 0, i = o.length; n < i; n++) {
							t = o[n][0], e = o[n][3];
							try {
								t.notify(ge(e) ? e(r) : r)
							} catch (e) {
								a(e)
							}
						}
					})
				}
			});
			var r = function(e, t) {
					var n = new l;
					return t ? n.resolve(e) : n.reject(e), n.promise
				},
				u = function(e, t, n) {
					var i = null;
					try {
						ge(n) && (i = n())
					} catch (e) {
						return r(e, !1)
					}
					return P(i) ? i.then(function() {
						return r(e, t)
					}, function(e) {
						return r(e, !1)
					}) : r(e, t)
				},
				c = function(e, t, n, i) {
					var r = new l;
					return r.resolve(e), r.promise.then(t, n, i)
				},
				d = c,
				f = function(e) {
					if (!ge(e)) throw n("norslvr", "Expected resolverFn, got '{0}'", e);
					var t = new l;
					return e(function(e) {
						t.resolve(e)
					}, function(e) {
						t.reject(e)
					}), t.promise
				};
			return f.prototype = e.prototype, f.defer = i, f.reject = function(e) {
				var t = new l;
				return t.reject(e), t.promise
			}, f.when = c, f.resolve = d, f.all = function(e) {
				var n = new l,
					i = 0,
					r = me(e) ? [] : {};
				return ce(e, function(e, t) {
					i++, c(e).then(function(e) {
						r.hasOwnProperty(t) || (r[t] = e, --i || n.resolve(r))
					}, function(e) {
						r.hasOwnProperty(t) || n.reject(e)
					})
				}), 0 === i && n.resolve(r), n.promise
			}, f.race = function(e) {
				var t = i();
				return ce(e, function(e) {
					c(e).then(t.resolve, t.reject)
				}), t.promise
			}, f
		}

		function Mi() {
			this.$get = ["$window", "$timeout", function(e, n) {
				var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
					r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
					t = !!i,
					o = t ? function(e) {
						var t = i(e);
						return function() {
							r(t)
						}
					} : function(e) {
						var t = n(e, 16.66, !1);
						return function() {
							n.cancel(t)
						}
					};
				return o.supported = t, o
			}]
		}

		function Oi() {
			var E = 10,
				C = p("$rootScope"),
				k = null,
				T = null;
			this.digestTtl = function(e) {
				return arguments.length && (E = e), E
			}, this.$get = ["$exceptionHandler", "$parse", "$browser", function(h, p, m) {
				function i(e) {
					e.currentScope.$$destroyed = !0
				}

				function r() {
					this.$id = _(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, (this.$root = this).$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
				}
				r.prototype = {
					constructor: r,
					$new: function(e, t) {
						var n;
						return t = t || this, e ? (n = new r).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(e) {
							function t() {
								this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = _(), this.$$ChildScope = null
							}
							return t.prototype = e, t
						}(this)), n = new this.$$ChildScope), n.$parent = t, n.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = n, t.$$childTail = n) : t.$$childHead = t.$$childTail = n, (e || t != this) && n.$on("$destroy", i), n
					},
					$watch: function(e, t, n, i) {
						var r = p(e);
						if (r.$$watchDelegate) return r.$$watchDelegate(this, t, n, r, e);
						var o = this,
							a = o.$$watchers,
							s = {
								fn: t,
								last: x,
								get: r,
								exp: i || e,
								eq: !!n
							};
						return k = null, ge(t) || (s.fn = U), a || (a = o.$$watchers = []), a.unshift(s), l(this, 1),
							function() {
								0 <= $e(a, s) && l(o, -1), k = null
							}
					},
					$watchGroup: function(e, i) {
						var r = new Array(e.length),
							o = new Array(e.length),
							a = [],
							s = this,
							l = !1,
							t = !0;
						if (!e.length) {
							var n = !0;
							return s.$evalAsync(function() {
									n && i(o, o, s)
								}),
								function() {
									n = !1
								}
						}
						if (1 === e.length) return this.$watch(e[0], function(e, t, n) {
							o[0] = e, r[0] = t, i(o, e === t ? o : r, n)
						});

						function u() {
							l = !1, t ? (t = !1, i(o, o, s)) : i(o, r, s)
						}
						return ce(e, function(e, n) {
								var t = s.$watch(e, function(e, t) {
									o[n] = e, r[n] = t, l || (l = !0, s.$evalAsync(u))
								});
								a.push(t)
							}),
							function() {
								for (; a.length;) a.shift()()
							}
					},
					$watchCollection: function(e, n) {
						h.$stateful = !0;
						var a, s, i, r = this,
							o = 1 < n.length,
							l = 0,
							t = p(e, h),
							u = [],
							c = {},
							d = !0,
							f = 0;

						function h(e) {
							var t, n, i, r;
							if (!fe(a = e)) {
								if (he(a))
									if (N(a)) {
										s !== u && (f = (s = u).length = 0, l++), t = a.length, f !== t && (l++, s.length = f = t);
										for (var o = 0; o < t; o++) r = s[o], i = a[o], r != r && i != i || r === i || (l++, s[o] = i)
									} else {
										for (n in s !== c && (s = c = {}, f = 0, l++), t = 0, a) F.call(a, n) && (t++, i = a[n], r = s[n], n in s ? r != r && i != i || r === i || (l++, s[n] = i) : (f++, s[n] = i, l++));
										if (t < f)
											for (n in l++, s) F.call(a, n) || (f--, delete s[n])
									}
								else s !== a && (s = a, l++);
								return l
							}
						}
						return this.$watch(t, function() {
							if (d ? (d = !1, n(a, a, r)) : n(a, i, r), o)
								if (he(a))
									if (N(a)) {
										i = new Array(a.length);
										for (var e = 0; e < a.length; e++) i[e] = a[e]
									} else
										for (var t in i = {}, a) F.call(a, t) && (i[t] = a[t]);
							else i = a
						})
					},
					$digest: function() {
						var e, t, n, i, r, o, a, s, l, u, c = E,
							d = [];
						w("$digest"), m.$$checkUrlChange(), this === g && null !== T && (m.defer.cancel(T), S()), k = null;
						do {
							o = !1, s = this;
							for (var f = 0; f < v.length; f++) {
								try {
									(u = v[f]).scope.$eval(u.expression, u.locals)
								} catch (e) {
									h(e)
								}
								k = null
							}
							v.length = 0;
							e: do {
								if (i = s.$$watchers)
									for (r = i.length; r--;) try {
										if (e = i[r])
											if ((t = (0, e.get)(s)) === (n = e.last) || (e.eq ? xe(t, n) : "number" == typeof t && "number" == typeof n && isNaN(t) && isNaN(n))) {
												if (e === k) {
													o = !1;
													break e
												}
											} else o = !0, (k = e).last = e.eq ? j(t, null) : t, (0, e.fn)(t, n === x ? t : n, s), c < 5 && (d[l = 4 - c] || (d[l] = []), d[l].push({
												msg: ge(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
												newVal: t,
												oldVal: n
											}))
									} catch (e) {
										h(e)
									}
								if (!(a = s.$$watchersCount && s.$$childHead || s !== this && s.$$nextSibling))
									for (; s !== this && !(a = s.$$nextSibling);) s = s.$parent
							} while (s = a);
							if ((o || v.length) && !c--) throw $(), C("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", E, d)
						} while (o || v.length);
						for ($(); b < y.length;) try {
							y[b++]()
						} catch (e) {
							h(e)
						}
						y.length = b = 0
					},
					$destroy: function() {
						if (!this.$$destroyed) {
							var e = this.$parent;
							for (var t in this.$broadcast("$destroy"), this.$$destroyed = !0, this === g && m.$$applicationDestroyed(), l(this, -this.$$watchersCount), this.$$listenerCount) o(this, this.$$listenerCount[t], t);
							e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = U, this.$on = this.$watch = this.$watchGroup = function() {
									return U
								}, this.$$listeners = {}, this.$$nextSibling = null,
								function e(t) {
									9 === R && (t.$$childHead && e(t.$$childHead), t.$$nextSibling && e(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
								}(this)
						}
					},
					$eval: function(e, t) {
						return p(e)(this, t)
					},
					$evalAsync: function(e, t) {
						g.$$phase || v.length || m.defer(function() {
							v.length && g.$digest()
						}), v.push({
							scope: this,
							expression: p(e),
							locals: t
						})
					},
					$$postDigest: function(e) {
						y.push(e)
					},
					$apply: function(e) {
						try {
							w("$apply");
							try {
								return this.$eval(e)
							} finally {
								$()
							}
						} catch (e) {
							h(e)
						} finally {
							try {
								g.$digest()
							} catch (e) {
								throw h(e), e
							}
						}
					},
					$applyAsync: function(e) {
						var t = this;
						e && n.push(function() {
							t.$eval(e)
						}), e = p(e), null === T && (T = m.defer(function() {
							g.$apply(S)
						}))
					},
					$on: function(t, n) {
						var i = this.$$listeners[t];
						i || (this.$$listeners[t] = i = []), i.push(n);
						for (var e = this; e.$$listenerCount[t] || (e.$$listenerCount[t] = 0), e.$$listenerCount[t]++, e = e.$parent;);
						var r = this;
						return function() {
							var e = i.indexOf(n); - 1 !== e && (i[e] = null, o(r, 1, t))
						}
					},
					$emit: function(e, t) {
						var n, i, r, o = [],
							a = this,
							s = !1,
							l = {
								name: e,
								targetScope: a,
								stopPropagation: function() {
									s = !0
								},
								preventDefault: function() {
									l.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							u = B([l], arguments, 1);
						do {
							for (n = a.$$listeners[e] || o, l.currentScope = a, i = 0, r = n.length; i < r; i++)
								if (n[i]) try {
									n[i].apply(null, u)
								} catch (e) {
									h(e)
								} else n.splice(i, 1), i--, r--;
							if (s) return l.currentScope = null, l;
							a = a.$parent
						} while (a);
						return l.currentScope = null, l
					},
					$broadcast: function(e, t) {
						var n = this,
							i = this,
							r = {
								name: e,
								targetScope: this,
								preventDefault: function() {
									r.defaultPrevented = !0
								},
								defaultPrevented: !1
							};
						if (!this.$$listenerCount[e]) return r;
						for (var o, a, s, l = B([r], arguments, 1); n = i;) {
							for (a = 0, s = (o = (r.currentScope = n).$$listeners[e] || []).length; a < s; a++)
								if (o[a]) try {
									o[a].apply(null, l)
								} catch (e) {
									h(e)
								} else o.splice(a, 1), a--, s--;
							if (!(i = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling))
								for (; n !== this && !(i = n.$$nextSibling);) n = n.$parent
						}
						return r.currentScope = null, r
					}
				};
				var g = new r,
					v = g.$$asyncQueue = [],
					y = g.$$postDigestQueue = [],
					n = g.$$applyAsyncQueue = [],
					b = 0;
				return g;

				function w(e) {
					if (g.$$phase) throw C("inprog", "{0} already in progress", g.$$phase);
					g.$$phase = e
				}

				function $() {
					g.$$phase = null
				}

				function l(e, t) {
					for (; e.$$watchersCount += t, e = e.$parent;);
				}

				function o(e, t, n) {
					for (; e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n], e = e.$parent;);
				}

				function x() {}

				function S() {
					for (; n.length;) try {
						n.shift()()
					} catch (e) {
						h(e)
					}
					T = null
				}
			}]
		}

		function Di() {
			var r = /^\s*(https?|ftp|mailto|tel|file):/,
				o = /^\s*((https?|ftp|file|blob):|data:image\/)/;
			this.aHrefSanitizationWhitelist = function(e) {
				return q(e) ? (r = e, this) : r
			}, this.imgSrcSanitizationWhitelist = function(e) {
				return q(e) ? (o = e, this) : o
			}, this.$get = function() {
				return function(e, t) {
					var n, i = t ? o : r;
					return "" === (n = Wi(e).href) || n.match(i) ? e : "unsafe:" + n
				}
			}
		}
		var Ni = p("$sce"),
			ji = {
				HTML: "html",
				CSS: "css",
				URL: "url",
				RESOURCE_URL: "resourceUrl",
				JS: "js"
			};

		function Ii(e) {
			var t = [];
			return q(e) && ce(e, function(e) {
				t.push(function(e) {
					if ("self" === e) return e;
					if (pe(e)) {
						if (-1 < e.indexOf("***")) throw Ni("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
						return e = O(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
					}
					if (T(e)) return new RegExp("^" + e.source + "$");
					throw Ni("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
				}(e))
			}), t
		}

		function Li() {
			this.SCE_CONTEXTS = ji;
			var s = ["self"],
				l = [];
			this.resourceUrlWhitelist = function(e) {
				return arguments.length && (s = Ii(e)), s
			}, this.resourceUrlBlacklist = function(e) {
				return arguments.length && (l = Ii(e)), l
			}, this.$get = ["$injector", function(e) {
				var n = function(e) {
					throw Ni("unsafe", "Attempting to use an unsafe value in a safe context.")
				};

				function a(e, t) {
					return "self" === e ? Yi(t) : !!e.exec(t.href)
				}

				function t(e) {
					var t = function(e) {
						this.$$unwrapTrustedValue = function() {
							return e
						}
					};
					return e && (t.prototype = new e), t.prototype.valueOf = function() {
						return this.$$unwrapTrustedValue()
					}, t.prototype.toString = function() {
						return this.$$unwrapTrustedValue().toString()
					}, t
				}
				e.has("$sanitize") && (n = e.get("$sanitize"));
				var i = t(),
					r = {};
				return r[ji.HTML] = t(i), r[ji.CSS] = t(i), r[ji.URL] = t(i), r[ji.JS] = t(i), r[ji.RESOURCE_URL] = t(r[ji.URL]), {
					trustAs: function(e, t) {
						var n = r.hasOwnProperty(e) ? r[e] : null;
						if (!n) throw Ni("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
						if (null === t || fe(t) || "" === t) return t;
						if ("string" != typeof t) throw Ni("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
						return new n(t)
					},
					getTrusted: function(e, o) {
						if (null === o || fe(o) || "" === o) return o;
						var t = r.hasOwnProperty(e) ? r[e] : null;
						if (t && o instanceof t) return o.$$unwrapTrustedValue();
						if (e === ji.RESOURCE_URL) {
							if (function(e) {
									var t, n, i = Wi(o.toString()),
										r = !1;
									for (t = 0, n = s.length; t < n; t++)
										if (a(s[t], i)) {
											r = !0;
											break
										} if (r)
										for (t = 0, n = l.length; t < n; t++)
											if (a(l[t], i)) {
												r = !1;
												break
											} return r
								}()) return o;
							throw Ni("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", o.toString())
						}
						if (e === ji.HTML) return n(o);
						throw Ni("unsafe", "Attempting to use an unsafe value in a safe context.")
					},
					valueOf: function(e) {
						return e instanceof i ? e.$$unwrapTrustedValue() : e
					}
				}
			}]
		}

		function Fi() {
			var t = !0;
			this.enabled = function(e) {
				return arguments.length && (t = !!e), t
			}, this.$get = ["$parse", "$sceDelegate", function(i, e) {
				if (t && R < 8) throw Ni("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var r = Ne(ji);
				r.isEnabled = function() {
					return t
				}, r.trustAs = e.trustAs, r.getTrusted = e.getTrusted, r.valueOf = e.valueOf, t || (r.trustAs = r.getTrusted = function(e, t) {
					return t
				}, r.valueOf = x), r.parseAs = function(t, e) {
					var n = i(e);
					return n.literal && n.constant ? n : i(e, function(e) {
						return r.getTrusted(t, e)
					})
				};
				var o = r.parseAs,
					a = r.getTrusted,
					s = r.trustAs;
				return ce(ji, function(t, e) {
					var n = S(e);
					r[Ve("parse_as_" + n)] = function(e) {
						return o(t, e)
					}, r[Ve("get_trusted_" + n)] = function(e) {
						return a(t, e)
					}, r[Ve("trust_as_" + n)] = function(e) {
						return s(t, e)
					}
				}), r
			}]
		}

		function Ri() {
			this.$get = ["$window", "$document", function(e, t) {
				var n, i, r = {},
					o = !(e.chrome && e.chrome.app && e.chrome.app.runtime) && e.history && e.history.pushState,
					a = y((/android (\d+)/.exec(S((e.navigator || {}).userAgent)) || [])[1]),
					s = /Boxee/i.test((e.navigator || {}).userAgent),
					l = t[0] || {},
					u = /^(Moz|webkit|ms)(?=[A-Z])/,
					c = l.body && l.body.style,
					d = !1,
					f = !1;
				if (c) {
					for (var h in c)
						if (i = u.exec(h)) {
							n = (n = i[0])[0].toUpperCase() + n.substr(1);
							break
						} n || (n = "WebkitOpacity" in c && "webkit"), d = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !a || d && f || (d = pe(c.webkitTransition), f = pe(c.webkitAnimation))
				}
				return {
					history: !(!o || a < 4 || s),
					hasEvent: function(e) {
						if ("input" === e && R <= 11) return !1;
						if (fe(r[e])) {
							var t = l.createElement("div");
							r[e] = "on" + e in t
						}
						return r[e]
					},
					csp: I(),
					vendorPrefix: n,
					transitions: d,
					animations: f,
					android: a
				}
			}]
		}
		var zi = p("$compile");

		function Hi() {
			var l;
			this.httpOptions = function(e) {
				return e ? (l = e, this) : l
			}, this.$get = ["$templateCache", "$http", "$q", "$sce", function(i, r, o, a) {
				function s(t, n) {
					s.totalPendingRequests++, pe(t) && !fe(i.get(t)) || (t = a.getTrustedResourceUrl(t));
					var e = r.defaults && r.defaults.transformResponse;
					return me(e) ? e = e.filter(function(e) {
						return e !== Sn
					}) : e === Sn && (e = null), r.get(t, de({
						cache: i,
						transformResponse: e
					}, l)).finally(function() {
						s.totalPendingRequests--
					}).then(function(e) {
						return i.put(t, e.data), e.data
					}, function(e) {
						if (n) return o.reject(e);
						throw zi("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", t, e.status, e.statusText)
					})
				}
				return s.totalPendingRequests = 0, s
			}]
		}

		function Ui() {
			this.$get = ["$rootScope", "$browser", "$location", function(t, n, i) {
				return {
					findBindings: function(e, n, i) {
						var t = e.getElementsByClassName("ng-binding"),
							r = [];
						return ce(t, function(t) {
							var e = C.element(t).data("$binding");
							e && ce(e, function(e) {
								i ? new RegExp("(^|\\s)" + O(n) + "(\\s|\\||$)").test(e) && r.push(t) : -1 != e.indexOf(n) && r.push(t)
							})
						}), r
					},
					findModels: function(e, t, n) {
						for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
							var o = "[" + i[r] + "model" + (n ? "=" : "*=") + '"' + t + '"]',
								a = e.querySelectorAll(o);
							if (a.length) return a
						}
					},
					getLocation: function() {
						return i.url()
					},
					setLocation: function(e) {
						e !== i.url() && (i.url(e), t.$digest())
					},
					whenStable: function(e) {
						n.notifyWhenNoOutstandingRequests(e)
					}
				}
			}]
		}

		function qi() {
			this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(l, u, c, d, f) {
				var h = {};

				function e(e, t, n) {
					ge(e) || (n = t, t = e, e = U);
					var i, r = Se(arguments, 3),
						o = q(n) && !n,
						a = (o ? d : c).defer(),
						s = a.promise;
					return i = u.defer(function() {
						try {
							a.resolve(e.apply(null, r))
						} catch (e) {
							a.reject(e), f(e)
						} finally {
							delete h[s.$$timeoutId]
						}
						o || l.$apply()
					}, t), s.$$timeoutId = i, h[i] = a, s
				}
				return e.cancel = function(e) {
					return !!(e && e.$$timeoutId in h) && (h[e.$$timeoutId].reject("canceled"), delete h[e.$$timeoutId], u.defer.cancel(e.$$timeoutId))
				}, e
			}]
		}
		var Vi = L.document.createElement("a"),
			Bi = Wi(L.location.href);

		function Wi(e) {
			var t = e;
			return R && (Vi.setAttribute("href", t), t = Vi.href), Vi.setAttribute("href", t), {
				href: Vi.href,
				protocol: Vi.protocol ? Vi.protocol.replace(/:$/, "") : "",
				host: Vi.host,
				search: Vi.search ? Vi.search.replace(/^\?/, "") : "",
				hash: Vi.hash ? Vi.hash.replace(/^#/, "") : "",
				hostname: Vi.hostname,
				port: Vi.port,
				pathname: "/" === Vi.pathname.charAt(0) ? Vi.pathname : "/" + Vi.pathname
			}
		}

		function Yi(e) {
			var t = pe(e) ? Wi(e) : e;
			return t.protocol === Bi.protocol && t.host === Bi.host
		}

		function Gi() {
			this.$get = k(L)
		}

		function Xi(e) {
			var a = e[0] || {},
				s = {},
				l = "";

			function u(t) {
				try {
					return decodeURIComponent(t)
				} catch (e) {
					return t
				}
			}
			return function() {
				var e, t, n, i, r, o = a.cookie || "";
				if (o !== l)
					for (e = (l = o).split("; "), s = {}, n = 0; n < e.length; n++) 0 < (i = (t = e[n]).indexOf("=")) && (r = u(t.substring(0, i)), fe(s[r]) && (s[r] = u(t.substring(i + 1))));
				return s
			}
		}

		function Zi() {
			this.$get = Xi
		}

		function Ki(i) {
			var r = "Filter";

			function o(e, t) {
				if (he(e)) {
					var n = {};
					return ce(e, function(e, t) {
						n[t] = o(t, e)
					}), n
				}
				return i.factory(e + r, t)
			}
			this.register = o, this.$get = ["$injector", function(t) {
				return function(e) {
					return t.get(e + r)
				}
			}], o("currency", rr), o("date", gr), o("filter", Ji), o("json", vr), o("limitTo", wr), o("lowercase", yr), o("number", or), o("orderBy", xr), o("uppercase", br)
		}

		function Ji() {
			return function(e, t, n, i) {
				if (!N(e)) {
					if (null == e) return e;
					throw p("filter")("notarray", "Expected array but received: {0}", e)
				}
				var r, o, a, s, l, u, c;
				switch (i = i || "$", er(t)) {
					case "function":
						r = t;
						break;
					case "boolean":
					case "null":
					case "number":
					case "string":
						o = !0;
					case "object":
						s = n, l = i, u = o, c = he(a = t) && l in a, !0 === s ? s = xe : ge(s) || (s = function(e, t) {
							return !(fe(e) || (null === e || null === t ? e !== t : he(t) || he(e) && !b(e) || (e = S("" + e), t = S("" + t), -1 === e.indexOf(t))))
						}), r = function(e) {
							return c && !he(e) ? Qi(e, a[l], s, l, !1) : Qi(e, a, s, l, u)
						};
						break;
					default:
						return e
				}
				return Array.prototype.filter.call(e, r)
			}
		}

		function Qi(e, t, n, i, r, o) {
			var a = er(e),
				s = er(t);
			if ("string" === s && "!" === t.charAt(0)) return !Qi(e, t.substring(1), n, i, r);
			if (me(e)) return e.some(function(e) {
				return Qi(e, t, n, i, r)
			});
			switch (a) {
				case "object":
					var l;
					if (r) {
						for (l in e)
							if ("$" !== l.charAt(0) && Qi(e[l], t, n, i, !0)) return !0;
						return !o && Qi(e, t, n, i, !1)
					}
					if ("object" !== s) return n(e, t);
					for (l in t) {
						var u = t[l];
						if (!ge(u) && !fe(u)) {
							var c = l === i;
							if (!Qi(c ? e : e[l], u, n, i, c, c)) return !1
						}
					}
					return !0;
				case "function":
					return !1;
				default:
					return n(e, t)
			}
		}

		function er(e) {
			return null === e ? "null" : typeof e
		}
		Xi.$inject = ["$document"], Ki.$inject = ["$provide"];
		var tr = 22,
			nr = ".",
			ir = "0";

		function rr(e) {
			var i = e.NUMBER_FORMATS;
			return function(e, t, n) {
				return fe(t) && (t = i.CURRENCY_SYM), fe(n) && (n = i.PATTERNS[1].maxFrac), null == e ? e : ar(e, i.PATTERNS[1], i.GROUP_SEP, i.DECIMAL_SEP, n).replace(/\u00A4/g, t)
			}
		}

		function or(e) {
			var n = e.NUMBER_FORMATS;
			return function(e, t) {
				return null == e ? e : ar(e, n.PATTERNS[0], n.GROUP_SEP, n.DECIMAL_SEP, t)
			}
		}

		function ar(e, t, n, i, r) {
			if (!pe(e) && !$(e) || isNaN(e)) return "";
			var o, a = !isFinite(e),
				s = !1,
				l = Math.abs(e) + "",
				u = "";
			if (a) u = "∞";
			else {
				! function(e, t, n, i) {
					var r = e.d,
						o = r.length - e.i,
						a = (t = fe(t) ? Math.min(Math.max(n, o), i) : +t) + e.i,
						s = r[a];
					if (0 < a) {
						r.splice(Math.max(e.i, a));
						for (var l = a; l < r.length; l++) r[l] = 0
					} else {
						o = Math.max(0, o), e.i = 1, r.length = Math.max(1, a = t + 1), r[0] = 0;
						for (var u = 1; u < a; u++) r[u] = 0
					}
					if (5 <= s)
						if (a - 1 < 0) {
							for (var c = 0; a < c; c--) r.unshift(0), e.i++;
							r.unshift(1), e.i++
						} else r[a - 1]++;
					for (; o < Math.max(0, t); o++) r.push(0);
					var d = r.reduceRight(function(e, t, n, i) {
						return t += e, i[n] = t % 10, Math.floor(t / 10)
					}, 0);
					d && (r.unshift(d), e.i++)
				}(o = function(e) {
					var t, n, i, r, o, a = 0;
					for (-1 < (n = e.indexOf(nr)) && (e = e.replace(nr, "")), 0 < (i = e.search(/e/i)) ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), i = 0; e.charAt(i) == ir; i++);
					if (i == (o = e.length)) t = [0], n = 1;
					else {
						for (o--; e.charAt(o) == ir;) o--;
						for (n -= i, t = [], r = 0; i <= o; i++, r++) t[r] = +e.charAt(i)
					}
					return tr < n && (t = t.splice(0, tr - 1), a = n - 1, n = 1), {
						d: t,
						e: a,
						i: n
					}
				}(l), r, t.minFrac, t.maxFrac);
				var c = o.d,
					d = o.i,
					f = o.e,
					h = [];
				for (s = c.reduce(function(e, t) {
						return e && !t
					}, !0); d < 0;) c.unshift(0), d++;
				0 < d ? h = c.splice(d, c.length) : (h = c, c = [0]);
				var p = [];
				for (c.length >= t.lgSize && p.unshift(c.splice(-t.lgSize, c.length).join("")); c.length > t.gSize;) p.unshift(c.splice(-t.gSize, c.length).join(""));
				c.length && p.unshift(c.join("")), u = p.join(n), h.length && (u += i + h.join("")), f && (u += "e+" + f)
			}
			return e < 0 && !s ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
		}

		function sr(e, t, n, i) {
			var r = "";
			for ((e < 0 || i && e <= 0) && (i ? e = 1 - e : (e = -e, r = "-")), e = "" + e; e.length < t;) e = ir + e;
			return n && (e = e.substr(e.length - t)), r + e
		}

		function lr(n, i, r, o, a) {
			return r = r || 0,
				function(e) {
					var t = e["get" + n]();
					return (0 < r || -r < t) && (t += r), 0 === t && -12 == r && (t = 12), sr(t, i, o, a)
				}
		}

		function ur(i, r, o) {
			return function(e, t) {
				var n = e["get" + i]();
				return t[c((o ? "STANDALONE" : "") + (r ? "SHORT" : "") + i)][n]
			}
		}

		function cr(e) {
			var t = new Date(e, 0, 1).getDay();
			return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
		}

		function dr(r) {
			return function(e) {
				var t, n = cr(e.getFullYear()),
					i = (t = e, +new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay())) - +n);
				return sr(1 + Math.round(i / 6048e5), r)
			}
		}

		function fr(e, t) {
			return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
		}
		rr.$inject = ["$locale"];
		var hr = {
				yyyy: lr("FullYear", 4, 0, (or.$inject = ["$locale"], !1), !0),
				yy: lr("FullYear", 2, 0, !0, !0),
				y: lr("FullYear", 1, 0, !1, !0),
				MMMM: ur("Month"),
				MMM: ur("Month", !0),
				MM: lr("Month", 2, 1),
				M: lr("Month", 1, 1),
				LLLL: ur("Month", !1, !0),
				dd: lr("Date", 2),
				d: lr("Date", 1),
				HH: lr("Hours", 2),
				H: lr("Hours", 1),
				hh: lr("Hours", 2, -12),
				h: lr("Hours", 1, -12),
				mm: lr("Minutes", 2),
				m: lr("Minutes", 1),
				ss: lr("Seconds", 2),
				s: lr("Seconds", 1),
				sss: lr("Milliseconds", 3),
				EEEE: ur("Day"),
				EEE: ur("Day", !0),
				a: function(e, t) {
					return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
				},
				Z: function(e, t, n) {
					var i = -1 * n;
					return (0 <= i ? "+" : "") + (sr(Math[0 < i ? "floor" : "ceil"](i / 60), 2) + sr(Math.abs(i % 60), 2))
				},
				ww: dr(2),
				w: dr(1),
				G: fr,
				GG: fr,
				GGG: fr,
				GGGG: function(e, t) {
					return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
				}
			},
			pr = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
			mr = /^\-?\d+$/;

		function gr(l) {
			var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
			return function(t, e, n) {
				var i, r, o = "",
					a = [];
				if (e = e || "mediumDate", e = l.DATETIME_FORMATS[e] || e, pe(t) && (t = mr.test(t) ? y(t) : function(e) {
						var t;
						if (t = e.match(d)) {
							var n = new Date(0),
								i = 0,
								r = 0,
								o = t[8] ? n.setUTCFullYear : n.setFullYear,
								a = t[8] ? n.setUTCHours : n.setHours;
							t[9] && (i = y(t[9] + t[10]), r = y(t[9] + t[11])), o.call(n, y(t[1]), y(t[2]) - 1, y(t[3]));
							var s = y(t[4] || 0) - i,
								l = y(t[5] || 0) - r,
								u = y(t[6] || 0),
								c = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
							return a.call(n, s, l, u, c), n
						}
						return e
					}(t)), $(t) && (t = new Date(t)), !E(t) || !isFinite(t.getTime())) return t;
				for (; e;) e = (r = pr.exec(e)) ? (a = B(a, r, 1)).pop() : (a.push(e), null);
				var s = t.getTimezoneOffset();
				return n && (s = G(n, s), t = X(t, n, !0)), ce(a, function(e) {
					i = hr[e], o += i ? i(t, l.DATETIME_FORMATS, s) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				}), o
			}
		}

		function vr() {
			return function(e, t) {
				return fe(t) && (t = 2), W(e, t)
			}
		}
		gr.$inject = ["$locale"];
		var yr = k(S),
			br = k(c);

		function wr() {
			return function(e, t, n) {
				return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : y(t), isNaN(t) ? e : ($(e) && (e = e.toString()), N(e) ? (n = (n = !n || isNaN(n) ? 0 : y(n)) < 0 ? Math.max(0, e.length + n) : n, 0 <= t ? $r(e, n, n + t) : 0 === n ? $r(e, t, e.length) : $r(e, Math.max(0, n + t), n)) : e)
			}
		}

		function $r(e, t, n) {
			return pe(e) ? e.slice(t, n) : s.call(e, t, n)
		}

		function xr(l) {
			return function(e, t, n, i) {
				if (null == e) return e;
				if (!N(e)) throw p("orderBy")("notarray", "Expected array but received: {0}", e);
				me(t) || (t = [t]), 0 === t.length && (t = ["+"]);
				var s = t.map(function(e) {
						var t = 1,
							n = x;
						if (ge(e)) n = e;
						else if (pe(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (t = "-" == e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (n = l(e)).constant)) {
							var i = n();
							n = function(e) {
								return e[i]
							}
						}
						return {
							get: n,
							descending: t
						}
					}),
					o = n ? -1 : 1,
					a = ge(i) ? i : c,
					r = Array.prototype.map.call(e, function(o, a) {
						return {
							value: o,
							tieBreaker: {
								value: a,
								type: "number",
								index: a
							},
							predicateValues: s.map(function(e) {
								return t = e.get(o), n = a, r = typeof t, null === t ? (r = "string", t = "null") : "object" === r && (ge((i = t).valueOf) && u(i = i.valueOf()) || b(i) && u(i = i.toString()), t = i), {
									value: t,
									type: r,
									index: n
								};
								var t, n, i, r
							})
						}
					});
				return r.sort(function(e, t) {
					for (var n = 0, i = s.length; n < i; n++) {
						var r = a(e.predicateValues[n], t.predicateValues[n]);
						if (r) return r * s[n].descending * o
					}
					return a(e.tieBreaker, t.tieBreaker) * o
				}), r.map(function(e) {
					return e.value
				})
			};

			function u(e) {
				switch (typeof e) {
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function c(e, t) {
				var n = 0,
					i = e.type,
					r = t.type;
				if (i === r) {
					var o = e.value,
						a = t.value;
					"string" === i ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === i && (he(o) && (o = e.index), he(a) && (a = t.index)), o !== a && (n = o < a ? -1 : 1)
				} else n = i < r ? -1 : 1;
				return n
			}
		}

		function Sr(e) {
			return ge(e) && (e = {
				link: e
			}), e.restrict = e.restrict || "AC", k(e)
		}
		xr.$inject = ["$parse"];
		var Er = k({
				restrict: "E",
				compile: function(e, t) {
					if (!t.href && !t.xlinkHref) return function(e, t) {
						if ("a" === t[0].nodeName.toLowerCase()) {
							var n = "[object SVGAnimatedString]" === z.call(t.prop("href")) ? "xlink:href" : "href";
							t.on("click", function(e) {
								t.attr(n) || e.preventDefault()
							})
						}
					}
				}
			}),
			Cr = {};
		ce(vt, function(e, i) {
			if ("multiple" != e) {
				var r = nn("ng-" + i),
					t = o;
				"checked" === e && (t = function(e, t, n) {
					n.ngModel !== n[r] && o(e, 0, n)
				}), Cr[r] = function() {
					return {
						restrict: "A",
						priority: 100,
						link: t
					}
				}
			}

			function o(e, t, n) {
				e.$watch(n[r], function(e) {
					n.$set(i, !!e)
				})
			}
		}), ce(bt, function(e, r) {
			Cr[r] = function() {
				return {
					priority: 100,
					link: function(e, t, n) {
						if ("ngPattern" === r && "/" == n.ngPattern.charAt(0)) {
							var i = n.ngPattern.match(o);
							if (i) return void n.$set("ngPattern", new RegExp(i[1], i[2]))
						}
						e.$watch(n[r], function(e) {
							n.$set(r, e)
						})
					}
				}
			}
		}), ce(["src", "srcset", "href"], function(o) {
			var a = nn("ng-" + o);
			Cr[a] = function() {
				return {
					priority: 99,
					link: function(e, t, n) {
						var i = o,
							r = o;
						"href" === o && "[object SVGAnimatedString]" === z.call(t.prop("href")) && (r = "xlinkHref", n.$attr[r] = "xlink:href", i = null), n.$observe(a, function(e) {
							e ? (n.$set(r, e), R && i && t.prop(i, n[r])) : "href" === o && n.$set(r, null)
						})
					}
				}
			}
		});
		var kr = {
				$addControl: U,
				$$renameControl: function(e, t) {
					e.$name = t
				},
				$removeControl: U,
				$setValidity: U,
				$setDirty: U,
				$setPristine: U,
				$setSubmitted: U
			},
			Tr = "ng-submitted";

		function _r(e, t, n, i, r) {
			var o = this,
				a = [];
			o.$error = {}, o.$$success = {}, o.$pending = void 0, o.$name = r(t.name || t.ngForm || "")(n), o.$dirty = !1, o.$pristine = !0, o.$valid = !0, o.$invalid = !1, o.$submitted = !1, o.$$parentForm = kr, o.$rollbackViewValue = function() {
				ce(a, function(e) {
					e.$rollbackViewValue()
				})
			}, o.$commitViewValue = function() {
				ce(a, function(e) {
					e.$commitViewValue()
				})
			}, o.$addControl = function(e) {
				ae(e.$name, "input"), a.push(e), e.$name && (o[e.$name] = e), e.$$parentForm = o
			}, o.$$renameControl = function(e, t) {
				var n = e.$name;
				o[n] === e && delete o[n], (o[t] = e).$name = t
			}, o.$removeControl = function(n) {
				n.$name && o[n.$name] === n && delete o[n.$name], ce(o.$pending, function(e, t) {
					o.$setValidity(t, null, n)
				}), ce(o.$error, function(e, t) {
					o.$setValidity(t, null, n)
				}), ce(o.$$success, function(e, t) {
					o.$setValidity(t, null, n)
				}), $e(a, n), n.$$parentForm = kr
			}, Mo({
				ctrl: this,
				$element: e,
				set: function(e, t, n) {
					var i = e[t];
					i ? -1 === i.indexOf(n) && i.push(n) : e[t] = [n]
				},
				unset: function(e, t, n) {
					var i = e[t];
					i && ($e(i, n), 0 === i.length && delete e[t])
				},
				$animate: i
			}), o.$setDirty = function() {
				i.removeClass(e, bo), i.addClass(e, wo), o.$dirty = !0, o.$pristine = !1, o.$$parentForm.$setDirty()
			}, o.$setPristine = function() {
				i.setClass(e, bo, wo + " " + Tr), o.$dirty = !1, o.$pristine = !0, o.$submitted = !1, ce(a, function(e) {
					e.$setPristine()
				})
			}, o.$setUntouched = function() {
				ce(a, function(e) {
					e.$setUntouched()
				})
			}, o.$setSubmitted = function() {
				i.addClass(e, Tr), o.$submitted = !0, o.$$parentForm.$setSubmitted()
			}
		}
		_r.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
		var Ar = function(n) {
				return ["$timeout", "$parse", function(l, t) {
					return {
						name: "form",
						restrict: n ? "EAC" : "E",
						require: ["form", "^^?form"],
						controller: _r,
						compile: function(e, t) {
							e.addClass(bo).addClass(vo);
							var s = t.name ? "name" : !(!n || !t.ngForm) && "ngForm";
							return {
								pre: function(t, e, n, i) {
									var r = i[0];
									if (!("action" in n)) {
										var o = function(e) {
											t.$apply(function() {
												r.$commitViewValue(), r.$setSubmitted()
											}), e.preventDefault()
										};
										Fe(e[0], "submit", o), e.on("$destroy", function() {
											l(function() {
												Re(e[0], "submit", o)
											}, 0, !1)
										})
									}(i[1] || r.$$parentForm).$addControl(r);
									var a = s ? u(r.$name) : U;
									s && (a(t, r), n.$observe(s, function(e) {
										r.$name !== e && (a(t, void 0), r.$$parentForm.$$renameControl(r, e), (a = u(r.$name))(t, r))
									})), e.on("$destroy", function() {
										r.$$parentForm.$removeControl(r), a(t, void 0), de(r, kr)
									})
								}
							}
						}
					};

					function u(e) {
						return "" === e ? t('this[""]').assign : t(e).assign || U
					}
				}]
			},
			Pr = Ar(),
			Mr = Ar(!0),
			Or = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
			Dr = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
			Nr = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
			jr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
			Ir = /^(\d{4,})-(\d{2})-(\d{2})$/,
			Lr = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			Fr = /^(\d{4,})-W(\d\d)$/,
			Rr = /^(\d{4,})-(\d\d)$/,
			zr = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			Hr = "keydown wheel mousedown",
			Ur = _e();
		ce("date,datetime-local,month,time,week".split(","), function(e) {
			Ur[e] = !0
		});
		var qr = {
			text: function(e, t, n, i, r, o) {
				Br(e, t, n, i, r, o), Vr(i)
			},
			date: Yr("date", Ir, Wr(Ir, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": Yr("datetimelocal", Lr, Wr(Lr, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
			time: Yr("time", zr, Wr(zr, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: Yr("week", Fr, function(e, t) {
				if (E(e)) return e;
				if (pe(e)) {
					Fr.lastIndex = 0;
					var n = Fr.exec(e);
					if (n) {
						var i = +n[1],
							r = +n[2],
							o = 0,
							a = 0,
							s = 0,
							l = 0,
							u = cr(i),
							c = 7 * (r - 1);
						return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), l = t.getMilliseconds()), new Date(i, 0, u.getDate() + c, o, a, s, l)
					}
				}
				return NaN
			}, "yyyy-Www"),
			month: Yr("month", Rr, Wr(Rr, ["yyyy", "MM"]), "yyyy-MM"),
			number: function(e, t, n, i, r, o) {
				var a, s;
				Gr(e, t, n, i), Br(e, t, n, i, r, o), i.$$parserName = "number", i.$parsers.push(function(e) {
					return i.$isEmpty(e) ? null : jr.test(e) ? parseFloat(e) : void 0
				}), i.$formatters.push(function(e) {
					if (!i.$isEmpty(e)) {
						if (!$(e)) throw ko("numfmt", "Expected `{0}` to be a number", e);
						e = e.toString()
					}
					return e
				}), (q(n.min) || n.ngMin) && (i.$validators.min = function(e) {
					return i.$isEmpty(e) || fe(a) || a <= e
				}, n.$observe("min", function(e) {
					q(e) && !$(e) && (e = parseFloat(e)), a = $(e) && !isNaN(e) ? e : void 0, i.$validate()
				})), (q(n.max) || n.ngMax) && (i.$validators.max = function(e) {
					return i.$isEmpty(e) || fe(s) || e <= s
				}, n.$observe("max", function(e) {
					q(e) && !$(e) && (e = parseFloat(e)), s = $(e) && !isNaN(e) ? e : void 0, i.$validate()
				}))
			},
			url: function(e, t, n, i, r, o) {
				Br(e, t, n, i, r, o), Vr(i), i.$$parserName = "url", i.$validators.url = function(e, t) {
					var n = e || t;
					return i.$isEmpty(n) || Dr.test(n)
				}
			},
			email: function(e, t, n, i, r, o) {
				Br(e, t, n, i, r, o), Vr(i), i.$$parserName = "email", i.$validators.email = function(e, t) {
					var n = e || t;
					return i.$isEmpty(n) || Nr.test(n)
				}
			},
			radio: function(e, t, n, i) {
				fe(n.name) && t.attr("name", _()), t.on("click", function(e) {
					t[0].checked && i.$setViewValue(n.value, e && e.type)
				}), i.$render = function() {
					var e = n.value;
					t[0].checked = e == i.$viewValue
				}, n.$observe("value", i.$render)
			},
			checkbox: function(e, t, n, i, r, o, a, s) {
				var l = Xr(s, e, "ngTrueValue", n.ngTrueValue, !0),
					u = Xr(s, e, "ngFalseValue", n.ngFalseValue, !1);
				t.on("click", function(e) {
					i.$setViewValue(t[0].checked, e && e.type)
				}), i.$render = function() {
					t[0].checked = i.$viewValue
				}, i.$isEmpty = function(e) {
					return !1 === e
				}, i.$formatters.push(function(e) {
					return xe(e, l)
				}), i.$parsers.push(function(e) {
					return e ? l : u
				})
			},
			hidden: U,
			button: U,
			submit: U,
			reset: U,
			file: U
		};

		function Vr(t) {
			t.$formatters.push(function(e) {
				return t.$isEmpty(e) ? e : e.toString()
			})
		}

		function Br(e, i, r, o, t, a) {
			var s, l = S(i[0].type);
			if (!t.android) {
				var u = !1;
				i.on("compositionstart", function() {
					u = !0
				}), i.on("compositionend", function() {
					u = !1, c()
				})
			}
			var c = function(e) {
				if (s && (a.defer.cancel(s), s = null), !u) {
					var t = i.val(),
						n = e && e.type;
					"password" === l || r.ngTrim && "false" === r.ngTrim || (t = be(t)), (o.$viewValue !== t || "" === t && o.$$hasNativeValidators) && o.$setViewValue(t, n)
				}
			};
			if (t.hasEvent("input")) i.on("input", c);
			else {
				var n = function(e, t, n) {
					s || (s = a.defer(function() {
						s = null, t && t.value === n || c(e)
					}))
				};
				i.on("keydown", function(e) {
					var t = e.keyCode;
					91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || n(e, this, this.value)
				}), t.hasEvent("paste") && i.on("paste cut", n)
			}
			i.on("change", c), Ur[l] && o.$$hasNativeValidators && l === r.type && i.on(Hr, function(e) {
				if (!s) {
					var t = this[d],
						n = t.badInput,
						i = t.typeMismatch;
					s = a.defer(function() {
						s = null, t.badInput === n && t.typeMismatch === i || c(e)
					})
				}
			}), o.$render = function() {
				var e = o.$isEmpty(o.$viewValue) ? "" : o.$viewValue;
				i.val() !== e && i.val(e)
			}
		}

		function Wr(r, o) {
			return function(e, t) {
				var n, i;
				if (E(e)) return e;
				if (pe(e)) {
					if ('"' == e.charAt(0) && '"' == e.charAt(e.length - 1) && (e = e.substring(1, e.length - 1)), Or.test(e)) return new Date(e);
					if (r.lastIndex = 0, n = r.exec(e)) return n.shift(), i = t ? {
						yyyy: t.getFullYear(),
						MM: t.getMonth() + 1,
						dd: t.getDate(),
						HH: t.getHours(),
						mm: t.getMinutes(),
						ss: t.getSeconds(),
						sss: t.getMilliseconds() / 1e3
					} : {
						yyyy: 1970,
						MM: 1,
						dd: 1,
						HH: 0,
						mm: 0,
						ss: 0,
						sss: 0
					}, ce(n, function(e, t) {
						t < o.length && (i[o[t]] = +e)
					}), new Date(i.yyyy, i.MM - 1, i.dd, i.HH, i.mm, i.ss || 0, 1e3 * i.sss || 0)
				}
				return NaN
			}
		}

		function Yr(h, p, m, g) {
			return function(e, t, n, i, r, o, a) {
				Gr(e, t, n, i), Br(0, t, n, i, r, o);
				var s, l, u, c = i && i.$options && i.$options.timezone;

				function d(e) {
					return e && !(e.getTime && e.getTime() != e.getTime())
				}

				function f(e) {
					return q(e) && !E(e) ? m(e) || void 0 : e
				}
				i.$$parserName = h, i.$parsers.push(function(e) {
					if (i.$isEmpty(e)) return null;
					if (p.test(e)) {
						var t = m(e, s);
						return c && (t = X(t, c)), t
					}
				}), i.$formatters.push(function(e) {
					if (e && !E(e)) throw ko("datefmt", "Expected `{0}` to be a date", e);
					return d(e) ? ((s = e) && c && (s = X(s, c, !0)), a("date")(e, g, c)) : (s = null, "")
				}), (q(n.min) || n.ngMin) && (i.$validators.min = function(e) {
					return !d(e) || fe(l) || m(e) >= l
				}, n.$observe("min", function(e) {
					l = f(e), i.$validate()
				})), (q(n.max) || n.ngMax) && (i.$validators.max = function(e) {
					return !d(e) || fe(u) || m(e) <= u
				}, n.$observe("max", function(e) {
					u = f(e), i.$validate()
				}))
			}
		}

		function Gr(e, n, t, i) {
			var r = n[0];
			(i.$$hasNativeValidators = he(r.validity)) && i.$parsers.push(function(e) {
				var t = n.prop(d) || {};
				return t.badInput || t.typeMismatch ? void 0 : e
			})
		}

		function Xr(e, t, n, i, r) {
			var o;
			if (q(i)) {
				if (!(o = e(i)).constant) throw ko("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
				return o(t)
			}
			return r
		}
		var Zr = ["$browser", "$sniffer", "$filter", "$parse", function(r, o, a, s) {
				return {
					restrict: "E",
					require: ["?ngModel"],
					link: {
						pre: function(e, t, n, i) {
							i[0] && (qr[S(n.type)] || qr.text)(e, t, n, i[0], o, r, a, s)
						}
					}
				}
			}],
			Kr = /^(true|false|\d+)$/,
			Jr = function() {
				return {
					restrict: "A",
					priority: 100,
					compile: function(e, t) {
						return Kr.test(t.ngValue) ? function(e, t, n) {
							n.$set("value", e.$eval(n.ngValue))
						} : function(e, t, n) {
							e.$watch(n.ngValue, function(e) {
								n.$set("value", e)
							})
						}
					}
				}
			},
			Qr = ["$compile", function(i) {
				return {
					restrict: "AC",
					compile: function(e) {
						return i.$$addBindingClass(e),
							function(e, t, n) {
								i.$$addBindingInfo(t, n.ngBind), t = t[0], e.$watch(n.ngBind, function(e) {
									t.textContent = fe(e) ? "" : e
								})
							}
					}
				}
			}],
			eo = ["$interpolate", "$compile", function(r, o) {
				return {
					compile: function(e) {
						return o.$$addBindingClass(e),
							function(e, t, n) {
								var i = r(t.attr(n.$attr.ngBindTemplate));
								o.$$addBindingInfo(t, i.expressions), t = t[0], n.$observe("ngBindTemplate", function(e) {
									t.textContent = fe(e) ? "" : e
								})
							}
					}
				}
			}],
			to = ["$sce", "$parse", "$compile", function(o, n, a) {
				return {
					restrict: "A",
					compile: function(e, t) {
						var i = n(t.ngBindHtml),
							r = n(t.ngBindHtml, function(e) {
								return o.valueOf(e)
							});
						return a.$$addBindingClass(e),
							function(t, n, e) {
								a.$$addBindingInfo(n, e.ngBindHtml), t.$watch(r, function() {
									var e = i(t);
									n.html(o.getTrustedHtml(e) || "")
								})
							}
					}
				}
			}],
			no = k({
				restrict: "A",
				require: "ngModel",
				link: function(e, t, n, i) {
					i.$viewChangeListeners.push(function() {
						e.$eval(n.ngChange)
					})
				}
			});

		function io(p, m) {
			return p = "ngClass" + p, ["$animate", function(d) {
				return {
					restrict: "AC",
					link: function(a, s, o) {
						var l;

						function u(e) {
							var t = c(e, 1);
							o.$addClass(t)
						}

						function c(e, t) {
							var n = s.data("$classCounts") || _e(),
								i = [];
							return ce(e, function(e) {
								(0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && i.push(e))
							}), s.data("$classCounts", n), i.join(" ")
						}

						function t(e) {
							if (!0 === m || (1 & a.$index) === m) {
								var t = h(e || []);
								l ? xe(e, l) || (r = f(i = t, n = h(l)), o = f(n, i), r = c(r, 1), o = c(o, -1), r && r.length && d.addClass(s, r), o && o.length && d.removeClass(s, o)) : u(t)
							}
							var n, i, r, o;
							l = me(e) ? e.map(function(e) {
								return Ne(e)
							}) : Ne(e)
						}
						a.$watch(o[p], t, !0), o.$observe("class", function(e) {
							t(a.$eval(o[p]))
						}), "ngClass" !== p && a.$watch("$index", function(e, t) {
							var n, i = 1 & e;
							if (i !== (1 & t)) {
								var r = h(a.$eval(o[p]));
								i === m ? u(r) : (n = c(r, -1), o.$removeClass(n))
							}
						})
					}
				};

				function f(e, t) {
					var n = [];
					e: for (var i = 0; i < e.length; i++) {
						for (var r = e[i], o = 0; o < t.length; o++)
							if (r == t[o]) continue e;
						n.push(r)
					}
					return n
				}

				function h(e) {
					var n = [];
					return me(e) ? (ce(e, function(e) {
						n = n.concat(h(e))
					}), n) : pe(e) ? e.split(" ") : he(e) ? (ce(e, function(e, t) {
						e && (n = n.concat(t.split(" ")))
					}), n) : e
				}
			}]
		}
		var ro = io("", !0),
			oo = io("Odd", 0),
			ao = io("Even", 1),
			so = Sr({
				compile: function(e, t) {
					t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
				}
			}),
			lo = [function() {
				return {
					restrict: "A",
					scope: !0,
					controller: "@",
					priority: 500
				}
			}],
			uo = {},
			co = {
				blur: !0,
				focus: !0
			};
		ce("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(o) {
			var a = nn("ng-" + o);
			uo[a] = ["$parse", "$rootScope", function(n, r) {
				return {
					restrict: "A",
					compile: function(e, t) {
						var i = n(t[a], null, !0);
						return function(n, e) {
							e.on(o, function(e) {
								var t = function() {
									i(n, {
										$event: e
									})
								};
								co[o] && r.$$phase ? n.$evalAsync(t) : n.$apply(t)
							})
						}
					}
				}
			}]
		});
		var fo = ["$animate", "$compile", function(l, u) {
				return {
					multiElement: !0,
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function(e, n, i, t, r) {
						var o, a, s;
						e.$watch(i.ngIf, function(e) {
							e ? a || r(function(e, t) {
								a = t, e[e.length++] = u.$$createComment("end ngIf", i.ngIf), o = {
									clone: e
								}, l.enter(e, n.parent(), n)
							}) : (s && (s.remove(), s = null), a && (a.$destroy(), a = null), o && (s = le(o.clone), l.leave(s).then(function() {
								s = null
							}), o = null))
						})
					}
				}
			}],
			ho = ["$templateRequest", "$anchorScroll", "$animate", function(g, v, y) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: C.noop,
					compile: function(e, t) {
						var n = t.ngInclude || t.src,
							p = t.onload || "",
							m = t.autoscroll;
						return function(a, s, e, l, u) {
							var c, t, d, f = 0,
								h = function() {
									t && (t.remove(), t = null), c && (c.$destroy(), c = null), d && (y.leave(d).then(function() {
										t = null
									}), t = d, d = null)
								};
							a.$watch(n, function(i) {
								var r = function() {
										!q(m) || m && !a.$eval(m) || v()
									},
									o = ++f;
								i ? (g(i, !0).then(function(e) {
									if (!a.$$destroyed && o === f) {
										var t = a.$new();
										l.template = e;
										var n = u(t, function(e) {
											h(), y.enter(e, null, s).then(r)
										});
										d = n, (c = t).$emit("$includeContentLoaded", i), a.$eval(p)
									}
								}, function() {
									a.$$destroyed || o === f && (h(), a.$emit("$includeContentError", i))
								}), a.$emit("$includeContentRequested", i)) : (h(), l.template = null)
							})
						}
					}
				}
			}],
			po = ["$compile", function(r) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function(e, t, n, i) {
						if (z.call(t[0]).match(/SVG/)) return t.empty(), void r(Je(i.template, L.document).childNodes)(e, function(e) {
							t.append(e)
						}, {
							futureParentElement: t
						});
						t.html(i.template), r(t.contents())(e)
					}
				}
			}],
			mo = Sr({
				priority: 450,
				compile: function() {
					return {
						pre: function(e, t, n) {
							e.$eval(n.ngInit)
						}
					}
				}
			}),
			go = function() {
				return {
					restrict: "A",
					priority: 100,
					require: "ngModel",
					link: function(e, t, n, i) {
						var r = t.attr(n.$attr.ngList) || ", ",
							o = "false" !== n.ngTrim,
							a = o ? be(r) : r;
						i.$parsers.push(function(e) {
							if (!fe(e)) {
								var t = [];
								return e && ce(e.split(a), function(e) {
									e && t.push(o ? be(e) : e)
								}), t
							}
						}), i.$formatters.push(function(e) {
							if (me(e)) return e.join(r)
						}), i.$isEmpty = function(e) {
							return !e || !e.length
						}
					}
				}
			},
			vo = "ng-valid",
			yo = "ng-invalid",
			bo = "ng-pristine",
			wo = "ng-dirty",
			$o = "ng-untouched",
			xo = "ng-touched",
			So = "ng-pending",
			Eo = "ng-empty",
			Co = "ng-not-empty",
			ko = p("ngModel"),
			To = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(o, t, r, a, s, n, l, u, c, e) {
				this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = e(r.name || "", !1)(o), this.$$parentForm = kr;
				var d, f = s(r.ngModel),
					h = f.assign,
					p = f,
					m = h,
					g = null,
					v = this;
				this.$$setOptions = function(e) {
					if ((v.$options = e) && e.getterSetter) {
						var n = s(r.ngModel + "()"),
							i = s(r.ngModel + "($$$p)");
						p = function(e) {
							var t = f(e);
							return ge(t) && (t = n(e)), t
						}, m = function(e, t) {
							ge(f(e)) ? i(e, {
								$$$p: t
							}) : h(e, t)
						}
					} else if (!f.assign) throw ko("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, Ce(a))
				}, this.$render = U, this.$isEmpty = function(e) {
					return fe(e) || "" === e || null === e || e != e
				}, this.$$updateEmptyClasses = function(e) {
					v.$isEmpty(e) ? (n.removeClass(a, Co), n.addClass(a, Eo)) : (n.removeClass(a, Eo), n.addClass(a, Co))
				};
				var y = 0;
				Mo({
					ctrl: this,
					$element: a,
					set: function(e, t) {
						e[t] = !0
					},
					unset: function(e, t) {
						delete e[t]
					},
					$animate: n
				}), this.$setPristine = function() {
					v.$dirty = !1, v.$pristine = !0, n.removeClass(a, wo), n.addClass(a, bo)
				}, this.$setDirty = function() {
					v.$dirty = !0, v.$pristine = !1, n.removeClass(a, bo), n.addClass(a, wo), v.$$parentForm.$setDirty()
				}, this.$setUntouched = function() {
					v.$touched = !1, v.$untouched = !0, n.setClass(a, $o, xo)
				}, this.$setTouched = function() {
					v.$touched = !0, v.$untouched = !1, n.setClass(a, xo, $o)
				}, this.$rollbackViewValue = function() {
					l.cancel(g), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
				}, this.$validate = function() {
					if (!$(v.$modelValue) || !isNaN(v.$modelValue)) {
						var e = v.$$lastCommittedViewValue,
							t = v.$$rawModelValue,
							n = v.$valid,
							i = v.$modelValue,
							r = v.$options && v.$options.allowInvalid;
						v.$$runValidators(t, e, function(e) {
							r || n === e || (v.$modelValue = e ? t : void 0, v.$modelValue !== i && v.$$writeModelToScope())
						})
					}
				}, this.$$runValidators = function(i, r, t) {
					var o, a, s, e, n = ++y;

					function l(e, t) {
						n === y && v.$setValidity(e, t)
					}

					function u(e) {
						n === y && t(e)
					}
					e = v.$$parserName || "parse", (fe(d) ? (l(e, null), 1) : (d || (ce(v.$validators, function(e, t) {
						l(t, null)
					}), ce(v.$asyncValidators, function(e, t) {
						l(t, null)
					})), l(e, d), d)) ? (o = !0, ce(v.$validators, function(e, t) {
						var n = e(i, r);
						o = o && n, l(t, n)
					}), o || (ce(v.$asyncValidators, function(e, t) {
						l(t, null)
					}), 0) ? (a = [], s = !0, ce(v.$asyncValidators, function(e, t) {
						var n = e(i, r);
						if (!P(n)) throw ko("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", n);
						l(t, void 0), a.push(n.then(function() {
							l(t, !0)
						}, function() {
							l(t, s = !1)
						}))
					}), a.length ? c.all(a).then(function() {
						u(s)
					}, U) : u(!0)) : u(!1)) : u(!1)
				}, this.$commitViewValue = function() {
					var e = v.$viewValue;
					l.cancel(g), (v.$$lastCommittedViewValue !== e || "" === e && v.$$hasNativeValidators) && (v.$$updateEmptyClasses(e), v.$$lastCommittedViewValue = e, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
				}, this.$$parseAndValidate = function() {
					var t = v.$$lastCommittedViewValue;
					if (d = !fe(t) || void 0)
						for (var e = 0; e < v.$parsers.length; e++)
							if (fe(t = v.$parsers[e](t))) {
								d = !1;
								break
							} $(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = p(o));
					var n = v.$modelValue,
						i = v.$options && v.$options.allowInvalid;

					function r() {
						v.$modelValue !== n && v.$$writeModelToScope()
					}
					v.$$rawModelValue = t, i && (v.$modelValue = t, r()), v.$$runValidators(t, v.$$lastCommittedViewValue, function(e) {
						i || (v.$modelValue = e ? t : void 0, r())
					})
				}, this.$$writeModelToScope = function() {
					m(o, v.$modelValue), ce(v.$viewChangeListeners, function(e) {
						try {
							e()
						} catch (e) {
							t(e)
						}
					})
				}, this.$setViewValue = function(e, t) {
					v.$viewValue = e, v.$options && !v.$options.updateOnDefault || v.$$debounceViewValueCommit(t)
				}, this.$$debounceViewValueCommit = function(e) {
					var t, n = 0,
						i = v.$options;
					i && q(i.debounce) && ($(t = i.debounce) ? n = t : $(t[e]) ? n = t[e] : $(t.default) && (n = t.default)), l.cancel(g), n ? g = l(function() {
						v.$commitViewValue()
					}, n) : u.$$phase ? v.$commitViewValue() : o.$apply(function() {
						v.$commitViewValue()
					})
				}, o.$watch(function() {
					var e = p(o);
					if (e !== v.$modelValue && (v.$modelValue == v.$modelValue || e == e)) {
						v.$modelValue = v.$$rawModelValue = e, d = void 0;
						for (var t = v.$formatters, n = t.length, i = e; n--;) i = t[n](i);
						v.$viewValue !== i && (v.$$updateEmptyClasses(i), v.$viewValue = v.$$lastCommittedViewValue = i, v.$render(), v.$$runValidators(e, i, U))
					}
					return e
				})
			}],
			_o = ["$rootScope", function(o) {
				return {
					restrict: "A",
					require: ["ngModel", "^?form", "^?ngModelOptions"],
					controller: To,
					priority: 1,
					compile: function(e) {
						return e.addClass(bo).addClass($o).addClass(vo), {
							pre: function(e, t, n, i) {
								var r = i[0],
									o = i[1] || r.$$parentForm;
								r.$$setOptions(i[2] && i[2].$options), o.$addControl(r), n.$observe("name", function(e) {
									r.$name !== e && r.$$parentForm.$$renameControl(r, e)
								}), e.$on("$destroy", function() {
									r.$$parentForm.$removeControl(r)
								})
							},
							post: function(e, t, n, i) {
								var r = i[0];
								r.$options && r.$options.updateOn && t.on(r.$options.updateOn, function(e) {
									r.$$debounceViewValueCommit(e && e.type)
								}), t.on("blur", function() {
									r.$touched || (o.$$phase ? e.$evalAsync(r.$setTouched) : e.$apply(r.$setTouched))
								})
							}
						}
					}
				}
			}],
			Ao = /(\s+|^)default(\s+|$)/,
			Po = function() {
				return {
					restrict: "A",
					controller: ["$scope", "$attrs", function(e, t) {
						var n = this;
						this.$options = j(e.$eval(t.ngModelOptions)), q(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = be(this.$options.updateOn.replace(Ao, function() {
							return n.$options.updateOnDefault = !0, " "
						}))) : this.$options.updateOnDefault = !0
					}]
				}
			};

		function Mo(e) {
			var u = e.ctrl,
				n = e.$element,
				i = {},
				c = e.set,
				d = e.unset,
				r = e.$animate;

			function f(e, t) {
				t && !i[e] ? (r.addClass(n, e), i[e] = !0) : !t && i[e] && (r.removeClass(n, e), i[e] = !1)
			}

			function h(e, t) {
				e = e ? "-" + ke(e, "-") : "", f(vo + e, !0 === t), f(yo + e, !1 === t)
			}
			i[yo] = !(i[vo] = n.hasClass(vo)), u.$setValidity = function(e, t, n) {
				var i, r, o, a, s, l;
				fe(t) ? (a = e, s = n, u["$pending"] || (u.$pending = {}), c(u.$pending, a, s)) : (r = e, o = n, u[i = "$pending"] && d(u[i], r, o), Oo(u[i]) && (u[i] = void 0)), ye(t) ? t ? (d(u.$error, e, n), c(u.$$success, e, n)) : (c(u.$error, e, n), d(u.$$success, e, n)) : (d(u.$error, e, n), d(u.$$success, e, n)), u.$pending ? (f(So, !0), u.$valid = u.$invalid = void 0, h("", null)) : (f(So, !1), u.$valid = Oo(u.$error), u.$invalid = !u.$valid, h("", u.$valid)), h(e, l = u.$pending && u.$pending[e] ? void 0 : !u.$error[e] && (!!u.$$success[e] || null)), u.$$parentForm.$setValidity(e, l, u)
			}
		}

		function Oo(e) {
			if (e)
				for (var t in e)
					if (e.hasOwnProperty(t)) return !1;
			return !0
		}
		var Do = Sr({
				terminal: !0,
				priority: 1e3
			}),
			No = p("ngOptions"),
			jo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
			Io = ["$compile", "$document", "$parse", function(w, $, E) {
				var x = L.document.createElement("option"),
					S = L.document.createElement("optgroup");
				return {
					restrict: "A",
					terminal: !0,
					require: ["select", "ngModel"],
					link: {
						pre: function(e, t, n, i) {
							i[0].registerOption = U
						},
						post: function(e, o, t, n) {
							for (var a, s = n[0], l = n[1], u = t.multiple, i = 0, r = o.children(), c = r.length; i < c; i++)
								if ("" === r[i].value) {
									a = r.eq(i);
									break
								} var d, f = !!a,
								h = ue(x.cloneNode(!1));
							h.val("?");
							var p = function(e, t, f) {
									var d = e.match(jo);
									if (!d) throw No("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Ce(t));
									var n = d[5] || d[7],
										i = d[6],
										r = / as /.test(d[0]) && d[1],
										h = d[9],
										o = E(d[2] ? d[1] : n),
										p = r && E(r) || o,
										a = h && E(h),
										m = h ? function(e, t) {
											return a(f, t)
										} : function(e) {
											return Et(e)
										},
										g = function(e, t) {
											return m(e, $(e, t))
										},
										v = E(d[2] || d[1]),
										y = E(d[3] || ""),
										b = E(d[4] || ""),
										w = E(d[8]),
										s = {},
										$ = i ? function(e, t) {
											return s[i] = t, s[n] = e, s
										} : function(e) {
											return s[n] = e, s
										};

									function x(e, t, n, i, r) {
										this.selectValue = e, this.viewValue = t, this.label = n, this.group = i, this.disabled = r
									}

									function S(e) {
										var t;
										if (!i && N(e)) t = e;
										else
											for (var n in t = [], e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
										return t
									}
									return {
										trackBy: h,
										getTrackByValue: g,
										getWatchables: E(w, function(e) {
											for (var t = [], n = S(e = e || []), i = n.length, r = 0; r < i; r++) {
												var o = e === n ? r : n[r],
													a = e[o],
													s = $(a, o),
													l = m(a, s);
												if (t.push(l), d[2] || d[1]) {
													var u = v(f, s);
													t.push(u)
												}
												if (d[4]) {
													var c = b(f, s);
													t.push(c)
												}
											}
											return t
										}),
										getOptions: function() {
											for (var e = [], t = {}, n = w(f) || [], i = S(n), r = i.length, o = 0; o < r; o++) {
												var a = n === i ? o : i[o],
													s = n[a],
													l = $(s, a),
													u = p(f, l),
													c = m(u, l),
													d = new x(c, u, v(f, l), y(f, l), b(f, l));
												e.push(d), t[c] = d
											}
											return {
												items: e,
												selectValueMap: t,
												getOptionFromViewValue: function(e) {
													return t[g(e)]
												},
												getViewValueFromOption: function(e) {
													return h ? C.copy(e.viewValue) : e.viewValue
												}
											}
										}
									}
								}(t.ngOptions, o, e),
								m = $[0].createDocumentFragment(),
								g = function() {
									f || a.remove()
								},
								v = function() {
									h.remove()
								};

							function y(e, t) {
								var n, i, r = x.cloneNode(!1);
								t.appendChild(r), i = r, ((n = e).element = i).disabled = n.disabled, n.label !== i.label && (i.label = n.label, i.textContent = n.label), n.value !== i.value && (i.value = n.selectValue)
							}

							function b() {
								var e = d && s.readValue();
								if (d)
									for (var t = d.items.length - 1; 0 <= t; t--) {
										var n = d.items[t];
										q(n.group) ? mt(n.element.parentNode) : mt(n.element)
									}
								d = p.getOptions();
								var i = {};
								if (f && o.prepend(a), d.items.forEach(function(e) {
										var t;
										q(e.group) ? ((t = i[e.group]) || (t = S.cloneNode(!1), m.appendChild(t), t.label = null === e.group ? "null" : e.group, i[e.group] = t), y(e, t)) : y(e, m)
									}), o[0].appendChild(m), l.$render(), !l.$isEmpty(e)) {
									var r = s.readValue();
									(p.trackBy || u ? xe(e, r) : e === r) || (l.$setViewValue(r), l.$render())
								}
							}
							u ? (l.$isEmpty = function(e) {
								return !e || 0 === e.length
							}, s.writeValue = function(e) {
								d.items.forEach(function(e) {
									e.element.selected = !1
								}), e && e.forEach(function(e) {
									var t = d.getOptionFromViewValue(e);
									t && (t.element.selected = !0)
								})
							}, s.readValue = function() {
								var e = o.val() || [],
									n = [];
								return ce(e, function(e) {
									var t = d.selectValueMap[e];
									t && !t.disabled && n.push(d.getViewValueFromOption(t))
								}), n
							}, p.trackBy && e.$watchCollection(function() {
								if (me(l.$viewValue)) return l.$viewValue.map(function(e) {
									return p.getTrackByValue(e)
								})
							}, function() {
								l.$render()
							})) : (s.writeValue = function(e) {
								var t = d.getOptionFromViewValue(e);
								t ? (o[0].value !== t.selectValue && (v(), g(), o[0].value = t.selectValue, t.element.selected = !0), t.element.setAttribute("selected", "selected")) : null === e || f ? (v(), f || o.prepend(a), o.val(""), a.prop("selected", !0), a.attr("selected", !0)) : (g(), o.prepend(h), o.val("?"), h.prop("selected", !0), h.attr("selected", !0))
							}, s.readValue = function() {
								var e = d.selectValueMap[o.val()];
								return e && !e.disabled ? (g(), v(), d.getViewValueFromOption(e)) : null
							}, p.trackBy && e.$watch(function() {
								return p.getTrackByValue(l.$viewValue)
							}, function() {
								l.$render()
							})), f ? (a.remove(), w(a)(e), a.removeClass("ng-scope")) : a = ue(x.cloneNode(!1)), o.empty(), b(), e.$watchCollection(p.getWatchables, b)
						}
					}
				}
			}],
			Lo = ["$locale", "$interpolate", "$log", function(p, m, g) {
				var v = /{}/g,
					y = /^when(Minus)?(.+)$/;
				return {
					link: function(r, o, a) {
						var s, e = a.count,
							l = a.$attr.when && o.attr(a.$attr.when),
							u = a.offset || 0,
							c = r.$eval(l) || {},
							d = {},
							t = m.startSymbol(),
							n = m.endSymbol(),
							i = t + e + "-" + u + n,
							f = C.noop;

						function h(e) {
							o.text(e || "")
						}
						ce(a, function(e, t) {
							var n = y.exec(t);
							if (n) {
								var i = (n[1] ? "-" : "") + S(n[2]);
								c[i] = o.attr(a.$attr[t])
							}
						}), ce(c, function(e, t) {
							d[t] = m(e.replace(v, i))
						}), r.$watch(e, function(e) {
							var t = parseFloat(e),
								n = isNaN(t);
							if (n || t in c || (t = p.pluralCat(t - u)), t !== s && !(n && $(s) && isNaN(s))) {
								f();
								var i = d[t];
								fe(i) ? (null != e && g.debug("ngPluralize: no rule defined for '" + t + "' in " + l), f = U, h()) : f = r.$watch(i, h), s = t
							}
						})
					}
				}
			}],
			Fo = ["$parse", "$animate", "$compile", function(l, P, u) {
				var M = "$$NG_REMOVED",
					O = p("ngRepeat"),
					D = function(e, t, n, i, r, o, a) {
						e[n] = i, r && (e[r] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
					};
				return {
					restrict: "A",
					multiElement: !0,
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					compile: function(e, t) {
						var x = t.ngRepeat,
							S = u.$$createComment("end ngRepeat", x),
							n = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						if (!n) throw O("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
						var i = n[1],
							r = n[2],
							E = n[3],
							o = n[4];
						if (!(n = i.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/))) throw O("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", i);
						var a, C, k, T, _ = n[3] || n[1],
							A = n[2];
						if (E && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(E) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(E))) throw O("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", E);
						var s = {
							$id: Et
						};
						return o ? a = l(o) : (k = function(e, t) {
								return Et(t)
							}, T = function(e) {
								return e
							}),
							function(y, b, e, t, w) {
								a && (C = function(e, t, n) {
									return A && (s[A] = e), s[_] = t, s.$index = n, a(y, s)
								});
								var $ = _e();
								y.$watchCollection(r, function(e) {
									var i, t, n, r, o, a, s, l, u, c, d, f, h, p = b[0],
										m = _e();
									if (E && (y[E] = e), N(e)) u = e, l = C || k;
									else
										for (var g in l = C || T, u = [], e) F.call(e, g) && "$" !== g.charAt(0) && u.push(g);
									for (r = u.length, d = new Array(r), i = 0; i < r; i++)
										if (o = e === u ? i : u[i], a = e[o], s = l(o, a, i), $[s]) c = $[s], delete $[s], m[s] = c, d[i] = c;
										else {
											if (m[s]) throw ce(d, function(e) {
												e && e.scope && ($[e.id] = e)
											}), O("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", x, s, a);
											d[i] = {
												id: s,
												scope: void 0,
												clone: void 0
											}, m[s] = !0
										} for (var v in $) {
										if (f = le((c = $[v]).clone), P.leave(f), f[0].parentNode)
											for (i = 0, t = f.length; i < t; i++) f[i][M] = !0;
										c.scope.$destroy()
									}
									for (i = 0; i < r; i++)
										if (o = e === u ? i : u[i], a = e[o], (c = d[i]).scope) {
											for (n = p;
												(n = n.nextSibling) && n[M];);
											c.clone[0] != n && P.move(le(c.clone), null, p), p = (h = c).clone[h.clone.length - 1], D(c.scope, i, _, a, A, o, r)
										} else w(function(e, t) {
											c.scope = t;
											var n = S.cloneNode(!1);
											e[e.length++] = n, P.enter(e, null, p), p = n, c.clone = e, m[c.id] = c, D(c.scope, i, _, a, A, o, r)
										});
									$ = m
								})
							}
					}
				}
			}],
			Ro = "ng-hide",
			zo = "ng-hide-animate",
			Ho = ["$animate", function(i) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(e, t, n) {
						e.$watch(n.ngShow, function(e) {
							i[e ? "removeClass" : "addClass"](t, Ro, {
								tempClasses: zo
							})
						})
					}
				}
			}],
			Uo = ["$animate", function(i) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(e, t, n) {
						e.$watch(n.ngHide, function(e) {
							i[e ? "addClass" : "removeClass"](t, Ro, {
								tempClasses: zo
							})
						})
					}
				}
			}],
			qo = Sr(function(e, n, t) {
				e.$watch(t.ngStyle, function(e, t) {
					t && e !== t && ce(t, function(e, t) {
						n.css(t, "")
					}), e && n.css(e)
				}, !0)
			}),
			Vo = ["$animate", "$compile", function(c, d) {
				return {
					require: "ngSwitch",
					controller: ["$scope", function() {
						this.cases = {}
					}],
					link: function(e, t, n, r) {
						var i = n.ngSwitch || n.on,
							o = [],
							a = [],
							s = [],
							l = [],
							u = function(e, t) {
								return function() {
									e.splice(t, 1)
								}
							};
						e.$watch(i, function(e) {
							var t, n;
							for (t = 0, n = s.length; t < n; ++t) c.cancel(s[t]);
							for (t = s.length = 0, n = l.length; t < n; ++t) {
								var i = le(a[t].clone);
								l[t].$destroy(), (s[t] = c.leave(i)).then(u(s, t))
							}
							a.length = 0, l.length = 0, (o = r.cases["!" + e] || r.cases["?"]) && ce(o, function(r) {
								r.transclude(function(e, t) {
									l.push(t);
									var n = r.element;
									e[e.length++] = d.$$createComment("end ngSwitchWhen");
									var i = {
										clone: e
									};
									a.push(i), c.enter(e, n.parent(), n)
								})
							})
						})
					}
				}
			}],
			Bo = Sr({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function(e, t, n, i, r) {
					i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
						transclude: r,
						element: t
					})
				}
			}),
			Wo = Sr({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function(e, t, n, i, r) {
					i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
						transclude: r,
						element: t
					})
				}
			}),
			Yo = p("ngTransclude"),
			Go = ["$compile", function(t) {
				return {
					restrict: "EAC",
					terminal: !0,
					compile: function(e) {
						var s = t(e.contents());
						return e.empty(),
							function(e, n, t, i, r) {
								if (!r) throw Yo("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Ce(n));
								t.ngTransclude === t.$attr.ngTransclude && (t.ngTransclude = "");
								var o = t.ngTransclude || t.ngTranscludeSlot;

								function a() {
									s(e, function(e) {
										n.append(e)
									})
								}
								r(function(e, t) {
									e.length ? n.append(e) : (a(), t.$destroy())
								}, null, o), o && !r.isSlotFilled(o) && a()
							}
					}
				}
			}],
			Xo = ["$templateCache", function(r) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function(e, t) {
						if ("text/ng-template" == t.type) {
							var n = t.id,
								i = e[0].text;
							r.put(n, i)
						}
					}
				}
			}],
			Zo = {
				$setViewValue: U,
				$render: U
			},
			Ko = ["$element", "$scope", function(n, e) {
				var a = this,
					r = new Ct;
				a.ngModelCtrl = Zo, a.unknownOption = ue(L.document.createElement("option")), a.renderUnknownOption = function(e) {
					var t = "? " + Et(e) + " ?";
					a.unknownOption.val(t), n.prepend(a.unknownOption), n.val(t)
				}, e.$on("$destroy", function() {
					a.renderUnknownOption = U
				}), a.removeUnknownOption = function() {
					a.unknownOption.parent() && a.unknownOption.remove()
				}, a.readValue = function() {
					return a.removeUnknownOption(), n.val()
				}, a.writeValue = function(e) {
					a.hasOption(e) ? (a.removeUnknownOption(), n.val(e), "" === e && a.emptyOption.prop("selected", !0)) : null == e && a.emptyOption ? (a.removeUnknownOption(), n.val("")) : a.renderUnknownOption(e)
				}, a.addOption = function(e, t) {
					if (t[0].nodeType !== Me) {
						ae(e, '"option value"'), "" === e && (a.emptyOption = t);
						var n, i = r.get(e) || 0;
						r.put(e, i + 1), a.ngModelCtrl.$render(), (n = t)[0].hasAttribute("selected") && (n[0].selected = !0)
					}
				}, a.removeOption = function(e) {
					var t = r.get(e);
					t && (1 === t ? (r.remove(e), "" === e && (a.emptyOption = void 0)) : r.put(e, t - 1))
				}, a.hasOption = function(e) {
					return !!r.get(e)
				}, a.registerOption = function(e, n, i, t, r) {
					var o;
					t ? i.$observe("value", function(e) {
						q(o) && a.removeOption(o), o = e, a.addOption(e, n)
					}) : r ? e.$watch(r, function(e, t) {
						i.$set("value", e), t !== e && a.removeOption(t), a.addOption(e, n)
					}) : a.addOption(i.value, n), n.on("$destroy", function() {
						a.removeOption(i.value), a.ngModelCtrl.$render()
					})
				}
			}],
			Jo = function() {
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: Ko,
					priority: 1,
					link: {
						pre: function(e, n, t, i) {
							var r = i[1];
							if (r) {
								var o = i[0];
								if (o.ngModelCtrl = r, n.on("change", function() {
										e.$apply(function() {
											r.$setViewValue(o.readValue())
										})
									}), t.multiple) {
									o.readValue = function() {
										var t = [];
										return ce(n.find("option"), function(e) {
											e.selected && t.push(e.value)
										}), t
									}, o.writeValue = function(e) {
										var t = new Ct(e);
										ce(n.find("option"), function(e) {
											e.selected = q(t.get(e.value))
										})
									};
									var a, s = NaN;
									e.$watch(function() {
										s !== r.$viewValue || xe(a, r.$viewValue) || (a = Ne(r.$viewValue), r.$render()), s = r.$viewValue
									}), r.$isEmpty = function(e) {
										return !e || 0 === e.length
									}
								}
							}
						},
						post: function(e, t, n, i) {
							var r = i[1];
							if (r) {
								var o = i[0];
								r.$render = function() {
									o.writeValue(r.$viewValue)
								}
							}
						}
					}
				}
			},
			Qo = ["$interpolate", function(n) {
				return {
					restrict: "E",
					priority: 100,
					compile: function(e, t) {
						if (q(t.value)) var a = n(t.value, !0);
						else {
							var s = n(e.text(), !0);
							s || t.$set("value", e.text())
						}
						return function(e, t, n) {
							var i = "$selectController",
								r = t.parent(),
								o = r.data(i) || r.parent().data(i);
							o && o.registerOption(e, t, n, a, s)
						}
					}
				}
			}],
			ea = k({
				restrict: "E",
				terminal: !1
			}),
			ta = function() {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(e, t, n, i) {
						i && (n.required = !0, i.$validators.required = function(e, t) {
							return !n.required || !i.$isEmpty(t)
						}, n.$observe("required", function() {
							i.$validate()
						}))
					}
				}
			},
			na = function() {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(e, t, n, i) {
						if (i) {
							var r, o = n.ngPattern || n.pattern;
							n.$observe("pattern", function(e) {
								if (pe(e) && 0 < e.length && (e = new RegExp("^" + e + "$")), e && !e.test) throw p("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", o, e, Ce(t));
								r = e || void 0, i.$validate()
							}), i.$validators.pattern = function(e, t) {
								return i.$isEmpty(t) || fe(r) || r.test(t)
							}
						}
					}
				}
			},
			ia = function() {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(e, t, n, i) {
						if (i) {
							var r = -1;
							n.$observe("maxlength", function(e) {
								var t = y(e);
								r = isNaN(t) ? -1 : t, i.$validate()
							}), i.$validators.maxlength = function(e, t) {
								return r < 0 || i.$isEmpty(t) || t.length <= r
							}
						}
					}
				}
			},
			ra = function() {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(e, t, n, i) {
						if (i) {
							var r = 0;
							n.$observe("minlength", function(e) {
								r = y(e) || 0, i.$validate()
							}), i.$validators.minlength = function(e, t) {
								return i.$isEmpty(t) || t.length >= r
							}
						}
					}
				}
			};
		L.angular.bootstrap ? L.console && console.log("WARNING: Tried to load angular more than once.") : (function() {
			var r;
			if (!re) {
				var e = V();
				(a = fe(e) ? L.jQuery : e ? L[e] : void 0) && a.fn.on ? (de((ue = a).fn, {
					scope: gt.scope,
					isolateScope: gt.isolateScope,
					controller: gt.controller,
					injector: gt.injector,
					inheritedData: gt.inheritedData
				}), r = a.cleanData, a.cleanData = function(e) {
					for (var t, n, i = 0; null != (n = e[i]); i++)(t = a._data(n, "events")) && t.$destroy && a(n).triggerHandler("$destroy");
					r(e)
				}) : ue = tt, C.element = ue, re = !0
			}
		}(), de(C, {
			bootstrap: ne,
			copy: j,
			extend: de,
			merge: function(e) {
				return m(e, s.call(arguments, 1), !0)
			},
			equals: xe,
			element: ue,
			forEach: ce,
			injector: jt,
			noop: U,
			bind: Ee,
			toJson: W,
			fromJson: Y,
			identity: x,
			isUndefined: fe,
			isDefined: q,
			isString: pe,
			isFunction: ge,
			isObject: he,
			isNumber: $,
			isElement: D,
			isArray: me,
			version: {
				full: "1.5.8",
				major: 1,
				minor: 5,
				dot: 8,
				codeName: "arbitrary-fallbacks"
			},
			isDate: E,
			lowercase: S,
			uppercase: c,
			callbacks: {
				$$counter: 0
			},
			getTestability: function(e) {
				var t = C.element(e).injector();
				if (!t) throw u("test", "no injector found for element argument to getTestability");
				return t.get("$$testability")
			},
			$$minErr: p,
			$$csp: I,
			reloadWithDebugInfo: function() {
				L.name = "NG_ENABLE_DEBUG_INFO!" + L.name, L.location.reload()
			}
		}), (g = function(e) {
			var c = p("$injector"),
				n = p("ng");

			function t(e, t, n) {
				return e[t] || (e[t] = n())
			}
			var i = t(e, "angular", Object);
			return i.$$minErr = i.$$minErr || p, t(i, "module", function() {
				var e = {};
				return function(s, l, u) {
					return function(e, t) {
						if ("hasOwnProperty" === s) throw n("badname", "hasOwnProperty is not a valid {0} name", "module")
					}(), l && e.hasOwnProperty(s) && (e[s] = null), t(e, s, function() {
						if (!l) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", s);
						var r = [],
							e = [],
							t = [],
							n = i("$injector", "invoke", "push", e),
							o = {
								_invokeQueue: r,
								_configBlocks: e,
								_runBlocks: t,
								requires: l,
								name: s,
								provider: a("$provide", "provider"),
								factory: a("$provide", "factory"),
								service: a("$provide", "service"),
								value: i("$provide", "value"),
								constant: i("$provide", "constant", "unshift"),
								decorator: a("$provide", "decorator"),
								animation: a("$animateProvider", "register"),
								filter: a("$filterProvider", "register"),
								controller: a("$controllerProvider", "register"),
								directive: a("$compileProvider", "directive"),
								component: a("$compileProvider", "component"),
								config: n,
								run: function(e) {
									return t.push(e), this
								}
							};
						return u && n(u), o;

						function i(e, t, n, i) {
							return i || (i = r),
								function() {
									return i[n || "push"]([e, t, arguments]), o
								}
						}

						function a(n, i) {
							return function(e, t) {
								return t && ge(t) && (t.$$moduleName = s), r.push([n, i, arguments]), o
							}
						}
					})
				}
			})
		}(L))("ng", ["ngLocale"], ["$provide", function(e) {
			e.provider({
				$$sanitizeUri: Di
			}), e.provider("$compile", Qt).directive({
				a: Er,
				input: Zr,
				textarea: Zr,
				form: Pr,
				script: Xo,
				select: Jo,
				style: ea,
				option: Qo,
				ngBind: Qr,
				ngBindHtml: to,
				ngBindTemplate: eo,
				ngClass: ro,
				ngClassEven: ao,
				ngClassOdd: oo,
				ngCloak: so,
				ngController: lo,
				ngForm: Mr,
				ngHide: Uo,
				ngIf: fo,
				ngInclude: ho,
				ngInit: mo,
				ngNonBindable: Do,
				ngPluralize: Lo,
				ngRepeat: Fo,
				ngShow: Ho,
				ngStyle: qo,
				ngSwitch: Vo,
				ngSwitchWhen: Bo,
				ngSwitchDefault: Wo,
				ngOptions: Io,
				ngTransclude: Go,
				ngModel: _o,
				ngList: go,
				ngChange: no,
				pattern: na,
				ngPattern: na,
				required: ta,
				ngRequired: ta,
				minlength: ra,
				ngMinlength: ra,
				maxlength: ia,
				ngMaxlength: ia,
				ngValue: Jr,
				ngModelOptions: Po
			}).directive({
				ngInclude: po
			}).directive(Cr).directive(uo), e.provider({
				$anchorScroll: It,
				$animate: qt,
				$animateCss: Wt,
				$$animateJs: Ht,
				$$animateQueue: Ut,
				$$AnimateRunner: Bt,
				$$animateAsyncRun: Vt,
				$browser: Gt,
				$cacheFactory: Xt,
				$controller: un,
				$document: cn,
				$exceptionHandler: dn,
				$filter: Ki,
				$$forceReflow: fn,
				$interpolate: On,
				$interval: Dn,
				$http: _n,
				$httpParamSerializer: $n,
				$httpParamSerializerJQLike: xn,
				$httpBackend: Pn,
				$xhrFactory: An,
				$jsonpCallbacks: Nn,
				$location: Kn,
				$log: Jn,
				$parse: Ti,
				$rootScope: Oi,
				$q: _i,
				$$q: Ai,
				$sce: Fi,
				$sceDelegate: Li,
				$sniffer: Ri,
				$templateCache: Zt,
				$templateRequest: Hi,
				$$testability: Ui,
				$timeout: qi,
				$window: Gi,
				$$rAF: Mi,
				$$jqLite: St,
				$$HashMap: kt,
				$$cookieReader: Zi
			})
		}]), C.module("ngLocale", [], ["$provide", function(e) {
			e.value("$locale", {
				DATETIME_FORMATS: {
					AMPMS: ["AM", "PM"],
					DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"],
					FIRSTDAYOFWEEK: 6,
					MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					WEEKENDRANGE: [5, 6],
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					medium: "MMM d, y h:mm:ss a",
					mediumDate: "MMM d, y",
					mediumTime: "h:mm:ss a",
					short: "M/d/yy h:mm a",
					shortDate: "M/d/yy",
					shortTime: "h:mm a"
				},
				NUMBER_FORMATS: {
					CURRENCY_SYM: "$",
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						gSize: 3,
						lgSize: 3,
						maxFrac: 3,
						minFrac: 0,
						minInt: 1,
						negPre: "-",
						negSuf: "",
						posPre: "",
						posSuf: ""
					}, {
						gSize: 3,
						lgSize: 3,
						maxFrac: 2,
						minFrac: 2,
						minInt: 1,
						negPre: "-¤",
						negSuf: "",
						posPre: "¤",
						posSuf: ""
					}]
				},
				id: "en-us",
				localeID: "en_US",
				pluralCat: function(e, a) {
					var t = 0 | e,
						n = function(e, t) {
							var n, i, r = a;
							void 0 === r && (r = Math.min((n = e, -1 == (i = (n += "").indexOf(".")) ? 0 : n.length - i - 1), 3));
							var o = Math.pow(10, r);
							return {
								v: r,
								f: (e * o | 0) % o
							}
						}(e);
					return 1 == t && 0 == n.v ? "one" : "other"
				}
			})
		}]), ue(L.document).ready(function() {
			var i, e, r, o, t;
			i = L.document, e = ne, t = {}, ce(te, function(e) {
				var t = e + "app";
				!r && i.hasAttribute && i.hasAttribute(t) && (o = (r = i).getAttribute(t))
			}), ce(te, function(e) {
				var t, n = e + "app";
				!r && (t = i.querySelector("[" + n.replace(":", "\\:") + "]")) && (o = (r = t).getAttribute(n))
			}), r && (t.strictDi = null !== function(e, t) {
				var n, i, r = te.length;
				for (i = 0; i < r; ++i)
					if (n = te[i] + "strict-di", pe(n = e.getAttribute(n))) return n;
				return null
			}(r), e(r, o ? [o] : [], t))
		}))
	}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
	function(u, e) {
		"use strict";
		var ae, se, le, ue, W = 1,
			ce = "-add",
			de = "-remove",
			S = "ng-animate",
			Y = "$$ngAnimateChildren";
		se = void 0 === u.ontransitionend && void 0 !== u.onwebkittransitionend ? (ae = "WebkitTransition", "webkitTransitionEnd transitionend") : (ae = "transition", "transitionend"), ue = void 0 === u.onanimationend && void 0 !== u.onwebkitanimationend ? (le = "WebkitAnimation", "webkitAnimationEnd animationend") : (le = "animation", "animationend");
		var r = "Duration",
			fe = "TimingFunction",
			o = "PlayState",
			n = le + "Delay",
			he = le + r,
			i = ae + "Delay",
			t = ae + r,
			a = e.$$minErr("ng");

		function c(e, t, n) {
			if (!e) throw a("areq", "Argument '{0}' is {1}", t || "?", n || "required");
			return e
		}

		function E(e, t) {
			return e || t ? e ? t ? (Oe(e) && (e = e.join(" ")), Oe(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
		}

		function pe(e, n, i) {
			var r = "";
			return e = Oe(e) ? e : e && Q(e) && e.length ? e.split(/\s+/) : [], Me(e, function(e, t) {
				e && 0 < e.length && (r += 0 < t ? " " : "", r += i ? n + e : e + n)
			}), r
		}

		function G(e) {
			if (!e[0]) return e;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (n.nodeType == W) return n
			}
		}

		function C(l) {
			return function(e, t) {
				var n, i, r, o, a, s;
				t.addClass && (n = l, i = e, r = t.addClass, Me(i, function(e) {
					n.addClass(e, r)
				}), t.addClass = null), t.removeClass && (o = l, a = e, s = t.removeClass, Me(a, function(e) {
					o.removeClass(e, s)
				}), t.removeClass = null)
			}
		}

		function me(e) {
			if (!(e = e || {}).$$prepared) {
				var t = e.domOperation || De;
				e.domOperation = function() {
					e.$$domOperationFired = !0, t(), t = De
				}, e.$$prepared = !0
			}
			return e
		}

		function ge(e, t) {
			ve(e, t), ye(e, t)
		}

		function ve(e, t) {
			t.from && (e.css(t.from), t.from = null)
		}

		function ye(e, t) {
			t.to && (e.css(t.to), t.to = null)
		}

		function X(e, t, n) {
			var i = t.options || {},
				r = n.options || {},
				o = (i.addClass || "") + " " + (r.addClass || ""),
				a = (i.removeClass || "") + " " + (r.removeClass || ""),
				s = function(r, e, t) {
					var n = {};
					r = i(r), e = i(e), Me(e, function(e, t) {
						n[t] = 1
					}), t = i(t), Me(t, function(e, t) {
						n[t] = 1 === n[t] ? null : -1
					});
					var o = {
						addClass: "",
						removeClass: ""
					};

					function i(e) {
						Q(e) && (e = e.split(" "));
						var t = {};
						return Me(e, function(e) {
							e.length && (t[e] = !0)
						}), t
					}
					return Me(n, function(e, t) {
						var n, i;
						1 === e ? (n = "addClass", i = !r[t] || r[t + de]) : -1 === e && (n = "removeClass", i = r[t] || r[t + ce]), i && (o[n].length && (o[n] += " "), o[n] += t)
					}), o
				}(e.attr("class"), o, a);
			r.preparationClasses && (i.preparationClasses = Z(r.preparationClasses, i.preparationClasses), delete r.preparationClasses);
			var l = i.domOperation !== De ? i.domOperation : null;
			return f(i, r), l && (i.domOperation = l), s.addClass ? i.addClass = s.addClass : i.addClass = null, s.removeClass ? i.removeClass = s.removeClass : i.removeClass = null, t.addClass = i.addClass, t.removeClass = i.removeClass, i
		}

		function be(e) {
			return e instanceof te ? e[0] : e
		}

		function we(e, t) {
			var n = t ? "-" + t + "s" : "";
			return xe(e, [i, n]), [i, n]
		}

		function $e(e, t) {
			var n = t ? "paused" : "",
				i = le + o;
			return xe(e, [i, n]), [i, n]
		}

		function xe(e, t) {
			var n = t[0],
				i = t[1];
			e.style[n] = i
		}

		function Z(e, t) {
			return e ? t ? e + " " + t : e : t
		}
		var s = ["$interpolate", function(o) {
				return {
					link: function(e, t, n) {
						var i = n.ngAnimateChildren;

						function r(e) {
							e = "on" === e || "true" === e, t.data(Y, e)
						}
						Q(i) && 0 === i.length ? t.data(Y, !0) : (r(o(i)(e)), n.$observe("ngAnimateChildren", r))
					}
				}
			}],
			Se = "$$animateCss",
			d = {
				transitionDuration: t,
				transitionDelay: i,
				transitionProperty: ae + "Property",
				animationDuration: he,
				animationDelay: n,
				animationIterationCount: le + "IterationCount"
			},
			Ee = {
				transitionDuration: t,
				transitionDelay: i,
				animationDuration: he,
				animationDelay: n
			};

		function Ce(e, t) {
			return [t ? n : i, e + "s"]
		}

		function ke(e, t, n) {
			var a = Object.create(null),
				s = e.getComputedStyle(t) || {};
			return Me(n, function(e, t) {
				var n, i, r = s[e];
				if (r) {
					var o = r.charAt(0);
					("-" === o || "+" === o || 0 <= o) && (n = 0, i = r.split(/\s*,\s*/), Me(i, function(e) {
						"s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, n = n ? Math.max(e, n) : e
					}), r = n), 0 === r && (r = null), a[t] = r
				}
			}), a
		}

		function Te(e) {
			return 0 === e || null != e
		}

		function _e(e, t) {
			var n = ae,
				i = e + "s";
			return t ? n += r : i += " linear all", [n, i]
		}

		function l() {
			var n = Object.create(null);
			return {
				flush: function() {
					n = Object.create(null)
				},
				count: function(e) {
					var t = n[e];
					return t ? t.total : 0
				},
				get: function(e) {
					var t = n[e];
					return t && t.value
				},
				put: function(e, t) {
					n[e] ? n[e].total++ : n[e] = {
						total: 1,
						value: t
					}
				}
			}
		}

		function Ae(t, n, e) {
			Me(e, function(e) {
				t[e] = K(t[e]) ? t[e] : n.style.getPropertyValue(e)
			})
		}
		var Pe, f, Me, Oe, K, h, $, J, Q, ee, te, De, p = ["$animateProvider", function(e) {
				var re = l(),
					oe = l();
				this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(G, X, Z, K, n, J, t, Q) {
					var ee = C(X),
						r = 0;

					function te(e, t) {
						var n = "$$ngAnimateParentKey",
							i = e.parentNode;
						return (i[n] || (i[n] = ++r)) + "-" + e.getAttribute("class") + "-" + t
					}
					var i = [];

					function ne(e) {
						i.push(e), t.waitUntilQuiet(function() {
							re.flush(), oe.flush();
							for (var e = n(), t = 0; t < i.length; t++) i[t](e);
							i.length = 0
						})
					}

					function ie(e, t, n) {
						var i, r, o, a, s = (i = e, r = n, o = d, (a = re.get(r)) || "infinite" === (a = ke(G, i, o)).animationIterationCount && (a.animationIterationCount = 1), re.put(r, a), a),
							l = s.animationDelay,
							u = s.transitionDelay;
						return s.maxDelay = l && u ? Math.max(l, u) : l || u, s.maxDuration = Math.max(s.animationDuration * s.animationIterationCount, s.transitionDuration), s
					}
					return function(u, e) {
						var c = e || {};
						c.$$prepared || (c = me(Pe(c)));
						var d = {},
							f = be(u);
						if (!f || !f.parentNode || !Q.enabled()) return B();
						var t, n, h, o, a, i, r, p, m, g, v, y, b = [],
							s = u.attr("class"),
							l = (n = {}, (t = c) && (t.to || t.from) && (n.to = t.to, n.from = t.from), n),
							w = [];
						if (0 === c.duration || !J.animations && !J.transitions) return B();
						var $ = c.event && Oe(c.event) ? c.event.join(" ") : c.event,
							x = "",
							S = "";
						$ && c.structural ? x = pe($, "ng-", !0) : $ && (x = $), c.addClass && (S += pe(c.addClass, ce)), c.removeClass && (S.length && (S += " "), S += pe(c.removeClass, de)), c.applyClassesEarly && S.length && ee(u, c);
						var E, C, k, T = [x, S].join(" ").trim(),
							_ = s + " " + T,
							A = pe(T, "-active"),
							P = l.to && 0 < Object.keys(l.to).length;
						if (!(0 < (c.keyframeStyle || "").length || P || T)) return B();
						if (0 < c.stagger) {
							var M = parseFloat(c.stagger);
							C = {
								transitionDelay: M,
								animationDelay: M,
								transitionDuration: 0,
								animationDuration: 0
							}
						} else E = te(f, _), C = function(e, t, n, i) {
							var r;
							if (0 < re.count(n) && !(r = oe.get(n))) {
								var o = pe(t, "-stagger");
								X.addClass(e, o), (r = ke(G, e, i)).animationDuration = Math.max(r.animationDuration, 0), r.transitionDuration = Math.max(r.transitionDuration, 0), X.removeClass(e, o), oe.put(n, r)
							}
							return r || {}
						}(f, T, E, Ee);
						if (c.$$skipPreparationClasses || X.addClass(u, T), c.transitionStyle) {
							var O = [ae, c.transitionStyle];
							xe(f, O), b.push(O)
						}
						if (0 <= c.duration) {
							k = 0 < f.style[ae].length;
							var D = _e(c.duration, k);
							xe(f, D), b.push(D)
						}
						if (c.keyframeStyle) {
							var N = [le, c.keyframeStyle];
							xe(f, N), b.push(N)
						}
						var j = C ? 0 <= c.staggerIndex ? c.staggerIndex : re.count(E) : 0,
							I = 0 === j;
						I && !c.skipBlocking && we(f, 9999);
						var L = ie(f, 0, E),
							F = L.maxDelay;
						p = Math.max(F, 0), g = L.maxDuration;
						var R, z = {};
						return z.hasTransitions = 0 < L.transitionDuration, z.hasAnimations = 0 < L.animationDuration, z.hasTransitionAll = z.hasTransitions && "all" == L.transitionProperty, z.applyTransitionDuration = P && (z.hasTransitions && !z.hasTransitionAll || z.hasAnimations && !z.hasTransitions), z.applyAnimationDuration = c.duration && z.hasAnimations, z.applyTransitionDelay = Te(c.delay) && (z.applyTransitionDuration || z.hasTransitions), z.applyAnimationDelay = Te(c.delay) && z.hasAnimations, z.recalculateTimingStyles = 0 < S.length, (z.applyTransitionDuration || z.applyAnimationDuration) && (g = c.duration ? parseFloat(c.duration) : g, z.applyTransitionDuration && (z.hasTransitions = !0, L.transitionDuration = g, k = 0 < f.style[ae + "Property"].length, b.push(_e(g, k))), z.applyAnimationDuration && (z.hasAnimations = !0, L.animationDuration = g, b.push([he, g + "s"]))), 0 !== g || z.recalculateTimingStyles ? (null != c.delay && ("boolean" != typeof c.delay && (R = parseFloat(c.delay), p = Math.max(R, 0)), z.applyTransitionDelay && b.push(Ce(R)), z.applyAnimationDelay && b.push(Ce(R, !0))), null == c.duration && 0 < L.transitionDuration && (z.recalculateTimingStyles = z.recalculateTimingStyles || I), m = 1e3 * p, v = 1e3 * g, c.skipBlocking || (z.blockTransition = 0 < L.transitionDuration, z.blockKeyframeAnimation = 0 < L.animationDuration && 0 < C.animationDelay && 0 === C.animationDuration), c.from && (c.cleanupStyles && Ae(d, f, Object.keys(c.from)), ve(u, c)), z.blockTransition || z.blockKeyframeAnimation ? V(g) : c.skipBlocking || we(f, !1), {
							$$willAnimate: !0,
							end: H,
							start: function() {
								if (!h) return i = new Z(r = {
									end: H,
									cancel: U,
									resume: null,
									pause: null
								}), ne(Y), i
							}
						}) : B();

						function H() {
							q()
						}

						function U() {
							q(!0)
						}

						function q(e) {
							if (!(h || a && o)) {
								o = !(h = !0), c.$$skipPreparationClasses || X.removeClass(u, T), X.removeClass(u, A), $e(f, !1), we(f, !1), Me(b, function(e) {
									f.style[e[0]] = ""
								}), ee(u, c), ge(u, c), Object.keys(d).length && Me(d, function(e, t) {
									e ? f.style.setProperty(t, e) : f.style.removeProperty(t)
								}), c.onDone && c.onDone(), w && w.length && u.off(w.join(" "), W);
								var t = u.data(Se);
								t && (K.cancel(t[0].timer), u.removeData(Se)), i && i.complete(!e)
							}
						}

						function V(e) {
							z.blockTransition && we(f, e), z.blockKeyframeAnimation && $e(f, !!e)
						}

						function B() {
							return i = new Z({
								end: H,
								cancel: U
							}), ne(De), q(), {
								$$willAnimate: !1,
								start: function() {
									return i
								},
								end: H
							}
						}

						function W(e) {
							e.stopPropagation();
							var t = e.originalEvent || e,
								n = t.$manualTimeStamp || Date.now(),
								i = parseFloat(t.elapsedTime.toFixed(3));
							Math.max(n - y, 0) >= m && g <= i && (a = !0, q())
						}

						function Y() {
							if (!h)
								if (f.parentNode) {
									var e = function(e) {
											if (a) o && e && (o = !1, q());
											else if (o = !e, L.animationDuration) {
												var t = $e(f, o);
												o ? b.push(t) : (i = t, r = (n = b).indexOf(i), 0 <= i && n.splice(r, 1))
											}
											var n, i, r
										},
										t = 0 < j && (L.transitionDuration && 0 === C.transitionDuration || L.animationDuration && 0 === C.animationDuration) && Math.max(C.animationDelay, C.transitionDelay);
									t ? K(n, Math.floor(t * j * 1e3), !1) : n(), r.resume = function() {
										e(!0)
									}, r.pause = function() {
										e(!1)
									}
								} else q();

							function n() {
								if (!h) {
									if (V(!1), Me(b, function(e) {
											var t = e[0],
												n = e[1];
											f.style[t] = n
										}), ee(u, c), X.addClass(u, A), z.recalculateTimingStyles) {
										if (_ = f.className + " " + T, E = te(f, _), L = ie(f, 0, E), F = L.maxDelay, p = Math.max(F, 0), 0 === (g = L.maxDuration)) return void q();
										z.hasTransitions = 0 < L.transitionDuration, z.hasAnimations = 0 < L.animationDuration
									}
									if (z.applyAnimationDelay && (F = "boolean" != typeof c.delay && Te(c.delay) ? parseFloat(c.delay) : F, p = Math.max(F, 0), L.animationDelay = F, R = Ce(F, !0), b.push(R), f.style[R[0]] = R[1]), m = 1e3 * p, v = 1e3 * g, c.easing) {
										var e, t = c.easing;
										z.hasTransitions && (e = ae + fe, b.push([e, t]), f.style[e] = t), z.hasAnimations && (e = le + fe, b.push([e, t]), f.style[e] = t)
									}
									L.transitionDuration && w.push(se), L.animationDuration && w.push(ue), y = Date.now();
									var n = m + 1.5 * v,
										i = y + n,
										r = u.data(Se) || [],
										o = !0;
									if (r.length) {
										var a = r[0];
										(o = i > a.expectedEndTime) ? K.cancel(a.timer): r.push(q)
									}
									if (o) {
										var s = K(l, n, !1);
										r[0] = {
											timer: s,
											expectedEndTime: i
										}, r.push(q), u.data(Se, r)
									}
									w.length && u.on(w.join(" "), W), c.to && (c.cleanupStyles && Ae(d, f, Object.keys(c.to)), ye(u, c))
								}
							}

							function l() {
								var e = u.data(Se);
								if (e) {
									for (var t = 1; t < e.length; t++) e[t]();
									u.removeData(Se)
								}
							}
						}
					}
				}]
			}],
			m = ["$$animationProvider", function(e) {
				e.drivers.push("$$animateCssDriver");
				var b = "ng-animate-shim",
					w = "ng-anchor-out";
				this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(h, e, p, t, n, i, r) {
					if (!n.animations && !n.transitions) return De;
					var o, m = r[0].body,
						a = be(t),
						g = te((o = a).parentNode && 11 === o.parentNode.nodeType || m.contains(a) ? a : m);
					return C(i),
						function(e) {
							return e.from && e.to ? function(e, t, n, i) {
								var r = s(e),
									o = s(t),
									a = [];
								if (Me(i, function(e) {
										var t = function(e, t, r) {
											var o = te(be(t).cloneNode(!0)),
												a = v(c(o));
											t.addClass(b), r.addClass(b), o.addClass("ng-anchor"), g.append(o);
											var i, n, s = (n = h(o, {
												addClass: w,
												delay: !0,
												from: u(t)
											})).$$willAnimate ? n : null;
											if (!s && !(i = d())) return f();
											var l = s || i;
											return {
												start: function() {
													var e, t = l.start();
													return t.done(function() {
														if (t = null, !i && (i = d())) return (t = i.start()).done(function() {
															t = null, f(), e.complete()
														}), t;
														f(), e.complete()
													}), e = new p({
														end: n,
														cancel: n
													});

													function n() {
														t && t.end()
													}
												}
											};

											function u(e) {
												var n = {},
													i = be(e).getBoundingClientRect();
												return Me(["width", "height", "top", "left"], function(e) {
													var t = i[e];
													switch (e) {
														case "top":
															t += m.scrollTop;
															break;
														case "left":
															t += m.scrollLeft
													}
													n[e] = Math.floor(t) + "px"
												}), n
											}

											function c(e) {
												return e.attr("class") || ""
											}

											function d() {
												var e = v(c(r)),
													t = y(e, a),
													n = y(a, e),
													i = h(o, {
														to: u(r),
														addClass: "ng-anchor-in " + t,
														removeClass: w + " " + n,
														delay: !0
													});
												return i.$$willAnimate ? i : null
											}

											function f() {
												o.remove(), t.removeClass(b), r.removeClass(b)
											}
										}(0, e.out, e.in);
										t && a.push(t)
									}), r || o || 0 !== a.length) return {
									start: function() {
										var t = [];
										r && t.push(r.start()), o && t.push(o.start()), Me(a, function(e) {
											t.push(e.start())
										});
										var n = new p({
											end: e,
											cancel: e
										});
										return p.all(t, function(e) {
											n.complete(e)
										}), n;

										function e() {
											Me(t, function(e) {
												e.end()
											})
										}
									}
								}
							}(e.from, e.to, e.classes, e.anchors) : s(e)
						};

					function v(e) {
						return e.replace(/\bng-\S+\b/g, "")
					}

					function y(e, t) {
						return Q(e) && (e = e.split(" ")), Q(t) && (t = t.split(" ")), e.filter(function(e) {
							return -1 === t.indexOf(e)
						}).join(" ")
					}

					function s(e) {
						var t = e.element,
							n = e.options || {};
						e.structural && (n.event = e.event, n.structural = !0, n.applyClassesEarly = !0, "leave" === e.event && (n.onDone = n.domOperation)), n.preparationClasses && (n.event = Z(n.event, n.preparationClasses));
						var i = h(t, n);
						return i.$$willAnimate ? i : null
					}
				}]
			}],
			g = ["$animateProvider", function(w) {
				this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(v, y, e) {
					var b = C(e);
					return function(e, t, n, i) {
						var r = !1;
						3 === arguments.length && J(n) && (i = n, n = null), i = me(i), n || (n = e.attr("class") || "", i.addClass && (n += " " + i.addClass), i.removeClass && (n += " " + i.removeClass));
						var o, a, s, l, u, c = i.addClass,
							d = i.removeClass,
							f = function(e) {
								e = Oe(e) ? e : e.split(" ");
								for (var t = [], n = {}, i = 0; i < e.length; i++) {
									var r = e[i],
										o = w.$$registeredAnimations[r];
									o && !n[r] && (t.push(v.get(o)), n[r] = !0)
								}
								return t
							}(n);
						if (f.length && (s = "leave" == t ? (l = "leave", "afterLeave") : (l = "before" + t.charAt(0).toUpperCase() + t.substr(1), t), "enter" !== t && "move" !== t && (o = g(e, t, i, f, l)), a = g(e, t, i, f, s)), o || a) return {
							$$willAnimate: !0,
							end: function() {
								return u ? u.end() : (p(), (u = new y).complete(!0)), u
							},
							start: function() {
								if (u) return u;
								var t;
								u = new y;
								var e = [];
								return o && e.push(function(e) {
									t = o(e)
								}), e.length ? e.push(function(e) {
									h(), e(!0)
								}) : h(), a && e.push(function(e) {
									t = a(e)
								}), u.setHost({
									end: function() {
										i()
									},
									cancel: function() {
										i(!0)
									}
								}), y.chain(e, n), u;

								function n(e) {
									p(), u.complete(e)
								}

								function i(e) {
									r || ((t || De)(e), n(e))
								}
							}
						};

						function h() {
							i.domOperation(), b(e, i)
						}

						function p() {
							r = !0, h(), ge(e, i)
						}

						function m(a, s, l, e, t) {
							var n = [];
							return Me(e, function(e) {
								var o = e[t];
								o && n.push(function() {
									var t, n, i = !1,
										r = function(e) {
											i || (i = !0, (n || De)(e), t.complete(!e))
										};
									return t = new y({
										end: function() {
											r()
										},
										cancel: function() {
											r(!0)
										}
									}), n = function(e, t, n, i, r) {
										var o;
										switch (s) {
											case "animate":
												o = [t, i.from, i.to, r];
												break;
											case "setClass":
												o = [t, c, d, r];
												break;
											case "addClass":
												o = [t, c, r];
												break;
											case "removeClass":
												o = [t, d, r];
												break;
											default:
												o = [t, r]
										}
										o.push(i);
										var a = e.apply(e, o);
										if (a)
											if ($(a.start) && (a = a.start()), a instanceof y) a.done(r);
											else if ($(a)) return a;
										return De
									}(o, a, 0, l, function(e) {
										r(!1 === e)
									}), t
								})
							}), n
						}

						function g(e, t, n, i, r) {
							var o, a, s = m(e, t, n, i, r);
							if (0 === s.length && ("beforeSetClass" === r ? (o = m(e, "removeClass", n, i, "beforeRemoveClass"), a = m(e, "addClass", n, i, "beforeAddClass")) : "setClass" === r && (o = m(e, "removeClass", n, i, "removeClass"), a = m(e, "addClass", n, i, "addClass")), o && (s = s.concat(o)), a && (s = s.concat(a))), 0 !== s.length) return function(e) {
								var n = [];
								return s.length && Me(s, function(e) {
										n.push(e())
									}), n.length ? y.all(n, e) : e(),
									function(t) {
										Me(n, function(e) {
											t ? e.cancel() : e.end()
										})
									}
							}
						}
					}
				}]
			}],
			v = ["$$animationProvider", function(e) {
				e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(o, a) {
					return function(e) {
						if (e.from && e.to) {
							var i = t(e.from),
								r = t(e.to);
							if (!i && !r) return;
							return {
								start: function() {
									var e = [];
									i && e.push(i.start()), r && e.push(r.start()), a.all(e, function(e) {
										t.complete(e)
									});
									var t = new a({
										end: n(),
										cancel: n()
									});
									return t;

									function n() {
										return function() {
											Me(e, function(e) {
												e.end()
											})
										}
									}
								}
							}
						}
						return t(e)
					};

					function t(e) {
						var t = e.element,
							n = e.event,
							i = e.options,
							r = e.classes;
						return o(t, n, r, i)
					}
				}]
			}],
			ne = "data-ng-animate",
			ie = "$ngAnimatePin",
			y = ["$animateProvider", function(l) {
				var r = " ",
					o = this.rules = {
						skip: [],
						cancel: [],
						join: []
					};

				function s(e, i) {
					if (e && i) {
						var t = function(e) {
							if (!i) return null;
							var t = i.split(r),
								n = Object.create(null);
							return Me(t, function(e) {
								n[e] = !0
							}), n
						}();
						return e.split(r).some(function(e) {
							return t[e]
						})
					}
				}

				function V(e, t, n, i) {
					return o[e].some(function(e) {
						return e(t, n, i)
					})
				}

				function B(e, t) {
					var n = 0 < (e.addClass || "").length,
						i = 0 < (e.removeClass || "").length;
					return t ? n && i : n || i
				}
				o.join.push(function(e, t, n) {
					return !t.structural && B(t)
				}), o.skip.push(function(e, t, n) {
					return !t.structural && !B(t)
				}), o.skip.push(function(e, t, n) {
					return "leave" == n.event && t.structural
				}), o.skip.push(function(e, t, n) {
					return n.structural && 2 === n.state && !t.structural
				}), o.cancel.push(function(e, t, n) {
					return n.structural && t.structural
				}), o.cancel.push(function(e, t, n) {
					return 2 === n.state && t.structural
				}), o.cancel.push(function(e, t, n) {
					if (n.structural) return !1;
					var i = t.addClass,
						r = t.removeClass,
						o = n.addClass,
						a = n.removeClass;
					return !(ee(i) && ee(r) || ee(o) && ee(a)) && (s(i, a) || s(r, o))
				}), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(k, T, _, A, e, P, M, t, n, i) {
					var O = new e,
						D = new e,
						N = null,
						r = T.$watch(function() {
							return 0 === t.totalPendingRequests
						}, function(e) {
							e && (r(), T.$$postDigest(function() {
								T.$$postDigest(function() {
									null === N && (N = !0)
								})
							}))
						}),
						j = Object.create(null),
						o = l.classNameFilter(),
						I = o ? function(e) {
							return o.test(e)
						} : function() {
							return !0
						},
						L = C(n);

					function F(e, t) {
						return X(e, t, {})
					}
					var R = u.Node.prototype.contains || function(e) {
						return this === e || !!(16 & this.compareDocumentPosition(e))
					};

					function a(e, t, n) {
						var i = G(t);
						return e.filter(function(e) {
							return !(e.node === i && (!n || e.callback === n))
						})
					}

					function z(e, t) {
						"close" !== e || t[0].parentNode || s.off(t)
					}
					var s = {
						on: function(e, t, n) {
							var i = G(t);
							j[e] = j[e] || [], j[e].push({
								node: i,
								callback: n
							}), te(t).on("$destroy", function() {
								O.get(i) || s.off(e, t, n)
							})
						},
						off: function(e, t, n) {
							if (1 !== arguments.length || Q(e)) {
								var i = j[e];
								i && (j[e] = 1 === arguments.length ? null : a(i, t, n))
							} else
								for (var r in t = e, j) j[r] = a(j[r], t)
						},
						pin: function(e, t) {
							c(h(e), "element", "not an element"), c(h(t), "parentElement", "not an element"), e.data(ie, t)
						},
						push: function(e, t, C, n) {
							return (C = C || {}).domOperation = n,
								function(c, r, e) {
									var o, d, a = Pe(C);
									(c = function(e) {
										if (e instanceof te) switch (e.length) {
											case 0:
												return e;
											case 1:
												if (e[0].nodeType === W) return e;
												break;
											default:
												return te(G(e))
										}
										if (e.nodeType === W) return te(e)
									}(c)) && (o = be(c), d = c.parent()), a = me(a);
									var t, s = new M,
										n = (t = !1, function(e) {
											t ? e() : T.$$postDigest(function() {
												t = !0, e()
											})
										});
									if (Oe(a.addClass) && (a.addClass = a.addClass.join(" ")), a.addClass && !Q(a.addClass) && (a.addClass = null), Oe(a.removeClass) && (a.removeClass = a.removeClass.join(" ")), a.removeClass && !Q(a.removeClass) && (a.removeClass = null), a.from && !J(a.from) && (a.from = null), a.to && !J(a.to) && (a.to = null), !o) return E(), s;
									var i = [o.className, a.addClass, a.removeClass].join(" ");
									if (!I(i)) return E(), s;
									var l, u = 0 <= ["enter", "move", "leave"].indexOf(r),
										f = A[0].hidden,
										h = !N || f || D.get(o),
										p = !h && O.get(o) || {},
										m = !!p.state;
									if (h || m && 1 == p.state || (h = ! function(e, t, n) {
											var i, r = te(A[0].body),
												o = U(e, r) || "HTML" === e[0].nodeName,
												a = U(e, _),
												s = !1,
												l = D.get(be(e)),
												u = te.data(e[0], ie);
											for (u && (t = u), t = be(t); t && (a || (a = U(t, _)), t.nodeType === W);) {
												var c = O.get(t) || {};
												if (!s) {
													var d = D.get(t);
													if (!0 === d && !1 !== l) {
														l = !0;
														break
													}!1 === d && (l = !1), s = c.structural
												}
												if (ee(i) || !0 === i) {
													var f = te.data(t, Y);
													K(f) && (i = f)
												}
												if (s && !1 === i) break;
												if (o || (o = U(t, r)), o && a) break;
												t = a || !(u = te.data(t, ie)) ? t.parentNode : be(u)
											}
											return (!s || i) && !0 !== l && a && o
										}(c, d)), h) return f && S(s, r, "start"), E(), f && S(s, r, "close"), s;
									u && (l = be(c).querySelectorAll("[" + ne + "]"), Me(l, function(e) {
										var t = parseInt(e.getAttribute(ne)),
											n = O.get(e);
										if (n) switch (t) {
											case 2:
												n.runner.end();
											case 1:
												O.remove(e)
										}
									}));
									var g, v, y, b, w = {
										structural: u,
										element: c,
										event: r,
										addClass: a.addClass,
										removeClass: a.removeClass,
										close: E,
										options: a,
										runner: s
									};
									if (m) {
										if (V("skip", c, w, p)) return 2 === p.state ? (E(), s) : (X(c, p, w), p.runner);
										if (V("cancel", c, w, p))
											if (2 === p.state) p.runner.end();
											else {
												if (!p.structural) return X(c, p, w), p.runner;
												p.close()
											}
										else if (V("join", c, w, p)) {
											if (2 !== p.state) return g = c, y = a, b = "", (v = u ? r : null) && (b = pe(v, "ng-", !0)), y.addClass && (b = Z(b, pe(y.addClass, ce))), y.removeClass && (b = Z(b, pe(y.removeClass, de))), b.length && (y.preparationClasses = b, g.addClass(b)), r = w.event = p.event, a = X(c, p, w), p.runner;
											F(c, w)
										}
									} else F(c, w);
									var $ = w.structural;
									if ($ || ($ = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || B(w)), !$) return E(), H(c), s;
									var x = (p.counter || 0) + 1;
									return w.counter = x, q(c, 1, w), T.$$postDigest(function() {
										var e = O.get(o),
											t = !e;
										e = e || {};
										var n = 0 < (c.parent() || []).length && ("animate" === e.event || e.structural || B(e));
										if (t || e.counter !== x || !n) return t && (L(c, a), ge(c, a)), (t || u && e.event !== r) && (a.domOperation(), s.end()), void(n || H(c));
										r = !e.structural && B(e, !0) ? "setClass" : e.event, q(c, 2);
										var i = P(c, r, e.options);
										s.setHost(i), S(s, r, "start", {}), i.done(function(e) {
											E(!e);
											var t = O.get(o);
											t && t.counter === x && H(be(c)), S(s, r, "close", {})
										})
									}), s;

									function S(e, s, l, u) {
										n(function() {
											var e, t, n, i, r, o, a = (e = d, t = s, n = be(c), i = be(e), r = [], (o = j[t]) && Me(o, function(e) {
												R.call(e.node, n) ? r.push(e.callback) : "leave" === t && R.call(e.node, i) && r.push(e.callback)
											}), r);
											a.length ? k(function() {
												Me(a, function(e) {
													e(c, l, u)
												}), z(l, c)
											}) : z(l, c)
										}), e.progress(s, l, u)
									}

									function E(e) {
										var t, n;
										t = c, (n = a).preparationClasses && (t.removeClass(n.preparationClasses), n.preparationClasses = null), n.activeClasses && (t.removeClass(n.activeClasses), n.activeClasses = null), L(c, a), ge(c, a), a.domOperation(), s.complete(!e)
									}
								}(e, t)
						},
						enabled: function(e, t) {
							var n = arguments.length;
							if (0 === n) t = !!N;
							else if (h(e)) {
								var i = be(e);
								1 === n ? t = !D.get(i) : D.put(i, !t)
							} else t = N = !!e;
							return t
						}
					};
					return s;

					function H(e) {
						var t = be(e);
						t.removeAttribute(ne), O.remove(t)
					}

					function U(e, t) {
						return be(e) === be(t)
					}

					function q(e, t, n) {
						(n = n || {}).state = t;
						var i = be(e);
						i.setAttribute(ne, t);
						var r = O.get(i),
							o = r ? f(r, n) : n;
						O.put(i, o)
					}
				}]
			}],
			b = ["$animateProvider", function(e) {
				var b = "ng-animate-ref",
					w = this.drivers = [],
					$ = "$$animationRunner";

				function x(e) {
					return e.data($)
				}
				this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(d, f, h, p, m, g) {
					var v = [],
						y = C(d);
					return function(t, n, i) {
						i = me(i);
						var e, r = 0 <= ["enter", "move", "leave"].indexOf(n),
							o = new p({
								end: function() {
									c()
								},
								cancel: function() {
									c(!0)
								}
							});
						if (!w.length) return c(), o;
						e = o, t.data($, e);
						var a, s = E(t.attr("class"), E(i.addClass, i.removeClass)),
							l = i.tempClasses;
						return l && (s += " " + l, i.tempClasses = null), r && (a = "ng-" + n + "-prepare", d.addClass(t, a)), v.push({
							element: t,
							classes: s,
							event: n,
							structural: r,
							options: i,
							beforeStart: function() {
								t.addClass(S), l && d.addClass(t, l), a && (d.removeClass(t, a), a = null)
							},
							close: c
						}), t.on("$destroy", u), 1 < v.length || f.$$postDigest(function() {
							var t = [];
							Me(v, function(e) {
								x(e.element) ? t.push(e) : e.close()
							}), v.length = 0;
							var e = function(c) {
									var d = [],
										f = {};
									Me(c, function(e, n) {
										var t, i, r, o = be(e.element),
											a = e.event,
											s = 0 <= ["enter", "move"].indexOf(a),
											l = e.structural ? (i = (t = o).hasAttribute(b) ? [t] : t.querySelectorAll("[ng-animate-ref]"), r = [], Me(i, function(e) {
												var t = e.getAttribute(b);
												t && t.length && r.push(e)
											}), r) : [];
										if (l.length) {
											var u = s ? "to" : "from";
											Me(l, function(e) {
												var t = e.getAttribute(b);
												f[t] = f[t] || {}, f[t][u] = {
													animationID: n,
													element: te(e)
												}
											})
										} else d.push(e)
									});
									var h = {},
										p = {};
									return Me(f, function(e, t) {
										var n = e.from,
											i = e.to;
										if (n && i) {
											var r = c[n.animationID],
												o = c[i.animationID],
												a = n.animationID.toString();
											if (!p[a]) {
												var s = p[a] = {
													structural: !0,
													beforeStart: function() {
														r.beforeStart(), o.beforeStart()
													},
													close: function() {
														r.close(), o.close()
													},
													classes: function(e, t) {
														e = e.split(" "), t = t.split(" ");
														for (var n = [], i = 0; i < e.length; i++) {
															var r = e[i];
															if ("ng-" !== r.substring(0, 3))
																for (var o = 0; o < t.length; o++)
																	if (r === t[o]) {
																		n.push(r);
																		break
																	}
														}
														return n.join(" ")
													}(r.classes, o.classes),
													from: r,
													to: o,
													anchors: []
												};
												s.classes.length ? d.push(s) : (d.push(r), d.push(o))
											}
											p[a].anchors.push({
												out: n.element,
												in: i.element
											})
										} else {
											var l = n ? n.animationID : i.animationID,
												u = l.toString();
											h[u] || (h[u] = !0, d.push(c[l]))
										}
									}), d
								}(t),
								n = [];
							Me(e, function(r) {
								n.push({
									domNode: be(r.from ? r.from.element : r.element),
									fn: function() {
										r.beforeStart();
										var e, t = r.close;
										if (x(r.anchors ? r.from.element || r.to.element : r.element)) {
											var n = function(e) {
												for (var t = w.length - 1; 0 <= t; t--) {
													var n = w[t],
														i = h.get(n)(e);
													if (i) return i
												}
											}(r);
											n && (e = n.start)
										}
										if (e) {
											var i = e();
											i.done(function(e) {
													t(!e)
												}),
												function(e, n) {
													function t(e) {
														var t = x(e);
														t && t.setHost(n)
													}
													e.from && e.to ? (t(e.from.element), t(e.to.element)) : t(e.element)
												}(r, i)
										} else t()
									}
								})
							}), g(function(e) {
								var t, r = {
										children: []
									},
									o = new m;
								for (t = 0; t < e.length; t++) {
									var n = e[t];
									o.put(n.domNode, e[t] = {
										domNode: n.domNode,
										fn: n.fn,
										children: []
									})
								}
								for (t = 0; t < e.length; t++) a(e[t]);
								return function(e) {
									var t, n = [],
										i = [];
									for (t = 0; t < e.children.length; t++) i.push(e.children[t]);
									var r = i.length,
										o = 0,
										a = [];
									for (t = 0; t < i.length; t++) {
										var s = i[t];
										r <= 0 && (r = o, o = 0, n.push(a), a = []), a.push(s.fn), s.children.forEach(function(e) {
											o++, i.push(e)
										}), r--
									}
									return a.length && n.push(a), n
								}(r);

								function a(e) {
									if (e.processed) return e;
									e.processed = !0;
									var t, n = e.domNode,
										i = n.parentNode;
									for (o.put(n, e); i;) {
										if (t = o.get(i)) {
											t.processed || (t = a(t));
											break
										}
										i = i.parentNode
									}
									return (t || r).children.push(e), e
								}
							}(n))
						}), o;

						function u() {
							var e = x(t);
							!e || "leave" === n && i.$$domOperationFired || e.end()
						}

						function c(e) {
							t.off("$destroy", u), t.removeData($), y(t, i), ge(t, i), i.domOperation(), l && d.removeClass(t, l), t.removeClass(S), o.complete(!e)
						}
					}
				}]
			}];
		e.module("ngAnimate", [], function() {
			De = e.noop, Pe = e.copy, f = e.extend, te = e.element, Me = e.forEach, Oe = e.isArray, Q = e.isString, J = e.isObject, ee = e.isUndefined, K = e.isDefined, $ = e.isFunction, h = e.isElement
		}).directive("ngAnimateSwap", ["$animate", "$rootScope", function(s, e) {
			return {
				restrict: "A",
				transclude: "element",
				terminal: !0,
				priority: 600,
				link: function(t, n, e, i, r) {
					var o, a;
					t.$watchCollection(e.ngAnimateSwap || e.for, function(e) {
						o && s.leave(o), a && (a.$destroy(), a = null), (e || 0 === e) && (a = t.$new(), r(a, function(e) {
							o = e, s.enter(e, null, n)
						}))
					})
				}
			}
		}]).directive("ngAnimateChildren", s).factory("$$rAFScheduler", ["$$rAF", function(n) {
			var i, r;

			function e(e) {
				i = i.concat(e), o()
			}
			return i = e.queue = [], e.waitUntilQuiet = function(e) {
				r && r(), r = n(function() {
					r = null, e(), o()
				})
			}, e;

			function o() {
				if (i.length) {
					for (var e = i.shift(), t = 0; t < e.length; t++) e[t]();
					r || n(function() {
						r || o()
					})
				}
			}
		}]).provider("$$animateQueue", y).provider("$$animation", b).provider("$animateCss", p).provider("$$animateCssDriver", m).provider("$$animateJs", g).provider("$$animateJsDriver", v)
	}(window, window.angular),
	function(e, S) {
		"use strict";
		var t = S.module("ngTouch", []);

		function n(t, n) {
			var i = !1,
				r = !1;
			this.ngClickOverrideEnabled = function(e) {
				return S.isDefined(e) ? (e && !r && (r = !0, o.$$moduleName = "ngTouch", n.directive("ngClick", o), t.decorator("ngClickDirective", ["$delegate", function(e) {
					if (i) e.shift();
					else
						for (var t = e.length - 1; 0 <= t;) {
							if ("ngTouch" === e[t].$$moduleName) {
								e.splice(t, 1);
								break
							}
							t--
						}
					return e
				}])), i = e, this) : i
			}, this.$get = function() {
				return {
					ngClickOverrideEnabled: function() {
						return i
					}
				}
			}
		}
		t.provider("$touch", n), n.$inject = ["$provide", "$compileProvider"], t.factory("$swipe", [function() {
			var r = {
				mouse: {
					start: "mousedown",
					move: "mousemove",
					end: "mouseup"
				},
				touch: {
					start: "touchstart",
					move: "touchmove",
					end: "touchend",
					cancel: "touchcancel"
				},
				pointer: {
					start: "pointerdown",
					move: "pointermove",
					end: "pointerup",
					cancel: "pointercancel"
				}
			};

			function u(e) {
				var t = e.originalEvent || e,
					n = t.touches && t.touches.length ? t.touches : [t],
					i = t.changedTouches && t.changedTouches[0] || n[0];
				return {
					x: i.clientX,
					y: i.clientY
				}
			}

			function c(e, n) {
				var i = [];
				return S.forEach(e, function(e) {
					var t = r[e][n];
					t && i.push(t)
				}), i.join(" ")
			}
			return {
				bind: function(e, n, t) {
					var i, r, o, a, s = !1;
					t = t || ["mouse", "touch", "pointer"], e.on(c(t, "start"), function(e) {
						o = u(e), s = !0, r = i = 0, a = o, n.start && n.start(o, e)
					});
					var l = c(t, "cancel");
					l && e.on(l, function(e) {
						s = !1, n.cancel && n.cancel(e)
					}), e.on(c(t, "move"), function(e) {
						if (s && o) {
							var t = u(e);
							if (i += Math.abs(t.x - a.x), r += Math.abs(t.y - a.y), a = t, !(i < 10 && r < 10)) return i < r ? (s = !1, void(n.cancel && n.cancel(e))) : (e.preventDefault(), void(n.move && n.move(t, e)))
						}
					}), e.on(c(t, "end"), function(e) {
						s && (s = !1, n.end && n.end(u(e), e))
					})
				}
			}
		}]);
		var o = ["$parse", "$timeout", "$rootElement", function(e, r, v) {
			var y, b, o, l = 25,
				a = "ng-click-active";

			function w(e, t, n) {
				for (var i = 0; i < e.length; i += 2)
					if (r = e[i], o = e[i + 1], a = t, s = n, Math.abs(r - a) < l && Math.abs(o - s) < l) return e.splice(i, i + 2), !0;
				var r, o, a, s;
				return !1
			}

			function $(e) {
				if (!(2500 < Date.now() - y)) {
					var t, n = e.touches && e.touches.length ? e.touches : [e],
						i = n[0].clientX,
						r = n[0].clientY;
					i < 1 && r < 1 || o && o[0] === i && o[1] === r || (o && (o = null), "label" === (t = e.target, S.lowercase(t.nodeName || t[0] && t[0].nodeName)) && (o = [i, r]), w(b, i, r) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur && e.target.blur()))
				}
			}

			function x(e) {
				var t = e.touches && e.touches.length ? e.touches : [e],
					n = t[0].clientX,
					i = t[0].clientY;
				b.push(n, i), r(function() {
					for (var e = 0; e < b.length; e += 2)
						if (b[e] == n && b[e + 1] == i) return void b.splice(e, e + 2)
				}, 2500, !1)
			}
			return function(n, u, c) {
				var d, f, h, p, i = e(c.ngClick),
					m = !1;

				function g() {
					m = !1, u.removeClass(a)
				}
				u.on("touchstart", function(e) {
					m = !0, 3 == (d = e.target ? e.target : e.srcElement).nodeType && (d = d.parentNode), u.addClass(a), f = Date.now();
					var t = e.originalEvent || e,
						n = (t.touches && t.touches.length ? t.touches : [t])[0];
					h = n.clientX, p = n.clientY
				}), u.on("touchcancel", function(e) {
					g()
				}), u.on("touchend", function(e) {
					var t, n, i = Date.now() - f,
						r = e.originalEvent || e,
						o = (r.changedTouches && r.changedTouches.length ? r.changedTouches : r.touches && r.touches.length ? r.touches : [r])[0],
						a = o.clientX,
						s = o.clientY,
						l = Math.sqrt(Math.pow(a - h, 2) + Math.pow(s - p, 2));
					m && i < 750 && l < 12 && (t = a, n = s, b || (v[0].addEventListener("click", $, !0), v[0].addEventListener("touchstart", x, !0), b = []), y = Date.now(), w(b, t, n), d && d.blur(), S.isDefined(c.disabled) && !1 !== c.disabled || u.triggerHandler("click", [e])), g()
				}), u.onclick = function(e) {}, u.on("click", function(e, t) {
					n.$apply(function() {
						i(n, {
							$event: t || e
						})
					})
				}), u.on("mousedown", function(e) {
					u.addClass(a)
				}), u.on("mousemove mouseup", function(e) {
					u.removeClass(a)
				})
			}
		}];

		function i(u, c, d) {
			t.directive(u, ["$parse", "$swipe", function(s, l) {
				return function(n, i, e) {
					var r, o, a = s(e[u]),
						t = ["touch"];
					S.isDefined(e.ngSwipeDisableMouse) || t.push("mouse"), l.bind(i, {
						start: function(e, t) {
							r = e, o = !0
						},
						cancel: function(e) {
							o = !1
						},
						end: function(e, t) {
							(function(e) {
								if (!r) return !1;
								var t = Math.abs(e.y - r.y),
									n = (e.x - r.x) * c;
								return o && t < 75 && 0 < n && 30 < n && t / n < .3
							})(e) && n.$apply(function() {
								i.triggerHandler(d), a(n, {
									$event: t
								})
							})
						}
					}, t)
				}
			}])
		}
		i("ngSwipeLeft", -1, "swipeleft"), i("ngSwipeRight", 1, "swiperight")
	}(window, window.angular),
	function($, x) {
		"use strict";
		var S, E, C, k, T, _, A, P, M = x.$$minErr("$sanitize");
		x.module("ngSanitize", []).provider("$sanitize", function() {
			var t = !1;
			this.$get = ["$$sanitizeUri", function(n) {
				return t && E(f, c),
					function(e) {
						var t = [];
						return A(e, P(t, function(e, t) {
							return !/^unsafe:/.test(n(e, t))
						})), t.join("")
					}
			}], this.enableSvg = function(e) {
				return k(e) ? (t = e, this) : t
			}, S = x.bind, E = x.extend, C = x.forEach, k = x.isDefined, T = x.lowercase, _ = x.noop, A = function(e, t) {
				null == e ? e = "" : "string" != typeof e && (e = "" + e), o.innerHTML = e;
				var n = 5;
				do {
					if (0 === n) throw M("uinput", "Failed to sanitize html because the input is unstable");
					n--, $.document.documentMode && w(o), e = o.innerHTML, o.innerHTML = e
				} while (e !== o.innerHTML);
				for (var i = o.firstChild; i;) {
					switch (i.nodeType) {
						case 1:
							t.start(i.nodeName.toLowerCase(), y(i.attributes));
							break;
						case 3:
							t.chars(i.textContent)
					}
					var r;
					if (!((r = i.firstChild) || (1 == i.nodeType && t.end(i.nodeName.toLowerCase()), r = i.nextSibling)))
						for (; null == r && (i = i.parentNode) !== o;) r = i.nextSibling, 1 == i.nodeType && t.end(i.nodeName.toLowerCase());
					i = r
				}
				for (; i = o.firstChild;) o.removeChild(i)
			}, P = function(e, o) {
				var t = !1,
					a = S(e, e.push);
				return {
					start: function(r, e) {
						r = T(r), !t && d[r] && (t = r), t || !0 !== f[r] || (a("<"), a(r), C(e, function(e, t) {
							var n = T(t),
								i = "img" === r && "src" === n || "background" === n;
							!0 !== g[n] || !0 === h[n] && !o(e, i) || (a(" "), a(t), a('="'), a(b(e)), a('"'))
						}), a(">"))
					},
					end: function(e) {
						e = T(e), t || !0 !== f[e] || !0 === r[e] || (a("</"), a(e), a(">")), e == t && (t = !1)
					},
					chars: function(e) {
						t || a(b(e))
					}
				}
			};
			var o, n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				i = /([^\#-~ |!])/g,
				r = v("area,br,col,hr,img,wbr"),
				e = v("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
				a = v("rp,rt"),
				s = E({}, a, e),
				l = E({}, e, v("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
				u = E({}, a, v("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
				c = v("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
				d = v("script,style"),
				f = E({}, r, l, u, s),
				h = v("background,cite,href,longdesc,src,xlink:href"),
				p = v("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
				m = v("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
				g = E({}, h, m, p);

			function v(e, t) {
				var n, i = {},
					r = e.split(",");
				for (n = 0; n < r.length; n++) i[t ? T(r[n]) : r[n]] = !0;
				return i
			}

			function y(e) {
				for (var t = {}, n = 0, i = e.length; n < i; n++) {
					var r = e[n];
					t[r.name] = r.value
				}
				return t
			}

			function b(e) {
				return e.replace(/&/g, "&amp;").replace(n, function(e) {
					return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
				}).replace(i, function(e) {
					return "&#" + e.charCodeAt(0) + ";"
				}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
			}

			function w(e) {
				if (e.nodeType === $.Node.ELEMENT_NODE)
					for (var t = e.attributes, n = 0, i = t.length; n < i; n++) {
						var r = t[n],
							o = r.name.toLowerCase();
						"xmlns:ns1" !== o && 0 !== o.lastIndexOf("ns1:", 0) || (e.removeAttributeNode(r), n--, i--)
					}
				var a = e.firstChild;
				a && w(a), (a = e.nextSibling) && w(a)
			}! function(e) {
				var t;
				if (!e.document || !e.document.implementation) throw M("noinert", "Can't create an inert html document");
				var n = ((t = e.document.implementation.createHTMLDocument("inert")).documentElement || t.getDocumentElement()).getElementsByTagName("body");
				if (1 === n.length) o = n[0];
				else {
					var i = t.createElement("html");
					o = t.createElement("body"), i.appendChild(o), t.appendChild(i)
				}
			}($)
		}), x.module("ngSanitize").filter("linky", ["$sanitize", function(d) {
			var f = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
				h = /^mailto:/i,
				p = x.$$minErr("linky"),
				m = x.isDefined,
				g = x.isFunction,
				v = x.isObject,
				y = x.isString;
			return function(e, r, t) {
				if (null == e || "" === e) return e;
				if (!y(e)) throw p("notstring", "Expected string but received: {0}", e);
				for (var n, i, o, a = g(t) ? t : v(t) ? function() {
						return t
					} : function() {
						return {}
					}, s = e, l = []; n = s.match(f);) i = n[0], n[2] || n[4] || (i = (n[3] ? "http://" : "mailto:") + i), o = n.index, u(s.substr(0, o)), c(i, n[0].replace(h, "")), s = s.substring(o + n[0].length);
				return u(s), d(l.join(""));

				function u(e) {
					var t, n;
					e && l.push((t = e, P(n = [], _).chars(t), n.join("")))
				}

				function c(e, t) {
					var n, i = a(e);
					for (n in l.push("<a "), i) l.push(n + '="' + i[n] + '" ');
					!m(r) || "target" in i || l.push('target="', r, '" '), l.push('href="', e.replace(/"/g, "&quot;"), '">'), u(t), l.push("</a>")
				}
			}
		}])
	}(window, window.angular), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function(i) {
		return function(e, t) {
			if ("__setXHR_" === e) {
				var n = t(this);
				n instanceof Function && n(this)
			} else i.apply(this, arguments)
		}
	}(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
ngFileUpload.version = "12.2.13", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function(s, e, l) {
		var u = this;
		u.promisesCount = 0, this.isResumeSupported = function() {
			return window.Blob && window.Blob.prototype.slice
		};
		var c = this.isResumeSupported();

		function t(n) {
			n.method = n.method || "POST", n.headers = n.headers || {};
			var i = n._deferred = n._deferred || e.defer(),
				r = i.promise;

			function o(e) {
				i.notify && i.notify(e), r.progressFunc && l(function() {
					r.progressFunc(e)
				})
			}

			function t(e) {
				return null != n._start && c ? {
					loaded: e.loaded + n._start,
					total: n._file && n._file.size || e.total,
					type: e.type,
					config: n,
					lengthComputable: !0,
					target: e.target
				} : e
			}

			function a() {
				s(n).then(function(e) {
					if (c && n._chunkSize && !n._finished && n._file) {
						var t = n._file && n._file.size || 0;
						o({
							loaded: Math.min(n._end, t),
							total: t,
							config: n,
							type: "progress"
						}), u.upload(n, !0)
					} else n._finished && delete n._finished, i.resolve(e)
				}, function(e) {
					i.reject(e)
				}, function(e) {
					i.notify(e)
				})
			}
			return n.disableProgress || (n.headers.__setXHR_ = function() {
				return function(e) {
					e && e.upload && e.upload.addEventListener && (n.__XHR = e, n.xhrFn && n.xhrFn(e), e.upload.addEventListener("progress", function(e) {
						e.config = n, o(t(e))
					}, !1), e.upload.addEventListener("load", function(e) {
						e.lengthComputable && (e.config = n, o(t(e)))
					}, !1))
				}
			}), c ? n._chunkSize && n._end && !n._finished ? (n._start = n._end, n._end += n._chunkSize, a()) : n.resumeSizeUrl ? s.get(n.resumeSizeUrl).then(function(e) {
				n.resumeSizeResponseReader ? n._start = n.resumeSizeResponseReader(e.data) : n._start = parseInt((null == e.data.size ? e.data : e.data.size).toString()), n._chunkSize && (n._end = n._start + n._chunkSize), a()
			}, function(e) {
				throw e
			}) : n.resumeSize ? n.resumeSize().then(function(e) {
				n._start = e, n._chunkSize && (n._end = n._start + n._chunkSize), a()
			}, function(e) {
				throw e
			}) : (n._chunkSize && (n._start = 0, n._end = n._start + n._chunkSize), a()) : a(), r.success = function(t) {
				return r.then(function(e) {
					t(e.data, e.status, e.headers, n)
				}), r
			}, r.error = function(t) {
				return r.then(null, function(e) {
					t(e.data, e.status, e.headers, n)
				}), r
			}, r.progress = function(t) {
				return r.progressFunc = t, r.then(null, null, function(e) {
					t(e)
				}), r
			}, r.abort = r.pause = function() {
				return n.__XHR && l(function() {
					n.__XHR.abort()
				}), r
			}, r.xhr = function(e) {
				var t;
				return n.xhrFn = (t = n.xhrFn, function() {
					t && t.apply(r, arguments), e.apply(r, arguments)
				}), r
			}, u.promisesCount++, r.finally && r.finally instanceof Function && r.finally(function() {
				u.promisesCount--
			}), r
		}

		function n(e) {
			var t = {};
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
			return t
		}
		this.isUploadInProgress = function() {
			return 0 < u.promisesCount
		}, this.rename = function(e, t) {
			return e.ngfName = t, e
		}, this.jsonBlob = function(e) {
			null == e || angular.isString(e) || (e = JSON.stringify(e));
			var t = new window.Blob([e], {
				type: "application/json"
			});
			return t._ngfBlob = !0, t
		}, this.json = function(e) {
			return angular.toJson(e)
		}, this.isFile = function(e) {
			return null != e && (e instanceof window.Blob || e.flashId && e.name && e.size)
		}, this.upload = function(s, e) {
			function l(e, t, n) {
				if (void 0 !== t)
					if (angular.isDate(t) && (t = t.toISOString()), angular.isString(t)) e.append(n, t);
					else if (u.isFile(t)) {
					var i = function(e, t) {
							if (e._ngfBlob) return e;
							if (s._file = s._file || e, null != s._start && c) {
								s._end && s._end >= e.size && (s._finished = !0, s._end = e.size);
								var n = e.slice(s._start, s._end || e.size);
								return n.name = e.name, n.ngfName = e.ngfName, s._chunkSize && (t.append("_chunkSize", s._chunkSize), t.append("_currentChunkSize", s._end - s._start), t.append("_chunkNumber", Math.floor(s._start / s._chunkSize)), t.append("_totalSize", s._file.size)), n
							}
							return e
						}(t, e),
						r = n.split(",");
					r[1] && (i.ngfName = r[1].replace(/^\s+|\s+$/g, ""), n = r[0]), s._fileKey = s._fileKey || n, e.append(n, i, i.ngfName || i.name)
				} else if (angular.isObject(t)) {
					if (t.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + n;
					t.$$ngfCircularDetection = !0;
					try {
						for (var o in t)
							if (t.hasOwnProperty(o) && "$$ngfCircularDetection" !== o) {
								var a = null == s.objectKey ? "[i]" : s.objectKey;
								t.length && -1 < parseInt(o) && (a = null == s.arrayKey ? a : s.arrayKey), l(e, t[o], n + a.replace(/[ik]/g, o))
							}
					} finally {
						delete t.$$ngfCircularDetection
					}
				} else e.append(n, t)
			}
			return e || (s = n(s)), s._isDigested || (s._isDigested = !0, s._chunkSize = u.translateScalars(s.resumeChunkSize), s._chunkSize = s._chunkSize ? parseInt(s._chunkSize.toString()) : null, s.headers = s.headers || {}, s.headers["Content-Type"] = void 0, s.transformRequest = s.transformRequest ? angular.isArray(s.transformRequest) ? s.transformRequest : [s.transformRequest] : [], s.transformRequest.push(function(e) {
				var t, n = new window.FormData;
				for (t in e = e || s.fields || {}, s.file && (e.file = s.file), e)
					if (e.hasOwnProperty(t)) {
						var i = e[t];
						s.formDataAppender ? s.formDataAppender(n, t, i) : l(n, i, t)
					} return n
			})), t(s)
		}, this.http = function(e) {
			return (e = n(e)).transformRequest = e.transformRequest || function(e) {
				return window.ArrayBuffer && e instanceof window.ArrayBuffer || e instanceof window.Blob ? e : s.defaults.transformRequest[0].apply(this, arguments)
			}, e._chunkSize = u.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, t(e)
		}, this.translateScalars = function(e) {
			if (angular.isString(e)) {
				if (e.search(/kb/i) === e.length - 2) return parseFloat(1024 * e.substring(0, e.length - 2));
				if (e.search(/mb/i) === e.length - 2) return parseFloat(1048576 * e.substring(0, e.length - 2));
				if (e.search(/gb/i) === e.length - 2) return parseFloat(1073741824 * e.substring(0, e.length - 2));
				if (e.search(/b/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
				if (e.search(/s/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
				if (e.search(/m/i) === e.length - 1) return parseFloat(60 * e.substring(0, e.length - 1));
				if (e.search(/h/i) === e.length - 1) return parseFloat(3600 * e.substring(0, e.length - 1))
			}
			return e
		}, this.urlToBlob = function(o) {
			var a = e.defer();
			return s({
				url: o,
				method: "get",
				responseType: "arraybuffer"
			}).then(function(e) {
				var t = new Uint8Array(e.data),
					n = e.headers("content-type") || "image/WebP",
					i = new window.Blob([t], {
						type: n
					}),
					r = o.match(/.*\/(.+?)(\?.*)?$/);
				1 < r.length && (i.name = r[1]), a.resolve(i)
			}, function(e) {
				a.reject(e)
			}), a.promise
		}, this.setDefaults = function(e) {
			this.defaults = e || {}
		}, this.defaults = {}, this.version = ngFileUpload.version
	}]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function(x, S, e, E, t) {
		var C = t;

		function k(i, r, o, a, s) {
			var l = [C.emptyPromise()];

			function e(n, t) {
				if (0 === n.type.indexOf("image")) {
					if (i.pattern && !C.validatePattern(n, i.pattern)) return;
					i.resizeIf = function(e, t) {
						return C.attrGetter("ngfResizeIf", o, a, {
							$width: e,
							$height: t,
							$file: n
						})
					};
					var e = C.resize(n, i);
					l.push(e), e.then(function(e) {
						r.splice(t, 1, e)
					}, function(e) {
						n.$error = "resize", (n.$errorMessages = n.$errorMessages || {}).resize = !0, n.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (n && n.name), s.$ngfValidations.push({
							name: "resize",
							valid: !1
						}), C.applyModelValidation(s, r)
					})
				}
			}
			for (var t = 0; t < r.length; t++) e(r[t], t);
			return E.all(l)
		}
		return C.getAttrWithDefaults = function(e, t) {
			if (null != e[t]) return e[t];
			var n = C.defaults[t];
			return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
		}, C.attrGetter = function(e, t, n, i) {
			var r = this.getAttrWithDefaults(t, e);
			if (!n) return r;
			try {
				return i ? x(r)(n, i) : x(r)(n)
			} catch (t) {
				if (e.search(/min|max|pattern/i)) return r;
				throw t
			}
		}, C.shouldUpdateOn = function(e, t, n) {
			var i = C.attrGetter("ngfModelOptions", t, n);
			return !i || !i.updateOn || -1 < i.updateOn.split(" ").indexOf(e)
		}, C.emptyPromise = function() {
			var e = E.defer(),
				t = arguments;
			return S(function() {
				e.resolve.apply(e, t)
			}), e.promise
		}, C.rejectPromise = function() {
			var e = E.defer(),
				t = arguments;
			return S(function() {
				e.reject.apply(e, t)
			}), e.promise
		}, C.happyPromise = function(e, t) {
			var n = E.defer();
			return e.then(function(e) {
				n.resolve(e)
			}, function(e) {
				S(function() {
					throw e
				}), n.resolve(t)
			}), n.promise
		}, C.updateModel = function(l, u, c, d, a, f, t) {
			function s(e, t, n, i, r) {
				u.$$ngfPrevValidFiles = e, u.$$ngfPrevInvalidFiles = t;
				var o = e && e.length ? e[0] : null,
					a = t && t.length ? t[0] : null;
				l && (C.applyModelValidation(l, e), l.$setViewValue(r ? o : e)), d && x(d)(c, {
					$files: e,
					$file: o,
					$newFiles: n,
					$duplicateFiles: i,
					$invalidFiles: t,
					$invalidFile: a,
					$event: f
				});
				var s = C.attrGetter("ngfModelInvalid", u);
				s && S(function() {
					x(s).assign(c, r ? a : t)
				}), S(function() {})
			}
			var h, o, p, e, m = [],
				g = [],
				v = [];

			function y() {
				function i() {
					S(function() {
						s(n ? o.concat(v) : v, n ? p.concat(g) : g, a, m, b)
					}, $ && $.debounce ? $.debounce.change || $.debounce : 0)
				}
				var r = w ? h : v;
				(function(t, n, i, r) {
					var e = C.attrGetter("ngfResize", n, i);
					if (!e || !C.isResizeSupported() || !t.length) return C.emptyPromise();
					if (e instanceof Function) {
						var o = E.defer();
						return e(t).then(function(e) {
							k(e, t, n, i, r).then(function(e) {
								o.resolve(e)
							}, function(e) {
								o.reject(e)
							})
						}, function(e) {
							o.reject(e)
						})
					}
					return k(e, t, n, i, r)
				})(r, u, c, l).then(function() {
					w ? C.validate(h, n ? o.length : 0, l, u, c).then(function(e) {
						v = e.validsFiles, g = e.invalidsFiles, i()
					}) : i()
				}, function() {
					for (var e = 0; e < r.length; e++) {
						var t = r[e];
						if ("resize" === t.$error) {
							var n = v.indexOf(t); - 1 < n && (v.splice(n, 1), g.push(t)), i()
						}
					}
				})
			}
			o = u.$$ngfPrevValidFiles || [], p = u.$$ngfPrevInvalidFiles || [], l && l.$modelValue && (e = l.$modelValue, o = angular.isArray(e) ? e : [e]);
			var n = C.attrGetter("ngfKeep", u, c);
			h = (a || []).slice(0), "distinct" !== n && !0 !== C.attrGetter("ngfKeepDistinct", u, c) || function() {
				function n(e, t) {
					return e.name === t.name && (e.$ngfOrigSize || e.size) === (t.$ngfOrigSize || t.size) && e.type === t.type
				}

				function e(e) {
					var t;
					for (t = 0; t < o.length; t++)
						if (n(e, o[t])) return !0;
					for (t = 0; t < p.length; t++)
						if (n(e, p[t])) return !0;
					return !1
				}
				if (a) {
					h = [], m = [];
					for (var t = 0; t < a.length; t++) e(a[t]) ? m.push(a[t]) : h.push(a[t])
				}
			}();
			var b = !n && !C.attrGetter("ngfMultiple", u, c) && !C.attrGetter("multiple", u);
			if (!n || h.length) {
				C.attrGetter("ngfBeforeModelChange", u, c, {
					$files: a,
					$file: a && a.length ? a[0] : null,
					$newFiles: h,
					$duplicateFiles: m,
					$event: f
				});
				var w = C.attrGetter("ngfValidateAfterResize", u, c),
					$ = C.attrGetter("ngfModelOptions", u, c);
				C.validate(h, n ? o.length : 0, l, u, c).then(function(e) {
					var n, i, r, o;
					t ? s(h, [], a, m, b) : ($ && $.allowInvalid || w ? v = h : (v = e.validFiles, g = e.invalidFiles), C.attrGetter("ngfFixOrientation", u, c) && C.isExifSupported() ? (n = v, i = u, r = c, o = [C.emptyPromise()], angular.forEach(n, function(e, t) {
						0 === e.type.indexOf("image/jpeg") && C.attrGetter("ngfFixOrientation", i, r, {
							$file: e
						}) && o.push(C.happyPromise(C.applyExifRotation(e), e).then(function(e) {
							n.splice(t, 1, e)
						}))
					}), E.all(o)).then(function() {
						y()
					}) : y())
				})
			}
		}, C
	}]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function(e, r, t, v) {
		var y = [];
		return {
			restrict: "AEC",
			require: "?ngModel",
			link: function(e, t, n, i) {
				! function(r, o, a, s, e, t, n, l) {
					var i = function(e, t) {
						return l.attrGetter(e, a, t)
					};

					function u() {
						return "input" === o[0].tagName.toLowerCase() && a.type && "file" === a.type.toLowerCase()
					}

					function c() {
						return i("ngfChange") || i("ngfSelect")
					}

					function d(e) {
						if (l.shouldUpdateOn("change", a, r)) {
							var t = e.__files_ || e.target && e.target.files,
								n = [];
							if (!t) return;
							for (var i = 0; i < t.length; i++) n.push(t[i]);
							l.updateModel(s, a, r, c(), n.length ? n : null, e)
						}
					}
					l.registerModelChangeValidator(s, a, r);
					var f = [];
					i("ngfMultiple") && f.push(r.$watch(i("ngfMultiple"), function() {
						m.attr("multiple", i("ngfMultiple", r))
					})), i("ngfCapture") && f.push(r.$watch(i("ngfCapture"), function() {
						m.attr("capture", i("ngfCapture", r))
					})), i("ngfAccept") && f.push(r.$watch(i("ngfAccept"), function() {
						m.attr("accept", i("ngfAccept", r))
					})), f.push(a.$observe("accept", function() {
						m.attr("accept", i("accept"))
					}));
					var h = 0,
						p = 0,
						m = o;

					function g(e) {
						l.shouldUpdateOn("click", a, r) && m.val() && (m.val(null), l.updateModel(s, a, r, c(), null, e, !0))
					}
					u() || (m = function() {
						if (u()) return o;
						var e = angular.element('<input type="file">'),
							t = angular.element("<label>upload</label>");
						return t.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"),
							function(t, n) {
								function e(e) {
									t.attr("id", "ngf-" + e), n.attr("id", "ngf-label-" + e)
								}
								for (var i = 0; i < o[0].attributes.length; i++) {
									var r = o[0].attributes[i];
									"type" !== r.name && "class" !== r.name && "style" !== r.name && ("id" === r.name ? (e(r.value), f.push(a.$observe("id", e))) : t.attr(r.name, r.value || "required" !== r.name && "multiple" !== r.name ? r.value : r.name))
								}
							}(e, t), y.push({
								el: o,
								ref: t
							}), document.body.appendChild(t.append(e)[0]), e
					}()), m.bind("change", d), u() ? o.bind("click", g) : o.bind("click touchstart touchend", function(e) {
						if (o.attr("disabled")) return !1;
						if (!i("ngfSelectDisabled", r)) {
							var t = function(e) {
								var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
								if (t) {
									if ("touchstart" === e.type) return p = t[0].clientX, h = t[0].clientY, !0;
									if ("touchend" === e.type) {
										var n = t[0].clientX,
											i = t[0].clientY;
										if (20 < Math.abs(n - p) || 20 < Math.abs(i - h)) return e.stopPropagation(), e.preventDefault(), !1
									}
									return !0
								}
							}(e);
							if (null != t) return t;
							g(e);
							try {
								u() || document.body.contains(m[0]) || (y.push({
									el: o,
									ref: m.parent()
								}), document.body.appendChild(m.parent()[0]), m.bind("change", d))
							} catch (e) {}
							return function(e) {
								var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
								if (t && 2 < t.length) {
									var n = v.defaults.androidFixMinorVersion || 4;
									return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
								}
								return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
							}(navigator.userAgent) ? setTimeout(function() {
								m[0].click()
							}, 0) : m[0].click(), !1
						}
					}), -1 !== navigator.appVersion.indexOf("MSIE 10") && m.bind("click", function e(t) {
						if (m && !m.attr("__ngf_ie10_Fix_")) {
							if (!m[0].parentNode) return void(m = null);
							t.preventDefault(), t.stopPropagation(), m.unbind("click");
							var n = m.clone();
							return m.replaceWith(n), (m = n).attr("__ngf_ie10_Fix_", "true"), m.bind("change", d), m.bind("click", e), m[0].click(), !1
						}
						m.removeAttr("__ngf_ie10_Fix_")
					}), s && s.$formatters.push(function(e) {
						return null != e && 0 !== e.length || m.val() && m.val(null), e
					}), r.$on("$destroy", function() {
						u() || m.parent().remove(), angular.forEach(f, function(e) {
							e()
						})
					}), t(function() {
						for (var e = 0; e < y.length; e++) {
							var t = y[e];
							document.body.contains(t.el[0]) || (y.splice(e, 1), t.ref.remove())
						}
					}), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(o, m, d)
				}(e, t, n, i, 0, r, 0, v)
			}
		}
	}]),
	function() {
		function a(r, e, o, a, s, l, u, c) {
			function d(t) {
				var n = r.attrGetter("ngfNoObjectUrl", s, o);
				r.dataUrl(t, n).finally(function() {
					e(function() {
						var e = (n ? t.$ngfDataUrl : t.$ngfBlobUrl) || t.$ngfDataUrl;
						c ? a.css("background-image", "url('" + (e || "") + "')") : a.attr("src", e), e ? a.removeClass("ng-hide") : a.addClass("ng-hide")
					})
				})
			}
			e(function() {
				var e = o.$watch(s[l], function(n) {
					var e, t = u;
					if ("ngfThumbnail" === l && (t || (t = {
							width: a[0].naturalWidth || a[0].clientWidth,
							height: a[0].naturalHeight || a[0].clientHeight
						}), 0 === t.width && window.getComputedStyle)) {
						var i = getComputedStyle(a[0]);
						i.width && -1 < i.width.indexOf("px") && i.height && -1 < i.height.indexOf("px") && (t = {
							width: parseInt(i.width.slice(0, -2)),
							height: parseInt(i.height.slice(0, -2))
						})
					}
					if (angular.isString(n)) return a.removeClass("ng-hide"), c ? a.css("background-image", "url('" + n + "')") : a.attr("src", n);
					!n || !n.type || 0 !== n.type.search("img" === (e = a[0]).tagName.toLowerCase() ? "image" : "audio" === e.tagName.toLowerCase() ? "audio" : "video" === e.tagName.toLowerCase() ? "video" : /./) || c && 0 !== n.type.indexOf("image") ? a.addClass("ng-hide") : t && r.isResizeSupported() ? (t.resizeIf = function(e, t) {
						return r.attrGetter("ngfResizeIf", s, o, {
							$width: e,
							$height: t,
							$file: n
						})
					}, r.resize(n, t).then(function(e) {
						d(e)
					}, function(e) {
						throw e
					})) : d(n)
				});
				o.$on("$destroy", function() {
					e()
				})
			})
		}
		ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function(e, n, s) {
			var l = e;
			return l.base64DataUrl = function(n) {
				if (angular.isArray(n)) {
					var i = s.defer(),
						r = 0;
					return angular.forEach(n, function(e) {
						l.dataUrl(e, !0).finally(function() {
							if (++r === n.length) {
								var t = [];
								angular.forEach(n, function(e) {
									t.push(e.$ngfDataUrl)
								}), i.resolve(t, n)
							}
						})
					}), i.promise
				}
				return l.dataUrl(n, !0)
			}, l.dataUrl = function(o, t) {
				if (!o) return l.emptyPromise(o, o);
				if (t && null != o.$ngfDataUrl || !t && null != o.$ngfBlobUrl) return l.emptyPromise(t ? o.$ngfDataUrl : o.$ngfBlobUrl, o);
				var e = t ? o.$$ngfDataUrlPromise : o.$$ngfBlobUrlPromise;
				if (e) return e;
				var a = s.defer();
				return n(function() {
					if (window.FileReader && o && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || o.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || o.size < 4e6)) {
						var i = window.URL || window.webkitURL;
						if (i && i.createObjectURL && !t) {
							var r;
							try {
								r = i.createObjectURL(o)
							} catch (e) {
								return void n(function() {
									o.$ngfBlobUrl = "", a.reject()
								})
							}
							n(function() {
								if (o.$ngfBlobUrl = r) {
									a.resolve(r, o), l.blobUrls = l.blobUrls || [], l.blobUrlsTotalSize = l.blobUrlsTotalSize || 0, l.blobUrls.push({
										url: r,
										size: o.size
									}), l.blobUrlsTotalSize += o.size || 0;
									for (var e = l.defaults.blobUrlsMaxMemory || 268435456, t = l.defaults.blobUrlsMaxQueueSize || 200;
										(l.blobUrlsTotalSize > e || l.blobUrls.length > t) && 1 < l.blobUrls.length;) {
										var n = l.blobUrls.splice(0, 1)[0];
										i.revokeObjectURL(n.url), l.blobUrlsTotalSize -= n.size
									}
								}
							})
						} else {
							var e = new FileReader;
							e.onload = function(e) {
								n(function() {
									o.$ngfDataUrl = e.target.result, a.resolve(e.target.result, o), n(function() {
										delete o.$ngfDataUrl
									}, 1e3)
								})
							}, e.onerror = function() {
								n(function() {
									o.$ngfDataUrl = "", a.reject()
								})
							}, e.readAsDataURL(o)
						}
					} else n(function() {
						o[t ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", a.reject()
					})
				}), (e = t ? o.$$ngfDataUrlPromise = a.promise : o.$$ngfBlobUrlPromise = a.promise).finally(function() {
					delete o[t ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
				}), e
			}, l
		}]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function(i, r) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					a(i, r, e, t, n, "ngfSrc", i.attrGetter("ngfResize", n, e), !1)
				}
			}
		}]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function(i, r) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					a(i, r, e, t, n, "ngfBackground", i.attrGetter("ngfResize", n, e), !0)
				}
			}
		}]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function(r, o) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					var i = r.attrGetter("ngfSize", n, e);
					a(r, o, e, t, n, "ngfThumbnail", i, r.attrGetter("ngfAsBackground", n, e))
				}
			}
		}]), ngFileUpload.config(["$compileProvider", function(e) {
			e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)
		}]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function(r, o) {
			return function(e, t, n) {
				if (angular.isString(e)) return o.trustAsResourceUrl(e);
				var i = e && ((t ? e.$ngfDataUrl : e.$ngfBlobUrl) || e.$ngfDataUrl);
				return e && !i ? (!e.$ngfDataUrlFilterInProgress && angular.isObject(e) && (e.$ngfDataUrlFilterInProgress = !0, r.dataUrl(e, t)), "") : (e && delete e.$ngfDataUrlFilterInProgress, (e && i ? n ? o.trustAsResourceUrl(i) : i : e) || "")
			}
		}])
	}(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function(e, v, s) {
		var y = e;
		return y.validatePattern = function(e, t) {
			if (!t) return !0;
			var n = function e(t) {
					var n = "",
						i = [];
					if (2 < t.length && "/" === t[0] && "/" === t[t.length - 1]) n = t.substring(1, t.length - 1);
					else {
						var r = t.split(",");
						if (1 < r.length)
							for (var o = 0; o < r.length; o++) {
								var a = e(r[o]);
								a.regexp ? (n += "(" + a.regexp + ")", o < r.length - 1 && (n += "|")) : i = i.concat(a.excludes)
							} else 0 === t.indexOf("!") ? i.push("^((?!" + e(t.substring(1)).regexp + ").)*$") : (0 === t.indexOf(".") && (t = "*" + t), n = (n = "^" + t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$").replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
					}
					return {
						regexp: n,
						excludes: i
					}
				}(t),
				i = !0;
			if (n.regexp && n.regexp.length) {
				var r = new RegExp(n.regexp, "i");
				i = null != e.type && r.test(e.type) || null != e.name && r.test(e.name)
			}
			for (var o = n.excludes.length; o--;) {
				var a = new RegExp(n.excludes[o], "i");
				i = i && (null == e.type || a.test(e.type)) && (null == e.name || a.test(e.name))
			}
			return i
		}, y.ratioToFloat = function(e) {
			var t = e.toString(),
				n = t.search(/[x:]/i);
			return -1 < n ? parseFloat(t.substring(0, n)) / parseFloat(t.substring(n + 1)) : parseFloat(t)
		}, y.registerModelChangeValidator = function(n, i, r) {
			n && n.$formatters.push(function(e) {
				if (n.$dirty) {
					var t = e;
					e && !angular.isArray(e) && (t = [e]), y.validate(t, 0, n, i, r).then(function() {
						y.applyModelValidation(n, t)
					})
				}
				return e
			})
		}, y.applyModelValidation = function(t, e) {
			var n;
			n = t, null == e || n.$dirty || (n.$setDirty ? n.$setDirty() : n.$dirty = !0), angular.forEach(t.$ngfValidations, function(e) {
				t.$setValidity(e.name, e.valid)
			})
		}, y.getValidationAttr = function(e, t, n, i, r) {
			var o = "ngf" + n[0].toUpperCase() + n.substr(1),
				a = y.attrGetter(o, e, t, {
					$file: r
				});
			if (null == a && (a = y.attrGetter("ngfValidate", e, t, {
					$file: r
				}))) {
				var s = (i || n).split(".");
				a = a[s[0]], 1 < s.length && (a = a && a[s[1]])
			}
			return a
		}, y.validate = function(u, i, c, d, f) {
			(c = c || {}).$ngfValidations = c.$ngfValidations || [], angular.forEach(c.$ngfValidations, function(e) {
				e.valid = !0
			});
			var h = function(e, t) {
					return y.attrGetter(e, d, f, t)
				},
				p = (y.attrGetter("ngfIgnoreInvalid", d, f) || "").split(" "),
				m = y.attrGetter("ngfRunAllValidations", d, f);
			if (null == u || 0 === u.length) return y.emptyPromise({
				validFiles: u,
				invalidFiles: []
			});
			u = void 0 === u.length ? [u] : u.slice(0);
			var g = [];

			function t(e, t, n) {
				if (u) {
					for (var i = u.length, r = null; i--;) {
						var o = u[i];
						if (o) {
							var a = y.getValidationAttr(d, f, e, t, o);
							null != a && (n(o, a, i) || (-1 === p.indexOf(e) ? (o.$error = e, (o.$errorMessages = o.$errorMessages || {})[e] = !0, o.$errorParam = a, -1 === g.indexOf(o) && g.push(o), m || u.splice(i, 1), r = !1) : u.splice(i, 1)))
						}
					}
					null !== r && c.$ngfValidations.push({
						name: e,
						valid: r
					})
				}
			}
			t("pattern", null, y.validatePattern), t("minSize", "size.min", function(e, t) {
				return e.size + .1 >= y.translateScalars(t)
			}), t("maxSize", "size.max", function(e, t) {
				return e.size - .1 <= y.translateScalars(t)
			});
			var n = 0;
			if (t("maxTotalSize", null, function(e, t) {
					return !((n += e.size) > y.translateScalars(t) && (u.splice(0, u.length), 1))
				}), t("validateFn", null, function(e, t) {
					return !0 === t || null === t || "" === t
				}), !u.length) return y.emptyPromise({
				validFiles: [],
				invalidFiles: g
			});

			function e(a, e, i, n, s) {
				function r(i, r, o) {
					function t(e) {
						if (e())
							if (-1 === p.indexOf(a)) {
								if (r.$error = a, (r.$errorMessages = r.$errorMessages || {})[a] = !0, r.$errorParam = o, -1 === g.indexOf(r) && g.push(r), !m) {
									var t = u.indexOf(r); - 1 < t && u.splice(t, 1)
								}
								i.resolve(!1)
							} else {
								var n = u.indexOf(r); - 1 < n && u.splice(n, 1), i.resolve(!0)
							}
						else i.resolve(!0)
					}
					null != o ? n(r, o).then(function(e) {
						t(function() {
							return !s(e, o)
						})
					}, function() {
						t(function() {
							return h("ngfValidateForce", {
								$file: r
							})
						})
					}) : i.resolve(!0)
				}
				var o = [y.emptyPromise(!0)];
				u && (u = void 0 === u.length ? [u] : u, angular.forEach(u, function(t) {
					var n = v.defer();
					o.push(n.promise), !i || null != t.type && 0 === t.type.search(i) ? "dimensions" === a && null != y.attrGetter("ngfDimensions", d) ? y.imageDimensions(t).then(function(e) {
						r(n, t, h("ngfDimensions", {
							$file: t,
							$width: e.width,
							$height: e.height
						}))
					}, function() {
						n.resolve(!1)
					}) : "duration" === a && null != y.attrGetter("ngfDuration", d) ? y.mediaDuration(t).then(function(e) {
						r(n, t, h("ngfDuration", {
							$file: t,
							$duration: e
						}))
					}, function() {
						n.resolve(!1)
					}) : r(n, t, y.getValidationAttr(d, f, a, e, t)) : n.resolve(!0)
				}));
				var l = v.defer();
				return v.all(o).then(function(e) {
					for (var t = !0, n = 0; n < e.length; n++)
						if (!e[n]) {
							t = !1;
							break
						} c.$ngfValidations.push({
						name: a,
						valid: t
					}), l.resolve(t)
				}), l.promise
			}
			var r = v.defer(),
				o = [];
			return o.push(e("maxHeight", "height.max", /image/, this.imageDimensions, function(e, t) {
				return e.height <= t
			})), o.push(e("minHeight", "height.min", /image/, this.imageDimensions, function(e, t) {
				return e.height >= t
			})), o.push(e("maxWidth", "width.max", /image/, this.imageDimensions, function(e, t) {
				return e.width <= t
			})), o.push(e("minWidth", "width.min", /image/, this.imageDimensions, function(e, t) {
				return e.width >= t
			})), o.push(e("dimensions", null, /image/, function(e, t) {
				return y.emptyPromise(t)
			}, function(e) {
				return e
			})), o.push(e("ratio", null, /image/, this.imageDimensions, function(e, t) {
				for (var n = t.toString().split(","), i = !1, r = 0; r < n.length; r++) Math.abs(e.width / e.height - y.ratioToFloat(n[r])) < .01 && (i = !0);
				return i
			})), o.push(e("maxRatio", "ratio.max", /image/, this.imageDimensions, function(e, t) {
				return e.width / e.height - y.ratioToFloat(t) < 1e-4
			})), o.push(e("minRatio", "ratio.min", /image/, this.imageDimensions, function(e, t) {
				return -1e-4 < e.width / e.height - y.ratioToFloat(t)
			})), o.push(e("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function(e, t) {
				return e <= y.translateScalars(t)
			})), o.push(e("minDuration", "duration.min", /audio|video/, this.mediaDuration, function(e, t) {
				return e >= y.translateScalars(t)
			})), o.push(e("duration", null, /audio|video/, function(e, t) {
				return y.emptyPromise(t)
			}, function(e) {
				return e
			})), o.push(e("validateAsyncFn", null, null, function(e, t) {
				return t
			}, function(e) {
				return !0 === e || null === e || "" === e
			})), v.all(o).then(function() {
				if (m)
					for (var e = 0; e < u.length; e++) u[e].$error && u.splice(e--, 1);
				m = !1, t("maxFiles", null, function(e, t, n) {
					return i + n < t
				}), r.resolve({
					validFiles: u,
					invalidFiles: g
				})
			}), r.promise
		}, y.imageDimensions = function(o) {
			if (o.$ngfWidth && o.$ngfHeight) {
				var e = v.defer();
				return s(function() {
					e.resolve({
						width: o.$ngfWidth,
						height: o.$ngfHeight
					})
				}), e.promise
			}
			if (o.$ngfDimensionPromise) return o.$ngfDimensionPromise;
			var a = v.defer();
			return s(function() {
				0 === o.type.indexOf("image") ? y.dataUrl(o).then(function(e) {
					var n = angular.element("<img>").attr("src", e).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");

					function t() {
						var e = n[0].naturalWidth || n[0].clientWidth,
							t = n[0].naturalHeight || n[0].clientHeight;
						n.remove(), o.$ngfWidth = e, o.$ngfHeight = t, a.resolve({
							width: e,
							height: t
						})
					}

					function i() {
						n.remove(), a.reject("load error")
					}
					n.on("load", t), n.on("error", i);
					var r = 0;
					! function e() {
						s(function() {
							n[0].parentNode && (n[0].clientWidth ? t() : 10 < r++ ? i() : e())
						}, 1e3)
					}(), angular.element(document.getElementsByTagName("body")[0]).append(n)
				}, function() {
					a.reject("load error")
				}) : a.reject("not image")
			}), o.$ngfDimensionPromise = a.promise, o.$ngfDimensionPromise.finally(function() {
				delete o.$ngfDimensionPromise
			}), o.$ngfDimensionPromise
		}, y.mediaDuration = function(i) {
			if (i.$ngfDuration) {
				var e = v.defer();
				return s(function() {
					e.resolve(i.$ngfDuration)
				}), e.promise
			}
			if (i.$ngfDurationPromise) return i.$ngfDurationPromise;
			var r = v.defer();
			return s(function() {
				0 === i.type.indexOf("audio") || 0 === i.type.indexOf("video") ? y.dataUrl(i).then(function(e) {
					var t = angular.element(0 === i.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", e).css("visibility", "none").css("position", "fixed");

					function n() {
						var e = t[0].duration;
						i.$ngfDuration = e, t.remove(), r.resolve(e)
					}
					t.on("loadedmetadata", n), t.on("error", function() {
							t.remove(), r.reject("load error")
						}),
						function e() {
							s(function() {
								t[0].parentNode && (t[0].duration ? n() : e())
							}, 1e3)
						}(), angular.element(document.body).append(t)
				}, function() {
					r.reject("load error")
				}) : r.reject("not media")
			}), i.$ngfDurationPromise = r.promise, i.$ngfDurationPromise.finally(function() {
				delete i.$ngfDurationPromise
			}), i.$ngfDurationPromise
		}, y
	}]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function(e, t) {
		var b = e;
		return b.dataUrltoBlob = function(e, t, n) {
			for (var i = e.split(","), r = i[0].match(/:(.*?);/)[1], o = atob(i[1]), a = o.length, s = new Uint8Array(a); a--;) s[a] = o.charCodeAt(a);
			var l = new window.Blob([s], {
				type: r
			});
			return l.name = t, l.$ngfOrigSize = n, l
		}, b.isResizeSupported = function() {
			var e = document.createElement("canvas");
			return window.atob && e.getContext && e.getContext("2d") && window.Blob
		}, b.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
			get: function() {
				return this.$ngfName
			},
			set: function(e) {
				this.$ngfName = e
			},
			configurable: !0
		}), b.resize = function(i, r) {
			if (0 !== i.type.indexOf("image")) return b.emptyPromise(i);
			var o = t.defer();
			return b.dataUrl(i, !0).then(function(n) {
				var e, u, c, d, f, h, p, m, g, v, y;
				(e = n, u = r.width, c = r.height, d = r.quality, f = r.type || i.type, h = r.ratio, p = r.centerCrop, m = r.resizeIf, g = t.defer(), v = document.createElement("canvas"), y = document.createElement("img"), y.setAttribute("style", "visibility:hidden;position:fixed;z-index:-100000"), document.body.appendChild(y), y.onload = function() {
					var e, t, n, i, r, o = y.width,
						a = y.height;
					if (y.parentNode.removeChild(y), null == m || !1 !== m(o, a)) try {
						if (h) {
							var s = b.ratioToFloat(h);
							o / a < s ? c = (u = o) / s : u = (c = a) * s
						}
						u || (u = o), c || (c = a);
						var l = (t = a, n = u, i = c, {
							width: (e = o) * (r = p ? Math.max(n / e, i / t) : Math.min(n / e, i / t)),
							height: t * r,
							marginX: e * r - n,
							marginY: t * r - i
						});
						v.width = Math.min(l.width, u), v.height = Math.min(l.height, c), v.getContext("2d").drawImage(y, Math.min(0, -l.marginX / 2), Math.min(0, -l.marginY / 2), l.width, l.height), g.resolve(v.toDataURL(f || "image/WebP", d || .934))
					} catch (e) {
						g.reject(e)
					} else g.reject("resizeIf")
				}, y.onerror = function() {
					y.parentNode.removeChild(y), g.reject()
				}, y.src = e, g.promise).then(function(e) {
					if ("image/jpeg" === i.type && !1 !== r.restoreExif) try {
						e = b.restoreExif(n, e)
					} catch (e) {
						setTimeout(function() {
							throw e
						}, 1)
					}
					try {
						var t = b.dataUrltoBlob(e, i.name, i.size);
						o.resolve(t)
					} catch (e) {
						o.reject(e)
					}
				}, function(e) {
					"resizeIf" === e && o.resolve(i), o.reject(e)
				})
			}, function(e) {
				o.reject(e)
			}), o.promise
		}, b
	}]),
	function() {
		function h() {
			var e = document.createElement("div");
			return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
		}
		ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$window", "Upload", "$http", "$q", function(r, o, a, s, e, l) {
			return {
				restrict: "AEC",
				require: "?ngModel",
				link: function(e, t, n, i) {
					! function(v, c, y, n, e, t, b, w, i, $) {
						var r = h(),
							x = function(e, t, n) {
								return w.attrGetter(e, y, t, n)
							};
						if (x("dropAvailable") && t(function() {
								v[x("dropAvailable")] ? v[x("dropAvailable")].value = r : v[x("dropAvailable")] = r
							}), !r) return !0 === x("ngfHideOnDropNotAvailable", v) && c.css("display", "none");

						function o() {
							return c.attr("disabled") || x("ngfDropDisabled", v)
						}
						null == x("ngfSelect") && w.registerModelChangeValidator(n, y, v);
						var d, a = null,
							s = e(x("ngfStopPropagation")),
							f = 1;

						function l(e, t, n) {
							if (e) {
								var i;
								try {
									i = e && e.getData && e.getData("text/html")
								} catch (e) {}(function(e, t, n, i) {
									var l = w.getValidationAttr(y, v, "maxFiles");
									null == l && (l = Number.MAX_VALUE);
									var u = w.getValidationAttr(y, v, "maxTotalSize");
									null == u && (u = Number.MAX_VALUE);
									var c = x("ngfIncludeDir", v),
										d = [],
										f = 0;

									function h(t, n) {
										var i = $.defer();
										if (null != t)
											if (t.isDirectory) {
												var r = [w.emptyPromise()];
												if (c) {
													var e = {
														type: "directory"
													};
													e.name = e.path = (n || "") + t.name, d.push(e)
												}
												var o = t.createReader(),
													a = [],
													s = function() {
														o.readEntries(function(e) {
															try {
																e.length ? (a = a.concat(Array.prototype.slice.call(e || [], 0)), s()) : (angular.forEach(a.slice(0), function(e) {
																	d.length <= l && f <= u && r.push(h(e, (n || "") + t.name + "/"))
																}), $.all(r).then(function() {
																	i.resolve()
																}, function(e) {
																	i.reject(e)
																}))
															} catch (e) {
																i.reject(e)
															}
														}, function(e) {
															i.reject(e)
														})
													};
												s()
											} else t.file(function(e) {
												try {
													e.path = (n || "") + e.name, c && (e = w.rename(e, e.path)), d.push(e), f += e.size, i.resolve()
												} catch (e) {
													i.reject(e)
												}
											}, function(e) {
												i.reject(e)
											});
										return i.promise
									}
									var r = [w.emptyPromise()];
									if (e && 0 < e.length && "file:" !== b.location.protocol)
										for (var o = 0; o < e.length; o++) {
											if (e[o].webkitGetAsEntry && e[o].webkitGetAsEntry() && e[o].webkitGetAsEntry().isDirectory) {
												var a = e[o].webkitGetAsEntry();
												if (a.isDirectory && !n) continue;
												null != a && r.push(h(a))
											} else {
												var s = e[o].getAsFile();
												null != s && (d.push(s), f += s.size)
											}
											if (d.length > l || u < f || !i && 0 < d.length) break
										} else if (null != t)
											for (var p = 0; p < t.length; p++) {
												var m = t.item(p);
												if ((m.type || 0 < m.size) && (d.push(m), f += m.size), d.length > l || u < f || !i && 0 < d.length) break
											}
									var g = $.defer();
									return $.all(r).then(function() {
										if (i || c || !d.length) g.resolve(d);
										else {
											for (var e = 0; d[e] && "directory" === d[e].type;) e++;
											g.resolve([d[e]])
										}
									}, function(e) {
										g.reject(e)
									}), g.promise
								})(e.items, e.files, !1 !== x("ngfAllowDir", v), x("multiple") || x("ngfMultiple", v)).then(function(e) {
									e.length ? u(e, t) : function(e, t) {
										if (!w.shouldUpdateOn(e, y, v) || "string" != typeof t) return w.rejectPromise([]);
										var i = [];
										t.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function(e, t, n) {
											i.push(n)
										});
										var n = [],
											r = [];
										if (i.length) {
											angular.forEach(i, function(e) {
												n.push(w.urlToBlob(e).then(function(e) {
													r.push(e)
												}))
											});
											var o = $.defer();
											return $.all(n).then(function() {
												o.resolve(r)
											}, function(e) {
												o.reject(e)
											}), o.promise
										}
										return w.emptyPromise()
									}(n, i).then(function(e) {
										u(e, t)
									})
								})
							}
						}

						function u(e, t) {
							w.updateModel(n, y, v, x("ngfChange") || x("ngfDrop"), e, t)
						}
						c[0].addEventListener("dragover", function(u) {
							if (!o() && w.shouldUpdateOn("drop", y, v)) {
								if (u.preventDefault(), s(v) && u.stopPropagation(), -1 < navigator.userAgent.indexOf("Chrome")) {
									var e = u.dataTransfer.effectAllowed;
									u.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy"
								}
								t.cancel(a), d || (d = "C", function(e, t, n, i) {
									var r = x("ngfDragOverClass", e, {
											$event: n
										}),
										o = "dragover";
									if (angular.isString(r)) o = r;
									else if (r && (r.delay && (f = r.delay), r.accept || r.reject)) {
										var a = n.dataTransfer.items;
										if (null != a && a.length)
											for (var s = r.pattern || x("ngfPattern", e, {
													$event: n
												}), l = a.length; l--;) {
												if (!w.validatePattern(a[l], s)) {
													o = r.reject;
													break
												}
												o = r.accept
											} else o = r.accept
									}
									d = o, c.addClass(d), x("ngfDrag", v, {
										$isDragging: !0,
										$class: d,
										$event: u
									})
								}(v, 0, u))
							}
						}, !1), c[0].addEventListener("dragenter", function(e) {
							!o() && w.shouldUpdateOn("drop", y, v) && (e.preventDefault(), s(v) && e.stopPropagation())
						}, !1), c[0].addEventListener("dragleave", function(e) {
							!o() && w.shouldUpdateOn("drop", y, v) && (e.preventDefault(), s(v) && e.stopPropagation(), a = t(function() {
								d && c.removeClass(d), d = null, x("ngfDrag", v, {
									$isDragging: !1,
									$event: e
								})
							}, f || 100))
						}, !1), c[0].addEventListener("drop", function(e) {
							!o() && w.shouldUpdateOn("drop", y, v) && (e.preventDefault(), s(v) && e.stopPropagation(), d && c.removeClass(d), d = null, l(e.dataTransfer, e, "dropUrl"))
						}, !1), c[0].addEventListener("paste", function(e) {
							-1 < navigator.userAgent.toLowerCase().indexOf("firefox") && x("ngfEnableFirefoxPaste", v) && e.preventDefault(), !o() && w.shouldUpdateOn("paste", y, v) && l(e.clipboardData || e.originalEvent.clipboardData, e, "pasteUrl")
						}, !1), -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && x("ngfEnableFirefoxPaste", v) && (c.attr("contenteditable", !0), c.on("keypress", function(e) {
							e.metaKey || e.ctrlKey || e.preventDefault()
						}))
					}(e, t, n, i, r, o, a, s, 0, l)
				}
			}
		}]), ngFileUpload.directive("ngfNoFileDrop", function() {
			return function(e, t) {
				h() && t.css("display", "none")
			}
		}), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function(r, o, a) {
			return function(e, t, n) {
				if (h()) {
					var i = r(a.attrGetter("ngfDropAvailable", n));
					o(function() {
						i(e), i.assign && i.assign(e, !0)
					})
				}
			}
		}])
	}(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function(e, i) {
		var l = e;
		return l.isExifSupported = function() {
			return window.FileReader && (new FileReader).readAsArrayBuffer && l.isResizeSupported()
		}, l.readOrientation = function(e) {
			var c = i.defer(),
				t = new FileReader,
				n = e.slice ? e.slice(0, 65536) : e;
			return t.readAsArrayBuffer(n), t.onerror = function(e) {
				return c.reject(e)
			}, t.onload = function(e) {
				var t = {
						orientation: 1
					},
					n = new DataView(this.result);
				if (65496 !== n.getUint16(0, !1)) return c.resolve(t);
				for (var i = n.byteLength, r = 2; r < i;) {
					var o = n.getUint16(r, !1);
					if (r += 2, 65505 === o) {
						if (1165519206 !== n.getUint32(r += 2, !1)) return c.resolve(t);
						var a = 18761 === n.getUint16(r += 6, !1);
						r += n.getUint32(r + 4, a);
						var s = n.getUint16(r, a);
						r += 2;
						for (var l = 0; l < s; l++)
							if (274 === n.getUint16(r + 12 * l, a)) {
								var u = n.getUint16(r + 12 * l + 8, a);
								return 2 <= u && u <= 8 && (n.setUint16(r + 12 * l + 8, 1, a), t.fixedArrayBuffer = e.target.result), t.orientation = u, c.resolve(t)
							}
					} else {
						if (65280 != (65280 & o)) break;
						r += n.getUint16(r, !1)
					}
				}
				return c.resolve(t)
			}, c.promise
		}, l.applyExifRotation = function(a) {
			if (0 !== a.type.indexOf("image/jpeg")) return l.emptyPromise(a);
			var s = i.defer();
			return l.readOrientation(a).then(function(o) {
				if (o.orientation < 2 || 8 < o.orientation) return s.resolve(a);
				l.dataUrl(a, !0).then(function(e) {
					var i = document.createElement("canvas"),
						r = document.createElement("img");
					r.onload = function() {
						try {
							i.width = 4 < o.orientation ? r.height : r.width, i.height = 4 < o.orientation ? r.width : r.height;
							var e = i.getContext("2d");
							! function(e, t, n, i) {
								switch (t) {
									case 2:
										return e.transform(-1, 0, 0, 1, n, 0);
									case 3:
										return e.transform(-1, 0, 0, -1, n, i);
									case 4:
										return e.transform(1, 0, 0, -1, 0, i);
									case 5:
										return e.transform(0, 1, 1, 0, 0, 0);
									case 6:
										return e.transform(0, 1, -1, 0, i, 0);
									case 7:
										return e.transform(0, -1, -1, 0, i, n);
									case 8:
										e.transform(0, -1, 1, 0, 0, n)
								}
							}(e, o.orientation, r.width, r.height), e.drawImage(r, 0, 0);
							var t = i.toDataURL(a.type || "image/WebP", .934);
							t = l.restoreExif(function(e) {
								for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
								return window.btoa(t)
							}(o.fixedArrayBuffer), t);
							var n = l.dataUrltoBlob(t, a.name);
							s.resolve(n)
						} catch (e) {
							return s.reject(e)
						}
					}, r.onerror = function() {
						s.reject()
					}, r.src = e
				}, function(e) {
					s.reject(e)
				})
			}, function(e) {
				s.reject(e)
			}), s.promise
		}, l.restoreExif = function(e, t) {
			return {
				KEY_STR: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				encode64: function(e) {
					for (var t, n, i, r, o, a = "", s = "", l = "", u = 0; i = (t = e[u++]) >> 2, r = (3 & t) << 4 | (n = e[u++]) >> 4, o = (15 & n) << 2 | (s = e[u++]) >> 6, l = 63 & s, isNaN(n) ? o = l = 64 : isNaN(s) && (l = 64), a = a + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l), t = n = s = "", i = r = o = l = "", u < e.length;);
					return a
				},
				restore: function(e, t) {
					e.match("data:image/jpeg;base64,") && (e = e.replace("data:image/jpeg;base64,", ""));
					var n = this.decode64(e),
						i = this.slice2Segments(n),
						r = this.exifManipulation(t, i);
					return "data:image/jpeg;base64," + this.encode64(r)
				},
				exifManipulation: function(e, t) {
					var n = this.getExifArray(t),
						i = this.insertExif(e, n);
					return new Uint8Array(i)
				},
				getExifArray: function(e) {
					for (var t, n = 0; n < e.length; n++)
						if (255 === (t = e[n])[0] & 225 === t[1]) return t;
					return []
				},
				insertExif: function(e, t) {
					var n = e.replace("data:image/jpeg;base64,", ""),
						i = this.decode64(n),
						r = i.indexOf(255, 3),
						o = i.slice(0, r),
						a = i.slice(r);
					return o.concat(t).concat(a)
				},
				slice2Segments: function(e) {
					for (var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) {
						if (255 === e[t] & 216 === e[t + 1]) t += 2;
						else {
							var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
								r = e.slice(t, i);
							n.push(r), t = i
						}
						if (t > e.length) break
					}
					return n
				},
				decode64: function(e) {
					var t, n, i, r, o = "",
						a = "",
						s = 0,
						l = [];
					for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, n = (15 & i) << 4 | (r = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, o = (3 & r) << 6 | (a = this.KEY_STR.indexOf(e.charAt(s++))), l.push(t), 64 !== r && l.push(n), 64 !== a && l.push(o), t = n = o = "", i = r = a = "", s < e.length;);
					return l
				}
			}.restore(e, t)
		}, l
	}]),
	function() {
		"use strict";
		angular.module("core.library.jsonrpc", ["ngFileUpload", "core.library.config"]).provider("jsonrpc", ["coreLibraryConfigProvider", function(e) {
			var t = this,
				g = [],
				v = {},
				n = 0;

			function u() {
				return e.isDevelopment()
			}

			function y() {
				return n++ + ""
			}
			this.defaults = v, t.addInterceptor = function(e, t) {
				return n = e, i = t, r = {
					injected: !1
				}, !!(angular.isString(n) || angular.isFunction(n) || angular.isArray(n) || angular.isObject(n)) && (angular.isObject(i) || (i = {}), r.interceptor = n, r.priority = angular.isNumber(i.priority) ? i.priority : 100, r.methods = angular.isDefined(i.methods) ? i.methods : "*.*", angular.isString(r.methods) && (r.methods = [r.methods]), g.push(r), !0);
				var n, i, r
			}, v.basePath = "/rpc", this.$get = ["$http", "$q", "$injector", "Upload", function(f, h, p, m) {
				var n;

				function s(e, t, n) {
					var i, r;
					if ("request" === n)
						for (i = t.length - 1; 0 <= i; i--)(t[i].request || t[i].requestError) && (e = e.then(t[i].request, t[i].requestError));
					if ("response" === n)
						for (i = 0, r = t.length; i < r; i++)(t[i].response || t[i].responseError) && (e = e.then(t[i].response, t[i].responseError));
					return e
				}

				function l(n, e, i) {
					var t, r, o, a, s = y(),
						l = {
							jsonrpc: "2.0",
							method: n.method,
							id: s
						},
						u = h.defer(),
						c = u.promise,
						d = [];
					return e = e || {}, v.BeforeRequest && v.BeforeRequest(l, n, e), angular.isDefined(n.data) && (l.params = n.data), angular.forEach(f.defaults.transformResponse, function(e) {
						d.push(e)
					}), d.push(function(e) {
						return e && e.id === s ? e : null
					}), a = (t = e.httpConfig || {}).transformResponse, angular.isArray(a) ? [].push.apply(d, a) : angular.isFunction(a) && d.push(a), t.transformResponse = d, o = n.path || v.basePath, t.headers = t.headers || {}, t.headers["X-Requested-With"] = t.headers["X-Requested-With"] || "XMLHttpRequest", t.method = "POST", t.url = o, t.data = l, i && (t.file = i), h.when(t).then(function(e) {
						var t = h.defer();
						return (i ? (n.progress && (r = n.progress, delete n.progress), m.upload(e).progress(function(e) {
							r instanceof Function && r.call(r, e)
						})) : f(e)).then(t.resolve, t.reject), t.promise
					}).then(function(e) {
						var t = e.data;
						return null === t ? (v.ErrorRequest && v.ErrorRequest(c, null), u.reject(null)) : t && t.hasOwnProperty("error") ? (v.ErrorRequest && v.ErrorRequest(c, t.error), u.reject(t.error)) : t && t.hasOwnProperty("result") ? (v.SuccessRequest && v.SuccessRequest(c, t.result), u.resolve(t.result)) : (v.ErrorRequest && v.ErrorRequest(c, t), u.reject(t)), e
					}, function(e) {
						return v.ErrorRequest && v.ErrorRequest(c, e.data), u.reject({
							code: e.status,
							message: "COMMON.MESSAGES.LOAD_DATA_FROM_SERVER_ERROR",
							type: "NETWORK",
							httpError: e
						}), e
					}), u.promise
				}

				function i(e, t) {
					this.serviceName = e, this.path = t
				}
				return n = "priority", g = g.sort(function(e, t) {
					return e[n] < t[n] ? -1 : e[n] > t[n] ? 1 : 0
				}), l.request = function(e, t, n, i) {
					return arguments.length < 4 && (i = n, n = t, t = e, e = null), l({
						path: e,
						method: t,
						data: n
					}, i)
				}, l.setBasePath = function(e) {
					return t.setBasePath(e)
				}, l.getBasePath = function() {
					return t.getBasePath()
				}, l.getRequestId = function() {
					return y()
				}, l.setBeforeRequest = function(e) {
					return t.setBeforeRequest(e)
				}, l.setEndSuccessRequest = function(e) {
					return t.setEndSuccessRequest(e)
				}, l.setEndErrorRequest = function(e) {
					return t.setEndErrorRequest(e)
				}, i.prototype.createMethod = function(e, o) {
					var a = this.path,
						d = this.serviceName + "." + e,
						t = function(e) {
							var t, n = function(e) {
									var t, n, i, r, o, a = d.split("."),
										s = a.pop(),
										l = a.join("."),
										u = [],
										c = g.length;
									for (o = 0; o < c; o++) n = !1, t = g[o].methods, angular.isFunction(t) ? n = t({
										service: l,
										method: s
									}) : (n |= -1 < t.indexOf("*"), n |= -1 < t.indexOf("*.*"), n |= -1 < t.indexOf(l + ".*"), n |= -1 < t.indexOf("*." + s), n |= -1 < t.indexOf(l + "." + s)), n && (r = g[o].injected, i = g[o].interceptor, r || (angular.isString(i) ? i = p.get(i) : angular.isObject(i) || (i = p.invoke(i)), g[o].injected = !0, g[o].interceptor = i), u.push(i));
									return u
								}(),
								i = {
									path: a,
									method: d,
									params: e,
									config: null
								},
								r = !!n.length;
							return o = o || {}, i.config = angular.copy(o), i.config.httpConfig = i.config.httpConfig || {}, t = h.when(i), r && (t = s(t, n, "request")), (t = t.then(function(o) {
								var e = h.defer();
								return t = l.request(o.path, o.method, o.params, o.config), r && (t = s(t = t.then(function(e) {
									return h.resolve({
										data: e,
										request: o
									})
								}, function(e) {
									return h.reject({
										error: e,
										request: o
									})
								}), n, "response")), (t = t.then(function(e) {
									return h.resolve((t = e, r = (n = o).config, angular.isObject(t) && angular.isDefined(t.data) && (t = t.data), r.transformResponse && (angular.isString(r.transformResponse) ? t instanceof(i = p.get(r.transformResponse)) || (t = new i(t, n)) : t = p.invoke(r.transformResponse, null, {
										response: t,
										request: n
									})), t));
									var t, n, i, r
								}, function(e) {
									return h.reject(e.error ? e.error : e)
								})).then(e.resolve, e.reject), e.promise
							}, function(e) {
								return h.reject(e)
							})).success = function(e) {
								return u() && console.warn('Some code call deprecated method "success" on ', d), t.then(e), this
							}, t.error = function(e) {
								return u() && console.warn('Some code call deprecated method "error" on ', d), t.then(null, e), this
							}, t.stopPropagation = function() {
								u() && console.warn('Some code call deprecated method "stopPropagation" on ', d)
							}, t
						};
					return t.__jsonRpcMethod = d, t
				}, i.prototype.createUploadMethod = function(e, r) {
					var o = this.path,
						a = this.serviceName + "." + e;
					return function(e, t, n) {
						var i;
						if (!e) throw "Property file not found";
						return (i = l({
							path: o,
							method: a,
							data: t,
							progress: n
						}, r, e)).success = function(e) {
							return u() && console.warn('Some code call deprecated method "success" on ', a), i.then(e), this
						}, i.error = function(e) {
							return u() && console.warn('Some code call deprecated method "error" on ', a), i.then(null, e), this
						}, i
					}
				}, l.newService = function(e, t) {
					return new i(e, t)
				}, l.createBatch = function() {
					function e() {}
					return e.prototype = {
						_requests: [],
						_callbacks: {},
						add: function(e, t) {
							var n = {
									jsonrpc: "2.0",
									id: y()
								},
								i = h.defer(),
								r = !1,
								o = i.promise,
								a = {
									success: function() {},
									error: function() {}
								};
							return angular.isFunction(e) && (e = e.__jsonRpcMethod), !!e && (n.method = e, angular.isDefined(t) && (n.params = t), o.success = function(e) {
								return a.success = e, this
							}, o.error = function(e) {
								return a.error = e, this
							}, o.then(function() {
								r || a.success.apply(null, arguments)
							}, function() {
								r || a.error.apply(null, arguments)
							}), o.stopPropagation = function() {
								r = !0
							}, this._requests.push(n), this._callbacks[n.id] = i, o)
						},
						isEmpty: function() {
							return !this._requests.length
						},
						doRequest: function() {
							var n = this,
								a = h.defer(),
								e = a.promise,
								t = !1,
								i = {
									success: function() {},
									error: function() {}
								},
								r = {
									method: "POST",
									url: v.basePath,
									headers: {
										"X-Requested-With": "XMLHttpRequest"
									},
									data: this._requests
								};
							if (e.success = function(e) {
									return i.success = e, this
								}, e.error = function(e) {
									return i.error = e, this
								}, e.then(function() {
									t || i.success.apply(null, arguments)
								}, function() {
									t || i.error.apply(null, arguments)
								}), e.stopPropagation = function() {
									t = !0
								}, this.isEmpty()) return a.resolve(), e;

							function s(e) {
								var t = n._callbacks[e.id];
								return !!t && (null === e ? t.reject(null) : e && e.hasOwnProperty("error") ? t.reject(e.error) : e && e.hasOwnProperty("result") ? t.resolve(e.result) : t.reject(e), !0)
							}
							return f(r).success(function(e, t, n, i) {
								var r, o;
								for (r = 0, o = e.length; r < o; r++) s(e[r]);
								a.resolve(e)
							}).error(function(e) {
								var t, n;
								for (t = 0, n = e.length; t < n; t++) s(e[t]);
								a.reject(e)
							}).finally(function() {
								n._requests = [], n._callbacks = {}
							}), e
						}
					}, new e
				}, l
			}], t.setBasePath = function(e) {
				return this.defaults.basePath = e, this
			}, t.getBasePath = function() {
				return this.defaults.basePath
			}, t.setBeforeRequest = function(e) {
				return this.defaults.BeforeRequest = e, this
			}, t.setEndSuccessRequest = function(e) {
				return this.defaults.SuccessRequest = e, this
			}, t.setEndErrorRequest = function(e) {
				return this.defaults.ErrorRequest = e, this
			}
		}])
	}(),
	function() {
		"use strict";
		try {
			angular.module("application.config.value")
		} catch (e) {
			angular.module("application.config.value", ["ng"]).constant("application.config.value", null)
		}
		angular.module("core.library.config", ["application.config.value"]).provider("coreLibraryConfig", ["application.config.value", function(e) {
			var t, n, i, r, o = this,
				a = {},
				s = "production",
				l = (new Date).getTime(),
				u = !1;

			function c(e, t) {
				var n, i, r = [],
					o = null;
				for (e && angular.isString(e) && (o = a, r = e.split("."), i = t ? r.length - 1 : r.length), n = 0; n < i; n++) {
					if (!r[n] || !o.hasOwnProperty(r[n])) {
						o = null;
						break
					}
					o = o[r[n]]
				}
				return t && o && o.hasOwnProperty(r[n]) && (o = o[r[n]] = angular.copy(t)), o
			}

			function d(e, t, n) {
				var i, r, o, a;
				if (angular.isNumber(t)) {
					if (isNaN(t)) return n;
					t += ""
				}
				if (!angular.isString(t) || t.length < 1) return n;
				if (angular.isDefined(e[t])) return e[t];
				a = t.split(".");
				try {
					for (r = e, i = 0, o = a.length; i < o; i++) angular.isDefined(r) && (r = r[a[i]]);
					if (angular.isDefined(r)) return r
				} catch (e) {}
				return n
			}

			function f(e, t, n) {
				var i, r, o, a;
				if (angular.isNumber(t)) {
					if (isNaN(t)) return !1;
					t += ""
				}
				if (!angular.isString(t) || t.length < 1) return !1;
				if (angular.isDefined(e[t])) return e[t] = n, !0;
				o = t.split(".");
				try {
					for (i = 0, r = o.length; i < r && (a = o[i], i !== r - 1); i++) {
						if (angular.isUndefined(e[a])) e[a] = {};
						else if (!angular.isObject(e[a]) || angular.isArray(e[a])) return !1;
						e = e[a]
					}
					e[a] = n
				} catch (e) {
					console.error(e)
				}
				return !0
			}

			function h(e, t, n) {
				var i, r, o, a;
				if (angular.isNumber(t)) {
					if (isNaN(t)) return !1;
					t += ""
				}
				if (!angular.isString(t) || t.length < 1) return !1;
				if (angular.isDefined(e[t])) return angular.extend(e[t], n), !0;
				o = t.split(".");
				try {
					for (i = 0, r = o.length; i < r && (a = o[i], i !== r - 1); i++) {
						if (angular.isUndefined(e[a])) e[a] = {};
						else if (!angular.isObject(e[a]) || angular.isArray(e[a])) return !1;
						e = e[a]
					}
					angular.extend(e[a], n)
				} catch (e) {
					console.error(e)
				}
				return !0
			}
			a = angular.isObject(e) ? e : app.config || a, angular.isDefined(a.env) && -1 !== ["development", "testing"].indexOf(a.env) && (s = a.env), t = "development" === s, n = "testing" === s, i = "production" === s, angular.isDefined(a.isDemoMode) && (u = a.isDemoMode), r = d(a, "settings.website.features"), angular.isString(r) && (r = angular.fromJson(r), angular.isObject(r) && (a.settings.website.features = r)), r = d(a, "__features__"), angular.isString(r) && (r = angular.fromJson(r), angular.isObject(r) && (a.__features__ = r)), this.isDevelopment = function() {
				return t
			}, this.isTesting = function() {
				return n
			}, this.isProduction = function() {
				return i
			}, this.isDemoMode = function() {
				return u
			}, this.getStage = function() {
				return s
			}, this.get = function(e, t) {
				var n;
				return (n = d(a, e, t)) && (n = angular.copy(n)), n
			}, this.exists = function(e) {
				return function(e, t) {
					var n, i, r;
					if (angular.isNumber(t)) {
						if (isNaN(t)) return !1;
						t += ""
					}
					if (!angular.isString(t) || t.length < 1) return !1;
					if (angular.isDefined(e[t])) return !0;
					for (n = 0, i = (r = t.split(".")).length; n < i; n++) {
						if (angular.isUndefined(e[r[n]])) return !1;
						e = e[r[n]]
					}
					return !0
				}(a, e)
			}, this.update = function(e, t) {
				try {
					t = angular.copy(t)
				} catch (e) {
					return !1
				}
				return app && app.config && f(app.config, e, t), f(a, e, t)
			}, this.extend = function(e, t) {
				try {
					t = angular.copy(t)
				} catch (e) {
					return !1
				}
				return app && app.config && h(app.config, e, t), h(a, e, t)
			}, this.getBuild = function() {
				return parseInt(d(a, "settings.system.build", l))
			}, this.getVersion = function() {
				return d(a, "settings.system.version", "3.1.6")
			}, this.key = function(e) {
				return a.hasOwnProperty(e) ? a[e] : null
			}, this.keyPath = function(e, t) {
				return c(e) || (angular.isDefined(t) ? t : null)
			}, this.setValueByPath = function(e, t) {
				return !(!angular.isDefined(t) || !c(e, t))
			}, this.$get = [function() {
				return {
					isDevelopment: o.isDevelopment,
					isTesting: o.isTesting,
					isProduction: o.isProduction,
					isDemoMode: o.isDemoMode,
					getStage: o.getStage,
					get: o.get,
					exists: o.exists,
					update: o.update,
					extend: o.extend,
					getBuild: o.getBuild,
					getVersion: o.getVersion,
					key: o.key,
					keyPath: o.keyPath,
					setValueByPath: o.setValueByPath
				}
			}]
		}])
	}(),
	function(q) {
		var V = {
			mode: "horizontal",
			slideSelector: "",
			infiniteLoop: !0,
			hideControlOnEnd: !1,
			speed: 500,
			easing: null,
			slideMargin: 0,
			startSlide: 0,
			randomStart: !1,
			captions: !1,
			ticker: !1,
			tickerHover: !1,
			adaptiveHeight: !1,
			adaptiveHeightSpeed: 500,
			video: !1,
			useCSS: !0,
			preloadImages: "visible",
			responsive: !0,
			slideZIndex: 50,
			wrapperClass: "bx-wrapper",
			touchEnabled: !0,
			swipeThreshold: 50,
			oneToOneTouch: !0,
			preventDefaultSwipeX: !0,
			preventDefaultSwipeY: !1,
			ariaLive: !0,
			ariaHidden: !0,
			keyboardEnabled: !1,
			pager: !0,
			pagerType: "full",
			pagerShortSeparator: " / ",
			pagerSelector: null,
			buildPager: null,
			pagerCustom: null,
			controls: !0,
			nextText: "Next",
			prevText: "Prev",
			nextSelector: null,
			prevSelector: null,
			autoControls: !1,
			startText: "Start",
			stopText: "Stop",
			autoControlsCombine: !1,
			autoControlsSelector: null,
			auto: !1,
			pause: 4e3,
			autoStart: !0,
			autoDirection: "next",
			stopAutoOnClick: !1,
			autoHover: !1,
			autoDelay: 0,
			autoSlideForOnePage: !1,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 0,
			slideWidth: 0,
			shrinkItems: !1,
			onSliderLoad: function() {
				return !0
			},
			onSlideBefore: function() {
				return !0
			},
			onSlideAfter: function() {
				return !0
			},
			onSlideNext: function() {
				return !0
			},
			onSlidePrev: function() {
				return !0
			},
			onSliderResize: function() {
				return !0
			}
		};
		q.fn.bxSlider = function(t) {
			if (0 === this.length) return this;
			if (1 < this.length) return this.each(function() {
				q(this).bxSlider(t)
			}), this;
			var d = {},
				f = this,
				r = q(window).width(),
				o = q(window).height();
			if (!q(f).data("bxSlider")) {
				var n = function() {
						q(f).data("bxSlider") || (d.settings = q.extend({}, V, t), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = f.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = {
							index: d.settings.startSlide
						}, d.carousel = 1 < d.settings.minSlides || 1 < d.settings.maxSlides, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function() {
							for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < t.length; n++)
								if (void 0 !== e.style[t[n]]) return d.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0;
							return !1
						}(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), f.data("origStyle", f.attr("style")), f.children(d.settings.slideSelector).each(function() {
							q(this).data("origStyle", q(this).attr("style"))
						}), e())
					},
					e = function() {
						var e = d.children.eq(d.settings.startSlide);
						f.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = f.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = q('<div class="bx-loading" />'), d.viewport.prepend(d.loader), f.css({
							width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto",
							position: "relative"
						}), d.usingCSS && d.settings.easing ? f.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({
							width: "100%",
							overflow: "hidden",
							position: "relative"
						}), d.viewport.parent().css({
							maxWidth: l()
						}), d.settings.pager || d.settings.controls || d.viewport.parent().css({
							margin: "0 auto 0px"
						}), d.settings.captions && x(), d.children.css({
							float: "horizontal" === d.settings.mode ? "left" : "none",
							listStyle: "none",
							height: h(),
							position: "relative"
						}), d.children.css("width", u()), "horizontal" === d.settings.mode && 0 < d.settings.slideMargin && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && 0 < d.settings.slideMargin && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({
							position: "absolute",
							zIndex: 0,
							display: "none"
						}), d.children.eq(d.settings.startSlide).css({
							zIndex: d.settings.slideZIndex,
							display: "block"
						})), d.controls.el = q('<div class="bx-controls" />'), d.active.last = d.settings.startSlide === p() - 1, d.settings.video && f.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (e = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && $(), d.settings.pager && b(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), a(e, s)
					},
					a = function(e, t) {
						var n = e.find('img:not([src=""]), iframe').length,
							i = 0;
						0 !== n ? e.find('img:not([src=""]), iframe').each(function() {
							q(this).one("load error", function() {
								++i === n && t()
							}).each(function() {
								this.complete && q(this).load()
							})
						}) : t()
					},
					s = function() {
						if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) {
							var e = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides,
								t = d.children.slice(0, e).clone(!0).addClass("bx-clone"),
								n = d.children.slice(-e).clone(!0).addClass("bx-clone");
							d.settings.ariaHidden && (t.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), f.append(t).prepend(n)
						}
						d.loader.remove(), g(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(h()), f.redrawSlider(), d.settings.onSliderLoad.call(f, d.active.index), d.initialized = !0, d.settings.responsive && q(window).bind("resize", H), d.settings.auto && d.settings.autoStart && (1 < p() || d.settings.autoSlideForOnePage) && O(), d.settings.ticker && D(), d.settings.pager && _(d.settings.startSlide), d.settings.controls && M(), d.settings.touchEnabled && !d.settings.ticker && I(), d.settings.keyboardEnabled && !d.settings.ticker && q(document).keydown(j)
					},
					h = function() {
						var t = 0,
							e = q();
						if ("vertical" === d.settings.mode || d.settings.adaptiveHeight)
							if (d.carousel) {
								var n = 1 === d.settings.moveSlides ? d.active.index : d.active.index * m();
								for (e = d.children.eq(n), i = 1; i <= d.settings.maxSlides - 1; i++) e = n + i >= d.children.length ? e.add(d.children.eq(i - 1)) : e.add(d.children.eq(n + i))
							} else e = d.children.eq(d.active.index);
						else e = d.children;
						return "vertical" === d.settings.mode ? (e.each(function(e) {
							t += q(this).outerHeight()
						}), 0 < d.settings.slideMargin && (t += d.settings.slideMargin * (d.settings.minSlides - 1))) : t = Math.max.apply(Math, e.map(function() {
							return q(this).css("height", "auto"), q(this).outerHeight(!1)
						}).get()), "border-box" === d.viewport.css("box-sizing") ? t += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (t += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), t
					},
					l = function() {
						var e = "100%";
						return 0 < d.settings.slideWidth && (e = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), e
					},
					u = function() {
						var e = d.settings.slideWidth,
							t = d.viewport.width();
						if (0 === d.settings.slideWidth || d.settings.slideWidth > t && !d.carousel || "vertical" === d.settings.mode) e = t;
						else if (1 < d.settings.maxSlides && "horizontal" === d.settings.mode) {
							if (t > d.maxThreshold) return e;
							t < d.minThreshold ? e = (t - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (e = Math.floor((t + d.settings.slideMargin) / Math.ceil((t + d.settings.slideMargin) / (e + d.settings.slideMargin)) - d.settings.slideMargin))
						}
						return e
					},
					c = function() {
						var e = 1,
							t = null;
						return "horizontal" === d.settings.mode && 0 < d.settings.slideWidth ? e = d.viewport.width() < d.minThreshold ? d.settings.minSlides : d.viewport.width() > d.maxThreshold ? d.settings.maxSlides : (t = d.children.first().width() + d.settings.slideMargin, Math.floor((d.viewport.width() + d.settings.slideMargin) / t)) : "vertical" === d.settings.mode && (e = d.settings.minSlides), e
					},
					p = function() {
						var e = 0,
							t = 0,
							n = 0;
						if (0 < d.settings.moveSlides)
							if (d.settings.infiniteLoop) e = Math.ceil(d.children.length / m());
							else
								for (; t < d.children.length;) ++e, t = n + c(), n += d.settings.moveSlides <= c() ? d.settings.moveSlides : c();
						else e = Math.ceil(d.children.length / c());
						return e
					},
					m = function() {
						return 0 < d.settings.moveSlides && d.settings.moveSlides <= c() ? d.settings.moveSlides : c()
					},
					g = function() {
						var e, t, n;
						d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (e = (t = d.children.last()).position(), v(-(e.left - (d.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (n = d.children.length - d.settings.minSlides, e = d.children.eq(n).position(), v(-e.top, "reset", 0)) : (e = d.children.eq(d.active.index * m()).position(), d.active.index === p() - 1 && (d.active.last = !0), void 0 !== e && ("horizontal" === d.settings.mode ? v(-e.left, "reset", 0) : "vertical" === d.settings.mode && v(-e.top, "reset", 0)))
					},
					v = function(e, t, n, i) {
						var r, o;
						d.usingCSS ? (o = "vertical" === d.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", f.css("-" + d.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === t ? (f.css(d.animProp, o), 0 !== n ? f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
							q(e.target).is(f) && (f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), A())
						}) : A()) : "reset" === t ? f.css(d.animProp, o) : "ticker" === t && (f.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), f.css(d.animProp, o), 0 !== n ? f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
							q(e.target).is(f) && (f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), v(i.resetValue, "reset", 0), N())
						}) : (v(i.resetValue, "reset", 0), N()))) : ((r = {})[d.animProp] = e, "slide" === t ? f.animate(r, n, d.settings.easing, function() {
							A()
						}) : "reset" === t ? f.css(d.animProp, e) : "ticker" === t && f.animate(r, n, "linear", function() {
							v(i.resetValue, "reset", 0), N()
						}))
					},
					y = function() {
						for (var e = "", t = "", n = p(), i = 0; i < n; i++) t = "", d.settings.buildPager && q.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (t = d.settings.buildPager(i), d.pagerEl.addClass("bx-custom-pager")) : (t = i + 1, d.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + t + "</a></div>";
						d.pagerEl.html(e)
					},
					b = function() {
						d.settings.pagerCustom ? d.pagerEl = q(d.settings.pagerCustom) : (d.pagerEl = q('<div class="bx-pager" />'), d.settings.pagerSelector ? q(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), y()), d.pagerEl.on("click touchend", "a", T)
					},
					w = function() {
						d.controls.next = q('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = q('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", S), d.controls.prev.bind("click touchend", E), d.settings.nextSelector && q(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && q(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = q('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))
					},
					$ = function() {
						d.controls.start = q('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = q('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = q('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", C), d.controls.autoEl.on("click", ".bx-stop", k), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? q(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), P(d.settings.autoStart ? "stop" : "start")
					},
					x = function() {
						d.children.each(function(e) {
							var t = q(this).find("img:first").attr("title");
							void 0 !== t && ("" + t).length && q(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
						})
					},
					S = function(e) {
						e.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && f.stopAuto(), f.goToNextSlide())
					},
					E = function(e) {
						e.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && f.stopAuto(), f.goToPrevSlide())
					},
					C = function(e) {
						f.startAuto(), e.preventDefault()
					},
					k = function(e) {
						f.stopAuto(), e.preventDefault()
					},
					T = function(e) {
						var t, n;
						e.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && f.stopAuto(), void 0 !== (t = q(e.currentTarget)).attr("data-slide-index") && (n = parseInt(t.attr("data-slide-index"))) !== d.active.index && f.goToSlide(n))
					},
					_ = function(n) {
						var e = d.children.length;
						if ("short" === d.settings.pagerType) return 1 < d.settings.maxSlides && (e = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(n + 1 + d.settings.pagerShortSeparator + e);
						d.pagerEl.find("a").removeClass("active"), d.pagerEl.each(function(e, t) {
							q(t).find("a").eq(n).addClass("active")
						})
					},
					A = function() {
						if (d.settings.infiniteLoop) {
							var e = "";
							0 === d.active.index ? e = d.children.eq(0).position() : d.active.index === p() - 1 && d.carousel ? e = d.children.eq((p() - 1) * m()).position() : d.active.index === d.children.length - 1 && (e = d.children.eq(d.children.length - 1).position()), e && ("horizontal" === d.settings.mode ? v(-e.left, "reset", 0) : "vertical" === d.settings.mode && v(-e.top, "reset", 0))
						}
						d.working = !1, d.settings.onSlideAfter.call(f, d.children.eq(d.active.index), d.oldIndex, d.active.index)
					},
					P = function(e) {
						d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[e]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
					},
					M = function() {
						1 === p() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === p() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled")))
					},
					O = function() {
						0 < d.settings.autoDelay ? setTimeout(f.startAuto, d.settings.autoDelay) : (f.startAuto(), q(window).focus(function() {
							f.startAuto()
						}).blur(function() {
							f.stopAuto()
						})), d.settings.autoHover && f.hover(function() {
							d.interval && (f.stopAuto(!0), d.autoPaused = !0)
						}, function() {
							d.autoPaused && (f.startAuto(!0), d.autoPaused = null)
						})
					},
					D = function() {
						var e, t, n, i, r, o, a, s, l = 0;
						"next" === d.settings.autoDirection ? f.append(d.children.clone().addClass("bx-clone")) : (f.prepend(d.children.clone().addClass("bx-clone")), e = d.children.first().position(), l = "horizontal" === d.settings.mode ? -e.left : -e.top), v(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (i = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function() {
							t = f.css("-" + d.cssPrefix + "-transform"), n = parseFloat(t.split(",")[i]), v(n, "reset", 0)
						}, function() {
							s = 0, d.children.each(function(e) {
								s += "horizontal" === d.settings.mode ? q(this).outerWidth(!0) : q(this).outerHeight(!0)
							}), r = d.settings.speed / s, o = "horizontal" === d.settings.mode ? "left" : "top", a = r * (s - Math.abs(parseInt(n))), N(a)
						})) : d.viewport.hover(function() {
							f.stop()
						}, function() {
							s = 0, d.children.each(function(e) {
								s += "horizontal" === d.settings.mode ? q(this).outerWidth(!0) : q(this).outerHeight(!0)
							}), r = d.settings.speed / s, o = "horizontal" === d.settings.mode ? "left" : "top", a = r * (s - Math.abs(parseInt(f.css(o)))), N(a)
						})), N()
					},
					N = function(e) {
						var t, n, i = e || d.settings.speed,
							r = {
								left: 0,
								top: 0
							},
							o = {
								left: 0,
								top: 0
							};
						"next" === d.settings.autoDirection ? r = f.find(".bx-clone").first().position() : o = d.children.first().position(), t = "horizontal" === d.settings.mode ? -r.left : -r.top, n = "horizontal" === d.settings.mode ? -o.left : -o.top, v(t, "ticker", i, {
							resetValue: n
						})
					},
					j = function(e) {
						var t, n, i, r, o = document.activeElement.tagName.toLowerCase();
						if (null == new RegExp(o, ["i"]).exec("input|textarea") && (t = f, i = {
								top: (n = q(window)).scrollTop(),
								left: n.scrollLeft()
							}, r = t.offset(), i.right = i.left + n.width(), i.bottom = i.top + n.height(), r.right = r.left + t.outerWidth(), r.bottom = r.top + t.outerHeight(), !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom))) {
							if (39 === e.keyCode) return S(e), !1;
							if (37 === e.keyCode) return E(e), !1
						}
					},
					I = function() {
						d.touch = {
							start: {
								x: 0,
								y: 0
							},
							end: {
								x: 0,
								y: 0
							}
						}, d.viewport.bind("touchstart MSPointerDown pointerdown", L), d.viewport.on("click", ".bxslider a", function(e) {
							d.viewport.hasClass("click-disabled") && (e.preventDefault(), d.viewport.removeClass("click-disabled"))
						})
					},
					L = function(e) {
						if (!q(e.target).closest('a, button, input, form, [role="button"]').length)
							if (d.controls.el.addClass("disabled"), d.working) e.preventDefault(), d.controls.el.removeClass("disabled");
							else {
								d.touch.originalPos = f.position();
								var t = e.originalEvent,
									n = void 0 !== t.changedTouches ? t.changedTouches : [t];
								d.touch.start.x = n[0].pageX, d.touch.start.y = n[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = t.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", R), d.viewport.bind("touchend MSPointerUp pointerup", z), d.viewport.bind("MSPointerCancel pointercancel", F)
							}
					},
					F = function(e) {
						v(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", F), d.viewport.unbind("touchmove MSPointerMove pointermove", R), d.viewport.unbind("touchend MSPointerUp pointerup", z), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
					},
					R = function(e) {
						var t = e.originalEvent,
							n = void 0 !== t.changedTouches ? t.changedTouches : [t],
							i = Math.abs(n[0].pageX - d.touch.start.x),
							r = Math.abs(n[0].pageY - d.touch.start.y),
							o = 0,
							a = 0;
						r < 3 * i && d.settings.preventDefaultSwipeX ? e.preventDefault() : i < 3 * r && d.settings.preventDefaultSwipeY && e.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && (o = "horizontal" === d.settings.mode ? (a = n[0].pageX - d.touch.start.x, d.touch.originalPos.left + a) : (a = n[0].pageY - d.touch.start.y, d.touch.originalPos.top + a), v(o, "reset", 0))
					},
					z = function(e) {
						d.viewport.unbind("touchmove MSPointerMove pointermove", R), d.controls.el.removeClass("disabled");
						var t = e.originalEvent,
							n = void 0 !== t.changedTouches ? t.changedTouches : [t],
							i = 0,
							r = 0;
						d.touch.end.x = n[0].pageX, d.touch.end.y = n[0].pageY, "fade" === d.settings.mode ? (r = Math.abs(d.touch.start.x - d.touch.end.x)) >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : (i = "horizontal" === d.settings.mode ? (r = d.touch.end.x - d.touch.start.x, d.touch.originalPos.left) : (r = d.touch.end.y - d.touch.start.y, d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && 0 < r || d.active.last && r < 0) ? v(i, "reset", 200) : Math.abs(r) >= d.settings.swipeThreshold ? (r < 0 ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : v(i, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", z), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
					},
					H = function(e) {
						if (d.initialized)
							if (d.working) window.setTimeout(H, 10);
							else {
								var t = q(window).width(),
									n = q(window).height();
								r === t && o === n || (r = t, o = n, f.redrawSlider(), d.settings.onSliderResize.call(f, d.active.index))
							}
					},
					U = function(e) {
						var t = c();
						d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(e, e + t).attr("aria-hidden", "false"))
					};
				return f.goToSlide = function(e, t) {
					var n, i, r, o, a, s = !0,
						l = 0,
						u = {
							left: 0,
							top: 0
						},
						c = null;
					if (d.oldIndex = d.active.index, d.active.index = (a = e) < 0 ? d.settings.infiniteLoop ? p() - 1 : d.active.index : a >= p() ? d.settings.infiniteLoop ? 0 : d.active.index : a, !d.working && d.active.index !== d.oldIndex) {
						if (d.working = !0, void 0 !== (s = d.settings.onSlideBefore.call(f, d.children.eq(d.active.index), d.oldIndex, d.active.index)) && !s) return d.active.index = d.oldIndex, void(d.working = !1);
						"next" === t ? d.settings.onSlideNext.call(f, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (s = !1) : "prev" === t && (d.settings.onSlidePrev.call(f, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (s = !1)), d.active.last = d.active.index >= p() - 1, (d.settings.pager || d.settings.pagerCustom) && _(d.active.index), d.settings.controls && M(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== h() && d.viewport.animate({
							height: h()
						}, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({
							zIndex: 0
						}), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function() {
							q(this).css("zIndex", d.settings.slideZIndex), A()
						})) : (d.settings.adaptiveHeight && d.viewport.height() !== h() && d.viewport.animate({
							height: h()
						}, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (u = (c = d.children.eq(d.children.length - 1)).position(), l = d.viewport.width() - c.outerWidth()) : (n = d.children.length - d.settings.minSlides, u = d.children.eq(n).position()) : d.carousel && d.active.last && "prev" === t ? (i = 1 === d.settings.moveSlides ? d.settings.maxSlides - m() : (p() - 1) * m() - (d.children.length - d.settings.maxSlides), u = (c = f.children(".bx-clone").eq(i)).position()) : "next" === t && 0 === d.active.index ? (u = f.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : 0 <= e && (o = e * parseInt(m()), u = d.children.eq(o).position()), void 0 !== u ? (r = "horizontal" === d.settings.mode ? -(u.left - l) : -u.top, v(r, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && U(d.active.index * m())
					}
				}, f.goToNextSlide = function() {
					if (d.settings.infiniteLoop || !d.active.last) {
						var e = parseInt(d.active.index) + 1;
						f.goToSlide(e, "next")
					}
				}, f.goToPrevSlide = function() {
					if (d.settings.infiniteLoop || 0 !== d.active.index) {
						var e = parseInt(d.active.index) - 1;
						f.goToSlide(e, "prev")
					}
				}, f.startAuto = function(e) {
					d.interval || (d.interval = setInterval(function() {
						"next" === d.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide()
					}, d.settings.pause), d.settings.autoControls && !0 !== e && P("stop"))
				}, f.stopAuto = function(e) {
					d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && !0 !== e && P("start"))
				}, f.getCurrentSlide = function() {
					return d.active.index
				}, f.getCurrentSlideElement = function() {
					return d.children.eq(d.active.index)
				}, f.getSlideElement = function(e) {
					return d.children.eq(e)
				}, f.getSlideCount = function() {
					return d.children.length
				}, f.isWorking = function() {
					return d.working
				}, f.redrawSlider = function() {
					d.children.add(f.find(".bx-clone")).outerWidth(u()), d.viewport.css("height", h()), f.find(".bx-clone").css({
						height: h()
					}), d.children.css({
						height: h()
					}), d.settings.ticker || g(), d.active.last && (d.active.index = p() - 1), d.active.index >= p() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (y(), _(d.active.index)), d.settings.ariaHidden && U(d.active.index * m())
				}, f.destroySlider = function() {
					d.initialized && (d.initialized = !1, q(".bx-clone", this).remove(), d.children.each(function() {
						void 0 !== q(this).data("origStyle") ? q(this).attr("style", q(this).data("origStyle")) : q(this).removeAttr("style")
					}), void 0 !== q(this).data("origStyle") ? this.attr("style", q(this).data("origStyle")) : q(this).removeAttr("style"), q(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), q(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && q(window).unbind("resize", H), d.settings.keyboardEnabled && q(document).unbind("keydown", j), q(this).removeData("bxSlider"))
				}, f.reloadSlider = function(e) {
					void 0 !== e && (t = e), f.destroySlider(), n(), q(f).data("bxSlider", this)
				}, n(), q(f).data("bxSlider", this), this
			}
		}
	}(jQuery),
	function(c) {
		function t() {
			return c("body").height() > c(window).height()
		}
		var o = function(e, t) {
			this.settings = t, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = {
				entriesBuff: [],
				width: 0,
				height: 0,
				aspectRatio: 0
			}, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.yield = {
				every: 2,
				flushed: 0
			}, this.border = 0 <= t.border ? t.border : t.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = {
				phase: 0,
				timeSlot: 150,
				$el: c('<div class="spinner"><span></span><span></span><span></span></div>'),
				intervalId: null
			}, this.checkWidthIntervalId = null, this.galleryWidth = e.width(), this.$gallery = e
		};
		o.prototype.getSuffix = function(e, t) {
			var n, i;
			for (n = t < e ? e : t, i = 0; i < this.suffixRanges.length; i++)
				if (n <= this.suffixRanges[i]) return this.settings.sizeRangeSuffixes[this.suffixRanges[i]];
			return this.settings.sizeRangeSuffixes[this.suffixRanges[i - 1]]
		}, o.prototype.removeSuffix = function(e, t) {
			return e.substring(0, e.length - t.length)
		}, o.prototype.endsWith = function(e, t) {
			return -1 !== e.indexOf(t, e.length - t.length)
		}, o.prototype.getUsedSuffix = function(e) {
			for (var t in this.settings.sizeRangeSuffixes)
				if (this.settings.sizeRangeSuffixes.hasOwnProperty(t)) {
					if (0 === this.settings.sizeRangeSuffixes[t].length) continue;
					if (this.endsWith(e, this.settings.sizeRangeSuffixes[t])) return this.settings.sizeRangeSuffixes[t]
				} return ""
		}, o.prototype.newSrc = function(e, t, n, i) {
			var r;
			if (this.settings.thumbnailPath) r = this.settings.thumbnailPath(e, t, n, i);
			else {
				var o = e.match(this.settings.extension),
					a = null !== o ? o[0] : "";
				r = e.replace(this.settings.extension, ""), r = this.removeSuffix(r, this.getUsedSuffix(r)), r += this.getSuffix(t, n) + a
			}
			return r
		}, o.prototype.showImg = function(e, t) {
			this.settings.cssAnimation ? (e.addClass("entry-visible"), t && t()) : (e.stop().fadeTo(this.settings.imagesAnimationDuration, 1, t), e.find("> img, > a > img").stop().fadeTo(this.settings.imagesAnimationDuration, 1, t))
		}, o.prototype.extractImgSrcFromImage = function(e) {
			var t = void 0 !== e.data("safe-src") ? e.data("safe-src") : e.attr("src");
			return e.data("jg.originalSrc", t), t
		}, o.prototype.imgFromEntry = function(e) {
			var t = e.find("> img");
			return 0 === t.length && (t = e.find("> a > img")), 0 === t.length ? null : t
		}, o.prototype.captionFromEntry = function(e) {
			var t = e.find("> .caption");
			return 0 === t.length ? null : t
		}, o.prototype.displayEntry = function(e, t, n, i, r, o) {
			e.width(i), e.height(o), e.css("top", n), e.css("left", t);
			var a = this.imgFromEntry(e);
			if (null !== a) {
				a.css("width", i), a.css("height", r), a.css("margin-left", -i / 2), a.css("margin-top", -r / 2);
				var s = a.attr("src"),
					l = this.newSrc(s, i, r, a[0]);
				a.one("error", function() {
					a.attr("src", a.data("jg.originalSrc"))
				});
				var u = function() {
					s !== l && a.attr("src", l)
				};
				"skipped" === e.data("jg.loaded") ? this.onImageEvent(s, c.proxy(function() {
					this.showImg(e, u), e.data("jg.loaded", !0)
				}, this)) : this.showImg(e, u)
			} else this.showImg(e);
			this.displayEntryCaption(e)
		}, o.prototype.displayEntryCaption = function(e) {
			var t = this.imgFromEntry(e);
			if (null !== t && this.settings.captions) {
				var n = this.captionFromEntry(e);
				if (null === n) {
					var i = t.attr("alt");
					this.isValidCaption(i) || (i = e.attr("title")), this.isValidCaption(i) && (n = c('<div class="caption">' + i + "</div>"), e.append(n), e.data("jg.createdCaption", !0))
				}
				null !== n && (this.settings.cssAnimation || n.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(e))
			} else this.removeCaptionEventsHandlers(e)
		}, o.prototype.isValidCaption = function(e) {
			return void 0 !== e && 0 < e.length
		}, o.prototype.onEntryMouseEnterForCaption = function(e) {
			var t = this.captionFromEntry(c(e.currentTarget));
			this.settings.cssAnimation ? t.addClass("caption-visible").removeClass("caption-hidden") : t.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
		}, o.prototype.onEntryMouseLeaveForCaption = function(e) {
			var t = this.captionFromEntry(c(e.currentTarget));
			this.settings.cssAnimation ? t.removeClass("caption-visible").removeClass("caption-hidden") : t.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
		}, o.prototype.addCaptionEventsHandlers = function(e) {
			var t = e.data("jg.captionMouseEvents");
			void 0 === t && (t = {
				mouseenter: c.proxy(this.onEntryMouseEnterForCaption, this),
				mouseleave: c.proxy(this.onEntryMouseLeaveForCaption, this)
			}, e.on("mouseenter", void 0, void 0, t.mouseenter), e.on("mouseleave", void 0, void 0, t.mouseleave), e.data("jg.captionMouseEvents", t))
		}, o.prototype.removeCaptionEventsHandlers = function(e) {
			var t = e.data("jg.captionMouseEvents");
			void 0 !== t && (e.off("mouseenter", void 0, t.mouseenter), e.off("mouseleave", void 0, t.mouseleave), e.removeData("jg.captionMouseEvents"))
		}, o.prototype.prepareBuildingRow = function(e) {
			var t, n, i, r, o, a = !0,
				s = 0,
				l = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
				u = l / this.buildingRow.aspectRatio,
				c = this.settings.rowHeight,
				d = this.buildingRow.width / l > this.settings.justifyThreshold;
			if (e && "hide" === this.settings.lastRow && !d) {
				for (t = 0; t < this.buildingRow.entriesBuff.length; t++) n = this.buildingRow.entriesBuff[t], this.settings.cssAnimation ? n.removeClass("entry-visible") : (n.stop().fadeTo(0, .1), n.find("> img, > a > img").fadeTo(0, 0));
				return -1
			}
			for (e && !d && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (a = !1, 0 < this.rows && (a = (c = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio / l > this.settings.justifyThreshold)), t = 0; t < this.buildingRow.entriesBuff.length; t++) i = (n = this.buildingRow.entriesBuff[t]).data("jg.width") / n.data("jg.height"), o = a ? (r = t === this.buildingRow.entriesBuff.length - 1 ? l : u * i, u) : (r = c * i, c), l -= Math.round(r), n.data("jg.jwidth", Math.round(r)), n.data("jg.jheight", Math.ceil(o)), (0 === t || o < s) && (s = o);
			return this.buildingRow.height = s, a
		}, o.prototype.clearBuildingRow = function() {
			this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0
		};
		var n = !(o.prototype.flushRow = function(e) {
			var t, n, i, r = this.settings,
				o = this.border;
			if (n = this.prepareBuildingRow(e), e && "hide" === r.lastRow && -1 === n) this.clearBuildingRow();
			else {
				if (this.maxRowHeight && (this.maxRowHeight.isPercentage && this.maxRowHeight.value * r.rowHeight < this.buildingRow.height ? this.buildingRow.height = this.maxRowHeight.value * r.rowHeight : this.maxRowHeight.value >= r.rowHeight && this.maxRowHeight.value < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight.value)), "center" === r.lastRow || "right" === r.lastRow) {
					var a = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * r.margins;
					for (i = 0; i < this.buildingRow.entriesBuff.length; i++) a -= (t = this.buildingRow.entriesBuff[i]).data("jg.jwidth");
					"center" === r.lastRow ? o += a / 2 : "right" === r.lastRow && (o += a)
				}
				for (i = 0; i < this.buildingRow.entriesBuff.length; i++) t = this.buildingRow.entriesBuff[i], this.displayEntry(t, o, this.offY, t.data("jg.jwidth"), t.data("jg.jheight"), this.buildingRow.height), o += t.data("jg.jwidth") + r.margins;
				this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.$gallery.height(this.galleryHeightToSet + this.getSpinnerHeight()), (!e || this.buildingRow.height <= r.rowHeight && n) && (this.offY += this.buildingRow.height + r.margins, this.rows += 1, this.clearBuildingRow(), this.$gallery.trigger("jg.rowflush"))
			}
		});
		o.prototype.checkWidth = function() {
			this.checkWidthIntervalId = setInterval(c.proxy(function() {
				var e = parseFloat(this.$gallery.width());
				t() === n ? Math.abs(e - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = e, this.rewind(), this.startImgAnalyzer(!0)) : (n = t(), this.galleryWidth = e)
			}, this), this.settings.refreshTime)
		}, o.prototype.isSpinnerActive = function() {
			return null !== this.spinner.intervalId
		}, o.prototype.getSpinnerHeight = function() {
			return this.spinner.$el.innerHeight()
		}, o.prototype.stopLoadingSpinnerAnimation = function() {
			clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.$gallery.height(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach()
		}, o.prototype.startLoadingSpinnerAnimation = function() {
			var e = this.spinner,
				t = e.$el.find("span");
			clearInterval(e.intervalId), this.$gallery.append(e.$el), this.$gallery.height(this.offY + this.buildingRow.height + this.getSpinnerHeight()), e.intervalId = setInterval(function() {
				e.phase < t.length ? t.eq(e.phase).fadeTo(e.timeSlot, 1) : t.eq(e.phase - t.length).fadeTo(e.timeSlot, 0), e.phase = (e.phase + 1) % (2 * t.length)
			}, e.timeSlot)
		}, o.prototype.rewind = function() {
			this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow()
		}, o.prototype.updateEntries = function(e) {
			var t;
			return 0 < (t = e && null != this.lastFetchedEntry ? c(this.lastFetchedEntry).nextAll(this.settings.selector).toArray() : (this.entries = [], this.$gallery.children(this.settings.selector).toArray())).length && (c.isFunction(this.settings.sort) ? t = this.sortArray(t) : this.settings.randomize && (t = this.shuffleArray(t)), this.lastFetchedEntry = t[t.length - 1], this.settings.filter ? t = this.filterArray(t) : this.resetFilters(t)), this.entries = this.entries.concat(t), !0
		}, o.prototype.insertToGallery = function(e) {
			var t = this;
			c.each(e, function() {
				c(this).appendTo(t.$gallery)
			})
		}, o.prototype.shuffleArray = function(e) {
			var t, n, i;
			for (t = e.length - 1; 0 < t; t--) n = Math.floor(Math.random() * (t + 1)), i = e[t], e[t] = e[n], e[n] = i;
			return this.insertToGallery(e), e
		}, o.prototype.sortArray = function(e) {
			return e.sort(this.settings.sort), this.insertToGallery(e), e
		}, o.prototype.resetFilters = function(e) {
			for (var t = 0; t < e.length; t++) c(e[t]).removeClass("jg-filtered")
		}, o.prototype.filterArray = function(e) {
			var n = this.settings;
			if ("string" === c.type(n.filter)) return e.filter(function(e) {
				var t = c(e);
				return t.is(n.filter) ? (t.removeClass("jg-filtered"), !0) : (t.addClass("jg-filtered").removeClass("jg-visible"), !1)
			});
			if (c.isFunction(n.filter)) {
				for (var t = e.filter(n.filter), i = 0; i < e.length; i++) - 1 == t.indexOf(e[i]) ? c(e[i]).addClass("jg-filtered").removeClass("jg-visible") : c(e[i]).removeClass("jg-filtered");
				return t
			}
		}, o.prototype.destroy = function() {
			clearInterval(this.checkWidthIntervalId), c.each(this.entries, c.proxy(function(e, t) {
				var n = c(t);
				n.css("width", ""), n.css("height", ""), n.css("top", ""), n.css("left", ""), n.data("jg.loaded", void 0), n.removeClass("jg-entry");
				var i = this.imgFromEntry(n);
				i.css("width", ""), i.css("height", ""), i.css("margin-left", ""), i.css("margin-top", ""), i.attr("src", i.data("jg.originalSrc")), i.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers(n);
				var r = this.captionFromEntry(n);
				n.data("jg.createdCaption") ? (n.data("jg.createdCaption", void 0), null !== r && r.remove()) : null !== r && r.fadeTo(0, 1)
			}, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0)
		}, o.prototype.analyzeImages = function(e) {
			for (var t = this.lastAnalyzedIndex + 1; t < this.entries.length; t++) {
				var n = c(this.entries[t]);
				if (!0 === n.data("jg.loaded") || "skipped" === n.data("jg.loaded")) {
					var i = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
						r = n.data("jg.width") / n.data("jg.height");
					if (i / (this.buildingRow.aspectRatio + r) < this.settings.rowHeight && (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(e);
					this.buildingRow.entriesBuff.push(n), this.buildingRow.aspectRatio += r, this.buildingRow.width += r * this.settings.rowHeight, this.lastAnalyzedIndex = t
				} else if ("error" !== n.data("jg.loaded")) return
			}
			0 < this.buildingRow.entriesBuff.length && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.$gallery.trigger(e ? "jg.resize" : "jg.complete"), this.$gallery.height(this.galleryHeightToSet)
		}, o.prototype.stopImgAnalyzerStarter = function() {
			this.yield.flushed = 0, null !== this.imgAnalyzerTimeout && clearTimeout(this.imgAnalyzerTimeout)
		}, o.prototype.startImgAnalyzer = function(e) {
			var t = this;
			this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function() {
				t.analyzeImages(e)
			}, .001)
		}, o.prototype.onImageEvent = function(e, t, n) {
			if (t || n) {
				var i = new Image,
					r = c(i);
				t && r.one("load", function() {
					r.off("load error"), t(i)
				}), n && r.one("error", function() {
					r.off("load error"), n(i)
				}), i.src = e
			}
		}, o.prototype.init = function() {
			var s = !1,
				l = !1,
				u = this;
			c.each(this.entries, function(e, t) {
				var n = c(t),
					i = u.imgFromEntry(n);
				if (n.addClass("jg-entry"), !0 !== n.data("jg.loaded") && "skipped" !== n.data("jg.loaded"))
					if (null !== u.settings.rel && n.attr("rel", u.settings.rel), null !== u.settings.target && n.attr("target", u.settings.target), null !== i) {
						var r = u.extractImgSrcFromImage(i);
						if (i.attr("src", r), !1 === u.settings.waitThumbnailsLoad) {
							var o = parseFloat(i.attr("width")),
								a = parseFloat(i.attr("height"));
							if (!isNaN(o) && !isNaN(a)) return n.data("jg.width", o), n.data("jg.height", a), n.data("jg.loaded", "skipped"), l = !0, u.startImgAnalyzer(!1), !0
						}
						n.data("jg.loaded", !1), s = !0, u.isSpinnerActive() || u.startLoadingSpinnerAnimation(), u.onImageEvent(r, function(e) {
							n.data("jg.width", e.width), n.data("jg.height", e.height), n.data("jg.loaded", !0), u.startImgAnalyzer(!1)
						}, function() {
							n.data("jg.loaded", "error"), u.startImgAnalyzer(!1)
						})
					} else n.data("jg.loaded", !0), n.data("jg.width", n.width() | parseFloat(n.css("width")) | 1), n.data("jg.height", n.height() | parseFloat(n.css("height")) | 1)
			}), s || l || this.startImgAnalyzer(!1), this.checkWidth()
		}, o.prototype.checkOrConvertNumber = function(e, t) {
			if ("string" === c.type(e[t]) && (e[t] = parseFloat(e[t])), "number" !== c.type(e[t])) throw t + " must be a number";
			if (isNaN(e[t])) throw "invalid number for " + t
		}, o.prototype.checkSizeRangesSuffixes = function() {
			if ("object" !== c.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
			var e = [];
			for (var t in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(t) && e.push(t);
			for (var n = {
					0: ""
				}, i = 0; i < e.length; i++)
				if ("string" === c.type(e[i])) try {
					n[parseInt(e[i].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[e[i]]
				} catch (e) {
					throw "sizeRangeSuffixes keys must contains correct numbers (" + e + ")"
				} else n[e[i]] = this.settings.sizeRangeSuffixes[e[i]];
			this.settings.sizeRangeSuffixes = n
		}, o.prototype.retrieveMaxRowHeight = function() {
			var e = {};
			if ("string" === c.type(this.settings.maxRowHeight)) this.settings.maxRowHeight.match(/^[0-9]+%$/) ? (e.value = parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100, e.isPercentage = !1) : (e.value = parseFloat(this.settings.maxRowHeight), e.isPercentage = !0);
			else {
				if ("number" !== c.type(this.settings.maxRowHeight)) {
					if (!1 === this.settings.maxRowHeight || null === this.settings.maxRowHeight || void 0 === this.settings.maxRowHeight) return null;
					throw "maxRowHeight must be a number or a percentage"
				}
				e.value = this.settings.maxRowHeight, e.isPercentage = !1
			}
			if (isNaN(e.value)) throw "invalid number for maxRowHeight";
			return e.isPercentage && e.value < 100 && (e.value = 100), e
		}, o.prototype.checkSettings = function() {
			this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border");
			var e = ["justify", "nojustify", "left", "center", "right", "hide"];
			if (-1 === e.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + e.join(", ");
			if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || 1 < this.settings.justifyThreshold) throw "justifyThreshold must be in the interval [0,1]";
			if ("boolean" !== c.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
			if ("boolean" !== c.type(this.settings.captions)) throw "captions must be a boolean";
			if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || 1 < this.settings.captionSettings.visibleOpacity) throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
			if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || 1 < this.settings.captionSettings.nonVisibleOpacity) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
			if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== c.type(this.settings.randomize)) throw "randomize must be a boolean";
			if ("string" !== c.type(this.settings.selector)) throw "selector must be a string";
			if (!1 !== this.settings.sort && !c.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
			if (!1 !== this.settings.filter && !c.isFunction(this.settings.filter) && "string" !== c.type(this.settings.filter)) throw "filter must be false, a string or a filter function"
		}, o.prototype.retrieveSuffixRanges = function() {
			var e = [];
			for (var t in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(t) && e.push(parseInt(t, 10));
			return e.sort(function(e, t) {
				return t < e ? 1 : e < t ? -1 : 0
			}), e
		}, o.prototype.updateSettings = function(e) {
			this.settings = c.extend({}, this.settings, e), this.checkSettings(), this.border = 0 <= this.settings.border ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges()
		}, c.fn.justifiedGallery = function(r) {
			return this.each(function(e, t) {
				var n = c(t);
				n.addClass("justified-gallery");
				var i = n.data("jg.controller");
				if (void 0 === i) {
					if (null != r && "object" !== c.type(r)) {
						if ("destroy" === r) return;
						throw "The argument must be an object"
					}
					i = new o(n, c.extend({}, c.fn.justifiedGallery.defaults, r)), n.data("jg.controller", i)
				} else if ("norewind" === r);
				else {
					if ("destroy" === r) return void i.destroy();
					i.updateSettings(r), i.rewind()
				}
				i.updateEntries("norewind" === r) && i.init()
			})
		}, c.fn.justifiedGallery.defaults = {
			sizeRangeSuffixes: {},
			thumbnailPath: void 0,
			rowHeight: 120,
			maxRowHeight: !1,
			margins: 1,
			border: -1,
			lastRow: "nojustify",
			justifyThreshold: .9,
			waitThumbnailsLoad: !0,
			captions: !0,
			cssAnimation: !0,
			imagesAnimationDuration: 500,
			captionSettings: {
				animationDuration: 500,
				visibleOpacity: .7,
				nonVisibleOpacity: 0
			},
			rel: null,
			target: null,
			extension: /\.[^.\\/]+$/,
			refreshTime: 200,
			refreshSensitivity: 0,
			randomize: !1,
			sort: !1,
			filter: !1,
			selector: "a, div:not(.spinner)"
		}
	}(jQuery),
	function(e) {
		var n = "moto-absolute-cover-element_fill-by-height",
			i = "moto-absolute-cover-element_calculating";

		function r(e, t) {
			e.addClass(i), e.removeClass(n), t.outerWidth() / t.outerHeight() <= e.outerWidth() / e.outerHeight() && e.addClass(n), e.removeClass(i)
		}
		e.fn.motoAbsolutePositionCover = function(e) {
			var t, n = this;
			return e && (t = e.get(0)) && (angular.isDefined(t.complete) && !t.complete ? e.one("load", function() {
				r(e, n)
			}) : angular.isDefined(t.readyState) && t.readyState <= 0 ? e.one("loadedmetadata", function() {
				r(e, n)
			}) : r(e, n)), this
		}
	}(jQuery),
	function(e) {
		var i = [];

		function r(e) {
			var t = e.find("video");
			e.motoAbsolutePositionCover(t)
		}
		e(window).on("resize", function() {
			i.forEach(r)
		}), e.fn.motoVideoBackground = function() {
			var t = this,
				n = !1;
			i.forEach(function(e) {
				t.is(e) && (n = !0)
			}), n || i.push(t), r(t)
		}
	}(jQuery),
	function(g, r, e, v) {
		var i = "stellar",
			n = {
				scrollProperty: "scroll",
				positionProperty: "position",
				horizontalScrolling: !0,
				verticalScrolling: !0,
				horizontalOffset: 0,
				verticalOffset: 0,
				responsive: !1,
				parallaxBackgrounds: !0,
				parallaxElements: !0,
				hideDistantElements: !0,
				hideElement: function(e) {
					e.hide()
				},
				showElement: function(e) {
					e.show()
				}
			},
			s = {
				scroll: {
					getLeft: function(e) {
						return e.scrollLeft()
					},
					setLeft: function(e, t) {
						e.scrollLeft(t)
					},
					getTop: function(e) {
						return e.scrollTop()
					},
					setTop: function(e, t) {
						e.scrollTop(t)
					}
				},
				position: {
					getLeft: function(e) {
						return -1 * parseInt(e.css("left"), 10)
					},
					getTop: function(e) {
						return -1 * parseInt(e.css("top"), 10)
					}
				},
				margin: {
					getLeft: function(e) {
						return -1 * parseInt(e.css("margin-left"), 10)
					},
					getTop: function(e) {
						return -1 * parseInt(e.css("margin-top"), 10)
					}
				},
				transform: {
					getLeft: function(e) {
						var t = getComputedStyle(e[0])[o];
						return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
					},
					getTop: function(e) {
						var t = getComputedStyle(e[0])[o];
						return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
					}
				}
			},
			l = {
				position: {
					setLeft: function(e, t) {
						e.css("left", t)
					},
					setTop: function(e, t) {
						e.css("top", t)
					}
				},
				transform: {
					setPosition: function(e, t, n, i, r) {
						e[0].style[o] = "translate3d(" + (t - n) + "px, " + (i - r) + "px, 0)"
					}
				}
			},
			o = function() {
				var e, t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
					n = g("script")[0].style,
					i = "";
				for (e in n)
					if (t.test(e)) {
						i = e.match(t)[0];
						break
					} return "WebkitOpacity" in n && (i = "Webkit"), "KhtmlOpacity" in n && (i = "Khtml"),
					function(e) {
						return i + (0 < i.length ? e.charAt(0).toUpperCase() + e.slice(1) : e)
					}
			}()("transform"),
			t = g("<div />", {
				style: "background:#fff"
			}).css("background-position-x") !== v,
			y = t ? function(e, t, n) {
				e.css({
					"background-position-x": t,
					"background-position-y": n
				})
			} : function(e, t, n) {
				e.css("background-position", t + " " + n)
			},
			b = t ? function(e) {
				return [e.css("background-position-x"), e.css("background-position-y")]
			} : function(e) {
				return e.css("background-position").split(" ")
			},
			a = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(e) {
				setTimeout(e, 1e3 / 60)
			};

		function u(e, t) {
			this.element = e, this.options = g.extend({}, n, t), this._defaults = n, this._name = i, this.init()
		}
		u.prototype = {
			init: function() {
				this.options.name = i + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
					firstLoad: !0
				}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
			},
			_defineElements: function() {
				this.element === e.body && (this.element = r), this.$scrollElement = g(this.element), this.$element = g.isWindow(this.element) ? g("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== v ? g(this.options.viewportElement) : this.$scrollElement[0] === r || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
			},
			_defineGetters: function() {
				var e = this,
					t = s[e.options.scrollProperty];
				this._getScrollLeft = function() {
					return t.getLeft(e.$scrollElement)
				}, this._getScrollTop = function() {
					return t.getTop(e.$scrollElement)
				}
			},
			_defineSetters: function() {
				var o = this,
					e = s[o.options.scrollProperty],
					a = l[o.options.positionProperty],
					t = e.setLeft,
					n = e.setTop;
				this._setScrollLeft = "function" == typeof t ? function(e) {
					t(o.$scrollElement, e)
				} : g.noop, this._setScrollTop = "function" == typeof n ? function(e) {
					n(o.$scrollElement, e)
				} : g.noop, this._setPosition = a.setPosition || function(e, t, n, i, r) {
					o.options.horizontalScrolling && a.setLeft(e, t, n), o.options.verticalScrolling && a.setTop(e, i, r)
				}
			},
			_handleWindowLoadAndResize: function() {
				var e = this,
					t = g(r);
				e.options.responsive && t.bind("load." + this.name, function() {
					e.refresh()
				}), t.bind("resize." + this.name, function() {
					e._detectViewport(), e.options.responsive && e.refresh()
				})
			},
			refresh: function(e) {
				var n = this,
					t = n._getScrollLeft(),
					i = n._getScrollTop();
				e && e.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), e && e.firstLoad && /WebKit/.test(navigator.userAgent) && g(r).load(function() {
					var e = n._getScrollLeft(),
						t = n._getScrollTop();
					n._setScrollLeft(e + 1), n._setScrollTop(t + 1), n._setScrollLeft(e), n._setScrollTop(t)
				}), this._setScrollLeft(t), this._setScrollTop(i)
			},
			_detectViewport: function() {
				var e = this.$viewportElement.offset(),
					t = null !== e && e !== v;
				this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
			},
			_findParticles: function() {
				var m = this;
				if (this._getScrollLeft(), this._getScrollTop(), this.particles !== v)
					for (var e = this.particles.length - 1; 0 <= e; e--) this.particles[e].$element.data("stellar-elementIsActive", v);
				this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(e) {
					var t, n, i, r, o, a, s, l, u, c = g(this),
						d = 0,
						f = 0,
						h = 0,
						p = 0;
					if (c.data("stellar-elementIsActive")) {
						if (c.data("stellar-elementIsActive") !== this) return
					} else c.data("stellar-elementIsActive", this);
					m.options.showElement(c), c.data("stellar-startingLeft") ? (c.css("left", c.data("stellar-startingLeft")), c.css("top", c.data("stellar-startingTop"))) : (c.data("stellar-startingLeft", c.css("left")), c.data("stellar-startingTop", c.css("top"))), i = c.position().left, r = c.position().top, o = "auto" === c.css("margin-left") ? 0 : parseInt(c.css("margin-left"), 10), a = "auto" === c.css("margin-top") ? 0 : parseInt(c.css("margin-top"), 10), l = c.offset().left - o, u = c.offset().top - a, c.parents().each(function() {
						var e = g(this);
						if (!0 === e.data("stellar-offset-parent")) return d = h, f = p, s = e, !1;
						h += e.position().left, p += e.position().top
					}), t = c.data("stellar-horizontal-offset") !== v ? c.data("stellar-horizontal-offset") : s !== v && s.data("stellar-horizontal-offset") !== v ? s.data("stellar-horizontal-offset") : m.horizontalOffset, n = c.data("stellar-vertical-offset") !== v ? c.data("stellar-vertical-offset") : s !== v && s.data("stellar-vertical-offset") !== v ? s.data("stellar-vertical-offset") : m.verticalOffset, m.particles.push({
						$element: c,
						$offsetParent: s,
						isFixed: "fixed" === c.css("position"),
						horizontalOffset: t,
						verticalOffset: n,
						startingPositionLeft: i,
						startingPositionTop: r,
						startingOffsetLeft: l,
						startingOffsetTop: u,
						parentOffsetLeft: d,
						parentOffsetTop: f,
						stellarRatio: c.data("stellar-ratio") !== v ? c.data("stellar-ratio") : 1,
						width: c.outerWidth(!0),
						height: c.outerHeight(!0),
						isHidden: !1
					})
				})
			},
			_findBackgrounds: function() {
				var e, h = this,
					p = this._getScrollLeft(),
					m = this._getScrollTop();
				this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
					var e, t, n, i, r, o, a, s = g(this),
						l = b(s),
						u = 0,
						c = 0,
						d = 0,
						f = 0;
					if (s.data("stellar-backgroundIsActive")) {
						if (s.data("stellar-backgroundIsActive") !== this) return
					} else s.data("stellar-backgroundIsActive", this);
					s.data("stellar-backgroundStartingLeft") ? y(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", l[0]), s.data("stellar-backgroundStartingTop", l[1])), n = "auto" === s.css("margin-left") ? 0 : parseInt(s.css("margin-left"), 10), i = "auto" === s.css("margin-top") ? 0 : parseInt(s.css("margin-top"), 10), r = s.offset().left - n - p, o = s.offset().top - i - m, s.parents().each(function() {
						var e = g(this);
						if (!0 === e.data("stellar-offset-parent")) return u = d, c = f, a = e, !1;
						d += e.position().left, f += e.position().top
					}), e = s.data("stellar-horizontal-offset") !== v ? s.data("stellar-horizontal-offset") : a !== v && a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : h.horizontalOffset, t = s.data("stellar-vertical-offset") !== v ? s.data("stellar-vertical-offset") : a !== v && a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : h.verticalOffset, h.backgrounds.push({
						$element: s,
						$offsetParent: a,
						isFixed: "fixed" === s.css("background-attachment"),
						horizontalOffset: e,
						verticalOffset: t,
						startingValueLeft: l[0],
						startingValueTop: l[1],
						startingBackgroundPositionLeft: isNaN(parseInt(l[0], 10)) ? 0 : parseInt(l[0], 10),
						startingBackgroundPositionTop: isNaN(parseInt(l[1], 10)) ? 0 : parseInt(l[1], 10),
						startingPositionLeft: s.position().left,
						startingPositionTop: s.position().top,
						startingOffsetLeft: r,
						startingOffsetTop: o,
						parentOffsetLeft: u,
						parentOffsetTop: c,
						stellarRatio: s.data("stellar-background-ratio") === v ? 1 : s.data("stellar-background-ratio")
					})
				}))
			},
			_reset: function() {
				var e, t, n, i, r;
				for (r = this.particles.length - 1; 0 <= r; r--) t = (e = this.particles[r]).$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
				for (r = this.backgrounds.length - 1; 0 <= r; r--)(i = this.backgrounds[r]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), y(i.$element, i.startingValueLeft, i.startingValueTop)
			},
			destroy: function() {
				this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = g.noop, g(r).unbind("load." + this.name).unbind("resize." + this.name)
			},
			_setOffsets: function() {
				var e = this,
					t = g(r);
				t.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), t.bind("resize.horizontal-" + this.name, function() {
					e.horizontalOffset = e.options.horizontalOffset()
				})) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), t.bind("resize.vertical-" + this.name, function() {
					e.verticalOffset = e.options.verticalOffset()
				})) : this.verticalOffset = this.options.verticalOffset
			},
			_repositionElements: function() {
				var e, t, n, i, r, o, a, s, l, u, c = this._getScrollLeft(),
					d = this._getScrollTop(),
					f = !0,
					h = !0;
				if (this.currentScrollLeft !== c || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
					for (this.currentScrollLeft = c, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, u = this.particles.length - 1; 0 <= u; u--) t = (e = this.particles[u]).isFixed ? 1 : 0, s = this.options.horizontalScrolling ? (o = (c + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft) - e.startingPositionLeft + e.startingOffsetLeft : (o = e.startingPositionLeft, e.startingOffsetLeft), l = this.options.verticalScrolling ? (a = (d + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop) - e.startingPositionTop + e.startingOffsetTop : (a = e.startingPositionTop, e.startingOffsetTop), this.options.hideDistantElements && (h = !this.options.horizontalScrolling || s + e.width > (e.isFixed ? 0 : c) && s < (e.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || l + e.height > (e.isFixed ? 0 : d) && l < (e.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), h && f ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, o, e.startingPositionLeft, a, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
					for (u = this.backgrounds.length - 1; 0 <= u; u--) t = (n = this.backgrounds[u]).isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (c + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px" : n.startingValueLeft, r = this.options.verticalScrolling ? (d + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px" : n.startingValueTop, y(n.$element, i, r)
				}
			},
			_handleScrollEvent: function() {
				var e = this,
					t = !1,
					n = function() {
						e._repositionElements(), t = !1
					},
					i = function() {
						t || (a(n), t = !0)
					};
				this.$scrollElement.bind("scroll." + this.name, i), i()
			},
			_startAnimationLoop: function() {
				var e = this;
				this._animationLoop = function() {
					a(e._animationLoop), e._repositionElements()
				}, this._animationLoop()
			}
		}, g.fn[i] = function(t) {
			var n = arguments;
			return t === v || "object" == typeof t ? this.each(function() {
				g.data(this, "plugin_" + i) || g.data(this, "plugin_" + i, new u(this, t))
			}) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
				var e = g.data(this, "plugin_" + i);
				e instanceof u && "function" == typeof e[t] && e[t].apply(e, Array.prototype.slice.call(n, 1)), "destroy" === t && g.data(this, "plugin_" + i, null)
			}) : void 0
		}, g[i] = function(e) {
			var t = g(r);
			return t.stellar.apply(t, Array.prototype.slice.call(arguments, 0))
		}, g[i].scrollProperty = s, g[i].positionProperty = l, r.Stellar = u
	}(jQuery, this, document),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
	}(function(c) {
		var d, i, f, r, h, t, s = "Close",
			l = "BeforeClose",
			p = "MarkupParse",
			m = "mfp-ready",
			n = "mfp-removing",
			a = "mfp-prevent-close",
			e = function() {},
			u = !!window.jQuery,
			g = c(window),
			v = function(e, t) {
				d.ev.on("mfp" + e + ".mfp", t)
			},
			y = function(e, t, n, i) {
				var r = document.createElement("div");
				return r.className = "mfp-" + e, n && (r.innerHTML = n), i ? t && t.appendChild(r) : (r = c(r), t && r.appendTo(t)), r
			},
			b = function(e, t) {
				d.ev.triggerHandler("mfp" + e, t), d.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), d.st.callbacks[e] && d.st.callbacks[e].apply(d, c.isArray(t) ? t : [t]))
			},
			w = function(e) {
				return e === t && d.currTemplate.closeBtn || (d.currTemplate.closeBtn = c(d.st.closeMarkup.replace("%title%", d.st.tClose)), t = e), d.currTemplate.closeBtn
			},
			o = function() {
				c.magnificPopup.instance || ((d = new e).init(), c.magnificPopup.instance = d)
			};
		e.prototype = {
			constructor: e,
			init: function() {
				var e = navigator.appVersion;
				d.isLowIE = d.isIE8 = document.all && !document.addEventListener, d.isAndroid = /android/gi.test(e), d.isIOS = /iphone|ipad|ipod/gi.test(e), d.supportsTransition = function() {
					var e = document.createElement("p").style,
						t = ["ms", "O", "Moz", "Webkit"];
					if (void 0 !== e.transition) return !0;
					for (; t.length;)
						if (t.pop() + "Transition" in e) return !0;
					return !1
				}(), d.probablyMobile = d.isAndroid || d.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), f = c(document), d.popupsCache = {}
			},
			open: function(e) {
				var t;
				if (!1 === e.isObj) {
					d.items = e.items.toArray(), d.index = 0;
					var n, i = e.items;
					for (t = 0; t < i.length; t++)
						if ((n = i[t]).parsed && (n = n.el[0]), n === e.el[0]) {
							d.index = t;
							break
						}
				} else d.items = c.isArray(e.items) ? e.items : [e.items], d.index = e.index || 0;
				if (!d.isOpen) {
					d.types = [], h = "", e.mainEl && e.mainEl.length ? d.ev = e.mainEl.eq(0) : d.ev = f, e.key ? (d.popupsCache[e.key] || (d.popupsCache[e.key] = {}), d.currTemplate = d.popupsCache[e.key]) : d.currTemplate = {}, d.st = c.extend(!0, {}, c.magnificPopup.defaults, e), d.fixedContentPos = "auto" === d.st.fixedContentPos ? !d.probablyMobile : d.st.fixedContentPos, d.st.modal && (d.st.closeOnContentClick = !1, d.st.closeOnBgClick = !1, d.st.showCloseBtn = !1, d.st.enableEscapeKey = !1), d.bgOverlay || (d.bgOverlay = y("bg").on("click.mfp", function() {
						d.close()
					}), d.wrap = y("wrap").attr("tabindex", -1).on("click.mfp", function(e) {
						d._checkIfClose(e.target) && d.close()
					}), d.container = y("container", d.wrap)), d.contentContainer = y("content"), d.st.preloader && (d.preloader = y("preloader", d.container, d.st.tLoading));
					var r = c.magnificPopup.modules;
					for (t = 0; t < r.length; t++) {
						var o = r[t];
						o = o.charAt(0).toUpperCase() + o.slice(1), d["init" + o].call(d)
					}
					b("BeforeOpen"), d.st.showCloseBtn && (d.st.closeBtnInside ? (v(p, function(e, t, n, i) {
						n.close_replaceWith = w(i.type)
					}), h += " mfp-close-btn-in") : d.wrap.append(w())), d.st.alignTop && (h += " mfp-align-top"), d.fixedContentPos ? d.wrap.css({
						overflow: d.st.overflowY,
						overflowX: "hidden",
						overflowY: d.st.overflowY
					}) : d.wrap.css({
						top: g.scrollTop(),
						position: "absolute"
					}), (!1 === d.st.fixedBgPos || "auto" === d.st.fixedBgPos && !d.fixedContentPos) && d.bgOverlay.css({
						height: f.height(),
						position: "absolute"
					}), d.st.enableEscapeKey && f.on("keyup.mfp", function(e) {
						27 === e.keyCode && d.close()
					}), g.on("resize.mfp", function() {
						d.updateSize()
					}), d.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && d.wrap.addClass(h);
					var a = d.wH = g.height(),
						s = {};
					if (d.fixedContentPos && d._hasScrollBar(a)) {
						var l = d._getScrollbarSize();
						l && (s.marginRight = l)
					}
					d.fixedContentPos && (d.isIE7 ? c("body, html").css("overflow", "hidden") : s.overflow = "hidden");
					var u = d.st.mainClass;
					return d.isIE7 && (u += " mfp-ie7"), u && d._addClassToMFP(u), d.updateItemHTML(), b("BuildControls"), c("html").css(s), d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo || c(document.body)), d._lastFocusedEl = document.activeElement, setTimeout(function() {
						d.content ? (d._addClassToMFP(m), d._setFocus()) : d.bgOverlay.addClass(m), f.on("focusin.mfp", d._onFocusIn)
					}, 16), d.isOpen = !0, d.updateSize(a), b("Open"), e
				}
				d.updateItemHTML()
			},
			close: function() {
				d.isOpen && (b(l), d.isOpen = !1, d.st.removalDelay && !d.isLowIE && d.supportsTransition ? (d._addClassToMFP(n), setTimeout(function() {
					d._close()
				}, d.st.removalDelay)) : d._close())
			},
			_close: function() {
				b(s);
				var e = n + " " + m + " ";
				if (d.bgOverlay.detach(), d.wrap.detach(), d.container.empty(), d.st.mainClass && (e += d.st.mainClass + " "), d._removeClassFromMFP(e), d.fixedContentPos) {
					var t = {
						marginRight: ""
					};
					d.isIE7 ? c("body, html").css("overflow", "") : t.overflow = "", c("html").css(t)
				}
				f.off("keyup.mfp focusin.mfp"), d.ev.off(".mfp"), d.wrap.attr("class", "mfp-wrap").removeAttr("style"), d.bgOverlay.attr("class", "mfp-bg"), d.container.attr("class", "mfp-container"), !d.st.showCloseBtn || d.st.closeBtnInside && !0 !== d.currTemplate[d.currItem.type] || d.currTemplate.closeBtn && d.currTemplate.closeBtn.detach(), d.st.autoFocusLast && d._lastFocusedEl && c(d._lastFocusedEl).focus(), d.currItem = null, d.content = null, d.currTemplate = null, d.prevHeight = 0, b("AfterClose")
			},
			updateSize: function(e) {
				if (d.isIOS) {
					var t = document.documentElement.clientWidth / window.innerWidth,
						n = window.innerHeight * t;
					d.wrap.css("height", n), d.wH = n
				} else d.wH = e || g.height();
				d.fixedContentPos || d.wrap.css("height", d.wH), b("Resize")
			},
			updateItemHTML: function() {
				var e = d.items[d.index];
				d.contentContainer.detach(), d.content && d.content.detach(), e.parsed || (e = d.parseEl(d.index));
				var t = e.type;
				if (b("BeforeChange", [d.currItem ? d.currItem.type : "", t]), d.currItem = e, !d.currTemplate[t]) {
					var n = !!d.st[t] && d.st[t].markup;
					b("FirstMarkupParse", n), d.currTemplate[t] = !n || c(n)
				}
				r && r !== e.type && d.container.removeClass("mfp-" + r + "-holder");
				var i = d["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, d.currTemplate[t]);
				d.appendContent(i, t), e.preloaded = !0, b("Change", e), r = e.type, d.container.prepend(d.contentContainer), b("AfterChange")
			},
			appendContent: function(e, t) {
				(d.content = e) ? d.st.showCloseBtn && d.st.closeBtnInside && !0 === d.currTemplate[t] ? d.content.find(".mfp-close").length || d.content.append(w()) : d.content = e: d.content = "", b("BeforeAppend"), d.container.addClass("mfp-" + t + "-holder"), d.contentContainer.append(d.content)
			},
			parseEl: function(e) {
				var t, n = d.items[e];
				if ((n = n.tagName ? {
						el: c(n)
					} : (t = n.type, {
						data: n,
						src: n.src
					})).el) {
					for (var i = d.types, r = 0; r < i.length; r++)
						if (n.el.hasClass("mfp-" + i[r])) {
							t = i[r];
							break
						} n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
				}
				return n.type = t || d.st.type || "inline", n.index = e, n.parsed = !0, d.items[e] = n, b("ElementParse", n), d.items[e]
			},
			addGroup: function(t, n) {
				var e = function(e) {
					e.mfpEl = this, d._openClick(e, t, n)
				};
				n || (n = {});
				var i = "click.magnificPopup";
				n.mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, e)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
			},
			_openClick: function(e, t, n) {
				if ((void 0 !== n.midClick ? n.midClick : c.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
					var i = void 0 !== n.disableOn ? n.disableOn : c.magnificPopup.defaults.disableOn;
					if (i)
						if (c.isFunction(i)) {
							if (!i.call(d)) return !0
						} else if (g.width() < i) return !0;
					e.type && (e.preventDefault(), d.isOpen && e.stopPropagation()), n.el = c(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), d.open(n)
				}
			},
			updateStatus: function(e, t) {
				if (d.preloader) {
					i !== e && d.container.removeClass("mfp-s-" + i), t || "loading" !== e || (t = d.st.tLoading);
					var n = {
						status: e,
						text: t
					};
					b("UpdateStatus", n), e = n.status, t = n.text, d.preloader.html(t), d.preloader.find("a").on("click", function(e) {
						e.stopImmediatePropagation()
					}), d.container.addClass("mfp-s-" + e), i = e
				}
			},
			_checkIfClose: function(e) {
				if (!c(e).hasClass(a)) {
					var t = d.st.closeOnContentClick,
						n = d.st.closeOnBgClick;
					if (t && n) return !0;
					if (!d.content || c(e).hasClass("mfp-close") || d.preloader && e === d.preloader[0]) return !0;
					if (e === d.content[0] || c.contains(d.content[0], e)) {
						if (t) return !0
					} else if (n && c.contains(document, e)) return !0;
					return !1
				}
			},
			_addClassToMFP: function(e) {
				d.bgOverlay.addClass(e), d.wrap.addClass(e)
			},
			_removeClassFromMFP: function(e) {
				this.bgOverlay.removeClass(e), d.wrap.removeClass(e)
			},
			_hasScrollBar: function(e) {
				return (d.isIE7 ? f.height() : document.body.scrollHeight) > (e || g.height())
			},
			_setFocus: function() {
				(d.st.focus ? d.content.find(d.st.focus).eq(0) : d.wrap).focus()
			},
			_onFocusIn: function(e) {
				if (e.target !== d.wrap[0] && !c.contains(d.wrap[0], e.target)) return d._setFocus(), !1
			},
			_parseMarkup: function(r, e, t) {
				var o;
				t.data && (e = c.extend(t.data, e)), b(p, [r, e, t]), c.each(e, function(e, t) {
					if (void 0 === t || !1 === t) return !0;
					if (1 < (o = e.split("_")).length) {
						var n = r.find(".mfp-" + o[0]);
						if (0 < n.length) {
							var i = o[1];
							"replaceWith" === i ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(o[1], t)
						}
					} else r.find(".mfp-" + e).html(t)
				})
			},
			_getScrollbarSize: function() {
				if (void 0 === d.scrollbarSize) {
					var e = document.createElement("div");
					e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), d.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
				}
				return d.scrollbarSize
			}
		}, c.magnificPopup = {
			instance: null,
			proto: e.prototype,
			modules: [],
			open: function(e, t) {
				return o(), (e = e ? c.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
			},
			close: function() {
				return c.magnificPopup.instance && c.magnificPopup.instance.close()
			},
			registerModule: function(e, t) {
				t.options && (c.magnificPopup.defaults[e] = t.options), c.extend(this.proto, t.proto), this.modules.push(e)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading...",
				autoFocusLast: !0
			}
		}, c.fn.magnificPopup = function(e) {
			o();
			var t = c(this);
			if ("string" == typeof e)
				if ("open" === e) {
					var n, i = u ? t.data("magnificPopup") : t[0].magnificPopup,
						r = parseInt(arguments[1], 10) || 0;
					n = i.items ? i.items[r] : (n = t, i.delegate && (n = n.find(i.delegate)), n.eq(r)), d._openClick({
						mfpEl: n
					}, t, i)
				} else d.isOpen && d[e].apply(d, Array.prototype.slice.call(arguments, 1));
			else e = c.extend(!0, {}, e), u ? t.data("magnificPopup", e) : t[0].magnificPopup = e, d.addGroup(t, e);
			return t
		};
		var $, x, S, E, C, k = "inline",
			T = function() {
				S && (x.after(S.addClass($)).detach(), S = null)
			};
		c.magnificPopup.registerModule(k, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function() {
					d.types.push(k), v(s + "." + k, function() {
						T()
					})
				},
				getInline: function(e, t) {
					if (T(), e.src) {
						var n = d.st.inline,
							i = c(e.src);
						if (i.length) {
							var r = i[0].parentNode;
							r && r.tagName && (x || ($ = n.hiddenClass, x = y($), $ = "mfp-" + $), S = i.after(x).detach().removeClass($)), d.updateStatus("ready")
						} else d.updateStatus("error", n.tNotFound), i = c("<div>");
						return e.inlineElement = i
					}
					return d.updateStatus("ready"), d._parseMarkup(t, {}, e), t
				}
			}
		}), c.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function() {
					var e = d.st.image,
						t = ".image";
					d.types.push("image"), v("Open" + t, function() {
						"image" === d.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
					}), v(s + t, function() {
						e.cursor && c(document.body).removeClass(e.cursor), g.off("resize.mfp")
					}), v("Resize" + t, d.resizeImage), d.isLowIE && v("AfterChange", d.resizeImage)
				},
				resizeImage: function() {
					var e = d.currItem;
					if (e && e.img && d.st.image.verticalFit) {
						var t = 0;
						d.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", d.wH - t)
					}
				},
				_onImageHasSize: function(e) {
					e.img && (e.hasSize = !0, E && clearInterval(E), e.isCheckingImgSize = !1, b("ImageHasSize", e), e.imgHidden && (d.content && d.content.removeClass("mfp-loading"), e.imgHidden = !1))
				},
				findImageSize: function(t) {
					var n = 0,
						i = t.img[0],
						r = function(e) {
							E && clearInterval(E), E = setInterval(function() {
								0 < i.naturalWidth ? d._onImageHasSize(t) : (200 < n && clearInterval(E), 3 == ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500))
							}, e)
						};
					r(1)
				},
				getImage: function(e, t) {
					var n = 0,
						i = function() {
							e && (e.img[0].complete ? (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, b("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : r())
						},
						r = function() {
							e && (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("error", o.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
						},
						o = d.st.image,
						a = t.find(".mfp-img");
					if (a.length) {
						var s = document.createElement("img");
						s.className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = c(s).on("load.mfploader", i).on("error.mfploader", r), s.src = e.src, a.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)
					}
					return d._parseMarkup(t, {
						title: function(e) {
							if (e.data && void 0 !== e.data.title) return e.data.title;
							var t = d.st.image.titleSrc;
							if (t) {
								if (c.isFunction(t)) return t.call(d, e);
								if (e.el) return e.el.attr(t) || ""
							}
							return ""
						}(e),
						img_replaceWith: e.img
					}, e), d.resizeImage(), e.hasSize ? (E && clearInterval(E), e.loadError ? (t.addClass("mfp-loading"), d.updateStatus("error", o.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), d.updateStatus("ready"))) : (d.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), d.findImageSize(e))), t
				}
			}
		}), c.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function(e) {
					return e.is("img") ? e : e.find("img")
				}
			},
			proto: {
				initZoom: function() {
					var e, o = d.st.zoom;
					if (o.enabled && d.supportsTransition) {
						var t, n, i = o.duration,
							r = function(e) {
								var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									n = "all " + o.duration / 1e3 + "s " + o.easing,
									i = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									r = "transition";
								return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = n, t.css(i), t
							},
							a = function() {
								d.content.css("visibility", "visible")
							};
						v("BuildControls.zoom", function() {
							if (d._allowZoom()) {
								if (clearTimeout(t), d.content.css("visibility", "hidden"), !(e = d._getItemToZoom())) return void a();
								(n = r(e)).css(d._getOffset()), d.wrap.append(n), t = setTimeout(function() {
									n.css(d._getOffset(!0)), t = setTimeout(function() {
										a(), setTimeout(function() {
											n.remove(), e = n = null, b("ZoomAnimationEnded")
										}, 16)
									}, i)
								}, 16)
							}
						}), v(l + ".zoom", function() {
							if (d._allowZoom()) {
								if (clearTimeout(t), d.st.removalDelay = i, !e) {
									if (!(e = d._getItemToZoom())) return;
									n = r(e)
								}
								n.css(d._getOffset(!0)), d.wrap.append(n), d.content.css("visibility", "hidden"), setTimeout(function() {
									n.css(d._getOffset())
								}, 16)
							}
						}), v(s + ".zoom", function() {
							d._allowZoom() && (a(), n && n.remove(), e = null)
						})
					}
				},
				_allowZoom: function() {
					return "image" === d.currItem.type
				},
				_getItemToZoom: function() {
					return !!d.currItem.hasSize && d.currItem.img
				},
				_getOffset: function(e) {
					var t, n = (t = e ? d.currItem.img : d.st.zoom.opener(d.currItem.el || d.currItem)).offset(),
						i = parseInt(t.css("padding-top"), 10),
						r = parseInt(t.css("padding-bottom"), 10);
					n.top -= c(window).scrollTop() - i;
					var o = {
						width: t.width(),
						height: (u ? t.innerHeight() : t[0].offsetHeight) - r - i
					};
					return void 0 === C && (C = void 0 !== document.createElement("p").style.MozTransform), C ? o["-moz-transform"] = o.transform = "translate(" + n.left + "px," + n.top + "px)" : (o.left = n.left, o.top = n.top), o
				}
			}
		});
		var _ = function(e) {
				var t = d.items.length;
				return t - 1 < e ? e - t : e < 0 ? t + e : e
			},
			A = function(e, t, n) {
				return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
			};
		c.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function() {
					var o = d.st.gallery,
						e = ".mfp-gallery";
					if (d.direction = !0, !o || !o.enabled) return !1;
					h += " mfp-gallery", v("Open" + e, function() {
						o.navigateByImgClick && d.wrap.on("click" + e, ".mfp-img", function() {
							if (1 < d.items.length) return d.next(), !1
						}), f.on("keydown" + e, function(e) {
							37 === e.keyCode ? d.prev() : 39 === e.keyCode && d.next()
						})
					}), v("UpdateStatus" + e, function(e, t) {
						t.text && (t.text = A(t.text, d.currItem.index, d.items.length))
					}), v(p + e, function(e, t, n, i) {
						var r = d.items.length;
						n.counter = 1 < r ? A(o.tCounter, i.index, r) : ""
					}), v("BuildControls" + e, function() {
						if (1 < d.items.length && o.arrows && !d.arrowLeft) {
							var e = o.arrowMarkup,
								t = d.arrowLeft = c(e.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(a),
								n = d.arrowRight = c(e.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(a);
							t.click(function() {
								d.prev()
							}), n.click(function() {
								d.next()
							}), d.container.append(t.add(n))
						}
					}), v("Change" + e, function() {
						d._preloadTimeout && clearTimeout(d._preloadTimeout), d._preloadTimeout = setTimeout(function() {
							d.preloadNearbyImages(), d._preloadTimeout = null
						}, 16)
					}), v(s + e, function() {
						f.off(e), d.wrap.off("click" + e), d.arrowRight = d.arrowLeft = null
					})
				},
				next: function() {
					d.direction = !0, d.index = _(d.index + 1), d.updateItemHTML()
				},
				prev: function() {
					d.direction = !1, d.index = _(d.index - 1), d.updateItemHTML()
				},
				goTo: function(e) {
					d.direction = e >= d.index, d.index = e, d.updateItemHTML()
				},
				preloadNearbyImages: function() {
					var e, t = d.st.gallery.preload,
						n = Math.min(t[0], d.items.length),
						i = Math.min(t[1], d.items.length);
					for (e = 1; e <= (d.direction ? i : n); e++) d._preloadItem(d.index + e);
					for (e = 1; e <= (d.direction ? n : i); e++) d._preloadItem(d.index - e)
				},
				_preloadItem: function(e) {
					if (e = _(e), !d.items[e].preloaded) {
						var t = d.items[e];
						t.parsed || (t = d.parseEl(e)), b("LazyLoad", t), "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
							t.hasSize = !0
						}).on("error.mfploader", function() {
							t.hasSize = !0, t.loadError = !0, b("LazyLoadError", t)
						}).attr("src", t.src)), t.preloaded = !0
					}
				}
			}
		});
		var P = "retina";
		c.magnificPopup.registerModule(P, {
			options: {
				replaceSrc: function(e) {
					return e.src.replace(/\.\w+$/, function(e) {
						return "@2x" + e
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function() {
					if (1 < window.devicePixelRatio) {
						var n = d.st.retina,
							i = n.ratio;
						1 < (i = isNaN(i) ? i() : i) && (v("ImageHasSize." + P, function(e, t) {
							t.img.css({
								"max-width": t.img[0].naturalWidth / i,
								width: "100%"
							})
						}), v("ElementParse." + P, function(e, t) {
							t.src = n.replaceSrc(t, i)
						}))
					}
				}
			}
		}), o()
	}),
	function o(a, s, l) {
		function u(t, e) {
			if (!s[t]) {
				if (!a[t]) {
					var n = "function" == typeof require && require;
					if (!e && n) return n(t, !0);
					if (c) return c(t, !0);
					var i = new Error("Cannot find module '" + t + "'");
					throw i.code = "MODULE_NOT_FOUND", i
				}
				var r = s[t] = {
					exports: {}
				};
				a[t][0].call(r.exports, function(e) {
					return u(a[t][1][e] || e)
				}, r, r.exports, o, a, s, l)
			}
			return s[t].exports
		}
		for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
		return u
	}({
		1: [function(e, t, n) {}, {}],
		2: [function(r, o, e) {
			(function(e) {
				var t, n = void 0 !== e ? e : "undefined" != typeof window ? window : {},
					i = r(1);
				"undefined" != typeof document ? t = document : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = i), o.exports = t
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			1: 1
		}],
		3: [function(e, n, t) {
			(function(e) {
				var t;
				t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		4: [function(e, n, t) {
			! function(e) {
				var t = setTimeout;

				function i() {}

				function o(e) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof e) throw new TypeError("not a function");
					this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
				}

				function r(n, i) {
					for (; 3 === n._state;) n = n._value;
					0 !== n._state ? (n._handled = !0, o._immediateFn(function() {
						var e = 1 === n._state ? i.onFulfilled : i.onRejected;
						if (null !== e) {
							var t;
							try {
								t = e(n._value)
							} catch (e) {
								return void s(i.promise, e)
							}
							a(i.promise, t)
						} else(1 === n._state ? a : s)(i.promise, n._value)
					})) : n._deferreds.push(i)
				}

				function a(e, t) {
					try {
						if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
						if (t && ("object" == typeof t || "function" == typeof t)) {
							var n = t.then;
							if (t instanceof o) return e._state = 3, e._value = t, void l(e);
							if ("function" == typeof n) return void c((i = n, r = t, function() {
								i.apply(r, arguments)
							}), e)
						}
						e._state = 1, e._value = t, l(e)
					} catch (t) {
						s(e, t)
					}
					var i, r
				}

				function s(e, t) {
					e._state = 2, e._value = t, l(e)
				}

				function l(e) {
					2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
						e._handled || o._unhandledRejectionFn(e._value)
					});
					for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
					e._deferreds = null
				}

				function u(e, t, n) {
					this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
				}

				function c(e, t) {
					var n = !1;
					try {
						e(function(e) {
							n || (n = !0, a(t, e))
						}, function(e) {
							n || (n = !0, s(t, e))
						})
					} catch (e) {
						if (n) return;
						n = !0, s(t, e)
					}
				}
				o.prototype.catch = function(e) {
					return this.then(null, e)
				}, o.prototype.then = function(e, t) {
					var n = new this.constructor(i);
					return r(this, new u(e, t, n)), n
				}, o.all = function(e) {
					var s = Array.prototype.slice.call(e);
					return new o(function(i, r) {
						if (0 === s.length) return i([]);
						var o = s.length;

						function a(t, e) {
							try {
								if (e && ("object" == typeof e || "function" == typeof e)) {
									var n = e.then;
									if ("function" == typeof n) return void n.call(e, function(e) {
										a(t, e)
									}, r)
								}
								s[t] = e, 0 == --o && i(s)
							} catch (e) {
								r(e)
							}
						}
						for (var e = 0; e < s.length; e++) a(e, s[e])
					})
				}, o.resolve = function(t) {
					return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
						e(t)
					})
				}, o.reject = function(n) {
					return new o(function(e, t) {
						t(n)
					})
				}, o.race = function(r) {
					return new o(function(e, t) {
						for (var n = 0, i = r.length; n < i; n++) r[n].then(e, t)
					})
				}, o._immediateFn = "function" == typeof setImmediate && function(e) {
					setImmediate(e)
				} || function(e) {
					t(e, 0)
				}, o._unhandledRejectionFn = function(e) {
					"undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
				}, o._setImmediateFn = function(e) {
					o._immediateFn = e
				}, o._setUnhandledRejectionFn = function(e) {
					o._unhandledRejectionFn = e
				}, void 0 !== n && n.exports ? n.exports = o : e.Promise || (e.Promise = o)
			}(this)
		}, {}],
		5: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				r = (i = e(7)) && i.__esModule ? i : {
					default: i
				},
				o = e(15),
				s = e(27),
				l = {
					lang: "en",
					en: o.EN,
					language: function() {
						for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						if (null != t && t.length) {
							if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
							if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");
							l.lang = t[0], void 0 === l[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) ? t[1] : {}, l[t[0]] = (0, s.isObjectEmpty)(t[1]) ? o.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) && (l[t[0]] = t[1])
						}
						return l.lang
					},
					t: function(e) {
						var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
						if ("string" == typeof e && e.length) {
							var n = void 0,
								i = void 0,
								r = l.language(),
								o = function(e, t, n) {
									return "object" !== (void 0 === e ? "undefined" : a(e)) || "number" != typeof t || "number" != typeof n ? e : [function() {
										return arguments.length <= 1 ? void 0 : arguments[1]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
									}, function() {
										return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
									}, function() {
										return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 0 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
									}, function() {
										return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : 6 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
									}, function() {
										return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : 3 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : 11 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : 10 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
									}, function() {
										return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
									}, function() {
										return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
									}, function() {
										return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
									}, function() {
										return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
									}][n].apply(null, [t].concat(e))
								};
							return void 0 !== l[r] && (n = l[r][e], null !== t && "number" == typeof t && (i = l[r]["mejs.plural-form"], n = o.apply(null, [n, t, i]))), !n && l.en && (n = l.en[e], null !== t && "number" == typeof t && (i = l.en["mejs.plural-form"], n = o.apply(null, [n, t, i]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, s.escapeHTML)(n)
						}
						return e
					}
				};
			r.default.i18n = l, "undefined" != typeof mejsL10n && r.default.i18n.language(mejsL10n.language, mejsL10n.strings), n.default = l
		}, {
			15: 15,
			27: 27,
			7: 7
		}],
		6: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				O = i(e(3)),
				D = i(e(2)),
				N = i(e(7)),
				j = e(27),
				I = e(28),
				L = e(8),
				F = e(25);

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var r = function n(e, t, i) {
				var d = this;
				! function(e, t) {
					if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
				}(this);
				var f = this;
				i = Array.isArray(i) ? i : null, f.defaults = {
					renderers: [],
					fakeNodeName: "mediaelementwrapper",
					pluginPath: "build/",
					shimScriptAccess: "sameDomain"
				}, t = Object.assign(f.defaults, t), f.mediaElement = D.default.createElement(t.fakeNodeName);
				var r = e,
					o = !1;
				if ("string" == typeof e ? f.mediaElement.originalNode = D.default.getElementById(e) : r = (f.mediaElement.originalNode = e).id, void 0 === f.mediaElement.originalNode || null === f.mediaElement.originalNode) return null;
				f.mediaElement.options = t, r = r || "mejs_" + Math.random().toString().slice(2), f.mediaElement.originalNode.setAttribute("id", r + "_from_mejs");
				var a = f.mediaElement.originalNode.tagName.toLowerCase(); - 1 < ["video", "audio"].indexOf(a) && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"), f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode), f.mediaElement.appendChild(f.mediaElement.originalNode);
				var s = function(t, e) {
						if ("https:" === O.default.location.protocol && 0 === t.indexOf("http:") && F.IS_IOS && -1 < N.default.html5media.mediaTypes.indexOf(e)) {
							var n = new XMLHttpRequest;
							n.onreadystatechange = function() {
								if (4 !== this.readyState || 200 !== this.status) return t;
								var e = (O.default.URL || O.default.webkitURL).createObjectURL(this.response);
								return f.mediaElement.originalNode.setAttribute("src", e), e
							}, n.open("GET", t), n.responseType = "blob", n.send()
						}
						return t
					},
					l = void 0;
				if (null !== i) l = i;
				else if (null !== f.mediaElement.originalNode) switch (l = [], f.mediaElement.originalNode.nodeName.toLowerCase()) {
					case "iframe":
						l.push({
							type: "",
							src: f.mediaElement.originalNode.getAttribute("src")
						});
						break;
					case "audio":
					case "video":
						var u = f.mediaElement.originalNode.children.length,
							c = f.mediaElement.originalNode.getAttribute("src");
						if (c) {
							var h = f.mediaElement.originalNode,
								p = (0, I.formatType)(c, h.getAttribute("type"));
							l.push({
								type: p,
								src: s(c, p)
							})
						}
						for (var m = 0; m < u; m++) {
							var g = f.mediaElement.originalNode.children[m];
							if ("source" === g.tagName.toLowerCase()) {
								var v = g.getAttribute("src"),
									y = (0, I.formatType)(v, g.getAttribute("type"));
								l.push({
									type: y,
									src: s(v, y)
								})
							}
						}
				}
				f.mediaElement.id = r, f.mediaElement.renderers = {}, f.mediaElement.events = {}, f.mediaElement.promises = [], f.mediaElement.renderer = null, f.mediaElement.rendererName = null, f.mediaElement.changeRenderer = function(e, t) {
					var n = d,
						i = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
					if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(i), !0;
					void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
					var r = n.mediaElement.renderers[e],
						o = null;
					if (null != r) return r.show(), r.setSrc(i), n.mediaElement.renderer = r, n.mediaElement.rendererName = e, !0;
					for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : L.renderer.order, s = 0, l = a.length; s < l; s++) {
						var u = a[s];
						if (u === e) {
							o = L.renderer.renderers[u];
							var c = Object.assign(o.options, n.mediaElement.options);
							return (r = o.create(n.mediaElement, c, t)).name = e, n.mediaElement.renderers[o.name] = r, n.mediaElement.renderer = r, n.mediaElement.rendererName = e, r.show(), !0
						}
					}
					return !1
				}, f.mediaElement.setSize = function(e, t) {
					void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(e, t)
				}, f.mediaElement.generateError = function(e, t) {
					e = e || "", t = Array.isArray(t) ? t : [];
					var n = (0, j.createEvent)("error", f.mediaElement);
					n.message = e, n.urls = t, f.mediaElement.dispatchEvent(n), o = !0
				};
				var b = N.default.html5media.properties,
					w = N.default.html5media.methods,
					$ = function(t, e, n, i) {
						var r = t[e];
						Object.defineProperty(t, e, {
							get: function() {
								return n.apply(t, [r])
							},
							set: function(e) {
								return r = i.apply(t, [e])
							}
						})
					},
					x = function(e) {
						if ("src" !== e) {
							var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
								n = function() {
									return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["get" + t] ? f.mediaElement.renderer["get" + t]() : null
								},
								i = function(e) {
									void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["set" + t] && f.mediaElement.renderer["set" + t](e)
								};
							$(f.mediaElement, e, n, i), f.mediaElement["get" + t] = n, f.mediaElement["set" + t] = i
						}
					},
					S = function() {
						return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
					},
					E = function(e) {
						var t = [];
						if ("string" == typeof e) t.push({
							src: e,
							type: e ? (0, I.getTypeFromFile)(e) : ""
						});
						else if ("object" === (void 0 === e ? "undefined" : M(e)) && void 0 !== e.src) {
							var n = (0, I.absolutizeUrl)(e.src),
								i = e.type,
								r = Object.assign(e, {
									src: n,
									type: "" !== i && null != i || !n ? i : (0, I.getTypeFromFile)(n)
								});
							t.push(r)
						} else if (Array.isArray(e))
							for (var o = 0, a = e.length; o < a; o++) {
								var s = (0, I.absolutizeUrl)(e[o].src),
									l = e[o].type,
									u = Object.assign(e[o], {
										src: s,
										type: "" !== l && null != l || !s ? l : (0, I.getTypeFromFile)(s)
									});
								t.push(u)
							}
						var c = L.renderer.select(t, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : []),
							d = void 0;
						if (f.mediaElement.paused || null == f.mediaElement.src || "" === f.mediaElement.src || (f.mediaElement.pause(), d = (0, j.createEvent)("pause", f.mediaElement), f.mediaElement.dispatchEvent(d)), f.mediaElement.originalNode.src = t[0].src || "", null !== c || !t[0].src) return null != t[0].src && "" !== t[0].src ? f.mediaElement.changeRenderer(c.rendererName, t) : null;
						f.mediaElement.generateError("No renderer found", t)
					},
					C = function(e, t) {
						try {
							if ("play" !== e || "native_dash" !== f.mediaElement.rendererName && "native_hls" !== f.mediaElement.rendererName && "vimeo_iframe" !== f.mediaElement.rendererName) f.mediaElement.renderer[e](t);
							else {
								var n = f.mediaElement.renderer[e](t);
								n && "function" == typeof n.then && n.catch(function() {
									f.mediaElement.paused && setTimeout(function() {
										var e = f.mediaElement.renderer.play();
										void 0 !== e && e.catch(function() {
											f.mediaElement.renderer.paused || f.mediaElement.renderer.pause()
										})
									}, 150)
								})
							}
						} catch (e) {
							f.mediaElement.generateError(e, l)
						}
					},
					k = function(i) {
						f.mediaElement[i] = function() {
							for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[i] && (f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
								C(i, t)
							}).catch(function(e) {
								f.mediaElement.generateError(e, l)
							}) : C(i, t)), null
						}
					};
				$(f.mediaElement, "src", S, E), f.mediaElement.getSrc = S, f.mediaElement.setSrc = E;
				for (var T = 0, _ = b.length; T < _; T++) x(b[T]);
				for (var A = 0, P = w.length; A < P; A++) k(w[A]);
				return f.mediaElement.addEventListener = function(e, t) {
					f.mediaElement.events[e] = f.mediaElement.events[e] || [], f.mediaElement.events[e].push(t)
				}, f.mediaElement.removeEventListener = function(e, t) {
					if (!e) return f.mediaElement.events = {}, !0;
					var n = f.mediaElement.events[e];
					if (!n) return !0;
					if (!t) return f.mediaElement.events[e] = [], !0;
					for (var i = 0; i < n.length; i++)
						if (n[i] === t) return f.mediaElement.events[e].splice(i, 1), !0;
					return !1
				}, f.mediaElement.dispatchEvent = function(e) {
					var t = f.mediaElement.events[e.type];
					if (t)
						for (var n = 0; n < t.length; n++) t[n].apply(null, [e])
				}, f.mediaElement.destroy = function() {
					var e = f.mediaElement.originalNode.cloneNode(!0),
						t = f.mediaElement.parentElement;
					e.removeAttribute("id"), e.remove(), f.mediaElement.remove(), t.appendChild(e)
				}, l.length && (f.mediaElement.src = l), f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
					f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode)
				}).catch(function() {
					o && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)
				}) : (f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode), o && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)), f.mediaElement
			};
			O.default.MediaElement = r, N.default.MediaElement = r, n.default = r
		}, {
			2: 2,
			25: 25,
			27: 27,
			28: 28,
			3: 3,
			7: 7,
			8: 8
		}],
		7: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, r = {
				version: "4.2.16",
				html5media: {
					properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
					readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
					methods: ["load", "play", "pause", "canPlayType"],
					events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
					mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
				}
			};
			((i = e(3)) && i.__esModule ? i : {
				default: i
			}).default.mejs = r, n.default = r
		}, {
			3: 3
		}],
		8: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.renderer = void 0;
			var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				o = function() {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				a = (i = e(7)) && i.__esModule ? i : {
					default: i
				},
				s = function() {
					function n() {
						! function(e, t) {
							if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
						}(this), this.renderers = {}, this.order = []
					}
					return o(n, [{
						key: "add",
						value: function(e) {
							if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
							this.renderers[e.name] = e, this.order.push(e.name)
						}
					}, {
						key: "select",
						value: function(e) {
							var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
								n = t.length;
							if (t = t.length ? t : this.order, !n) {
								var i = [/^(html5|native)/i, /^flash/i, /iframe$/i],
									r = function(e) {
										for (var t = 0, n = i.length; t < n; t++)
											if (i[t].test(e)) return t;
										return i.length
									};
								t.sort(function(e, t) {
									return r(e) - r(t)
								})
							}
							for (var o = 0, a = t.length; o < a; o++) {
								var s = t[o],
									l = this.renderers[s];
								if (null != l)
									for (var u = 0, c = e.length; u < c; u++)
										if ("function" == typeof l.canPlayType && "string" == typeof e[u].type && l.canPlayType(e[u].type)) return {
											rendererName: l.name,
											src: e[u].src
										}
							}
							return null
						}
					}, {
						key: "order",
						set: function(e) {
							if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
							this._order = e
						},
						get: function() {
							return this._order
						}
					}, {
						key: "renderers",
						set: function(e) {
							if (null !== e && "object" !== (void 0 === e ? "undefined" : r(e))) throw new TypeError("renderers must be an array of objects.");
							this._renderers = e
						},
						get: function() {
							return this._renderers
						}
					}]), n
				}(),
				l = n.renderer = new s;
			a.default.Renderers = l
		}, {
			7: 7
		}],
		9: [function(e, t, n) {
			"use strict";
			var f = a(e(3)),
				h = a(e(2)),
				r = a(e(5)),
				i = e(16),
				o = a(i),
				p = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(e(25)),
				m = e(27),
				g = e(26),
				v = e(28);

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				usePluginFullScreen: !0,
				fullscreenText: null,
				useFakeFullscreen: !1
			}), Object.assign(o.default.prototype, {
				isFullScreen: !1,
				isNativeFullScreen: !1,
				isInIframe: !1,
				isPluginClickThroughCreated: !1,
				fullscreenMode: "",
				containerSizeTimeout: null,
				buildfullscreen: function(n) {
					if (n.isVideo) {
						n.isInIframe = f.default.location !== f.default.parent.location, n.detectFullscreenMode();
						var i = this,
							e = (0, m.isString)(i.options.fullscreenText) ? i.options.fullscreenText : r.default.t("mejs.fullscreen"),
							t = h.default.createElement("div");
						t.className = i.options.classPrefix + "button " + i.options.classPrefix + "fullscreen-button", t.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + e + '" aria-label="' + e + '" tabindex="0"></button>', i.addControlElement(t, "fullscreen"), t.addEventListener("click", function() {
							p.HAS_TRUE_NATIVE_FULLSCREEN && p.IS_FULLSCREEN || n.isFullScreen ? n.exitFullScreen() : n.enterFullScreen()
						}), n.fullscreenBtn = t, i.options.keyActions.push({
							keys: [70],
							action: function(e, t, n, i) {
								i.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
							}
						}), i.exitFullscreenCallback = function(e) {
							var t = e.which || e.keyCode || 0;
							i.options.enableKeyboard && 27 === t && (p.HAS_TRUE_NATIVE_FULLSCREEN && p.IS_FULLSCREEN || i.isFullScreen) && n.exitFullScreen()
						}, i.globalBind("keydown", i.exitFullscreenCallback), i.normalHeight = 0, i.normalWidth = 0, p.HAS_TRUE_NATIVE_FULLSCREEN && n.globalBind(p.FULLSCREEN_EVENT_NAME, function() {
							n.isFullScreen && (p.isFullScreen() ? (n.isNativeFullScreen = !0, n.setControlsSize()) : (n.isNativeFullScreen = !1, n.exitFullScreen()))
						})
					}
				},
				cleanfullscreen: function(e) {
					e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback)
				},
				detectFullscreenMode: function() {
					var e = null !== this.media.rendererName && /(native|html5)/i.test(this.media.rendererName),
						t = "";
					return p.HAS_TRUE_NATIVE_FULLSCREEN && e ? t = "native-native" : p.HAS_TRUE_NATIVE_FULLSCREEN && !e ? t = "plugin-native" : this.usePluginFullScreen && p.SUPPORT_POINTER_EVENTS && (t = "plugin-click"), this.fullscreenMode = t
				},
				enterFullScreen: function() {
					var i = this,
						e = null !== i.media.rendererName && /(html5|native)/i.test(i.media.rendererName),
						t = getComputedStyle(i.getElement(i.container));
					if (i.isVideo)
						if (!1 === i.options.useFakeFullscreen && p.IS_IOS && p.HAS_IOS_FULLSCREEN && "function" == typeof i.media.originalNode.webkitEnterFullscreen && i.media.originalNode.canPlayType((0, v.getTypeFromFile)(i.media.getSrc()))) i.media.originalNode.webkitEnterFullscreen();
						else {
							if ((0, g.addClass)(h.default.documentElement, i.options.classPrefix + "fullscreen"), (0, g.addClass)(i.getElement(i.container), i.options.classPrefix + "container-fullscreen"), i.normalHeight = parseFloat(t.height), i.normalWidth = parseFloat(t.width), "native-native" !== i.fullscreenMode && "plugin-native" !== i.fullscreenMode || (p.requestFullScreen(i.getElement(i.container)), i.isInIframe && setTimeout(function e() {
									if (i.isNativeFullScreen) {
										var t = f.default.innerWidth || h.default.documentElement.clientWidth || h.default.body.clientWidth,
											n = screen.width;
										.002 * n < Math.abs(n - t) ? i.exitFullScreen() : setTimeout(e, 500)
									}
								}, 1e3)), i.getElement(i.container).style.width = "100%", i.getElement(i.container).style.height = "100%", i.containerSizeTimeout = setTimeout(function() {
									i.getElement(i.container).style.width = "100%", i.getElement(i.container).style.height = "100%", i.setControlsSize()
								}, 500), e) i.node.style.width = "100%", i.node.style.height = "100%";
							else
								for (var n = i.getElement(i.container).querySelectorAll("embed, object, video"), r = n.length, o = 0; o < r; o++) n[o].style.width = "100%", n[o].style.height = "100%";
							i.options.setDimensions && "function" == typeof i.media.setSize && i.media.setSize(screen.width, screen.height);
							for (var a = i.getElement(i.layers).children, s = a.length, l = 0; l < s; l++) a[l].style.width = "100%", a[l].style.height = "100%";
							i.fullscreenBtn && ((0, g.removeClass)(i.fullscreenBtn, i.options.classPrefix + "fullscreen"), (0, g.addClass)(i.fullscreenBtn, i.options.classPrefix + "unfullscreen")), i.setControlsSize(), i.isFullScreen = !0;
							var u = Math.min(screen.width / i.width, screen.height / i.height),
								c = i.getElement(i.container).querySelector("." + i.options.classPrefix + "captions-text");
							c && (c.style.fontSize = 100 * u + "%", c.style.lineHeight = "normal", i.getElement(i.container).querySelector("." + i.options.classPrefix + "captions-position").style.bottom = (screen.height - i.normalHeight) / 2 - i.getElement(i.controls).offsetHeight / 2 + u + 15 + "px");
							var d = (0, m.createEvent)("enteredfullscreen", i.getElement(i.container));
							i.getElement(i.container).dispatchEvent(d)
						}
				},
				exitFullScreen: function() {
					var e = this,
						t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
					if (e.isVideo) {
						if (clearTimeout(e.containerSizeTimeout), p.HAS_TRUE_NATIVE_FULLSCREEN && (p.IS_FULLSCREEN || e.isFullScreen) && p.cancelFullScreen(), (0, g.removeClass)(h.default.documentElement, e.options.classPrefix + "fullscreen"), (0, g.removeClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
							if (e.getElement(e.container).style.width = e.normalWidth + "px", e.getElement(e.container).style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
							else
								for (var n = e.getElement(e.container).querySelectorAll("embed, object, video"), i = n.length, r = 0; r < i; r++) n[r].style.width = e.normalWidth + "px", n[r].style.height = e.normalHeight + "px";
							"function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
							for (var o = e.getElement(e.layers).children, a = o.length, s = 0; s < a; s++) o[s].style.width = e.normalWidth + "px", o[s].style.height = e.normalHeight + "px"
						}
						e.fullscreenBtn && ((0, g.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, g.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
						var l = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
						l && (l.style.fontSize = "", l.style.lineHeight = "", e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
						var u = (0, m.createEvent)("exitedfullscreen", e.getElement(e.container));
						e.getElement(e.container).dispatchEvent(u)
					}
				}
			})
		}, {
			16: 16,
			2: 2,
			25: 25,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			5: 5
		}],
		10: [function(e, t, n) {
			"use strict";
			var d = o(e(2)),
				i = e(16),
				r = o(i),
				f = o(e(5)),
				h = e(27),
				p = e(26);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				playText: null,
				pauseText: null
			}), Object.assign(r.default.prototype, {
				buildplaypause: function(e, t, n, i) {
					var r = this,
						o = r.options,
						a = (0, h.isString)(o.playText) ? o.playText : f.default.t("mejs.play"),
						s = (0, h.isString)(o.pauseText) ? o.pauseText : f.default.t("mejs.pause"),
						l = d.default.createElement("div");
					l.className = r.options.classPrefix + "button " + r.options.classPrefix + "playpause-button " + r.options.classPrefix + "play", l.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + a + '" aria-label="' + s + '" tabindex="0"></button>', l.addEventListener("click", function() {
						r.paused ? r.play() : r.pause()
					});
					var u = l.querySelector("button");

					function c(e) {
						"play" === e ? ((0, p.removeClass)(l, r.options.classPrefix + "play"), (0, p.removeClass)(l, r.options.classPrefix + "replay"), (0, p.addClass)(l, r.options.classPrefix + "pause"), u.setAttribute("title", s), u.setAttribute("aria-label", s)) : ((0, p.removeClass)(l, r.options.classPrefix + "pause"), (0, p.removeClass)(l, r.options.classPrefix + "replay"), (0, p.addClass)(l, r.options.classPrefix + "play"), u.setAttribute("title", a), u.setAttribute("aria-label", a))
					}
					r.addControlElement(l, "playpause"), c("pse"), i.addEventListener("loadedmetadata", function() {
						-1 === i.rendererName.indexOf("flash") && c("pse")
					}), i.addEventListener("play", function() {
						c("play")
					}), i.addEventListener("playing", function() {
						c("play")
					}), i.addEventListener("pause", function() {
						c("pse")
					}), i.addEventListener("ended", function() {
						e.options.loop || ((0, p.removeClass)(l, r.options.classPrefix + "pause"), (0, p.removeClass)(l, r.options.classPrefix + "play"), (0, p.addClass)(l, r.options.classPrefix + "replay"), u.setAttribute("title", a), u.setAttribute("aria-label", a))
					})
				}
			})
		}, {
			16: 16,
			2: 2,
			26: 26,
			27: 27,
			5: 5
		}],
		11: [function(e, t, n) {
			"use strict";
			var h = o(e(2)),
				i = e(16),
				r = o(i),
				p = o(e(5)),
				y = e(25),
				b = e(30),
				w = e(26);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				enableProgressTooltip: !0,
				useSmoothHover: !0,
				forceLive: !1
			}), Object.assign(r.default.prototype, {
				buildprogress: function(m, s, e, u) {
					var c = 0,
						g = !1,
						d = !1,
						v = this,
						t = m.options.autoRewind,
						n = m.options.enableProgressTooltip ? '<span class="' + v.options.classPrefix + 'time-float"><span class="' + v.options.classPrefix + 'time-float-current">00:00</span><span class="' + v.options.classPrefix + 'time-float-corner"></span></span>' : "",
						i = h.default.createElement("div");
					i.className = v.options.classPrefix + "time-rail", i.innerHTML = '<span class="' + v.options.classPrefix + "time-total " + v.options.classPrefix + 'time-slider"><span class="' + v.options.classPrefix + 'time-buffering"></span><span class="' + v.options.classPrefix + 'time-loaded"></span><span class="' + v.options.classPrefix + 'time-current"></span><span class="' + v.options.classPrefix + 'time-hovered no-hover"></span><span class="' + v.options.classPrefix + 'time-handle"><span class="' + v.options.classPrefix + 'time-handle-content"></span></span>' + n + "</span>", v.addControlElement(i, "progress"), v.options.keyActions.push({
						keys: [37, 227],
						action: function(e) {
							if (!isNaN(e.duration) && 0 < e.duration) {
								e.isVideo && (e.showControls(), e.startControlsTimer());
								var t = e.getElement(e.container).querySelector("." + v.options.classPrefix + "time-total");
								t && t.focus();
								var n = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
								e.paused || e.pause(), setTimeout(function() {
									e.setCurrentTime(n)
								}, 0), setTimeout(function() {
									e.play()
								}, 0)
							}
						}
					}, {
						keys: [39, 228],
						action: function(e) {
							if (!isNaN(e.duration) && 0 < e.duration) {
								e.isVideo && (e.showControls(), e.startControlsTimer());
								var t = e.getElement(e.container).querySelector("." + v.options.classPrefix + "time-total");
								t && t.focus();
								var n = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
								e.paused || e.pause(), setTimeout(function() {
									e.setCurrentTime(n)
								}, 0), setTimeout(function() {
									e.play()
								}, 0)
							}
						}
					}), v.rail = s.querySelector("." + v.options.classPrefix + "time-rail"), v.total = s.querySelector("." + v.options.classPrefix + "time-total"), v.loaded = s.querySelector("." + v.options.classPrefix + "time-loaded"), v.current = s.querySelector("." + v.options.classPrefix + "time-current"), v.handle = s.querySelector("." + v.options.classPrefix + "time-handle"), v.timefloat = s.querySelector("." + v.options.classPrefix + "time-float"), v.timefloatcurrent = s.querySelector("." + v.options.classPrefix + "time-float-current"), v.slider = s.querySelector("." + v.options.classPrefix + "time-slider"), v.hovered = s.querySelector("." + v.options.classPrefix + "time-hovered"), v.buffer = s.querySelector("." + v.options.classPrefix + "time-buffering"), v.newTime = 0, v.forcedHandlePause = !1, v.setTransformStyle = function(e, t) {
						e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
					}, v.buffer.style.display = "none";
					var r = function(e) {
							var t = getComputedStyle(v.total),
								n = (0, w.offset)(v.total),
								i = v.total.offsetWidth,
								r = void 0 !== t.webkitTransform ? "webkitTransform" : void 0 !== t.mozTransform ? "mozTransform " : void 0 !== t.oTransform ? "oTransform" : void 0 !== t.msTransform ? "msTransform" : "transform",
								o = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
								a = 0,
								s = 0,
								l = 0,
								u = void 0;
							if (u = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, v.getDuration()) {
								if (u < n.left ? u = n.left : u > i + n.left && (u = i + n.left), a = (l = u - n.left) / i, v.newTime = a * v.getDuration(), g && null !== v.getCurrentTime() && v.newTime.toFixed(4) !== v.getCurrentTime().toFixed(4) && (v.setCurrentRailHandle(v.newTime), v.updateCurrent(v.newTime)), !y.IS_IOS && !y.IS_ANDROID) {
									if (l < 0 && (l = 0), v.options.useSmoothHover && null !== o && void 0 !== window[o]) {
										var c = new window[o](getComputedStyle(v.handle)[r]).m41,
											d = l / parseFloat(getComputedStyle(v.total).width) - c / parseFloat(getComputedStyle(v.total).width);
										v.hovered.style.left = c + "px", v.setTransformStyle(v.hovered, "scaleX(" + d + ")"), v.hovered.setAttribute("pos", l), 0 <= d ? (0, w.removeClass)(v.hovered, "negative") : (0, w.addClass)(v.hovered, "negative")
									}
									if (v.timefloat) {
										var f = v.timefloat.offsetWidth / 2,
											h = mejs.Utils.offset(v.getElement(v.container)),
											p = getComputedStyle(v.timefloat);
										s = u - h.left < v.timefloat.offsetWidth ? f : u - h.left >= v.getElement(v.container).offsetWidth - f ? v.total.offsetWidth - f : l, (0, w.hasClass)(v.getElement(v.container), v.options.classPrefix + "long-video") && (s += parseFloat(p.marginLeft) / 2 + v.timefloat.offsetWidth / 2), v.timefloat.style.left = s + "px", v.timefloatcurrent.innerHTML = (0, b.secondsToTimeCode)(v.newTime, m.options.alwaysShowHours, m.options.showTimecodeFrameCount, m.options.framesPerSecond, m.options.secondsDecimalLength, m.options.timeFormat), v.timefloat.style.display = "block"
									}
								}
							} else y.IS_IOS || y.IS_ANDROID || !v.timefloat || (s = v.timefloat.offsetWidth + i >= v.getElement(v.container).offsetWidth ? v.timefloat.offsetWidth / 2 : 0, v.timefloat.style.left = s + "px", v.timefloat.style.left = s + "px", v.timefloat.style.display = "block")
						},
						f = function() {
							1e3 <= new Date - c && v.play()
						};
					v.slider.addEventListener("focus", function() {
						m.options.autoRewind = !1
					}), v.slider.addEventListener("blur", function() {
						m.options.autoRewind = t
					}), v.slider.addEventListener("keydown", function(e) {
						if (1e3 <= new Date - c && (d = v.paused), v.options.enableKeyboard && v.options.keyActions.length) {
							var t = e.which || e.keyCode || 0,
								n = v.getDuration(),
								i = m.options.defaultSeekForwardInterval(u),
								r = m.options.defaultSeekBackwardInterval(u),
								o = v.getCurrentTime(),
								a = v.getElement(v.container).querySelector("." + v.options.classPrefix + "volume-slider");
							if (38 === t || 40 === t) {
								a && (a.style.display = "block"), v.isVideo && (v.showControls(), v.startControlsTimer());
								var s = 38 === t ? Math.min(v.volume + .1, 1) : Math.max(v.volume - .1, 0),
									l = s <= 0;
								return v.setVolume(s), void v.setMuted(l)
							}
							switch (a && (a.style.display = "none"), t) {
								case 37:
									v.getDuration() !== 1 / 0 && (o -= r);
									break;
								case 39:
									v.getDuration() !== 1 / 0 && (o += i);
									break;
								case 36:
									o = 0;
									break;
								case 35:
									o = n;
									break;
								case 13:
								case 32:
									return void(y.IS_FIREFOX && (v.paused ? v.play() : v.pause()));
								default:
									return
							}
							o = o < 0 || isNaN(o) ? 0 : n <= o ? n : Math.floor(o), c = new Date, d || m.pause(), setTimeout(function() {
								v.setCurrentTime(o)
							}, 0), o < v.getDuration() && !d && setTimeout(f, 1100), m.showControls(), e.preventDefault(), e.stopPropagation()
						}
					});
					var o = ["mousedown", "touchstart"];
					v.slider.addEventListener("dragstart", function() {
						return !1
					});
					for (var a = 0, l = o.length; a < l; a++) v.slider.addEventListener(o[a], function(e) {
						if (v.forcedHandlePause = !1, v.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
							v.paused || (v.pause(), v.forcedHandlePause = !0), g = !0, r(e);
							for (var t = ["mouseup", "touchend"], n = 0, i = t.length; n < i; n++) v.getElement(v.container).addEventListener(t[n], function(e) {
								var t = e.target;
								(t === v.slider || t.closest("." + v.options.classPrefix + "time-slider")) && r(e)
							});
							v.globalBind("mouseup.dur touchend.dur", function() {
								g && null !== v.getCurrentTime() && v.newTime.toFixed(4) !== v.getCurrentTime().toFixed(4) && (v.setCurrentTime(v.newTime), v.setCurrentRailHandle(v.newTime), v.updateCurrent(v.newTime)), v.forcedHandlePause && (v.slider.focus(), v.play()), v.forcedHandlePause = !1, g = !1, v.timefloat && (v.timefloat.style.display = "none")
							})
						}
					}, !(!y.SUPPORT_PASSIVE_EVENT || "touchstart" !== o[a]) && {
						passive: !0
					});
					v.slider.addEventListener("mouseenter", function(e) {
						e.target === v.slider && v.getDuration() !== 1 / 0 && (v.getElement(v.container).addEventListener("mousemove", function(e) {
							var t = e.target;
							(t === v.slider || t.closest("." + v.options.classPrefix + "time-slider")) && r(e)
						}), !v.timefloat || y.IS_IOS || y.IS_ANDROID || (v.timefloat.style.display = "block"), v.hovered && !y.IS_IOS && !y.IS_ANDROID && v.options.useSmoothHover && (0, w.removeClass)(v.hovered, "no-hover"))
					}), v.slider.addEventListener("mouseleave", function() {
						v.getDuration() !== 1 / 0 && (g || (v.timefloat && (v.timefloat.style.display = "none"), v.hovered && v.options.useSmoothHover && (0, w.addClass)(v.hovered, "no-hover")))
					}), v.broadcastCallback = function(e) {
						var t, n, i, r, o = s.querySelector("." + v.options.classPrefix + "broadcast");
						if (v.options.forceLive || v.getDuration() === 1 / 0) {
							if (!o && v.options.forceLive) {
								var a = h.default.createElement("span");
								a.className = v.options.classPrefix + "broadcast", a.innerText = p.default.t("mejs.live-broadcast"), v.slider.style.display = "none", v.rail.appendChild(a)
							}
						} else o && (v.slider.style.display = "", o.remove()), m.setProgressRail(e), v.forcedHandlePause || m.setCurrentRail(e), t = v.getCurrentTime(), n = p.default.t("mejs.time-slider"), i = (0, b.secondsToTimeCode)(t, m.options.alwaysShowHours, m.options.showTimecodeFrameCount, m.options.framesPerSecond, m.options.secondsDecimalLength, m.options.timeFormat), r = v.getDuration(), v.slider.setAttribute("role", "slider"), v.slider.tabIndex = 0, u.paused ? (v.slider.setAttribute("aria-label", n), v.slider.setAttribute("aria-valuemin", 0), v.slider.setAttribute("aria-valuemax", isNaN(r) ? 0 : r), v.slider.setAttribute("aria-valuenow", t), v.slider.setAttribute("aria-valuetext", i)) : (v.slider.removeAttribute("aria-label"), v.slider.removeAttribute("aria-valuemin"), v.slider.removeAttribute("aria-valuemax"), v.slider.removeAttribute("aria-valuenow"), v.slider.removeAttribute("aria-valuetext"))
					}, u.addEventListener("progress", v.broadcastCallback), u.addEventListener("timeupdate", v.broadcastCallback), u.addEventListener("play", function() {
						v.buffer.style.display = "none"
					}), u.addEventListener("playing", function() {
						v.buffer.style.display = "none"
					}), u.addEventListener("seeking", function() {
						v.buffer.style.display = ""
					}), u.addEventListener("seeked", function() {
						v.buffer.style.display = "none"
					}), u.addEventListener("pause", function() {
						v.buffer.style.display = "none"
					}), u.addEventListener("waiting", function() {
						v.buffer.style.display = ""
					}), u.addEventListener("loadeddata", function() {
						v.buffer.style.display = ""
					}), u.addEventListener("canplay", function() {
						v.buffer.style.display = "none"
					}), u.addEventListener("error", function() {
						v.buffer.style.display = "none"
					}), v.getElement(v.container).addEventListener("controlsresize", function(e) {
						v.getDuration() !== 1 / 0 && (m.setProgressRail(e), v.forcedHandlePause || m.setCurrentRail(e))
					})
				},
				cleanprogress: function(e, t, n, i) {
					i.removeEventListener("progress", e.broadcastCallback), i.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove()
				},
				setProgressRail: function(e) {
					var t = void 0 !== e ? e.detail.target || e.target : this.media,
						n = null;
					t && t.buffered && 0 < t.buffered.length && t.buffered.end && this.getDuration() ? n = t.buffered.end(t.buffered.length - 1) / this.getDuration() : t && void 0 !== t.bytesTotal && 0 < t.bytesTotal && void 0 !== t.bufferedBytes ? n = t.bufferedBytes / t.bytesTotal : e && e.lengthComputable && 0 !== e.total && (n = e.loaded / e.total), null !== n && (n = Math.min(1, Math.max(0, n)), this.loaded && this.setTransformStyle(this.loaded, "scaleX(" + n + ")"))
				},
				setCurrentRailHandle: function(e) {
					this.setCurrentRailMain(this, e)
				},
				setCurrentRail: function() {
					this.setCurrentRailMain(this)
				},
				setCurrentRailMain: function(e, t) {
					if (void 0 !== e.getCurrentTime() && e.getDuration()) {
						var n = void 0 === t ? e.getCurrentTime() : t;
						if (e.total && e.handle) {
							var i = parseFloat(getComputedStyle(e.total).width),
								r = Math.round(i * n / e.getDuration()),
								o = r - Math.round(e.handle.offsetWidth / 2);
							if (o = o < 0 ? 0 : o, e.setTransformStyle(e.current, "scaleX(" + r / i + ")"), e.setTransformStyle(e.handle, "translateX(" + o + "px)"), e.options.useSmoothHover && !(0, w.hasClass)(e.hovered, "no-hover")) {
								var a = parseInt(e.hovered.getAttribute("pos"), 10),
									s = (a = isNaN(a) ? 0 : a) / i - o / i;
								e.hovered.style.left = o + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), 0 <= s ? (0, w.removeClass)(e.hovered, "negative") : (0, w.addClass)(e.hovered, "negative")
							}
						}
					}
				}
			})
		}, {
			16: 16,
			2: 2,
			25: 25,
			26: 26,
			30: 30,
			5: 5
		}],
		12: [function(e, t, n) {
			"use strict";
			var a = o(e(2)),
				i = e(16),
				r = o(i),
				s = e(30),
				l = e(26);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				duration: 0,
				timeAndDurationSeparator: "<span> | </span>"
			}), Object.assign(r.default.prototype, {
				buildcurrent: function(e, t, n, i) {
					var r = this,
						o = a.default.createElement("div");
					o.className = r.options.classPrefix + "time", o.setAttribute("role", "timer"), o.setAttribute("aria-live", "off"), o.innerHTML = '<span class="' + r.options.classPrefix + 'currenttime">' + (0, s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat) + "</span>", r.addControlElement(o, "current"), e.updateCurrent(), r.updateTimeCallback = function() {
						r.controlsAreVisible && e.updateCurrent()
					}, i.addEventListener("timeupdate", r.updateTimeCallback)
				},
				cleancurrent: function(e, t, n, i) {
					i.removeEventListener("timeupdate", e.updateTimeCallback)
				},
				buildduration: function(e, t, n, i) {
					var r = this;
					if (t.lastChild.querySelector("." + r.options.classPrefix + "currenttime")) t.querySelector("." + r.options.classPrefix + "time").innerHTML += r.options.timeAndDurationSeparator + '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>";
					else {
						t.querySelector("." + r.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + r.options.classPrefix + "currenttime").parentNode, r.options.classPrefix + "currenttime-container");
						var o = a.default.createElement("div");
						o.className = r.options.classPrefix + "time " + r.options.classPrefix + "duration-container", o.innerHTML = '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>", r.addControlElement(o, "duration")
					}
					r.updateDurationCallback = function() {
						r.controlsAreVisible && e.updateDuration()
					}, i.addEventListener("timeupdate", r.updateDurationCallback)
				},
				cleanduration: function(e, t, n, i) {
					i.removeEventListener("timeupdate", e.updateDurationCallback)
				},
				updateCurrent: function() {
					var e = this,
						t = e.getCurrentTime();
					isNaN(t) && (t = 0);
					var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
					5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime") && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime").innerText = n)
				},
				updateDuration: function() {
					var e = this,
						t = e.getDuration();
					void 0 !== e.media && (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), 0 < e.options.duration && (t = e.options.duration);
					var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
					5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration") && 0 < t && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
				}
			})
		}, {
			16: 16,
			2: 2,
			26: 26,
			30: 30
		}],
		13: [function(e, t, n) {
			"use strict";
			var M = o(e(2)),
				u = o(e(7)),
				O = o(e(5)),
				i = e(16),
				r = o(i),
				p = e(30),
				D = e(27),
				N = e(26);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				startLanguage: "",
				tracksText: null,
				chaptersText: null,
				tracksAriaLive: !1,
				hideCaptionsButtonWhenEmpty: !0,
				toggleCaptionsButtonWhenOnlyOne: !1,
				slidesSelector: ""
			}), Object.assign(r.default.prototype, {
				hasChapters: !1,
				buildtracks: function(i, e, t, n) {
					if (this.findTracks(), i.tracks.length || i.trackFiles && 0 !== !i.trackFiles.length) {
						var r = this,
							o = r.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
							a = (0, D.isString)(r.options.tracksText) ? r.options.tracksText : O.default.t("mejs.captions-subtitles"),
							s = (0, D.isString)(r.options.chaptersText) ? r.options.chaptersText : O.default.t("mejs.captions-chapters"),
							l = null === i.trackFiles ? i.tracks.length : i.trackFiles.length;
						if (r.domNode.textTracks)
							for (var u = r.domNode.textTracks.length - 1; 0 <= u; u--) r.domNode.textTracks[u].mode = "hidden";
						r.cleartracks(i), i.captions = M.default.createElement("div"), i.captions.className = r.options.classPrefix + "captions-layer " + r.options.classPrefix + "layer", i.captions.innerHTML = '<div class="' + r.options.classPrefix + "captions-position " + r.options.classPrefix + 'captions-position-hover"' + o + '><span class="' + r.options.classPrefix + 'captions-text"></span></div>', i.captions.style.display = "none", t.insertBefore(i.captions, t.firstChild), i.captionsText = i.captions.querySelector("." + r.options.classPrefix + "captions-text"), i.captionsButton = M.default.createElement("div"), i.captionsButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "captions-button", i.captionsButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + a + '" aria-label="' + a + '" tabindex="0"></button><div class="' + r.options.classPrefix + "captions-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'captions-selector-list"><li class="' + r.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + i.id + '_captions" id="' + i.id + '_captions_none" value="none" checked disabled><label class="' + r.options.classPrefix + "captions-selector-label " + r.options.classPrefix + 'captions-selected" for="' + i.id + '_captions_none">' + O.default.t("mejs.none") + "</label></li></ul></div>", r.addControlElement(i.captionsButton, "tracks"), i.captionsButton.querySelector("." + r.options.classPrefix + "captions-selector-input").disabled = !1, i.chaptersButton = M.default.createElement("div"), i.chaptersButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "chapters-button", i.chaptersButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + s + '" aria-label="' + s + '" tabindex="0"></button><div class="' + r.options.classPrefix + "chapters-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'chapters-selector-list"></ul></div>';
						for (var c = 0, d = 0; d < l; d++) {
							var f = i.tracks[d].kind;
							i.tracks[d].src.trim() && ("subtitles" === f || "captions" === f ? c++ : "chapters" !== f || e.querySelector("." + r.options.classPrefix + "chapter-selector") || i.captionsButton.parentNode.insertBefore(i.chaptersButton, i.captionsButton))
						}
						i.trackToLoad = -1, i.selectedTrack = null, i.isLoadingTrack = !1;
						for (var h = 0; h < l; h++) {
							var p = i.tracks[h].kind;
							!i.tracks[h].src.trim() || "subtitles" !== p && "captions" !== p || i.addTrackButton(i.tracks[h].trackId, i.tracks[h].srclang, i.tracks[h].label)
						}
						i.loadNextTrack();
						var m = ["mouseenter", "focusin"],
							g = ["mouseleave", "focusout"];
						if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === c) i.captionsButton.addEventListener("click", function(e) {
							var t = "none";
							null === i.selectedTrack && (t = i.tracks[0].trackId);
							var n = e.keyCode || e.which;
							i.setTrack(t, void 0 !== n)
						});
						else {
							for (var v = i.captionsButton.querySelectorAll("." + r.options.classPrefix + "captions-selector-label"), y = i.captionsButton.querySelectorAll("input[type=radio]"), b = 0, w = m.length; b < w; b++) i.captionsButton.addEventListener(m[b], function() {
								(0, N.removeClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
							});
							for (var $ = 0, x = g.length; $ < x; $++) i.captionsButton.addEventListener(g[$], function() {
								(0, N.addClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
							});
							for (var S = 0, E = y.length; S < E; S++) y[S].addEventListener("click", function(e) {
								var t = e.keyCode || e.which;
								i.setTrack(this.value, void 0 !== t)
							});
							for (var C = 0, k = v.length; C < k; C++) v[C].addEventListener("click", function(e) {
								var t = (0, N.siblings)(this, function(e) {
										return "INPUT" === e.tagName
									})[0],
									n = (0, D.createEvent)("click", t);
								t.dispatchEvent(n), e.preventDefault()
							});
							i.captionsButton.addEventListener("keydown", function(e) {
								e.stopPropagation()
							})
						}
						for (var T = 0, _ = m.length; T < _; T++) i.chaptersButton.addEventListener(m[T], function() {
							this.querySelector("." + r.options.classPrefix + "chapters-selector-list").children.length && (0, N.removeClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
						});
						for (var A = 0, P = g.length; A < P; A++) i.chaptersButton.addEventListener(g[A], function() {
							(0, N.addClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
						});
						i.chaptersButton.addEventListener("keydown", function(e) {
							e.stopPropagation()
						}), i.options.alwaysShowControls ? (0, N.addClass)(i.getElement(i.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover") : (i.getElement(i.container).addEventListener("controlsshown", function() {
							(0, N.addClass)(i.getElement(i.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
						}), i.getElement(i.container).addEventListener("controlshidden", function() {
							n.paused || (0, N.removeClass)(i.getElement(i.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
						})), n.addEventListener("timeupdate", function() {
							i.displayCaptions()
						}), "" !== i.options.slidesSelector && (i.slidesContainer = M.default.querySelectorAll(i.options.slidesSelector), n.addEventListener("timeupdate", function() {
							i.displaySlides()
						}))
					}
				},
				cleartracks: function(e) {
					e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
				},
				rebuildtracks: function() {
					this.findTracks(), this.buildtracks(this, this.getElement(this.controls), this.getElement(this.layers), this.media)
				},
				findTracks: function() {
					var e = null === this.trackFiles ? this.node.querySelectorAll("track") : this.trackFiles,
						t = e.length;
					this.tracks = [];
					for (var n = 0; n < t; n++) {
						var i = e[n],
							r = i.getAttribute("srclang").toLowerCase() || "",
							o = this.id + "_track_" + n + "_" + i.getAttribute("kind") + "_" + r;
						this.tracks.push({
							trackId: o,
							srclang: r,
							src: i.getAttribute("src"),
							kind: i.getAttribute("kind"),
							label: i.getAttribute("label") || "",
							entries: [],
							isLoaded: !1
						})
					}
				},
				setTrack: function(e, t) {
					for (var n = this, i = n.captionsButton.querySelectorAll('input[type="radio"]'), r = n.captionsButton.querySelectorAll("." + n.options.classPrefix + "captions-selected"), o = n.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, s = i.length; a < s; a++) i[a].checked = !1;
					for (var l = 0, u = r.length; l < u; l++)(0, N.removeClass)(r[l], n.options.classPrefix + "captions-selected");
					o.checked = !0;
					for (var c = (0, N.siblings)(o, function(e) {
							return (0, N.hasClass)(e, n.options.classPrefix + "captions-selector-label")
						}), d = 0, f = c.length; d < f; d++)(0, N.addClass)(c[d], n.options.classPrefix + "captions-selected");
					if ("none" === e) n.selectedTrack = null, (0, N.removeClass)(n.captionsButton, n.options.classPrefix + "captions-enabled");
					else
						for (var h = 0, p = n.tracks.length; h < p; h++) {
							var m = n.tracks[h];
							if (m.trackId === e) {
								null === n.selectedTrack && (0, N.addClass)(n.captionsButton, n.options.classPrefix + "captions-enabled"), n.selectedTrack = m, n.captions.setAttribute("lang", n.selectedTrack.srclang), n.displayCaptions();
								break
							}
						}
					var g = (0, D.createEvent)("captionschange", n.media);
					g.detail.caption = n.selectedTrack, n.media.dispatchEvent(g), t || setTimeout(function() {
						n.getElement(n.container).focus()
					}, 500)
				},
				loadNextTrack: function() {
					this.trackToLoad++, this.trackToLoad < this.tracks.length ? (this.isLoadingTrack = !0, this.loadTrack(this.trackToLoad)) : (this.isLoadingTrack = !1, this.checkForTracks())
				},
				loadTrack: function(e) {
					var t = this,
						n = t.tracks[e];
					void 0 === n || void 0 === n.src && "" === n.src || (0, N.ajax)(n.src, "text", function(e) {
						n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? u.default.TrackFormatParser.dfxp.parse(e) : u.default.TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0)
					}, function() {
						t.removeTrackButton(n.trackId), t.loadNextTrack()
					})
				},
				enableTrackButton: function(e) {
					var t = this,
						n = e.srclang,
						i = M.default.getElementById("" + e.trackId);
					if (i) {
						var r = e.label;
						"" === r && (r = O.default.t(u.default.language.codes[n]) || n), i.disabled = !1;
						for (var o = (0, N.siblings)(i, function(e) {
								return (0, N.hasClass)(e, t.options.classPrefix + "captions-selector-label")
							}), a = 0, s = o.length; a < s; a++) o[a].innerHTML = r;
						if (t.options.startLanguage === n) {
							i.checked = !0;
							var l = (0, D.createEvent)("click", i);
							i.dispatchEvent(l)
						}
					}
				},
				removeTrackButton: function(e) {
					var t = M.default.getElementById("" + e);
					if (t) {
						var n = t.closest("li");
						n && n.remove()
					}
				},
				addTrackButton: function(e, t, n) {
					"" === n && (n = O.default.t(u.default.language.codes[t]) || t), this.captionsButton.querySelector("ul").innerHTML += '<li class="' + this.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + this.options.classPrefix + 'captions-selector-input" name="' + this.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + this.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
				},
				checkForTracks: function() {
					var e = !1;
					if (this.options.hideCaptionsButtonWhenEmpty) {
						for (var t = 0, n = this.tracks.length; t < n; t++) {
							var i = this.tracks[t].kind;
							if (("subtitles" === i || "captions" === i) && this.tracks[t].isLoaded) {
								e = !0;
								break
							}
						}
						this.captionsButton.style.display = e ? "" : "none", this.setControlsSize()
					}
				},
				displayCaptions: function() {
					if (void 0 !== this.tracks) {
						var e = this,
							t = e.selectedTrack;
						if (null !== t && t.isLoaded) {
							var n = e.searchTrackPosition(t.entries, e.media.currentTime);
							if (-1 < n) {
								var i = t.entries[n].text;
								return "function" == typeof e.options.captionTextPreprocessor && (i = e.options.captionTextPreprocessor(i)), e.captionsText.innerHTML = function(e) {
									var t = M.default.createElement("div");
									t.innerHTML = e;
									for (var n = t.getElementsByTagName("script"), i = n.length; i--;) n[i].remove();
									for (var r = t.getElementsByTagName("*"), o = 0, a = r.length; o < a; o++)
										for (var s = r[o].attributes, l = Array.prototype.slice.call(s), u = 0, c = l.length; u < c; u++) l[u].name.startsWith("on") || l[u].value.startsWith("javascript") ? r[o].remove() : "style" === l[u].name && r[o].removeAttribute(l[u].name);
									return t.innerHTML
								}(i), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px")
							}
							e.captions.style.display = "none"
						} else e.captions.style.display = "none"
					}
				},
				setupSlides: function(e) {
					this.slides = e, this.slides.entries.imgs = [this.slides.entries.length], this.showSlide(0)
				},
				showSlide: function(e) {
					var r = this,
						o = this;
					if (void 0 !== o.tracks && void 0 !== o.slidesContainer) {
						var t = o.slides.entries[e].text,
							n = o.slides.entries[e].imgs;
						if (void 0 === n || void 0 === n.fadeIn) {
							var a = M.default.createElement("img");
							a.src = t, a.addEventListener("load", function() {
								var e = r,
									t = (0, N.siblings)(e, function(e) {
										return t(e)
									});
								e.style.display = "none", o.slidesContainer.innerHTML += e.innerHTML, (0, N.fadeIn)(o.slidesContainer.querySelector(a));
								for (var n = 0, i = t.length; n < i; n++)(0, N.fadeOut)(t[n], 400)
							}), o.slides.entries[e].imgs = n = a
						} else if (!(0, N.visible)(n)) {
							var i = (0, N.siblings)(self, function(e) {
								return i(e)
							});
							(0, N.fadeIn)(o.slidesContainer.querySelector(n));
							for (var s = 0, l = i.length; s < l; s++)(0, N.fadeOut)(i[s])
						}
					}
				},
				displaySlides: function() {
					if (void 0 !== this.slides) {
						var e = this.slides,
							t = this.searchTrackPosition(e.entries, this.media.currentTime); - 1 < t && this.showSlide(t)
					}
				},
				drawChapters: function(e) {
					var o = this,
						t = e.entries.length;
					if (t) {
						o.chaptersButton.querySelector("ul").innerHTML = "";
						for (var n = 0; n < t; n++) o.chaptersButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_chapters" id="' + o.id + "_chapters_" + n + '" value="' + e.entries[n].start + '" disabled><label class="' + o.options.classPrefix + 'chapters-selector-label"for="' + o.id + "_chapters_" + n + '">' + e.entries[n].text + "</label></li>";
						for (var i = o.chaptersButton.querySelectorAll('input[type="radio"]'), r = o.chaptersButton.querySelectorAll("." + o.options.classPrefix + "chapters-selector-label"), a = 0, s = i.length; a < s; a++) i[a].disabled = !1, i[a].checked = !1, i[a].addEventListener("click", function(e) {
							var t = o.chaptersButton.querySelectorAll("li"),
								n = (0, N.siblings)(this, function(e) {
									return (0, N.hasClass)(e, o.options.classPrefix + "chapters-selector-label")
								})[0];
							this.checked = !0, this.parentNode.setAttribute("aria-checked", !0), (0, N.addClass)(n, o.options.classPrefix + "chapters-selected"), (0, N.removeClass)(o.chaptersButton.querySelector("." + o.options.classPrefix + "chapters-selected"), o.options.classPrefix + "chapters-selected");
							for (var i = 0, r = t.length; i < r; i++) t[i].setAttribute("aria-checked", !1);
							void 0 === (e.keyCode || e.which) && setTimeout(function() {
								o.getElement(o.container).focus()
							}, 500), o.media.setCurrentTime(parseFloat(this.value)), o.media.paused && o.media.play()
						});
						for (var l = 0, u = r.length; l < u; l++) r[l].addEventListener("click", function(e) {
							var t = (0, N.siblings)(this, function(e) {
									return "INPUT" === e.tagName
								})[0],
								n = (0, D.createEvent)("click", t);
							t.dispatchEvent(n), e.preventDefault()
						})
					}
				},
				searchTrackPosition: function(e, t) {
					for (var n = 0, i = e.length - 1, r = void 0, o = void 0, a = void 0; n <= i;) {
						if (o = e[r = n + i >> 1].start, a = e[r].stop, o <= t && t < a) return r;
						o < t ? n = r + 1 : t < o && (i = r - 1)
					}
					return -1
				}
			}), u.default.language = {
				codes: {
					af: "mejs.afrikaans",
					sq: "mejs.albanian",
					ar: "mejs.arabic",
					be: "mejs.belarusian",
					bg: "mejs.bulgarian",
					ca: "mejs.catalan",
					zh: "mejs.chinese",
					"zh-cn": "mejs.chinese-simplified",
					"zh-tw": "mejs.chines-traditional",
					hr: "mejs.croatian",
					cs: "mejs.czech",
					da: "mejs.danish",
					nl: "mejs.dutch",
					en: "mejs.english",
					et: "mejs.estonian",
					fl: "mejs.filipino",
					fi: "mejs.finnish",
					fr: "mejs.french",
					gl: "mejs.galician",
					de: "mejs.german",
					el: "mejs.greek",
					ht: "mejs.haitian-creole",
					iw: "mejs.hebrew",
					hi: "mejs.hindi",
					hu: "mejs.hungarian",
					is: "mejs.icelandic",
					id: "mejs.indonesian",
					ga: "mejs.irish",
					it: "mejs.italian",
					ja: "mejs.japanese",
					ko: "mejs.korean",
					lv: "mejs.latvian",
					lt: "mejs.lithuanian",
					mk: "mejs.macedonian",
					ms: "mejs.malay",
					mt: "mejs.maltese",
					no: "mejs.norwegian",
					fa: "mejs.persian",
					pl: "mejs.polish",
					pt: "mejs.portuguese",
					ro: "mejs.romanian",
					ru: "mejs.russian",
					sr: "mejs.serbian",
					sk: "mejs.slovak",
					sl: "mejs.slovenian",
					es: "mejs.spanish",
					sw: "mejs.swahili",
					sv: "mejs.swedish",
					tl: "mejs.tagalog",
					th: "mejs.thai",
					tr: "mejs.turkish",
					uk: "mejs.ukrainian",
					vi: "mejs.vietnamese",
					cy: "mejs.welsh",
					yi: "mejs.yiddish"
				}
			}, u.default.TrackFormatParser = {
				webvtt: {
					pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
					parse: function(e) {
						for (var t = e.split(/\r?\n/), n = [], i = void 0, r = void 0, o = void 0, a = 0, s = t.length; a < s; a++) {
							if ((i = this.pattern.exec(t[a])) && a < t.length) {
								for (0 <= a - 1 && "" !== t[a - 1] && (o = t[a - 1]), r = t[++a], a++;
									"" !== t[a] && a < t.length;) r = r + "\n" + t[a], a++;
								r = null === r ? "" : r.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
									identifier: o,
									start: 0 === (0, p.convertSMPTEtoSeconds)(i[1]) ? .2 : (0, p.convertSMPTEtoSeconds)(i[1]),
									stop: (0, p.convertSMPTEtoSeconds)(i[3]),
									text: r,
									settings: i[5]
								})
							}
							o = ""
						}
						return n
					}
				},
				dfxp: {
					parse: function(e) {
						var t = (e = $(e).filter("tt")).firstChild,
							n = t.querySelectorAll("p"),
							i = e.getElementById("" + t.attr("style")),
							r = [],
							o = void 0;
						if (i.length) {
							i.removeAttribute("id");
							var a = i.attributes;
							if (a.length) {
								o = {};
								for (var s = 0, l = a.length; s < l; s++) o[a[s].name.split(":")[1]] = a[s].value
							}
						}
						for (var u = 0, c = n.length; u < c; u++) {
							var d = void 0,
								f = {
									start: null,
									stop: null,
									style: null,
									text: null
								};
							if (n.eq(u).attr("begin") && (f.start = (0, p.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))), !f.start && n.eq(u - 1).attr("end") && (f.start = (0, p.convertSMPTEtoSeconds)(n.eq(u - 1).attr("end"))), n.eq(u).attr("end") && (f.stop = (0, p.convertSMPTEtoSeconds)(n.eq(u).attr("end"))), !f.stop && n.eq(u + 1).attr("begin") && (f.stop = (0, p.convertSMPTEtoSeconds)(n.eq(u + 1).attr("begin"))), o)
								for (var h in d = "", o) d += h + ":" + o[h] + ";";
							d && (f.style = d), 0 === f.start && (f.start = .2), f.text = n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), r.push(f)
						}
						return r
					}
				}
			}
		}, {
			16: 16,
			2: 2,
			26: 26,
			27: 27,
			30: 30,
			5: 5,
			7: 7
		}],
		14: [function(e, t, n) {
			"use strict";
			var x = o(e(2)),
				i = e(16),
				r = o(i),
				S = o(e(5)),
				E = e(25),
				C = e(27),
				k = e(26);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.assign(i.config, {
				muteText: null,
				unmuteText: null,
				allyVolumeControlText: null,
				hideVolumeOnTouchDevices: !0,
				audioVolume: "horizontal",
				videoVolume: "vertical",
				startVolume: .8
			}), Object.assign(r.default.prototype, {
				buildvolume: function(e, t, n, i) {
					if (!E.IS_ANDROID && !E.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
						var a = this,
							s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
							o = (0, C.isString)(a.options.muteText) ? a.options.muteText : S.default.t("mejs.mute"),
							l = (0, C.isString)(a.options.unmuteText) ? a.options.unmuteText : S.default.t("mejs.unmute"),
							r = (0, C.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : S.default.t("mejs.volume-help-text"),
							u = x.default.createElement("div");
						if (u.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute", u.innerHTML = "horizontal" === s ? '<button type="button" aria-controls="' + a.id + '" title="' + o + '" aria-label="' + o + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + o + '" aria-label="' + o + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + S.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + r + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>', a.addControlElement(u, "volume"), a.options.keyActions.push({
								keys: [38],
								action: function(e) {
									var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
									t && t.matches(":focus") && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
									var n = Math.min(e.volume + .1, 1);
									e.setVolume(n), 0 < n && e.setMuted(!1)
								}
							}, {
								keys: [40],
								action: function(e) {
									var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
									t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
									var n = Math.max(e.volume - .1, 0);
									e.setVolume(n), n <= .1 && e.setMuted(!0)
								}
							}, {
								keys: [77],
								action: function(e) {
									var t = e.getElement(e.container).querySelector("." + a.options.classPrefix + "volume-slider");
									t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
								}
							}), "horizontal" === s) {
							var c = x.default.createElement("a");
							c.className = a.options.classPrefix + "horizontal-volume-slider", c.href = "javascript:void(0);", c.setAttribute("aria-label", S.default.t("mejs.volume-slider")), c.setAttribute("aria-valuemin", 0), c.setAttribute("aria-valuemax", 100), c.setAttribute("aria-valuenow", 100), c.setAttribute("role", "slider"), c.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + r + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>', u.parentNode.insertBefore(c, u.nextSibling)
						}
						var d = !1,
							f = !1,
							h = !1,
							p = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-slider") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-slider"),
							m = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-total") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-total"),
							g = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-current") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-current"),
							v = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-handle") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-handle"),
							y = function(e) {
								if (null !== e && !isNaN(e) && void 0 !== e) {
									if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
										(0, k.removeClass)(u, a.options.classPrefix + "mute"), (0, k.addClass)(u, a.options.classPrefix + "unmute");
										var t = u.firstElementChild;
										t.setAttribute("title", l), t.setAttribute("aria-label", l)
									} else {
										(0, k.removeClass)(u, a.options.classPrefix + "unmute"), (0, k.addClass)(u, a.options.classPrefix + "mute");
										var n = u.firstElementChild;
										n.setAttribute("title", o), n.setAttribute("aria-label", o)
									}
									var i = 100 * e + "%",
										r = getComputedStyle(v);
									"vertical" === s ? (g.style.bottom = 0, g.style.height = i, v.style.bottom = i, v.style.marginBottom = -parseFloat(r.height) / 2 + "px") : (g.style.left = 0, g.style.width = i, v.style.left = i, v.style.marginLeft = -parseFloat(r.width) / 2 + "px")
								}
							},
							b = function(e) {
								var t = (0, k.offset)(m),
									n = getComputedStyle(m);
								h = !0;
								var i = null;
								if ("vertical" === s) {
									var r = parseFloat(n.height);
									if (i = (r - (e.pageY - t.top)) / r, 0 === t.top || 0 === t.left) return
								} else {
									var o = parseFloat(n.width);
									i = (e.pageX - t.left) / o
								}
								i = Math.max(0, i), i = Math.min(i, 1), y(i), a.setMuted(0 === i), a.setVolume(i), e.preventDefault(), e.stopPropagation()
							},
							w = function() {
								a.muted ? (y(0), (0, k.removeClass)(u, a.options.classPrefix + "mute"), (0, k.addClass)(u, a.options.classPrefix + "unmute")) : (y(i.volume), (0, k.removeClass)(u, a.options.classPrefix + "unmute"), (0, k.addClass)(u, a.options.classPrefix + "mute"))
							};
						e.getElement(e.container).addEventListener("keydown", function(e) {
							e.target.closest("." + a.options.classPrefix + "container") || "vertical" !== s || (p.style.display = "none")
						}), u.addEventListener("mouseenter", function(e) {
							e.target === u && (p.style.display = "block", f = !0, e.preventDefault(), e.stopPropagation())
						}), u.addEventListener("focusin", function() {
							p.style.display = "block", f = !0
						}), u.addEventListener("focusout", function(e) {
							e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider")) || "vertical" !== s || (p.style.display = "none")
						}), u.addEventListener("mouseleave", function() {
							f = !1, d || "vertical" !== s || (p.style.display = "none")
						}), u.addEventListener("focusout", function() {
							f = !1
						}), u.addEventListener("keydown", function(e) {
							if (a.options.enableKeyboard && a.options.keyActions.length) {
								var t = e.which || e.keyCode || 0,
									n = i.volume;
								switch (t) {
									case 38:
										n = Math.min(n + .1, 1);
										break;
									case 40:
										n = Math.max(0, n - .1);
										break;
									default:
										return !0
								}
								d = !1, y(n), i.setVolume(n), e.preventDefault(), e.stopPropagation()
							}
						}), u.querySelector("button").addEventListener("click", function() {
							i.setMuted(!i.muted);
							var e = (0, C.createEvent)("volumechange", i);
							i.dispatchEvent(e)
						}), p.addEventListener("dragstart", function() {
							return !1
						}), p.addEventListener("mouseover", function() {
							f = !0
						}), p.addEventListener("focusin", function() {
							p.style.display = "block", f = !0
						}), p.addEventListener("focusout", function() {
							f = !1, d || "vertical" !== s || (p.style.display = "none")
						}), p.addEventListener("mousedown", function(e) {
							b(e), a.globalBind("mousemove.vol", function(e) {
								var t = e.target;
								d && (t === p || t.closest("vertical" === s ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && b(e)
							}), a.globalBind("mouseup.vol", function() {
								d = !1, f || "vertical" !== s || (p.style.display = "none")
							}), d = !0, e.preventDefault(), e.stopPropagation()
						}), i.addEventListener("volumechange", function(e) {
							var t;
							d || w(), t = Math.floor(100 * i.volume), p.setAttribute("aria-valuenow", t), p.setAttribute("aria-valuetext", t + "%")
						});
						var $ = !1;
						i.addEventListener("rendererready", function() {
							h || setTimeout(function() {
								$ = !0, (0 === e.options.startVolume || i.originalNode.muted) && (i.setMuted(!0), e.options.startVolume = 0), i.setVolume(e.options.startVolume), a.setControlsSize()
							}, 250)
						}), i.addEventListener("loadedmetadata", function() {
							setTimeout(function() {
								h || $ || ((0 === e.options.startVolume || i.originalNode.muted) && i.setMuted(!0), i.setVolume(e.options.startVolume), a.setControlsSize()), $ = !1
							}, 250)
						}), (0 === e.options.startVolume || i.originalNode.muted) && (i.setMuted(!0), e.options.startVolume = 0, w()), a.getElement(a.container).addEventListener("controlsresize", function() {
							w()
						})
					}
				}
			})
		}, {
			16: 16,
			2: 2,
			25: 25,
			26: 26,
			27: 27,
			5: 5
		}],
		15: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.EN = {
				"mejs.plural-form": 1,
				"mejs.download-file": "Download File",
				"mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
				"mejs.fullscreen": "Fullscreen",
				"mejs.play": "Play",
				"mejs.pause": "Pause",
				"mejs.time-slider": "Time Slider",
				"mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
				"mejs.live-broadcast": "Live Broadcast",
				"mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
				"mejs.unmute": "Unmute",
				"mejs.mute": "Mute",
				"mejs.volume-slider": "Volume Slider",
				"mejs.video-player": "Video Player",
				"mejs.audio-player": "Audio Player",
				"mejs.captions-subtitles": "Captions/Subtitles",
				"mejs.captions-chapters": "Chapters",
				"mejs.none": "None",
				"mejs.afrikaans": "Afrikaans",
				"mejs.albanian": "Albanian",
				"mejs.arabic": "Arabic",
				"mejs.belarusian": "Belarusian",
				"mejs.bulgarian": "Bulgarian",
				"mejs.catalan": "Catalan",
				"mejs.chinese": "Chinese",
				"mejs.chinese-simplified": "Chinese (Simplified)",
				"mejs.chinese-traditional": "Chinese (Traditional)",
				"mejs.croatian": "Croatian",
				"mejs.czech": "Czech",
				"mejs.danish": "Danish",
				"mejs.dutch": "Dutch",
				"mejs.english": "English",
				"mejs.estonian": "Estonian",
				"mejs.filipino": "Filipino",
				"mejs.finnish": "Finnish",
				"mejs.french": "French",
				"mejs.galician": "Galician",
				"mejs.german": "German",
				"mejs.greek": "Greek",
				"mejs.haitian-creole": "Haitian Creole",
				"mejs.hebrew": "Hebrew",
				"mejs.hindi": "Hindi",
				"mejs.hungarian": "Hungarian",
				"mejs.icelandic": "Icelandic",
				"mejs.indonesian": "Indonesian",
				"mejs.irish": "Irish",
				"mejs.italian": "Italian",
				"mejs.japanese": "Japanese",
				"mejs.korean": "Korean",
				"mejs.latvian": "Latvian",
				"mejs.lithuanian": "Lithuanian",
				"mejs.macedonian": "Macedonian",
				"mejs.malay": "Malay",
				"mejs.maltese": "Maltese",
				"mejs.norwegian": "Norwegian",
				"mejs.persian": "Persian",
				"mejs.polish": "Polish",
				"mejs.portuguese": "Portuguese",
				"mejs.romanian": "Romanian",
				"mejs.russian": "Russian",
				"mejs.serbian": "Serbian",
				"mejs.slovak": "Slovak",
				"mejs.slovenian": "Slovenian",
				"mejs.spanish": "Spanish",
				"mejs.swahili": "Swahili",
				"mejs.swedish": "Swedish",
				"mejs.tagalog": "Tagalog",
				"mejs.thai": "Thai",
				"mejs.turkish": "Turkish",
				"mejs.ukrainian": "Ukrainian",
				"mejs.vietnamese": "Vietnamese",
				"mejs.welsh": "Welsh",
				"mejs.yiddish": "Yiddish"
			}
		}, {}],
		16: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.config = void 0;
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				i = function() {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				$ = o(e(3)),
				x = o(e(2)),
				f = o(e(7)),
				u = o(e(6)),
				a = o(e(17)),
				c = o(e(5)),
				S = e(25),
				p = e(27),
				d = e(30),
				h = e(28),
				E = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(e(26));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			f.default.mepIndex = 0, f.default.players = {};
			var s = n.config = {
				poster: "",
				showPosterWhenEnded: !1,
				showPosterWhenPaused: !1,
				defaultVideoWidth: 480,
				defaultVideoHeight: 270,
				videoWidth: -1,
				videoHeight: -1,
				defaultAudioWidth: 400,
				defaultAudioHeight: 40,
				defaultSeekBackwardInterval: function(e) {
					return .05 * e.getDuration()
				},
				defaultSeekForwardInterval: function(e) {
					return .05 * e.getDuration()
				},
				setDimensions: !0,
				audioWidth: -1,
				audioHeight: -1,
				loop: !1,
				autoRewind: !0,
				enableAutosize: !0,
				timeFormat: "",
				alwaysShowHours: !1,
				showTimecodeFrameCount: !1,
				framesPerSecond: 25,
				alwaysShowControls: !1,
				hideVideoControlsOnLoad: !1,
				hideVideoControlsOnPause: !1,
				clickToPlayPause: !0,
				controlsTimeoutDefault: 1500,
				controlsTimeoutMouseEnter: 2500,
				controlsTimeoutMouseLeave: 1e3,
				iPadUseNativeControls: !1,
				iPhoneUseNativeControls: !1,
				AndroidUseNativeControls: !1,
				features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
				useDefaultControls: !1,
				isVideo: !0,
				stretching: "auto",
				classPrefix: "mejs__",
				enableKeyboard: !0,
				pauseOtherPlayers: !0,
				secondsDecimalLength: 0,
				customError: null,
				keyActions: [{
					keys: [32, 179],
					action: function(e) {
						S.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
					}
				}]
			};
			f.default.MepDefaults = s;
			var l = function() {
				function o(e, t) {
					! function(e, t) {
						if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
					}(this);
					var n = this,
						i = "string" == typeof e ? x.default.getElementById(e) : e;
					if (!(n instanceof o)) return new o(i, t);
					if (n.node = n.media = i, n.node) {
						if (n.media.player) return n.media.player;
						if (n.hasFocus = !1, n.controlsAreVisible = !0, n.controlsEnabled = !0, n.controlsTimer = null, n.currentMediaTime = 0, n.proxy = null, void 0 === t) {
							var r = n.node.getAttribute("data-mejsoptions");
							t = r ? JSON.parse(r) : {}
						}
						return n.options = Object.assign({}, s, t), n.options.loop && !n.media.getAttribute("loop") ? (n.media.loop = !0, n.node.loop = !0) : n.media.loop && (n.options.loop = !0), n.options.timeFormat || (n.options.timeFormat = "mm:ss", n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), (0, d.calculateTimeFormat)(0, n.options, n.options.framesPerSecond || 25), n.id = "mep_" + f.default.mepIndex++, (f.default.players[n.id] = n).init(), n
					}
				}
				return i(o, [{
					key: "getElement",
					value: function(e) {
						return e
					}
				}, {
					key: "init",
					value: function() {
						var n = this,
							e = Object.assign({}, n.options, {
								success: function(e, t) {
									n._meReady(e, t)
								},
								error: function(e) {
									n._handleError(e)
								}
							}),
							t = n.node.tagName.toLowerCase();
						if (n.isDynamic = "audio" !== t && "video" !== t && "iframe" !== t, n.isVideo = n.isDynamic ? n.options.isVideo : "audio" !== t && n.options.isVideo, n.mediaFiles = null, n.trackFiles = null, S.IS_IPAD && n.options.iPadUseNativeControls || S.IS_IPHONE && n.options.iPhoneUseNativeControls) n.node.setAttribute("controls", !0), S.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
						else if (!n.isVideo && (n.isVideo || !n.options.features.length && !n.options.useDefaultControls) || S.IS_ANDROID && n.options.AndroidUseNativeControls) n.isVideo || n.options.features.length || n.options.useDefaultControls || (n.node.style.display = "none");
						else {
							n.node.removeAttribute("controls");
							var i = n.isVideo ? c.default.t("mejs.video-player") : c.default.t("mejs.audio-player"),
								r = x.default.createElement("span");
							if (r.className = n.options.classPrefix + "offscreen", r.innerText = i, n.media.parentNode.insertBefore(r, n.media), n.container = x.default.createElement("div"), n.getElement(n.container).id = n.id, n.getElement(n.container).className = n.options.classPrefix + "container " + n.options.classPrefix + "container-keyboard-inactive " + n.media.className, n.getElement(n.container).tabIndex = 0, n.getElement(n.container).setAttribute("role", "application"), n.getElement(n.container).setAttribute("aria-label", i), n.getElement(n.container).innerHTML = '<div class="' + n.options.classPrefix + 'inner"><div class="' + n.options.classPrefix + 'mediaelement"></div><div class="' + n.options.classPrefix + 'layers"></div><div class="' + n.options.classPrefix + 'controls"></div></div>', n.getElement(n.container).addEventListener("focus", function(e) {
									if (!n.controlsAreVisible && !n.hasFocus && n.controlsEnabled) {
										n.showControls(!0);
										var t = (0, p.isNodeAfter)(e.relatedTarget, n.getElement(n.container)) ? "." + n.options.classPrefix + "controls ." + n.options.classPrefix + "button:last-child > button" : "." + n.options.classPrefix + "playpause-button > button";
										n.getElement(n.container).querySelector(t).focus()
									}
								}), n.node.parentNode.insertBefore(n.getElement(n.container), n.node), n.options.features.length || n.options.useDefaultControls || (n.getElement(n.container).style.background = "transparent", n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls").style.display = "none"), n.isVideo && "fill" === n.options.stretching && !E.hasClass(n.getElement(n.container).parentNode, n.options.classPrefix + "fill-container")) {
								n.outerContainer = n.media.parentNode;
								var o = x.default.createElement("div");
								o.className = n.options.classPrefix + "fill-container", n.getElement(n.container).parentNode.insertBefore(o, n.getElement(n.container)), o.appendChild(n.getElement(n.container))
							}
							S.IS_ANDROID && E.addClass(n.getElement(n.container), n.options.classPrefix + "android"), S.IS_IOS && E.addClass(n.getElement(n.container), n.options.classPrefix + "ios"), S.IS_IPAD && E.addClass(n.getElement(n.container), n.options.classPrefix + "ipad"), S.IS_IPHONE && E.addClass(n.getElement(n.container), n.options.classPrefix + "iphone"), E.addClass(n.getElement(n.container), n.isVideo ? n.options.classPrefix + "video" : n.options.classPrefix + "audio"), n.getElement(n.container).querySelector("." + n.options.classPrefix + "mediaelement").appendChild(n.node), (n.media.player = n).controls = n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls"), n.layers = n.getElement(n.container).querySelector("." + n.options.classPrefix + "layers");
							var a = n.isVideo ? "video" : "audio",
								s = a.substring(0, 1).toUpperCase() + a.substring(1);
							0 < n.options[a + "Width"] || -1 < n.options[a + "Width"].toString().indexOf("%") ? n.width = n.options[a + "Width"] : "" !== n.node.style.width && null !== n.node.style.width ? n.width = n.node.style.width : n.node.getAttribute("width") ? n.width = n.node.getAttribute("width") : n.width = n.options["default" + s + "Width"], 0 < n.options[a + "Height"] || -1 < n.options[a + "Height"].toString().indexOf("%") ? n.height = n.options[a + "Height"] : "" !== n.node.style.height && null !== n.node.style.height ? n.height = n.node.style.height : n.node.getAttribute("height") ? n.height = n.node.getAttribute("height") : n.height = n.options["default" + s + "Height"], n.initialAspectRatio = n.height >= n.width ? n.width / n.height : n.height / n.width, n.setPlayerSize(n.width, n.height), e.pluginWidth = n.width, e.pluginHeight = n.height
						}
						if (f.default.MepDefaults = e, new u.default(n.media, e, n.mediaFiles), void 0 !== n.getElement(n.container) && n.options.features.length && n.controlsAreVisible && !n.options.hideVideoControlsOnLoad) {
							var l = (0, p.createEvent)("controlsshown", n.getElement(n.container));
							n.getElement(n.container).dispatchEvent(l)
						}
					}
				}, {
					key: "showControls",
					value: function(e) {
						var r = this;
						if (e = void 0 === e || e, !r.controlsAreVisible && r.isVideo) {
							if (e) ! function() {
								E.fadeIn(r.getElement(r.controls), 200, function() {
									E.removeClass(r.getElement(r.controls), r.options.classPrefix + "offscreen");
									var e = (0, p.createEvent)("controlsshown", r.getElement(r.container));
									r.getElement(r.container).dispatchEvent(e)
								});
								for (var n = r.getElement(r.container).querySelectorAll("." + r.options.classPrefix + "control"), e = function(e, t) {
										E.fadeIn(n[e], 200, function() {
											E.removeClass(n[e], r.options.classPrefix + "offscreen")
										})
									}, t = 0, i = n.length; t < i; t++) e(t)
							}();
							else {
								E.removeClass(r.getElement(r.controls), r.options.classPrefix + "offscreen"), r.getElement(r.controls).style.display = "", r.getElement(r.controls).style.opacity = 1;
								for (var t = r.getElement(r.container).querySelectorAll("." + r.options.classPrefix + "control"), n = 0, i = t.length; n < i; n++) E.removeClass(t[n], r.options.classPrefix + "offscreen"), t[n].style.display = "";
								var o = (0, p.createEvent)("controlsshown", r.getElement(r.container));
								r.getElement(r.container).dispatchEvent(o)
							}
							r.controlsAreVisible = !0, r.setControlsSize()
						}
					}
				}, {
					key: "hideControls",
					value: function(e, t) {
						var r = this;
						if (e = void 0 === e || e, !0 === t || !(!r.controlsAreVisible || r.options.alwaysShowControls || r.paused && 4 === r.readyState && (!r.options.hideVideoControlsOnLoad && r.currentTime <= 0 || !r.options.hideVideoControlsOnPause && 0 < r.currentTime) || r.isVideo && !r.options.hideVideoControlsOnLoad && !r.readyState || r.ended)) {
							if (e) ! function() {
								E.fadeOut(r.getElement(r.controls), 200, function() {
									E.addClass(r.getElement(r.controls), r.options.classPrefix + "offscreen"), r.getElement(r.controls).style.display = "";
									var e = (0, p.createEvent)("controlshidden", r.getElement(r.container));
									r.getElement(r.container).dispatchEvent(e)
								});
								for (var n = r.getElement(r.container).querySelectorAll("." + r.options.classPrefix + "control"), e = function(e, t) {
										E.fadeOut(n[e], 200, function() {
											E.addClass(n[e], r.options.classPrefix + "offscreen"), n[e].style.display = ""
										})
									}, t = 0, i = n.length; t < i; t++) e(t)
							}();
							else {
								E.addClass(r.getElement(r.controls), r.options.classPrefix + "offscreen"), r.getElement(r.controls).style.display = "", r.getElement(r.controls).style.opacity = 0;
								for (var n = r.getElement(r.container).querySelectorAll("." + r.options.classPrefix + "control"), i = 0, o = n.length; i < o; i++) E.addClass(n[i], r.options.classPrefix + "offscreen"), n[i].style.display = "";
								var a = (0, p.createEvent)("controlshidden", r.getElement(r.container));
								r.getElement(r.container).dispatchEvent(a)
							}
							r.controlsAreVisible = !1
						}
					}
				}, {
					key: "startControlsTimer",
					value: function(e) {
						var t = this;
						e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
							t.hideControls(), t.killControlsTimer("hide")
						}, e)
					}
				}, {
					key: "killControlsTimer",
					value: function() {
						null !== this.controlsTimer && (clearTimeout(this.controlsTimer), delete this.controlsTimer, this.controlsTimer = null)
					}
				}, {
					key: "disableControls",
					value: function() {
						this.killControlsTimer(), this.controlsEnabled = !1, this.hideControls(!1, !0)
					}
				}, {
					key: "enableControls",
					value: function() {
						this.controlsEnabled = !0, this.showControls(!1)
					}
				}, {
					key: "_setDefaultPlayer",
					value: function() {
						var e = this;
						e.proxy && e.proxy.pause(), e.proxy = new a.default(e), e.media.addEventListener("loadedmetadata", function() {
							0 < e.getCurrentTime() && 0 < e.currentMediaTime && (e.setCurrentTime(e.currentMediaTime), S.IS_IOS || S.IS_ANDROID || e.play())
						})
					}
				}, {
					key: "_meReady",
					value: function(e, t) {
						var n = this,
							i = t.getAttribute("autoplay"),
							r = !(null == i || "false" === i),
							o = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
						if (n.getElement(n.controls) && n.enableControls(), n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
							if (n.created = !0, n.media = e, n.domNode = t, !(S.IS_ANDROID && n.options.AndroidUseNativeControls || S.IS_IPAD && n.options.iPadUseNativeControls || S.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
								if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls) return r && o && n.play(), void(n.options.success && ("string" == typeof n.options.success ? $.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
								if (n.featurePosition = {}, n._setDefaultPlayer(), n.buildposter(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildkeyboard(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildoverlays(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.options.useDefaultControls) {
									var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
									n.options.features = a.concat(n.options.features.filter(function(e) {
										return -1 === a.indexOf(e)
									}))
								}
								n.buildfeatures(n, n.getElement(n.controls), n.getElement(n.layers), n.media);
								var s = (0, p.createEvent)("controlsready", n.getElement(n.container));
								n.getElement(n.container).dispatchEvent(s), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function() {
									if (n.options.clickToPlayPause) {
										var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-button"),
											t = e.getAttribute("aria-pressed");
										n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t), n.getElement(n.container).focus()
									}
								}, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !S.IS_ANDROID && !S.IS_IOS || n.options.alwaysShowControls ? (n.getElement(n.container).addEventListener("mouseenter", function() {
									n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
								}), n.getElement(n.container).addEventListener("mousemove", function() {
									n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
								}), n.getElement(n.container).addEventListener("mouseleave", function() {
									n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
								})) : n.node.addEventListener("touchstart", function() {
									n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
								}, !!S.SUPPORT_PASSIVE_EVENT && {
									passive: !0
								}), n.options.hideVideoControlsOnLoad && n.hideControls(!1), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
									var t = void 0 !== e ? e.detail.target || e.target : n.media;
									n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && !n.domNode.style.height && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight), n.setControlsSize(), n.media.setSize(t.videoWidth, t.videoHeight))
								})), n.media.addEventListener("play", function() {
									for (var e in n.hasFocus = !0, f.default.players)
										if (f.default.players.hasOwnProperty(e)) {
											var t = f.default.players[e];
											t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || !0 === t.options.ignorePauseOtherPlayersOption || (t.pause(), t.hasFocus = !1)
										} S.IS_ANDROID || S.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls()
								}), n.media.addEventListener("ended", function() {
									if (n.options.autoRewind) try {
										n.setCurrentTime(0), setTimeout(function() {
											var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-loading");
											e && e.parentNode && (e.parentNode.style.display = "none")
										}, 20)
									} catch (e) {}
									"function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
								}), n.media.addEventListener("loadedmetadata", function() {
									(0, d.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize())
								});
								var l = null;
								n.media.addEventListener("timeupdate", function() {
									isNaN(n.getDuration()) || l === n.getDuration() || (l = n.getDuration(), (0, d.calculateTimeFormat)(l, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize())
								}), n.getElement(n.container).addEventListener("click", function(e) {
									E.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
								}), n.getElement(n.container).addEventListener("focusin", function(e) {
									E.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), !n.isVideo || S.IS_ANDROID || S.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
								}), n.getElement(n.container).addEventListener("focusout", function(e) {
									setTimeout(function() {
										e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
									}, 0)
								}), setTimeout(function() {
									n.setPlayerSize(n.width, n.height), n.setControlsSize()
								}, 0), n.globalResizeCallback = function() {
									n.isFullScreen || S.HAS_TRUE_NATIVE_FULLSCREEN && x.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize()
								}, n.globalBind("resize", n.globalResizeCallback)
							}
							r && o && n.play(), n.options.success && ("string" == typeof n.options.success ? $.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
						}
					}
				}, {
					key: "_handleError",
					value: function(e, t, n) {
						var i = this,
							r = i.getElement(i.layers).querySelector("." + i.options.classPrefix + "overlay-play");
						r && (r.style.display = "none"), i.options.error && i.options.error(e, t, n), i.getElement(i.container).querySelector("." + i.options.classPrefix + "cannotplay") && i.getElement(i.container).querySelector("." + i.options.classPrefix + "cannotplay").remove();
						var o = x.default.createElement("div");
						o.className = i.options.classPrefix + "cannotplay", o.style.width = "100%", o.style.height = "100%";
						var a = "function" == typeof i.options.customError ? i.options.customError(i.media, i.media.originalNode) : i.options.customError,
							s = "";
						if (!a) {
							var l = i.media.originalNode.getAttribute("poster");
							if (l && (s = '<img src="' + l + '" alt="' + f.default.i18n.t("mejs.download-file") + '">'), e.message && (a = "<p>" + e.message + "</p>"), e.urls)
								for (var u = 0, c = e.urls.length; u < c; u++) {
									var d = e.urls[u];
									a += '<a href="' + d.src + '" data-type="' + d.type + '"><span>' + f.default.i18n.t("mejs.download-file") + ": " + d.src + "</span></a>"
								}
						}
						a && i.getElement(i.layers).querySelector("." + i.options.classPrefix + "overlay-error") && (o.innerHTML = a, i.getElement(i.layers).querySelector("." + i.options.classPrefix + "overlay-error").innerHTML = "" + s + o.outerHTML, i.getElement(i.layers).querySelector("." + i.options.classPrefix + "overlay-error").parentNode.style.display = "block"), i.controlsEnabled && i.disableControls()
					}
				}, {
					key: "setPlayerSize",
					value: function(e, t) {
						var n = this;
						if (!n.options.setDimensions) return !1;
						switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
							case "fill":
								n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
								break;
							case "responsive":
								n.setResponsiveMode();
								break;
							case "none":
								n.setDimensions(n.width, n.height);
								break;
							default:
								!0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
						}
					}
				}, {
					key: "hasFluidMode",
					value: function() {
						return -1 !== this.height.toString().indexOf("%") || this.node && this.node.style.maxWidth && "none" !== this.node.style.maxWidth && this.node.style.maxWidth !== this.width || this.node && this.node.currentStyle && "100%" === this.node.currentStyle.maxWidth
					}
				}, {
					key: "setResponsiveMode",
					value: function() {
						var e, i = this,
							t = function() {
								for (var t = void 0, n = i.getElement(i.container); n;) {
									try {
										if (S.IS_FIREFOX && "html" === n.tagName.toLowerCase() && $.default.self !== $.default.top && null !== $.default.frameElement) return $.default.frameElement;
										t = n.parentElement
									} catch (e) {
										t = n.parentElement
									}
									if (t && E.visible(t)) return t;
									n = t
								}
								return null
							}(),
							n = t ? getComputedStyle(t, null) : getComputedStyle(x.default.body, null),
							r = i.isVideo ? i.node.videoWidth && 0 < i.node.videoWidth ? i.node.videoWidth : i.node.getAttribute("width") ? i.node.getAttribute("width") : i.options.defaultVideoWidth : i.options.defaultAudioWidth,
							o = i.isVideo ? i.node.videoHeight && 0 < i.node.videoHeight ? i.node.videoHeight : i.node.getAttribute("height") ? i.node.getAttribute("height") : i.options.defaultVideoHeight : i.options.defaultAudioHeight,
							a = (e = 1, i.isVideo && (e = i.node.videoWidth && 0 < i.node.videoWidth && i.node.videoHeight && 0 < i.node.videoHeight ? i.height >= i.width ? i.node.videoWidth / i.node.videoHeight : i.node.videoHeight / i.node.videoWidth : i.initialAspectRatio, (isNaN(e) || e < .01 || 100 < e) && (e = 1)), e),
							s = parseFloat(n.height),
							l = void 0,
							u = parseFloat(n.width);
						if (l = i.isVideo ? "100%" === i.height ? parseFloat(u * o / r, 10) : i.height >= i.width ? parseFloat(u / a, 10) : parseFloat(u * a, 10) : o, isNaN(l) && (l = s), 0 < i.getElement(i.container).parentNode.length && "body" === i.getElement(i.container).parentNode.tagName.toLowerCase() && (u = $.default.innerWidth || x.default.documentElement.clientWidth || x.default.body.clientWidth, l = $.default.innerHeight || x.default.documentElement.clientHeight || x.default.body.clientHeight), l && u) {
							i.getElement(i.container).style.width = u + "px", i.getElement(i.container).style.height = l + "px", i.node.style.width = "100%", i.node.style.height = "100%", i.isVideo && i.media.setSize && i.media.setSize(u, l);
							for (var c = i.getElement(i.layers).children, d = 0, f = c.length; d < f; d++) c[d].style.width = "100%", c[d].style.height = "100%"
						}
					}
				}, {
					key: "setFillMode",
					value: function() {
						var e = this,
							t = $.default.self !== $.default.top && null !== $.default.frameElement,
							n = function() {
								for (var t = void 0, n = e.getElement(e.container); n;) {
									try {
										if (S.IS_FIREFOX && "html" === n.tagName.toLowerCase() && $.default.self !== $.default.top && null !== $.default.frameElement) return $.default.frameElement;
										t = n.parentElement
									} catch (e) {
										t = n.parentElement
									}
									if (t && E.visible(t)) return t;
									n = t
								}
								return null
							}(),
							i = n ? getComputedStyle(n, null) : getComputedStyle(x.default.body, null);
						"none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), t || parseFloat(i.width) || (n.style.width = e.media.offsetWidth + "px"), t || parseFloat(i.height) || (n.style.height = e.media.offsetHeight + "px"), i = getComputedStyle(n);
						var r = parseFloat(i.width),
							o = parseFloat(i.height);
						e.setDimensions("100%", "100%");
						var a = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
						a && (a.style.display = "");
						for (var s = e.getElement(e.container).querySelectorAll("object, embed, iframe, video"), l = e.height, u = e.width, c = r, d = l * r / u, f = u * o / l, h = o, p = r < f == 0, m = p ? Math.floor(c) : Math.floor(f), g = p ? Math.floor(d) : Math.floor(h), v = p ? r + "px" : m + "px", y = p ? g + "px" : o + "px", b = 0, w = s.length; b < w; b++) s[b].style.height = y, s[b].style.width = v, e.media.setSize && e.media.setSize(v, y), s[b].style.marginLeft = Math.floor((r - m) / 2) + "px", s[b].style.marginTop = 0
					}
				}, {
					key: "setDimensions",
					value: function(e, t) {
						e = (0, p.isString)(e) && -1 < e.indexOf("%") ? e : parseFloat(e) + "px", t = (0, p.isString)(t) && -1 < t.indexOf("%") ? t : parseFloat(t) + "px", this.getElement(this.container).style.width = e, this.getElement(this.container).style.height = t;
						for (var n = this.getElement(this.layers).children, i = 0, r = n.length; i < r; i++) n[i].style.width = e, n[i].style.height = t
					}
				}, {
					key: "setControlsSize",
					value: function() {
						var t = this;
						if (E.visible(t.getElement(t.container)))
							if (t.rail && E.visible(t.rail)) {
								for (var e = t.total ? getComputedStyle(t.total, null) : null, n = e ? parseFloat(e.marginLeft) + parseFloat(e.marginRight) : 0, i = getComputedStyle(t.rail), r = parseFloat(i.marginLeft) + parseFloat(i.marginRight), o = 0, a = E.siblings(t.rail, function(e) {
										return e !== t.rail
									}), s = a.length, l = 0; l < s; l++) o += a[l].offsetWidth;
								o += n + (0 === n ? 2 * r : r) + 1, t.getElement(t.container).style.minWidth = o + "px";
								var u = (0, p.createEvent)("controlsresize", t.getElement(t.container));
								t.getElement(t.container).dispatchEvent(u)
							} else {
								for (var c = t.getElement(t.controls).children, d = 0, f = 0, h = c.length; f < h; f++) d += c[f].offsetWidth;
								t.getElement(t.container).style.minWidth = d + "px"
							}
					}
				}, {
					key: "addControlElement",
					value: function(e, t) {
						if (void 0 !== this.featurePosition[t]) {
							var n = this.getElement(this.controls).children[this.featurePosition[t] - 1];
							n.parentNode.insertBefore(e, n.nextSibling)
						} else {
							this.getElement(this.controls).appendChild(e);
							for (var i = this.getElement(this.controls).children, r = 0, o = i.length; r < o; r++)
								if (e === i[r]) {
									this.featurePosition[t] = r;
									break
								}
						}
					}
				}, {
					key: "createIframeLayer",
					value: function() {
						var t = this;
						if (t.isVideo && null !== t.media.rendererName && -1 < t.media.rendererName.indexOf("iframe") && !x.default.getElementById(t.media.id + "-iframe-overlay")) {
							var e = x.default.createElement("div"),
								n = x.default.getElementById(t.media.id + "_" + t.media.rendererName);
							e.id = t.media.id + "-iframe-overlay", e.className = t.options.classPrefix + "iframe-overlay", e.addEventListener("click", function(e) {
								t.options.clickToPlayPause && (t.paused ? t.play() : t.pause(), e.preventDefault(), e.stopPropagation())
							}), n.parentNode.insertBefore(e, n)
						}
					}
				}, {
					key: "resetSize",
					value: function() {
						var e = this;
						setTimeout(function() {
							e.setPlayerSize(e.width, e.height), e.setControlsSize()
						}, 50)
					}
				}, {
					key: "setPoster",
					value: function(e) {
						var t = this;
						if (t.getElement(t.container)) {
							var n = t.getElement(t.container).querySelector("." + t.options.classPrefix + "poster");
							n || ((n = x.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.getElement(t.layers).appendChild(n));
							var i = n.querySelector("img");
							!i && e && ((i = x.default.createElement("img")).className = t.options.classPrefix + "poster-img", i.width = "100%", i.height = "100%", n.style.display = "", n.appendChild(i)), e ? (i.setAttribute("src", e), n.style.backgroundImage = 'url("' + e + '")', n.style.display = "") : i ? (n.style.backgroundImage = "none", n.style.display = "none", i.remove()) : n.style.display = "none"
						} else(S.IS_IPAD && t.options.iPadUseNativeControls || S.IS_IPHONE && t.options.iPhoneUseNativeControls || S.IS_ANDROID && t.options.AndroidUseNativeControls) && (t.media.originalNode.poster = e)
					}
				}, {
					key: "changeSkin",
					value: function(e) {
						this.getElement(this.container).className = this.options.classPrefix + "container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
					}
				}, {
					key: "globalBind",
					value: function(e, n) {
						var i = this.node ? this.node.ownerDocument : x.default;
						if ((e = (0, p.splitEvents)(e, this.id)).d)
							for (var t = e.d.split(" "), r = 0, o = t.length; r < o; r++) t[r].split(".").reduce(function(e, t) {
								return i.addEventListener(t, n, !1), t
							}, "");
						if (e.w)
							for (var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function(e, t) {
								return $.default.addEventListener(t, n, !1), t
							}, "")
					}
				}, {
					key: "globalUnbind",
					value: function(e, n) {
						var i = this.node ? this.node.ownerDocument : x.default;
						if ((e = (0, p.splitEvents)(e, this.id)).d)
							for (var t = e.d.split(" "), r = 0, o = t.length; r < o; r++) t[r].split(".").reduce(function(e, t) {
								return i.removeEventListener(t, n, !1), t
							}, "");
						if (e.w)
							for (var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function(e, t) {
								return $.default.removeEventListener(t, n, !1), t
							}, "")
					}
				}, {
					key: "buildfeatures",
					value: function(e, t, n, i) {
						for (var r = 0, o = this.options.features.length; r < o; r++) {
							var a = this.options.features[r];
							if (this["build" + a]) try {
								this["build" + a](e, t, n, i)
							} catch (e) {
								console.error("error building " + a, e)
							}
						}
					}
				}, {
					key: "buildposter",
					value: function(e, t, n, i) {
						var r = x.default.createElement("div");
						r.className = this.options.classPrefix + "poster " + this.options.classPrefix + "layer", n.appendChild(r);
						var o = i.originalNode.getAttribute("poster");
						"" !== e.options.poster && (o && S.IS_IOS && i.originalNode.removeAttribute("poster"), o = e.options.poster), o ? this.setPoster(o) : null !== this.media.renderer && "function" == typeof this.media.renderer.getPosterUrl ? this.setPoster(this.media.renderer.getPosterUrl()) : r.style.display = "none", i.addEventListener("play", function() {
							r.style.display = "none"
						}), i.addEventListener("playing", function() {
							r.style.display = "none"
						}), e.options.showPosterWhenEnded && e.options.autoRewind && i.addEventListener("ended", function() {
							r.style.display = ""
						}), i.addEventListener("error", function() {
							r.style.display = "none"
						}), e.options.showPosterWhenPaused && i.addEventListener("pause", function() {
							e.ended || (r.style.display = "")
						})
					}
				}, {
					key: "buildoverlays",
					value: function(t, e, n, i) {
						if (t.isVideo) {
							var r = this,
								o = x.default.createElement("div"),
								a = x.default.createElement("div"),
								s = x.default.createElement("div");
							o.style.display = "none", o.className = r.options.classPrefix + "overlay " + r.options.classPrefix + "layer", o.innerHTML = '<div class="' + r.options.classPrefix + 'overlay-loading"><span class="' + r.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(o), a.style.display = "none", a.className = r.options.classPrefix + "overlay " + r.options.classPrefix + "layer", a.innerHTML = '<div class="' + r.options.classPrefix + 'overlay-error"></div>', n.appendChild(a), s.className = r.options.classPrefix + "overlay " + r.options.classPrefix + "layer " + r.options.classPrefix + "overlay-play", s.innerHTML = '<div class="' + r.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + c.default.t("mejs.play") + '" aria-pressed="false"></div>', s.addEventListener("click", function() {
								if (r.options.clickToPlayPause) {
									var e = r.getElement(r.container).querySelector("." + r.options.classPrefix + "overlay-button"),
										t = e.getAttribute("aria-pressed");
									r.paused ? r.play() : r.pause(), e.setAttribute("aria-pressed", !!t), r.getElement(r.container).focus()
								}
							}), s.addEventListener("keydown", function(e) {
								var t = e.keyCode || e.which || 0;
								if (13 === t || S.IS_FIREFOX && 32 === t) {
									var n = (0, p.createEvent)("click", s);
									return s.dispatchEvent(n), !1
								}
							}), n.appendChild(s), null !== r.media.rendererName && (/(youtube|facebook)/i.test(r.media.rendererName) && !(r.media.originalNode.getAttribute("poster") || t.options.poster || "function" == typeof r.media.renderer.getPosterUrl && r.media.renderer.getPosterUrl()) || S.IS_STOCK_ANDROID || r.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
							var l = !1;
							i.addEventListener("play", function() {
								s.style.display = "none", o.style.display = "none", a.style.display = "none", l = !1
							}), i.addEventListener("playing", function() {
								s.style.display = "none", o.style.display = "none", a.style.display = "none", l = !1
							}), i.addEventListener("seeking", function() {
								s.style.display = "none", o.style.display = "", l = !1
							}), i.addEventListener("seeked", function() {
								s.style.display = r.paused && !S.IS_STOCK_ANDROID ? "" : "none", o.style.display = "none", l = !1
							}), i.addEventListener("pause", function() {
								o.style.display = "none", S.IS_STOCK_ANDROID || l || (s.style.display = ""), l = !1
							}), i.addEventListener("waiting", function() {
								o.style.display = "", l = !1
							}), i.addEventListener("loadeddata", function() {
								o.style.display = "", S.IS_ANDROID && (i.canplayTimeout = setTimeout(function() {
									if (x.default.createEvent) {
										var e = x.default.createEvent("HTMLEvents");
										return e.initEvent("canplay", !0, !0), i.dispatchEvent(e)
									}
								}, 300)), l = !1
							}), i.addEventListener("canplay", function() {
								o.style.display = "none", clearTimeout(i.canplayTimeout), l = !1
							}), i.addEventListener("error", function(e) {
								r._handleError(e, r.media, r.node), o.style.display = "none", s.style.display = "none", l = !0
							}), i.addEventListener("loadedmetadata", function() {
								r.controlsEnabled || r.enableControls()
							}), i.addEventListener("keydown", function(e) {
								r.onkeydown(t, i, e), l = !1
							})
						}
					}
				}, {
					key: "buildkeyboard",
					value: function(i, e, t, r) {
						var o = this;
						o.getElement(o.container).addEventListener("keydown", function() {
							o.keyboardAction = !0
						}), o.globalKeydownCallback = function(e) {
							var t = x.default.activeElement.closest("." + o.options.classPrefix + "container"),
								n = o.media.closest("." + o.options.classPrefix + "container");
							return o.hasFocus = !(!t || !n || t.id !== n.id), o.onkeydown(i, r, e)
						}, o.globalClickCallback = function(e) {
							o.hasFocus = !!e.target.closest("." + o.options.classPrefix + "container")
						}, o.globalBind("keydown", o.globalKeydownCallback), o.globalBind("click", o.globalClickCallback)
					}
				}, {
					key: "onkeydown",
					value: function(e, t, n) {
						if (e.hasFocus && e.options.enableKeyboard)
							for (var i = 0, r = e.options.keyActions.length; i < r; i++)
								for (var o = e.options.keyActions[i], a = 0, s = o.keys.length; a < s; a++)
									if (n.keyCode === o.keys[a]) return o.action(e, t, n.keyCode, n), n.preventDefault(), void n.stopPropagation();
						return !0
					}
				}, {
					key: "play",
					value: function() {
						this.proxy.play()
					}
				}, {
					key: "pause",
					value: function() {
						this.proxy.pause()
					}
				}, {
					key: "load",
					value: function() {
						this.proxy.load()
					}
				}, {
					key: "setCurrentTime",
					value: function(e) {
						this.proxy.setCurrentTime(e)
					}
				}, {
					key: "getCurrentTime",
					value: function() {
						return this.proxy.currentTime
					}
				}, {
					key: "getDuration",
					value: function() {
						return this.proxy.duration
					}
				}, {
					key: "setVolume",
					value: function(e) {
						this.proxy.volume = e
					}
				}, {
					key: "getVolume",
					value: function() {
						return this.proxy.getVolume()
					}
				}, {
					key: "setMuted",
					value: function(e) {
						this.proxy.setMuted(e)
					}
				}, {
					key: "setSrc",
					value: function(e) {
						this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e)
					}
				}, {
					key: "getSrc",
					value: function() {
						return this.proxy.getSrc()
					}
				}, {
					key: "canPlayType",
					value: function(e) {
						return this.proxy.canPlayType(e)
					}
				}, {
					key: "remove",
					value: function() {
						var l = this,
							u = l.media.rendererName,
							c = l.media.originalNode.src;
						for (var e in l.options.features) {
							var t = l.options.features[e];
							if (l["clean" + t]) try {
								l["clean" + t](l, l.getElement(l.layers), l.getElement(l.controls), l.media)
							} catch (e) {
								console.error("error cleaning " + t, e)
							}
						}
						var n = l.node.getAttribute("width"),
							i = l.node.getAttribute("height");
						n ? -1 === n.indexOf("%") && (n += "px") : n = "auto", i ? -1 === i.indexOf("%") && (i += "px") : i = "auto", l.node.style.width = n, l.node.style.height = i, l.setPlayerSize(0, 0), l.isDynamic ? l.getElement(l.container).parentNode.insertBefore(l.node, l.getElement(l.container)) : function() {
							l.node.setAttribute("controls", !0), l.node.setAttribute("id", l.node.getAttribute("id").replace("_" + u, "").replace("_from_mejs", ""));
							var e = l.getElement(l.container).querySelector("." + l.options.classPrefix + "poster>img");
							e && l.node.setAttribute("poster", e.src), delete l.node.autoplay, l.node.setAttribute("src", ""), "" !== l.media.canPlayType((0, h.getTypeFromFile)(c)) && l.node.setAttribute("src", c), u && -1 < u.indexOf("iframe") && x.default.getElementById(l.media.id + "-iframe-overlay").remove();
							var r = l.node.cloneNode();
							if (r.style.display = "", l.getElement(l.container).parentNode.insertBefore(r, l.getElement(l.container)), l.node.remove(), l.mediaFiles)
								for (var t = 0, n = l.mediaFiles.length; t < n; t++) {
									var i = x.default.createElement("source");
									i.setAttribute("src", l.mediaFiles[t].src), i.setAttribute("type", l.mediaFiles[t].type), r.appendChild(i)
								}
							if (l.trackFiles)
								for (var o = function(e, t) {
										var n = l.trackFiles[e],
											i = x.default.createElement("track");
										i.kind = n.kind, i.label = n.label, i.srclang = n.srclang, i.src = n.src, r.appendChild(i), i.addEventListener("load", function() {
											this.mode = "showing", r.textTracks[e].mode = "showing"
										})
									}, a = 0, s = l.trackFiles.length; a < s; a++) o(a);
							delete l.node, delete l.mediaFiles, delete l.trackFiles
						}(), l.media.renderer && "function" == typeof l.media.renderer.destroy && l.media.renderer.destroy(), delete f.default.players[l.id], "object" === r(l.getElement(l.container)) && (l.getElement(l.container).parentNode.querySelector("." + l.options.classPrefix + "offscreen").remove(), l.getElement(l.container).remove()), l.globalUnbind("resize", l.globalResizeCallback), l.globalUnbind("keydown", l.globalKeydownCallback), l.globalUnbind("click", l.globalClickCallback), delete l.media.player
					}
				}, {
					key: "paused",
					get: function() {
						return this.proxy.paused
					}
				}, {
					key: "muted",
					get: function() {
						return this.proxy.muted
					},
					set: function(e) {
						this.setMuted(e)
					}
				}, {
					key: "ended",
					get: function() {
						return this.proxy.ended
					}
				}, {
					key: "readyState",
					get: function() {
						return this.proxy.readyState
					}
				}, {
					key: "currentTime",
					set: function(e) {
						this.setCurrentTime(e)
					},
					get: function() {
						return this.getCurrentTime()
					}
				}, {
					key: "duration",
					get: function() {
						return this.getDuration()
					}
				}, {
					key: "volume",
					set: function(e) {
						this.setVolume(e)
					},
					get: function() {
						return this.getVolume()
					}
				}, {
					key: "src",
					set: function(e) {
						this.setSrc(e)
					},
					get: function() {
						return this.getSrc()
					}
				}]), o
			}();
			$.default.MediaElementPlayer = l, f.default.MediaElementPlayer = l, n.default = l
		}, {
			17: 17,
			2: 2,
			25: 25,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			30: 30,
			5: 5,
			6: 6,
			7: 7
		}],
		17: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i, r = function() {
					function i(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(e, t, n) {
						return t && i(e.prototype, t), n && i(e, n), e
					}
				}(),
				o = (i = e(3)) && i.__esModule ? i : {
					default: i
				},
				a = function() {
					function n(t) {
						return function(e, t) {
							if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
						}(this), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function() {
							return t.createIframeLayer()
						}, this.setPoster = function(e) {
							return t.setPoster(e)
						}, this
					}
					return r(n, [{
						key: "play",
						value: function() {
							this.media.play()
						}
					}, {
						key: "pause",
						value: function() {
							this.media.pause()
						}
					}, {
						key: "load",
						value: function() {
							this.isLoaded || this.media.load(), this.isLoaded = !0
						}
					}, {
						key: "setCurrentTime",
						value: function(e) {
							this.media.setCurrentTime(e)
						}
					}, {
						key: "getCurrentTime",
						value: function() {
							return this.media.currentTime
						}
					}, {
						key: "getDuration",
						value: function() {
							var e = this.media.getDuration();
							return e === 1 / 0 && this.media.seekable && this.media.seekable.length && (e = this.media.seekable.end(0)), e
						}
					}, {
						key: "setVolume",
						value: function(e) {
							this.media.setVolume(e)
						}
					}, {
						key: "getVolume",
						value: function() {
							return this.media.getVolume()
						}
					}, {
						key: "setMuted",
						value: function(e) {
							this.media.setMuted(e)
						}
					}, {
						key: "setSrc",
						value: function(e) {
							var t = document.getElementById(this.media.id + "-iframe-overlay");
							t && t.remove(), this.media.setSrc(e), this.createIframeLayer(), null !== this.media.renderer && "function" == typeof this.media.renderer.getPosterUrl && this.setPoster(this.media.renderer.getPosterUrl())
						}
					}, {
						key: "getSrc",
						value: function() {
							return this.media.getSrc()
						}
					}, {
						key: "canPlayType",
						value: function(e) {
							return this.media.canPlayType(e)
						}
					}, {
						key: "paused",
						get: function() {
							return this.media.paused
						}
					}, {
						key: "muted",
						set: function(e) {
							this.setMuted(e)
						},
						get: function() {
							return this.media.muted
						}
					}, {
						key: "ended",
						get: function() {
							return this.media.ended
						}
					}, {
						key: "readyState",
						get: function() {
							return this.media.readyState
						}
					}, {
						key: "currentTime",
						set: function(e) {
							this.setCurrentTime(e)
						},
						get: function() {
							return this.getCurrentTime()
						}
					}, {
						key: "duration",
						get: function() {
							return this.getDuration()
						}
					}, {
						key: "remainingTime",
						get: function() {
							return this.getDuration() - this.currentTime()
						}
					}, {
						key: "volume",
						set: function(e) {
							this.setVolume(e)
						},
						get: function() {
							return this.getVolume()
						}
					}, {
						key: "src",
						set: function(e) {
							this.setSrc(e)
						},
						get: function() {
							return this.getSrc()
						}
					}]), n
				}();
			n.default = a, o.default.DefaultPlayer = a
		}, {
			3: 3
		}],
		18: [function(e, t, n) {
			"use strict";
			a(e(3));
			var i, r = a(e(7)),
				o = a(e(16));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			"undefined" != typeof jQuery ? r.default.$ = jQuery : "undefined" != typeof Zepto ? r.default.$ = Zepto : "undefined" != typeof ender && (r.default.$ = ender), void 0 !== (i = r.default.$) && (i.fn.mediaelementplayer = function(e) {
				return !1 === e ? this.each(function() {
					var e = i(this).data("mediaelementplayer");
					e && e.remove(), i(this).removeData("mediaelementplayer")
				}) : this.each(function() {
					i(this).data("mediaelementplayer", new o.default(this, e))
				}), this
			}, i(document).ready(function() {
				i("." + r.default.MepDefaults.classPrefix + "player").mediaelementplayer()
			}))
		}, {
			16: 16,
			3: 3,
			7: 7
		}],
		19: [function(e, t, n) {
			"use strict";
			var w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				$ = a(e(3)),
				x = a(e(7)),
				S = e(8),
				E = e(27),
				i = e(28),
				r = e(25),
				o = e(26);

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var C = {
					promise: null,
					load: function(e) {
						return "undefined" != typeof dashjs ? C.promise = new Promise(function(e) {
							e()
						}).then(function() {
							C._createPlayer(e)
						}) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", C.promise = C.promise || (0, o.loadScript)(e.options.path), C.promise.then(function() {
							C._createPlayer(e)
						})), C.promise
					},
					_createPlayer: function(e) {
						var t = dashjs.MediaPlayer().create();
						return $.default["__ready__" + e.id](t), t
					}
				},
				s = {
					name: "native_dash",
					options: {
						prefix: "native_dash",
						dash: {
							path: "https://cdn.dashjs.org/latest/dash.all.min.js",
							debug: !1,
							drm: {},
							robustnessLevel: ""
						}
					},
					canPlayType: function(e) {
						return r.HAS_MSE && -1 < ["application/dash+xml"].indexOf(e.toLowerCase())
					},
					create: function(s, l, e) {
						var t = s.originalNode,
							o = s.id + "_" + l.prefix,
							a = t.autoplay,
							n = t.children,
							u = null,
							c = null;
						t.removeAttribute("type");
						for (var i = 0, r = n.length; i < r; i++) n[i].removeAttribute("type");
						u = t.cloneNode(!0), l = Object.assign(l, s.options);
						for (var d = x.default.html5media.properties, f = x.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
								return "error" !== e
							}), h = function(e) {
								var t = (0, E.createEvent)(e.type, s);
								s.dispatchEvent(t)
							}, p = function(r) {
								var e = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
								u["get" + e] = function() {
									return null !== c ? u[r] : null
								}, u["set" + e] = function(e) {
									if (-1 === x.default.html5media.readOnlyProperties.indexOf(r))
										if ("src" === r) {
											var t = "object" === (void 0 === e ? "undefined" : w(e)) && e.src ? e.src : e;
											if (u[r] = t, null !== c) {
												c.reset();
												for (var n = 0, i = f.length; n < i; n++) u.removeEventListener(f[n], h);
												c = C._createPlayer({
													options: l.dash,
													id: o
												}), e && "object" === (void 0 === e ? "undefined" : w(e)) && "object" === w(e.drm) && (c.setProtectionData(e.drm), (0, E.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && c.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), c.attachSource(t), a && c.play()
											}
										} else u[r] = e
								}
							}, m = 0, g = d.length; m < g; m++) p(d[m]);
						if ($.default["__ready__" + o] = function(e) {
								s.dashPlayer = c = e;
								for (var t, n = dashjs.MediaPlayer.events, i = 0, r = f.length; i < r; i++) "loadedmetadata" === (t = f[i]) && (c.initialize(), c.attachView(u), c.setAutoPlay(!1), "object" !== w(l.dash.drm) || x.default.Utils.isObjectEmpty(l.dash.drm) || (c.setProtectionData(l.dash.drm), (0, E.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && c.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), c.attachSource(u.getSrc())), u.addEventListener(t, h);
								var o = function(e) {
									if ("error" === e.type.toLowerCase()) s.generateError(e.message, u.src), console.error(e);
									else {
										var t = (0, E.createEvent)(e.type, s);
										t.data = e, s.dispatchEvent(t)
									}
								};
								for (var a in n) n.hasOwnProperty(a) && c.on(n[a], function(e) {
									return o(e)
								})
							}, e && 0 < e.length)
							for (var v = 0, y = e.length; v < y; v++)
								if (S.renderer.renderers[l.prefix].canPlayType(e[v].type)) {
									u.setAttribute("src", e[v].src), void 0 !== e[v].drm && (l.dash.drm = e[v].drm);
									break
								} u.setAttribute("id", o), t.parentNode.insertBefore(u, t), t.autoplay = !1, t.style.display = "none", u.setSize = function(e, t) {
							return u.style.width = e + "px", u.style.height = t + "px", u
						}, u.hide = function() {
							return u.pause(), u.style.display = "none", u
						}, u.show = function() {
							return u.style.display = "", u
						}, u.destroy = function() {
							null !== c && c.reset()
						};
						var b = (0, E.createEvent)("rendererready", u);
						return s.dispatchEvent(b), s.promises.push(C.load({
							options: l.dash,
							id: o
						})), u
					}
				};
			i.typeChecks.push(function(e) {
				return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
			}), S.renderer.add(s)
		}, {
			25: 25,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			7: 7,
			8: 8
		}],
		20: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.PluginDetector = void 0;
			var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				k = i(e(3)),
				T = i(e(2)),
				_ = i(e(7)),
				A = i(e(5)),
				P = e(8),
				M = e(27),
				O = e(25),
				D = e(28);

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = n.PluginDetector = {
				plugins: [],
				hasPluginVersion: function(e, t) {
					var n = o.plugins[e];
					return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
				},
				addPlugin: function(e, t, n, i, r) {
					o.plugins[e] = o.detectPlugin(t, n, i, r)
				},
				detectPlugin: function(e, t, n, i) {
					var r = [0, 0, 0],
						o = void 0,
						a = void 0;
					if (null !== O.NAV.plugins && void 0 !== O.NAV.plugins && "object" === u(O.NAV.plugins[e])) {
						if ((o = O.NAV.plugins[e].description) && (void 0 === O.NAV.mimeTypes || !O.NAV.mimeTypes[t] || O.NAV.mimeTypes[t].enabledPlugin))
							for (var s = 0, l = (r = o.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; s < l; s++) r[s] = parseInt(r[s].match(/\d+/), 10)
					} else if (void 0 !== k.default.ActiveXObject) try {
						(a = new ActiveXObject(n)) && (r = i(a))
					} catch (e) {}
					return r
				}
			};
			o.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
				var t = [],
					n = e.GetVariable("$version");
				return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
			});
			var r = {
				create: function(e, t, n) {
					var o = {},
						i = !1;
					o.options = t, o.id = e.id + "_" + o.options.prefix, o.mediaElement = e, o.flashState = {}, o.flashApi = null, o.flashApiStack = [];
					for (var r = _.default.html5media.properties, a = function(t) {
							o.flashState[t] = null;
							var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
							o["get" + e] = function() {
								if (null === o.flashApi) return null;
								if ("function" != typeof o.flashApi["get_" + t]) return null;
								var e = o.flashApi["get_" + t]();
								return "buffered" === t ? {
									start: function() {
										return 0
									},
									end: function() {
										return e
									},
									length: 1
								} : e
							}, o["set" + e] = function(e) {
								if ("src" === t && (e = (0, D.absolutizeUrl)(e)), null !== o.flashApi && void 0 !== o.flashApi["set_" + t]) try {
									o.flashApi["set_" + t](e)
								} catch (e) {} else o.flashApiStack.push({
									type: "set",
									propName: t,
									value: e
								})
							}
						}, s = 0, l = r.length; s < l; s++) a(r[s]);
					var u = _.default.html5media.methods,
						c = function(e) {
							o[e] = function() {
								if (i)
									if (null !== o.flashApi) {
										if (o.flashApi["fire_" + e]) try {
											o.flashApi["fire_" + e]()
										} catch (e) {}
									} else o.flashApiStack.push({
										type: "call",
										methodName: e
									})
							}
						};
					u.push("stop");
					for (var d = 0, f = u.length; d < f; d++) c(u[d]);
					for (var h = ["rendererready"], p = 0, m = h.length; p < m; p++) {
						var g = (0, M.createEvent)(h[p], o);
						e.dispatchEvent(g)
					}
					k.default["__ready__" + o.id] = function() {
						if (o.flashReady = !0, o.flashApi = T.default.getElementById("__" + o.id), o.flashApiStack.length)
							for (var e = 0, t = o.flashApiStack.length; e < t; e++) {
								var n = o.flashApiStack[e];
								if ("set" === n.type) {
									var i = n.propName,
										r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
									o["set" + r](n.value)
								} else "call" === n.type && o[n.methodName]()
							}
					}, k.default["__event__" + o.id] = function(e, t) {
						var n = (0, M.createEvent)(e, o);
						if (t) try {
							n.data = JSON.parse(t), n.details.data = JSON.parse(t)
						} catch (e) {
							n.message = t
						}
						o.mediaElement.dispatchEvent(n)
					}, o.flashWrapper = T.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(o.options.shimScriptAccess) && (o.options.shimScriptAccess = "sameDomain");
					var v = e.originalNode.autoplay,
						y = ["uid=" + o.id, "autoplay=" + v, "allowScriptAccess=" + o.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")],
						b = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
						w = b ? e.originalNode.height : 1,
						$ = b ? e.originalNode.width : 1;
					e.originalNode.getAttribute("src") && y.push("src=" + e.originalNode.getAttribute("src")), !0 === o.options.enablePseudoStreaming && (y.push("pseudostreamstart=" + o.options.pseudoStreamingStartQueryParam), y.push("pseudostreamtype=" + o.options.pseudoStreamingType)), o.options.streamDelimiter && y.push("streamdelimiter=" + encodeURIComponent(o.options.streamDelimiter)), o.options.proxyType && y.push("proxytype=" + o.options.proxyType), e.appendChild(o.flashWrapper), e.originalNode.style.display = "none";
					var x = [];
					if (O.IS_IE || O.IS_EDGE) {
						var S = T.default.createElement("div");
						o.flashWrapper.appendChild(S), x = O.IS_EDGE ? ['type="application/x-shockwave-flash"', 'data="' + o.options.pluginPath + o.options.filename + '"', 'id="__' + o.id + '"', 'width="' + $ + '"', 'height="' + w + "'\""] : ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + o.id + '"', 'width="' + $ + '"', 'height="' + w + '"'], b || x.push('style="clip: rect(0 0 0 0); position: absolute;"'), S.outerHTML = "<object " + x.join(" ") + '><param name="movie" value="' + o.options.pluginPath + o.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + y.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + o.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + A.default.t("mejs.install-flash") + "</div></object>"
					} else x = ['id="__' + o.id + '"', 'name="__' + o.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + o.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + o.options.pluginPath + o.options.filename + '"', 'flashvars="' + y.join("&") + '"'], b ? (x.push('width="' + $ + '"'), x.push('height="' + w + '"')) : x.push('style="position: fixed; left: -9999em; top: -9999em;"'), o.flashWrapper.innerHTML = "<embed " + x.join(" ") + ">";
					if (o.flashNode = o.flashWrapper.lastChild, o.hide = function() {
							i = !1, b && (o.flashNode.style.display = "none")
						}, o.show = function() {
							i = !0, b && (o.flashNode.style.display = "")
						}, o.setSize = function(e, t) {
							o.flashNode.style.width = e + "px", o.flashNode.style.height = t + "px", null !== o.flashApi && "function" == typeof o.flashApi.fire_setSize && o.flashApi.fire_setSize(e, t)
						}, o.destroy = function() {
							o.flashNode.remove()
						}, n && 0 < n.length)
						for (var E = 0, C = n.length; E < C; E++)
							if (P.renderer.renderers[t.prefix].canPlayType(n[E].type)) {
								o.setSrc(n[E].src);
								break
							} return o
				}
			};
			if (o.hasPluginVersion("flash", [10, 0, 0])) {
				D.typeChecks.push(function(e) {
					return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
				});
				var a = {
					name: "flash_video",
					options: {
						prefix: "flash_video",
						filename: "mediaelement-flash-video.swf",
						enablePseudoStreaming: !1,
						pseudoStreamingStartQueryParam: "start",
						pseudoStreamingType: "byte",
						proxyType: "",
						streamDelimiter: ""
					},
					canPlayType: function(e) {
						return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
					},
					create: r.create
				};
				P.renderer.add(a);
				var s = {
					name: "flash_hls",
					options: {
						prefix: "flash_hls",
						filename: "mediaelement-flash-video-hls.swf"
					},
					canPlayType: function(e) {
						return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
					},
					create: r.create
				};
				P.renderer.add(s);
				var l = {
					name: "flash_dash",
					options: {
						prefix: "flash_dash",
						filename: "mediaelement-flash-video-mdash.swf"
					},
					canPlayType: function(e) {
						return ~["application/dash+xml"].indexOf(e.toLowerCase())
					},
					create: r.create
				};
				P.renderer.add(l);
				var c = {
					name: "flash_audio",
					options: {
						prefix: "flash_audio",
						filename: "mediaelement-flash-audio.swf"
					},
					canPlayType: function(e) {
						return ~["audio/mp3"].indexOf(e.toLowerCase())
					},
					create: r.create
				};
				P.renderer.add(c);
				var d = {
					name: "flash_audio_ogg",
					options: {
						prefix: "flash_audio_ogg",
						filename: "mediaelement-flash-audio-ogg.swf"
					},
					canPlayType: function(e) {
						return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
					},
					create: r.create
				};
				P.renderer.add(d)
			}
		}, {
			2: 2,
			25: 25,
			27: 27,
			28: 28,
			3: 3,
			5: 5,
			7: 7,
			8: 8
		}],
		21: [function(e, t, n) {
			"use strict";
			var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				b = a(e(3)),
				w = a(e(7)),
				$ = e(8),
				x = e(27),
				i = e(25),
				r = e(28),
				o = e(26);

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var S = {
					promise: null,
					load: function(e) {
						return "undefined" != typeof flvjs ? S.promise = new Promise(function(e) {
							e()
						}).then(function() {
							S._createPlayer(e)
						}) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/flv.js@latest", S.promise = S.promise || (0, o.loadScript)(e.options.path), S.promise.then(function() {
							S._createPlayer(e)
						})), S.promise
					},
					_createPlayer: function(e) {
						flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
						var t = flvjs.createPlayer(e.options, e.configs);
						return b.default["__ready__" + e.id](t), t
					}
				},
				s = {
					name: "native_flv",
					options: {
						prefix: "native_flv",
						flv: {
							path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
							cors: !0,
							debug: !1
						}
					},
					canPlayType: function(e) {
						return i.HAS_MSE && -1 < ["video/x-flv", "video/flv"].indexOf(e.toLowerCase())
					},
					create: function(s, a, e) {
						var t = s.originalNode,
							l = s.id + "_" + a.prefix,
							u = null,
							c = null;
						u = t.cloneNode(!0), a = Object.assign(a, s.options);
						for (var n = w.default.html5media.properties, d = w.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
								return "error" !== e
							}), f = function(e) {
								var t = (0, x.createEvent)(e.type, s);
								s.dispatchEvent(t)
							}, i = function(o) {
								var e = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
								u["get" + e] = function() {
									return null !== c ? u[o] : null
								}, u["set" + e] = function(e) {
									if (-1 === w.default.html5media.readOnlyProperties.indexOf(o))
										if ("src" === o) {
											if (u[o] = "object" === (void 0 === e ? "undefined" : y(e)) && e.src ? e.src : e, null !== c) {
												var t = {
													type: "flv"
												};
												t.url = e, t.cors = a.flv.cors, t.debug = a.flv.debug, t.path = a.flv.path;
												var n = a.flv.configs;
												c.destroy();
												for (var i = 0, r = d.length; i < r; i++) u.removeEventListener(d[i], f);
												(c = S._createPlayer({
													options: t,
													configs: n,
													id: l
												})).attachMediaElement(u), c.load()
											}
										} else u[o] = e
								}
							}, r = 0, o = n.length; r < o; r++) i(n[r]);
						if (b.default["__ready__" + l] = function(e) {
								s.flvPlayer = c = e;
								for (var t, r = flvjs.Events, n = 0, i = d.length; n < i; n++) "loadedmetadata" === (t = d[n]) && (c.unload(), c.detachMediaElement(), c.attachMediaElement(u), c.load()), u.addEventListener(t, f);
								var o = function(i) {
									r.hasOwnProperty(i) && c.on(r[i], function() {
										for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
										return function(e, t) {
											if ("error" === e) {
												var n = t[0] + ": " + t[1] + " " + t[2].msg;
												s.generateError(n, u.src)
											} else {
												var i = (0, x.createEvent)(e, s);
												i.data = t, s.dispatchEvent(i)
											}
										}(r[i], t)
									})
								};
								for (var a in r) o(a)
							}, e && 0 < e.length)
							for (var h = 0, p = e.length; h < p; h++)
								if ($.renderer.renderers[a.prefix].canPlayType(e[h].type)) {
									u.setAttribute("src", e[h].src);
									break
								} u.setAttribute("id", l), t.parentNode.insertBefore(u, t), t.autoplay = !1, t.style.display = "none";
						var m = {
							type: "flv"
						};
						m.url = u.src, m.cors = a.flv.cors, m.debug = a.flv.debug, m.path = a.flv.path;
						var g = a.flv.configs;
						u.setSize = function(e, t) {
							return u.style.width = e + "px", u.style.height = t + "px", u
						}, u.hide = function() {
							return null !== c && c.pause(), u.style.display = "none", u
						}, u.show = function() {
							return u.style.display = "", u
						}, u.destroy = function() {
							null !== c && c.destroy()
						};
						var v = (0, x.createEvent)("rendererready", u);
						return s.dispatchEvent(v), s.promises.push(S.load({
							options: m,
							configs: g,
							id: l
						})), u
					}
				};
			r.typeChecks.push(function(e) {
				return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
			}), $.renderer.add(s)
		}, {
			25: 25,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			7: 7,
			8: 8
		}],
		22: [function(e, t, n) {
			"use strict";
			var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				b = a(e(3)),
				w = a(e(7)),
				$ = e(8),
				x = e(27),
				i = e(25),
				r = e(28),
				o = e(26);

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var S = {
					promise: null,
					load: function(e) {
						return "undefined" != typeof Hls ? S.promise = new Promise(function(e) {
							e()
						}).then(function() {
							S._createPlayer(e)
						}) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/hls.js@latest", S.promise = S.promise || (0, o.loadScript)(e.options.path), S.promise.then(function() {
							S._createPlayer(e)
						})), S.promise
					},
					_createPlayer: function(e) {
						var t = new Hls(e.options);
						return b.default["__ready__" + e.id](t), t
					}
				},
				s = {
					name: "native_hls",
					options: {
						prefix: "native_hls",
						hls: {
							path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
							autoStartLoad: !1,
							debug: !1
						}
					},
					canPlayType: function(e) {
						return i.HAS_MSE && -1 < ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
					},
					create: function(u, r, c) {
						var e = u.originalNode,
							o = u.id + "_" + r.prefix,
							t = e.getAttribute("preload"),
							n = e.autoplay,
							d = null,
							f = null,
							h = 0,
							p = c.length;
						f = e.cloneNode(!0), (r = Object.assign(r, u.options)).hls.autoStartLoad = t && "none" !== t || n;
						for (var i = w.default.html5media.properties, m = w.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
								return "error" !== e
							}), g = function(e) {
								var t = (0, x.createEvent)(e.type, u);
								u.dispatchEvent(t)
							}, a = function(i) {
								var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
								f["get" + e] = function() {
									return null !== d ? f[i] : null
								}, f["set" + e] = function(e) {
									if (-1 === w.default.html5media.readOnlyProperties.indexOf(i))
										if ("src" === i) {
											if (f[i] = "object" === (void 0 === e ? "undefined" : y(e)) && e.src ? e.src : e, null !== d) {
												d.destroy();
												for (var t = 0, n = m.length; t < n; t++) f.removeEventListener(m[t], g);
												(d = S._createPlayer({
													options: r.hls,
													id: o
												})).loadSource(e), d.attachMedia(f)
											}
										} else f[i] = e
								}
							}, s = 0, l = i.length; s < l; s++) a(i[s]);
						if (b.default["__ready__" + o] = function(e) {
								u.hlsPlayer = d = e;
								for (var r = Hls.Events, t = function(e) {
										if ("loadedmetadata" === e) {
											var t = u.originalNode.src;
											d.detachMedia(), d.loadSource(t), d.attachMedia(f)
										}
										f.addEventListener(e, g)
									}, n = 0, i = m.length; n < i; n++) t(m[n]);
								var s = void 0,
									l = void 0,
									o = function(i) {
										r.hasOwnProperty(i) && d.on(r[i], function() {
											for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
											return function(e, t) {
												if ("hlsError" === e && (console.warn(t), (t = t[1]).fatal)) switch (t.type) {
													case "mediaError":
														var n = (new Date).getTime();
														if (!s || 3e3 < n - s) s = (new Date).getTime(), d.recoverMediaError();
														else if (!l || 3e3 < n - l) l = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), d.swapAudioCodec(), d.recoverMediaError();
														else {
															var i = "Cannot recover, last media error recovery failed";
															u.generateError(i, f.src), console.error(i)
														}
														break;
													case "networkError":
														if ("manifestLoadError" === t.details)
															if (h < p && void 0 !== c[h + 1]) f.setSrc(c[h++].src), f.load(), f.play();
															else {
																var r = "Network error";
																u.generateError(r, c), console.error(r)
															}
														else {
															var o = "Network error";
															u.generateError(o, c), console.error(o)
														}
														break;
													default:
														d.destroy()
												} else {
													var a = (0, x.createEvent)(e, u);
													a.data = t, u.dispatchEvent(a)
												}
											}(r[i], t)
										})
									};
								for (var a in r) o(a)
							}, 0 < p)
							for (; h < p; h++)
								if ($.renderer.renderers[r.prefix].canPlayType(c[h].type)) {
									f.setAttribute("src", c[h].src);
									break
								}
						"auto" === t || n || (f.addEventListener("play", function() {
							null !== d && d.startLoad()
						}), f.addEventListener("pause", function() {
							null !== d && d.stopLoad()
						})), f.setAttribute("id", o), e.parentNode.insertBefore(f, e), e.autoplay = !1, e.style.display = "none", f.setSize = function(e, t) {
							return f.style.width = e + "px", f.style.height = t + "px", f
						}, f.hide = function() {
							return f.pause(), f.style.display = "none", f
						}, f.show = function() {
							return f.style.display = "", f
						}, f.destroy = function() {
							null !== d && (d.stopLoad(), d.destroy())
						};
						var v = (0, x.createEvent)("rendererready", f);
						return u.dispatchEvent(v), u.promises.push(S.load({
							options: r.hls,
							id: o
						})), f
					}
				};
			r.typeChecks.push(function(e) {
				return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
			}), $.renderer.add(s)
		}, {
			25: 25,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			7: 7,
			8: 8
		}],
		23: [function(e, t, n) {
			"use strict";
			var i = o(e(3)),
				v = o(e(2)),
				y = o(e(7)),
				b = e(8),
				w = e(27),
				r = e(25);

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = {
				name: "html5",
				options: {
					prefix: "html5"
				},
				canPlayType: function(e) {
					var t = v.default.createElement("video");
					return r.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && r.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
				},
				create: function(n, e, t) {
					var i = n.id + "_" + e.prefix,
						r = !1,
						o = null;
					void 0 === n.originalNode || null === n.originalNode ? (o = v.default.createElement("audio"), n.appendChild(o)) : o = n.originalNode, o.setAttribute("id", i);
					for (var a = y.default.html5media.properties, s = function(t) {
							var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
							o["get" + e] = function() {
								return o[t]
							}, o["set" + e] = function(e) {
								-1 === y.default.html5media.readOnlyProperties.indexOf(t) && (o[t] = e)
							}
						}, l = 0, u = a.length; l < u; l++) s(a[l]);
					for (var c, d = y.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
							return "error" !== e
						}), f = 0, h = d.length; f < h; f++) c = d[f], o.addEventListener(c, function(e) {
						if (r) {
							var t = (0, w.createEvent)(e.type, e.target);
							n.dispatchEvent(t)
						}
					});
					o.setSize = function(e, t) {
						return o.style.width = e + "px", o.style.height = t + "px", o
					}, o.hide = function() {
						return r = !1, o.style.display = "none", o
					}, o.show = function() {
						return r = !0, o.style.display = "", o
					};
					var p = 0,
						m = t.length;
					if (0 < m)
						for (; p < m; p++)
							if (b.renderer.renderers[e.prefix].canPlayType(t[p].type)) {
								o.setAttribute("src", t[p].src);
								break
							} o.addEventListener("error", function(e) {
						e && e.target && e.target.error && 4 === e.target.error.code && r && (p < m && void 0 !== t[p + 1] ? (o.src = t[p++].src, o.load(), o.play()) : n.generateError("Media error: Format(s) not supported or source(s) not found", t))
					});
					var g = (0, w.createEvent)("rendererready", o);
					return n.dispatchEvent(g), o
				}
			};
			i.default.HtmlMediaElement = y.default.HtmlMediaElement = a, b.renderer.add(a)
		}, {
			2: 2,
			25: 25,
			27: 27,
			3: 3,
			7: 7,
			8: 8
		}],
		24: [function(e, t, n) {
			"use strict";
			var S = a(e(3)),
				E = a(e(2)),
				C = a(e(7)),
				i = e(8),
				k = e(27),
				r = e(28),
				o = e(26);

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var T = {
					isIframeStarted: !1,
					isIframeLoaded: !1,
					iframeQueue: [],
					enqueueIframe: function(e) {
						T.isLoaded = "undefined" != typeof YT && YT.loaded, T.isLoaded ? T.createIframe(e) : (T.loadIframeApi(), T.iframeQueue.push(e))
					},
					loadIframeApi: function() {
						T.isIframeStarted || ((0, o.loadScript)("https://www.youtube.com/player_api"), T.isIframeStarted = !0)
					},
					iFrameReady: function() {
						for (T.isLoaded = !0, T.isIframeLoaded = !0; 0 < T.iframeQueue.length;) {
							var e = T.iframeQueue.pop();
							T.createIframe(e)
						}
					},
					createIframe: function(e) {
						return new YT.Player(e.containerId, e)
					},
					getYouTubeId: function(e) {
						var t = "";
						return 0 < e.indexOf("?") ? "" === (t = T.getYouTubeIdFromParam(e)) && (t = T.getYouTubeIdFromUrl(e)) : t = T.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
					},
					getYouTubeIdFromParam: function(e) {
						if (null == e || !e.trim().length) return null;
						for (var t = e.split("?")[1].split("&"), n = "", i = 0, r = t.length; i < r; i++) {
							var o = t[i].split("=");
							if ("v" === o[0]) {
								n = o[1];
								break
							}
						}
						return n
					},
					getYouTubeIdFromUrl: function(e) {
						return null != e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
					},
					getYouTubeNoCookieUrl: function(e) {
						if (null == e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
						var t = e.split("/");
						return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
					}
				},
				s = {
					name: "youtube_iframe",
					options: {
						prefix: "youtube_iframe",
						youtube: {
							autoplay: 0,
							controls: 0,
							disablekb: 1,
							end: 0,
							loop: 0,
							modestbranding: 0,
							playsinline: 0,
							rel: 0,
							showinfo: 0,
							start: 0,
							iv_load_policy: 3,
							nocookie: !1,
							imageQuality: null
						}
					},
					canPlayType: function(e) {
						return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
					},
					create: function(p, n, i) {
						var m = {},
							g = [],
							v = null,
							o = !0,
							a = !1,
							y = null;
						m.options = n, m.id = p.id + "_" + n.prefix, m.mediaElement = p;
						for (var e = C.default.html5media.properties, t = function(r) {
								var e = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
								m["get" + e] = function() {
									if (null === v) return null;
									switch (r) {
										case "currentTime":
											return v.getCurrentTime();
										case "duration":
											return v.getDuration();
										case "volume":
											return v.getVolume() / 100;
										case "playbackRate":
											return v.getPlaybackRate();
										case "paused":
											return o;
										case "ended":
											return a;
										case "muted":
											return v.isMuted();
										case "buffered":
											var e = v.getVideoLoadedFraction(),
												t = v.getDuration();
											return {
												start: function() {
													return 0
												}, end: function() {
													return e * t
												}, length: 1
											};
										case "src":
											return v.getVideoUrl();
										case "readyState":
											return 4
									}
									return null
								}, m["set" + e] = function(e) {
									if (null !== v) switch (r) {
										case "src":
											var t = "string" == typeof e ? e : e[0].src,
												n = T.getYouTubeId(t);
											p.originalNode.autoplay ? v.loadVideoById(n) : v.cueVideoById(n);
											break;
										case "currentTime":
											v.seekTo(e);
											break;
										case "muted":
											e ? v.mute() : v.unMute(), setTimeout(function() {
												var e = (0, k.createEvent)("volumechange", m);
												p.dispatchEvent(e)
											}, 50);
											break;
										case "volume":
											v.setVolume(100 * e), setTimeout(function() {
												var e = (0, k.createEvent)("volumechange", m);
												p.dispatchEvent(e)
											}, 50);
											break;
										case "playbackRate":
											v.setPlaybackRate(e), setTimeout(function() {
												var e = (0, k.createEvent)("ratechange", m);
												p.dispatchEvent(e)
											}, 50);
											break;
										case "readyState":
											var i = (0, k.createEvent)("canplay", m);
											p.dispatchEvent(i)
									} else g.push({
										type: "set",
										propName: r,
										value: e
									})
								}
							}, r = 0, s = e.length; r < s; r++) t(e[r]);
						for (var l = C.default.html5media.methods, u = function(e) {
								m[e] = function() {
									if (null !== v) switch (e) {
										case "play":
											return o = !1, v.playVideo();
										case "pause":
											return o = !0, v.pauseVideo();
										case "load":
											return null
									} else g.push({
										type: "call",
										methodName: e
									})
								}
							}, c = 0, d = l.length; c < d; c++) u(l[c]);
						var f = E.default.createElement("div");
						f.id = m.id, m.options.youtube.nocookie && (p.originalNode.src = T.getYouTubeNoCookieUrl(i[0].src)), p.originalNode.parentNode.insertBefore(f, p.originalNode), p.originalNode.style.display = "none";
						var h = "audio" === p.originalNode.tagName.toLowerCase(),
							b = h ? "1" : p.originalNode.height,
							w = h ? "1" : p.originalNode.width,
							$ = T.getYouTubeId(i[0].src),
							x = {
								id: m.id,
								containerId: f.id,
								videoId: $,
								height: b,
								width: w,
								playerVars: Object.assign({
									controls: 0,
									rel: 0,
									disablekb: 1,
									showinfo: 0,
									modestbranding: 0,
									html5: 1,
									iv_load_policy: 3
								}, m.options.youtube),
								origin: S.default.location.host,
								events: {
									onReady: function(e) {
										if (p.youTubeApi = v = e.target, p.youTubeState = {
												paused: !0,
												ended: !1
											}, g.length)
											for (var t = 0, n = g.length; t < n; t++) {
												var i = g[t];
												if ("set" === i.type) {
													var r = i.propName,
														o = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
													m["set" + o](i.value)
												} else "call" === i.type && m[i.methodName]()
											}
										y = v.getIframe(), p.originalNode.muted && v.mute();
										for (var a = ["mouseover", "mouseout"], s = function(e) {
												var t = (0, k.createEvent)(e.type, m);
												p.dispatchEvent(t)
											}, l = 0, u = a.length; l < u; l++) y.addEventListener(a[l], s, !1);
										for (var c = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], d = 0, f = c.length; d < f; d++) {
											var h = (0, k.createEvent)(c[d], m);
											p.dispatchEvent(h)
										}
									},
									onStateChange: function(e) {
										var t = [];
										switch (e.data) {
											case -1:
												t = ["loadedmetadata"], a = !(o = !0);
												break;
											case 0:
												o = !(t = ["ended"]), a = !m.options.youtube.loop, m.options.youtube.loop || m.stopInterval();
												break;
											case 1:
												a = o = !(t = ["play", "playing"]), m.startInterval();
												break;
											case 2:
												t = ["pause"], a = !(o = !0), m.stopInterval();
												break;
											case 3:
												a = !(t = ["progress"]);
												break;
											case 5:
												t = ["loadeddata", "loadedmetadata", "canplay"], a = !(o = !0)
										}
										for (var n = 0, i = t.length; n < i; n++) {
											var r = (0, k.createEvent)(t[n], m);
											p.dispatchEvent(r)
										}
									},
									onError: function(e) {
										return function(e) {
											var t = "";
											switch (e.data) {
												case 2:
													t = "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
													break;
												case 5:
													t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
													break;
												case 100:
													t = "The video requested was not found. Either video has been removed or has been marked as private.";
													break;
												case 101:
												case 105:
													t = "The owner of the requested video does not allow it to be played in embedded players.";
													break;
												default:
													t = "Unknown error."
											}
											p.generateError("Code " + e.data + ": " + t, i)
										}(e)
									}
								}
							};
						return (h || p.originalNode.hasAttribute("playsinline")) && (x.playerVars.playsinline = 1), p.originalNode.controls && (x.playerVars.controls = 1), p.originalNode.autoplay && (x.playerVars.autoplay = 1), p.originalNode.loop && (x.playerVars.loop = 1), (x.playerVars.loop && 1 === parseInt(x.playerVars.loop, 10) || -1 < p.originalNode.src.indexOf("loop=")) && !x.playerVars.playlist && -1 === p.originalNode.src.indexOf("playlist=") && (x.playerVars.playlist = T.getYouTubeId(p.originalNode.src)), T.enqueueIframe(x), m.onEvent = function(e, t, n) {
							null != n && (p.youTubeState = n)
						}, m.setSize = function(e, t) {
							null !== v && v.setSize(e, t)
						}, m.hide = function() {
							m.stopInterval(), m.pause(), y && (y.style.display = "none")
						}, m.show = function() {
							y && (y.style.display = "")
						}, m.destroy = function() {
							v.destroy()
						}, m.interval = null, m.startInterval = function() {
							m.interval = setInterval(function() {
								var e = (0, k.createEvent)("timeupdate", m);
								p.dispatchEvent(e)
							}, 250)
						}, m.stopInterval = function() {
							m.interval && clearInterval(m.interval)
						}, m.getPosterUrl = function() {
							var e = n.youtube.imageQuality,
								t = T.getYouTubeId(p.originalNode.src);
							return e && -1 < ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"].indexOf(e) && t ? "https://img.youtube.com/vi/" + t + "/" + e + ".jpg" : ""
						}, m
					}
				};
			S.default.onYouTubePlayerAPIReady = function() {
				T.iFrameReady()
			}, r.typeChecks.push(function(e) {
				return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
			}), i.renderer.add(s)
		}, {
			2: 2,
			26: 26,
			27: 27,
			28: 28,
			3: 3,
			7: 7,
			8: 8
		}],
		25: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
			var r = a(e(3)),
				o = a(e(2)),
				i = a(e(7));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			for (var s = n.NAV = r.default.navigator, l = n.UA = s.userAgent.toLowerCase(), u = n.IS_IPAD = /ipad/i.test(l) && !r.default.MSStream, c = n.IS_IPHONE = /iphone/i.test(l) && !r.default.MSStream, d = n.IS_IPOD = /ipod/i.test(l) && !r.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !r.default.MSStream, n.IS_ANDROID = /android/i.test(l)), h = n.IS_IE = /(trident|microsoft)/i.test(s.appName), p = (n.IS_EDGE = "msLaunchUri" in s && !("documentMode" in o.default)), m = n.IS_CHROME = /chrome/i.test(l), g = n.IS_FIREFOX = /firefox/i.test(l), v = n.IS_SAFARI = /safari/i.test(l) && !m, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), b = (n.HAS_MSE = "MediaSource" in r.default), w = n.SUPPORT_POINTER_EVENTS = function() {
					var e = o.default.createElement("x"),
						t = o.default.documentElement,
						n = r.default.getComputedStyle;
					if (!("pointerEvents" in e.style)) return !1;
					e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
					var i = n && "auto" === (n(e, "") || {}).pointerEvents;
					return e.remove(), !!i
				}(), $ = n.SUPPORT_PASSIVE_EVENT = function() {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function() {
								e = !0
							}
						});
						r.default.addEventListener("test", null, t)
					} catch (e) {}
					return e
				}(), x = ["source", "track", "audio", "video"], S = void 0, E = 0, C = x.length; E < C; E++) S = o.default.createElement(x[E]);
			var k = n.SUPPORTS_NATIVE_HLS = v || h && /edge/i.test(l),
				T = void 0 !== S.webkitEnterFullscreen,
				_ = void 0 !== S.requestFullscreen;
			T && /mac os x 10_5/i.test(l) && (T = _ = !1);
			var A = void 0 !== S.webkitRequestFullScreen,
				P = void 0 !== S.mozRequestFullScreen,
				M = void 0 !== S.msRequestFullscreen,
				O = A || P || M,
				D = O,
				N = "",
				j = void 0,
				I = void 0,
				L = void 0;
			P ? D = o.default.mozFullScreenEnabled : M && (D = o.default.msFullscreenEnabled), m && (T = !1), O && (A ? N = "webkitfullscreenchange" : P ? N = "fullscreenchange" : M && (N = "MSFullscreenChange"), n.isFullScreen = j = function() {
				return P ? o.default.mozFullScreen : A ? o.default.webkitIsFullScreen : M ? null !== o.default.msFullscreenElement : void 0
			}, n.requestFullScreen = I = function(e) {
				A ? e.webkitRequestFullScreen() : P ? e.mozRequestFullScreen() : M && e.msRequestFullscreen()
			}, n.cancelFullScreen = L = function() {
				A ? o.default.webkitCancelFullScreen() : P ? o.default.mozCancelFullScreen() : M && o.default.msExitFullscreen()
			});
			var F = n.HAS_NATIVE_FULLSCREEN = _,
				R = n.HAS_WEBKIT_NATIVE_FULLSCREEN = A,
				z = n.HAS_MOZ_NATIVE_FULLSCREEN = P,
				H = n.HAS_MS_NATIVE_FULLSCREEN = M,
				U = n.HAS_IOS_FULLSCREEN = T,
				q = n.HAS_TRUE_NATIVE_FULLSCREEN = O,
				V = n.HAS_NATIVE_FULLSCREEN_ENABLED = D,
				B = n.FULLSCREEN_EVENT_NAME = N;
			n.isFullScreen = j, n.requestFullScreen = I, n.cancelFullScreen = L, i.default.Features = i.default.Features || {}, i.default.Features.isiPad = u, i.default.Features.isiPod = d, i.default.Features.isiPhone = c, i.default.Features.isiOS = i.default.Features.isiPhone || i.default.Features.isiPad, i.default.Features.isAndroid = f, i.default.Features.isIE = h, i.default.Features.isEdge = p, i.default.Features.isChrome = m, i.default.Features.isFirefox = g, i.default.Features.isSafari = v, i.default.Features.isStockAndroid = y, i.default.Features.hasMSE = b, i.default.Features.supportsNativeHLS = k, i.default.Features.supportsPointerEvents = w, i.default.Features.supportsPassiveEvent = $, i.default.Features.hasiOSFullScreen = U, i.default.Features.hasNativeFullscreen = F, i.default.Features.hasWebkitNativeFullScreen = R, i.default.Features.hasMozNativeFullScreen = z, i.default.Features.hasMsNativeFullScreen = H, i.default.Features.hasTrueNativeFullScreen = q, i.default.Features.nativeFullScreenEnabled = V, i.default.Features.fullScreenEventName = B, i.default.Features.isFullScreen = j, i.default.Features.requestFullScreen = I, i.default.Features.cancelFullScreen = L
		}, {
			2: 2,
			3: 3,
			7: 7
		}],
		26: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = a, n.offset = s, n.toggleClass = m, n.fadeOut = g, n.fadeIn = v, n.siblings = y, n.visible = b, n.ajax = w;
			var l = o(e(3)),
				r = o(e(2)),
				i = o(e(7));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(i) {
				return new Promise(function(e, t) {
					var n = r.default.createElement("script");
					n.src = i, n.async = !0, n.onload = function() {
						n.remove(), e()
					}, n.onerror = function() {
						n.remove(), t()
					}, r.default.head.appendChild(n)
				})
			}

			function s(e) {
				var t = e.getBoundingClientRect(),
					n = l.default.pageXOffset || r.default.documentElement.scrollLeft,
					i = l.default.pageYOffset || r.default.documentElement.scrollTop;
				return {
					top: t.top + i,
					left: t.left + n
				}
			}
			var u, c = void 0,
				d = void 0;
			u = "classList" in r.default.documentElement ? (c = function(e, t) {
				return void 0 !== e.classList && e.classList.contains(t)
			}, d = function(e, t) {
				return e.classList.add(t)
			}, function(e, t) {
				return e.classList.remove(t)
			}) : (c = function(e, t) {
				return new RegExp("\\b" + t + "\\b").test(e.className)
			}, d = function(e, t) {
				f(e, t) || (e.className += " " + t)
			}, function(e, t) {
				e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
			});
			var f = n.hasClass = c,
				h = n.addClass = d,
				p = n.removeClass = u;

			function m(e, t) {
				f(e, t) ? p(e, t) : h(e, t)
			}

			function g(r) {
				var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
					a = arguments[2];
				r.style.opacity || (r.style.opacity = 1);
				var s = null;
				l.default.requestAnimationFrame(function e(t) {
					var n = t - (s = s || t),
						i = parseFloat(1 - n / o, 2);
					r.style.opacity = i < 0 ? 0 : i, o < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
				})
			}

			function v(r) {
				var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
					a = arguments[2];
				r.style.opacity || (r.style.opacity = 0);
				var s = null;
				l.default.requestAnimationFrame(function e(t) {
					var n = t - (s = s || t),
						i = parseFloat(n / o, 2);
					r.style.opacity = 1 < i ? 1 : i, o < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
				})
			}

			function y(e, t) {
				var n = [];
				for (e = e.parentNode.firstChild; t && !t(e) || n.push(e), e = e.nextSibling;);
				return n
			}

			function b(e) {
				return void 0 !== e.getClientRects && "function" === e.getClientRects ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : !(!e.offsetWidth && !e.offsetHeight)
			}

			function w(e, t, n, i) {
				var r = l.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
					o = "application/x-www-form-urlencoded; charset=UTF-8",
					a = !1,
					s = "*/".concat("*");
				switch (t) {
					case "text":
						o = "text/plain";
						break;
					case "json":
						o = "application/json, text/javascript";
						break;
					case "html":
						o = "text/html";
						break;
					case "xml":
						o = "application/xml, text/xml"
				}
				"application/x-www-form-urlencoded" !== o && (s = o + ", */*; q=0.01"), r && (r.open("GET", e, !0), r.setRequestHeader("Accept", s), r.onreadystatechange = function() {
					if (!a && 4 === r.readyState)
						if (200 === r.status) {
							a = !0;
							var e = void 0;
							switch (t) {
								case "json":
									e = JSON.parse(r.responseText);
									break;
								case "xml":
									e = r.responseXML;
									break;
								default:
									e = r.responseText
							}
							n(e)
						} else "function" == typeof i && i(r.status)
				}, r.send())
			}
			i.default.Utils = i.default.Utils || {}, i.default.Utils.offset = s, i.default.Utils.hasClass = f, i.default.Utils.addClass = h, i.default.Utils.removeClass = p, i.default.Utils.toggleClass = m, i.default.Utils.fadeIn = v, i.default.Utils.fadeOut = g, i.default.Utils.siblings = y, i.default.Utils.visible = b, i.default.Utils.ajax = w, i.default.Utils.loadScript = a
		}, {
			2: 2,
			3: 3,
			7: 7
		}],
		27: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.escapeHTML = o, n.debounce = a, n.isObjectEmpty = s, n.splitEvents = l, n.createEvent = u, n.isNodeAfter = c, n.isString = d;
			var i, r = (i = e(7)) && i.__esModule ? i : {
				default: i
			};

			function o(e) {
				if ("string" != typeof e) throw new Error("Argument passed must be a string");
				var t = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;"
				};
				return e.replace(/[&<>"]/g, function(e) {
					return t[e]
				})
			}

			function a(i, r) {
				var o = this,
					a = arguments,
					s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
				if ("function" != typeof i) throw new Error("First argument must be a function");
				if ("number" != typeof r) throw new Error("Second argument must be a numeric value");
				var l = void 0;
				return function() {
					var e = o,
						t = a,
						n = s && !l;
					clearTimeout(l), l = setTimeout(function() {
						l = null, s || i.apply(e, t)
					}, r), n && i.apply(e, t)
				}
			}

			function s(e) {
				return Object.getOwnPropertyNames(e).length <= 0
			}

			function l(e, n) {
				var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
					r = {
						d: [],
						w: []
					};
				return (e || "").split(" ").forEach(function(e) {
					var t = e + (n ? "." + n : "");
					t.startsWith(".") ? (r.d.push(t), r.w.push(t)) : r[i.test(e) ? "w" : "d"].push(t)
				}), r.d = r.d.join(" "), r.w = r.w.join(" "), r
			}

			function u(e, t) {
				if ("string" != typeof e) throw new Error("Event name must be a string");
				var n = e.match(/([a-z]+\.([a-z]+))/i),
					i = {
						target: t
					};
				return null !== n && (e = n[1], i.namespace = n[2]), new window.CustomEvent(e, {
					detail: i
				})
			}

			function c(e, t) {
				return !!(e && t && 2 & e.compareDocumentPosition(t))
			}

			function d(e) {
				return "string" == typeof e
			}
			r.default.Utils = r.default.Utils || {}, r.default.Utils.escapeHTML = o, r.default.Utils.debounce = a, r.default.Utils.isObjectEmpty = s, r.default.Utils.splitEvents = l, r.default.Utils.createEvent = u, r.default.Utils.isNodeAfter = c, r.default.Utils.isString = d
		}, {
			7: 7
		}],
		28: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.typeChecks = void 0, n.absolutizeUrl = s, n.formatType = l, n.getMimeFromType = u, n.getTypeFromFile = c, n.getExtension = d, n.normalizeExtension = f;
			var i, r = (i = e(7)) && i.__esModule ? i : {
					default: i
				},
				o = e(27),
				a = n.typeChecks = [];

			function s(e) {
				if ("string" != typeof e) throw new Error("`url` argument must be a string");
				var t = document.createElement("div");
				return t.innerHTML = '<a href="' + (0, o.escapeHTML)(e) + '">x</a>', t.firstChild.href
			}

			function l(e) {
				var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
				return e && !t ? c(e) : t
			}

			function u(e) {
				if ("string" != typeof e) throw new Error("`type` argument must be a string");
				return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e
			}

			function c(e) {
				if ("string" != typeof e) throw new Error("`url` argument must be a string");
				for (var t = 0, n = a.length; t < n; t++) {
					var i = a[t](e);
					if (i) return i
				}
				var r = f(d(e)),
					o = "video/mp4";
				return r && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(r) ? o = "video/" + r : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(r) && (o = "audio/" + r)), o
			}

			function d(e) {
				if ("string" != typeof e) throw new Error("`url` argument must be a string");
				var t = e.split("?")[0].split("\\").pop().split("/").pop();
				return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
			}

			function f(e) {
				if ("string" != typeof e) throw new Error("`extension` argument must be a string");
				switch (e) {
					case "mp4":
					case "m4v":
						return "mp4";
					case "webm":
					case "webma":
					case "webmv":
						return "webm";
					case "ogg":
					case "oga":
					case "ogv":
						return "ogg";
					default:
						return e
				}
			}
			r.default.Utils = r.default.Utils || {}, r.default.Utils.typeChecks = a, r.default.Utils.absolutizeUrl = s, r.default.Utils.formatType = l, r.default.Utils.getMimeFromType = u, r.default.Utils.getTypeFromFile = c, r.default.Utils.getExtension = d, r.default.Utils.normalizeExtension = f
		}, {
			27: 27,
			7: 7
		}],
		29: [function(e, t, n) {
			"use strict";
			var i, r = a(e(2)),
				o = a(e(4));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			if ([Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
					e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
						configurable: !0,
						enumerable: !0,
						writable: !0,
						value: function() {
							this.parentNode.removeChild(this)
						}
					})
				}), function() {
					function e(e, t) {
						t = t || {
							bubbles: !1,
							cancelable: !1,
							detail: void 0
						};
						var n = r.default.createEvent("CustomEvent");
						return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
					}
					"function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
				}(), "function" != typeof Object.assign && (Object.assign = function(e) {
					if (null == e) throw new TypeError("Cannot convert undefined or null to object");
					for (var t = Object(e), n = 1, i = arguments.length; n < i; n++) {
						var r = arguments[n];
						if (null !== r)
							for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
					}
					return t
				}), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
					return t = t || 0, this.substr(t, e.length) === e
				}), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
					for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; 0 <= --n && t.item(n) !== this;);
					return -1 < n
				}), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
					var t = (this.document || this.ownerDocument).querySelectorAll(e),
						n = void 0,
						i = this;
					do {
						for (n = t.length; 0 <= --n && t.item(n) !== i;);
					} while (n < 0 && (i = i.parentElement));
					return i
				}), function() {
					for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
					window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
						var t = (new Date).getTime(),
							n = Math.max(0, 16 - (t - r)),
							i = window.setTimeout(function() {
								e(t + n)
							}, n);
						return r = t + n, i
					}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
						clearTimeout(e)
					})
				}(), /firefox/i.test(navigator.userAgent)) {
				var s = window.getComputedStyle;
				window.getComputedStyle = function(e, t) {
					var n = s(e, t);
					return null === n ? {
						getPropertyValue: function() {}
					} : n
				}
			}
			window.Promise || (window.Promise = o.default), (i = window.Node || window.Element) && i.prototype && null === i.prototype.children && Object.defineProperty(i.prototype, "children", {
				get: function() {
					for (var e = 0, t = void 0, n = this.childNodes, i = []; t = n[e++];) 1 === t.nodeType && i.push(t);
					return i
				}
			})
		}, {
			2: 2,
			4: 4
		}],
		30: [function(e, t, n) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.isDropFrame = k, n.secondsToTimeCode = o, n.timeCodeToSeconds = a, n.calculateTimeFormat = s, n.convertSMPTEtoSeconds = l;
			var i, r = (i = e(7)) && i.__esModule ? i : {
				default: i
			};

			function k() {
				return !((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
			}

			function o(e) {
				var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
					n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
					i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 25,
					r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
					o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "hh:mm:ss";
				e = !e || "number" != typeof e || e < 0 ? 0 : e;
				var a = Math.round(.066666 * i),
					s = Math.round(i),
					l = 24 * Math.round(3600 * i),
					u = Math.round(600 * i),
					c = k(i) ? ";" : ":",
					d = void 0,
					f = void 0,
					h = void 0,
					p = void 0,
					m = Math.round(e * i);
				if (k(i)) {
					m < 0 && (m = l + m);
					var g = (m %= l) % u;
					m += 9 * a * Math.floor(m / u), a < g && (m += a * Math.floor((g - a) / Math.round(60 * s - a)));
					var v = Math.floor(m / s);
					d = Math.floor(Math.floor(v / 60) / 60), f = Math.floor(v / 60) % 60, h = n ? v % 60 : Math.floor(m / s % 60).toFixed(r)
				} else d = Math.floor(e / 3600) % 24, f = Math.floor(e / 60) % 60, h = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(r);
				d = d <= 0 ? 0 : d, h = 60 === (h = h <= 0 ? 0 : h) ? 0 : h, f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f;
				for (var y = o.split(":"), b = {}, w = 0, $ = y.length; w < $; ++w) {
					for (var x = "", S = 0, E = y[w].length; S < E; S++) x.indexOf(y[w][S]) < 0 && (x += y[w][S]);
					~["f", "s", "m", "h"].indexOf(x) && (b[x] = y[w].length)
				}
				var C = t || 0 < d ? (d < 10 && 1 < b.h ? "0" + d : d) + ":" : "";
				return C += (f < 10 && 1 < b.m ? "0" + f : f) + ":", C += "" + (h < 10 && 1 < b.s ? "0" + h : h), n && (C += (p = (p = (m % s).toFixed(0)) <= 0 ? 0 : p) < 10 && b.f ? c + "0" + p : "" + c + p), C
			}

			function a(e) {
				var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
				if ("string" != typeof e) throw new TypeError("Time must be a string");
				if (0 < e.indexOf(";") && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
				var n = e.split(":"),
					i = void 0,
					r = 0,
					o = 0,
					a = 0,
					s = 0,
					l = 0,
					u = Math.round(.066666 * t),
					c = Math.round(t),
					d = 3600 * c,
					f = 60 * c;
				switch (n.length) {
					default:
					case 1:
						a = parseInt(n[0], 10);
						break;
					case 2:
						o = parseInt(n[0], 10), a = parseInt(n[1], 10);
						break;
					case 3:
						r = parseInt(n[0], 10), o = parseInt(n[1], 10), a = parseInt(n[2], 10);
						break;
					case 4:
						r = parseInt(n[0], 10), o = parseInt(n[1], 10), a = parseInt(n[2], 10), s = parseInt(n[3], 10)
				}
				return i = k(t) ? d * r + f * o + c * a + s - u * ((l = 60 * r + o) - Math.floor(l / 10)) : (d * r + f * o + t * a + s) / t, parseFloat(i.toFixed(3))
			}

			function s(e, t) {
				var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
				e = !e || "number" != typeof e || e < 0 ? 0 : e;
				for (var i = Math.floor(e / 3600) % 24, r = Math.floor(e / 60) % 60, o = Math.floor(e % 60), a = [
						[Math.floor((e % 1 * n).toFixed(3)), "f"],
						[o, "s"],
						[r, "m"],
						[i, "h"]
					], s = t.timeFormat, l = s[1] === s[0], u = l ? 2 : 1, c = s.length < u ? s[u] : ":", d = s[0], f = !1, h = 0, p = a.length; h < p; h++)
					if (~s.indexOf(a[h][1])) f = !0;
					else if (f) {
					for (var m = !1, g = h; g < p; g++)
						if (0 < a[g][0]) {
							m = !0;
							break
						} if (!m) break;
					l || (s = d + s), s = a[h][1] + c + s, l && (s = a[h][1] + s), d = a[h][1]
				}
				t.timeFormat = s
			}

			function l(e) {
				if ("string" != typeof e) throw new TypeError("Argument must be a string value");
				for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, i = 1, r = 0, o = (e = e.split(":").reverse()).length; r < o; r++) i = 1, 0 < r && (i = Math.pow(60, r)), n += Number(e[r]) * i;
				return Number(n.toFixed(t))
			}
			r.default.Utils = r.default.Utils || {}, r.default.Utils.secondsToTimeCode = o, r.default.Utils.timeCodeToSeconds = a, r.default.Utils.calculateTimeFormat = s, r.default.Utils.convertSMPTEtoSeconds = l
		}, {
			7: 7
		}]
	}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]),
	function(c) {
		c.extend(mejs.MepDefaults, {
			loopText: mejs.i18n.t("Repeat On/Off"),
			shuffleText: mejs.i18n.t("Shuffle On/Off"),
			nextText: mejs.i18n.t("Next Track"),
			prevText: mejs.i18n.t("Previous Track"),
			playlistText: mejs.i18n.t("Show/Hide Playlist")
		}), c.extend(MediaElementPlayer.prototype, {
			buildloop: function(e, t, n, i) {
				var r = c('<div class="mejs-button mejs__loop-button ' + (e.options.loop ? "mejs__loop-on" : "mejs__loop-off") + '"><button type="button" aria-controls="' + e.id + '" title="' + e.options.loopText + '"></button></div>').appendTo(t).click(function() {
					e.options.loop = !e.options.loop, e.options.loop ? r.removeClass("mejs__loop-off").addClass("mejs__loop-on") : r.removeClass("mejs__loop-on").addClass("mejs__loop-off")
				});
				this.loopToggle = c(this.controls).find(".mejs__loop-button")
			},
			loopToggleClick: function() {
				this.loopToggle.trigger("click")
			},
			buildprevtrack: function(e, t, n, i) {
				c('<div class="mejs-button mejs__prevtrack-button mejs__prevtrack mejs__button-feature"><button type="button" aria-controls="' + e.id + '" title="' + e.options.prevText + '"></button></div>').appendTo(t).click(function() {
					e.playPrevTrack()
				}), this.prevTrack = c(this.controls).find(".mejs__prevtrack-button")
			},
			prevTrackClick: function() {
				this.prevTrack.trigger("click")
			},
			buildnexttrack: function(e, t, n, i) {
				c('<div class="mejs-button mejs__nexttrack-button mejs__nexttrack mejs__button-feature"><button type="button" aria-controls="' + e.id + '" title="' + e.options.nextText + '"></button></div>').appendTo(t).click(function() {
					e.playNextTrack()
				}), this.nextTrack = c(this.controls).find(".mejs__nexttrack-button")
			},
			nextTrackClick: function() {
				this.nextTrack.trigger("click")
			},
			buildplaylist: function(e, t, n, i) {
				var r = this;
				c('<div class="mejs-button mejs__playlist-button ' + (e.options.showPlaylist ? "mejs__hide-playlist mejs-button_active" : "mejs__show-playlist") + '"><button type="button" aria-controls="' + e.id + '" title="' + e.options.playlistText + '"></button></div>').appendTo(t).click(function() {
					r.togglePlaylistDisplay(e, n, i)
				}), r.playlistToggle = c(r.controls).find(".mejs__playlist-button")
			},
			playlistToggleClick: function() {
				this.playlistToggle.trigger("click")
			},
			buildplaylistfeature: function(e, t, n, i) {
				c('<div class="mejs__playlist' + (e.options.showPlaylist ? " active" : "") + '"><ul></ul></div>').insertAfter(e.container), void 0 !== c(i.firstChild).data("showplaylist") && (e.options.playlist = !!c(i.firstChild).data("showplaylist"), e.options.loop = c(i.firstChild).data("loop"), c("#" + e.id).find(".mejs__overlay-play").hide());
				var r, o = [],
					a = "";
				c("#" + e.id).find(".mejs-mediaelement source").each(function() {
					if (r = c(this).parent()[0].canPlayType(this.type), a || "maybe" !== r && "probably" !== r || (a = this.type), a && this.type === a && "" !== c.trim(this.src)) {
						var e = {};
						e.source = c.trim(this.src), "" !== c.trim(this.title) ? e.name = c.trim(this.title) : e.name = 0 < (t = e.source.split("/")).length ? decodeURIComponent(t[t.length - 1]) : "", void 0 !== this.dataset.mepDescription ? e.description = " - " + c(this).data("mep-description") : e.description = "", o.push(e)
					}
					var t
				});
				var s = c(e.container.parentNode).find(".mejs__playlist");
				for (var l in o) {
					var u = c('<li data-url="' + o[l].source + '" title="' + o[l].name + '"><span>' + o[l].name + "</span> " + o[l].description + " </li>");
					s.find("ul").append(u)
				}
				s.find("li:first").addClass("current played"), s.find("ul li").click(function() {
					c(this).hasClass("current") ? e.media.paused ? e.play() : e.pause() : (c(this).addClass("played"), e.playTrack(c(this)))
				}), i.firstChild.addEventListener("ended", function() {
					e.playNextTrack()
				}, !1)
			},
			playNextTrack: function() {
				var e, t = c(this.container.parentNode).find(".mejs__playlist > ul > li"),
					n = t.filter(".current"),
					i = t.not(".played");
				if (i.length < 1 && (n.removeClass("played").siblings().removeClass("played"), i = t.not(".current")), this.options.shuffle) {
					var r = Math.floor(Math.random() * i.length);
					e = i.eq(r)
				} else(e = n.next()).length < 1 && this.options.loop && (e = n.siblings().first());
				1 == e.length && (e.addClass("played"), this.playTrack(e))
			},
			playPrevTrack: function() {
				var e, t = c(this.container.parentNode).find(".mejs__playlist > ul > li"),
					n = t.filter(".current"),
					i = t.filter(".played").not(".current");
				if (i.length < 1 && (n.removeClass("played"), i = t.not(".current")), this.options.shuffle) {
					var r = Math.floor(Math.random() * i.length);
					e = i.eq(r)
				} else(e = n.prev()).length < 1 && this.options.loop && (e = n.siblings().last());
				1 == e.length && (n.removeClass("played"), this.playTrack(e))
			},
			playTrack: function(e) {
				this.pause(), this.setSrc(e.data("url")), this.load(), this.play(), e.addClass("current").siblings().removeClass("current")
			},
			playTrackURL: function(e) {
				var t = c(this.container.parentNode).find(".mejs__playlist > ul > li").filter('[data-url="' + e + '"]');
				this.playTrack(t)
			},
			togglePlaylistDisplay: function(e, t, n, i) {
				e.options.playlist = i ? "show" === i : !e.options.playlist, e.options.playlist ? (c(this.container.parentNode).find(".mejs__playlist").addClass("active"), this.playlistToggle.removeClass("mejs__show-playlist").addClass("mejs__hide-playlist mejs-button_active")) : (c(this.container.parentNode).find(".mejs__playlist").removeClass("active"), this.playlistToggle.removeClass("mejs__hide-playlist mejs-button_active").addClass("mejs__show-playlist"))
			}
		})
	}(mejs.$),
	function(f) {
		var t = MediaElementPlayer.prototype.playTrack;
		f.extend(MediaElementPlayer.prototype, {
			_motoTrackNameElement: null,
			playTrack: function(e) {
				t.call(this, e), this._motoUpdateTrackInfo(e)
			},
			_motoUpdateTrackInfo: function(e) {
				var t, n, i = this._motoGetTrackNameElement();
				"string" == typeof e && (t = e), "object" == typeof e && (t = e.text(), n = e.data("url")), t && (i.text(t), i.attr("title", t)), n && this._motoSetTrackDownloadUrl(n)
			},
			_motoGetTrackNameElement: function() {
				return this._motoTrackNameElement || (this._motoTrackNameElement = f('<div class="mejs-moto-track-name"></div>'), this._motoTrackNameElement.appendTo(f(this.controls).find(".mejs-time-rail"))), this._motoTrackNameElement
			},
			buildmototrackname: function(e, t) {
				this._motoUpdateTrackInfo(this.options.motoTrackName)
			},
			buildmotoloop: function(e, t) {
				var n;
				n = f('<div class="mejs-button mejs-moto-loop-button' + (e.options.loop ? " mejs-button_active" : "") + '"><button></button></div>').appendTo(t).click(function() {
					e.options.loop = !e.options.loop, n.toggleClass("mejs-button_active")
				})
			},
			buildmotoskin: function(n, e, t, i) {
				var r, o, a, s, l, u;

				function c(e) {
					e < 350 ? u.hide() : u.show()
				}

				function d() {
					var e, t = 2;
					s.attr("title", ""), e = setInterval(function() {
						t--, s.attr("title", ""), t <= 0 && clearInterval(e)
					}, 500)
				}
				l = f(n.container), a = f(e), u = a.find(".mejs-volume-button"), r = a.find(".mejs-stop"), o = a.find(".mejs-playpause-button"), r.on("click", function() {
					r.toggleClass("mejs-button_active")
				}), o.on("click", function() {
					r.removeClass("mejs-button_active")
				}), a.find(".mejs-volume-button").append(a.find(".mejs-horizontal-volume-slider")), a.find(".mejs-time-rail").append(a.find(".mejs-time")), s = a.find(".mejs-volume-button button").attr("title", ""), a.append(f('<div class="mejs-button mejs-moto-last-hidden-button"></div>')), c(l.innerWidth()), f(window).on("resize", function() {
					c(l.innerWidth())
				}), a.closest(".moto-widget-audio_player").on("animationend", function() {
					var e, t = 2;
					n.setPlayerSize(), n.setControlsSize(), e = setInterval(function() {
						t--, n.setPlayerSize(), n.setControlsSize(), t <= 0 && clearInterval(e)
					}, 500)
				}), s.on("mousemove", d), i.addEventListener("volumechange", d)
			},
			buildstop: function(e, t, n, i) {
				f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(t).click(function() {
					i.paused || i.pause(), 0 < i.currentTime && (i.setCurrentTime(0), i.pause())
				})
			},
			_motoDownloadButtonElement: null,
			_motoSetTrackDownloadUrl: function(e) {
				this._motoDownloadButtonElement && this._motoDownloadButtonElement.find("> a").attr("href", e)
			},
			buildmotodownload: function(t, e) {
				var n, i, r;

				function o() {
					var e = f(t.domNode).find('source[type="video/mp4"]');
					return e.length ? e.attr("src") : t.getSrc()
				}
				this._motoDownloadButtonElement = f('<div class="mejs-button mejs-moto-download-button"><a href="' + o() + '" download></a></div>'), this._motoDownloadButtonElement.appendTo(e), this._motoSetTrackDownloadUrl(o()), (i = (n = f(t.container.parentNode).find(".mejs__playlist")).find("> ul > li")).length && (i.each(function(e, t) {
					(r = f(t)).append('<span class=""><a class="mejs-moto-download-track-button" href="' + r.data("url") + '" download></a></span>')
				}), f("a.mejs-moto-download-track-button", n).click(function(e) {
					e.stopPropagation()
				}))
			},
			buildmotopip: function(e, t) {
				f('<div class="mejs-button mejs-pic-to-pic"><button type="button" class="fa-object-group"></button></div>').appendTo(t)
			}
		})
	}($),
	function() {
		var p = {
			ar: {
				y: function(e) {
					return 1 === e ? "سنة" : "سنوات"
				},
				mo: function(e) {
					return 1 === e ? "شهر" : "أشهر"
				},
				w: function(e) {
					return 1 === e ? "أسبوع" : "أسابيع"
				},
				d: function(e) {
					return 1 === e ? "يوم" : "أيام"
				},
				h: function(e) {
					return 1 === e ? "ساعة" : "ساعات"
				},
				m: function(e) {
					return 1 === e ? "دقيقة" : "دقائق"
				},
				s: function(e) {
					return 1 === e ? "ثانية" : "ثواني"
				},
				ms: function(e) {
					return 1 === e ? "جزء من الثانية" : "أجزاء من الثانية"
				},
				decimal: ","
			},
			ca: {
				y: function(e) {
					return "any" + (1 !== e ? "s" : "")
				},
				mo: function(e) {
					return "mes" + (1 !== e ? "os" : "")
				},
				w: function(e) {
					return "setman" + (1 !== e ? "es" : "a")
				},
				d: function(e) {
					return "di" + (1 !== e ? "es" : "a")
				},
				h: function(e) {
					return "hor" + (1 !== e ? "es" : "a")
				},
				m: function(e) {
					return "minut" + (1 !== e ? "s" : "")
				},
				s: function(e) {
					return "segon" + (1 !== e ? "s" : "")
				},
				ms: function(e) {
					return "milisegon" + (1 !== e ? "s" : "")
				},
				decimal: ","
			},
			cs: {
				y: function(e) {
					return ["rok", "roku", "roky", "let"][n(e)]
				},
				mo: function(e) {
					return ["měsíc", "měsíce", "měsíce", "měsíců"][n(e)]
				},
				w: function(e) {
					return ["týden", "týdne", "týdny", "týdnů"][n(e)]
				},
				d: function(e) {
					return ["den", "dne", "dny", "dní"][n(e)]
				},
				h: function(e) {
					return ["hodina", "hodiny", "hodiny", "hodin"][n(e)]
				},
				m: function(e) {
					return ["minuta", "minuty", "minuty", "minut"][n(e)]
				},
				s: function(e) {
					return ["sekunda", "sekundy", "sekundy", "sekund"][n(e)]
				},
				ms: function(e) {
					return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][n(e)]
				},
				decimal: ","
			},
			da: {
				y: "år",
				mo: function(e) {
					return "måned" + (1 !== e ? "er" : "")
				},
				w: function(e) {
					return "uge" + (1 !== e ? "r" : "")
				},
				d: function(e) {
					return "dag" + (1 !== e ? "e" : "")
				},
				h: function(e) {
					return "time" + (1 !== e ? "r" : "")
				},
				m: function(e) {
					return "minut" + (1 !== e ? "ter" : "")
				},
				s: function(e) {
					return "sekund" + (1 !== e ? "er" : "")
				},
				ms: function(e) {
					return "millisekund" + (1 !== e ? "er" : "")
				},
				decimal: ","
			},
			de: {
				y: function(e) {
					return "Jahr" + (1 !== e ? "e" : "")
				},
				mo: function(e) {
					return "Monat" + (1 !== e ? "e" : "")
				},
				w: function(e) {
					return "Woche" + (1 !== e ? "n" : "")
				},
				d: function(e) {
					return "Tag" + (1 !== e ? "e" : "")
				},
				h: function(e) {
					return "Stunde" + (1 !== e ? "n" : "")
				},
				m: function(e) {
					return "Minute" + (1 !== e ? "n" : "")
				},
				s: function(e) {
					return "Sekunde" + (1 !== e ? "n" : "")
				},
				ms: function(e) {
					return "Millisekunde" + (1 !== e ? "n" : "")
				},
				decimal: ","
			},
			en: {
				y: function(e) {
					return "year" + (1 !== e ? "s" : "")
				},
				mo: function(e) {
					return "month" + (1 !== e ? "s" : "")
				},
				w: function(e) {
					return "week" + (1 !== e ? "s" : "")
				},
				d: function(e) {
					return "day" + (1 !== e ? "s" : "")
				},
				h: function(e) {
					return "hour" + (1 !== e ? "s" : "")
				},
				m: function(e) {
					return "minute" + (1 !== e ? "s" : "")
				},
				s: function(e) {
					return "second" + (1 !== e ? "s" : "")
				},
				ms: function(e) {
					return "millisecond" + (1 !== e ? "s" : "")
				},
				decimal: "."
			},
			es: {
				y: function(e) {
					return "año" + (1 !== e ? "s" : "")
				},
				mo: function(e) {
					return "mes" + (1 !== e ? "es" : "")
				},
				w: function(e) {
					return "semana" + (1 !== e ? "s" : "")
				},
				d: function(e) {
					return "día" + (1 !== e ? "s" : "")
				},
				h: function(e) {
					return "hora" + (1 !== e ? "s" : "")
				},
				m: function(e) {
					return "minuto" + (1 !== e ? "s" : "")
				},
				s: function(e) {
					return "segundo" + (1 !== e ? "s" : "")
				},
				ms: function(e) {
					return "milisegundo" + (1 !== e ? "s" : "")
				},
				decimal: ","
			},
			fi: {
				y: function(e) {
					return 1 === e ? "vuosi" : "vuotta"
				},
				mo: function(e) {
					return 1 === e ? "kuukausi" : "kuukautta"
				},
				w: function(e) {
					return "viikko" + (1 !== e ? "a" : "")
				},
				d: function(e) {
					return "päivä" + (1 !== e ? "ä" : "")
				},
				h: function(e) {
					return "tunti" + (1 !== e ? "a" : "")
				},
				m: function(e) {
					return "minuutti" + (1 !== e ? "a" : "")
				},
				s: function(e) {
					return "sekunti" + (1 !== e ? "a" : "")
				},
				ms: function(e) {
					return "millisekunti" + (1 !== e ? "a" : "")
				},
				decimal: ","
			},
			fr: {
				y: function(e) {
					return "an" + (1 !== e ? "s" : "")
				},
				mo: "mois",
				w: function(e) {
					return "semaine" + (1 !== e ? "s" : "")
				},
				d: function(e) {
					return "jour" + (1 !== e ? "s" : "")
				},
				h: function(e) {
					return "heure" + (1 !== e ? "s" : "")
				},
				m: function(e) {
					return "minute" + (1 !== e ? "s" : "")
				},
				s: function(e) {
					return "seconde" + (1 !== e ? "s" : "")
				},
				ms: function(e) {
					return "milliseconde" + (1 !== e ? "s" : "")
				},
				decimal: ","
			},
			gr: {
				y: function(e) {
					return 1 === e ? "χρόνος" : "χρόνια"
				},
				mo: function(e) {
					return 1 === e ? "μήνας" : "μήνες"
				},
				w: function(e) {
					return 1 === e ? "εβδομάδα" : "εβδομάδες"
				},
				d: function(e) {
					return 1 === e ? "μέρα" : "μέρες"
				},
				h: function(e) {
					return 1 === e ? "ώρα" : "ώρες"
				},
				m: function(e) {
					return 1 === e ? "λεπτό" : "λεπτά"
				},
				s: function(e) {
					return 1 === e ? "δευτερόλεπτο" : "δευτερόλεπτα"
				},
				ms: function(e) {
					return 1 === e ? "χιλιοστό του δευτερολέπτου" : "χιλιοστά του δευτερολέπτου"
				},
				decimal: ","
			},
			hu: {
				y: "év",
				mo: "hónap",
				w: "hét",
				d: "nap",
				h: "óra",
				m: "perc",
				s: "másodperc",
				ms: "ezredmásodperc",
				decimal: ","
			},
			id: {
				y: "tahun",
				mo: "bulan",
				w: "minggu",
				d: "hari",
				h: "jam",
				m: "menit",
				s: "detik",
				ms: "milidetik",
				decimal: "."
			},
			it: {
				y: function(e) {
					return "ann" + (1 !== e ? "i" : "o")
				},
				mo: function(e) {
					return "mes" + (1 !== e ? "i" : "e")
				},
				w: function(e) {
					return "settiman" + (1 !== e ? "e" : "a")
				},
				d: function(e) {
					return "giorn" + (1 !== e ? "i" : "o")
				},
				h: function(e) {
					return "or" + (1 !== e ? "e" : "a")
				},
				m: function(e) {
					return "minut" + (1 !== e ? "i" : "o")
				},
				s: function(e) {
					return "second" + (1 !== e ? "i" : "o")
				},
				ms: function(e) {
					return "millisecond" + (1 !== e ? "i" : "o")
				},
				decimal: ","
			},
			ja: {
				y: "年",
				mo: "月",
				w: "週",
				d: "日",
				h: "時間",
				m: "分",
				s: "秒",
				ms: "ミリ秒",
				decimal: "."
			},
			ko: {
				y: "년",
				mo: "개월",
				w: "주일",
				d: "일",
				h: "시간",
				m: "분",
				s: "초",
				ms: "밀리 초",
				decimal: "."
			},
			lt: {
				y: function(e) {
					return e % 10 == 0 || 10 <= e % 100 && e % 100 <= 20 ? "metų" : "metai"
				},
				mo: function(e) {
					return ["mėnuo", "mėnesiai", "mėnesių"][a(e)]
				},
				w: function(e) {
					return ["savaitė", "savaitės", "savaičių"][a(e)]
				},
				d: function(e) {
					return ["diena", "dienos", "dienų"][a(e)]
				},
				h: function(e) {
					return ["valanda", "valandos", "valandų"][a(e)]
				},
				m: function(e) {
					return ["minutė", "minutės", "minučių"][a(e)]
				},
				s: function(e) {
					return ["sekundė", "sekundės", "sekundžių"][a(e)]
				},
				ms: function(e) {
					return ["milisekundė", "milisekundės", "milisekundžių"][a(e)]
				},
				decimal: ","
			},
			ms: {
				y: "tahun",
				mo: "bulan",
				w: "minggu",
				d: "hari",
				h: "jam",
				m: "minit",
				s: "saat",
				ms: "milisaat",
				decimal: "."
			},
			nl: {
				y: "jaar",
				mo: function(e) {
					return 1 === e ? "maand" : "maanden"
				},
				w: function(e) {
					return 1 === e ? "week" : "weken"
				},
				d: function(e) {
					return 1 === e ? "dag" : "dagen"
				},
				h: "uur",
				m: function(e) {
					return 1 === e ? "minuut" : "minuten"
				},
				s: function(e) {
					return 1 === e ? "seconde" : "seconden"
				},
				ms: function(e) {
					return 1 === e ? "milliseconde" : "milliseconden"
				},
				decimal: ","
			},
			no: {
				y: "år",
				mo: function(e) {
					return "måned" + (1 !== e ? "er" : "")
				},
				w: function(e) {
					return "uke" + (1 !== e ? "r" : "")
				},
				d: function(e) {
					return "dag" + (1 !== e ? "er" : "")
				},
				h: function(e) {
					return "time" + (1 !== e ? "r" : "")
				},
				m: function(e) {
					return "minutt" + (1 !== e ? "er" : "")
				},
				s: function(e) {
					return "sekund" + (1 !== e ? "er" : "")
				},
				ms: function(e) {
					return "millisekund" + (1 !== e ? "er" : "")
				},
				decimal: ","
			},
			pl: {
				y: function(e) {
					return ["rok", "roku", "lata", "lat"][r(e)]
				},
				mo: function(e) {
					return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][r(e)]
				},
				w: function(e) {
					return ["tydzień", "tygodnia", "tygodnie", "tygodni"][r(e)]
				},
				d: function(e) {
					return ["dzień", "dnia", "dni", "dni"][r(e)]
				},
				h: function(e) {
					return ["godzina", "godziny", "godziny", "godzin"][r(e)]
				},
				m: function(e) {
					return ["minuta", "minuty", "minuty", "minut"][r(e)]
				},
				s: function(e) {
					return ["sekunda", "sekundy", "sekundy", "sekund"][r(e)]
				},
				ms: function(e) {
					return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][r(e)]
				},
				decimal: ","
			},
			pt: {
				y: function(e) {
					return "ano" + (1 !== e ? "s" : "")
				},
				mo: function(e) {
					return 1 !== e ? "meses" : "mês"
				},
				w: function(e) {
					return "semana" + (1 !== e ? "s" : "")
				},
				d: function(e) {
					return "dia" + (1 !== e ? "s" : "")
				},
				h: function(e) {
					return "hora" + (1 !== e ? "s" : "")
				},
				m: function(e) {
					return "minuto" + (1 !== e ? "s" : "")
				},
				s: function(e) {
					return "segundo" + (1 !== e ? "s" : "")
				},
				ms: function(e) {
					return "milissegundo" + (1 !== e ? "s" : "")
				},
				decimal: ","
			},
			ru: {
				y: function(e) {
					return ["лет", "год", "года"][o(e)]
				},
				mo: function(e) {
					return ["месяцев", "месяц", "месяца"][o(e)]
				},
				w: function(e) {
					return ["недель", "неделя", "недели"][o(e)]
				},
				d: function(e) {
					return ["дней", "день", "дня"][o(e)]
				},
				h: function(e) {
					return ["часов", "час", "часа"][o(e)]
				},
				m: function(e) {
					return ["минут", "минута", "минуты"][o(e)]
				},
				s: function(e) {
					return ["секунд", "секунда", "секунды"][o(e)]
				},
				ms: function(e) {
					return ["миллисекунд", "миллисекунда", "миллисекунды"][o(e)]
				},
				decimal: ","
			},
			uk: {
				y: function(e) {
					return ["років", "рік", "роки"][o(e)]
				},
				mo: function(e) {
					return ["місяців", "місяць", "місяці"][o(e)]
				},
				w: function(e) {
					return ["неділь", "неділя", "неділі"][o(e)]
				},
				d: function(e) {
					return ["днів", "день", "дні"][o(e)]
				},
				h: function(e) {
					return ["годин", "година", "години"][o(e)]
				},
				m: function(e) {
					return ["хвилин", "хвилина", "хвилини"][o(e)]
				},
				s: function(e) {
					return ["секунд", "секунда", "секунди"][o(e)]
				},
				ms: function(e) {
					return ["мілісекунд", "мілісекунда", "мілісекунди"][o(e)]
				},
				decimal: ","
			},
			sv: {
				y: "år",
				mo: function(e) {
					return "månad" + (1 !== e ? "er" : "")
				},
				w: function(e) {
					return "veck" + (1 !== e ? "or" : "a")
				},
				d: function(e) {
					return "dag" + (1 !== e ? "ar" : "")
				},
				h: function(e) {
					return "timm" + (1 !== e ? "ar" : "e")
				},
				m: function(e) {
					return "minut" + (1 !== e ? "er" : "")
				},
				s: function(e) {
					return "sekund" + (1 !== e ? "er" : "")
				},
				ms: function(e) {
					return "millisekund" + (1 !== e ? "er" : "")
				},
				decimal: ","
			},
			tr: {
				y: "yıl",
				mo: "ay",
				w: "hafta",
				d: "gün",
				h: "saat",
				m: "dakika",
				s: "saniye",
				ms: "milisaniye",
				decimal: ","
			},
			vi: {
				y: "năm",
				mo: "tháng",
				w: "tuần",
				d: "ngày",
				h: "giờ",
				m: "phút",
				s: "giây",
				ms: "mili giây",
				decimal: ","
			},
			zh_CN: {
				y: "年",
				mo: "个月",
				w: "周",
				d: "天",
				h: "小时",
				m: "分钟",
				s: "秒",
				ms: "毫秒",
				decimal: "."
			},
			zh_TW: {
				y: "年",
				mo: "個月",
				w: "周",
				d: "天",
				h: "小時",
				m: "分鐘",
				s: "秒",
				ms: "毫秒",
				decimal: "."
			}
		};

		function e(e) {
			var n = function(e, t) {
				return function(e, t) {
					var n, i, r;
					e = Math.abs(e);
					var o = t.languages[t.language] || p[t.language];
					if (!o) throw new Error("No language " + o + ".");
					var a, s, l, u = [];
					for (n = 0, i = t.units.length; n < i; n++) a = t.units[n], s = t.unitMeasures[a], l = n + 1 === i ? e / s : Math.floor(e / s), u.push({
						unitCount: l,
						unitName: a
					}), e -= l * s;
					var c, d, f = 0;
					for (n = 0; n < u.length; n++)
						if (u[n].unitCount) {
							f = n;
							break
						} if (t.round)
						for (n = u.length - 1; 0 <= n && ((r = u[n]).unitCount = Math.round(r.unitCount), 0 !== n); n--) d = u[n - 1], c = t.unitMeasures[d.unitName] / t.unitMeasures[r.unitName], (r.unitCount % c == 0 || t.largest && t.largest - 1 < n - f) && (d.unitCount += r.unitCount / c, r.unitCount = 0);
					var h = [];
					for (n = 0, u.length; n < i && ((r = u[n]).unitCount && h.push(m(r.unitCount, r.unitName, o, t)), h.length !== t.largest); n++);
					return h.length ? t.conjunction && 1 !== h.length ? 2 === h.length ? h.join(t.conjunction) : 2 < h.length ? h.slice(0, -1).join(t.delimiter) + (t.serialComma ? "," : "") + t.conjunction + h.slice(-1) : void 0 : h.join(t.delimiter) : m(0, t.units[t.units.length - 1], o, t)
				}(e, i({}, n, t || {}))
			};
			return i(n, {
				language: "en",
				delimiter: ", ",
				spacer: " ",
				conjunction: "",
				serialComma: !0,
				units: ["y", "mo", "w", "d", "h", "m", "s"],
				languages: {},
				round: !1,
				unitMeasures: {
					y: 315576e5,
					mo: 26298e5,
					w: 6048e5,
					d: 864e5,
					h: 36e5,
					m: 6e4,
					s: 1e3,
					ms: 1
				}
			}, e)
		}
		var t = e({});

		function m(e, t, n, i) {
			var r;
			r = void 0 === i.decimal ? n.decimal : i.decimal;
			var o, a = e.toString().replace(".", r),
				s = n[t];
			return o = "function" == typeof s ? s(e) : s, a + i.spacer + o
		}

		function i(e) {
			for (var t, n = 1; n < arguments.length; n++)
				for (var i in t = arguments[n]) t.hasOwnProperty(i) && (e[i] = t[i]);
			return e
		}

		function n(e) {
			return 1 === e ? 0 : Math.floor(e) !== e ? 1 : 2 <= e % 10 && e % 10 <= 4 && e % 100 < 10 ? 2 : 3
		}

		function r(e) {
			return 1 === e ? 0 : Math.floor(e) !== e ? 1 : 2 <= e % 10 && e % 10 <= 4 && !(10 < e % 100 && e % 100 < 20) ? 2 : 3
		}

		function o(e) {
			return Math.floor(e) !== e ? 2 : 5 <= e % 100 && e % 100 <= 20 || 5 <= e % 10 && e % 10 <= 9 || e % 10 == 0 ? 0 : e % 10 == 1 ? 1 : 1 < e ? 2 : 0
		}

		function a(e) {
			return 1 === e || e % 10 == 1 && 20 < e % 100 ? 0 : Math.floor(e) !== e || 2 <= e % 10 && 20 < e % 100 || 2 <= e % 10 && e % 100 < 10 ? 1 : 2
		}
		t.getSupportedLanguages = function() {
			var e = [];
			for (var t in p) p.hasOwnProperty(t) && e.push(t);
			return e
		}, t.humanizer = e, "function" == typeof define && define.amd ? define(function() {
			return t
		}) : "undefined" != typeof module && module.exports ? module.exports = t : this.humanizeDuration = t
	}(),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
	}(this, function() {
		"use strict";
		var e, r;

		function y() {
			return e.apply(null, arguments)
		}

		function s(e) {
			return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
		}

		function l(e) {
			return null != e && "[object Object]" === Object.prototype.toString.call(e)
		}

		function u(e) {
			return void 0 === e
		}

		function c(e) {
			return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
		}

		function d(e) {
			return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
		}

		function f(e, t) {
			var n, i = [];
			for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
			return i
		}

		function b(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}

		function h(e, t) {
			for (var n in t) b(t, n) && (e[n] = t[n]);
			return b(t, "toString") && (e.toString = t.toString), b(t, "valueOf") && (e.valueOf = t.valueOf), e
		}

		function p(e, t, n, i) {
			return Et(e, t, n, i, !0).utc()
		}

		function w(e) {
			return null == e._pf && (e._pf = {
				empty: !1,
				unusedTokens: [],
				unusedInput: [],
				overflow: -2,
				charsLeftOver: 0,
				nullInput: !1,
				invalidMonth: null,
				invalidFormat: !1,
				userInvalidated: !1,
				iso: !1,
				parsedDateParts: [],
				meridiem: null,
				rfc2822: !1,
				weekdayMismatch: !1
			}), e._pf
		}

		function m(e) {
			if (null == e._isValid) {
				var t = w(e),
					n = r.call(t.parsedDateParts, function(e) {
						return null != e
					}),
					i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
				if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
				e._isValid = i
			}
			return e._isValid
		}

		function g(e) {
			var t = p(NaN);
			return null != e ? h(w(t), e) : w(t).userInvalidated = !0, t
		}
		r = Array.prototype.some ? Array.prototype.some : function(e) {
			for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
				if (i in t && e.call(this, t[i], i, t)) return !0;
			return !1
		};
		var o = y.momentProperties = [];

		function v(e, t) {
			var n, i, r;
			if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = w(t)), u(t._locale) || (e._locale = t._locale), 0 < o.length)
				for (n = 0; n < o.length; n++) u(r = t[i = o[n]]) || (e[i] = r);
			return e
		}
		var t = !1;

		function $(e) {
			v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, y.updateOffset(this), t = !1)
		}

		function x(e) {
			return e instanceof $ || null != e && null != e._isAMomentObject
		}

		function S(e) {
			return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
		}

		function E(e) {
			var t = +e,
				n = 0;
			return 0 !== t && isFinite(t) && (n = S(t)), n
		}

		function a(e, t, n) {
			var i, r = Math.min(e.length, t.length),
				o = Math.abs(e.length - t.length),
				a = 0;
			for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && E(e[i]) !== E(t[i])) && a++;
			return a + o
		}

		function C(e) {
			!1 === y.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
		}

		function n(r, o) {
			var a = !0;
			return h(function() {
				if (null != y.deprecationHandler && y.deprecationHandler(null, r), a) {
					for (var e, t = [], n = 0; n < arguments.length; n++) {
						if (e = "", "object" == typeof arguments[n]) {
							for (var i in e += "\n[" + n + "] ", arguments[0]) e += i + ": " + arguments[0][i] + ", ";
							e = e.slice(0, -2)
						} else e = arguments[n];
						t.push(e)
					}
					C(r + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
				}
				return o.apply(this, arguments)
			}, o)
		}
		var i, k = {};

		function T(e, t) {
			null != y.deprecationHandler && y.deprecationHandler(e, t), k[e] || (C(t), k[e] = !0)
		}

		function _(e) {
			return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
		}

		function A(e, t) {
			var n, i = h({}, e);
			for (n in t) b(t, n) && (l(e[n]) && l(t[n]) ? (i[n] = {}, h(i[n], e[n]), h(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
			for (n in e) b(e, n) && !b(t, n) && l(e[n]) && (i[n] = h({}, i[n]));
			return i
		}

		function P(e) {
			null != e && this.set(e)
		}
		y.suppressDeprecationWarnings = !1, y.deprecationHandler = null, i = Object.keys ? Object.keys : function(e) {
			var t, n = [];
			for (t in e) b(e, t) && n.push(t);
			return n
		};
		var M = {};

		function O(e, t) {
			var n = e.toLowerCase();
			M[n] = M[n + "s"] = M[t] = e
		}

		function D(e) {
			return "string" == typeof e ? M[e] || M[e.toLowerCase()] : void 0
		}

		function N(e) {
			var t, n, i = {};
			for (n in e) b(e, n) && (t = D(n)) && (i[t] = e[n]);
			return i
		}
		var j = {};

		function I(e, t) {
			j[e] = t
		}

		function L(e, t, n) {
			var i = "" + Math.abs(e),
				r = t - i.length;
			return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
		}
		var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
			R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
			z = {},
			H = {};

		function U(e, t, n, i) {
			var r = i;
			"string" == typeof i && (r = function() {
				return this[i]()
			}), e && (H[e] = r), t && (H[t[0]] = function() {
				return L(r.apply(this, arguments), t[1], t[2])
			}), n && (H[n] = function() {
				return this.localeData().ordinal(r.apply(this, arguments), e)
			})
		}

		function q(e, t) {
			return e.isValid() ? (t = V(t, e.localeData()), z[t] = z[t] || function(i) {
				var e, r, t, o = i.match(F);
				for (e = 0, r = o.length; e < r; e++) H[o[e]] ? o[e] = H[o[e]] : o[e] = (t = o[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
				return function(e) {
					var t, n = "";
					for (t = 0; t < r; t++) n += _(o[t]) ? o[t].call(e, i) : o[t];
					return n
				}
			}(t), z[t](e)) : e.localeData().invalidDate()
		}

		function V(e, t) {
			var n = 5;

			function i(e) {
				return t.longDateFormat(e) || e
			}
			for (R.lastIndex = 0; 0 <= n && R.test(e);) e = e.replace(R, i), R.lastIndex = 0, n -= 1;
			return e
		}
		var B = /\d/,
			W = /\d\d/,
			Y = /\d{3}/,
			G = /\d{4}/,
			X = /[+-]?\d{6}/,
			Z = /\d\d?/,
			K = /\d\d\d\d?/,
			J = /\d\d\d\d\d\d?/,
			Q = /\d{1,3}/,
			ee = /\d{1,4}/,
			te = /[+-]?\d{1,6}/,
			ne = /\d+/,
			ie = /[+-]?\d+/,
			re = /Z|[+-]\d\d:?\d\d/gi,
			oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
			ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
			se = {};

		function le(e, n, i) {
			se[e] = _(n) ? n : function(e, t) {
				return e && i ? i : n
			}
		}

		function ue(e) {
			return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
		}
		var ce = {};

		function de(e, n) {
			var t, i = n;
			for ("string" == typeof e && (e = [e]), c(n) && (i = function(e, t) {
					t[n] = E(e)
				}), t = 0; t < e.length; t++) ce[e[t]] = i
		}

		function fe(e, r) {
			de(e, function(e, t, n, i) {
				n._w = n._w || {}, r(e, n._w, n, i)
			})
		}
		var he = 0,
			pe = 1,
			me = 2,
			ge = 3,
			ve = 4,
			ye = 5,
			be = 6,
			we = 7,
			$e = 8;

		function xe(e) {
			return Se(e) ? 366 : 365
		}

		function Se(e) {
			return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
		}
		U("Y", 0, 0, function() {
			var e = this.year();
			return e <= 9999 ? "" + e : "+" + e
		}), U(0, ["YY", 2], 0, function() {
			return this.year() % 100
		}), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), I("year", 1), le("Y", ie), le("YY", Z, W), le("YYYY", ee, G), le("YYYYY", te, X), le("YYYYYY", te, X), de(["YYYYY", "YYYYYY"], he), de("YYYY", function(e, t) {
			t[he] = 2 === e.length ? y.parseTwoDigitYear(e) : E(e)
		}), de("YY", function(e, t) {
			t[he] = y.parseTwoDigitYear(e)
		}), de("Y", function(e, t) {
			t[he] = parseInt(e, 10)
		}), y.parseTwoDigitYear = function(e) {
			return E(e) + (68 < E(e) ? 1900 : 2e3)
		};
		var Ee, Ce = ke("FullYear", !0);

		function ke(t, n) {
			return function(e) {
				return null != e ? (_e(this, t, e), y.updateOffset(this, n), this) : Te(this, t)
			}
		}

		function Te(e, t) {
			return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
		}

		function _e(e, t, n) {
			e.isValid() && !isNaN(n) && ("FullYear" === t && Se(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ae(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
		}

		function Ae(e, t) {
			if (isNaN(e) || isNaN(t)) return NaN;
			var n = (t % 12 + 12) % 12;
			return e += (t - n) / 12, 1 === n ? Se(e) ? 29 : 28 : 31 - n % 7 % 2
		}
		Ee = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
			var t;
			for (t = 0; t < this.length; ++t)
				if (this[t] === e) return t;
			return -1
		}, U("M", ["MM", 2], "Mo", function() {
			return this.month() + 1
		}), U("MMM", 0, 0, function(e) {
			return this.localeData().monthsShort(this, e)
		}), U("MMMM", 0, 0, function(e) {
			return this.localeData().months(this, e)
		}), O("month", "M"), I("month", 8), le("M", Z), le("MM", Z, W), le("MMM", function(e, t) {
			return t.monthsShortRegex(e)
		}), le("MMMM", function(e, t) {
			return t.monthsRegex(e)
		}), de(["M", "MM"], function(e, t) {
			t[pe] = E(e) - 1
		}), de(["MMM", "MMMM"], function(e, t, n, i) {
			var r = n._locale.monthsParse(e, i, n._strict);
			null != r ? t[pe] = r : w(n).invalidMonth = e
		});
		var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
			Me = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

		function De(e, t) {
			var n;
			if (!e.isValid()) return e;
			if ("string" == typeof t)
				if (/^\d+$/.test(t)) t = E(t);
				else if (!c(t = e.localeData().monthsParse(t))) return e;
			return n = Math.min(e.date(), Ae(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
		}

		function Ne(e) {
			return null != e ? (De(this, e), y.updateOffset(this, !0), this) : Te(this, "Month")
		}
		var je = ae,
			Ie = ae;

		function Le() {
			function e(e, t) {
				return t.length - e.length
			}
			var t, n, i = [],
				r = [],
				o = [];
			for (t = 0; t < 12; t++) n = p([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
			for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++) i[t] = ue(i[t]), r[t] = ue(r[t]);
			for (t = 0; t < 24; t++) o[t] = ue(o[t]);
			this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
		}

		function Fe(e) {
			var t = new Date(Date.UTC.apply(null, arguments));
			return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
		}

		function Re(e, t, n) {
			var i = 7 + t - n;
			return -(7 + Fe(e, 0, i).getUTCDay() - t) % 7 + i - 1
		}

		function ze(e, t, n, i, r) {
			var o, a, s = 1 + 7 * (t - 1) + (7 + n - i) % 7 + Re(e, i, r);
			return a = s <= 0 ? xe(o = e - 1) + s : s > xe(e) ? (o = e + 1, s - xe(e)) : (o = e, s), {
				year: o,
				dayOfYear: a
			}
		}

		function He(e, t, n) {
			var i, r, o = Re(e.year(), t, n),
				a = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
			return a < 1 ? i = a + Ue(r = e.year() - 1, t, n) : a > Ue(e.year(), t, n) ? (i = a - Ue(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = a), {
				week: i,
				year: r
			}
		}

		function Ue(e, t, n) {
			var i = Re(e, t, n),
				r = Re(e + 1, t, n);
			return (xe(e) - i + r) / 7
		}
		U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), I("week", 5), I("isoWeek", 5), le("w", Z), le("ww", Z, W), le("W", Z), le("WW", Z, W), fe(["w", "ww", "W", "WW"], function(e, t, n, i) {
			t[i.substr(0, 1)] = E(e)
		}), U("d", 0, "do", "day"), U("dd", 0, 0, function(e) {
			return this.localeData().weekdaysMin(this, e)
		}), U("ddd", 0, 0, function(e) {
			return this.localeData().weekdaysShort(this, e)
		}), U("dddd", 0, 0, function(e) {
			return this.localeData().weekdays(this, e)
		}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), le("d", Z), le("e", Z), le("E", Z), le("dd", function(e, t) {
			return t.weekdaysMinRegex(e)
		}), le("ddd", function(e, t) {
			return t.weekdaysShortRegex(e)
		}), le("dddd", function(e, t) {
			return t.weekdaysRegex(e)
		}), fe(["dd", "ddd", "dddd"], function(e, t, n, i) {
			var r = n._locale.weekdaysParse(e, i, n._strict);
			null != r ? t.d = r : w(n).invalidWeekday = e
		}), fe(["d", "e", "E"], function(e, t, n, i) {
			t[i] = E(e)
		});
		var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			Ve = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			Be = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			We = ae,
			Ye = ae,
			Ge = ae;

		function Xe() {
			function e(e, t) {
				return t.length - e.length
			}
			var t, n, i, r, o, a = [],
				s = [],
				l = [],
				u = [];
			for (t = 0; t < 7; t++) n = p([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(i), s.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
			for (a.sort(e), s.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = ue(s[t]), l[t] = ue(l[t]), u[t] = ue(u[t]);
			this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
		}

		function Ze() {
			return this.hours() % 12 || 12
		}

		function Ke(e, t) {
			U(e, 0, 0, function() {
				return this.localeData().meridiem(this.hours(), this.minutes(), t)
			})
		}

		function Je(e, t) {
			return t._meridiemParse
		}
		U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ze), U("k", ["kk", 2], 0, function() {
			return this.hours() || 24
		}), U("hmm", 0, 0, function() {
			return "" + Ze.apply(this) + L(this.minutes(), 2)
		}), U("hmmss", 0, 0, function() {
			return "" + Ze.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
		}), U("Hmm", 0, 0, function() {
			return "" + this.hours() + L(this.minutes(), 2)
		}), U("Hmmss", 0, 0, function() {
			return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
		}), Ke("a", !0), Ke("A", !1), O("hour", "h"), I("hour", 13), le("a", Je), le("A", Je), le("H", Z), le("h", Z), le("k", Z), le("HH", Z, W), le("hh", Z, W), le("kk", Z, W), le("hmm", K), le("hmmss", J), le("Hmm", K), le("Hmmss", J), de(["H", "HH"], ge), de(["k", "kk"], function(e, t, n) {
			var i = E(e);
			t[ge] = 24 === i ? 0 : i
		}), de(["a", "A"], function(e, t, n) {
			n._isPm = n._locale.isPM(e), n._meridiem = e
		}), de(["h", "hh"], function(e, t, n) {
			t[ge] = E(e), w(n).bigHour = !0
		}), de("hmm", function(e, t, n) {
			var i = e.length - 2;
			t[ge] = E(e.substr(0, i)), t[ve] = E(e.substr(i)), w(n).bigHour = !0
		}), de("hmmss", function(e, t, n) {
			var i = e.length - 4,
				r = e.length - 2;
			t[ge] = E(e.substr(0, i)), t[ve] = E(e.substr(i, 2)), t[ye] = E(e.substr(r)), w(n).bigHour = !0
		}), de("Hmm", function(e, t, n) {
			var i = e.length - 2;
			t[ge] = E(e.substr(0, i)), t[ve] = E(e.substr(i))
		}), de("Hmmss", function(e, t, n) {
			var i = e.length - 4,
				r = e.length - 2;
			t[ge] = E(e.substr(0, i)), t[ve] = E(e.substr(i, 2)), t[ye] = E(e.substr(r))
		});
		var Qe, et = ke("Hours", !0),
			tt = {
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				},
				longDateFormat: {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				},
				invalidDate: "Invalid date",
				ordinal: "%d",
				dayOfMonthOrdinalParse: /\d{1,2}/,
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				},
				months: Me,
				monthsShort: Oe,
				week: {
					dow: 0,
					doy: 6
				},
				weekdays: qe,
				weekdaysMin: Be,
				weekdaysShort: Ve,
				meridiemParse: /[ap]\.?m?\.?/i
			},
			nt = {},
			it = {};

		function rt(e) {
			return e ? e.toLowerCase().replace("_", "-") : e
		}

		function ot(e) {
			var t = null;
			if (!nt[e] && "undefined" != typeof module && module && module.exports) try {
				t = Qe._abbr, require("./locale/" + e), at(t)
			} catch (e) {}
			return nt[e]
		}

		function at(e, t) {
			var n;
			return e && (n = u(t) ? lt(e) : st(e, t)) && (Qe = n), Qe._abbr
		}

		function st(e, t) {
			if (null === t) return delete nt[e], null;
			var n = tt;
			if (t.abbr = e, null != nt[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = nt[e]._config;
			else if (null != t.parentLocale) {
				if (null == nt[t.parentLocale]) return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({
					name: e,
					config: t
				}), null;
				n = nt[t.parentLocale]._config
			}
			return nt[e] = new P(A(n, t)), it[e] && it[e].forEach(function(e) {
				st(e.name, e.config)
			}), at(e), nt[e]
		}

		function lt(e) {
			var t;
			if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Qe;
			if (!s(e)) {
				if (t = ot(e)) return t;
				e = [e]
			}
			return function(e) {
				for (var t, n, i, r, o = 0; o < e.length;) {
					for (t = (r = rt(e[o]).split("-")).length, n = (n = rt(e[o + 1])) ? n.split("-") : null; 0 < t;) {
						if (i = ot(r.slice(0, t).join("-"))) return i;
						if (n && n.length >= t && a(r, n, !0) >= t - 1) break;
						t--
					}
					o++
				}
				return null
			}(e)
		}

		function ut(e) {
			var t, n = e._a;
			return n && -2 === w(e).overflow && (t = n[pe] < 0 || 11 < n[pe] ? pe : n[me] < 1 || n[me] > Ae(n[he], n[pe]) ? me : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[ye] || 0 !== n[be]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[ye] < 0 || 59 < n[ye] ? ye : n[be] < 0 || 999 < n[be] ? be : -1, w(e)._overflowDayOfYear && (t < he || me < t) && (t = me), w(e)._overflowWeeks && -1 === t && (t = we), w(e)._overflowWeekday && -1 === t && (t = $e), w(e).overflow = t), e
		}

		function ct(e, t, n) {
			return null != e ? e : null != t ? t : n
		}

		function dt(e) {
			var t, n, i, r, o, a = [];
			if (!e._d) {
				var s, l;
				for (s = e, l = new Date(y.now()), i = s._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[me] && null == e._a[pe] && function(e) {
						var t, n, i, r, o, a, s, l;
						if (null != (t = e._w).GG || null != t.W || null != t.E) o = 1, a = 4, n = ct(t.GG, e._a[he], He(Ct(), 1, 4).year), i = ct(t.W, 1), ((r = ct(t.E, 1)) < 1 || 7 < r) && (l = !0);
						else {
							o = e._locale._week.dow, a = e._locale._week.doy;
							var u = He(Ct(), o, a);
							n = ct(t.gg, e._a[he], u.year), i = ct(t.w, u.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (l = !0) : null != t.e ? (r = t.e + o, (t.e < 0 || 6 < t.e) && (l = !0)) : r = o
						}
						i < 1 || i > Ue(n, o, a) ? w(e)._overflowWeeks = !0 : null != l ? w(e)._overflowWeekday = !0 : (s = ze(n, i, r, o, a), e._a[he] = s.year, e._dayOfYear = s.dayOfYear)
					}(e), null != e._dayOfYear && (o = ct(e._a[he], i[he]), (e._dayOfYear > xe(o) || 0 === e._dayOfYear) && (w(e)._overflowDayOfYear = !0), n = Fe(o, 0, e._dayOfYear), e._a[pe] = n.getUTCMonth(), e._a[me] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = i[t];
				for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
				24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[ye] && 0 === e._a[be] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Fe : function(e, t, n, i, r, o, a) {
					var s = new Date(e, t, n, i, r, o, a);
					return e < 100 && 0 <= e && isFinite(s.getFullYear()) && s.setFullYear(e), s
				}).apply(null, a), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (w(e).weekdayMismatch = !0)
			}
		}
		var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			ht = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			pt = /Z|[+-]\d\d(?::?\d\d)?/,
			mt = [
				["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
				["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
				["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
				["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
				["YYYY-DDD", /\d{4}-\d{3}/],
				["YYYY-MM", /\d{4}-\d\d/, !1],
				["YYYYYYMMDD", /[+-]\d{10}/],
				["YYYYMMDD", /\d{8}/],
				["GGGG[W]WWE", /\d{4}W\d{3}/],
				["GGGG[W]WW", /\d{4}W\d{2}/, !1],
				["YYYYDDD", /\d{7}/]
			],
			gt = [
				["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
				["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
				["HH:mm:ss", /\d\d:\d\d:\d\d/],
				["HH:mm", /\d\d:\d\d/],
				["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
				["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
				["HHmmss", /\d\d\d\d\d\d/],
				["HHmm", /\d\d\d\d/],
				["HH", /\d\d/]
			],
			vt = /^\/?Date\((\-?\d+)/i;

		function yt(e) {
			var t, n, i, r, o, a, s = e._i,
				l = ft.exec(s) || ht.exec(s);
			if (l) {
				for (w(e).iso = !0, t = 0, n = mt.length; t < n; t++)
					if (mt[t][1].exec(l[1])) {
						r = mt[t][0], i = !1 !== mt[t][2];
						break
					} if (null == r) return void(e._isValid = !1);
				if (l[3]) {
					for (t = 0, n = gt.length; t < n; t++)
						if (gt[t][1].exec(l[3])) {
							o = (l[2] || " ") + gt[t][0];
							break
						} if (null == o) return void(e._isValid = !1)
				}
				if (!i && null != o) return void(e._isValid = !1);
				if (l[4]) {
					if (!pt.exec(l[4])) return void(e._isValid = !1);
					a = "Z"
				}
				e._f = r + (o || "") + (a || ""), xt(e)
			} else e._isValid = !1
		}
		var bt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
			wt = {
				UT: 0,
				GMT: 0,
				EDT: -240,
				EST: -300,
				CDT: -300,
				CST: -360,
				MDT: -360,
				MST: -420,
				PDT: -420,
				PST: -480
			};

		function $t(e) {
			var t, n, i, r, o, a, s, l, u, c, d, f = bt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
			if (f) {
				var h = (r = f[4], o = f[3], a = f[2], s = f[5], l = f[6], u = f[7], d = [(c = parseInt(r, 10), c <= 49 ? 2e3 + c : c <= 999 ? 1900 + c : c), Oe.indexOf(o), parseInt(a, 10), parseInt(s, 10), parseInt(l, 10)], u && d.push(parseInt(u, 10)), d);
				if (n = h, i = e, (t = f[1]) && Ve.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (w(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
				e._a = h, e._tzm = function(e, t, n) {
					if (e) return wt[e];
					if (t) return 0;
					var i = parseInt(n, 10),
						r = i % 100;
					return (i - r) / 100 * 60 + r
				}(f[8], f[9], f[10]), e._d = Fe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), w(e).rfc2822 = !0
			} else e._isValid = !1
		}

		function xt(e) {
			if (e._f !== y.ISO_8601)
				if (e._f !== y.RFC_2822) {
					e._a = [], w(e).empty = !0;
					var t, n, i, r, o, a, s, l, u = "" + e._i,
						c = u.length,
						d = 0;
					for (i = V(e._f, e._locale).match(F) || [], t = 0; t < i.length; t++) r = i[t], (n = (u.match((g = r, v = e, b(se, g) ? se[g](v._strict, v._locale) : new RegExp(ue(g.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
						return t || n || i || r
					}))))) || [])[0]) && (0 < (o = u.substr(0, u.indexOf(n))).length && w(e).unusedInput.push(o), u = u.slice(u.indexOf(n) + n.length), d += n.length), H[r] ? (n ? w(e).empty = !1 : w(e).unusedTokens.push(r), a = r, l = e, null != (s = n) && b(ce, a) && ce[a](s, l._a, l, a)) : e._strict && !n && w(e).unusedTokens.push(r);
					w(e).charsLeftOver = c - d, 0 < u.length && w(e).unusedInput.push(u), e._a[ge] <= 12 && !0 === w(e).bigHour && 0 < e._a[ge] && (w(e).bigHour = void 0), w(e).parsedDateParts = e._a.slice(0), w(e).meridiem = e._meridiem, e._a[ge] = (f = e._locale, h = e._a[ge], null == (p = e._meridiem) ? h : null != f.meridiemHour ? f.meridiemHour(h, p) : (null != f.isPM && ((m = f.isPM(p)) && h < 12 && (h += 12), m || 12 !== h || (h = 0)), h)), dt(e), ut(e)
				} else $t(e);
			else yt(e);
			var f, h, p, m, g, v
		}

		function St(e) {
			var t, n, i, r, o = e._i,
				a = e._f;
			return e._locale = e._locale || lt(e._l), null === o || void 0 === a && "" === o ? g({
				nullInput: !0
			}) : ("string" == typeof o && (e._i = o = e._locale.preparse(o)), x(o) ? new $(ut(o)) : (d(o) ? e._d = o : s(a) ? function(e) {
				var t, n, i, r, o;
				if (0 === e._f.length) return w(e).invalidFormat = !0, e._d = new Date(NaN);
				for (r = 0; r < e._f.length; r++) o = 0, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], xt(t), m(t) && (o += w(t).charsLeftOver, o += 10 * w(t).unusedTokens.length, w(t).score = o, (null == i || o < i) && (i = o, n = t));
				h(e, n || t)
			}(e) : a ? xt(e) : u(n = (t = e)._i) ? t._d = new Date(y.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (i = t, null === (r = vt.exec(i._i)) ? (yt(i), !1 === i._isValid && (delete i._isValid, $t(i), !1 === i._isValid && (delete i._isValid, y.createFromInputFallback(i)))) : i._d = new Date(+r[1])) : s(n) ? (t._a = f(n.slice(0), function(e) {
				return parseInt(e, 10)
			}), dt(t)) : l(n) ? function(e) {
				if (!e._d) {
					var t = N(e._i);
					e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
						return e && parseInt(e, 10)
					}), dt(e)
				}
			}(t) : c(n) ? t._d = new Date(n) : y.createFromInputFallback(t), m(e) || (e._d = null), e))
		}

		function Et(e, t, n, i, r) {
			var o, a = {};
			return !0 !== n && !1 !== n || (i = n, n = void 0), (l(e) && function(e) {
				if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
				var t;
				for (t in e)
					if (e.hasOwnProperty(t)) return !1;
				return !0
			}(e) || s(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = n, a._i = e, a._f = t, a._strict = i, (o = new $(ut(St(a))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
		}

		function Ct(e, t, n, i) {
			return Et(e, t, n, i, !1)
		}
		y.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
			e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
		}), y.ISO_8601 = function() {}, y.RFC_2822 = function() {};
		var kt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
				var e = Ct.apply(null, arguments);
				return this.isValid() && e.isValid() ? e < this ? this : e : g()
			}),
			Tt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
				var e = Ct.apply(null, arguments);
				return this.isValid() && e.isValid() ? this < e ? this : e : g()
			});

		function _t(e, t) {
			var n, i;
			if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Ct();
			for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
			return n
		}
		var At = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

		function Pt(e) {
			var t = N(e),
				n = t.year || 0,
				i = t.quarter || 0,
				r = t.month || 0,
				o = t.week || 0,
				a = t.day || 0,
				s = t.hour || 0,
				l = t.minute || 0,
				u = t.second || 0,
				c = t.millisecond || 0;
			this._isValid = function(e) {
				for (var t in e)
					if (-1 === Ee.call(At, t) || null != e[t] && isNaN(e[t])) return !1;
				for (var n = !1, i = 0; i < At.length; ++i)
					if (e[At[i]]) {
						if (n) return !1;
						parseFloat(e[At[i]]) !== E(e[At[i]]) && (n = !0)
					} return !0
			}(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = lt(), this._bubble()
		}

		function Mt(e) {
			return e instanceof Pt
		}

		function Ot(e) {
			return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
		}

		function Dt(e, n) {
			U(e, 0, 0, function() {
				var e = this.utcOffset(),
					t = "+";
				return e < 0 && (e = -e, t = "-"), t + L(~~(e / 60), 2) + n + L(~~e % 60, 2)
			})
		}
		Dt("Z", ":"), Dt("ZZ", ""), le("Z", oe), le("ZZ", oe), de(["Z", "ZZ"], function(e, t, n) {
			n._useUTC = !0, n._tzm = jt(oe, e)
		});
		var Nt = /([\+\-]|\d\d)/gi;

		function jt(e, t) {
			var n = (t || "").match(e);
			if (null === n) return null;
			var i = ((n[n.length - 1] || []) + "").match(Nt) || ["-", 0, 0],
				r = 60 * i[1] + E(i[2]);
			return 0 === r ? 0 : "+" === i[0] ? r : -r
		}

		function It(e, t) {
			var n, i;
			return t._isUTC ? (n = t.clone(), i = (x(e) || d(e) ? e.valueOf() : Ct(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), y.updateOffset(n, !1), n) : Ct(e).local()
		}

		function Lt(e) {
			return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
		}

		function Ft() {
			return !!this.isValid() && this._isUTC && 0 === this._offset
		}
		y.updateOffset = function() {};
		var Rt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
			zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		function Ht(e, t) {
			var n, i, r, o, a, s, l = e,
				u = null;
			return Mt(e) ? l = {
				ms: e._milliseconds,
				d: e._days,
				M: e._months
			} : c(e) ? (l = {}, t ? l[t] = e : l.milliseconds = e) : (u = Rt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, l = {
				y: 0,
				d: E(u[me]) * n,
				h: E(u[ge]) * n,
				m: E(u[ve]) * n,
				s: E(u[ye]) * n,
				ms: E(Ot(1e3 * u[be])) * n
			}) : (u = zt.exec(e)) ? (n = "-" === u[1] ? -1 : (u[1], 1), l = {
				y: Ut(u[2], n),
				M: Ut(u[3], n),
				w: Ut(u[4], n),
				d: Ut(u[5], n),
				h: Ut(u[6], n),
				m: Ut(u[7], n),
				s: Ut(u[8], n)
			}) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (o = Ct(l.from), a = Ct(l.to), r = o.isValid() && a.isValid() ? (a = It(a, o), o.isBefore(a) ? s = qt(o, a) : ((s = qt(a, o)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
				milliseconds: 0,
				months: 0
			}, (l = {}).ms = r.milliseconds, l.M = r.months), i = new Pt(l), Mt(e) && b(e, "_locale") && (i._locale = e._locale), i
		}

		function Ut(e, t) {
			var n = e && parseFloat(e.replace(",", "."));
			return (isNaN(n) ? 0 : n) * t
		}

		function qt(e, t) {
			var n = {
				milliseconds: 0,
				months: 0
			};
			return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
		}

		function Vt(i, r) {
			return function(e, t) {
				var n;
				return null === t || isNaN(+t) || (T(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Bt(this, Ht(e = "string" == typeof e ? +e : e, t), i), this
			}
		}

		function Bt(e, t, n, i) {
			var r = t._milliseconds,
				o = Ot(t._days),
				a = Ot(t._months);
			e.isValid() && (i = null == i || i, a && De(e, Te(e, "Month") + a * n), o && _e(e, "Date", Te(e, "Date") + o * n), r && e._d.setTime(e._d.valueOf() + r * n), i && y.updateOffset(e, o || a))
		}
		Ht.fn = Pt.prototype, Ht.invalid = function() {
			return Ht(NaN)
		};
		var Wt = Vt(1, "add"),
			Yt = Vt(-1, "subtract");

		function Gt(e, t) {
			var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
				i = e.clone().add(n, "months");
			return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0
		}

		function Xt(e) {
			var t;
			return void 0 === e ? this._locale._abbr : (null != (t = lt(e)) && (this._locale = t), this)
		}
		y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
		var Zt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
			return void 0 === e ? this.localeData() : this.locale(e)
		});

		function Kt() {
			return this._locale
		}

		function Jt(e, t) {
			U(0, [e, e.length], 0, t)
		}

		function Qt(e, t, n, i, r) {
			var o;
			return null == e ? He(this, i, r).year : ((o = Ue(e, i, r)) < t && (t = o), function(e, t, n, i, r) {
				var o = ze(e, t, n, i, r),
					a = Fe(o.year, 0, o.dayOfYear);
				return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
			}.call(this, e, t, n, i, r))
		}
		U(0, ["gg", 2], 0, function() {
			return this.weekYear() % 100
		}), U(0, ["GG", 2], 0, function() {
			return this.isoWeekYear() % 100
		}), Jt("gggg", "weekYear"), Jt("ggggg", "weekYear"), Jt("GGGG", "isoWeekYear"), Jt("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", Z, W), le("gg", Z, W), le("GGGG", ee, G), le("gggg", ee, G), le("GGGGG", te, X), le("ggggg", te, X), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
			t[i.substr(0, 2)] = E(e)
		}), fe(["gg", "GG"], function(e, t, n, i) {
			t[i] = y.parseTwoDigitYear(e)
		}), U("Q", 0, "Qo", "quarter"), O("quarter", "Q"), I("quarter", 7), le("Q", B), de("Q", function(e, t) {
			t[pe] = 3 * (E(e) - 1)
		}), U("D", ["DD", 2], "Do", "date"), O("date", "D"), I("date", 9), le("D", Z), le("DD", Z, W), le("Do", function(e, t) {
			return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
		}), de(["D", "DD"], me), de("Do", function(e, t) {
			t[me] = E(e.match(Z)[0])
		});
		var en = ke("Date", !0);
		U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), I("dayOfYear", 4), le("DDD", Q), le("DDDD", Y), de(["DDD", "DDDD"], function(e, t, n) {
			n._dayOfYear = E(e)
		}), U("m", ["mm", 2], 0, "minute"), O("minute", "m"), I("minute", 14), le("m", Z), le("mm", Z, W), de(["m", "mm"], ve);
		var tn = ke("Minutes", !1);
		U("s", ["ss", 2], 0, "second"), O("second", "s"), I("second", 15), le("s", Z), le("ss", Z, W), de(["s", "ss"], ye);
		var nn, rn = ke("Seconds", !1);
		for (U("S", 0, 0, function() {
				return ~~(this.millisecond() / 100)
			}), U(0, ["SS", 2], 0, function() {
				return ~~(this.millisecond() / 10)
			}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
				return 10 * this.millisecond()
			}), U(0, ["SSSSS", 5], 0, function() {
				return 100 * this.millisecond()
			}), U(0, ["SSSSSS", 6], 0, function() {
				return 1e3 * this.millisecond()
			}), U(0, ["SSSSSSS", 7], 0, function() {
				return 1e4 * this.millisecond()
			}), U(0, ["SSSSSSSS", 8], 0, function() {
				return 1e5 * this.millisecond()
			}), U(0, ["SSSSSSSSS", 9], 0, function() {
				return 1e6 * this.millisecond()
			}), O("millisecond", "ms"), I("millisecond", 16), le("S", Q, B), le("SS", Q, W), le("SSS", Q, Y), nn = "SSSS"; nn.length <= 9; nn += "S") le(nn, ne);

		function on(e, t) {
			t[be] = E(1e3 * ("0." + e))
		}
		for (nn = "S"; nn.length <= 9; nn += "S") de(nn, on);
		var an = ke("Milliseconds", !1);
		U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
		var sn = $.prototype;

		function ln(e) {
			return e
		}
		sn.add = Wt, sn.calendar = function(e, t) {
			var n = e || Ct(),
				i = It(n, this).startOf("day"),
				r = y.calendarFormat(this, i) || "sameElse",
				o = t && (_(t[r]) ? t[r].call(this, n) : t[r]);
			return this.format(o || this.localeData().calendar(r, this, Ct(n)))
		}, sn.clone = function() {
			return new $(this)
		}, sn.diff = function(e, t, n) {
			var i, r, o;
			if (!this.isValid()) return NaN;
			if (!(i = It(e, this)).isValid()) return NaN;
			switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = D(t)) {
				case "year":
					o = Gt(this, i) / 12;
					break;
				case "month":
					o = Gt(this, i);
					break;
				case "quarter":
					o = Gt(this, i) / 3;
					break;
				case "second":
					o = (this - i) / 1e3;
					break;
				case "minute":
					o = (this - i) / 6e4;
					break;
				case "hour":
					o = (this - i) / 36e5;
					break;
				case "day":
					o = (this - i - r) / 864e5;
					break;
				case "week":
					o = (this - i - r) / 6048e5;
					break;
				default:
					o = this - i
			}
			return n ? o : S(o)
		}, sn.endOf = function(e) {
			return void 0 === (e = D(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
		}, sn.format = function(e) {
			e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
			var t = q(this, e);
			return this.localeData().postformat(t)
		}, sn.from = function(e, t) {
			return this.isValid() && (x(e) && e.isValid() || Ct(e).isValid()) ? Ht({
				to: this,
				from: e
			}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
		}, sn.fromNow = function(e) {
			return this.from(Ct(), e)
		}, sn.to = function(e, t) {
			return this.isValid() && (x(e) && e.isValid() || Ct(e).isValid()) ? Ht({
				from: this,
				to: e
			}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
		}, sn.toNow = function(e) {
			return this.to(Ct(), e)
		}, sn.get = function(e) {
			return _(this[e = D(e)]) ? this[e]() : this
		}, sn.invalidAt = function() {
			return w(this).overflow
		}, sn.isAfter = function(e, t) {
			var n = x(e) ? e : Ct(e);
			return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = D(u(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
		}, sn.isBefore = function(e, t) {
			var n = x(e) ? e : Ct(e);
			return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = D(u(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
		}, sn.isBetween = function(e, t, n, i) {
			return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
		}, sn.isSame = function(e, t) {
			var n, i = x(e) ? e : Ct(e);
			return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = D(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
		}, sn.isSameOrAfter = function(e, t) {
			return this.isSame(e, t) || this.isAfter(e, t)
		}, sn.isSameOrBefore = function(e, t) {
			return this.isSame(e, t) || this.isBefore(e, t)
		}, sn.isValid = function() {
			return m(this)
		}, sn.lang = Zt, sn.locale = Xt, sn.localeData = Kt, sn.max = Tt, sn.min = kt, sn.parsingFlags = function() {
			return h({}, w(this))
		}, sn.set = function(e, t) {
			if ("object" == typeof e)
				for (var n = function(e) {
						var t = [];
						for (var n in e) t.push({
							unit: n,
							priority: j[n]
						});
						return t.sort(function(e, t) {
							return e.priority - t.priority
						}), t
					}(e = N(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
			else if (_(this[e = D(e)])) return this[e](t);
			return this
		}, sn.startOf = function(e) {
			switch (e = D(e)) {
				case "year":
					this.month(0);
				case "quarter":
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
				case "date":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0)
			}
			return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
		}, sn.subtract = Yt, sn.toArray = function() {
			return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
		}, sn.toObject = function() {
			return {
				years: this.year(),
				months: this.month(),
				date: this.date(),
				hours: this.hours(),
				minutes: this.minutes(),
				seconds: this.seconds(),
				milliseconds: this.milliseconds()
			}
		}, sn.toDate = function() {
			return new Date(this.valueOf())
		}, sn.toISOString = function(e) {
			if (!this.isValid()) return null;
			var t = !0 !== e,
				n = t ? this.clone().utc() : this;
			return n.year() < 0 || 9999 < n.year() ? q(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : _(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", q(n, "Z")) : q(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
		}, sn.inspect = function() {
			if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
			var e = "moment",
				t = "";
			this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
			var n = "[" + e + '("]',
				i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
				r = t + '[")]';
			return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
		}, sn.toJSON = function() {
			return this.isValid() ? this.toISOString() : null
		}, sn.toString = function() {
			return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		}, sn.unix = function() {
			return Math.floor(this.valueOf() / 1e3)
		}, sn.valueOf = function() {
			return this._d.valueOf() - 6e4 * (this._offset || 0)
		}, sn.creationData = function() {
			return {
				input: this._i,
				format: this._f,
				locale: this._locale,
				isUTC: this._isUTC,
				strict: this._strict
			}
		}, sn.year = Ce, sn.isLeapYear = function() {
			return Se(this.year())
		}, sn.weekYear = function(e) {
			return Qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
		}, sn.isoWeekYear = function(e) {
			return Qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
		}, sn.quarter = sn.quarters = function(e) {
			return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
		}, sn.month = Ne, sn.daysInMonth = function() {
			return Ae(this.year(), this.month())
		}, sn.week = sn.weeks = function(e) {
			var t = this.localeData().week(this);
			return null == e ? t : this.add(7 * (e - t), "d")
		}, sn.isoWeek = sn.isoWeeks = function(e) {
			var t = He(this, 1, 4).week;
			return null == e ? t : this.add(7 * (e - t), "d")
		}, sn.weeksInYear = function() {
			var e = this.localeData()._week;
			return Ue(this.year(), e.dow, e.doy)
		}, sn.isoWeeksInYear = function() {
			return Ue(this.year(), 1, 4)
		}, sn.date = en, sn.day = sn.days = function(e) {
			if (!this.isValid()) return null != e ? this : NaN;
			var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i
		}, sn.weekday = function(e) {
			if (!this.isValid()) return null != e ? this : NaN;
			var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
			return null == e ? t : this.add(e - t, "d")
		}, sn.isoWeekday = function(e) {
			if (!this.isValid()) return null != e ? this : NaN;
			if (null == e) return this.day() || 7;
			var t, n, i = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
			return this.day(this.day() % 7 ? i : i - 7)
		}, sn.dayOfYear = function(e) {
			var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
			return null == e ? t : this.add(e - t, "d")
		}, sn.hour = sn.hours = et, sn.minute = sn.minutes = tn, sn.second = sn.seconds = rn, sn.millisecond = sn.milliseconds = an, sn.utcOffset = function(e, t, n) {
			var i, r = this._offset || 0;
			if (!this.isValid()) return null != e ? this : NaN;
			if (null == e) return this._isUTC ? r : Lt(this);
			if ("string" == typeof e) {
				if (null === (e = jt(oe, e))) return this
			} else Math.abs(e) < 16 && !n && (e *= 60);
			return !this._isUTC && t && (i = Lt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Bt(this, Ht(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this
		}, sn.utc = function(e) {
			return this.utcOffset(0, e)
		}, sn.local = function(e) {
			return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Lt(this), "m")), this
		}, sn.parseZone = function() {
			if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
			else if ("string" == typeof this._i) {
				var e = jt(re, this._i);
				null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
			}
			return this
		}, sn.hasAlignedHourOffset = function(e) {
			return !!this.isValid() && (e = e ? Ct(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
		}, sn.isDST = function() {
			return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
		}, sn.isLocal = function() {
			return !!this.isValid() && !this._isUTC
		}, sn.isUtcOffset = function() {
			return !!this.isValid() && this._isUTC
		}, sn.isUtc = Ft, sn.isUTC = Ft, sn.zoneAbbr = function() {
			return this._isUTC ? "UTC" : ""
		}, sn.zoneName = function() {
			return this._isUTC ? "Coordinated Universal Time" : ""
		}, sn.dates = n("dates accessor is deprecated. Use date instead.", en), sn.months = n("months accessor is deprecated. Use month instead", Ne), sn.years = n("years accessor is deprecated. Use year instead", Ce), sn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
			return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
		}), sn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
			if (!u(this._isDSTShifted)) return this._isDSTShifted;
			var e = {};
			if (v(e, this), (e = St(e))._a) {
				var t = e._isUTC ? p(e._a) : Ct(e._a);
				this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
			} else this._isDSTShifted = !1;
			return this._isDSTShifted
		});
		var un = P.prototype;

		function cn(e, t, n, i) {
			var r = lt(),
				o = p().set(i, t);
			return r[n](o, e)
		}

		function dn(e, t, n) {
			if (c(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month");
			var i, r = [];
			for (i = 0; i < 12; i++) r[i] = cn(e, i, n, "month");
			return r
		}

		function fn(e, t, n, i) {
			"boolean" == typeof e ? c(t) && (n = t, t = void 0) : (t = e, e = !1, c(n = t) && (n = t, t = void 0)), t = t || "";
			var r, o = lt(),
				a = e ? o._week.dow : 0;
			if (null != n) return cn(t, (n + a) % 7, i, "day");
			var s = [];
			for (r = 0; r < 7; r++) s[r] = cn(t, (r + a) % 7, i, "day");
			return s
		}
		un.calendar = function(e, t, n) {
			var i = this._calendar[e] || this._calendar.sameElse;
			return _(i) ? i.call(t, n) : i
		}, un.longDateFormat = function(e) {
			var t = this._longDateFormat[e],
				n = this._longDateFormat[e.toUpperCase()];
			return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
				return e.slice(1)
			}), this._longDateFormat[e])
		}, un.invalidDate = function() {
			return this._invalidDate
		}, un.ordinal = function(e) {
			return this._ordinal.replace("%d", e)
		}, un.preparse = ln, un.postformat = ln, un.relativeTime = function(e, t, n, i) {
			var r = this._relativeTime[n];
			return _(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
		}, un.pastFuture = function(e, t) {
			var n = this._relativeTime[0 < e ? "future" : "past"];
			return _(n) ? n(t) : n.replace(/%s/i, t)
		}, un.set = function(e) {
			var t, n;
			for (n in e) _(t = e[n]) ? this[n] = t : this["_" + n] = t;
			this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
		}, un.months = function(e, t) {
			return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
		}, un.monthsShort = function(e, t) {
			return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
		}, un.monthsParse = function(e, t, n) {
			var i, r, o;
			if (this._monthsParseExact) return function(e, t, n) {
				var i, r, o, a = e.toLocaleLowerCase();
				if (!this._monthsParse)
					for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = p([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
				return n ? "MMM" === t ? -1 !== (r = Ee.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = Ee.call(this._longMonthsParse, a)) ? r : null : "MMM" === t ? -1 !== (r = Ee.call(this._shortMonthsParse, a)) ? r : -1 !== (r = Ee.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = Ee.call(this._longMonthsParse, a)) ? r : -1 !== (r = Ee.call(this._shortMonthsParse, a)) ? r : null
			}.call(this, e, t, n);
			for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
				if (r = p([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
				if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
				if (!n && this._monthsParse[i].test(e)) return i
			}
		}, un.monthsRegex = function(e) {
			return this._monthsParseExact ? (b(this, "_monthsRegex") || Le.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = Ie), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
		}, un.monthsShortRegex = function(e) {
			return this._monthsParseExact ? (b(this, "_monthsRegex") || Le.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
		}, un.week = function(e) {
			return He(e, this._week.dow, this._week.doy).week
		}, un.firstDayOfYear = function() {
			return this._week.doy
		}, un.firstDayOfWeek = function() {
			return this._week.dow
		}, un.weekdays = function(e, t) {
			return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone
		}, un.weekdaysMin = function(e) {
			return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
		}, un.weekdaysShort = function(e) {
			return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
		}, un.weekdaysParse = function(e, t, n) {
			var i, r, o;
			if (this._weekdaysParseExact) return function(e, t, n) {
				var i, r, o, a = e.toLocaleLowerCase();
				if (!this._weekdaysParse)
					for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = p([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
				return n ? "dddd" === t ? -1 !== (r = Ee.call(this._weekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = Ee.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = Ee.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === t ? -1 !== (r = Ee.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = Ee.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = Ee.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ee.call(this._shortWeekdaysParse, a)) ? r : null
			}.call(this, e, t, n);
			for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
				if (r = p([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
				if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
				if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
				if (!n && this._weekdaysParse[i].test(e)) return i
			}
		}, un.weekdaysRegex = function(e) {
			return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = We), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
		}, un.weekdaysShortRegex = function(e) {
			return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ye), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
		}, un.weekdaysMinRegex = function(e) {
			return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ge), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
		}, un.isPM = function(e) {
			return "p" === (e + "").toLowerCase().charAt(0)
		}, un.meridiem = function(e, t, n) {
			return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
		}, at("en", {
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 === E(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			}
		}), y.lang = n("moment.lang is deprecated. Use moment.locale instead.", at), y.langData = n("moment.langData is deprecated. Use moment.localeData instead.", lt);
		var hn = Math.abs;

		function pn(e, t, n, i) {
			var r = Ht(t, n);
			return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
		}

		function mn(e) {
			return e < 0 ? Math.floor(e) : Math.ceil(e)
		}

		function gn(e) {
			return 4800 * e / 146097
		}

		function vn(e) {
			return 146097 * e / 4800
		}

		function yn(e) {
			return function() {
				return this.as(e)
			}
		}
		var bn = yn("ms"),
			wn = yn("s"),
			$n = yn("m"),
			xn = yn("h"),
			Sn = yn("d"),
			En = yn("w"),
			Cn = yn("M"),
			kn = yn("y");

		function Tn(e) {
			return function() {
				return this.isValid() ? this._data[e] : NaN
			}
		}
		var _n = Tn("milliseconds"),
			An = Tn("seconds"),
			Pn = Tn("minutes"),
			Mn = Tn("hours"),
			On = Tn("days"),
			Dn = Tn("months"),
			Nn = Tn("years"),
			jn = Math.round,
			In = {
				ss: 44,
				s: 45,
				m: 45,
				h: 22,
				d: 26,
				M: 11
			},
			Ln = Math.abs;

		function Fn(e) {
			return (0 < e) - (e < 0) || +e
		}

		function Rn() {
			if (!this.isValid()) return this.localeData().invalidDate();
			var e, t, n = Ln(this._milliseconds) / 1e3,
				i = Ln(this._days),
				r = Ln(this._months);
			t = S((e = S(n / 60)) / 60), n %= 60, e %= 60;
			var o = S(r / 12),
				a = r %= 12,
				s = i,
				l = t,
				u = e,
				c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
				d = this.asSeconds();
			if (!d) return "P0D";
			var f = d < 0 ? "-" : "",
				h = Fn(this._months) !== Fn(d) ? "-" : "",
				p = Fn(this._days) !== Fn(d) ? "-" : "",
				m = Fn(this._milliseconds) !== Fn(d) ? "-" : "";
			return f + "P" + (o ? h + o + "Y" : "") + (a ? h + a + "M" : "") + (s ? p + s + "D" : "") + (l || u || c ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (c ? m + c + "S" : "")
		}
		var zn = Pt.prototype;
		return zn.isValid = function() {
			return this._isValid
		}, zn.abs = function() {
			var e = this._data;
			return this._milliseconds = hn(this._milliseconds), this._days = hn(this._days), this._months = hn(this._months), e.milliseconds = hn(e.milliseconds), e.seconds = hn(e.seconds), e.minutes = hn(e.minutes), e.hours = hn(e.hours), e.months = hn(e.months), e.years = hn(e.years), this
		}, zn.add = function(e, t) {
			return pn(this, e, t, 1)
		}, zn.subtract = function(e, t) {
			return pn(this, e, t, -1)
		}, zn.as = function(e) {
			if (!this.isValid()) return NaN;
			var t, n, i = this._milliseconds;
			if ("month" === (e = D(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + gn(t), "month" === e ? n : n / 12;
			switch (t = this._days + Math.round(vn(this._months)), e) {
				case "week":
					return t / 7 + i / 6048e5;
				case "day":
					return t + i / 864e5;
				case "hour":
					return 24 * t + i / 36e5;
				case "minute":
					return 1440 * t + i / 6e4;
				case "second":
					return 86400 * t + i / 1e3;
				case "millisecond":
					return Math.floor(864e5 * t) + i;
				default:
					throw new Error("Unknown unit " + e)
			}
		}, zn.asMilliseconds = bn, zn.asSeconds = wn, zn.asMinutes = $n, zn.asHours = xn, zn.asDays = Sn, zn.asWeeks = En, zn.asMonths = Cn, zn.asYears = kn, zn.valueOf = function() {
			return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * E(this._months / 12) : NaN
		}, zn._bubble = function() {
			var e, t, n, i, r, o = this._milliseconds,
				a = this._days,
				s = this._months,
				l = this._data;
			return 0 <= o && 0 <= a && 0 <= s || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * mn(vn(s) + a), s = a = 0), l.milliseconds = o % 1e3, e = S(o / 1e3), l.seconds = e % 60, t = S(e / 60), l.minutes = t % 60, n = S(t / 60), l.hours = n % 24, s += r = S(gn(a += S(n / 24))), a -= mn(vn(r)), i = S(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
		}, zn.clone = function() {
			return Ht(this)
		}, zn.get = function(e) {
			return e = D(e), this.isValid() ? this[e + "s"]() : NaN
		}, zn.milliseconds = _n, zn.seconds = An, zn.minutes = Pn, zn.hours = Mn, zn.days = On, zn.weeks = function() {
			return S(this.days() / 7)
		}, zn.months = Dn, zn.years = Nn, zn.humanize = function(e) {
			if (!this.isValid()) return this.localeData().invalidDate();
			var t, n, i, r, o, a, s, l, u, c, d = this.localeData(),
				f = (t = !e, n = d, i = Ht(this).abs(), r = jn(i.as("s")), o = jn(i.as("m")), a = jn(i.as("h")), s = jn(i.as("d")), l = jn(i.as("M")), u = jn(i.as("y")), (c = r <= In.ss && ["s", r] || r < In.s && ["ss", r] || o <= 1 && ["m"] || o < In.m && ["mm", o] || a <= 1 && ["h"] || a < In.h && ["hh", a] || s <= 1 && ["d"] || s < In.d && ["dd", s] || l <= 1 && ["M"] || l < In.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u])[2] = t, c[3] = 0 < +this, c[4] = n, function(e, t, n, i, r) {
					return r.relativeTime(t || 1, !!n, e, i)
				}.apply(null, c));
			return e && (f = d.pastFuture(+this, f)), d.postformat(f)
		}, zn.toISOString = Rn, zn.toString = Rn, zn.toJSON = Rn, zn.locale = Xt, zn.localeData = Kt, zn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Rn), zn.lang = Zt, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), de("X", function(e, t, n) {
			n._d = new Date(1e3 * parseFloat(e, 10))
		}), de("x", function(e, t, n) {
			n._d = new Date(E(e))
		}), y.version = "2.20.1", e = Ct, y.fn = sn, y.min = function() {
			return _t("isBefore", [].slice.call(arguments, 0))
		}, y.max = function() {
			return _t("isAfter", [].slice.call(arguments, 0))
		}, y.now = function() {
			return Date.now ? Date.now() : +new Date
		}, y.utc = p, y.unix = function(e) {
			return Ct(1e3 * e)
		}, y.months = function(e, t) {
			return dn(e, t, "months")
		}, y.isDate = d, y.locale = at, y.invalid = g, y.duration = Ht, y.isMoment = x, y.weekdays = function(e, t, n) {
			return fn(e, t, n, "weekdays")
		}, y.parseZone = function() {
			return Ct.apply(null, arguments).parseZone()
		}, y.localeData = lt, y.isDuration = Mt, y.monthsShort = function(e, t) {
			return dn(e, t, "monthsShort")
		}, y.weekdaysMin = function(e, t, n) {
			return fn(e, t, n, "weekdaysMin")
		}, y.defineLocale = st, y.updateLocale = function(e, t) {
			if (null != t) {
				var n, i, r = tt;
				null != (i = ot(e)) && (r = i._config), (n = new P(t = A(r, t))).parentLocale = nt[e], nt[e] = n, at(e)
			} else null != nt[e] && (null != nt[e].parentLocale ? nt[e] = nt[e].parentLocale : null != nt[e] && delete nt[e]);
			return nt[e]
		}, y.locales = function() {
			return i(nt)
		}, y.weekdaysShort = function(e, t, n) {
			return fn(e, t, n, "weekdaysShort")
		}, y.normalizeUnits = D, y.relativeTimeRounding = function(e) {
			return void 0 === e ? jn : "function" == typeof e && (jn = e, !0)
		}, y.relativeTimeThreshold = function(e, t) {
			return void 0 !== In[e] && (void 0 === t ? In[e] : (In[e] = t, "s" === e && (In.ss = t - 1), !0))
		}, y.calendarFormat = function(e, t) {
			var n = e.diff(t, "days", !0);
			return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
		}, y.prototype = sn, y.HTML5_FMT = {
			DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
			DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
			DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
			DATE: "YYYY-MM-DD",
			TIME: "HH:mm",
			TIME_SECONDS: "HH:mm:ss",
			TIME_MS: "HH:mm:ss.SSS",
			WEEK: "YYYY-[W]WW",
			MONTH: "YYYY-MM"
		}, y
	});
var app, timerModule = angular.module("timer", []).directive("timer", ["$compile", function(d) {
	return {
		restrict: "EA",
		replace: !1,
		scope: {
			interval: "=interval",
			startTimeAttr: "=startTime",
			endTimeAttr: "=endTime",
			countdownattr: "=countdown",
			finishCallback: "&finishCallback",
			autoStart: "&autoStart",
			language: "@?",
			fallback: "@?",
			maxTimeUnit: "=",
			seconds: "=?",
			minutes: "=?",
			hours: "=?",
			days: "=?",
			months: "=?",
			years: "=?",
			secondsS: "=?",
			minutesS: "=?",
			hoursS: "=?",
			daysS: "=?",
			monthsS: "=?",
			yearsS: "=?"
		},
		controller: ["$scope", "$element", "$attrs", "$timeout", "I18nService", "$interpolate", "progressBarService", function(i, r, t, n, e, o, a) {
			function s() {
				i.timeoutId && clearTimeout(i.timeoutId)
			}

			function l() {
				var e;
				void 0 !== t.startTime && (i.millis = moment().diff(moment(i.startTimeAttr))), e = u.getTimeUnits(i.millis), i.maxTimeUnit && "day" !== i.maxTimeUnit ? "second" === i.maxTimeUnit ? (i.seconds = Math.floor(i.millis / 1e3), i.minutes = 0, i.hours = 0, i.days = 0, i.months = 0, i.years = 0) : "minute" === i.maxTimeUnit ? (i.seconds = Math.floor(i.millis / 1e3 % 60), i.minutes = Math.floor(i.millis / 6e4), i.hours = 0, i.days = 0, i.months = 0, i.years = 0) : "hour" === i.maxTimeUnit ? (i.seconds = Math.floor(i.millis / 1e3 % 60), i.minutes = Math.floor(i.millis / 6e4 % 60), i.hours = Math.floor(i.millis / 36e5), i.days = 0, i.months = 0, i.years = 0) : "month" === i.maxTimeUnit ? (i.seconds = Math.floor(i.millis / 1e3 % 60), i.minutes = Math.floor(i.millis / 6e4 % 60), i.hours = Math.floor(i.millis / 36e5 % 24), i.days = Math.floor(i.millis / 36e5 / 24 % 30), i.months = Math.floor(i.millis / 36e5 / 24 / 30), i.years = 0) : "year" === i.maxTimeUnit && (i.seconds = Math.floor(i.millis / 1e3 % 60), i.minutes = Math.floor(i.millis / 6e4 % 60), i.hours = Math.floor(i.millis / 36e5 % 24), i.days = Math.floor(i.millis / 36e5 / 24 % 30), i.months = Math.floor(i.millis / 36e5 / 24 / 30 % 12), i.years = Math.floor(i.millis / 36e5 / 24 / 365)) : (i.seconds = Math.floor(i.millis / 1e3 % 60), i.minutes = Math.floor(i.millis / 6e4 % 60), i.hours = Math.floor(i.millis / 36e5 % 24), i.days = Math.floor(i.millis / 36e5 / 24), i.months = 0, i.years = 0), i.secondsS = 1 === i.seconds ? "" : "s", i.minutesS = 1 === i.minutes ? "" : "s", i.hoursS = 1 === i.hours ? "" : "s", i.daysS = 1 === i.days ? "" : "s", i.monthsS = 1 === i.months ? "" : "s", i.yearsS = 1 === i.years ? "" : "s", i.secondUnit = e.seconds, i.minuteUnit = e.minutes, i.hourUnit = e.hours, i.dayUnit = e.days, i.monthUnit = e.months, i.yearUnit = e.years, i.sseconds = i.seconds < 10 ? "0" + i.seconds : i.seconds, i.mminutes = i.minutes < 10 ? "0" + i.minutes : i.minutes, i.hhours = i.hours < 10 ? "0" + i.hours : i.hours, i.ddays = i.days < 10 ? "0" + i.days : i.days, i.mmonths = i.months < 10 ? "0" + i.months : i.months, i.yyears = i.years < 10 ? "0" + i.years : i.years
			}
			"function" != typeof String.prototype.trim && (String.prototype.trim = function() {
				return this.replace(/^\s+|\s+$/g, "")
			}), i.autoStart = t.autoStart || t.autostart, i.language = i.language || "en", i.fallback = i.fallback || "en", i.$watch("language", function(e) {
				void 0 !== e && u.init(e, i.fallback)
			});
			var u = new e;
			u.init(i.language, i.fallback), i.displayProgressBar = 0, i.displayProgressActive = "active", r.append(0 === r.html().trim().length ? d("<span>" + o.startSymbol() + "millis" + o.endSymbol() + "</span>")(i) : d(r.contents())(i)), i.startTime = null, i.endTime = null, i.timeoutId = null, i.countdown = angular.isNumber(i.countdownattr) && 0 <= parseInt(i.countdownattr, 10) ? parseInt(i.countdownattr, 10) : void 0, i.isRunning = !1, i.$on("timer-start", function() {
				i.start()
			}), i.$on("timer-resume", function() {
				i.resume()
			}), i.$on("timer-stop", function() {
				i.stop()
			}), i.$on("timer-clear", function() {
				i.clear()
			}), i.$on("timer-reset", function() {
				i.reset()
			}), i.$on("timer-set-countdown", function(e, t) {
				i.countdown = t
			}), i.$watch("startTimeAttr", function(e, t) {
				e !== t && i.isRunning && i.start()
			}), i.$watch("endTimeAttr", function(e, t) {
				e !== t && i.isRunning && i.start()
			}), i.start = r[0].start = function() {
				i.startTime = i.startTimeAttr ? moment(i.startTimeAttr) : moment(), i.endTime = i.endTimeAttr ? moment(i.endTimeAttr) : null, angular.isNumber(i.countdown) || (i.countdown = angular.isNumber(i.countdownattr) && 0 < parseInt(i.countdownattr, 10) ? parseInt(i.countdownattr, 10) : void 0), s(), c(), i.isRunning = !0
			}, i.resume = r[0].resume = function() {
				s(), i.countdownattr && (i.countdown += 1), i.startTime = moment().diff(moment(i.stoppedTime).diff(moment(i.startTime))), c(), i.isRunning = !0
			}, i.stop = i.pause = r[0].stop = r[0].pause = function() {
				var e = i.timeoutId;
				i.clear(), i.$emit("timer-stopped", {
					timeoutId: e,
					millis: i.millis,
					seconds: i.seconds,
					minutes: i.minutes,
					hours: i.hours,
					days: i.days
				})
			}, i.clear = r[0].clear = function() {
				i.stoppedTime = moment(), s(), i.timeoutId = null, i.isRunning = !1
			}, i.reset = r[0].reset = function() {
				i.startTime = i.startTimeAttr ? moment(i.startTimeAttr) : moment(), i.endTime = i.endTimeAttr ? moment(i.endTimeAttr) : null, i.countdown = angular.isNumber(i.countdownattr) && 0 < parseInt(i.countdownattr, 10) ? parseInt(i.countdownattr, 10) : void 0, s(), c(), i.isRunning = !1, i.clear()
			}, r.bind("$destroy", function() {
				s(), i.isRunning = !1
			}), i.countdownattr ? (i.millis = 1e3 * i.countdownattr, i.addCDSeconds = r[0].addCDSeconds = function(e) {
				i.countdown += e, i.$digest(), i.isRunning || i.start()
			}, i.$on("timer-add-cd-seconds", function(e, t) {
				n(function() {
					i.addCDSeconds(t)
				})
			}), i.$on("timer-set-countdown-seconds", function(e, t) {
				i.isRunning || i.clear(), i.countdown = t, i.millis = 1e3 * t, l()
			})) : i.millis = 0, l();
			var c = function e() {
				var t = null;
				i.millis = moment().diff(i.startTime);
				var n = i.millis % 1e3;
				return i.endTimeAttr && (t = i.endTimeAttr, i.millis = moment(i.endTime).diff(moment()), n = i.interval - i.millis % 1e3), i.countdownattr && (t = i.countdownattr, i.millis = 1e3 * i.countdown), i.millis < 0 ? (i.stop(), i.millis = 0, l(), void(i.finishCallback && i.$eval(i.finishCallback))) : (l(), i.timeoutId = setTimeout(function() {
					e(), i.$digest()
				}, i.interval - n), i.$emit("timer-tick", {
					timeoutId: i.timeoutId,
					millis: i.millis,
					timerElement: r[0]
				}), 0 < i.countdown ? i.countdown-- : i.countdown <= 0 && (i.stop(), i.finishCallback && i.$eval(i.finishCallback)), void(null !== t && (i.progressBar = a.calculateProgressBar(i.startTime, i.millis, i.endTime, i.countdownattr), 100 === i.progressBar && (i.displayProgressActive = ""))))
			};
			(void 0 === i.autoStart || !0 === i.autoStart) && i.start()
		}]
	}
}]);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = timerModule), (app = angular.module("timer")).factory("I18nService", function() {
		var e = function() {};
		return e.prototype.language = "en", e.prototype.fallback = "en", e.prototype.timeHumanizer = {}, e.prototype.init = function(e, t) {
			var n = humanizeDuration.getSupportedLanguages();
			this.fallback = void 0 !== t ? t : "en", -1 === n.indexOf(t) && (this.fallback = "en"), this.language = e, -1 === n.indexOf(e) && (this.language = this.fallback), moment.locale(this.language), this.timeHumanizer = humanizeDuration.humanizer({
				language: this.language,
				halfUnit: !1
			})
		}, e.prototype.getTimeUnits = function(e) {
			var t = 1e3 * Math.round(e / 1e3),
				n = {};
			return void 0 !== this.timeHumanizer ? n = {
				millis: this.timeHumanizer(t, {
					units: ["milliseconds"]
				}),
				seconds: this.timeHumanizer(t, {
					units: ["seconds"]
				}),
				minutes: this.timeHumanizer(t, {
					units: ["minutes", "seconds"]
				}),
				hours: this.timeHumanizer(t, {
					units: ["hours", "minutes", "seconds"]
				}),
				days: this.timeHumanizer(t, {
					units: ["days", "hours", "minutes", "seconds"]
				}),
				months: this.timeHumanizer(t, {
					units: ["months", "days", "hours", "minutes", "seconds"]
				}),
				years: this.timeHumanizer(t, {
					units: ["years", "months", "days", "hours", "minutes", "seconds"]
				})
			} : console.error('i18nService has not been initialized. You must call i18nService.init("en") for example'), n
		}, e
	}), (app = angular.module("timer")).factory("progressBarService", function() {
		var e = function() {};
		return e.prototype.calculateProgressBar = function(e, t, n, i) {
			var r = 0;
			return t /= 1e3, r = 100 - (r = null !== n ? 100 * t / moment(n).diff(e, "seconds") : 100 * t / i), 100 < (r = Math.round(10 * r) / 10) && (r = 100), r
		}, new e
	}),
	function(e, t) {
		var n = function(i, u) {
			"use strict";
			if (u.getElementsByClassName) {
				var d, c = u.documentElement,
					o = i.Date,
					r = i.HTMLPictureElement,
					a = "addEventListener",
					f = "getAttribute",
					t = i[a],
					h = i.setTimeout,
					n = i.requestAnimationFrame || h,
					s = i.requestIdleCallback,
					p = /^picture$/i,
					l = ["load", "error", "lazyincluded", "_lazyloaded"],
					m = {},
					g = Array.prototype.forEach,
					v = function(e, t) {
						return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e[f]("class") || "") && m[t]
					},
					y = function(e, t) {
						v(e, t) || e.setAttribute("class", (e[f]("class") || "").trim() + " " + t)
					},
					b = function(e, t) {
						var n;
						(n = v(e, t)) && e.setAttribute("class", (e[f]("class") || "").replace(n, " "))
					},
					w = function(t, n, e) {
						var i = e ? a : "removeEventListener";
						e && w(t, n), l.forEach(function(e) {
							t[i](e, n)
						})
					},
					$ = function(e, t, n, i, r) {
						var o = u.createEvent("CustomEvent");
						return o.initCustomEvent(t, !i, !r, n || {}), e.dispatchEvent(o), o
					},
					x = function(e, t) {
						var n;
						!r && (n = i.picturefill || d.pf) ? n({
							reevaluate: !0,
							elements: [e]
						}) : t && t.src && (e.src = t.src)
					},
					S = function(e, t) {
						return (getComputedStyle(e, null) || {})[t]
					},
					E = function(e, t, n) {
						for (n = n || e.offsetWidth; n < d.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
						return n
					},
					C = ($e = [], xe = we = [], (Ee = function(e, t) {
						ye && !t ? e.apply(this, arguments) : (xe.push(e), be || (be = !0, (u.hidden ? h : n)(Se)))
					})._lsFlush = Se = function() {
						var e = xe;
						for (xe = we.length ? $e : we, be = !(ye = !0); e.length;) e.shift()();
						ye = !1
					}, Ee),
					e = function(n, e) {
						return e ? function() {
							C(n)
						} : function() {
							var e = this,
								t = arguments;
							C(function() {
								n.apply(e, t)
							})
						}
					},
					k = function(e) {
						var t, n, i = function() {
								t = null, e()
							},
							r = function() {
								var e = o.now() - n;
								e < 99 ? h(r, 99 - e) : (s || i)(i)
							};
						return function() {
							n = o.now(), t || (t = h(r, 99))
						}
					},
					T = (te = /^img$/i, ne = /^iframe$/i, ie = "onscroll" in i && !/glebot/.test(navigator.userAgent), ae = -1, se = function(e) {
						oe--, e && e.target && w(e.target, se), (!e || oe < 0 || !e.target) && (oe = 0)
					}, le = function(e, t) {
						var n, i = e,
							r = "hidden" == S(u.body, "visibility") || "hidden" != S(e, "visibility");
						for (U -= t, B += t, q -= t, V += t; r && (i = i.offsetParent) && i != u.body && i != c;)(r = 0 < (S(i, "opacity") || 1)) && "visible" != S(i, "overflow") && (n = i.getBoundingClientRect(), r = V > n.left && q < n.right && B > n.top - 1 && U < n.bottom + 1);
						return r
					}, X = ue = function() {
						var e, t, n, i, r, o, a, s, l;
						if ((F = d.loadMode) && oe < 8 && (e = N.length)) {
							t = 0, ae++, null == Y && ("expand" in d || (d.expand = 500 < c.clientHeight && 500 < c.clientWidth ? 500 : 370), W = d.expand, Y = W * d.expFactor), re < Y && oe < 1 && 2 < ae && 2 < F && !u.hidden ? (re = Y, ae = 0) : re = 1 < F && 1 < ae && oe < 6 ? W : 0;
							for (; t < e; t++)
								if (N[t] && !N[t]._lazyRace)
									if (ie)
										if ((s = N[t][f]("data-expand")) && (o = 1 * s) || (o = re), l !== o && (z = innerWidth + o * G, H = innerHeight + o, a = -1 * o, l = o), n = N[t].getBoundingClientRect(), (B = n.bottom) >= a && (U = n.top) <= H && (V = n.right) >= a * G && (q = n.left) <= z && (B || V || q || U) && (I && oe < 3 && !s && (F < 3 || ae < 4) || le(N[t], o))) {
											if (ge(N[t]), r = !0, 9 < oe) break
										} else !r && I && !i && oe < 4 && ae < 4 && 2 < F && (j[0] || d.preloadAfterLoad) && (j[0] || !s && (B || V || q || U || "auto" != N[t][f](d.sizesAttr))) && (i = j[0] || N[t]);
							else ge(N[t]);
							i && !r && ge(i)
						}
					}, K = oe = re = 0, J = 666, Q = function() {
						Z = !1, K = o.now(), X()
					}, ee = s ? function() {
						s(Q, {
							timeout: J
						}), 666 !== J && (J = 666)
					} : e(function() {
						h(Q)
					}, !0), ce = function(e) {
						var t;
						(e = !0 === e) && (J = 44), Z || (Z = !0, (t = 125 - (o.now() - K)) < 0 && (t = 0), e || t < 9 && s ? ee() : h(ee, t))
					}, fe = e(de = function(e) {
						y(e.target, d.loadedClass), b(e.target, d.loadingClass), w(e.target, he)
					}), he = function(e) {
						fe({
							target: e.target
						})
					}, pe = function(e) {
						var t, n, i = e[f](d.srcsetAttr);
						(t = d.customMedia[e[f]("data-media") || e[f]("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i), t && ((n = e.parentNode).insertBefore(e.cloneNode(), e), n.removeChild(e))
					}, me = e(function(e, t, n, i, r) {
						var o, a, s, l, u, c;
						(u = $(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, d.autosizesClass) : e.setAttribute("sizes", i)), a = e[f](d.srcsetAttr), o = e[f](d.srcAttr), r && (l = (s = e.parentNode) && p.test(s.nodeName || "")), c = t.firesLoad || "src" in e && (a || o || l), u = {
							target: e
						}, c && (w(e, se, !0), clearTimeout(L), L = h(se, 2500), y(e, d.loadingClass), w(e, he, !0)), l && g.call(s.getElementsByTagName("source"), pe), a ? e.setAttribute("srcset", a) : o && !l && (ne.test(e.nodeName) ? function(t, n) {
							try {
								t.contentWindow.location.replace(n)
							} catch (e) {
								t.src = n
							}
						}(e, o) : e.src = o), (a || l) && x(e, {
							src: o
						})), e._lazyRace && delete e._lazyRace, b(e, d.lazyClass), C(function() {
							(!c || e.complete && 1 < e.naturalWidth) && (c ? se(u) : oe--, de(u))
						}, !0)
					}), ve = function() {
						if (!I) {
							if (o.now() - R < 999) return void h(ve, 999);
							var e = k(function() {
								d.loadMode = 3, ce()
							});
							I = !0, d.loadMode = 3, ce(), t("scroll", function() {
								3 == d.loadMode && (d.loadMode = 2), e()
							}, !0)
						}
					}, {
						_: function() {
							R = o.now(), N = u.getElementsByClassName(d.lazyClass), j = u.getElementsByClassName(d.lazyClass + " " + d.preloadClass), G = d.hFac, t("scroll", ce, !0), t("resize", ce, !0), i.MutationObserver ? new MutationObserver(ce).observe(c, {
								childList: !0,
								subtree: !0,
								attributes: !0
							}) : (c[a]("DOMNodeInserted", ce, !0), c[a]("DOMAttrModified", ce, !0), setInterval(ce, 999)), t("hashchange", ce, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
								u[a](e, ce, !0)
							}), /d$|^c/.test(u.readyState) ? ve() : (t("load", ve), u[a]("DOMContentLoaded", ce), h(ve, 2e4)), N.length ? (ue(), C._lsFlush()) : ce()
						},
						checkElems: ce,
						unveil: ge = function(e) {
							var t, n = te.test(e.nodeName),
								i = n && (e[f](d.sizesAttr) || e[f]("sizes")),
								r = "auto" == i;
							(!r && I || !n || !e.src && !e.srcset || e.complete || v(e, d.errorClass)) && (t = $(e, "lazyunveilread").detail, r && _.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, oe++, me(e, t, r, i, n))
						}
					}),
					_ = (M = e(function(e, t, n, i) {
						var r, o, a;
						if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), p.test(t.nodeName || ""))
							for (o = 0, a = (r = t.getElementsByTagName("source")).length; o < a; o++) r[o].setAttribute("sizes", i);
						n.detail.dataAttr || x(e, n.detail)
					}), O = function(e, t, n) {
						var i, r = e.parentNode;
						r && (n = E(e, r, n), (i = $(e, "lazybeforesizes", {
							width: n,
							dataAttr: !!t
						})).defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && M(e, r, i, n))
					}, {
						_: function() {
							P = u.getElementsByClassName(d.autosizesClass), t("resize", D)
						},
						checkElems: D = k(function() {
							var e, t = P.length;
							if (t)
								for (e = 0; e < t; e++) O(P[e])
						}),
						updateElem: O
					}),
					A = function() {
						A.i || (A.i = !0, _._(), T._())
					};
				return function() {
					var e, t = {
						lazyClass: "lazyload",
						loadedClass: "lazyloaded",
						loadingClass: "lazyloading",
						preloadClass: "lazypreload",
						errorClass: "lazyerror",
						autosizesClass: "lazyautosizes",
						srcAttr: "data-src",
						srcsetAttr: "data-srcset",
						sizesAttr: "data-sizes",
						minSize: 40,
						customMedia: {},
						init: !0,
						expFactor: 1.5,
						hFac: .8,
						loadMode: 2
					};
					for (e in d = i.lazySizesConfig || i.lazysizesConfig || {}, t) e in d || (d[e] = t[e]);
					i.lazySizesConfig = d, h(function() {
						d.init && A()
					})
				}(), {
					cfg: d,
					autoSizer: _,
					loader: T,
					init: A,
					uP: x,
					aC: y,
					rC: b,
					hC: v,
					fire: $,
					gW: E,
					rAF: C
				}
			}
			var P, M, O, D, N, j, I, L, F, R, z, H, U, q, V, B, W, Y, G, X, Z, K, J, Q, ee, te, ne, ie, re, oe, ae, se, le, ue, ce, de, fe, he, pe, me, ge, ve, ye, be, we, $e, xe, Se, Ee
		}(e, e.document);
		e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
	}(window),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["angular"], t) : e.hasOwnProperty("angular") ? t(e.angular) : "object" == typeof exports && (module.exports = t(require("angular")))
	}(this, function(m) {
		"use strict";

		function g(e, t) {
			var n;
			try {
				n = e[t]
			} catch (e) {
				n = !1
			}
			if (n) {
				var i = "__" + Math.round(1e7 * Math.random());
				try {
					e[t].setItem(i, i), e[t].removeItem(i, i)
				} catch (e) {
					n = !1
				}
			}
			return n
		}

		function e(p) {
			var n = g(window, p);
			return function() {
				var d = "ngStorage-";
				this.setKeyPrefix = function(e) {
					if ("string" != typeof e) throw new TypeError("[ngStorage] - " + p + "Provider.setKeyPrefix() expects a String.");
					d = e
				};
				var f = m.toJson,
					h = m.fromJson;
				this.setSerializer = function(e) {
					if ("function" != typeof e) throw new TypeError("[ngStorage] - " + p + "Provider.setSerializer expects a function.");
					f = e
				}, this.setDeserializer = function(e) {
					if ("function" != typeof e) throw new TypeError("[ngStorage] - " + p + "Provider.setDeserializer expects a function.");
					h = e
				}, this.supported = function() {
					return !!n
				}, this.get = function(e) {
					return n && h(n.getItem(d + e))
				}, this.set = function(e, t) {
					return n && n.setItem(d + e, f(t))
				}, this.remove = function(e) {
					n && n.removeItem(d + e)
				}, this.$get = ["$rootScope", "$window", "$log", "$timeout", "$document", function(n, e, t, i, r) {
					var o, a, s = d.length,
						l = g(e, p),
						u = l || (t.warn("This browser does not support Web Storage!"), {
							setItem: m.noop,
							getItem: m.noop,
							removeItem: m.noop
						}),
						c = {
							$default: function(e) {
								for (var t in e) m.isDefined(c[t]) || (c[t] = m.copy(e[t]));
								return c.$sync(), c
							},
							$reset: function(e) {
								for (var t in c) "$" === t[0] || delete c[t] && u.removeItem(d + t);
								return c.$default(e)
							},
							$sync: function() {
								for (var e, t = 0, n = u.length; t < n; t++)(e = u.key(t)) && d === e.slice(0, s) && (c[e.slice(s)] = h(u.getItem(e)))
							},
							$apply: function() {
								var n;
								if (a = null, !m.equals(c, o)) {
									for (var e in n = m.copy(o), m.forEach(c, function(e, t) {
											m.isDefined(e) && "$" !== t[0] && (u.setItem(d + t, f(e)), delete n[t])
										}), n) u.removeItem(d + e);
									o = m.copy(c)
								}
							},
							$supported: function() {
								return !!l
							}
						};
					return c.$sync(), o = m.copy(c), n.$watch(function() {
						a || (a = i(c.$apply, 100, !1))
					}), e.addEventListener && e.addEventListener("storage", function(e) {
						if (e.key) {
							var t = r[0];
							t.hasFocus && t.hasFocus() || d !== e.key.slice(0, s) || (e.newValue ? c[e.key.slice(s)] = h(e.newValue) : delete c[e.key.slice(s)], o = m.copy(c), n.$apply())
						}
					}), e.addEventListener && e.addEventListener("beforeunload", function() {
						c.$apply()
					}), c
				}]
			}
		}
		return (m = m && m.module ? m : window.angular).module("ngStorage", []).provider("$localStorage", e("localStorage")).provider("$sessionStorage", e("sessionStorage"))
	}), angular.module("ivpusic.cookie", ["ipCookie"]), angular.module("ipCookie", ["ng"]).factory("ipCookie", ["$document", function(p) {
		"use strict";

		function m(e) {
			try {
				return decodeURIComponent(e)
			} catch (e) {}
		}
		return function() {
			function i(e, t, n) {
				var i, r, o, a, s, l, u, c, d, f = (n = n || {}).decode || m,
					h = n.encode || encodeURIComponent;
				if (void 0 !== t) return t = "object" == typeof t ? JSON.stringify(t) : String(t), "number" == typeof n.expires && (d = n.expires, n.expires = new Date, -1 === d ? n.expires = new Date("Thu, 01 Jan 1970 00:00:00 GMT") : void 0 !== n.expirationUnit ? "hours" === n.expirationUnit ? n.expires.setHours(n.expires.getHours() + d) : "minutes" === n.expirationUnit ? n.expires.setMinutes(n.expires.getMinutes() + d) : "seconds" === n.expirationUnit ? n.expires.setSeconds(n.expires.getSeconds() + d) : "milliseconds" === n.expirationUnit ? n.expires.setMilliseconds(n.expires.getMilliseconds() + d) : n.expires.setDate(n.expires.getDate() + d) : n.expires.setDate(n.expires.getDate() + d)), p[0].cookie = [h(e), "=", h(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");
				for (r = [], (c = p[0].cookie) && (r = c.split("; ")), u = !(i = {}), o = 0; o < r.length; ++o)
					if (r[o]) {
						if (s = (a = r[o]).indexOf("="), l = a.substring(0, s), t = f(a.substring(s + 1)), angular.isUndefined(t)) continue;
						if (void 0 === e || e === l) {
							try {
								i[l] = JSON.parse(t)
							} catch (e) {
								i[l] = t
							}
							if (e === l) return i[l];
							u = !0
						}
					} return u && void 0 === e ? i : void 0
			}
			return i.remove = function(e, t) {
				var n = void 0 !== i(e);
				return n && (t || (t = {}), t.expires = -1, i(e, "", t)), n
			}, i
		}()
	}]),
	function(e) {
		"use strict";
		angular.module("vcRecaptcha", [])
	}(),
	function(g) {
		"use strict";
		g.module("vcRecaptcha").provider("vcRecaptchaService", function() {
			var p = this,
				m = {};
			p.onLoadFunctionName = "vcRecaptchaApiLoaded", p.setDefaults = function(e) {
				g.copy(e, m)
			}, p.setSiteKey = function(e) {
				m.key = e
			}, p.setTheme = function(e) {
				m.theme = e
			}, p.setStoken = function(e) {
				m.stoken = e
			}, p.setSize = function(e) {
				m.size = e
			}, p.setType = function(e) {
				m.type = e
			}, p.setLang = function(e) {
				m.lang = e
			}, p.setBadge = function(e) {
				m.badge = e
			}, p.setOnLoadFunctionName = function(e) {
				p.onLoadFunctionName = e
			}, p.$get = ["$rootScope", "$window", "$q", "$document", "$interval", function(t, e, r, n, i) {
				var o, a = r.defer(),
					s = a.promise,
					l = {};
				e.vcRecaptchaApiLoadedCallback = e.vcRecaptchaApiLoadedCallback || [];
				var u = function() {
					o = e.grecaptcha, a.resolve(o)
				};

				function c() {
					if (!o) throw new Error("reCaptcha has not been loaded yet.")
				}

				function d() {
					return g.isFunction((e.grecaptcha || {}).render)
				}
				if (e.vcRecaptchaApiLoadedCallback.push(u), e[p.onLoadFunctionName] = function() {
						e.vcRecaptchaApiLoadedCallback.forEach(function(e) {
							e()
						})
					}, d()) u();
				else if (e.document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) var f = i(function() {
					d() && (i.cancel(f), u())
				}, 25);
				else {
					var h = e.document.createElement("script");
					h.async = !0, h.defer = !0, h.src = "https://www.google.com/recaptcha/api.js?onload=" + p.onLoadFunctionName + "&render=explicit", n.find("body")[0].appendChild(h)
				}
				return {
					create: function(n, i) {
						return i.sitekey = i.key || m.key, i.theme = i.theme || m.theme, i.stoken = i.stoken || m.stoken, i.size = i.size || m.size, i.type = i.type || m.type, i.hl = i.lang || m.lang, i.badge = i.badge || m.badge, i.sitekey || function() {
							throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create')
						}(), (o ? r.when(o) : s).then(function(e) {
							var t = e.render(n, i);
							return l[t] = n, t
						})
					},
					reload: function(e) {
						c(), o.reset(e), t.$broadcast("reCaptchaReset", e)
					},
					execute: function(e) {
						c(), o.execute(e)
					},
					useLang: function(e, t) {
						var n = l[e];
						if (!n) throw new Error("reCaptcha Widget ID not exists", e);
						var i = n.querySelector("iframe");
						if (!t) return i && i.src && /[?&]hl=\w+/.test(i.src) ? i.src.replace(/.+[?&]hl=(\w+)([^\w].+)?/, "$1") : null;
						if (i && i.src) {
							var r = i.src;
							/[?&]hl=/.test(r) ? r = r.replace(/([?&]hl=)\w+/, "$1" + t) : r += (-1 === r.indexOf("?") ? "?" : "&") + "hl=" + t, i.src = r
						}
					},
					getResponse: function(e) {
						return c(), o.getResponse(e)
					},
					getInstance: function(e) {
						return l[e]
					},
					destroy: function(e) {
						delete l[e]
					}
				}
			}]
		})
	}(angular),
	function(d) {
		"use strict";
		d.module("vcRecaptcha").directive("vcRecaptcha", ["$document", "$timeout", "vcRecaptchaService", function(l, u, c) {
			return {
				restrict: "A",
				require: "?^^form",
				scope: {
					response: "=?ngModel",
					key: "=?",
					stoken: "=?",
					theme: "=?",
					size: "=?",
					type: "=?",
					lang: "=?",
					badge: "=?",
					tabindex: "=?",
					required: "=?",
					onCreate: "&",
					onSuccess: "&",
					onExpire: "&"
				},
				link: function(i, t, n, e) {
					i.widgetId = null, e && d.isDefined(n.required) && i.$watch("required", s);
					var r = i.$watch("key", function(e) {
						c.create(t[0], {
							callback: function(e) {
								u(function() {
									i.response = e, s(), i.onSuccess({
										response: e,
										widgetId: i.widgetId
									})
								})
							},
							key: e,
							stoken: i.stoken || n.stoken || null,
							theme: i.theme || n.theme || null,
							type: i.type || n.type || null,
							lang: i.lang || n.lang || null,
							tabindex: i.tabindex || n.tabindex || null,
							size: i.size || n.size || null,
							badge: i.badge || n.badge || null,
							"expired-callback": a
						}).then(function(n) {
							s(), i.widgetId = n, i.onCreate({
								widgetId: n
							}), i.$on("$destroy", o), i.$on("reCaptchaReset", function(e, t) {
								(d.isUndefined(t) || n === t) && (i.response = "", s())
							})
						}), r()
					});

					function o() {
						e && e.$setValidity("recaptcha", null), c.destroy(i.widgetId), d.element(l[0].querySelectorAll(".pls-container")).parent().remove()
					}

					function a() {
						u(function() {
							i.response = "", s(), i.onExpire({
								widgetId: i.widgetId
							})
						})
					}

					function s() {
						e && e.$setValidity("recaptcha", !1 === i.required ? null : Boolean(i.response))
					}
				}
			}
		}])
	}(angular);