L.mapbox.accessToken = 'pk.eyJ1Ijoic3ViZXlkb28iLCJhIjoiY2ltY2poMmlkMDAwa3Uxa2t5Nm03M3MxcCJ9.GihQckRyoRaxqVLW1RbQyg';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([29.632599, -95.594004], 15);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.keyboard.disable();
map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -95.594004,
          29.632599 
        ]
    },
    properties: {
        title: 'UI to UX',
        description: '10701 Corporate Drive, Suite #209, Stafford, TX 77477',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'building'
    }
}).addTo(map);
