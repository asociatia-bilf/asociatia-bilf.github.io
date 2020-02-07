function resize ( mobile )
{


	if ( typeof mobile != 'undefined' && mobile == true )
	{ mobile = true; }
	else
	{ mobile = false; }

	// set breakpoints to 0 for initial load
	var lastBreakpoint    = 0;
	var currentBreakpoint = 0;
	var debug             = false;

	$( window ).resize ( function () {
		
		if ( typeof sizewait != 'undefined' )
		{
			
			clearTimeout ( sizewait );
			
		}
		
		sizewait = setTimeout ( function ()
		{
			
			if ( mobile )
			{
				
				$('.resize-background-video').addClass('resize-background');
				
			}
			
			// define new breakpoint
			if ( $( window ).width () >= 0 )
				currentBreakpoint = 500;
			
			if ( $( window ).width () >= 500 )
				currentBreakpoint = 1000;

			if ( $( window ).width () >= 1000 )
				currentBreakpoint = 2000;
			
			// if there's a new breakpoint do shit
			if ( lastBreakpoint != currentBreakpoint )
			{
				
				if ( debug )
					console.log ( "Handler for .resize() called. Breakpoint: " + currentBreakpoint );
				
				lastBreakpoint = currentBreakpoint;
				
				// foreach img tag
				$( '.resize-image' ).each ( function () {
					
					if ( typeof $( this ).data( 'imagesource' ) !== 'undefined' )
					{
						
						var newImage = $( this ).data( 'imagesource' ).replace( '/image/upload/', '/image/upload/w_' + currentBreakpoint + ',' );
						
						$( this ).attr( 'src', newImage );
						
						if ( debug )
							console.log ( newImage );
						
					}

				});
				
				// foreach background image
				$( '.resize-background' ).each ( function () {
					
					if ( typeof $( this ).data( 'imagesource' ) !== 'undefined' )
					{
						

						if ( $( this ).hasClass ( 'has-overlay' ) )
						{

							$( this ).css({
								"background": "rgba(0,0,0,0.25)",
								"background-image": ""
							});
							
							var newImage = $( this ).data( 'imagesource' ).replace( '/image/upload/', '/image/upload/w_' + currentBreakpoint + ',' );
							
							$( this ).parent().css({
								"background": "url(" + newImage +")",
								"background-size":  "cover, cover",
								"background-position": "center, center"
							});

						}
						else
						{

							var newImage = $( this ).data( 'imagesource' ).replace( '/image/upload/', '/image/upload/w_' + currentBreakpoint + ',' );
							$( this ).css( 'backgroundImage', 'url(' + newImage + ')' );

						}
						
						
						if ( debug )
							console.log ( newImage );

					}
					
				});
				
				// foreach gallery image
				$( '.resize-gallery' ).each ( function () {
					
					if ( typeof $( this ).data( 'imagesource' ) !== 'undefined' )
					{						

						var newImage = $( this ).data( 'imagesource' ).replace( '/image/upload/', '/image/upload/w_' + currentBreakpoint + ',' );
						
						$( this ).attr( 'href', newImage );
						
						if ( debug )
							console.log ( newImage );
                        
					}
					
				});

			}
		
		} , 250 );
		
	}).resize ();
}