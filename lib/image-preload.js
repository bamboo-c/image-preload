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
      "img/foo.png",
      "img/bar.png"
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

    this._timer = setInterval( $.proxy( this._check, this ), 200 );

  },

  //-------------------------------------------------
  // check
  //-------------------------------------------------
  _check : function() {

    var flg = false;
    var l = this._preloadImages.length;

    for( var i = 0; i < l; i++ ) {

      if( !(this._imgList[i].complete) ) {

        return;

      } else {

        flg = true;

      }

      if( !(this._imgList[i].width * this._imgList[i].height) ) {

        return;

      } else {

        flg = true;

      }

      if( flg === true ) {

        clearInterval( this._timer );

        // 読み込み完了してたら関数実行
        hoge();

      }

    }

  }

};
/*-----------------------------------------------------
* ▲ ImagePreload ▲
-----------------------------------------------------*/
