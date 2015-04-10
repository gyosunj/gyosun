'use strict';
YeSeul.entree.resumes = new YeSeul.entree();
YeSeul.entree.resumes.ctrl = function (route) {
  var thisName = route.thisName,
    trash = 0;
  this.pageTitle = thisName;

  YeSeul.entree.resumes.firebase.dbName = 'resumes';
  YeSeul.entree.resumes.firebase.loadData(trash) // num: 1 = deleted item or 0 = not deleted item
    .then(function ( arr ) {
      arr.reverse();
      // TODO: arr.sort => custom order fn
      YeSeul.dessert.mustache (route.renderTemplate, arr, route.renderTarget)
    })
    .done(function () { })
    .fail(function () {
      console.error (this + ' :failed.');
    });
};

YeSeul.wine.resumes = new YeSeul.wine();
YeSeul.wine.resumes = function () {
  var gyosunLogoSimbol = new Walkway({
    selector: '#gyosunLogoSimbol',
    duration: '7000',
    easing: function (t) {
      return t * t;
    }
  });

  $(document).ready(function () {
    if ($(gyosunLogoSimbol.selector).length != 0) {
      var startAfter = 500;
      setTimeout(function () {
        gyosunLogoSimbol.draw();
      }, startAfter );
    } else {
      console.error ('The target does not exist.')
    }

    if (window.innerWidth > 768) {
      $(function () {
        var anchors = $('.resume-desc-col'),
          winH = window.innerHeight,
          _scrollTop = $(this).scrollTop(),
          i, 
          k,
          anchorArr = [],
          anchorPointArr = [];
        for(i=0; i < anchors.length; i++){
          anchorArr.push($(anchors[i]).attr('id'));
          anchorPointArr.push($(anchors[i]).offset().top - (winH * 0.9))
        }
        $(document).scroll(function () {
          var _scrollTop = $(this).scrollTop()
          for(k=1; k <= anchorPointArr.length; k++){
            if ( _scrollTop >= anchorPointArr[k-1] && _scrollTop < anchorPointArr[k]) {
              var eachWinH = winH * (k - 1);
              $('.resume-img-col').css({
                'transform': 'translateY(-' + eachWinH + 'px)', 
                '-webkit-transform': 'translateY(-' + eachWinH + 'px)',
                '-moz-transform': 'translateY(-' + eachWinH + 'px)',
                '-ms-transform': 'translateY(-' + eachWinH + 'px)',
                '-o-transform': 'translateY(-' + eachWinH + 'px)',
              })
            }
          }
        });
      }());
    }
  });
};