(function ($) {
			// map button toggle
			$( ".gmap-btn" ).click(function(){
				$( "#map-btn1" ).toggleClass( "btn-show", "btn-hide", 1000 );
				$( "#map-btn1" ).toggleClass( "btn-hide", "btn-show", 1000 );
				$( "#map-btn2" ).toggleClass( "btn-hide", "btn-show", 1000 );
				$( "#map-btn2" ).toggleClass( "btn-show", "btn-hide", 1000 );
				$( "#map-btn2" ).toggleClass( "close-map-button", "open-map-button", 1000 );
				$( "#map-btn2" ).toggleClass( "open-map-button", "close-map-button", 1000 );
				$( "#map" ).toggleClass( "close-map", "open-map", 1000 );
				$( "#map" ).toggleClass( "open-map", "close-map", 1000 );
				return false;
			});

			var folsom = new google.maps.LatLng(20.672023, -103.370521);
			var markerposition = new google.maps.LatLng(20.672023, -103.370521);

			var marker;
			var map;

			function initialize() {
			  var mapOptions = {
				zoom: 15,
				center: folsom,
                // This is where you would paste any style found on Snazzy Maps.
				styles: [{featureType:"landscape",stylers:[{saturation:0},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:0},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:0},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:0},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:0},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:0},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:0}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:0}]}]
  
			  };

			  map = new google.maps.Map(document.getElementById('google-map'),
					  mapOptions);

			  marker = new google.maps.Marker({
				map:map,
				draggable:true,
				animation: google.maps.Animation.DROP,
				position: markerposition
			  });
			  google.maps.event.addListener(marker, 'click', toggleBounce);
			}

			function toggleBounce() {

			  if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			  } else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			  }
			}

			google.maps.event.addDomListener(window, 'load', initialize);
	
})(jQuery);