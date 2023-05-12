class carouselUnit extends HTMLElement{
    //Ponemos el contructor
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    //Damos de alta los atributos
    static get observedAttributes(){
        return ['img'];
    }

    //Hacemos la validacion de los atributos
    attributeChangedCallback(attr, oldVal, newVal){
        if(oldVal !== newVal){
            this[attr] = newVal;
        }
    }

    //Hacemos el getTemplate
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <div></div>
            </section>
            ${this.getStyle()}
        `;
        return template;
    }

    getStyle(){
        return `
            <style>
                :host{
                    width: auto;
                    height; auto;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                :host section{
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                    background-color: #fff;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding: 5px;

                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }
                
                @media screen and (max-width: 800px) {
                    :host section{
                        width: 100px;
                        height: 100px;
                    }
                }

                :host section:hover{
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                }

                :host section div{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;

                    background-image: url('${this.img}');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
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

customElements.define("carousel-unit", carouselUnit);