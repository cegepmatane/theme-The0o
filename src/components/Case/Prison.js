import '../../styles/Case.css'

function Prison({id, image}) {
    return (
        <div className='prison' key={id} id={id}>
        <div className='gridJoueur'></div>
        </div>
    )
}

export default Prison;