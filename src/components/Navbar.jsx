import logo from "../../images/Owl1.png"

function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo}/> 
            <h3 className="nav--logo_text">dscardona</h3>
            <h4 className="nav--title">Full-Stack Dev</h4>
        </nav>
    )
}

export default Navbar