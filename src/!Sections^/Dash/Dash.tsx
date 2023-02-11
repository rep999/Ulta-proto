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
const Dash = () => {
    // @ts-ignore
    const topicSelection = useStore((state) => state.topicSelection);
    // @ts-ignore
    const categorySelection = useStore((state) => state.categorySelection);
    // @ts-ignore
    const weightSelection = useStore((state) => state.weightSelection);
    const [TheFireNetText, setTheFireNetText] = useState('UB Media');
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

    const ByDateClick = () => {
        setFireDT(fireDT.sort(compareCreated_At));
        setRenderTG(!renderTG);
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

    const ByCategoryClick = () => {};
    return (
        <DashContainer>
            <TopHeaderContainer>
                <TopHeaderTitleRow>
                    <WelcomeTitleContainer>
                        <TheFireNet>{TheFireNetText} </TheFireNet>
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
                        <ByDate onClick={() => ByDateClick()}>OnSite</ByDate>
                    </ByDateContainer>
                    <ByCategoryContainer>
                        <ByCategory onClick={() => ByCategoryClick()}>Social Media</ByCategory>
                    </ByCategoryContainer>
                    <ByFireContainer>
                        <ByFire onClick={() => ByFireClick()}>Offsite</ByFire>
                    </ByFireContainer>
                </DockPanel>
            </TopHeaderContainer>

            <ContentSectional>
                {cardsView ? (
                    <CardsContentContainer>
                        <CardListUL src="Ulta/To-Be-Process.png">
                            {/* {fireDT && nwFireDT.length === 0
                                ? fireDT.map((fire: Fire, i: number) => (
                                      <Card
                                          key={Math.random()}
                                          count={fire.count}
                                          created_at={fire.created_at}
                                          id={fire.id}
                                          text={fire.text}
                                          text_title={fire.text_title}
                                          title={fire.title}
                                          topic={fire.topic}
                                          // @ts-ignore
                                          category={fire.category}
                                          // @ts-ignore
                                          weight={fire.weight}
                                          url={fire.url}></Card>
                                  ))
                                : nwFireDT.map((fire: Fire, i: number) => (
                                      <Card
                                          key={Math.random()}
                                          count={fire.count}
                                          created_at={fire.created_at}
                                          id={fire.id}
                                          text={fire.text}
                                          text_title={fire.text_title}
                                          title={fire.title}
                                          topic={fire.topic}
                                          // @ts-ignore
                                          category={fire.category}
                                          // @ts-ignore
                                          weight={fire.weight}
                                          url={fire.url}></Card>
                                  ))} */}
                        </CardListUL>
                    </CardsContentContainer>
                ) : (
                    <Cube_Row>
                        {fireDT && nwFireDT.length === 0
                            ? fireDT.map((fire: Fire, i: number) => (
                                  <Cube
                                      key={Math.random()}
                                      count={fire.count}
                                      created_at={fire.created_at}
                                      id={fire.id}
                                      text={fire.text}
                                      text_title={fire.text_title}
                                      title={fire.title}
                                      topic={fire.topic}
                                      // @ts-ignore
                                      category={fire.category}
                                      // @ts-ignore
                                      weight={fire.weight}
                                      url={fire.url}></Cube>
                              ))
                            : nwFireDT.map((fire: Fire, i: number) => (
                                  <Cube
                                      key={Math.random()}
                                      count={fire.count}
                                      created_at={fire.created_at}
                                      id={fire.id}
                                      text={fire.text}
                                      text_title={fire.text_title}
                                      title={fire.title}
                                      topic={fire.topic}
                                      // @ts-ignore
                                      category={fire.category}
                                      // @ts-ignore
                                      weight={fire.weight}
                                      url={fire.url}></Cube>
                              ))}
                    </Cube_Row>
                )}
            </ContentSectional>
        </DashContainer>
    );
};

export default Dash;

const DashContainer = styled.div`
    height: 100%;
    width: calc(100% - 333px);
    /* border: 6px solid purple; */
`;

const TopHeaderContainer = styled.div`
    /* border: 2px solid green; */
    height: 12.12%;
    min-height: 93px;
    max-height: 103px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const TopHeaderTitleRow = styled.div`
    /* border: 2px solid orange; */
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

const TheFireNet = styled.div`
    height: 65%;
    width: 40%;
    text-align: center;
    font-family: Helvetica;
    font-weight: bold;
    color: black;
    font-size: 28px;
    text-align: center;
    margin-bottom: 1px;
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
    width: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ByDate = styled.span`
    height: 100%;
    width: 44%;
    text-align: center;
    color: black;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-weight: 800;
`;

const ByFireContainer = styled.div`
    // border: 2px solid pink;
    height: 100%;
    width: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ByFire = styled.span`
    height: 100%;
    width: 41%;
    text-align: center;
    color: black;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    // border: 2px solid purple;
    white-space: nowrap;
    align-items: center;
    font-weight: 800;
`;

const ByCategoryContainer = styled.div`
    // border: 2px solid pink;
    height: 100%;
    width: 23%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ByCategory = styled.span`
    // border: 2px solid purple;
    height: 100%;
    width: 55%;
    text-align: center;
    color: black;
    display: flex;
    font-size: 18px;
    white-space: nowrap;
    align-items: center;
    width: 64%;
    font-weight: 800;
`;

const DockBtnSpace = styled.div`
    position: absolute;
    /* border: 1.4px solid black; */
    height: 37.2px;
    width: 100%;
    display: flex;
    color: black;
    right: 0px;
    justify-content: end;
    align-items: center;
`;

const DockBtnContainer = styled.div`
    border: 1.8px solid black;
    border-radius: 3px;
    border-radius: 6px;
    height: 100%;
    width: 86.6px;
    right: 10px;
    display: flex;
    justify-content: space-evenly;
    color: black;
    position: relative;
`;

const DockCardsBtnContainer = styled.div`
    border: 0.4px solid black;
    padding: 4px;
    border-radius: 12px;
    height: 82%;
    width: 33px;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
    top: 2.8px;
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
    border: 0.4px solid black;
    padding: 4px;
    border-radius: 12px;
    height: 82%;
    width: 33px;
    display: flex;
    color: black;
    position: relative;
    right: 0px;
    justify-content: center;
    align-items: center;
    top: 2.8px;
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
    /* border: 1px solid black; */
    height: 3px;
    width: 90%;
    border-radius: 22%;
    background: rgb(167, 167, 167);
    // background: -moz-linear-gradient(
    //     90deg,
    //     rgba(167, 167, 167, 1) 0%,
    //     rgba(167, 167, 204, 1) 33%,
    //     rgba(156, 239, 255, 1) 100%
    // );
    // background: -webkit-linear-gradient(
    //     90deg,
    //     rgba(167, 167, 167, 1) 0%,
    //     rgba(167, 167, 204, 1) 33%,
    //     rgba(156, 239, 255, 1) 100%
    // );
    // background: linear-gradient(
    //     90deg,
    //     rgba(167, 167, 167, 1) 0%,
    //     rgba(167, 167, 204, 1) 33%,
    //     rgba(156, 239, 255, 1) 100%
    // );
    display: flex;
`;

const TopHeaderCatchUpText = styled.div`
    /* border: 2px solid orange; */
    height: 30%;
    width: 100%;
    display: flex;
`;

const ContentSectional = styled.section`
    /* border: 2px solid orange; 
    // position: relative;
    // flex-direction: column;
    */
    height: 88.88%;
    width: 100%;
    display: flex;
    color: black;
    right: 0px;
    border: 1.4px solid black;
    cursor: pointer;
    overflow-y: scroll;
`;

const CardsContentContainer = styled.div`
    width: 100%;
    border: 1.4px solid black;
    overflow-y: scroll;
`;

const CardListUL = styled.img`
    border: 2px solid purple; 
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
