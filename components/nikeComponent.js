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

                :host section .imageContainer span{
                    font-size: 7rem;
                }

                :host section .imageContainer .tenisImage{
                    width: 170%;
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

                .tenisInfo{
                    width: 100%;
                    height: 100%;
                    padding: 20px 30px 20px 30px;
                    box-sizing: border-box;
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

                .tenisCollection{
                    font-size: 1.3rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #666666;
                }

                .tenisDesc{
                    font-size: 1.2rem;
                    font-weight: 600;
                    padding-top: 20px;
                    padding-left: 35px;
                }

                .containerBuy{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto;
                    gap: 10px;
                    margin-top: 20px;
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
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("card-unit", cardUnit);