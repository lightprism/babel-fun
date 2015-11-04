(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./js');
var Square = require('./square');

console.log('Client side code started');

var square1 = new Square(5);
var square2 = new Square();
console.log(square1, square2);
console.log(square1.sayName());

},{"./js":2,"./square":4}],2:[function(require,module,exports){
'use strict';

module.exports = {
    count: count
};

function count() {
    var count = 0;
    setInterval(function () {
        return console.log(count++);
    }, 400);
}

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = (function () {
    function Polygon(width, height) {
        _classCallCheck(this, Polygon);

        this.name = "Polygon";
        this.width = width;
        this.height = height;
    }

    _createClass(Polygon, [{
        key: "sayName",
        value: function sayName() {
            console.log("Hi, my name is " + this.name);
        }
    }]);

    return Polygon;
})();

module.exports = Polygon;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = require('./polygon');

var Square = (function (_Polygon) {
    _inherits(Square, _Polygon);

    function Square() {
        var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

        _classCallCheck(this, Square);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, length, length));

        _this.name = 'Square';
        return _this;
    }

    _createClass(Square, [{
        key: 'area',
        get: function get() {
            return this.width * this.height;
        }
    }]);

    return Square;
})(Polygon);

module.exports = Square;

},{"./polygon":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRcXGFwcFxcYXBwLmpzIiwiY2xpZW50XFxhcHBcXGpzXFxpbmRleC5qcyIsImNsaWVudFxcYXBwXFxwb2x5Z29uLmpzIiwiY2xpZW50XFxhcHBcXHNxdWFyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXhDLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzs7O0FDVi9CLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsU0FBSyxFQUFMLEtBQUs7Q0FDUixDQUFDOztBQUVGLFNBQVMsS0FBSyxHQUFHO0FBQ2IsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsZUFBVyxDQUFDO2VBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDaEQ7OztBQ1RELFlBQVksQ0FBQzs7Ozs7O0lBRVAsT0FBTztBQUNULGFBREUsT0FBTyxDQUNHLEtBQUssRUFBRSxNQUFNLEVBQUU7OEJBRHpCLE9BQU87O0FBRUwsWUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDdEIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDeEI7O2lCQUxDLE9BQU87O2tDQU9DO0FBQ04sbUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDOzs7V0FUQyxPQUFPOzs7QUFZYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7O0FDZHpCLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFN0IsTUFBTTtjQUFOLE1BQU07O0FBQ1IsYUFERSxNQUFNLEdBQ2U7WUFBWCxNQUFNLHlEQUFDLEVBQUU7OzhCQURuQixNQUFNOzsyRUFBTixNQUFNLGFBRUUsTUFBTSxFQUFFLE1BQU07O0FBQ3BCLGNBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQzs7S0FDeEI7O2lCQUpDLE1BQU07OzRCQU1HO0FBQ1AsbUJBQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ25DOzs7V0FSQyxNQUFNO0dBQVMsT0FBTzs7QUFVNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9qcycpO1xyXG52YXIgU3F1YXJlID0gcmVxdWlyZSgnLi9zcXVhcmUnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcclxuXHJcbnZhciBzcXVhcmUxID0gbmV3IFNxdWFyZSg1KTtcclxudmFyIHNxdWFyZTIgPSBuZXcgU3F1YXJlKCk7XHJcbmNvbnNvbGUubG9nKHNxdWFyZTEsIHNxdWFyZTIpO1xyXG5jb25zb2xlLmxvZyhzcXVhcmUxLnNheU5hbWUoKSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY291bnRcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvdW50KCkge1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIHNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKGNvdW50KyspLCA0MDApO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUG9seWdvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJQb2x5Z29uXCI7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNheU5hbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIaSwgbXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9seWdvbjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUG9seWdvbiA9IHJlcXVpcmUoJy4vcG9seWdvbicpO1xyXG5cclxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUG9seWdvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGg9MTApIHtcclxuICAgICAgICBzdXBlcihsZW5ndGgsIGxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ1NxdWFyZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFyZWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFyZTsiXX0=
