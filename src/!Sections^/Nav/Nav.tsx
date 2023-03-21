import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const Nav = () => {
    const handleClick = (path) => {
        console.log(`up`);
        if (path === "/AdProducts") {
          console.log("I clicked on the About Page");
        }
        if (path === "/posts") {
          console.log("I clicked on the Posts Page");
        }
      };
    
    return (
        <NavParent>
            <NavWrapper>
                <GroupNav>
                    <NavListUL>
                        {/* <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper> 
                                                <SagePNG src='/G_Icons/Dashboard_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Dashboard</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink> 
                        </NavListLI> */}
                        {/* <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Self_Serve_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Self Serve</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI> */}

                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper> 
                                                <SagePNG src='/G_Icons/Dashboard_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <Link href='/'> 
                                        <LILabel>Dior</LILabel>
                                        </Link>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>

                                                <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Ad_Products_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <Link href='/Ad_Products'> 
                                        <LILabel>Ad Products</LILabel>
                                        </Link>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>

                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Reports_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Outcomes</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                        <NavListLI>
                            <NavListLink>
                                <IconTextSage>
                                    <DecoratedTextSage>
                                        <TextSageDecoration_Icon>
                                            <SVGSage_Wrapper>
                                                <SagePNG src='/G_Icons/Audience_Icon.png'></SagePNG>
                                            </SVGSage_Wrapper>
                                        </TextSageDecoration_Icon>
                                        <LILabel>Audience</LILabel>
                                    </DecoratedTextSage>
                                </IconTextSage>
                            </NavListLink>
                        </NavListLI>
                    </NavListUL>
                </GroupNav>
            </NavWrapper>
        </NavParent>
    );
};

export default Nav;

const NavParent = styled.section`
    height: 100%;
    min-width: 166px;
    max-width: 166px;
    position: absolute;
    left: 0px;
    flex-grow: 1;
    background: rgb(62,62,62);
    background: -moz-radial-gradient(circle, rgba(62,62,62,1) 0%, rgba(65,65,65,1) 33%, rgba(59,59,59,1) 66%, rgba(56,56,56,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(62,62,62,1) 0%, rgba(65,65,65,1) 33%, rgba(59,59,59,1) 66%, rgba(56,56,56,1) 100%);
    background: radial-gradient(circle, rgba(62,62,62,1) 0%, rgba(65,65,65,1) 33%, rgba(59,59,59,1) 66%, rgba(56,56,56,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3e3e3e",endColorstr="#383838",GradientType=1);
    background-size: 240% 240%!important;
    animation: gradientAnimation 4s ease-in-out infinite;
    `;

const NavWrapper = styled.div`
    border: 1.4px solid black;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    height: 100%;
`;

const GroupNav = styled.nav`
    border: 1.4px solid black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 460px;
    border: 0px solid transparent;
`;

const NavListUL = styled.ul`
    border: 1.4px solid black;
    margin: 0;
    padding: 4px;
    border-radius: 4px;
`;
const NavListLI = styled.li`
    align-items: center;
    display: flex;
    margin-bottom: 7.6px;
    position: relative;
    background: rgb(34,34,34);
    background: -moz-linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#222222",endColorstr="#1b1b1b",GradientType=1);
    box-shadow: rgba(128, 128, 145, 0.15) 0px 13px 27px -5px, rgba(192, 192, 230, 0.3) 0px 8px 16px -8px;
    `;

const NavListLink = styled.a`
    border: 1.23px solid whitesmoke;
    align-items: center;
    border-radius: 4px;
    color: #ebeef2;
    transition: color 0.15s ease;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    position: relative;
    text-decoration: none;
    width: 100%;
    height: 36px;
    width: 226px;
`;
const IconTextSage = styled.span`
    display: flex;
    align-items: center;
    border-radius: 4px;
    // color: #ebeef2;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    position: relative;
    text-decoration: none;
    width: 100%;
`;
const DecoratedTextSage = styled.span`
    align-items: center;
    border-radius: 4px;
    color: #ebeef2;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    padding-left: 2px;
    position: relative;
    text-decoration: none;
    width: 100%;
    align-items: center;
    display: inline-flex;
`;
const TextSageDecoration_Icon = styled.span`
    margin-right: 0px;
    align-items: center;
    border-radius: 4px;
    color: #b59ceb;
    display: flex;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    position: relative;
    margin-left: 6px;
    text-decoration: none;
    width: 28px;
    height: 28px;
`;
const SVGSage_Wrapper = styled.span`
    display: flex;
    justify-content: center;
`;
const SagePNG = styled.img`
    height: 23px;
    width: 23px;
`;
const LILabel = styled.span`
    text-align: center;
    color: #75b6e7;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12.3px;
    left: 3.3px;
    position: relative;
    font-weight: 600!important;
    font-family: helvetica;
    font-family: organetto;
    letter-spacing: 0.66px;
`;
