import styled from "styled-components";
import MainLogo from "../Images/MainLogo.png";

export default function Home() {
  return (
    <StyledHome>
      <div className="text">
        <img alt="Ramen Del Barrio Main Logo" src={MainLogo} />
        <h2>At RDB we combine Japanese and Mexican technique and  flavors to bring something new and exciting to Austin Diners. We specialize in an incredibly rich and thick tonkotsu broth paired with slow cooked Carnitas. Nothing about this is gluten free guey. Irrashaimasse y buen provecho cabrones!</h2>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
.text {
  padding: 5%;
}
  img {
    width: 100%;
  }
  h2 {
    padding: 2% 15%;
    color: white;
    font-size: 2rem;
  }
`