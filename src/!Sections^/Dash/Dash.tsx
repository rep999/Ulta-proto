import { compareCreated_At, compareFiresAsc, compareFiresDesc } from './2_utils/compare';
import { GetServerSideProps } from 'next';
import { supabase } from '../../../client.js';
import { text } from 'stream/consumers';
import Card from './1_components/Card';
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
const Dash = ({ fires }: Fire) => {
    // @ts-ignore
    const topicSelection = useStore((state) => state.topicSelection);
    // @ts-ignore
    const categorySelection = useStore((state) => state.categorySelection);
    // @ts-ignore
    const weightSelection = useStore((state) => state.weightSelection);
    const [TheFireNetText, setTheFireNetText] = useState('The FireNet');
    const [fireDT, setFireDT] = useState<any>([]);
    const [nwFireDT, setNwFireDT] = useState<any>([]);
    const [renderTG, setRenderTG] = useState<boolean>(false);
    const [firesAsc, setFiresAsc] = useState<boolean>(false);
    const [firesDesc, setFiresDesc] = useState<boolean>(false);

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

    let apple = fires;
    if (fireDT && fireDT.length !== fires.length) {
        setFireDT(apple);
    }
    const CardClick = () => {};

    const CubeClick = () => {};

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
                                    <DockCardsBtn src='/CardsIcon.png' />
                                </DockCardsBtnContainer>
                                <DockCubesBtnContainer onClick={() => CubeClick()}>
                                    <DockCubesBtn src='/CubesIcon.png' />
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
                        <ByDate onClick={() => ByDateClick()}>By Date</ByDate>
                    </ByDateContainer>
                    <ByCategoryContainer>
                        <ByCategory onClick={() => ByCategoryClick()}>By Category</ByCategory>
                    </ByCategoryContainer>
                    <ByFireContainer>
                        <ByFire onClick={() => ByFireClick()}>By Fire</ByFire>
                    </ByFireContainer>
                </DockPanel>
            </TopHeaderContainer>

            <ContentSectional>
                <CardsContentContainer>
                    <CardListUL>
                        {fireDT && nwFireDT.length === 0
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
                              ))}
                    </CardListUL>
                </CardsContentContainer>
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
    color: #b59ceb;
    font-size: 28px;
    text-align: center;
    margin-bottom: 1px;
    &:hover {
        transform: scale(1.2);
        box-shadow: rgba(255, 255, 255, 0.1112) 0px 4px 5px, rgba(217, 217, 217, 0.11) 0px -12px 3px,
            rgba(224, 224, 224, 0.11) 0px 4px 6px, rgba(233, 233, 233, 0.11) 0px 3px 3px,
            rgba(227, 227, 227, 0.09) 0px -3px 5px;
    }
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
    // border: 2px solid pink;
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
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    // border: 2px solid purple;
    white-space: nowrap;
    align-items: center;
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
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    // border: 2px solid purple;
    white-space: nowrap;
    align-items: center;
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
    color: white;
    display: flex;
    font-size: 16px;
    white-space: nowrap;
    align-items: center;
    width: 64%;
`;

const DockBtnSpace = styled.div`
    position: absolute;
    /* border: 2px solid white; */
    height: 37.2px;
    width: 100%;
    display: flex;
    color: white;
    right: 0px;
    justify-content: end;
    align-items: center;
`;

const DockBtnContainer = styled.div`
    border: 0.4px solid white;
    border-radius: 3px;
    border-radius: 6px;
    height: 100%;
    width: 86.6px;
    right: 10px;
    display: flex;
    justify-content: space-evenly;
    color: white;
    position: relative;
    box-shadow: rgba(255, 255, 255, 0.0212) 0px 4px 55px, rgba(217, 217, 217, 0.062) 0px -12px 30px,
        rgba(224, 224, 224, 0.06) 0px 4px 6px, rgba(233, 233, 233, 0.07) 0px 12px 13px,
        rgba(227, 227, 227, 0.07) 0px -3px 5px;
    align-items: center;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.4212) 0px 4px 55px,
            rgba(217, 217, 217, 0.12) 0px -12px 30px, rgba(224, 224, 224, 0.12) 0px 4px 6px,
            rgba(233, 233, 233, 0.17) 0px 12px 13px, rgba(227, 227, 227, 0.09) 0px -3px 5px;
    }
`;

const DockCardsBtnContainer = styled.div`
    border: 0.4px solid white;
    padding: 4px;
    border-radius: 12px;
    height: 82%;
    width: 33px;
    display: flex;
    color: white;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.0212) 0px 54px 55px, rgba(217, 217, 217, 0.12) 0px -12px 30px,
        rgba(224, 224, 224, 0.12) 0px 4px 6px, rgba(233, 233, 233, 0.17) 0px 12px 13px,
        rgba(227, 227, 227, 0.09) 0px -3px 5px;
`;

const DockCardsBtn = styled.img`
    /* border: 2px solid orange; */
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
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
    border: 0.4px solid white;
    padding: 4px;
    border-radius: 12px;
    height: 82%;
    width: 33px;
    display: flex;
    color: white;
    position: relative;
    right: 0px;
    justify-content: center;
    align-items: center;
`;

const DockCubesBtn = styled.img`
    /* border: 2px solid purple; */
    height: 77%;
    width: 77%;
    display: flex;
    color: white;
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
    /* border: 1px solid white; */
    height: 3px;
    width: 90%;
    border-radius: 22%;
    background: rgb(167, 167, 167);
    background: -moz-linear-gradient(
        90deg,
        rgba(167, 167, 167, 1) 0%,
        rgba(167, 167, 204, 1) 33%,
        rgba(156, 239, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(167, 167, 167, 1) 0%,
        rgba(167, 167, 204, 1) 33%,
        rgba(156, 239, 255, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(167, 167, 167, 1) 0%,
        rgba(167, 167, 204, 1) 33%,
        rgba(156, 239, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a7a7a7",endColorstr="#9cefff",GradientType=1);
    display: flex;
`;

const TopHeaderCatchUpText = styled.div`
    /* border: 2px solid orange; */
    height: 30%;
    width: 100%;
    display: flex;
`;

const ContentSectional = styled.section`
    /* border: 2px solid orange; */
    height: 88.88%;
    width: 100%;
    display: flex;
    color: white;
    position: relative;
    flex-direction: column;
    right: 0px;
    border: 2px solid white;
    cursor: pointer;
`;

const CardsContentContainer = styled.div`
    width: 100%;
    border: 2px solid white;
    overflow-y: scroll;
`;

const CardListUL = styled.ul`
    /* border: 2px solid purple; */
    margin: 0;
    padding: 0;
    list-style: none;
`;
