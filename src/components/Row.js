import Case from './Case.js'
import '../styles/Row.css'
import { caseList } from '../datas/CaseData'

function Row({position}) {
    return (
        <div className={position}>
            {caseList[position].map(({id, type_case, nom, couleur, prix, image}) => (
                <Case id={id} type_case={type_case} nom={nom} couleur={couleur} prix={prix} image={image}/>
            ))}
        </div>
    )
}

export default Row;