// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"d6sW":[function(require,module,exports) {
!function () {
  var duration = 50;
  $('.actions').on('click', 'button', function (e) {
    var $button = $(e.currentTarget); // button
    var speed = $button.attr('data-speed');
    $button.addClass('active').siblings('.active').removeClass('active');
    switch (speed) {
      case 'slow':
        duration = 100;
        break;
      case 'normal':
        duration = 50;
        break;
      case 'fast':
        duration = 10;
        break;
    }
  });
  function writeCode(prefix, code, fn) {
    var container = document.querySelector('#code');
    var styleTag = document.querySelector('#styleTag');
    var n = 0;
    var id;
    id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  var code = "/*\n * \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\n */\n.preview{\n  background: #FEE433;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n */\n.nose{\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 12px;\n  border-color: black transparent transparent;\n  border-radius: 11px;\n  position: absolute;\n  left: 50%;\n  top: 28px;\n  margin-left: -12px;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n */\n.eye{\n  width: 49px;\n  height: 49px;\n  background: #2E2E2E;\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid #000000;\n}\n/*\n * \u773C\u775B\u91CC\u9762\u7684\u73E0\u5B50\n */\n.eye::before{\n  content: '';\n  display: block;\n  width: 24px;\n  height: 24px;\n  background: white;\n  position: absolute;\n  border-radius: 50%;\n  left: 6px;\n  top:-1px;\n  border: 2px solid #000;\n}\n/*\n * \u5DE6\u773C\u5728\u5DE6\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n */\n.eye.left{\n  right: 50%;\n  margin-right: 90px;\n}\n/*\n * \u53F3\u773C\u5728\u53F3\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n */\n.eye.right{\n  left: 50%;\n  margin-left: 90px;\n}\n/*\n * \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u8138\n */\n.face{\n  width: 68px;\n  height: 68px;\n  background: #FC0D1C;\n  border: 2px solid black;\n  border-radius: 50%;\n  position: absolute;\n  top: 85px;\n}\n/*\n * \u5C06\u8138\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n */\n.face.left{\n  right: 50%;\n  margin-right: 116px;\n}\n.face.right{\n  left: 50%;\n  margin-left: 116px;\n}\n/*\n * \u4E0A\u5634\u5507\n */\n.upperLip{\n  height: 25px;\n  width: 80px;\n  border: 2px solid black;\n  position: absolute;\n  top: 50px;\n  background: #FDE348;\n}\n.upperLip.left{\n  right: 50%;\n  border-bottom-left-radius: 40px 25px;\n  border-top: none;\n  border-right: none;\n  transform: rotate(-20deg);\n}\n.upperLip.right{\n  left: 50%;\n  border-bottom-right-radius: 40px 25px;\n  border-top: none;\n  border-left: none;\n  transform: rotate(20deg);\n}\n/*\n * \u4E0B\u5634\u5507\n */\n.lowerLip-wrapper{\n  bottom: 0;\n  position: absolute;\n  left: 50%;\n  margin-left: -150px;\n  height: 110px;\n  overflow: hidden;\n  width: 300px;\n}\n.lowerLip{\n  height: 3500px;\n  width: 300px;\n  background: #990513;\n  border-radius: 200px/2000px;\n  border: 2px solid black;\n  position: absolute;\n  bottom: 0;\n  overflow: hidden;\n}\n/*\n * \u5C0F\u820C\u5934\n */\n.lowerLip::after{\n  content: '';\n  position: absolute;\n  bottom: -20px;\n  width: 100px;\n  height: 100px;\n  background: #FC4A62;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 50px;\n}\n\n";
  writeCode('', code);
}.call();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.a69b3fab.js.map