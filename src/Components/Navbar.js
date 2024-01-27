import styled from "styled-components";
import { Link } from "react-router-dom";
import rdblogo from "../Images/RDBsmall.png";

export default function Navbar() {
  return (
    <StyledNavbar>
      <a href="/" id="mainLogo">
        <img alt="RDP logo text" src={rdblogo} />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 2%;
  #mainLogo {
    width: 9.5rem;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    font-family: "Caveat Brush", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    li {
      padding: 1.5rem;
    }
  }
  a {
    color: white;
  }
  a:hover {
    color: red;
  }
`;
