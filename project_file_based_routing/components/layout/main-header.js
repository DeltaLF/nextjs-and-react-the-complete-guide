import Link from "next/link";
import styled from "styled-components";
function MainHeader() {
  return (
    <Header>
      <Logo>
        <Link href="/">NextEvents</Link>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link href={"/events"}>All Events</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

export default MainHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;
  a {
    text-decoration: none;
    color: #94fdfd;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    a {
      font-size: 1.5rem;
    }
  }
`;
