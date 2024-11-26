
import { Link } from "react-router-dom"
function Nav(){

    return(<>
    <nav>
        <div id="nav">
            <ul id="k"> <Link to={"/home1"}>Home</Link>  </ul>
            <ul id="k" > <Link to={"/Service"}>Service</Link> </ul>
            <ul id="k"> <Link to={"/About"}>About</Link></ul>
            <ul id="k" >Login</ul>
        </div>
    </nav>
    
    </>
    )
}
export default Nav