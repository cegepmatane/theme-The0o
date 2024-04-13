//getSettings()
import { listeJoueur } from "../index.js"
import { caseList } from "../datas/CaseDataJeu.js";
import "../styles/ArgentJoueur.css"
import flecheImage from '../images/fleche.png'
import maison from '../images/maison.png'
import hotel from '../images/hotel.png'
import '../styles/Case.css'

/*const mysql = require('mysql');

// Connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'STATISTIQUE'
});*/

export class MainFonction {
    constructor() {
        this.gagnant = false
        this.joueurActuel = 0
        this.mettreAJourNombreParties()

        let grid = document.getElementsByClassName("gridJoueur");
        for (let i = 0; i < grid.length; i++) {
            const element = grid[i];
            //element.setAttribute("grid-template-columns", "repeat(" + listeJoueur.length + ", 1fr)")
            element.style.gridTemplateColumns = "repeat(" + listeJoueur.length + ", 1fr)"
        }

        let argentJoueur = document.getElementById("argentJoueur");
        argentJoueur.style.gridTemplateRows = "repeat(" + listeJoueur.length + ", 1fr)"
        for (let i = 0; i < listeJoueur.length; i++) {
            let joueurCase = document.createElement("div")
            joueurCase.classList.add("joueurArgent")
            joueurCase.id = "argentJoueur" + i  
            joueurCase.style.border = "0.3vh solid #" + listeJoueur[i].couleur
            joueurCase.innerText = listeJoueur[i].nom + "\n" + listeJoueur[i].argent
            argentJoueur.appendChild(joueurCase)         
        }
        
        let fleche = document.createElement("img")
        fleche.src = flecheImage
        fleche.classList.add("fleche")
        fleche.id = "fleche"
        argentJoueur.appendChild(fleche)

        this.main()
    }

    main() {
        //while (!this.gagnant) {
        //for (let index = 0; index < 3; index++) {
            this.lancerTour()
            //listeJoueur[0].liste_propriete.push(caseList[1])
            //this.changerJoueur()
        //}
    }

    ecrire(texte) {
        let div = document.createElement("div")
        div.innerHTML = texte
        document.getElementById("narrateur").appendChild(div)
    }

    actionCase() {
        this.infoJoueur = listeJoueur[this.joueurActuel]
        let typeCase = caseList[this.infoJoueur.position].type_case
        if (typeCase == "propriete") {
            if (arguments.length == 0) {
                this.propriete()
            }
            else {
                this.propriete(arguments)
            }
        } 
        else if (typeCase == "caisseCommunaute") {
            if (arguments.length == 0) {
                this.caisseCommunaute()
            }
            else {
                this.caisseCommunaute(arguments)
            }
        }
        else if (typeCase == "impotRevenu" || typeCase == "taxeLuxe") {
            if (arguments.length == 0) {
                this.impotRevenu()
            }
            else {
                this.impotRevenu(arguments)
            }
        }
        else if (typeCase == "gare") {
            if (arguments.length == 0) {
                this.gare()
            }
            else {
                this.gare(arguments)
            }
        } 
        else if (typeCase == "chance") {
            if (arguments.length == 0) {
                this.chance()
            }
            else {
                this.chance(arguments)
            }
        }
        else if (typeCase == "compagnie") {
            if (arguments.length == 0) {
                this.compagnie()
            }
            else {
                this.compagnie(arguments)
            }
        }
        else if (typeCase == "parcGratuit") {
            if (arguments.length == 0) {
                this.parcGratuit()
            }
            else {
                this.parcGratuit(arguments)
            }
        }
        else if (typeCase == "depart") {
            if (arguments.length == 0) {
                this.depart()
            }
            else {
                this.depart(arguments)
            }
        }
        else if (typeCase == "allerPrison") {
            if (arguments.length == 0) {
                this.allerPrison()
            }
            else {
                this.allerPrison(arguments)
            }
        }
        else if (typeCase == "prison") {
            if (arguments.length == 0) {
                this.prison()
            }
            else {
                this.prison(arguments)
            }
        }
    }

    lancerTour() {
        this.infoJoueur = listeJoueur[this.joueurActuel]
        this.ecrire("C'est au tour de " + this.infoJoueur["nom"] + " de jouer")
        
        this.rechangerPosition()
        if (this.infoJoueur.nbTourPrison == null) {
            let nombreDe
            if (arguments.length == 0) {
                nombreDe = this.lancerDe()
                this.ecrire(this.infoJoueur["nom"] + " à lancé les dés : " + nombreDe[0] + " et " + nombreDe[1] + " !")
            }
            else {
                nombreDe = [arguments[0], arguments[1]]
            }
            this.updatePostion(nombreDe[0] + nombreDe[1])
            //this.updatePostion(3)
        }
        this.actionCase()
    }

