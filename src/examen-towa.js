import { LitElement, html} from 'lit-element';

class ExamenTowa  extends LitElement {

    static get properties() {
        return {
            myPropertie:{
                type: Number,
                hasChanged(newValue,oldValue){
                    if(newValue%2===0){
                        return newValue+2
                    }else{
                        return newValue
                    }
                }
            }
        };
    }

  render() {
        return html`
            <h1>Mi componente</h1>
            <span>${this.myPropertie}</span>   
        `;
    }

}
customElements.define('examen-towa', ExamenTowa);