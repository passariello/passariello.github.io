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
	
//********************************************************************************************

	//MOTOMO

	let SendToAnalytics = function(){
		_paq.push( ['setCustomUrl', "/#" + window.location.hash.substr(1)]);
		_paq.push( ['trackPageView'] );
	};
		
*/

/******************************************************************************/
	
	document.getElementsByTagName("HTML")[0].style.background = "url(/images/blank.gif) no-repeat center center";
	
/******************************************************************************/

	let iframeSize = function(){
		$(".about ul").css({"columns": "2","-webkit-columns":"2","-moz-columns":"2"});

		if (window.matchMedia('(min-width: 750px)').matches) {		
			$("iframe").css({"width": "100%","height":"400px"});
			$(".about ul").css({"columns": "2","-webkit-columns":"2","-moz-columns":"2"});
		} else {
			$("iframe").css({"width": "100%","height":"350px"});
			$(".about ul").css({"columns": "1","-webkit-columns":"1","-moz-columns":"1"});
		}
				
	};	

	
/******************************************************************************/

	let js = function( name ){
		var d = new Date();
		var seconds = Math.round(d.getTime() / 1000);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; g.async=true; g.defer=true; g.src = name + '?t=' + seconds; 
		s.parentNode.insertBefore(g,s);
	};

/******************************************************************************/

	let css = function( name , media , id ){
		var d = new Date();
		var seconds = Math.round(d.getTime() / 1000);
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
			
			$('img').on('dragstart', function(e) { e.preventDefault(); });
			
		});
		
		return 

	};

	this.addEventListener('mousedown',function(e){DisableSelect();}, false);

	
/******************************************************************************/

	var Exec = function(){
		
		// SCROLLBAR
		//**********************************
		
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
		
		// DECORATION
		//**********************************
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'-20%','left':'5vw','width':'500px','height':'500px','z-index':'1'});
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'10%','right':'5vw','width':'200px','height':'200px','z-index':'1'});	
		$( '<div class="flare"></div>' ).appendTo('#background').css({'top':'20%','right':'10vw','width':'250px','height':'250px','z-index':'1'});

		
		
		// SHOW PAGE
		//**********************************	
		$( '.container' ).fadeIn( 500 );
		
		// IMAGE AS HOMEPAGE
		$('.avatar').click(function(){
			window.location.hash = "/home/";
		});
		
		// GLOBAL SETUP
		//**********************************
		let currentTime = new Date();
		let time = currentTime.getTime();

		// EVENT SETUP
		//**********************************
		if (!e) var e = window.event;

		// RANDOM TIME
		//**********************************
		let tmr = function(){
			return Math.round( time / 1000);
		};
		
		// RANDOM NUMBER
		//**********************************
		let rnd = function(){
			return Math.random()*123456789;
		};

		// NOCACHE
		//**********************************
		let noCache = function( uri ){
			return uri.concat(/\?/.test( uri )?'&':'?','t=', tmr() ,'.', rnd() );
		};

		// ALL ANCHOR TO ONCLICK
		//**********************************	
		let AllAnchorToOnClick = function(){
		
			$('nav li a').each( function(index) {
				var elem = $( this );
				var href = elem.attr( 'href' );
			
				if( elem.attr( 'href' ) != undefined){
					
					elem.unbind().click( function(){ 
						window.location.hash = "/" + href;				
					});
					
					href = href.replace("/#/" , "");
					elem.addClass( href.replace(/\//g, '') );
					//elem.removeAttr( 'href' );
						
				}
			}).removeClass( 'selected' );
			
			return false;

		};	

		// ALL ANCHOR TO ONCLICK
		//**********************************		
		let UrlByOnClick = function(){	

			$('<div class="loader"><i></i></div>').appendTo('html');

			var d = new Date();
			var seconds = Math.round(d.getTime() / 1000);
			var result = window.location.hash.substr(1);
			//console.log( result.replace(/\//g, '') );
			
			if (result.indexOf('?') > -1) window.location.hash = "/home/";	
			if (result.indexOf('#') > -1) window.location.hash = "/home/";	
			
			/*
			var result = hash.split('/').reduce(function (result, item) {
				var parts = item.split('=');
				result[ parts[0] ] = parts[1];
				console.log( result );
				return result;	
			});
			*/

			if( !result ) result = 'home';
			
			result = result.replace("/" , "");			
			result = result.replace("!" , "");	
			
			var parts = result.split('/');
			
			css( "/pages/" + result +"/style.css",'all','' );
			
				var current_height = $('.container').outerHeight();
				$('.container').css("min-height", current_height);
			
				$('.page').fadeOut( 500 , function(){
					
					$.ajax({
						url: noCache( "/pages/" + result +"/start.html" ),
					}).done(function( data ) {
						
						$('.container').css("min-height", 0);
						
						$( '.page' )
						.hide()
						.html( data )
						.fadeIn( 500 , function(){	
							iframeSize();						 
							$( '.loader' ).fadeOut( 500 );							
						});

						$( 'html, body, .page' ).animate({ scrollTop: "0" }, 500);					
						
						//.scrollTop(0);
						
						//.animate({'scrollTop':0},{'duration':1,easing:'swing'});						
						
						$( '#shownavinput' ).prop('checked', false);
												
						$( '.title h2' ).text( parts[0] );
						$( 'nav .' + parts[0] ).addClass( 'selected' );
						
						document.title = "Dario Passariello | page: " + parts[0].charAt(0).toUpperCase() + result.slice(1);
						
					}).fail(function(){
						error( result, 404 );	
					});
					
				});
			
			//SendToAnalytics(); 
			//MOTOMO

		};
		
		//**********************************
		
		let error = function( page, error ){

		var $page;
			
			switch ( error ) {	
				case 404: $page = 404; break;
				default: null;
			}
			
			console.log( 'Page ' + page + ' not found on server' ); 
			document.title = "Dario Passariello - Error " + error + ", page " + page + " not found on server";
			$( '.title h2' ).text( error );
			
				$.ajax({ url: noCache( "/pages/errors/" + $page + ".html" )}).done(function( data ) {
					$( '.page' ).html( data ).fadeIn( 200 );
				});

		};
		
		// CHANGE HASH
		//**********************************	
		$(window).bind( 'hashchange', function(e) {
			AllAnchorToOnClick();
			UrlByOnClick();
		});
		
		// FIRST TRIGGER
		//**********************************	
		$( document ).trigger('hashchange');

	};
	
	/**************************************************************************/
	
			/*
			var video = document.getElementById("myVideo");
			var btn = document.getElementById("myBtn");

			function myFunction() {
				if (video.paused) {
					video.play();
					btn.innerHTML = "Pause";
				} else {
					video.pause();
					btn.innerHTML = "Play";
				}
			}
			*/
			
	/**************************************************************************/
	
	 js( '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js' );
	css( '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css' , 'all' , '' );	 
	css( '//fonts.googleapis.com/css?family=Lato&display=swap' , 'all' , '' );
	css( '//fonts.googleapis.com/css?family=Poppins&display=swap' , 'all' , '' );
		
	
	try{ Exec(); }catch(e){ window.addEventListener("load", function(){ Exec(); } ,false); };