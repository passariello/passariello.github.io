/*
CREATED BY DARIO PASSARIELLO 
copyright (c) 2020

The MIT License (MIT)
Copyright (c) 2020 Dario Passariello
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


/******************************************************************************/
	var d = new Date();
	var seconds = Math.round(d.getTime() / 1000);
    var SendToAnalytics;
	
	document.getElementsByTagName("HTML")[0].style.background = "url(/images/blank.gif) no-repeat center center";
	
/******************************************************************************/
//MOTOMO

/*	
	var _paq = window._paq || [];
	(function(){
		var u="//www.biglogic.ca/stat/";
		_paq.push(['setTrackerUrl', u+'matomo.php']);
		_paq.push(['setSiteId', '7']);
		_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
		_paq.push(["setCookieDomain", "*.https;"]);
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; 
		g.async=true; 
		g.defer=true; 
		g.src=u+'matomo.js'; 
		s.parentNode.insertBefore(g,s);
	})();
	


	let SendToAnalytics = function(){
		_paq.push( ['setCustomUrl', "/#" + window.location.hash.substr(1)]);
		_paq.push( ['trackPageView'] );
	};
*/
		

/******************************************************************************/

    let toggleFullScreen = function() {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

            if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    };

/******************************************************************************/

window.addEventListener('appinstalled', (event) => {
 console.log('installed');
});

if (window.matchMedia('(display-mode: standalone)').matches) {
     console.log('display-mode is standalone');
}

if (window.navigator.standalone === true) {
    console.log('display-mode is standalone');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('service worker installed'))
    .catch(err => console.error('Error', err));
}

/******************************************************************************/

let deferredPrompt;
let btn = document.getElementById('prompt');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.style.display = 'block';
});

btn.addEventListener('click', (e) => {
  btn.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the prompt');
        } else {
            console.log('User dismissed the prompt');
        }
        deferredPrompt = null;
    });
});

/******************************************************************************/

	let iframeSize = function(){

		if ( window.matchMedia('(min-width: 750px)' ).matches) {		
			//$( "iframe" ).css({"width": "100%","height":"400px"});
			$( "article ul" ).css({"columns": "2","-webkit-columns":"2","-moz-columns":"2"});
		} else {
			//$( "iframe" ).css({"width": "100%","height":"350px"});
			$( "article ul" ).css({"columns": "1","-webkit-columns":"1","-moz-columns":"1"});
		}
				
	};	

	
/******************************************************************************/

	let js = function( name ){
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; g.async=true; g.defer=true; g.src = name + '?t=' + seconds; 
		s.parentNode.insertBefore(g,s);
	};

/******************************************************************************/

	let css = function( name , media , id ){
		var d=document, g=d.createElement('link'), s=d.getElementsByTagName('link')[0];
		g.rel='stylesheet'; g.type='text/css'; g.id=id; g.media=media; g.href = name + '?t=' + seconds; 
		s.parentNode.insertBefore(g,s);
	};
	
/******************************************************************************/

	let DisableSelect = function(e){
		
		$( document ).each( function(i){

			$(this)
			.css("MozUserSelect","none")
			.css("WebKitUserSelect","none");
			
			$(this).prop('unselectable','on');
			$(this).focus();

			$(this).on("select" ,function(){ return false; });
			$(this).on("selectstart" , function(){ return false; });
			
			this.onselectstart = new Function( "return false" );
			this.oncontextmenu = new Function( "return false" );
			
			$('img, input, button, a').on('dragstart', function(e) { e.preventDefault(); });
			
		});
		
		return false;

	};

	this.addEventListener('mousedown',function(e){ DisableSelect(); }, false);
	
/******************************************************************************/	
	
	let CustomScroll = function(){
	
		$( '*' ).css({	
			'scrollbar-width': 'thin',
			'scrollbar-color': '#444 transparent',
			'scroll-behavior': 'smooth'
		});	
		
		$( '*::-webkit-scrollbar' ).css({	
			'width':'4px',
			'height':'4px',
			'scroll-behavior': 'smooth'
		});	
		
		$( '*::-webkit-scrollbar-thumb' ).css({	
			'background':'#444'
		});
		
		$( '*::-webkit-scrollbar-track' ).css({	
			'background': 'transparent',
			'margin':'3px 3px'
		});
	
	};

/******************************************************************************/

	 js( '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js' );
	css( '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css' , 'all' , '' );	 
	css( '//fonts.googleapis.com/css?family=Lato&display=swap' , 'all' , '' );
	css( '//fonts.googleapis.com/css?family=Poppins&display=swap' , 'all' , '' );
	
