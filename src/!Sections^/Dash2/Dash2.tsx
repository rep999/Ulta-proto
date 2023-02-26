import { compareCreated_At, compareFiresAsc, compareFiresDesc } from './2_utils/compare';
import { GetServerSideProps } from 'next';
import { text } from 'stream/consumers';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// @ts-ignore
import useStore from 'src/*Store^/Store';

interface Fire {
    count?: string;
    created_at?: string;
    id?: string;
    text?: string;
    text_title?: string;
    title?: string;
    topic?: string;
    url?: string;
    category?: string;
    weight?: string;
}

// @ts-ignore
const Dash2 = () => {
    // @ts-ignore
    const topicSelection = useStore((state) => state.topicSelection);
    // @ts-ignore
    const categorySelection = useStore((state) => state.categorySelection);
    // @ts-ignore
    const weightSelection = useStore((state) => state.weightSelection);
    const [SubNavTitleText, setTheFireNetText] = useState('Ad Products');
    const [fireDT, setFireDT] = useState<any>([]);
    const [nwFireDT, setNwFireDT] = useState<any>([]);
    const [renderTG, setRenderTG] = useState<boolean>(false);
    const [firesAsc, setFiresAsc] = useState<boolean>(false);
    const [firesDesc, setFiresDesc] = useState<boolean>(false);
    const [cardsView, setCardsView] = useState<boolean>(true);
    const [cubesView, setCubesView] = useState<boolean>(false);

    useEffect(() => {
        if (topicSelection) {
            const t = fireDT.filter((fire) => fire.topic === topicSelection);
            if (t.length === 0) {
                setTheFireNetText('Nothing here yet 🥲');
            } else {
                setTheFireNetText('The FireNet');
            }
            setNwFireDT(t);
            setRenderTG(!renderTG);
        } else {
            setNwFireDT('');
        }
    }, [topicSelection]);

    useEffect(() => {
        if (categorySelection) {
            const t = fireDT.filter((fire) => fire.category === categorySelection);
            if (t.length === 0) {
                setTheFireNetText('Nothing here yet 🥲');
            } else {
                setTheFireNetText('The FireNet');
            }
            setNwFireDT(t);
            setRenderTG(!renderTG);
        } else {
            setNwFireDT('');
        }
    }, [categorySelection]);

    useEffect(() => {
        if (weightSelection) {
            const t = fireDT.filter((fire) => fire.weight === weightSelection);
            if (t.length === 0) {
                setTheFireNetText('Nothing here yet 🥲');
            } else {
                setTheFireNetText('The FireNet');
            }
            setNwFireDT(t);

            setRenderTG(!renderTG);
        } else {
            setNwFireDT('');
        }
    }, [weightSelection]);

    const CardClick = () => {
        setCardsView(!cardsView);
        setCubesView(!cubesView);
    };

    const CubeClick = () => {
        setCardsView(!cardsView);
        setCubesView(!cubesView);
    };

    const ProcessClicked = () => {
        const CardListUL = document.getElementById("CardListUL") as HTMLImageElement;
            CardListUL.src = "To-Be.png";
    };

    const ByFireClick = () => {
        // ANCHOR
        if (!firesAsc && !firesDesc) {
            // Initial State
            setFireDT(fireDT.sort(compareFiresAsc));
            setRenderTG(!renderTG);
            setFiresAsc(true);
            setFiresDesc(false);
        } else if (firesAsc && !firesDesc) {
            // Asc
            setFireDT(fireDT.sort(compareFiresDesc));
            setRenderTG(!renderTG);
            setFiresAsc(false);
            setFiresDesc(true);
        } else if (!firesAsc && firesDesc) {
            // Desc
            setFireDT(fireDT.sort(compareFiresAsc));
            setRenderTG(!renderTG);
            setFiresAsc(true);
            setFiresDesc(false);
        }
    };

    const DiorDashClicked = () => {
        // ANCHOR
        // const CardListUL = document.getElementById('CardListUL');
        // CardListUL?.src = "/public/Photoshop/LandingPage_2.png"'
        const CardListUL = document.getElementById("CardListUL") as HTMLImageElement;
        if (CardListUL.src === "http://localhost:3000/Photoshop/Landing2.png") { 
            CardListUL.src = "Photoshop/Landing3.png";
        }
        if (CardListUL.src === "http://localhost:3000/Photoshop/Landing1.png") { 
            CardListUL.src = "Photoshop/Landing2.png";
        }


        // // ~Remove the highlight from the other circle ; new click happened..
        // if (circSelectedST && CircClickedCN != circSelectedST) {
        //     circSelectedST.src = '/whiteCircle.png';
        // }
        // // ~AND Circle clicked with no highlight
        // if (CircClickedCN && !isHighlighted(CircClickedCN)) {
        //     CircClickedCN.src = '/purpleStrokedCircle.png';
        //     setCircSelectedST(CircClickedCN);
        //     stateSetter(true);
        //     CircClickedCN.style.zIndex = '999';
        //     // ~Circle with Highlight
        // } else {
        //     if (CircClickedCN) {
        //         CircClickedCN.src = '/whiteCircle.png';
        //         setCenterCircle('Topics');
        //     }
        //     stateSetter(false);
        //     CircClickedCN.style.zIndex = '0';
        // }
    };

    const ByCategoryClick = () => {};
    return (
        <DashContainer>
            <TopHeaderContainer>
                <TopHeaderTitleRow>
                    <WelcomeTitleContainer>
                        <SubNavTitle>{SubNavTitleText} </SubNavTitle>
                        <DockBtnSpace>
                            <DockBtnContainer>
                                <DockCardsBtnContainer onClick={() => CardClick()}>
                                    <DockCardsBtn src='/Ulta/Flow_Chart.png' />
                                </DockCardsBtnContainer>
                                <DockCubesBtnContainer onClick={() => CubeClick()}>
                                    <DockCubesBtn src='/Calendar_Icon.png' />
                                </DockCubesBtnContainer>
                            </DockBtnContainer>
                        </DockBtnSpace>
                    </WelcomeTitleContainer>
                </TopHeaderTitleRow>
                <TopHeaderSpacerContainer>
                    <TopHeaderSpacer></TopHeaderSpacer>
                </TopHeaderSpacerContainer>
                <DockPanel>
                    <ByDateContainer>
                        <ByDate onClick={() => ProcessClicked()}>Process</ByDate>
                    </ByDateContainer>
                    <ByCategoryContainer>
                        <ByCategory onClick={() => ByCategoryClick()}>Launch</ByCategory>
                    </ByCategoryContainer>
                    <ByFireContainer>
                        <ByFire onClick={() => ByFireClick()}>Track</ByFire>
                    </ByFireContainer>
                </DockPanel>
            </TopHeaderContainer>

            <ContentSectional>
                {cardsView ? (
                    <CardsContentContainer>
                        <CardListUL id="CardListUL" onClick={() => DiorDashClicked()} src="Photoshop/Landing3.png">
                        </CardListUL>

                    </CardsContentContainer>
                ) : (
                    <Cube_Row>
                    </Cube_Row>
                )}
            </ContentSectional>
        </DashContainer>
    );
};

