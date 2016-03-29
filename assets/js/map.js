L.mapbox.accessToken = 'pk.eyJ1Ijoic3ViZXlkb28iLCJhIjoiY2ltY2s3bms5MDAwd3UxbHZyYzNtOHZoOCJ9.gEzvf79UKrvwKglhSRlLFg';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([29.63, -95.59], 15);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.keyboard.disable();
map.scrollWheelZoom.disable();

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -95.59,
          29.63 
        ]
    },
    properties: {
        title: 'Peregrine Espresso',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'building'
    }
}).addTo(map);