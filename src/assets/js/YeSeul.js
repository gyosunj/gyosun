var YeSeul = {};
(function(YeSeul, window, document, $) {
  'use strict';
  // for browsers not support 'Object.create'
  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      var F = function () {};
      F.prototype = o;
      return new F();
    };
  }
  // for browsers not support 'Object.create'
  var _this; 
  var collection = {
    VERSION: '0.0.1'
  };
  _this = collection;
  window.YeSeul = $.extend(YeSeul, collection)
})(YeSeul, window, document, window.jQuery);

// utility
YeSeul.ingredient = {
  currentUrl: function () {
    var url = window.location.href.toString().split(window.location.host)[1];
    return url.toString();
  },
  punchClock: {
    _this: this.YeSeul,
    getNow: function () {
      return new Date();
    },
    year: function () {
      var year = this.getNow().getFullYear();
      return year.toString();
    },
    month: function () {
      var month = this.getNow().getMonth() + 1;
      return this._this.ingredient.padLeft(month, 2);
    },
    monthName: function () {
      var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var mS = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      var month = this.getNow().getMonth();
      return mL[month];
    },
    date: function () {
      var date = this.getNow().getDate();
      return this._this.ingredient.padLeft(date, 2);
    },
    day: function () {
      var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      var day = this.getNow().getDay();
      return dayName[day];
    },
    hour: function () {
      var hour = this.getNow().getHours();
      return this._this.ingredient.padLeft(hour, 2);
    },
    min: function () {
      var min = this.getNow().getMinutes();
      return this._this.ingredient.padLeft(min, 2);
    },
    sec: function () {
      var sec = this.getNow().getSeconds();
      return this._this.ingredient.padLeft(sec, 2);
    },
    now: function (o) {
      var now = {
        fDateTime: this.year() + this.month() + this.date() + this.hour() + this.min() + this.sec(),
        year: this.year(),
        month: this.month(),
        monthName: this.monthName(),
        date: this.date(),
        hour: this.hour(),
        min: this.min(),
        sec: this.sec(),
        day: this.day()
      }
      return now;
    }
  },
  padLeft: function (str, max){
    if(str != 'undefined' && max != 'undefined')
    {
      str = str.toString(); 
      function main(str,max){ 
        return str.length < max ? main("0" + str, max) : str; 
      } 
      return main(str,max);
    } else {
      return 'error'
    }
  },
  objLength: function (obj) {
    var length = 0;
    for( var key in obj ) {
      if( obj.hasOwnProperty(key) ) {
        ++length;
      }
    }
    return length;
  },
  orderBy: function (order, prop1, prop2) {
    //TODO: make it dynamic: number of properties
    var _order = order.toUpperCase();
    if (_order === 'DESC') {
      _order = -1;
    } else {
      _order = 1;
    }
    return function (a, b) {
      var result = (a[prop1][prop2] < b[prop1][prop2]) ? -1 : (a[prop1][prop2] > b[prop1][prop2]) ? 1 : 0;
      return result * _order;
    };
  }
};

YeSeul.restaurant = {}; // constant

YeSeul.menu = function() {}; // route
YeSeul.menu.prototype.run = function () {
  this.init();
}
YeSeul.menu.prototype.init = function () {
  var _this = this;
  var path, hash;
  $(document).ready(function () {
    path = document.location.pathname;
    hash = window.location.hash;
    _this.changeRoute(hash || path);
  })

  $(window).on('hashchange', function() {
    hash = window.location.hash;
    _this.changeRoute(hash);
  });
}
YeSeul.menu.prototype.changeRoute = function(param) {
  switch(param) {
    case '':
    $(this.route.empty.renderTarget).text(param);
      break;
    default:
      $(this.route.empty.renderTarget).text(param);
  }
}
YeSeul.menu.prototype.route = {
  empty: { 
    thisName: 'index',
    renderTemplate: '',
    renderTarget: 'html',
    onNav: false
  }
}

YeSeul.appetizer = function() {}; // class
YeSeul.appetizer.prototype.PostClass = function (param1) {

  var _id;
  Object.defineProperty(this, 'id', {
    get: function () { return _id; },
    set: function (value) { _id = value; },
    enumerable: true
  });

  var _title;
  Object.defineProperty(this, 'title', {
    get: function () { return _title; },
    set: function (value) { _title = 'test'; },
    enumerable: true
  });

  var _excerpt;
  Object.defineProperty(this, 'excerpt', {
    get: function () { return _excerpt; },
    set: function (value) { _excerpt = value; },
    enumerable: true
  });

  var _content;
  Object.defineProperty(this, 'content', {
    get: function () { return _content; },
    set: function (value) { _content = value; },
    enumerable: true
  });

  var _createdby;
  Object.defineProperty(this, 'createdby', {
    get: function () { return _createdby; },
    set: function (value) { _createdby = value; },
    enumerable: true
  });

  var _updatedby;
  Object.defineProperty(this, 'updatedby', {
    get: function () { return _updatedby; },
    set: function (value) { _updatedby = value; },
    enumerable: true
  });

  var _createdat;
  Object.defineProperty(this, 'createdat', {
    get: function () { return _createdat; },
    set: function (value) { _createdat = value; },
    enumerable: true
  });

  var _updatedat;
  Object.defineProperty(this, 'updatedat', {
    get: function () { return _updatedat; },
    set: function (value) { _updatedat = value; },
    enumerable: true
  });

  var _trash;
  Object.defineProperty(this, 'trash', {
    get: function () { return _trash; },
    set: function (value) { _trash = value; },
    enumerable: true
  });
}

YeSeul.entree = function () {}; // controller
YeSeul.entree.doneCallback = function(error) {
  if (error) {
    alert('failed');
  } else {
    alert('succeeded');
  }
};

YeSeul.dessert = function () {}; // template engine

YeSeul.wine = function () {}; // DOM manipulation

// console.log(window)

