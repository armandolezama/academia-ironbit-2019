import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      isPlaying: { type: Boolean }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.isPlaying = false;
  }

  render() {
    return html`
       <paper-card>
        <div class="card-content">
          <h3>Artist-Song</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0vRXmXQa3iFkr9Ie2mvIKcCbojmu4MS-HUoitGgUx5_q9jvgkQ&s">
        </div>
        <div class="card-actions">
        <audio id="myAudio" src="http://www.sousound.com/music/healing/healing_01.mp3" preload="auto"></audio>
        <button @click="${this.playSong}"><iron-icon icon="vaadin:play-circle-o"></iron-icon></button>
        </div>
      </paper-card>
      `;
    }
  playSong(){
    const myAudio=  document.getElementById("myAudio");
    if (this.isPlaying) {
      myAudio.pause()
    } else {
      myAudio.play();
    }
    myAudio.onplaying = ()=> this.isPlaying = true;
    
      
    myAudio.onpause = ()=> this.isPlaying = false;
    
     
  }
  
}

window.customElements.define("player-component", PlayerComponent);
