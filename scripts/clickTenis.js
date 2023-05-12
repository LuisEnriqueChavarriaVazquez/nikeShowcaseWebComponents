
let carousel = document.getElementById('carousel_container');
let cardWebComponent = document.getElementsByTagName('card-unit');
let card = cardWebComponent[0];
carousel.addEventListener('click', (event) => {
    const elementoClickeadoId = event.target.id;
    card.setAttribute('id', elementoClickeadoId);
    console.log('card: ', card);
})