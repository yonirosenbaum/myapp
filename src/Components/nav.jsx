import React from "react";
import styled from "styled-components";
import { Link, animateScroll } from "react-scroll";

const Navbar = styled.nav`
  width: 100vw;
  background: darkgrey;
  box-shadow: -1 0 2 2 white;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  padding: 0;
`;
const Li = styled.li`
  list-style: none;
  flex-grow: 1;
  color: white;
  font-weight: 700;
  padding-bottom: 10px;
  min-width: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const renderLinks = (links) => {
  const mappedLinks = links.map((link) => {
    return (
      <Li>
        <Link
          to={`${link}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {link}
        </Link>
      </Li>
    );
  });
  return mappedLinks;
};

const Nav = () => {
  return (
    <Navbar>
      <Ul>
        {renderLinks([
          "Question 1",
          "Question 2",
          "Question 3",
          "Question 4",
          "Question 5",
          "Question 6",
        ])}
      </Ul>
    </Navbar>
  );
};

export default Nav;
