var googleMapRender = function() {
  // Settings to style the map; made with google maps style wizrd
  var styleArray = [
    {
      "featureType": "landscape",
      "stylers": [
        { "lightness": 100 }
      ]
    },{
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "on" },
        { "saturation": 60 }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "lightness": 52 },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "lightness": 39 }
      ]
    },{
      "stylers": [
        { "lightness": 27 }
      ]
    },{
      "featureType": "road",
      "stylers": [
        { "saturation": 100 },
        { "color": "#F5AE23" }
      ]
    }
  ];

  // Gets rid of the zoom, pan features; adds style options from styleArray
  var mapOptions = {
    disableDefaultUI: true,
    styles: styleArray
  };

  // Makes `map` a new Google Map JavaScript Object and attaches it to <div id="map">
  var map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  //locationFinder() returns an array of every location string from the view objects: bio, education, and work.
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(view.bio.contacts.location);

    // iterates through school locations and appends each location to the locations array
    for (var school in view.education.schools) {
      locations.push(view.education.schools[school].location);
    }

    // iterates through work locations and appends each location to the locations array
    for (var job in view.work.jobs) {
      locations.push(view.work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {
      // the search request object
      var request = {
        query: locations[place]
      };

      // Searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  var locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

  // Vanilla JS to listen for resizing of the window and adjust map bounds
  window.addEventListener('resize', function(e) {
  // Makes sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
  });
}
$("document").ready(googleMapRender());