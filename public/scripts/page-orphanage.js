const options = {
    dragging : false,
    touchZoom : false,
    doubleClickZoom : false,
    scrollWheelZoom : false,
    zoomControl : false
};

// Pegar valores do HTMl
const lat = document.querySelector( "span[data-lat]" ).dataset.lat;
const lng = document.querySelector( "span[data-lng]" ).dataset.lng;

// Criar mapa
const map = L.map( "mapid", options ).setView( [lat, lng], 15 );

// Criar e adicionar Tile Layer
L.tileLayer( "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ).addTo( map );

// Criar ícone
const icon = L.icon({
    iconUrl : "/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor : [29, 68],
    popupAnchor : [170, 2]
});


// Criar e adicionar marker
L.marker( [lat, lng], {icon : icon} ).addTo( map );


/** Galeria Imagens
 * - remover todas as classes '.active'
 * - selecionar a imagem clicada
 * - atualizar o container de imagem
 * - adicionar a classe '.active' para o botão clicado
 */
function selectImage( event )
{
    const currentButton = event.currentTarget;

    const buttons = document.querySelectorAll( ".images button" );
    buttons.forEach(( button ) => {
        button.classList.remove( "active" );
    });

    const image = currentButton.children[0];
    const imageContainer = document.querySelector( ".orphanage-details > img" );

    imageContainer.src = image.src;

    currentButton.classList.add( "active" );
}