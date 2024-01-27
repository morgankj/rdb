import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/ramen_del_barrio/?hl=en"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.yelp.com/biz/ramen-del-barrio-austin"
      >
        <i class="fa-brands fa-yelp"></i>
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;

`