    payerPrison() {
        if (this.infoJoueur.argent > 50) {
            this.infoJoueur.nbTourPrison = null
            this.infoJoueur.argent -= 50
            this.ecrire("Vous payer votre amende!")
        }
        else {
            this.infoJoueur.argent = 0
            this.ecrire("Vous ne pouvez pas payer votre amende, vous avez donc perdu !")
            this.perdu()
        }
        this.finirTour()
    }

    cartePrison() {
        this.ecrire("Vous utilisez une carte pour sortir de prison")
        this.infoJoueur.nbTourPrison = null
        this.infoJoueur.cartePrison -= 1
        this.refresh()
        this.lancerTour()
    }

    attendrePrison() {
        if (this.infoJoueur.nbTourPrison > 2) {
            this.ecrire("Vous avez déjà attendu 3 tours, vous êtes obligé de sortir de prison")
            this.payerPrison()
        }
        else {
            let lancerDe = this.lancerDe()
            this.ecrire("Vous lancez les dés : " + lancerDe[0] + " et " + lancerDe[1])
            if (lancerDe[0] == lancerDe[1]) {
                this.ecrire("C'est un double ! Vous sortez de prison")
                this.infoJoueur.nbTourPrison = null
                this.refresh()
                this.lancerTour(lancerDe[0], lancerDe[1])
            }
            else {
                this.ecrire("Ce n'est pas un double, vous attendez un autre tour en prison")
                this.infoJoueur.nbTourPrison += 1
                this.finirTour()
            }
            
        }
    }

    prison() {
        if (this.infoJoueur.nbTourPrison != null) {
            /*this.ecrire("Vous avez trois possibilités pour sortir de prison. Vous pouvez payer une amende de 50 au début du tour "+
            "suivant. Vous pouvez utiliser une carte libéré de Prison, vous en avez " + this.infoJoueur.cartePrison + 
            " . Enfin, vous pouvez attendre trois tours en lançant les dés à chaque tour pour essayer de faire un double. "+
            "Si vous faites un double, sortez de prison en utilisant le lancer de dés pour avancer. Si, après les trois tours, "+
            "vous n'avez pas fait de double, payez 50 à la banque et bougez votre pion suivant votre lancer de dés.")*/
            
            if (this.infoJoueur.argent > 50) {
                let bouton1 = document.getElementById("bouton1")
                bouton1.innerText = "Payer 50"
                bouton1.addEventListener("click", () => {this.payerPrison()})
            }
           
            if (this.infoJoueur.cartePrison > 0) {
                let bouton2 = document.getElementById("bouton2")
                bouton2.innerText = "Utiliser une carte"
                bouton2.addEventListener("click", () => {this.cartePrison()})
            }

            let bouton3 = document.getElementById("bouton3")
            bouton3.innerText = "Attendre"
            bouton3.addEventListener("click", () => {this.attendrePrison()})
        }
        else {
            this.ecrire("Vous visitez la prison")
            if (arguments.length == 0) {
                this.acheterMaisonOption()
            }
        }
    }

