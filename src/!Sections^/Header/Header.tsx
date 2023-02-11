import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Actions from './Actions';

const Header = () => {
    return (
        <Header_Parent>
            <Header_Wrapper>
                <UBMedia_Container_Parent>
                    <UBMedia_Logo_Wrapper>
                        <UBMedia_Logo src='/G/G_UBMedia_Logo.png'></UBMedia_Logo>
                    </UBMedia_Logo_Wrapper>
                </UBMedia_Container_Parent>

                <Header_Container_Main>
                    <Header_Container_Dash>
                        <Header_Search>
                            <Header_Search_Icon src='/Ulta/Search_Icon.png'>
                            </Header_Search_Icon>
                        </Header_Search>
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
    // border: 1.4px solid black;
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

const UBMedia_Container_Parent = styled.section`
    min-width: 232px;
    max-width: 232px;
    max-height: 76px;
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: start;
    border: 4px solid white;
    background-color: white;
`;

const UBMedia_Logo_Wrapper = styled.div`
    display: flex;
    border: 1.2px solid transparent;
    background-color: white;
`;

const UBMedia_Logo = styled.img`
    align-self: center;
    display: flex;
    cursor: pointer;
    justify-self: center;
`;

const Header_Container_Main = styled.section`
    width: calc(100% - 176px);
    max-height: 76px;
    min-height: 76px;
    // border: 1.4px solid black;
    display: flex;
    background-color: white;
`;

const Header_Container_Dash = styled.div`
    // border: 1.4px solid black;
    width: calc(100% - 333px);
    max-height: 76px;
    min-height: 76px;
    display: flex;
    position: relative;
    margin-left: 24px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Header_Container_Panel = styled.div`
    max-width: calc(333px);
    min-width: calc(333px);
    max-height: 76px;
    min-height: 76px;
    right: 30px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const Header_Search = styled.div`
    cursor: pointer;
    width: 370px;
    padding: 0 16px;
    font-family: sans-serif;
    font-family: 12px;
    outline: #fff;
    height: 38px;
    border: 2px solid black;
    border-radius: 40px;
    background-color: #F5F5F5;
`;

const Header_Search_Icon = styled.img`
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-family: sans-serif;
    font-family: 12px;
    background-color: #F5F5F5;
    position: relative;
    right: 9px;
    top: 5px;
    z-index: 999;
`;
