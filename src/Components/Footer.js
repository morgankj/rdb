import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div>© 2023 MorJones, LLC. All rights reserved.</div>
      <div classNames="social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/ramen_del_barrio/?hl=en"
        >
          <i class="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.yelp.com/biz/ramen-del-barrio-austin"
        >
          <i class="fa-brands fa-yelp fa-xl"></i>
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  color: white;
  padding: 1.3rem 2%;
  i {
    padding: 0 1rem;
  }
`
