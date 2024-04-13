import '../../styles/Case.css'

function CaisseCommunaute({id, image}) {
    let nomClasse = "chance";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nom_caisse">Caisse de communauté</div>
            <img src={image} className="image" alt='Image coffre'/>
            <div className='gridJoueur'></div>
        </div>
    )
}

export default CaisseCommunaute;