/******************************************************************************/	

	var Exec = function(){
        
        $('.banner').css({
            'width':'100%',
            'height':'auto'
        });
		
		// DECORATION
		/******************************************************************************/
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'-20%','left':'5vw','width':'500px','height':'500px','z-index':'1'});
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'10%','right':'5vw','width':'200px','height':'200px','z-index':'1'});	
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'20%','right':'10vw','width':'250px','height':'250px','z-index':'1'});

		// SHOW PAGE
		/******************************************************************************/	
		$( '.container' ).fadeIn( 500 );
		
		// IMAGE AS HOMEPAGE
		$('.avatar').unbind().mouseup(function(){
			window.location.hash = "/home/";
		});
		
		// GLOBAL SETUP
		/******************************************************************************/
		let time = d.getTime();

		// EVENT SETUP
		/******************************************************************************/
		if (!e) var e = window.event;

		// RANDOM TIME
		/******************************************************************************/
		let tmr = function(){
			return Math.round( time / 1000);
		};
		
		// RANDOM NUMBER
		/******************************************************************************/
		let rnd = function(){
			return Math.random()*123456789;
		};

		// NOCACHE
		/******************************************************************************/
		let noCache = function( uri ){
			return uri.concat(/\?/.test( uri )?'&':'?','t=', tmr() ,'.', rnd() );
		};

		// ALL ANCHOR TO ONCLICK
		/******************************************************************************/
		let AllAnchorToOnClick = function( item ){
		
			$( item ).each( function() {
				
				var elem = $( this );
				var href = elem.attr( 'href' );
				
				if( href !== undefined){
					
					elem.unbind().mouseup( function(){ 
						window.location.hash = "/" + href;				
					});
					
					href = href.replace("/#/" , "");
					elem.addClass( href.replace(/\//g, '') );
					elem.removeAttr( 'href' );
						
				}
			}).removeClass( 'selected' );

			delete item;
			return false;
			
		};	

		// ALL ANCHOR TO ONCLICK
		/******************************************************************************/		
		let UrlByOnClick = function(){	

			$('<div class="loader"><i></i></div>').appendTo( 'body' );

			var page = $('.page');
			var d = new Date();
			var seconds = Math.round(d.getTime() / 1000);
			var result = window.location.hash.substr(1);
			
			if (result.indexOf('?') > -1) window.location.hash = "/home/";	
			if (result.indexOf('#') > -1) window.location.hash = "/home/";	
			
			if( !result ) result = 'home';
			
			result = result.replace("/" , "");			
			result = result.replace("!" , "");	
			
			var query = result.split('/');
			
			/*css( "/pages/" + result +"/style.css",'all','' );*/
			
				var current_height = $('.container').outerHeight();
				$('.container').css("min-height", current_height);
			
				page.fadeOut( 500 , function(){
					
					$.ajax({
						url: noCache( "/pages/" + result +"start.html" )
					}).done(function( data ) {
						
						$('.container').css("min-height", 0);
						
						page
						.hide()
						.html( data )
						.fadeIn( 500 , function(){ $( '.loader' ).fadeOut( 500 ); });

						iframeSize();
						
						$('body').fadeIn( 500 , function(){			
							$( '.loader' ).fadeOut( 500 );														
						});
						
						$( 'html, body, .page' ).animate({ scrollTop: "0" }, 500);												
						
						$( '#shownavinput' ).prop('checked', false);

						$( '.title h2' ).text( query[0] );
						$( 'nav .' + query[0] ).addClass( 'selected' );
						
						document.title = "Dario Passariello | " + query[0].charAt(0).toUpperCase() + result.slice(1).replace(/\//g,"");
						$('body').css({"display":"block"}).fadeTo(0,1);
						
						
						
					}).fail(function(){
						
						error( result, 404 );	
						
					});
								
				});
				
			delete page;
			delete query;
			delete result;
			delete current_height;
			delete document;
			
			if( typeof SendToAnalytics === "function" ) SendToAnalytics(); 

		};
		
		/******************************************************************************/
		
		let error = function( page, error ){

		var uri;
			
			switch ( error ) {	
				case 404: uri = 404; break;
				default: null;
			}
			
			console.log( 'Page ' + page + ' not found on server' ); 
			document.title = "Dario Passariello - Error " + error + ", page " + page + " not found on server";
			$( '.title h2' ).text( error );
			
				$.ajax({ url: noCache( "/pages/errors/" + uri + ".html" )}).done(function( data ) {				
					$( '.page' ).html( data ).fadeIn( 200 );
					$('body').fadeIn( 500 , function(){						
						$( '.loader' ).fadeOut( 500 );
					});
				});
				
			delete page;
			delete error;
			delete uri;
			
		};
		
		// CHANGE HASH
		/******************************************************************************/
		
		$( window ).bind( 'hashchange', function(e) {
			AllAnchorToOnClick( 'nav li a' );
			UrlByOnClick();
		}).on( 'resize', function(){ 
			iframeSize(); 
		});
		
		// FIRST TRIGGER
		/******************************************************************************/
		
		$( document ).trigger( 'hashchange' );
		
		iframeSize();
		CustomScroll();
		
	};
		
	/**************************************************************************/
	/**************************************************************************/
	/**************************************************************************/
	/**************************************************************************/
	
	// WHEEL
	/**************************************************************************/
	
	document.addEventListener('wheel', function( evt ) {
	  //console.log( 'nothing for now' );
	}, {
	  capture: true,
	  passive: true
	});

	// WINDOW BEFORE UNLOAD
	/**************************************************************************/
	
	window.addEventListener('beforeunload', function (e){
		
		//e.preventDefault();
		//e.returnValue = '';	
		
	});

	// WINDOW OFF SCREEN BUFFER
	/**************************************************************************/
	
	window.offScreenBuffering = true;

	// WINDOW ANIMATION
	/**************************************************************************/
	
	window = (function(){
		
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( callback ){ 
			window.setTimeout( callback, 1000 / 25 ); 
		};
		
	})();
	
	/**************************************************************************/
	
	window.addEventListener( "load" , function(){ 
		Exec(); 
	});
		
	/**************************************************************************/
	
	

	