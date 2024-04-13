import '../../styles/Case.css'

function Compagnie({id, nom, image, prix}) {
    let nomClasse = "compagnie";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nom_compagnie">{nom}</div>
            <img src={image} className="image" alt=""/>
            <div className='gridJoueur'></div>
            <div className="prix">{prix}</div>
        </div>
    )
}

export default Compagnie;