$( function(){ Main.init(); } );

var Main = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  init : function() {

    Main.imagePreload = new ImagePreload();

  },
  bar : function() {

    $(".content").addClass("is-active");
    $(".loading").addClass("is-hide");

  }

}
/*-----------------------------------------------------
* ▲ Main ▲
-----------------------------------------------------*/

/*-----------------------------------------------------
* ▼ ImagePreload ▼
-----------------------------------------------------*/
var ImagePreload = function() {

  this._img;
  this._timer;
  this._imgList = [];
  this._preloadImages = [];

  this._init.apply( this );

}
ImagePreload.prototype = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  _init : function() {

    this._preloadImages.push(
      "img/1.png",
      "img/2.png",
      "img/3.png",
      "img/4.png",
      "img/5.png",
      "img/6.png",
      "img/7.png",
      "img/8.png",
      "img/9.png",
      "img/10.png",
      "img/11.png",
      "img/12.png",
      "img/13.png",
      "img/14.png",
      "img/15.png",
      "img/16.png",
      "img/17.png",
      "img/18.png",
      "img/19.png",
      "img/20.png",
      "img/21.png",
      "img/22.png"
    );

    this._update()

  },

  //-------------------------------------------------
  // update
  //-------------------------------------------------
  _update : function() {

    var l = this._preloadImages.length

    for ( var i = 0; i < l; i++) {

      this._img = new Image();
      this._img.src = this._preloadImages[i];

      this._imgList.push( this._img );

    }

    this._check();

  },

  //-------------------------------------------------
  // check
  //-------------------------------------------------
  _check : function() {

    var flg = false;
    var l = this._preloadImages.length;
    var count = 0;

    for( var i = 0; i < l; i++ ) {

      if( !(this._imgList[i].width * this._imgList[i].height) ) {

        return;

      } else if(!(this._imgList[i].complete)) {

        return;

      } else {

        flg = true;

      }

      if( flg === true ) {

        count++;

        if(count === l) {

          Main.bar();

        }
      }
    }
  }

};
/*-----------------------------------------------------
* ▲ ImagePreload ▲
-----------------------------------------------------*/
