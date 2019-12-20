import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      status: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.status = 'stop';
  }

  render() {
    return html`
        <audio id="audio" controls @play="${ this.playing }"  @pause="${ this.pause }">
          <source type="audio/mp3" src="../Odisseo-Dias-de-Fuego.mp3">
        </audio>
        
      `;
    }

  playing(event){
    this.status = 'playing';
    this.launchEvent(this.status, event);
  }

  pause(event){
    this.status = 'stop';
  
    this.launchEvent(this.status, event);
  }

  launchEvent(nameEvent, data){
    this.dispatchEvent(new CustomEvent(nameEvent, { detail: data }))
  }
}

window.customElements.define("player-component", PlayerComponent);
