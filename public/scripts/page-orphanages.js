// Create Map
const map = L.map( "mapid" ).setView( [-15.6027963, -56.1327712], 16 );

// Create & Add tileLayer
L.tileLayer( "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ).addTo( map );

// Create Icon
const icon = L.icon({
    iconUrl : "/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor : [29, 68],
    popupAnchor : [170, 2]
});


/** Adicionar Marker no mapa através dos dados
 * - criar uma popup no mapa
 * - criar e adicionar marker
 */
function addMarker( {id, name, lat, lng} )
{
    const popup = L.popup({
        closeButton : false,
        className : "map-popup",
        minWidth : 240,
        minHeight : 240
    }).setContent( `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>` );

    L.marker( [lat, lng], {icon : icon} ).addTo( map ).bindPopup( popup );
}

const orphanagesSpan = document.querySelectorAll( ".orphanages span" );

orphanagesSpan.forEach( span => {
    
    const orphanage = {
        id : span.dataset.id,
        name : span.dataset.name,
        lat : span.dataset.lat,
        lng : span.dataset.lng
    };

    addMarker( orphanage );
});