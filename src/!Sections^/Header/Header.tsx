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
                            <Header_Text_Wrapper>

                                <Header_Text>

                                </Header_Text>
                            </Header_Text_Wrapper>
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
    max-height: 66px;
    min-height: 66px;
    background: linear-gradient(111deg, rgba(0, 0, 0, 0.68) 11.2%, rgb(66, 66, 66) 77.6%);
`;

const Header_Wrapper = styled.div`
    max-height: 66px;
    min-height: 66px;
    align-items: center;
    display: flex;
`;

const UBMedia_Container_Parent = styled.section`
    min-width: 232px;
    max-width: 232px;
    max-height: 66px;
    min-height: 66px;
    display: flex;
    align-items: center;
    justify-content: start;
`;

const UBMedia_Logo_Wrapper = styled.div`
    display: flex;
    border: 1.2px solid transparent;
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
    display: flex;
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
    width: 280px;
    padding: 0 14px;
    font-family: sans-serif;
    outline: #fff;
    height: 33px;
    border: 1.89px solid #898989;
    border-radius: 21px;
    background: rgb(209,209,209);
    background: -moz-radial-gradient(circle, rgba(209,209,209,1) 0%, rgba(210,210,210,1) 50%, rgba(232,232,232,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(209,209,209,1) 0%, rgba(210,210,210,1) 50%, rgba(232,232,232,1) 100%);
    background: radial-gradient(circle, rgba(209,209,209,1) 0%, rgba(210,210,210,1) 50%, rgba(232,232,232,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d1d1d1",endColorstr="#e8e8e8",GradientType=1);
    box-shadow: rgb(128 128 123 / 15%) 0px 12px 2px -5px, rgb(112 122 140) 0px 6px 36px -8px
    
`;

const Header_Search_Icon = styled.img`
    cursor: pointer;
    width: 18.9px;
    height: 18.9px;
    font-family: sans-serif;
    position: relative;
    right: 8px;
    top: 6px;
    z-index: 99;
`;

const Header_Text_Wrapper = styled.div`
    cursor: pointer;
    width: 18.9px;
    height: 18.9px;
    font-family: sans-serif;
    position: relative;
    right: 8px;
    top: 6px;
    z-index: 99;
`;

const Header_Text = styled.div`
    cursor: pointer;
    width: 18.9px;
    height: 18.9px;
    font-family: sans-serif;
    position: relative;
    right: 8px;
    top: 6px;
    z-index: 99;
`;
