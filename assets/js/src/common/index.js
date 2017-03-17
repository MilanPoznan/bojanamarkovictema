/*********************************************
* Main entry point for all site-wide scripts *
*********************************************/

// inport modules
import navigation from './navigation';
import skipLinkFocus from './skip-link-focus-fix';
// import customizer from './customizer';

navigation( jQuery );
// customizer( jQuery );
skipLinkFocus();


/*********************
* On page load calls *
*********************/
jQuery( window ).on( 'load', ( event ) => {



});
