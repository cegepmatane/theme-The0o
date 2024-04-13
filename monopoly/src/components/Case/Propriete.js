import '../../styles/Case.css'

function Propriete({id, couleur, nom, prix}) {
    let nomClasse = "propriete";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="bar" style={{backgroundColor: "#"+couleur}}></div>
            <div className="nom_propriete">{nom}</div>
            <div className='gridJoueur'></div>
            <div className="prix">{prix}</div>
        </div>
    )
}

export default Propriete;