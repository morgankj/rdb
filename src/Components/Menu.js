import styled from "styled-components";

export default function Home() {
  return (
    <StyledMenu>
      <h1 className="brush">MENU</h1>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
`;
