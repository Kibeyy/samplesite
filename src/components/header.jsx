import "../index.css"
export default function Header(){
    return (
        <nav className="navbar">
            <div>
                <span className="navbar-title">
                STDIOX
                </span>
            </div>
            <div >
                <span >
                <ul className="navbar-nav">
                    <li className="navbar-nav-item">Products </li>
                    <li className="navbar-nav-item">Pricing</li>
                    <li className="navbar-nav-item">About</li>
                </ul>
                </span>
            </div>
            <div>
                <button className="navbar-button"><span className="contactus">CONTACT US</span></button>
            </div>


        </nav>
    )
}