import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { supabase } from '../../../../client.js';
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
    url?: string;
    category?: string;
    weight?: string;
}

const Card = ({
    count,
    created_at,
    text,
    text_title,
    title,
    topic,
    url, // inactive
    category,
    weight,
}: Fire) => {
    const [initialRender, setInitialRender] = useState(true);
    const [mockFireData, setMockFireData] = useState<any>([]);
    const CardClick = () => {};

    const CubeClick = () => {};

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
                            <CardWrapper>
                                <CardTopicContainer>
                                    <CardTopicContainerText>{topic}</CardTopicContainerText>
                                </CardTopicContainer>
                                <CardCategoryContainer>
                                    <Card_Category_Text>{category}</Card_Category_Text>
                                </CardCategoryContainer>
                            </CardWrapper>
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
                        <CardDate>{created_at?.slice(0, 10)}</CardDate>
                        {/* @ts-ignore */}
                        <CardLikesCount>{weight}</CardLikesCount>
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

const CardListLi = styled.li`
    /* border: 2px solid purple; */
    padding: 8px 0;
`;

const CardListItem = styled.div`
    /* border: 2px solid purple; */
    align-items: center;
    background: black;
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
    border: 1px solid white;
    border-radius: 2px;
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
    align-items: center;
`;

const CardWrapper = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
`;

const CardTopicContainer = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CardCategoryContainer = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CardTopicContainerText = styled.div`
    color: white;
    text-align: center;
`;
const Card_Category_Text = styled.div`
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
    border: 1px solid whitesmoke;
`;

const CardDateContainer = styled.div`
    /* border: 2px solid purple; */
    border-radius: 2px;
    display: flex;
    justify-content: flex-end;
    height: 61.81%;
    width: 61.81%;
    flex-direction: column;
    border: 1px solid whitesmoke;
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

// const CardListItemLink = styled.a`
//     align-items: center;
//     border-radius: 8px;
//     color: #090b0e;
//     display: flex;
//     justify-content: space-between;
//     text-decoration: none;
//     width: 100%;
// `;

// const Content = styled.div`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const RecentlyViewedSectional = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const NewCardsSectional = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const PopularCardsSectional = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const ActivitySectional = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const TasksSectional = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     width: 100%;
//     display: flex;
//     color: white;
//     position: relative;
//     right: 0px;
//     justify-self: center;
//     align-items: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.04);
//     }
// `;

// const TabsGroupSage = styled.section`
//     /* border: 2px solid purple; */
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// `;

// const AppendageWrapper = styled.div``;
