import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let listeFuturJoueur = []

ajouterJoueur()
ajouterJoueur()
document.getElementById("ajouterJoueur").addEventListener("click", () => {ajouterJoueur()})
document.getElementById("enleverJoueur").addEventListener("click", () => {enleverJoueur()})
document.getElementById("valider").addEventListener("click", () => {valider()})

document.getElementById("up").addEventListener("click", () => {montrerNotes()})

function montrerNotes() {
   if (document.getElementById("listeNotes").className == "slideDown" || (document.getElementById("listeNotes").className == "")) {
      document.getElementById("listeNotes").className = 'slideTop'
      document.getElementById("up").innerText = "▼"
   }
   else {
      document.getElementById("listeNotes").className = 'slideDown'
      document.getElementById("up").innerText = "▲"
   }
}

function ajouterJoueur() {
      let parent = document.getElementById("listeJoueur")
      
      let nouveauJoueur = document.createElement("div")
      let numeroJoueur = parent.childElementCount + 1
      nouveauJoueur.id = "joueur" + numeroJoueur
      
      let nomJoueur = document.createElement("p")
      nomJoueur.className = "joueurInitialisation"
      nomJoueur.innerText = "Joueur " + numeroJoueur
      nouveauJoueur.appendChild(nomJoueur)
   
      let inputNomJoueur = document.createElement("input")
      inputNomJoueur.type = "text"
      inputNomJoueur.placeholder = "Nom du joueur"
      inputNomJoueur.id = "nomJoueur" + numeroJoueur
      inputNomJoueur.className = "inputText"
      nouveauJoueur.appendChild(inputNomJoueur)
   
      let couleurJoueur = document.createElement("input")
      couleurJoueur.value = "#" + Math.floor(Math.random()*16777215).toString(16)
      couleurJoueur.type = "color"
      couleurJoueur.id = "couleurJoueur" + numeroJoueur
      nouveauJoueur.appendChild(couleurJoueur)
      
      parent.appendChild(nouveauJoueur)
}

function enleverJoueur() {
   let parent = document.getElementById("listeJoueur")

   if (parent.childElementCount > 2) {
      parent.removeChild(parent.lastElementChild)
   }
}

function valider() {
   let parent = document.getElementById("listeJoueur")
   let listeNom = [];
   let listeCouleur = [];
   for (let i = 0; i < parent.childElementCount; i++) {

      let nomJoueur = document.getElementById("nomJoueur" + (i+1)).value
      if (nomJoueur != "") {
         if (listeNom.indexOf(nomJoueur) == -1) {
            listeNom.push(document.getElementById("nomJoueur" + (i+1)).value)
         }
      }

      let couleurJoueur = document.getElementById("couleurJoueur" + (i+1)).value
      if (listeCouleur.indexOf(couleurJoueur) == -1) {
         listeCouleur.push(couleurJoueur)
      }
   }
   
   if ((listeNom.length == parent.childElementCount) && (listeCouleur.length == parent.childElementCount)) {
      //listeFuturJoueur = new Array()
      for (let i = 0; i < listeNom.length; i++) {
         let dict = {}
         dict["id"] = i
         dict["nom"] = listeNom[i]
         dict["position"] = 0
         dict["couleur"] = listeCouleur[i].replace("#", "")
         dict["argent"] = 1500
         dict["liste_propriete"] = [] 
         dict["enJeu"] = true
         dict["cartePrison"] = 0
         dict["nbTourPrison"] = null
         dict["nombreMaison"] = 0
         dict["nombreHotel"] = 0
         listeFuturJoueur.push(dict)
      }
   
      document.body.style.backgroundColor = "#ffffff"
      
   root.render(
      // <React.StrictMode>
         <App />
      // </React.StrictMode>
     );
   }
}

export const listeJoueur = listeFuturJoueur



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
