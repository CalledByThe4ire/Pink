"use strict";

  function initMap() {
    var myLatLng = {lat: 59.9387942, lng: 30.3230833};
    var LatCenter = {lat: 59.9397940, lng: 30.3230833};

    var mapOptions = {
      zoom: 15,
      center: LatCenter
    };

    var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var markerImage = {
      url: isIE11 ? "img/icon-map-marker.png" : "img/icon-map-marker.svg",
      size: new google.maps.Size(100, 100),     // original size you defined in the SVG file
      scaledSize: new google.maps.Size(35, 35), // desired display size
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20, 20),
      optimized: false,
      zIndex: 1
    };

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: markerImage,
      title: "HTML Academy"
    });

    google.maps.event.addDomListener(window, 'resize', function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center)
    });

    marker.setMap(map);
  }
