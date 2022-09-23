import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { supabase } from '../../../../../client.js';
import { GetServerSideProps } from 'next';
import { text } from 'stream/consumers';

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
}

const Card = ({
    count,
    created_at,
    text,
    text_title,
    title,
    topic,
    subtopic,
    subsubtopic,
    url,
}: Fire) => {
    // console.log(`Text`, Text);
    // console.log(`count`, count);
    // console.log(`text`, text);
    // console.log(count);
    // console.log(created_at);
    // console.log(id);
    // console.log(text);
    console.log(`text_title`, text_title);
    // console.log(topic);
    // console.log(url);
    const [initialRender, setInitialRender] = useState(true);
    const [mockFireData, setMockFireData] = useState<any>([]);
    const CardClick = () => {};

    const CubeClick = () => {};
    // ANCHOR: This is a comment anchor.
    //   <Card key={i} Text={Text} count={fire.count}  created_at={fire.created_at}
    //   id={fire.id} text={fire.text} title={fire.title} topic={fire.topic} url={fire.url}></Card>

    const CardMainTitleME = () => {};
    const CardMainTitleMO = () => {};

    const ByDateClick = () => {};

    const ByFireClick = () => {};
    const ByTextClick = () => {};
    return (
        <CardListLi>
            <CardListItem>
                <CardMainSection>
                    <CardMainContainer>
                        <FireEmojiContainer>
                            <FireEmoji src='/FireEmoji.png'></FireEmoji>
                            <LikesContainer>{count}</LikesContainer>
                        </FireEmojiContainer>
                        <CardMainTitleContainer>
                            <CardMainTitle
                                onMouseEnter={() => CardMainTitleME()}
                                onMouseOut={() => CardMainTitleMO()}>
                                {title}
                            </CardMainTitle>
                            <CardTopicsContainer>
                                <CardTopicContainer>
                                    <CardTopicContainerText>{topic}</CardTopicContainerText>
                                </CardTopicContainer>
                                <CardSubTopicContainer>
                                    <CardSubTopicContainerText>
                                        {subtopic}
                                    </CardSubTopicContainerText>
                                </CardSubTopicContainer>
                                <CardSubSubTopicContainer>
                                    <CardSubSubTopicContainerText>
                                        {subsubtopic}
                                    </CardSubSubTopicContainerText>
                                </CardSubSubTopicContainer>
                            </CardTopicsContainer>
                        </CardMainTitleContainer>
                        <TextSection>
                            <TextContainer>
                                <TextTitleContainer>
                                    <TextTitle>{text_title}</TextTitle>
                                </TextTitleContainer>
                                <TextValueContainer>
                                    <TextValue>{text}</TextValue>
                                </TextValueContainer>
                            </TextContainer>
                        </TextSection>
                    </CardMainContainer>
                </CardMainSection>
                <CardDateSection>
                    <CardDateContainer>
                        <CardDate>{created_at}</CardDate>
                        <CardLikesCount>{Math.round(count / 2)}</CardLikesCount>
                    </CardDateContainer>
                </CardDateSection>
            </CardListItem>
        </CardListLi>
    );
};

export default Card;

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

const ByTextContainer = styled.div`
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

const ByText = styled.div`
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

const CardListLi = styled.li`
    /* border: 2px solid purple; */
    padding: 8px 0;
`;

const CardListItem = styled.div`
    /* border: 2px solid purple; */
    align-items: center;
    background: green;
    border-radius: 8px;
    display: flex;
    position: relative;
    height: 77.7px;
    width: 100%;
`;

const CardMainSection = styled.section`
    border: 2px solid white;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: start;
`;

const CardMainContainer = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    align-self: center;
    height: 81%;
    width: 100%;
`;

const FireEmojiContainer = styled.div`
    // border: 2px solid orange;
    display: flex;
    align-self: center;
    position: relative;
    flex-direction: column;
    // max-height: 28px;
    // max-width: 28px;
    justify-content: center;
    height: 100%;
    min-height: 28px;
    min-width: 28px;
    margin: 0px 7px;
`;

const FireEmoji = styled.img`
    // border: 2px solid pink;
    display: flex;
    // position: absolute;
    align-self: center;
    min-height: 28px;
    min-width: 28px;
    max-height: 28px;
    max-width: 28px;
    height: 100%;
    width: 100%;
`;

const LikesContainer = styled.div`
    // border: 2px solid purple;
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    height: 20%;
    top: 81%;
    width: 100%;
`;

const CardMainTitleContainer = styled.div`
    border: 1px solid yellow;
    display: flex-start;
    height: 100%;
    width: 38%;
    flex-direction: column;
`;

const TextSection = styled.section`
    /* border: 1px solid pink; */
    display: flex-start;
    height: 100%;
    width: 100%;
    flex-direction: column;
`;

const TextContainer = styled.div`
    /* border: 1px solid yellow; */
    display: flex-start;
    height: 100%;
    width: 100%;
    flex-direction: column;
`;

const TextTitleContainer = styled.div`
    /* border: 1px solid yellow; */
    display: flex-start;
    height: 50%;
    width: 100%;
    flex-direction: column;
`;

const TextTitle = styled.div`
    /* border: 1px solid yellow; */
    display: flex-start;
    height: 100%;
    width: 100%;
    text-align: center;
    flex-direction: column;
`;

const TextValueContainer = styled.div`
    /* border: 1px solid yellow; */
    display: flex-start;
    height: 50%;
    width: 100%;
    flex-direction: column;
`;

const TextValue = styled.div`
    /* border: 1px solid yellow; */
    display: flex-start;
    height: 100%;
    width: 100%;
    text-align: center;
    flex-direction: column;
`;

const CardMainTitle = styled.div`
    /* border: 2px solid purple; */
    display: flex-start;
    height: 50%;
    display: flex;
    width: 100%;
    justify-content: center;
`;

const CardTopicsContainer = styled.div`
    border: 2px solid white;
    display: flex;
    height: 50%;
    width: 100%;
`;

const CardTopicContainer = styled.div`
    border: 2px solid white;
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
`;

const CardSubTopicContainer = styled.div`
    border: 2px solid white;
    display: flex;
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
`;

const CardSubSubTopicContainer = styled.div`
    border: 2px solid white;
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
`;

const CardTopicContainerText = styled.div`
    color: white;
`;
const CardSubTopicContainerText = styled.div`
    color: white;
`;
const CardSubSubTopicContainerText = styled.div`
    color: white;
`;

const CardDateSection = styled.section`
    /* border: 2px solid white; */
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    border: 1px solid pink;
`;

const CardDateContainer = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    justify-content: flex-end;
    height: 60%;
    width: 80%;
    flex-direction: column;
    border: 1px solid purple;
`;

const CardDate = styled.div`
    /* border: 1px solid white; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;
const CardLikesCount = styled.div`
    /* border: 1px solid white; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;

const CardListItemLink = styled.a`
    align-items: center;
    border-radius: 8px;
    color: #090b0e;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
`;

const Content = styled.div`
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

const RecentlyViewedSectional = styled.section`
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

const NewCardsSectional = styled.section`
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

const PopularCardsSectional = styled.section`
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

const ActivitySectional = styled.section`
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

const TasksSectional = styled.section`
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

const TabsGroupSage = styled.section`
    /* border: 2px solid purple; */
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const AppendageWrapper = styled.div``;
