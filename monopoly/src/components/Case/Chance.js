import '../../styles/Case.css'

function Chance({id, image}) {
    let nomClasse = "chance";
    if (id > 10 && id < 20) {
        nomClasse += " coteGauche"
    }
    if (id > 30) {
        nomClasse += " coteDroit"
    }
    return (
        <div className={nomClasse} key={id} id={id}>
            <div className="nom_chance">Chance</div>
            <img src={image} className="image_chance" alt="point d'interrogation"/>
            <div className='gridJoueur'></div>
        </div>
    )
}

export default Chance;