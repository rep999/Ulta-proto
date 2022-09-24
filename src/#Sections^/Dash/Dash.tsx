import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { supabase } from '../../../client.js';
import { GetServerSideProps } from 'next';
import { text } from 'stream/consumers';
import Card from './#Sections/Card/Card';
import { compareCreated_At, compareFiresAsc, compareFiresDesc } from './Fn/compare';
// @ts-ignore
import useStore from '$Store';

interface Fire {
    count?: string;
    created_at?: string;
    id?: string;
    text?: string;
    text_title?: string;
    title?: string;
    topic?: string;
    subtopic?: string;
    subsubtopic?: string;
    url?: string;
    category?: string;
    weight?: string;
}

// @ts-ignore
const Dash = ({ fires }: Fire) => {
    const topicsSelected = useStore((state) => state.topicsSelected);
    const [initialRender, setInitialRender] = useState(true);
    const [fireData, setFireData] = useState<any>([]);
    const [renderToggle, setRenderToggle] = useState<boolean>(false);
    const [firesAsc, setFiresAsc] = useState<boolean>(false);
    const [firesDesc, setFiresDesc] = useState<boolean>(false);

    useEffect(() => {
        console.log(fires);
        fires.forEach((item) => {
            if (topicsSelected.includes(item.name)) {
                alert(`it does include ${item.name}`);
            }
        });
    }, [topicsSelected]);

    let apple = fires;
    if (fireData && fireData.length !== fires.length) {
        setFireData(apple);
    }
    const CardClick = () => {};

    const CubeClick = () => {};

    // useEffect(() => {
    //   if (initialRender) {
    //     setMockFireData(MockFireObjReturned)
    //   }
    //   setInitialRender(false)
    // }, [mockFireData])

    const CardMainTitleME = () => {};
    const CardMainTitleMO = () => {};

    const ByDateClick = () => {
        setFireData(fireData.sort(compareCreated_At));
        setRenderToggle(!renderToggle);
    };

    const ByFireClick = () => {
        // ANCHOR
        if (!firesAsc && !firesDesc) {
            // Initial State
            setFireData(fireData.sort(compareFiresAsc));
            setRenderToggle(!renderToggle);
            setFiresAsc(true);
            setFiresDesc(false);
        } else if (firesAsc && !firesDesc) {
            // Asc
            setFireData(fireData.sort(compareFiresDesc));
            setRenderToggle(!renderToggle);
            setFiresAsc(false);
            setFiresDesc(true);
        } else if (!firesAsc && firesDesc) {
            // Desc
            setFireData(fireData.sort(compareFiresAsc));
            setRenderToggle(!renderToggle);
            setFiresAsc(true);
            setFiresDesc(false);
        }
    };

    // useEffect(() => { ANCHOR
    //     console.log(`hi23`);
    // }, []);

    const ByCategoryClick = () => {};
    return (
        <DashContainer>
            <TopHeaderContainer>
                <TopHeaderTitleRow>
                    <WelcomeTitleContainer>
                        <WelcomeTitle>Welcome to The FireNet </WelcomeTitle>
                        {/* <WelcomeTitleImgContainer>
              <WelcomeTitleImg src="/OfficialLogo.png" />
            </WelcomeTitleImgContainer> */}
                    </WelcomeTitleContainer>
                    <GlamourShotContainer>
                        <GlamourShot src='/ProfilePic.jpg'></GlamourShot>
                    </GlamourShotContainer>
                </TopHeaderTitleRow>
                <TopHeaderSpacerContainer>
                    <TopHeaderSpacer></TopHeaderSpacer>
                </TopHeaderSpacerContainer>
                <DockPanel>
                    <ByDateContainer>
                        <ByDate onClick={() => ByDateClick()}>By Date</ByDate>
                    </ByDateContainer>
                    <ByFireContainer>
                        <ByFire onClick={() => ByFireClick()}>By Fire</ByFire>
                    </ByFireContainer>
                    <ByCategoryContainer>
                        <ByCategory onClick={() => ByCategoryClick()}>By Topic</ByCategory>
                    </ByCategoryContainer>
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
                </DockPanel>
            </TopHeaderContainer>

            <ContentSectional>
                <CardsContentContainer>
                    <CardListUL>
                        {fireData &&
                            fireData.map((fire: Fire, i: number) => (
                                <Card
                                    key={Math.random()}
                                    count={fire.count}
                                    created_at={fire.created_at}
                                    id={fire.id}
                                    text={fire.text}
                                    text_title={fire.text_title}
                                    title={fire.title}
                                    topic={fire.topic}
                                    subtopic={fire.subtopic}
                                    subsubtopic={fire.subsubtopic}
                                    // @ts-ignore
                                    category={fire.category}
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

// export async function getServerSideProps() {
//   let { data: fires, error } = await supabase
//     .from('fires')
//     .select('*')

//   if (error) {
//     throw new Error(error as any);
//   }

//   return {
//     props: {
//       fires,
//     },
//   };
// }

const DashContainer = styled.div`
    height: 100%;
    width: calc(100% - 333px);
    /* border: 6px solid purple; */
`;

const TopHeaderContainer = styled.div`
    /* border: 2px solid green; */
    height: 15.12%;
    min-height: 93px;
    max-height: 103px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const TopHeaderTitleRow = styled.div`
    /* border: 2px solid orange; */
    height: 50%;
    width: 100%;
    display: flex;
`;

const WelcomeTitleContainer = styled.div`
    /* border: 2px solid white; */
    height: 100%;
    width: 30%;
    min-width: 280px;
    position: relative;
    display: flex;
    align-items: center;
`;

const WelcomeTitleImgContainer = styled.div`
    max-height: 66px;
    max-width: 66px;
    min-height: 66px;
    min-width: 66px;
    display: flex;
    align-items: center;
    position: relative;
    top: 1px;
`;

const WelcomeTitleImg = styled.img`
    height: 66%;
    width: 66%;
`;

const GlamourShotContainer = styled.div`
    /* border: 2px solid white; */
    height: 100%;
    width: 70%;
    right: 0px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const GlamourShot = styled.img`
    border: 1.3px solid white;
    max-height: 56px;
    max-width: 56px;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    right: 4px;
    /* &:hover {
    transform: scale(1.04);
    box-shadow: rgba(255, 255, 255, 0.4212) 0px 4px 5px,
      rgba(217, 217, 217, 0.12) 0px -12px 3px,
      rgba(224, 224, 224, 0.12) 0px 4px 6px,
      rgba(233, 233, 233, 0.17) 0px 3px 3px,
      rgba(227, 227, 227, 0.09) 0px -3px 5px;
  } */
`;

const WelcomeTitle = styled.span`
    /* border: 2px solid pink; */
    height: 50%;
    width: 100%;
    /* position: relative; */
    left: 0px;
    padding-left: 9px;
    color: white;
    display: flex;
    font-size: 23px;
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
    border: 2px solid pink;
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ByDateContainer = styled.div`
    /* border: 2px solid pink; */
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ByFireContainer = styled.div`
    /* border: 2px solid pink; */
    cursor: pointer;
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ByCategoryContainer = styled.div`
    /* border: 2px solid pink; */
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ByDate = styled.div`
    /* border: 2px solid orange; */
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    justify-self: center;
    align-items: center;
`;

const ByFire = styled.div`
    /* border: 2px solid orange; */
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    justify-self: center;
    align-items: center;
`;

const ByCategory = styled.div`
    /* border: 2px solid orange; */
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    justify-self: center;
    align-items: center;
`;

const DockBtnSpace = styled.div`
    /* border: 2px solid white; */
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    position: relative;
    right: 0px;
    justify-content: end;
    align-items: center;
`;

const DockBtnContainer = styled.div`
    border: 0.4px solid white;
    border-radius: 3px;
    height: 91%;
    width: 100px;
    right: 20px;
    display: flex;
    justify-content: space-evenly;
    color: white;
    position: relative;
    align-items: center;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.4212) 0px 4px 55px,
            rgba(217, 217, 217, 0.12) 0px -12px 30px, rgba(224, 224, 224, 0.12) 0px 4px 6px,
            rgba(233, 233, 233, 0.17) 0px 12px 13px, rgba(227, 227, 227, 0.09) 0px -3px 5px;
    }
`;

const DockCardsBtnContainer = styled.div`
    border: 2px solid white;
    padding: 4px;
    border-radius: 2px;
    height: 33px;
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
    border: 2px solid white;
    padding: 4px;
    border-radius: 2px;
    height: 33px;
    width: 33px;
    display: flex;
    color: white;
    position: relative;
    right: 0px;
    justify-self: center;
    align-items: center;
`;

const DockCubesBtn = styled.img`
    /* border: 2px solid purple; */
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
// Contents

const ContentSectional = styled.section`
    /* border: 2px solid orange; */
    height: 84.88%;
    width: 100%;
    display: flex;
    color: white;
    position: relative;
    flex-direction: column;
    right: 0px;
    border: 2px solid white;
    cursor: pointer;
    /* &:hover {
    transform: scale(1.04);
  } */
`;

const CardsContentContainer = styled.div`
    width: 100%;
    border: 2px solid white;
`;

const CardListUL = styled.ul`
    /* border: 2px solid purple; */
    margin: 0;
    padding: 0;
    list-style: none;
`;
