import '../../styles/Case.css'

function Gare({id, nom, image, prix}) {
    let nomClasse = "gare";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nom_gare">{nom}</div>
            <img src={image} className="image" alt='Wagon'/>
            <div className='gridJoueur'></div>
            <div className="prix">{prix}</div>
        </div>
    )
}

export default Gare;