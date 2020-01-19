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


	function js( name ){	
		var d = new Date();
		var seconds = Math.round(d.getTime() / 1000);
		var script = document.createElement('script');
		
		script.setAttribute("type", "text/javascript");
		script.setAttribute("src", name + '?t=' + seconds );
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	
/******************************************************************************/

	var Exec = function(){
		
		// DECORATION
		//**********************************
		$( '<div class="flare"></div>' ).appendTo('body').css({'top':'-20%','left':'5vw','width':'500px','height':'500px'});
		$( '<div class="flare"></div>' ).appendTo('body').css({'top':'10%','right':'5vw','width':'200px','height':'200px'});	
		$( '<div class="flare"></div>' ).appendTo('body').css({'top':'20%','right':'10vw','width':'250px','height':'250px'});	
		
		// SHOW PAGE
		//**********************************	
		$( 'body' ).fadeIn( 500 );
		
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
			
			$('nav ul li a').each( function(index) {
				var elem = $(this);
				var href = elem.attr('href');
			
				if( elem.attr('href') != undefined){
					elem.unbind().click( function(){ 
						window.location.hash = href;					
					});
					
					href = href.replace("#", "");
					elem.addClass( href.replace(/\//g, '') );
					elem.removeAttr( 'href' );
				}
			}).removeClass( 'selected' );
			
			return false;

		};	

		// ALL ANCHOR TO ONCLICK
		//**********************************		
		let UrlByOnClick = function(){	

			var d = new Date();
			var seconds = Math.round(d.getTime() / 1000);
			var hash = window.location.hash.substr(1);
			
			var result = hash.split('&').reduce(function (result, item) {
				var parts = item.split('=');
				result[parts[0]] = parts[1];
				return result;	
			});
			
			if( !result ) result = 'home';
					
				$('.main').fadeOut( 200 , function(){
					$.ajax({
						url: noCache( "/pages/" + result +"/start.html" ),
					}).done(function( data ) {

						$( '.main' ).html( data ).fadeIn( 200 );
						$( '.title h2' ).text( result );
						$( 'nav .'+result ).addClass( 'selected' );
						
						document.title = result.charAt(0).toUpperCase() + result.slice(1);

					}).fail(function(){
						error( 404 );	
					});
				});

			function error( id ){
				switch ( id ) {
					case 404: console.log( 'Page not found on server' );	break;
					default: null;
				}
			};
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
	
	js('//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');

	try{
		top.Exec();
	}catch(e){
		window.addEventListener("load", function(){
			top.Exec();
			} ,false);
	}




