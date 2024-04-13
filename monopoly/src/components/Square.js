import Row from './Row.js'
import '../styles/Square.css'

function Square() {
    return (
        <div className='mainSquare'>
            <Row position='row_haut'/>
            <Row position='row_droite'/>
            <Row position='row_bas'/>
            <Row position='row_gauche'/>
            <div id='narrateur'></div>
            <div id='choix'>
                <button id='bouton1' className="bouton"></button>
                <button id='bouton2' className="bouton"></button>
                <button id='bouton3' className="bouton"></button>
            </div>
        </div>
    )
}

export default Square;