export default Dash2; 

const DashContainer = styled.div`
    height: 100%;
    width: calc(100% - 333px);
`;

const TopHeaderContainer = styled.div`
    height: 12.12%;
    min-height: 93px;
    max-height: 103px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-size: 140% 140%!important;
    background: -moz-linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(50,50,50,1) 33%, rgba(41,41,41,1) 66%, rgba(27,27,27,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#222222",endColorstr="#1b1b1b",GradientType=1);
    animation: gradientAnimation 7s ease-in-out infinite;
    `;
const TopHeaderTitleRow = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
`;

const WelcomeTitleContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubNavTitle = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    font-family: organetto;
    letter-spacing: 1.28px;
    font-weight: bold;
    color: #ededed;
    font-size: 21.21px;
    text-align: center;
    position: relative;
    top: 6.6px;
    // background: transparent;
    // box-shadow: rgb(128 128 145 / 45%) 0px 1px 42px 3px;
`;

const TopHeaderSpacerContainer = styled.div`
    /* border: 2px solid orange; */
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DockPanel = styled.div`
    // border: 2px solid pink;
    height: 39%;
    width: 100%;
    display: flex;
    justify-content: center;ß
    align-items: center;
`;

const ByDateContainer = styled.div`
    height: 100%;
    width: 166px;
    margin-left: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: helvetica;
