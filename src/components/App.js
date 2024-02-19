import Square from './Square.js'
import React,{Component} from 'react';
import { MainFonction } from './Main.js';
import '../index.css'
import { listeJoueur } from "../index.js"

export default class App extends Component {
  constructor() {
    super()  
    this.positionJoueur = 0;
    this.changementJoueurAvant = this.changementJoueurAvant.bind(this);
    this.changementJoueurApres = this.changementJoueurApres.bind(this);
    this.ajouterArgent = this.ajouterArgent.bind(this);
  }

  componentDidMount () {
    this.launch()
  }
  launch() {
    new MainFonction()
  }

  changementJoueurAvant() {
    if (this.positionJoueur === 0) {
      this.positionJoueur = listeJoueur.length - 1;
    } else {
      this.positionJoueur--;
    }
    document.getElementById("selectionJoueurTricheNom").innerText = listeJoueur[this.positionJoueur].nom;
  }

  changementJoueurApres() {
    if (this.positionJoueur === listeJoueur.length - 1) {
      this.positionJoueur = 0;
    } else {
      this.positionJoueur++;
    }
    document.getElementById("selectionJoueurTricheNom").innerText = listeJoueur[this.positionJoueur].nom;
  }

  ajouterArgent() {
    listeJoueur[this.positionJoueur].argent += parseInt(document.getElementById("argentTricheJoueur").value)
    document.getElementById("argentJoueur" + this.positionJoueur).innerText = listeJoueur[this.positionJoueur].nom + "\n" + listeJoueur[this.positionJoueur].argent;
    console.log(listeJoueur)
  }

  render() {
    return (
      <section id='contenaire'>
        <Square />
        <div id="metadonnees">
          <div id="argentJoueur"></div>
          <div id="tricheArgent">
            <div id="selectionJoueur">
              <p onClick={this.changementJoueurAvant}><b>-</b></p>
              <p id="selectionJoueurTricheNom">Joueur 1</p>
              <p onClick={this.changementJoueurApres}><b>+</b></p>
            </div>
            <input id="argentTricheJoueur" />
            <button id="boutonValiderTriche" onClick={this.ajouterArgent}>Valider</button>
          </div>
        </div>
      </section>
    )
  }
}
