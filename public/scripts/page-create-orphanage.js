// Create Map
const map = L.map( "mapid" ).setView( [-15.6027963, -56.1327712], 16 );

// Create & Add tileLayer
L.tileLayer( "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ).addTo( map );

// Create Icon
const icon = L.icon({
    iconUrl : "/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor : [29, 68]
});


// Create & Add marker
/**
 * - pegar latitude e longitude aonde teve o evento de clique
 * - pegar os inputs escondido com nomes lat e lng, que recebe os valores de latitude e longitude
 * - remover icon da layer caso o marker não estiver vazio
 * - adicionar icon no layer
 */

let marker;

map.on("click", ( event ) => {
    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector( "[name=lat]" ).value = lat;
    document.querySelector( "[name=lng]" ).value = lng;

    marker && map.removeLayer( marker );
    marker = L.marker( [lat, lng], {icon} ).addTo( map );
});


// Adicionar campos de fotos
/**
 * - pegar container de fotos #images
 * - pegar o container para duplicar .new-upload
 * - realizar o clone da última imagem adicionada
 * - verificar se o campo está vazio, se sim, não adicionar ao container #images
 * - limpar campo antes de adicionar ao container #images
 * - adicionar o clone ao container de #images
 */
function addPhotoField()
{
    const container = document.querySelector( "#images" );
    const fieldsContainer = document.querySelectorAll( ".new-upload" );
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode( true );

    if( newFieldContainer.children[0].value == "" ) return;

    newFieldContainer.children[0].value = "";
    container.appendChild( newFieldContainer );
}

// Remover campos de fotos
/**
 * - pegar o icone span do 'x'
 * - pegar container com classe '.new-upload'
 * - verificar se existe apenas um container para remover
 * - limpar o valor do container '.new-upload'
 * - remover container por inteiro
 */
function deleteField( event )
{
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll( ".new-upload" );

    if( fieldsContainer.length <= 1 ) 
    {
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

// Seleção do botão 'sim' e 'não'
/**
 * - retirar a classe .active dos botões
 * - pegar o botão clicado
 * - verificar se é 'sim' ou 'não'
 * - atualizar o meu input hidden com o valor selecionado
 * - colocar a classe .active
 */
function toggleSelect( event )
{
    document.querySelectorAll( ".button-select button" )
    .forEach( button => {
        button.classList.remove( "active" );
    });

    const currentButton = event.currentTarget;
    currentButton.classList.add( "active" );

    const input = document.querySelector( "[name=open-on-weekends]" );
    
    input.value = currentButton.dataset.value;
}