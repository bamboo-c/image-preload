$( function(){ Main.init(); } );

var Main = {

  imagePreload;

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  init : function() {

    Main.imagePreload = new ImagePreload();

  },
  bar : function() {

    console.log("preload done!");

  }

}
/*-----------------------------------------------------
* ▲ Main ▲
-----------------------------------------------------*/
