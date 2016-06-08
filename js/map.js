(function() {
  "use strict";

  google.maps.event.addDomListener(window, 'load', init);

  var location = new google.maps.LatLng(38.903027, -77.02438);

  function init() {
    var mapOptions = {
      zoom: 15,
      center: location,
      disableDefaultUI: true,
      scrollwheel: false,

      // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#d3d3d3"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "color": "#808080"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b3b3b3"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "weight": 1.8
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#d7d7d7"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ebebeb"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a7a7a7"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#efefef"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#696969"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#737373"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#d6d6d6"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {}, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#dadada"
            }]
        }]
    };

    var contentString = '<div id="content">' +
      '<div id="siteNotice">'+
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading">Marriott Marquis Washington, DC</h1>' +
      '<div id="bodyContent">' +
      '<p><strong>June 12 - 17</strong></p>' +
      '<p>This conference hotel is a 6-minute walk from the Mt Vernon Sq/7th St-Convention Center Metro station and 0.7 miles from the White House.</p>' +
      '<p><a href="http://www.marriott.com/hotels/travel/wasco-marriott-marquis-washington-dc/">Hotel Website</a></p>' +
      '</div>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);
    var image = '/img/marker.png';
    var marker = new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.DROP,
        map: map,
        title: "Marriott Marquis Washington, DC",
        icon: image
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }

}());
