/*-----------------------------------------------------
* ▼ ImagePreload ▼
-----------------------------------------------------*/
var ImagePreload = function() {

  this._preloadImages;
  this._img;

  this._init.apply( this );

}
ImagePreload.prototype = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  _init : function() {

    this._preloadImages = [
      "foo.png",
      "bar.png"
    ];

    this._update( this._preloadImages )

  },
  //-------------------------------------------------
  // update
  //-------------------------------------------------
  _update : function( i_data ) {

    for (var i = 0; i < i_data.length; i++) {

      this._img = new Image();
      this._img.src = "img/" + i_data[i];

    }

    this._complete( this._img.width )

  },
  //-------------------------------------------------
  // complete
  //-------------------------------------------------
  _complete : function( i_data ) {

    // 完了してるかの評価
    if(i_data > 0) {



    }

  }

};
/*-----------------------------------------------------
* ▲ ImagePreload ▲
-----------------------------------------------------*/
