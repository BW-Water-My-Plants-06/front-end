import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 13px;
`;

export function ClientNavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
      <LinkItem>
          <Link href="/home">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/plants">Plants</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/create-my-plant">Create My Plant</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/about">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/contact">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/profile">Profile</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}