import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Actions from './Actions';

const Header = () => {
    return (
        <Header_Parent>
            <Header_Wrapper>
                <Header_Container_One>
                    <Glamour_Shot_Container>
                        <Glamour_Shot src='/ProfilePic.jpg'></Glamour_Shot>
                    </Glamour_Shot_Container>
                </Header_Container_One>

                <Header_Container_Main>
                    <Header_Container_Dash>
                        <Header_Search></Header_Search>
                    </Header_Container_Dash>

                    <Header_Container_Panel>
                        <Actions></Actions>
                    </Header_Container_Panel>
                </Header_Container_Main>
            </Header_Wrapper>
        </Header_Parent>
    );
};

export default Header;

const Header_Parent = styled.header`
    // border: 3px solid white;
    max-height: 76px;
    min-height: 76px;
    width: 100%;
`;

const Header_Wrapper = styled.div`
    max-height: 76px;
    min-height: 76px;
    align-items: center;
    display: flex;
`;

const Header_Container_One = styled.section`
    // border: 3px solid white;
    min-width: 176px;
    max-width: 176px;
    max-height: 76px;
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Glamour_Shot_Container = styled.div`
    display: flex;
    width: 66px;
    height: 66px;
    border: 1.2px solid white;
    border-radius: 50%;
    box-shadow: rgba(255, 255, 255, 0.0212) 0px 4px 55px, rgba(217, 217, 217, 0.062) 0px -12px 30px,
        rgba(224, 224, 224, 0.06) 0px 4px 6px, rgba(233, 233, 233, 0.07) 0px 12px 13px,
        rgba(227, 227, 227, 0.07) 0px -3px 5px;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.1112) 0px 4px 5px, rgba(217, 217, 217, 0.11) 0px -12px 3px,
            rgba(224, 224, 224, 0.11) 0px 4px 6px, rgba(233, 233, 233, 0.11) 0px 3px 3px,
            rgba(227, 227, 227, 0.09) 0px -3px 5px;
    }
`;

const Glamour_Shot = styled.img`
    align-self: center;
    display: flex;
    cursor: pointer;
    justify-self: center;
    width: calc(100% - 1.2px);
    height: calc(100% - 1.2px);
    &:hover {
        transform: scale(1.14);
    }
`;
const Header_Container_Main = styled.section`
    width: calc(100% - 176px);
    max-height: 76px;
    min-height: 76px;
    // border: 3px solid white;
    display: flex;
`;
const Header_Container_Dash = styled.div`
    // border: 3px solid white;
    width: calc(100% - 333px);
    max-height: 76px;
    min-height: 76px;
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Header_Container_Panel = styled.div`
    max-width: calc(333px);
    min-width: calc(333px);
    max-height: 76px;
    min-height: 76px;
    right: 0%;
    // border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header_Search = styled.div`
    cursor: pointer;
    width: calc(100% / 1.6181);
    padding: 0 16px;
    outline: #fff;
    height: 30.8px;
    border: 2px solid white;
    border-radius: 2px;
    box-shadow: rgba(255, 255, 255, 0.0212) 0px 4px 55px, rgba(217, 217, 217, 0.062) 0px -12px 30px,
        rgba(224, 224, 224, 0.06) 0px 4px 6px, rgba(233, 233, 233, 0.07) 0px 12px 13px,
        rgba(227, 227, 227, 0.07) 0px -3px 5px;
`;
