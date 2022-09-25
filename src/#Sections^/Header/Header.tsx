import React from 'react';
import styled from 'styled-components';
import Header_Actions from './components/Header_Actions';

const Header_Parent = styled.header`
    background-color: transparent;
    padding: 20px;
    padding-bottom: 0;
    padding-top: 0;
    /* Temp */
    max-height: 66px;
    min-height: 66px;
    width: 100%;
    border: 1px solid white;
`;

const Header_Wrapper = styled.div`
    max-height: 66px;
    min-height: 66px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const GlamourShotContainer = styled.div`
    display: flex;
    justify-self: start;
    width: 55px;
    left: 8px;
    position: absolute;
    height: 55px;
    border: 1.2px solid white;
    border-radius: 50%;
`;

const GlamourShot = styled.img`
    align-self: center;
    display: flex;
    justify-self: center;
    width: calc(100% - 1.2px);
    height: calc(100% - 1.2px);
`;

const Header_Search = styled.div`
    display: block;
    padding: 0 16px;
    outline: #fff;
    /* Temp */
    width: 508px;
    height: 36px;
    border: 1px solid white;
`;

// const Header_Actions = styled.div`
//   display: flex;
//   /* Temp */
//   width: 253px;
//   height: 36px;
//   border: 1px solid white;
// `

const Header = () => {
    return (
        <Header_Parent>
            <Header_Wrapper>
                <GlamourShotContainer>
                    <GlamourShot src='/ProfilePic.jpg'></GlamourShot>
                </GlamourShotContainer>
                <Header_Search></Header_Search>
                <Header_Actions></Header_Actions>
            </Header_Wrapper>
        </Header_Parent>
    );
};

export default Header;
