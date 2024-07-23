import { Link } from "react-router-dom";

import { MdHomeFilled } from "react-icons/md";
import { GoGraph } from "react-icons/go";

import "./styles.css"

export default function NavRoutes(){
    return(
        <div className="nav">
            <Link to='/' className="link" ><MdHomeFilled className="iconNav"/>Home</Link>
            <Link to='/Graphic' className="link" ><GoGraph className="iconNav"/>Graficos</Link>
        </div>
    )
}