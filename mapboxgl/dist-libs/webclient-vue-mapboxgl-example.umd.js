(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("vcolorpicker"));
  else if (typeof define === "function" && define.amd)
    define(["vcolorpicker"], factory);
  else if (typeof exports === "object")
    exports["webclient-vue-mapboxgl-example"] = factory(
      require("vcolorpicker")
    );
  else root["webclient-vue-mapboxgl-example"] = factory(root["vcolorpicker"]);
})(
  typeof self !== "undefined" ? self : this,
  function (__WEBPACK_EXTERNAL_MODULE_e95c__) {
    return /******/ (function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {};
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/ __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/ __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter,
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
          mode & 4 &&
          typeof value === "object" &&
          value &&
          value.__esModule
        )
          return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
          enumerable: true,
          value: value,
        });
        /******/ if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(
              ns,
              key,
              function (key) {
                return value[key];
              }.bind(null, key)
            );
        /******/ return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module["default"];
              }
            : /******/ function getModuleExports() {
                return module;
              };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/ __webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/ return __webpack_require__((__webpack_require__.s = "fb15"));
      /******/
    })(
      /************************************************************************/
      /******/ {
        /***/ e95c: /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_e95c__;

          /***/
        },

        /***/ f6fd: /***/ function (module, exports) {
          // document.currentScript polyfill by Adam Miller

          // MIT license

          (function (document) {
            var currentScript = "currentScript",
              scripts = document.getElementsByTagName("script"); // Live NodeList collection

            // If browser needs currentScript polyfill, add get currentScript() to the document object
            if (!(currentScript in document)) {
              Object.defineProperty(document, currentScript, {
                get: function () {
                  // IE 6-10 supports script readyState
                  // IE 10+ support stack trace
                  try {
                    throw new Error();
                  } catch (err) {
                    // Find the second match for the "at" string to get file src url from stack.
                    // Specifically works with the format of stack traces in IE.
                    var i,
                      res = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(err.stack) || [
                        false,
                      ])[1];

                    // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                    for (i in scripts) {
                      if (
                        scripts[i].src == res ||
                        scripts[i].readyState == "interactive"
                      ) {
                        return scripts[i];
                      }
                    }

                    // If no match, return null
                    return null;
                  }
                },
              });
            }
          })(document);

          /***/
        },

        /***/ fb15: /***/ function (
          module,
          __webpack_exports__,
          __webpack_require__
        ) {
          "use strict";
          // ESM COMPAT FLAG
          __webpack_require__.r(__webpack_exports__);

          // EXPORTS
          __webpack_require__.d(
            __webpack_exports__,
            "MapgisScaleControl",
            function () {
              return /* reexport */ ScaleControl;
            }
          );

          // NAMESPACE OBJECT: ./src/component.js
          var component_namespaceObject = {};
          __webpack_require__.r(component_namespaceObject);
          __webpack_require__.d(
            component_namespaceObject,
            "MapgisScaleControl",
            function () {
              return ScaleControl;
            }
          );

          // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
          // This file is imported into lib/wc client bundles.

          if (typeof window !== "undefined") {
            if (true) {
              __webpack_require__("f6fd");
            }

            var i;
            if (
              (i = window.document.currentScript) &&
              (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))
            ) {
              __webpack_require__.p = i[1]; // eslint-disable-line
            }
          }

          // Indicate to webpack that this file can be concatenated
          /* harmony default export */ var setPublicPath = null;

          // CONCATENATED MODULE: ./src/components/withEvents.js
          function _typeof(obj) {
            "@babel/helpers - typeof";
            return (
              (_typeof =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj;
                    }
                  : function (obj) {
                      return obj &&
                        "function" == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? "symbol"
                        : typeof obj;
                    }),
              _typeof(obj)
            );
          }
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              enumerableOnly &&
                (symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(
                    object,
                    sym
                  ).enumerable;
                })),
                keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? ownKeys(Object(source), !0).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    target,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                    );
                  });
            }
            return target;
          }
          function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return _typeof(key) === "symbol" ? key : String(key);
          }
          function _toPrimitive(input, hint) {
            if (_typeof(input) !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
              var res = prim.call(input, hint || "default");
              if (_typeof(res) !== "object") return res;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return (hint === "string" ? String : Number)(input);
          }
          /* harmony default export */ var withEvents = {
            methods: {
              /**
               * Emit Vue event with additional data
               *
               * @param {string} name EventName
               * @param {Object} [data={}] Additional data
               */
              $_emitEvent: function $_emitEvent(name) {
                var data =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                this.$emit(
                  name,
                  _objectSpread(
                    {
                      map: this.map,
                      component: this,
                    },
                    data
                  )
                );
              },
              /**
               * Emit Vue event with Mapbox event as additional data
               *
               * @param {Object} event
               */
              $_emitMapEvent: function $_emitMapEvent(event) {
                var data =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                this.$_emitEvent(
                  event.type,
                  _objectSpread(
                    {
                      mapboxEvent: event,
                    },
                    data
                  )
                );
              },
            },
          };
          // CONCATENATED MODULE: ./src/components/withSelfEvents.js
          function withSelfEvents_typeof(obj) {
            "@babel/helpers - typeof";
            return (
              (withSelfEvents_typeof =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj;
                    }
                  : function (obj) {
                      return obj &&
                        "function" == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? "symbol"
                        : typeof obj;
                    }),
              withSelfEvents_typeof(obj)
            );
          }
          function withSelfEvents_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              enumerableOnly &&
                (symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(
                    object,
                    sym
                  ).enumerable;
                })),
                keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function withSelfEvents_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? withSelfEvents_ownKeys(Object(source), !0).forEach(function (
                    key
                  ) {
                    withSelfEvents_defineProperty(target, key, source[key]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    target,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : withSelfEvents_ownKeys(Object(source)).forEach(function (
                    key
                  ) {
                    Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                    );
                  });
            }
            return target;
          }
          function withSelfEvents_defineProperty(obj, key, value) {
            key = withSelfEvents_toPropertyKey(key);
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function withSelfEvents_toPropertyKey(arg) {
            var key = withSelfEvents_toPrimitive(arg, "string");
            return withSelfEvents_typeof(key) === "symbol" ? key : String(key);
          }
          function withSelfEvents_toPrimitive(input, hint) {
            if (withSelfEvents_typeof(input) !== "object" || input === null)
              return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
              var res = prim.call(input, hint || "default");
              if (withSelfEvents_typeof(res) !== "object") return res;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return (hint === "string" ? String : Number)(input);
          }
          /* harmony default export */ var withSelfEvents = {
            methods: {
              $_emitSelfEvent: function $_emitSelfEvent(event) {
                var data =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                // 等于 this.$emit(event.type, data);
                this.$_emitMapEvent(
                  event,
                  withSelfEvents_objectSpread(
                    {
                      control: this.control,
                    },
                    data
                  )
                );
              },
              /** Bind events for markers, popups and controls.
               * MapboxGL JS emits this events on popup or marker object,
               * so we treat them as 'self' events of these objects
               */
              $_bindSelfEvents: function $_bindSelfEvents(events, emitter) {
                var _this = this;
                Object.keys(this.$listeners).forEach(function (eventName) {
                  if (events.includes(eventName)) {
                    emitter.on(eventName, _this.$_emitSelfEvent);
                  }
                });
              },
              $_unbindSelfEvents: function $_unbindSelfEvents(events, emitter) {
                var _this2 = this;
                if (events.length === 0) return;
                if (!emitter) return;
                events.forEach(function (eventName) {
                  emitter.off(eventName, _this2.$_emitSelfEvent);
                });
              },
            },
          };
          // CONCATENATED MODULE: ./src/components/controlMixin.js
          // import withRegistration from "../../../lib/withRegistration";

          /* harmony default export */ var controlMixin = {
            mixins: [withEvents, withSelfEvents],
            inject: ["mapbox", "map", "actions"],
            props: {
              position: {
                type: String,
                default: "top-right",
              },
            },
            beforeDestroy: function beforeDestroy() {
              if (this.map && this.control) {
                this.map.removeControl(this.control);
              }
            },
            methods: {
              $_addControl: function $_addControl() {
                try {
                  this.map.addControl(this.control, this.position);
                } catch (err) {
                  this.$_emitEvent("error", {
                    error: err,
                  });
                  return;
                }
                this.$_emitEvent("added", {
                  control: this.control,
                });
              },
            },
            render: function render() {},
          };
          // CONCATENATED MODULE: ./src/components/ScaleControl.js

          /* harmony default export */ var ScaleControl = {
            name: "mapgis-scale",
            mixins: [controlMixin],
            props: {
              maxWidth: {
                type: Number,
                default: 150,
              },
              unit: {
                type: String,
                default: "metric",
                validator: function validator(value) {
                  return ["imperial", "metric", "nautical"].includes(value);
                },
              },
            },
            watch: {
              unit: function unit(next, prev) {
                if (this.control && next !== prev) {
                  this.control.setUnit(next);
                }
              },
            },
            created: function created() {
              this.control = new this.mapbox.ScaleControl(this.$props);
              this.$_addControl();
            },
          };
          // CONCATENATED MODULE: ./src/component.js

          // EXTERNAL MODULE: external "vcolorpicker"
          var external_vcolorpicker_ = __webpack_require__("e95c");
          var external_vcolorpicker_default =
            /*#__PURE__*/ __webpack_require__.n(external_vcolorpicker_);

          // CONCATENATED MODULE: ./src/main.js

          var main_install = function install(Vue, options) {
            options = options || {};
            Vue.use(external_vcolorpicker_default.a);
            for (var name in component_namespaceObject) {
              var com = component_namespaceObject[name];
              Vue.component(com.options ? com.options.name : com.name, com);
            }
          };
          if (typeof window !== "undefined" && window["Vue"]) {
            main_install(window["Vue"], {});
          }

          /* harmony default export */ var main = {
            install: main_install,
          };
          // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

          /* harmony default export */ var entry_lib = (__webpack_exports__[
            "default"
          ] = main);

          /***/
        },

        /******/
      }
    );
  }
);