    allerPrison() {
        this.ecrire("Vous allez en prison !")
        this.infoJoueur.nbTourPrison = 0
        for (let i = 0; i < caseList.length; i++) {
            if (caseList[i].type_case == "prison") {
                this.infoJoueur.position = i
            }
        }
        this.rechangerPosition()

        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    depart() {
        this.ecrire("Vous êtes tombés sur la case départ. Vous recevez 200")
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    parcGratuit() {
        this.ecrire("Vous êtes tombés sur la case parc gratuit. Rien ne se passe !")
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    compagnie() {
        if (caseList[this.infoJoueur.position].proprietaire == null) {
            if (this.infoJoueur.argent > caseList[this.infoJoueur.position].prix) {
                this.ecrire("Vous pouvez acheter " + caseList[this.infoJoueur.position].nom + " pour " + caseList[this.infoJoueur.position].prix)   
                let bouton = document.getElementById("bouton2")
                bouton.innerText = "Acheter (" + caseList[this.infoJoueur.position].prix + ")"
                bouton.addEventListener("click", () => { this.acheterPropriete(this.infoJoueur);});
            }
            else {
                this.ecrire('La compagnie est libre mais vous n\'avez malheuresement pas assez d\'argent')
            }
        }
        else {
            let double = true;
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].type_case == "compagnie") {
                    if (caseList[i].proprietaire != caseList[this.infoJoueur.position].proprietaire) {
                        double = false
                    }
                }
            }
            let lancerDe = this.lancerDe()
            let prix = (lancerDe[0] + lancerDe[1]) * 4
            let texte = "Vous êtes tombé sur une compagnie déjà achété."
            if (arguments.length != 0) {
                texte += " Vous allez devoir payer 10x le lancer de vos dés ! (C'est la carte chance qui le stipule)"
                prix = (lancerDe[0] + lancerDe[1]) * 10
            }
            else {
                if (double) {
                    prix = (lancerDe[0] + lancerDe[1]) * 10
                    texte += " En plus, " + listeJoueur[caseList[this.infoJoueur.position].proprietaire].nom + " possède toutes les compagnies. Vous allez devoir payer 10x le lancer de vos dés !"
                }
            }
            this.ecrire(texte)
            this.ecrire("Les dés sont tombés sur le " + lancerDe[0] + " et " + lancerDe[1] + ". Vous devez payez " + prix)

            if (this.infoJoueur.argent < prix) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= prix
                listeJoueur[caseList[this.infoJoueur.position].proprietaire].argent += prix
            }
        }
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    gare() {
        if (caseList[this.infoJoueur.position].proprietaire == null) {
            if (this.infoJoueur.argent > caseList[this.infoJoueur.position].prix) {
                this.ecrire("Vous pouvez acheter " + caseList[this.infoJoueur.position].nom + " pour " + caseList[this.infoJoueur.position].prix)   
                let bouton = document.getElementById("bouton2")
                bouton.innerText = "Acheter (" + caseList[this.infoJoueur.position].prix + ")"
                bouton.addEventListener("click", () => { this.acheterPropriete(this.infoJoueur);});
            }
            else {
                this.ecrire('La gare est libre mais vous n\'avez malheuresement pas assez d\'argent')
            }
        }
        else {
            let nbGare = 0
            //On met a 0 car la boucle va passer par la case actuelle et donc l'incrementer
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].type_case == "gare") {
                    if (caseList[i].proprietaire == caseList[this.infoJoueur.position].proprietaire) {
                        nbGare++;
                    }
                }
            }
            let prix = caseList[this.infoJoueur.position][nbGare]
            if (this.infoJoueur.argent < prix) {
                this.ecrire("Vous tombez sur la gare de " + listeJoueur[caseList[this.infoJoueur.position].proprietaire].nom + ". Vous ne pouvez pas rembourser le joueur, vous avez donc perdu !")
                this.perdu()
            }
            else {
                this.ecrire("Vous tombez sur la gare de " + listeJoueur[caseList[this.infoJoueur.position].proprietaire].nom + ". Vous devez payer " + prix)
                this.infoJoueur.argent -= prix;
                listeJoueur[caseList[this.infoJoueur.position].proprietaire].argent += prix;
            }
        }
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    impotRevenu() {
        let prix = caseList[this.infoJoueur.position].prix
        if (this.infoJoueur.argent < prix) {
            this.ecrire("Vous devez payer " + prix + " d'impôts. Vous n'avez pas assez d'argent, vous avez perdu !")
            this.infoJoueur.argent = 0
            this.perdu()
        }
        else {
            this.ecrire("Vous devez payer " + prix + " d'impôts")
            this.infoJoueur.argent -= prix
        }
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    rechangerPosition() {
        let pionActuel = document.getElementById("pion" + this.infoJoueur["id"]);
            let enfant = document.getElementById(this.infoJoueur.position).childNodes
            enfant.forEach(element => {
            if (element.className == "gridJoueur") {
                element.appendChild(pionActuel)
            }
            });  
    }

    chance() {
        this.ecrire("Vous tirez une carte chance : ")
        let choixCarte = Math.floor(Math.random() * 16)
        if (choixCarte == 0) {
            this.ecrire("Votre immeuble et votre prêt vous rapportent. Vous devez touchez 150")
            this.infoJoueur.argent += 150
        }
        else if (choixCarte == 1) {
            this.ecrire("Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue")
            this.infoJoueur.cartePrison += 1
        }
        else if (choixCarte == 2) {
            this.ecrire("Avancez jusqu'à la gare la plus proche. Si elle n'appartient à personne, vous pouvez l'acheter auprès de la Banque. Si elle appartient déjà à un autre joueur, vous devez lui payer deux fois le loyer demandé")
            for (let i = this.infoJoueur.position; i < caseList.length+this.infoJoueur.position; i++) {
                i = i%40
                if (caseList[i].type_case == "gare") {
                    this.ecrire("La gare la plus proche est " + caseList[i].nom)
                    if (this.infoJoueur.position > i) {
                        this.ecrire("Vous passez par la case départ, vous revecez 200")
                        this.infoJoueur.argent += 200
                    }
                    this.infoJoueur.position = i
                    //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                    this.actionCase(true)
                    break
                }               
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 7) {
            this.ecrire("Avancez jusqu'à la gare la plus proche. Si elle n'appartient à personne, vous pouvez l'acheter auprès de la Banque. Si elle appartient déjà à un autre joueur, vous devez lui payer deux fois le loyer demandé")
            for (let i = this.infoJoueur.position; i < caseList.length+this.infoJoueur.position; i++) {
                i = i%40
                if (caseList[i].type_case == "gare") {
                    this.ecrire("La gare la plus proche est " + caseList[i].nom)
                    if (this.infoJoueur.position > i) {
                        this.ecrire("Vous passez par la case départ, vous revecez 200")
                        this.infoJoueur.argent += 200
                    }
                    this.infoJoueur.position = i
                    //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                    this.actionCase(true)
                    break
                }               
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 3) {
            this.ecrire("Vous devez faire des réparations sur toutes vos propriétés : versez 25 pour chaque maison et 100 pour chaque hôtel que vous possédez")
            let prix = this.infoJoueur.nombreMaison * 25 + this.infoJoueur.nombreHotel * 100
            if (this.infoJoueur.argent < prix) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= prix
                this.ecrire("Vous payez " + prix)
            }
        }
        else if (choixCarte == 4) {
            this.ecrire("Rendez-vous à la Rue de la Paix")
            let positionRue = -1
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].nom == "Rue de la Paix") {
                    positionRue = i
                }
            }
            if (positionRue == -1) {
                this.ecrire("ERREUR : IL N'Y A PAS DE PROPRIETE AU NOM DE 'RUE DE LA PAIX'")
            }
            else {
                if (positionRue < this.infoJoueur.position) {
                    this.ecrire("Vous passez par la case départ, vous recevez 200")
                    this.infoJoueur.argent += 200
                }
                this.infoJoueur.position = positionRue
                //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                this.actionCase(true)
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 5) {
            this.ecrire("Vous avez été élu président du conseil d'administration. Versez 50 à chaque joueur")
            for (let i = 0; i < listeJoueur.length; i++) {
                if (listeJoueur[i].id != this.joueurActuel) {
                    listeJoueur[i].argent += 50
                    this.infoJoueur.argent -= 50
                }
                if (this.infoJoueur.argent < 0) {
                    this.infoJoueur.argent = 0
                    this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                    this.perdu()
                }
            }
        }
        else if (choixCarte == 6) {
            this.ecrire("Rendez-vous à l'avenue Henri-Martin. Si vous passez par la case départ, recevez 200")     
            let positionRue = -1
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].nom == "Avenue Henri-Martin") {
                    positionRue = i
                }
            }
            if (positionRue == -1) {
                this.ecrire("ERREUR : IL N'Y A PAS DE PROPRIETE AU NOM DE 'AVENUE HENRI-MARTIN'")
            }
            else {
                if (positionRue < this.infoJoueur.position) {
                    this.ecrire("Vous passez par la case départ, vous recevez 200")
                    this.infoJoueur.argent += 200
                }
                this.infoJoueur.position = positionRue
                //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                this.propriete(true)
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 8) {
            this.ecrire("Avancez jusqu'à la case départ (Recevez 200)")
            this.infoJoueur.position = 0
            this.infoJoueur.argent += 200
            this.rechangerPosition()
        }
        else if (choixCarte == 9) {
            this.ecrire("Avancez au Boulevard de la Villette. Si vous passez par la case départ, recevez 200")
            let positionRue = -1
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].nom == "Boulevard de la Villette") {
                    positionRue = i
                }
            }
            if (positionRue == -1) {
                this.ecrire("ERREUR : IL N'Y A PAS DE PROPRIETE AU NOM DE 'BOULEVARD DE LA VILETTE'")
            }
            else {
                if (positionRue < this.infoJoueur.position) {
                    this.ecrire("Vous passez par la case départ, vous recevez 200")
                    this.infoJoueur.argent += 200
                }
                this.infoJoueur.position = positionRue
                //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                this.propriete(true)
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 10) {
            this.ecrire("Allez à la gare Montparnasse. Si vous passez par la case départ, recevez 200")
            let positionRue = -1
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].nom == "Gare Montparnasse") {
                    positionRue = i
                }
            }
            if (positionRue == -1) {
                this.ecrire("ERREUR : IL N'Y A PAS DE PROPRIETE AU NOM DE 'GARE MONTPARNASSE'")
            }
            else {
                if (positionRue < this.infoJoueur.position) {
                    this.ecrire("Vous passez par la case départ, vous recevez 200")
                    this.infoJoueur.argent += 200
                }
                this.infoJoueur.position = positionRue
                //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                this.rechangerPosition()
                this.actionCase(true)
            }
        }
        else if (choixCarte == 11) {
            this.ecrire("Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ. Ne recevez pas 200")
            this.infoJoueur.nbTourPrison = 0
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].type_case == "prison") {
                    this.infoJoueur.position = i
                }
            }
            this.rechangerPosition()
            
        }
        else if (choixCarte == 12) {
            this.ecrire("Amende pour exces de vitesse : payez 15")
            if (this.infoJoueur.argent < 15) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= 15
            }
        }
        else if (choixCarte == 13) {
            this.ecrire("La banque vous verse un dividende de 50")
            this.infoJoueur.argent += 50
        }
        else if (choixCarte == 14) {
            this.ecrire("Reculez de trois cases")
            this.infoJoueur.position -= 3
            if (this.infoJoueur.position < 0) {
                this.infoJoueur.position += 40
            }
            this.rechangerPosition()
            this.actionCase(true)
        }
        else if (choixCarte == 15) {
            this.ecrire("Avancez jusqu'à la compagnie de service public la plus proche. Si elle n'appartient personne, vous pouvez l'achetez. Si elle appartient déjà un autre joueur, lancez les dés et payez le montant du total de vos dés multipliés par 10")
            for (let i = this.infoJoueur.position; i < caseList.length; i++) {
                i = i%40
                if (caseList[i].type_case == "compagnie") {
                    this.infoJoueur.position = i
                    this.ecrire("La compagnie la plus proche est " + caseList[i].nom)
                    if (this.infoJoueur.position < i) {
                        this.ecrire("Vous passez par la case départ, vous revecez 200")
                        this.infoJoueur += 200
                    }
                    //On met n'importe qu'elle argument juste pour ne pas lancer le bouton dans la fonction gare()
                    //this.compagnie(true)
                    break
                }               
            }
            this.rechangerPosition()
            this.actionCase(true)
        }
        if (arguments.length == 0) {
            this.acheterMaisonOption()
        }
    }

    caisseCommunaute() {
        this.ecrire("Vous tirez une carte caisse de communauté : ")
        let choixCarte = Math.floor(Math.random() * 16)
        if (choixCarte == 0) {
            this.ecrire("Avancez jusqu'à la case départ (Recevez 200)")
            this.infoJoueur.argent += 200
            this.infoJoueur.position = 0

            let pionActuel = document.getElementById("pion" + this.infoJoueur["id"]);
            let enfant = document.getElementById(this.infoJoueur.position).childNodes
            enfant.forEach(element => {
            if (element.className == "gridJoueur") {
                element.appendChild(pionActuel)
            }
            });

        }
        else if (choixCarte == 1) {
            this.ecrire("Erreur de la banque en votre faveur. Recevez 200")
            this.infoJoueur.argent += 200
        }
        else if (choixCarte == 2) {
            this.ecrire("Visiste chez le médecin : Payez 50")
            if (this.infoJoueur.argent < 50) {
                this.infoJoueur.argent = 0
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= 50
            }
        }
        else if (choixCarte == 3) {
            this.ecrire("C'est votre anniversaire : chaque joueur doit vous donnez 10")
            for (let i = 0; i < listeJoueur.length; i++) {
                if (i != this.joueurActuel) {
                    if (listeJoueur[i].argent < 10) {
                        listeJoueur[i].argent = 0
                        this.ecrire("Le joueur " + listeJoueur[i].nom + " a perdu !")
                        this.perdu(listeJoueur[i])
                    }
                    else {
                        listeJoueur[i].argent -= 10
                        this.infoJoueur.argent += 10
                    }
                }
            }
        }
        else if (choixCarte == 4) {
            this.ecrire("Frais d'hospitalisation. Payez 100")
            if (this.infoJoueur.argent < 100) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= 100
            }
        }
        else if (choixCarte == 5) {
            this.ecrire("Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisé ou vendue")
            this.infoJoueur.cartePrison += 1
        }
        else if (choixCarte == 6) {
            this.ecrire("Frais de scolarité. Payez 50")
            if (this.infoJoueur.argent < 50) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= 50
            }
        }
        else if (choixCarte == 7) {
            this.ecrire("Vous héritez de 100")
            this.infoJoueur.argent += 100
        }
        else if (choixCarte == 8) {
            this.ecrire("Vous avez gagné le deuxième prix de beauté. Recevez 10")
            this.infoJoueur.argent += 10
        }
        else if (choixCarte == 9) {
            this.ecrire("Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ. Ne recevez pas 200")
            this.infoJoueur.nbTourPrison = 0
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[i].type_case == "prison") {
                    this.infoJoueur.position = i
                }
            }
            this.rechangerPosition()
        }
        else if (choixCarte == 10) {
            this.ecrire("Le ventre de votre stock vous rapporte 100")
            this.infoJoueur.argent += 100
        }
        else if (choixCarte == 11) {
            this.ecrire("Vous devez faire des travaux sur vos propriétés : versez 40 pour chaque maison et 115 pour chaque hôtel que vous possedez")
            let prix = this.infoJoueur.nombreMaison * 40 + this.infoJoueur.nombreHotel * 115
            if (this.infoJoueur.argent < prix) {
                this.infoJoueur.argent = 0
                this.ecrire("Vous n'avez pas assez d'argent, vous avez perdu !")
                this.perdu()
            }
            else {
                this.infoJoueur.argent -= prix
                this.ecrire("Vous payez " + prix)
            }
        }
        else if (choixCarte == 12) {
            this.ecrire("Commission d'expert immobilier. Recevez 25")
            this.infoJoueur.argent += 25
        }
        else if (choixCarte == 13) {
            this.ecrire("Votre assurance vie vous rapporte 100")
            this.infoJoueur.argent += 100
        }
        else if (choixCarte == 14) {
            this.ecrire("Les impots vous remboursent 20")
            this.infoJoueur.argent += 20
        }
        else if (choixCarte == 15) {
            this.ecrire("Votre placement vous rapporte. Recevez 100")
            this.infoJoueur.argent += 100
        }
        if (arguments.length == 0) {
            this.acheterMaisonOption()
    
        }
    }

    propriete() {
        if (caseList[this.infoJoueur.position].proprietaire == null) {
            if (this.infoJoueur.argent > caseList[this.infoJoueur.position].prix) {
                this.ecrire("Vous pouvez acheter " + caseList[this.infoJoueur.position].nom + " pour " + caseList[this.infoJoueur.position].prix)   
                let bouton = document.getElementById("bouton2")
                bouton.innerText = "Acheter (" + caseList[this.infoJoueur.position].prix + ")"
                bouton.addEventListener("click", () => { this.acheterPropriete(this.infoJoueur);});
            }
            else {
                this.ecrire('La propriété est libre mais vous n\'avez malheuresement pas assez d\'argent')
            }
        }
        else {
            let prix = caseList[this.infoJoueur.position][caseList[this.infoJoueur.position].nombreMaison]
            let double = true
            if (caseList[this.infoJoueur.position].nombreMaison == 0) {
                for (let i = 0; i < caseList.length; i++) {
                    if (caseList[i].type_case == "propriete") {
                        if (caseList[i].couleur == caseList[this.infoJoueur.position].couleur) {
                            if (caseList[i].proprietaire != caseList[this.infoJoueur.position].proprietaire) {
                                double = false
                            }
                        }
                    }
                }
            }

            if (double && caseList[this.infoJoueur.position].nombreMaison == 0) {
                prix *= 2
            }

            if (this.infoJoueur.id == listeJoueur[caseList[this.infoJoueur.position].proprietaire].id) {
                this.ecrire("Vous êtes chez vous")
            }
            else {
                if (this.infoJoueur.argent < prix) {
                    this.ecrire("Vous tombez sur la propriété de " + listeJoueur[caseList[this.infoJoueur.position].proprietaire].nom + ". Vous ne pouvez pas rembourser le joueur, vous avez donc perdu !")
                    this.perdu()
                }
                else {
                    this.ecrire("Vous tombez sur la propriété de " + listeJoueur[caseList[this.infoJoueur.position].proprietaire].nom + ". Vous devez payer " + prix)
                    this.infoJoueur.argent -= prix;
                    listeJoueur[caseList[this.infoJoueur.position].proprietaire].argent += prix;
                }
            }
        }

        if (arguments[0] == null) {
            this.acheterMaisonOption()
        }
    }

    perdu() {
        this.mettreAJourResultatsPartie(this.infoJoueur["nom"], false)
        if (arguments.length == 0) {
            this.infoJoueur.enJeu = false;
        }
        else {
            arguments[0].enJeu = false;
        }
    }

    acheterPropriete() {
        caseList[this.infoJoueur.position].proprietaire = this.infoJoueur.id;
        this.infoJoueur.argent -= caseList[this.infoJoueur.position].prix;
        this.infoJoueur.liste_propriete.push(caseList[this.infoJoueur.position])

        let memeProprio = true
        for (let i = 0; i < caseList.length; i++) {
            if (caseList[this.infoJoueur.position].couleur == caseList[i].couleur) {
                if (caseList[this.infoJoueur.position].proprietaire != caseList[i].proprietaire) {
                    memeProprio = false
                }
            }
        }

        if (memeProprio) {
            for (let i = 0; i < caseList.length; i++) {
                if (caseList[this.infoJoueur.position].couleur == caseList[i].couleur) {
                    caseList[i].memeProprio = true;
                }
            }
        }

        document.getElementById(this.infoJoueur.position).style.border = "solid 1px #" + this.infoJoueur.couleur
        document.getElementById(this.infoJoueur.position).style.color = "#" + this.infoJoueur.couleur


        //this.finirTour()
        this.refresh()
        //this.finirTour()
        this.acheterMaisonOption()
    }

    finirTour() {
        //this.acheterMaisonOption()
        this.changerJoueur()
        this.refresh()
        document.getElementById("narrateur").innerHTML = ''
        this.lancerTour()
    }
    
    acheterMaisonOption() {

        if (arguments[0] == null) {
            let bouton = document.getElementById("bouton3")
            bouton.innerText = "Finir le tour"
            bouton.addEventListener("click", () => {this.finirTour()})
        }

        let groupePosseder = []
        for (let i = 0; i < this.infoJoueur.liste_propriete.length; i++) {
            if (this.infoJoueur.liste_propriete[i].memeProprio == true && groupePosseder.indexOf(this.infoJoueur.liste_propriete[i].couleur) == -1) {
                groupePosseder.push(this.infoJoueur.liste_propriete[i].couleur)
            }
        }
        
        let listesProprietesJoueur = []
        for (let i = 0; i < caseList.length; i++) {
            for (let j = 0; j < groupePosseder.length; j++) {
                if (caseList[i].couleur == groupePosseder[j]) {
                    listesProprietesJoueur.push(caseList[i])
                }
            }
        }

        if (groupePosseder.length > 0) { 
            let bouton = document.getElementById("bouton1")
            bouton.innerText = "Acheter maison"
            bouton.addEventListener("click", () => {this.acheterMaison(listesProprietesJoueur)})
        }

    }

    acheterMaison(listesProprietesJoueur) {
        this.refresh()

        let element = listesProprietesJoueur[0]
        document.getElementById(element.id).style.backgroundColor = "#00000066"

        let hotelOuMaison = "Acheter une maison"
        if (element.nombreMaison == 4) {
            hotelOuMaison = "Acheter un hôtel"
        }

        let bouton1 = document.getElementById("bouton1")
        bouton1.innerText = "<"
        bouton1.addEventListener("click", () => {
            let element = listesProprietesJoueur.shift()
            document.getElementById(element.id).style.backgroundColor = null
            listesProprietesJoueur.push(element)
            this.acheterMaison(listesProprietesJoueur)
        })

        let bouton2 = document.getElementById("bouton2")
        bouton2.innerText = hotelOuMaison
        bouton2.addEventListener("click", () => {this.acheterMaisonPropriete(listesProprietesJoueur, element)})

        let bouton3 = document.getElementById("bouton3")
        bouton3.innerText = "Quitter"
        bouton3.addEventListener("click", () => {
            document.getElementById(element.id).style.backgroundColor = null
            this.finirTour()})
    }

    acheterMaisonPropriete(listesProprietesJoueur, element) {
        if (element.nombreMaison < 4) {
            let nbMaisonMax = 0
            for (let i = 0; i < listesProprietesJoueur.length; i++) {
                if (listesProprietesJoueur[i].couleur == element.couleur) {
                    if ((listesProprietesJoueur[i].nombreMaison > nbMaisonMax) && (element.id != listesProprietesJoueur[i].id)) {
                        nbMaisonMax = listesProprietesJoueur[i].nombreMaison
                    }
                }            
            }
            if (element.nombreMaison <= nbMaisonMax) {
                if (this.infoJoueur.argent > element.prixMaison) {
                    this.ecrire("Vous avez acheté une maison pour la propriété de " + element.nom)
                    this.infoJoueur.argent -= element.prixMaison
                    this.infoJoueur.nombreMaison++
                    element.nombreMaison++;

                    let enfant = document.getElementById(element.id).childNodes
                    enfant.forEach(element => {
                    if (element.className == "bar") {
                        let img = document.createElement("img")
                        img.src = maison
                        img.classNamee = "imgMaison"
                        element.appendChild(img)
                    }
            });

                }
                else {
                    this.ecrire("Vous n'avez pas assez d'argent pour acheter une maison")
                }
            }
            else {
                this.ecrire("Vous ne pouvez pas acheter de maison ici, achetez en d'abord sur vos autres propriétés de même couleur")
            }
        }
        else {
            //hotel
            let dejaHotel = false;
            if (this.infoJoueur.argent > element.prixMaison) {
                for (let i = 0; i < listesProprietesJoueur.length; i++) {
                    if (listesProprietesJoueur[i].couleur == element.couleur) {
                        if (listesProprietesJoueur[i].nombreMaison == 5) {
                            dejaHotel = true
                        }
                    }
                    
                }
                if (dejaHotel) {
                    this.ecrire("Vous possedez déjà un hôtel sur ce terrain")
                }
                else {
                    this.ecrire("Vous avez acheté un hôtel pour la propriété de " + element.nom)
                    this.infoJoueur.argent -= element.prixMaison
                    this.infoJoueur.nombreMaison -= 4
                    this.infoJoueur.nombreHotel++
                    element.nombreMaison++;

                    let enfant = document.getElementById(element.id).childNodes
                    enfant.forEach(element => {
                    if (element.className == "bar") {
                        element.innerHTML = ''
                        let img = document.createElement("img")
                        img.src = hotel
                        img.classNamee = "imgMaison"
                        element.appendChild(img)
                    }
                    });
                }

            }
            else {
                this.ecrire("Vous n'avez pas assez d'argent pour acheter un hotel")
            }
            //document.getElementById("bouton2").innerText = "Acheter un hôtel"
        }
        this.acheterMaison(listesProprietesJoueur)
    }

    refresh() {
        for (let i = 0; i < listeJoueur.length; i++) {
            let joueur = document.getElementById("argentJoueur" + i)
            joueur.innerText = listeJoueur[i].nom + "\n" + listeJoueur[i].argent;
        }
        let fleche = document.getElementById("fleche")
        fleche.style.gridRow = this.joueurActuel + 1

        for (let i = 0; i < 3; i++) {
            let bouton = document.getElementById("bouton"+(i+1));
            bouton.innerText = ""
            var cloneBouton = bouton.cloneNode(true);
            document.getElementById("choix").replaceChild(cloneBouton, bouton);
        }

    }

    updatePostion(nombre) {
        //let anciennePosition = this.infoJoueur.position;
        if (this.infoJoueur["position"] + nombre > 39) {
            this.infoJoueur["position"] = this.infoJoueur["position"] - 40 + nombre
            this.infoJoueur.argent += 200
        }
        else {
            this.infoJoueur["position"] += nombre
        }
        let pionActuel = document.getElementById("pion" + this.infoJoueur.id);
        let enfant = document.getElementById(this.infoJoueur.position).childNodes
        enfant.forEach(element => {
            if (element.className == "gridJoueur") {
                element.appendChild(pionActuel)
            }
        });
    }

    lancerDe() {
        return [Math.floor(Math.random() * 6)+1,  Math.floor(Math.random() * 6) + 1]
    }

    changerJoueur() {
        if (this.joueurActuel == listeJoueur.length - 1) {
            this.joueurActuel = 0
        }
        else {
            this.joueurActuel++
        }
        if (listeJoueur[this.joueurActuel].enJeu == false) {
            document.getElementById("pion"+this.joueurActuel).parentNode.removeChild(document.getElementById("pion"+this.joueurActuel))
            document.getElementById("argentJoueur"+this.joueurActuel).style.backgroundColor = "#00000066"
            this.changerJoueur()
        }
    }

    /*mettreAJourNombreParties(nomUtilisateur) {
        connection.query('SELECT * FROM joueurs WHERE nomUtilisateur = ?', [nomUtilisateur], (error, results) => {
            if (error) {
            throw error;
            }

            if (results.length > 0) {
            const nouvelleValeur = results[0].nombreParties + 1;
            connection.query('UPDATE joueurs SET nombreParties = ? WHERE nomUtilisateur = ?', [nouvelleValeur, nomUtilisateur], (error, results) => {
                if (error) {
                throw error;
                }
                console.log(`Nombre de parties mis à jour pour ${nomUtilisateur}`);
            });
            } else {
            connection.query('INSERT INTO joueurs (nomUtilisateur, nombreParties) VALUES (?, ?)', [nomUtilisateur, 1], (error, results) => {
                if (error) {
                throw error;
                }
                console.log(`Nouvel enregistrement pour ${nomUtilisateur}`);
            });
            }
        });
    }

    mettreAJourResultatsPartie(nomUtilisateur, aGagne) {
        connection.query('SELECT * FROM joueurs WHERE nomUtilisateur = ?', [nomUtilisateur], (error, results) => {
            if (error) {
            throw error;
            }

            if (results.length > 0) {
            let partiesGagnees = results[0].partiesGagnees;
            let partiesPerdues = results[0].partiesPerdues;

            if (aGagne) {
                partiesGagnees++;
            } else {
                partiesPerdues++;
            }

            connection.query('UPDATE joueurs SET partiesGagnees = ?, partiesPerdues = ? WHERE nomUtilisateur = ?', [partiesGagnees, partiesPerdues, nomUtilisateur], (error, results) => {
                if (error) {
                throw error;
                }
                console.log(`Résultats de parties mis à jour pour ${nomUtilisateur}`);
            });
            } else {
            console.log(`Aucun enregistrement trouvé pour ${nomUtilisateur}`);
            }
        });
    }*/

/*while (!gagnant) {

}*/
}
