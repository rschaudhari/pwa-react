import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand" href=" ">HEXAGON</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Home"> < FontAwesomeIcon icon={faHome}/> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Convertor"> < FontAwesomeIcon icon={faAddressCard}/>Convertor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login"> < FontAwesomeIcon icon={faSignInAlt}/> Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}