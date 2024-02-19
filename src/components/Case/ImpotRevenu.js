import '../../styles/Case.css'

function ImpotRevenu({id, nom, prix}) {
    let nomClasse = "impotRevenu";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nomImpotRevenu">{nom}</div>
            <div className='logoImpotRevenu'></div>
            <div className='gridJoueur'></div>
            <div className="prix">{prix}</div>
        </div>
    )
}

export default ImpotRevenu;