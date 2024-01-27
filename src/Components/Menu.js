import styled from "styled-components";
import ramenBowl from "../Images/Menu/Ramen/ramenBowl.png";

export default function Home() {
  return (
    <StyledMenu>
      <h1 className="brush">MENU</h1>
      <div className="menu">
        <h2 className="brush">RAMEN</h2>
        <div className="items">
          <div className="item" id="item1">
            <div className="pic"></div>
            <h4>Ramen Bowl</h4>
            <p>Bowl of Ramen with noods and veg in a chicken broth.</p>
          </div>
          <div className="item" id="item1">
            <div className="pic"></div>
            <h4>Ramen Bowl</h4>
            <p>Bowl of Ramen with noods and veg in a chicken broth.</p>
          </div>
          <div className="item" id="item1">
            <div className="pic"></div>
            <h4>Ramen Bowl</h4>
            <p>Bowl of Ramen with noods and veg in a chicken broth.</p>
          </div>
        </div>
        <h2 className="brush">NOT RAMEN</h2>
        <h2 className="brush">RAMEN</h2>
      </div>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: red;
    filter: drop-shadow(3px 3px 4px black);
  }
  .menu {
    border: 2px solid white;
    margin: 0 2%;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3rem;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 2%;
    width: 28%;
  }
  .item .pic {
    background-size: cover;
    height: 300px;
    width: 300px;
  }
  #item1 .pic {
    background-image: url(${ramenBowl});
  }
`;
