import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <StyledNavbar>
            <a href="/" id="mainLogo">
                <h3>RDB</h3>
            </a>
            <nav>
                <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/menu" >MENU</Link></li>
                    <li><Link to="/contact" >CONTACT</Link></li>
                </ul>
            </nav>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
    
`