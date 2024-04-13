import '../../styles/Case.css'
import { listeJoueur } from '../../index.js'
import Pion from '../Pion.js'


function Depart({id, image}) {
    return (
        <div className='depart' key={id} id={id}>
        <div className='gridJoueur'>
        {listeJoueur.map((id, nom, couleur, argent) => (
                <Pion id={id} couleur={couleur}/>
            ))}
        </div>
        </div>
    )
}

export default Depart;