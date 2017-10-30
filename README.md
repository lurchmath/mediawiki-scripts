
# MediaWiki Scripts for Lurch

[The Lurch Project](https://github.com/lurchmath/lurch) will run on a web
server that also runs an instance of MediaWiki.  The main Lurch application
will be able to export files to the wiki as pages, as a means of publishing
them.  It will also be able to import pages from the wiki for editing.

To facilitate this, some scripts needed to be added to the MediaWiki UI.
This repository records those changes, so that in the event that the original
files on our server were inadvertently delted, they would still be accessible
here.

 * `MediaWiki:Common.js` is a special page on the wiki that contains script
   code imported into all wiki pages.  Our extensions to it are recorded
   [in this file in this repository](Common.js).

