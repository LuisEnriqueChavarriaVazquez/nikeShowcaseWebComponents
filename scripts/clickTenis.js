
let carousel = document.getElementById('carousel_container');
let cardWebComponent = document.getElementsByTagName('card-unit');
let card = cardWebComponent[0];
carousel.addEventListener('click', (event) => {
    //Validamos que el elemento clickeado sea solo determinado elemento hijo con su nombre de nodo
    if(event.target.nodeName == "CAROUSEL-UNIT"){
        const elementoClickeadoId = event.target.id;
        card.setAttribute('id', elementoClickeadoId);
    }
})