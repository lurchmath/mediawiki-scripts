
// This file should be used as MediaWiki:Common.js in the wiki.

// This extension assumes that you have added the following line to the MediaWiki:Sidebar page.
// ** open-in-lurch|Open in Lurch

// If this document is a Lurch document, then do two things:
// 1. Replace the "Open in Lurch" placeholder link with an active link, so users can user it
// 2. Place a warning around the "Edit" action, to prevent data corruption by uninformed users
// If this document is not a Lurch document, then do the opposite of #1...hide the "Open in Lurch" placeholder link.
$( function () {
  var lurchRE = RegExp( '/open-in-lurch', 'i' );
  var editRE = RegExp( 'action=edit$' );
  var wikiPageDiv = document.getElementById( 'mw-content-text' );
  var isLurchDoc = /<span[^>]+id=.metadata.[^>]*>/.test( wikiPageDiv.innerHTML );
  $( 'a' ).each( function ( index, element ) {
    var href = element.getAttribute( 'href' );
    if ( lurchRE.test( href ) ) {
      if ( isLurchDoc )
        element.setAttribute( 'href', '/lurch/app/app.html?wikipage=' + encodeURIComponent( mw.config.get('wgPageName') ) );
      else
        element.style.display = 'none';
    } else if ( isLurchDoc && editRE.test( href ) ) {
      element.setAttribute( 'onclick', 'return warnBeforeEditing();' );
    }
  } );
} );

// The function installed as the event handler for Edit links on pages that contain Lurch documents,
// at the end of the function immediately above.
function warnBeforeEditing ()
{
  return confirm( "!!!!! WARNING !!!!!\n\nThis page is a Lurch document, and should not be edited on the wiki.\n\nUnless you know the internal format of such documents very well, YOU MAY CORRUPT YOUR DATA.  Do you wish to proceed despite the risk?\n\nChoose OK to edit anyway.\nChoose Cancel to cancel the edit action." );
}
