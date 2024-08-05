var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "page.css";
link.type = "text/css";
link.rel = "stylesheet";


document.getElementsByTagName( "head" )[0].appendChild( link );