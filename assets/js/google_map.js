// Initializations
var google = {
        init: function()
            {
                var mapStyles =
                    [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];

                var mapOptions = {
                    center: {lat: 48.46034404, lng: 35.021935},
                    zoom: 16,
                    draggable: true,
                    fullscreenControl: true,
                    scrollwheel: false,
                    signInControl: false,
                    styles: mapStyles,
                    disableDefaultUI: true
                };

                var mapDiv = document.getElementById('google_map');
                var map = new google.maps.Map(mapDiv, mapOptions);

                var marker = new google.maps.Marker({
                    position: {lat: 48.46034404, lng: 35.03243923},
                    map: map,
                    animation: google.maps.Animation.DROP,
                });

                var infowindow = new google.maps.InfoWindow({
                    content:"DHS.COM.UA"
                });

                infowindow.open(map,marker);

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
            }
};

var init = {
    ready: function() {
        google.init();
    }
};

$(document).ready(init.ready);
