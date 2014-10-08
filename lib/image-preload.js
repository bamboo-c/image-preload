/*-----------------------------------------------------
* ▼ ImagePreload ▼
-----------------------------------------------------*/
var ImagePreload = function() {

  this._preloadImages;
  this._img;
  this._timer;

  this._init.apply( this );

}
ImagePreload.prototype = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  _init : function() {

    this._preloadImages = [
      "img/foo.png",
      "img/bar.png"
    ];

    this._update( this._preloadImages )

  },
  //-------------------------------------------------
  // update
  //-------------------------------------------------
  _update : function( i_data ) {

    for (var i = 0; i < i_data.length; i++) {

      this._img = new Image();
      this._img.src = i_data[i];

    }

    this._timer = setInterval( $.proxy( this._check, this ), 200 );

  },
  //-------------------------------------------------
  // check
  //-------------------------------------------------
  _check : function() {

    clearInterval( this._timer );

    // 完了してるかどうかの評価
    if( this._img.width > 0 ) {

      // OK だったら関数実行
      Main.bar();

    }

  }

};
/*-----------------------------------------------------
* ▲ ImagePreload ▲
-----------------------------------------------------*/
