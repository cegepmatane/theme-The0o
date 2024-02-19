import Square from './Square.js'
import React,{Component} from 'react';
import { MainFonction } from './Main.js';
import '../index.css'

export default class App extends Component {
  componentDidMount () {
    this.launch()
  }
  launch() {
    new MainFonction()
  }
  render() {
    return (
    <section id='contenaire'>
      <Square />
      <div id="metadonnees">
        <div id="argentJoueur"></div>
        <div id="tricheArgent">
          <div id="selectionJoueur">
            <p><b>-</b></p>
            <p>Joueur 1</p>
            <p><b>+</b></p>
          </div>
          <input id="argentTricheJoueur" />
          <button id="boutonValiderTriche">Valider</button>
        </div>
      </div>
    </section>
    )
  }
}