import '../../styles/Case.css'

function ParcGratuit({id, image}) {
    return (
        <div className='parcGratuit' key={id} id={id}>
        <div className='gridJoueur'></div>
        </div>
    )
}

export default ParcGratuit;