import '../styles/Case.css'
import Propriete from './Case/Propriete.js'
import Gare from './Case/Gare.js'
import Compagnie from './Case/Compagnie.js'
import Chance from './Case/Chance.js'
import CaisseCommunaute from './Case/CaisseCommunaute'
import Prison from './Case/Prison'
import ParcGratuit from './Case/ParcGratuit'
import AllerPrison from './Case/AllerPrison'
import Depart from './Case/Depart'
import ImpotRevenu from './Case/ImpotRevenu'
import TaxeLuxe from './Case/TaxeLuxe'

function Case(props) {
    if (props.type_case == "propriete") {
        return (
            <Propriete id={props.id} couleur={props.couleur} nom={props.nom} prix={props.prix}/>
        )
    }
    else if (props.type_case == "gare") {
        return (
            <Gare id={props.id} nom={props.nom} image={props.image} prix={props.prix}/>
        )
    }
    else if (props.type_case == "compagnie") {
        return (
            <Compagnie id={props.id} nom={props.nom} image={props.image} prix={props.prix}/>
        )
    }
    else if (props.type_case == "chance") {
        return (
            <Chance id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "caisseCommunaute") {
        return (
            <CaisseCommunaute id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "impotRevenu") {
        return (
            <ImpotRevenu id={props.id} nom={props.nom} prix={props.prix}/>
        )
    }
    else if (props.type_case == "taxeLuxe") {
        return (
            <TaxeLuxe id={props.id} nom={props.nom} image={props.image} prix={props.prix}/>
        )
    }
    else if (props.type_case == "caisseCommunaute") {
        return (
            <CaisseCommunaute id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "parcGratuit") {
        return (
            <ParcGratuit id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "prison") {
        return (
            <Prison id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "allerPrison") {
        return (
            <AllerPrison id={props.id} image={props.image}/>
        )
    }
    else if (props.type_case == "depart") {
        return (
            <Depart id={props.id} image={props.image}/>
        )
    }
    return <div></div>;
}

export default Case;