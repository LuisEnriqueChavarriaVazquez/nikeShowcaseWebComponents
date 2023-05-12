class cardUnit extends HTMLElement{
    //Ponemos el contructor
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    //Damos de alta los atributos
    static get observedAttributes(){
        return ['id'];
    }

    //Hacemos la validacion de los atributos
    attributeChangedCallback(attr, oldVal, newVal){
        if(oldVal !== newVal){
            this[attr] = newVal;
            //En caso de que los elementos se actulizen hago render
            this.render();
        }
    }

    //Obtenemos la data
    getData(){
        let datos = data[this.id];
        return datos;
    }

    //Hacemos el getTemplate
    getTemplate(){
        //Obtenemos los datos con el id
        const datos = this.getData();
        //Creamos el tamplate
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <div class="imageContainer">
                    <span class="tenisBrand">Nike</span>
                    <div class="tenisImage"></div>
                </div>
                <div class="tenisInfo">
                    <div class="tenisName">${datos.title}</div>
                    <p class="tenisCollection">${datos.collection}</p>
                    <p class="tenisDesc">${datos.description}</p>
                    <div class="containerBuy">
                        <p class="tenisPrice">${"$" + datos.price}</p>
                        <div class="tenisButton">Buy now</div>
                    </div>
                </div>
            </section>
            ${this.getStyle()}
        `;
        return template;
    }

    getStyle(){
        //Obtenemos los datos con el id
        const datos = this.getData();
        return `
            <style>
                :host section{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: auto;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    box-shadow: 0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.12);
                }

                @media screen and (max-width: 800px) {
                    :host section{
                        grid-template-columns: 1fr;
                    }
                }

                :host section .imageContainer{
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                    font-weight: 800;
                    color: rgba(0,0,0,.2);
                    border-radius: 10px 0 0 10px;
                    background-color: ${datos.color};
                }

                @media screen and (max-width: 800px) {
                    :host section .imageContainer{
                        padding: 10px 20px;
                        height: 100px;
                        border-radius: 10px 10px 0 0;
                    }
                }

                :host section .imageContainer span{
                    font-size: 7rem;
                }

                @media screen and (max-width: 800px) {
                    :host section .imageContainer span{
                        font-size: 5rem;
                    }
                }

                :host section .imageContainer .tenisImage{
                    width: 150%;
                    height: 100%;
                    background-image: url('${datos.img}');
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    transform: scaleX(-1) rotate(25deg);

                    position: relative;
                    top: -90px;
                    left: -125px;
                }

                @media screen and (max-width: 800px) {
                    :host section .imageContainer .tenisImage{
                        width: 80%;
                        height: 250px;
                        transform: scaleX(-1) rotate(0deg);
    
                        position: relative;
                        top: -100px;
                        left: 40px;
                    }
                }

                @media screen and (max-width: 500px) {
                    :host section .imageContainer .tenisImage{
                        width: 70%;
                        height: 150px;
                        top: -80px;
                        left: 105px;
                    }
                }

                @media screen and (max-width: 350px) {
                    :host section .imageContainer .tenisImage{
                        width: 90%;
                        height: 130px;
                        top: -55px;
                        left:10px;
                    }
                }

                .tenisInfo{
                    width: 100%;
                    height: 100%;
                    padding: 20px 30px 20px 30px;
                    box-sizing: border-box;
                }

                @media screen and (max-width: 800px) {
                    .tenisInfo{
                        width: 100%;
                        height: auto;
                        padding: 0px 20px 0 20px;
                    }
                }

                .tenisInfo p{
                    margin: 0;
                }

                .tenisName{
                    height: auto;
                    width: 100%;
                    text-align: left;
                    font-size: 3.3rem;
                    font-weight: 800;
                    margin-top: 25px; 
                }

                @media screen and (max-width: 800px) {
                    .tenisName{
                        margin-top: 0px; 
                    }
                }

                @media screen and (max-width: 500px) {
                    .tenisName{
                        font-size: 2.7rem;
                    }
                }

                .tenisCollection{
                    font-size: 1.3rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #666666;
                }

                .tenisDesc{
                    height: 140px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    padding-top: 20px;
                    padding-left: 35px;
                }

                @media screen and (max-width: 800px) {
                    .tenisDesc{
                        height: auto;
                        font-size: 1.1rem;
                        font-weight: 600;
                        padding-top: 20px;
                        padding-left: 0;
                    }
    
                }

                .containerBuy{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto;
                    gap: 10px;
                    margin-top: 20px;
                }

                @media screen and (max-width: 500px) {
                    .containerBuy{
                        grid-template-columns: 1fr;
                    }
                }

                .tenisPrice{
                    font-size: 3rem;
                    font-weight: 800;
                    color: #a3a3a3;
                }

                .tenisButton{
                    padding: 0 20px;
                    font-size: 1.3rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    background-color: ${datos.color};
                    transition: all .2s ease;
                    cursor: pointer;
                }

                @media screen and (max-width: 500px) {
                    .tenisButton{
                        height: 40px;
                    }
                }

                .tenisButton:hover{
                    background-color: #ececec;
                    color: ${datos.color};
                    font-weight: 900;
                }
            </style>
        `;
    }

    render(){
        //Si ya hay elementos viejos los borro, para renderizar lo nuevo
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("card-unit", cardUnit);