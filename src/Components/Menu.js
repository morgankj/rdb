import styled from "styled-components";
import ramen1 from "../Images/Menu/Ramen/ramen1.png";
import ramen2 from "../Images/Menu/Ramen/ramen2.png";
import ramen3 from "../Images/Menu/Ramen/ramen3.png";
import ramen4 from "../Images/Menu/Ramen/ramen4.png";
import ramen5 from "../Images/Menu/Ramen/ramen5.png";
import ramen6 from "../Images/Menu/Ramen/ramen6.png";

export default function Home() {
  return (
    <StyledMenu>
      <h1 className="brush">MENU</h1>
      <div className="menu">
        <div className="ramenMenu">
          <h2 className="brush">RAMEN</h2>
          <h4>All bowls come with onions, lime, and cilantro.</h4>
          <div className="items">
            <div className="item" id="item1">
              <div className="pic"></div>
              <h5>Carnitas Tonkatsu</h5>
              <p>Shoyu tare, pork bone broth, mixed carnitas, grilled pepper and onions. <b>Great for first time guests!</b></p>
            </div>
            <div className="item" id="item2">
              <div className="pic"></div>
              <h5>Cochinita Tonkatsu</h5>
              <p>Shoyu tare, cochinita pibil, pickled onions, avocado, tortilla strips.  <b>Great for first time guests!</b></p>
            </div>
            <div className="item" id="item3">
              <div className="pic"></div>
              <h5>Menudo Tonkatsu</h5>
              <p>Guajillo tare, honeycomb tripe, hominy, arbol chilis, tortilla strips. <b>Pa la cruda!</b></p>
            </div>
            <div className="item" id="item4">
              <div className="pic"></div>
              <h5>Mole Tsukemen</h5>
              <p>Mole negro, karaage, Tortilla strips. Dip the noodles. <b>Don't</b> dump the broth over the noodles, pendejo!</p>
            </div>
            <div className="item" id="item5">
              <div className="pic"></div>
              <h5>Chilaquiles-Men</h5>
              <p><b>Dry ramen.</b> Thick noodles tossed in a tomatillo/yuzu-kosho salsa. Chorizo, crispy tortilla strips, avocado, crema.</p>
            </div>
            <div className="item" id="item6">
              <div className="pic"></div>
              <h5>Aguachile Cold Noodles</h5>
              <p>Thick noodles in a green  aguachile sauce. Poached shrimp tsunomono tossed in habanero mayu and agave. <b>Pica cabron!</b></p>
            </div>
          </div>
        </div>
        <div className="notRamenMenu">
          <h2 className="brush">NOT RAMEN</h2>
          <div className="yakiTacos">
            <h3 className="brush">Yaki-Tacos</h3>
            <h4>Robata skewers land on soft corn tortillas, with classic taco toppings.</h4>
            <div className="items">
              <div className="item" id="item1">
                <div className="pic"></div>
                <h5>Lengua</h5>
                <p>Braised beef tongue, piloncillo tare, red salsa.</p>
              </div>
              <div className="item" id="item2">
                <div className="pic"></div>
                <h5>Pork Belly</h5>
                <p>Glazed in al pastor, shaved pineapple, green salsa.</p>
              </div>
              <div className="item" id="item3">
                <div className="pic"></div>
                <h5>Pollo Asado</h5>
                <p>Chicken thigh, green onions, piloncillo tare, red salsa.</p>
              </div>
              <div className="item" id="item4">
                <div className="pic"></div>
                <h5>Tako</h5>
                <p>Spanish octopus, achiote marinade, red salsa.</p>
              </div>
            </div>
          </div>
          <div className="tostadas">
            <h3 className="brush">Tostadas</h3>
            <h4>Fried corn tortillas hosting bright and fresh seafood pairings.</h4>
            <div className="items">
              <div className="item" id="item1">
                <div className="pic"></div>
                <h5>Hamachi</h5>
                <p>Diced hamachi, habanero mayo, agave, ponzo soaked cherry tomatoes, nori, guac.</p>
              </div>
              <div className="item" id="item2">
                <div className="pic"></div>
                <h5>Camaron</h5>
                <p>Poached shrimp, mojo de ajo, kewpie, burnt orange, pickled habanero, yuzu tobiko, shiro goma, guac.</p>
              </div>
            </div>
          </div>
          <div className="forSharing">
            <h3 className="brush">For Sharing</h3>
            <div className="items">
              <div className="item" id="item1">
                <div className="pic"></div>
                <h5>Karaage</h5>
                <p>Kewpie, tomatillo kosho, agave.</p>
              </div>
            </div>
          </div>
        </div>
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
  }
  h3 {
    color: white;
  }
  h2, h3, h4 {
    filter: drop-shadow(3px 3px 4px black);
  }
  h4 {
    color: white;
  }
  h5{
    font-size: 3rem;
    padding: 1rem;
  }
  .menu {
    border: 2px solid white;
    margin: 0 2%;
    padding: 2% 0;
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
    width: 25%;
    margin: 2%;
  }
  .item .pic {
    background-size: cover;
    background-position: center;
    height: 30vh;
    width: 23vw;
  }
  #item1 .pic {
    background-image: url(${ramen1});
  }
  #item2 .pic {
    background-image: url(${ramen5});
  }
  #item3 .pic {
    background-image: url(${ramen6});
  }
  #item4 .pic {
    background-image: url(${ramen3});
  }
  #item5 .pic {
    background-image: url(${ramen4});
  }
  #item6 .pic {
    background-image: url(${ramen2});
  }
`;
