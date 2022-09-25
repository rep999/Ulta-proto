import React from 'react';
import styled from 'styled-components';

const NavEl = styled.div`
    height: 100%;
    min-width: 166px;
    max-width: 166px;
    position: absolute;
    left: 0px;
    border: 3px solid white;
    flex-grow: 1;
    background: #181920;
`;

const Nav = () => {
    return <NavEl></NavEl>;
};

export default Nav;
