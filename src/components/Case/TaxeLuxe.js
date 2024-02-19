import '../../styles/Case.css'

function TaxeLuxe({id, nom, image, prix}) {
    let nomClasse = "taxeLuxe";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nomImpotRevenu">{nom}</div>
            <img src={image} className="image" alt=""/>
            <div className='gridJoueur'></div>
            <div className="prix">{prix}</div>
        </div>
    )
}

export default TaxeLuxe;