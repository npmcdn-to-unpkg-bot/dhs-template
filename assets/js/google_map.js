// Initializations
function init() {
                var mapStyles =
                    [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];

                var mapOptions = {
                    center: {lat: 48.46034404, lng: 35.021935},
                    zoom: 5,
                    draggable: true,
                    fullscreenControl: true,
                    scrollwheel: false,
                    signInControl: false,
                    styles: mapStyles
                };

                var markers = [];
                var mapDiv = document.getElementById('google_map');
                var map = new google.maps.Map(mapDiv, mapOptions);


                addMarker({lat: 48.36034404, lng: 35.03243923}, map );
                addMarker({lat: 48.46034404, lng: 35.03243923}, map );
                addMarker({lat: 48.16034404, lng: 35.03243923}, map );
                addMarker({lat: 48.06034404, lng: 35.03243923}, map );
                addMarker({lat: 48.06034404, lng: 34.03243923}, map );
                addMarker({lat: 48.0123034404, lng: 34.03243923}, map );

                var infowindow = new google.maps.InfoWindow({
                    content:"DHS.COM.UA"
                });


                google.maps.event.addListener(markers[1], 'click', function() {
                    infowindow.open(map, markers[1]);
                });

                var partners = document.getElementById('partners-list');

                partners.addEventListener('click', zoom);

                function zoom(e) {
                    var target = e.target;

                    var zoomId = Number( target.getAttribute('data-zoom') );

                    if (!zoomId) return;

                    infowindow.open(map, markers[zoomId-1]);

                    map.setCenter(markers[zoomId-1].getPosition());
                    smoothZoom(map, 12, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
                }

                function smoothZoom (map, max, cnt) {
                    if (cnt >= max) {
                        return;
                    }
                    else {
                        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
                            google.maps.event.removeListener(z);
                            smoothZoom(map, max, cnt + 1);
                        });
                        setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
                    }
                }


    // Adds a marker to the map.
                function addMarker(location, map) {
                    // Add the marker at the clicked location, and add the next-available label
                    // from the array of alphabetical characters.
                    var marker1 = new google.maps.Marker({
                        position: location,
                        label: 'ABC',
                        map: map
                    });

                    markers.push(marker1);
                }


            }


google.maps.event.addDomListener(window, 'load', init);
//$(document).ready(init.ready);
