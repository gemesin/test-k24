/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/vue-apexcharts@1.5.2/dist/vue-apexcharts.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("apexcharts")) : "function" == typeof define && define.amd ? define(["apexcharts"], e) : t.VueApexCharts = e(t.ApexCharts)
}(this, function (t) {
	"use strict";

	function e(t) {
		return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function n(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
	t = t && t.hasOwnProperty("default") ? t.default : t;
	var i = {
		props: {
			options: {
				type: Object
			},
			type: {
				type: String
			},
			series: {
				type: Array,
				required: !0,
				default: function () {
					return []
				}
			},
			width: {
				default: "100%"
			},
			height: {
				default: "auto"
			}
		},
		data: function () {
			return {
				chart: {}
			}
		},
		beforeMount: function () {
			window.ApexCharts = t
		},
		mounted: function () {
			this.init()
		},
		created: function () {
			var t = this;
			this.$watch("options", function (e) {
				!t.chart && e ? t.init() : t.chart.updateOptions(t.options)
			}), this.$watch("series", function (e) {
				!t.chart && e ? t.init() : t.chart.updateSeries(t.series)
			});
			["type", "width", "height"].forEach(function (e) {
				t.$watch(e, function () {
					t.refresh()
				})
			})
		},
		beforeDestroy: function () {
			this.chart && this.destroy()
		},
		render: function (t) {
			return t("div")
		},
		methods: {
			init: function () {
				var e = this,
					n = {
						chart: {
							type: this.type || this.options.chart.type || "line",
							height: this.height,
							width: this.width,
							events: {}
						},
						series: this.series
					};
				// Object.keys(this.$listeners).forEach(function (t) {
				// 	n.chart.events[t] = e.$listeners[t]
				// });
				var i = this.extend(this.options, n);
				return this.chart = new t(this.$el, i), this.chart.render()
			},
			isObject: function (t) {
				return t && "object" === e(t) && !Array.isArray(t) && null != t
			},
			extend: function (t, e) {
				var i = this;
				"function" != typeof Object.assign && (Object.assign = function (t) {
					if (null == t) throw new TypeError("Cannot convert undefined or null to object");
					for (var e = Object(t), n = 1; n < arguments.length; n++) {
						var i = arguments[n];
						if (null != i)
							for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
					}
					return e
				});
				var r = Object.assign({}, t);
				return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach(function (o) {
					i.isObject(e[o]) && o in t ? r[o] = i.extend(t[o], e[o]) : Object.assign(r, n({}, o, e[o]))
				}), r
			},
			refresh: function () {
				return this.destroy(), this.init()
			},
			destroy: function () {
				this.chart.destroy()
			},
			updateSeries: function (t, e) {
				return this.chart.updateSeries(t, e)
			},
			updateOptions: function (t, e, n, i) {
				return this.chart.updateOptions(t, e, n, i)
			},
			toggleSeries: function (t) {
				return this.chart.toggleSeries(t)
			},
			showSeries: function (t) {
				this.chart.showSeries(t)
			},
			hideSeries: function (t) {
				this.chart.hideSeries(t)
			},
			appendSeries: function (t, e) {
				return this.chart.appendSeries(t, e)
			},
			resetSeries: function () {
				this.chart.resetSeries()
			},
			toggleDataPointSelection: function (t, e) {
				this.chart.toggleDataPointSelection(t, e)
			},
			appendData: function (t) {
				return this.chart.appendData(t)
			},
			addText: function (t) {
				this.chart.addText(t)
			},
			dataURI: function () {
				return this.chart.dataURI()
			},
			setLocale: function (t) {
				return this.chart.setLocale(t)
			},
			addXaxisAnnotation: function (t, e) {
				this.chart.addXaxisAnnotation(t, e)
			},
			addYaxisAnnotation: function (t, e) {
				this.chart.addYaxisAnnotation(t, e)
			},
			addPointAnnotation: function (t, e) {
				this.chart.addPointAnnotation(t, e)
			},
			removeAnnotation: function (t, e) {
				this.chart.removeAnnotation(t, e)
			},
			clearAnnotations: function () {
				this.chart.clearAnnotations()
			}
		}
	};
	return window.ApexCharts = t, i.install = function (e) {
		e.ApexCharts = t, window.ApexCharts = t, Object.defineProperty(e.prototype, "$apexcharts", {
			get: function () {
				return t
			}
		})
	}, i
});
//# sourceMappingURL=/sm/a79b4d942b71406697879463f309885b8b70a5b059c89e096cf5349e9152019d.map