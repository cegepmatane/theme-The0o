import '../styles/Pion.css'

function Pion({id, couleur}) {
    return (
        <div className='pion' key={id["id"]} id={'pion'+id["id"]} style={{backgroundColor: "#"+id["couleur"]}}>
        </div>
    )
}

export default Pion;