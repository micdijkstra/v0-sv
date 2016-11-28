/* v0
 *
 * Include vendor and third party scripts
 *= require _lib/console/console
 *= require _lib/bootstrap/bootstrap
 *= require _lib/lazysizes/lazysizes
 *= require _lib/stencil/stencil
 *  - - - - - - - - - - - - - - - - */

/* Page Load
 *  - - - - - - - - - - - - - - - - */
$(window).load(function() {
  Stencil.verticalAlign();
  $("body").removeClass("preload");
});

/* Page Resize
 *  - - - - - - - - - - - - - - - - */

$(window).resize(function() {
  Stencil.verticalAlign();
});

/* Page Ready
 *  - - - - - - - - - - - - - - - - */
$(document).ready(function() {
});