`;

const ByDate = styled.span`
    height: 100%;
    width: 44%;
    text-align: center;
    color: #ededed;
    font-size: 13.33px;
    cursor: pointer;
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-weight: 800;
`;

const ByFireContainer = styled.div`
    height: 100%;
    width: 166px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: helvetica;
`;

const ByFire = styled.span`
    height: 100%;
    width: 100%;
    text-align: center;
    color: black;
    font-size: 13.33px;
    cursor: pointer;
    display: flex;
    color: #ededed;
    white-space: nowrap;
    align-items: center;
    font-weight: 100;
    background: transparent;
`;

const ByCategoryContainer = styled.div`
    height: 100%;
    width: 166px;
    cursor: pointer;
    display: flex;
    color: #ededed;
    justify-content: center;
    align-items: center;
    font-family: helvetica;
`;

const ByCategory = styled.span`
    height: 100%;
    width: 55%;
    text-align: center;
    color: #ededed;
    display: flex;
    font-size: 13.33px;
    white-space: nowrap;
    align-items: center;
    width: 64%;
    font-weight: 800;
`;

const DockBtnSpace = styled.div`
    position: absolute;
    height: 37.2px;
    width: 100%;
    display: flex;
    color: black;
    right: 0px;
    justify-content: end;
    align-items: center;
`;

const DockBtnContainer = styled.div`
    border: 1.8px solid whitesmoke;
    border-radius: 6px;
    height: 102%;
    width: 82.6px;
    right: 10px;
    display: flex;
    justify-content: space-evenly;
    color: black;
    position: relative;
`;

const DockCardsBtnContainer = styled.div`
    border: 0.4px solid whitesmoke;
    padding: 4px;
    border-radius: 7px;
    height: 28px;
    width: 28px;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
    top: 3.5px;
`;

const DockCardsBtn = styled.img`
    /* border: 2px solid orange; */
    height: 100%;
    width: 100%;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.04);
    }
`;

const DockCubesBtnContainer = styled.div`
border: 0.4px solid whitesmoke;
    padding: 4px;
    border-radius: 6px;
    height: 28px;
    width: 28px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: 3.5px;
`;

const DockCubesBtn = styled.img`
    /* border: 2px solid purple; */
    height: 77%;
    width: 77%;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.04);
    }
`;

const TopHeaderSpacer = styled.div`
    height: 3px;
    width: 90%;
    border-radius: 22%;
    background: rgb(167, 167, 167);
    background: rgb(236,235,255);
    background: -moz-linear-gradient(90deg, rgba(236,235,255,1) 0%, rgba(240,240,240,1) 33%, rgba(177,223,250,1) 66%, rgba(193,245,255,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(236,235,255,1) 0%, rgba(240,240,240,1) 33%, rgba(177,223,250,1) 66%, rgba(193,245,255,1) 100%);
    background: linear-gradient(90deg, rgba(236,235,255,1) 0%, rgba(240,240,240,1) 33%, rgba(177,223,250,1) 66%, rgba(193,245,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ecebff",endColorstr="#c1f5ff",GradientType=1);
    display: flex;
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;
`;

const TopHeaderCatchUpText = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
`;

const ContentSectional = styled.section`
    height: 88.88%;
    width: 100%;
    display: flex;
    color: black;
    right: 0px;
    border: 1.4px solid black;
    cursor: pointer;
    overflow-y: scroll;
    animation: gradientAnimation 7s ease-in-out infinite;
    background-size: 400% 400%;
`;

const CardsContentContainer = styled.div`
    width: 100%;
    border: 1.4px solid black;
    overflow-y: scroll;
`;

const CardListUL = styled.img`
    margin: 0;
    padding: 0;
    height:100%;
    width: 100%;
    list-style: none;
`;

const Cube_Row = styled.div`
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    flex-direction: row;
    width: 100%;
    overflow-y: scroll;
`;

const Blue_Column = styled.div`
    // width: 430px;
    // height: 400px;
    // border: 2px solid orange;
    flex: 1 0 500px;
    align-self: stretch;
    max-width: 100%;
    min-height: 10rem;
    margin: 5px;
    border: 2px solid #ccc;
    background: white;
`;

const Orange_Column = styled.div`
    // width: 430px;
    // height: 400px;
    // border: 2px solid pink;
    flex: 1 0 500px;
    align-self: stretch;
    max-width: 100%;
    min-height: 10rem;
    margin: 5px;
    border: 2px solid #ccc;
    background: white;
`;
