import React, { useState, useEffect, useRef } from 'react';
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

const Cube = ({
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
    const Cube_Div_Ref = useRef();
    const Cube_DivMO = () => {
        if (Cube_Div_Ref) {
            // @ts-ignore
            Cube_Div_Ref.current.style.transform = 'scale(1.005)';
        }
    };

    const Cube_DivL = () => {
        if (Cube_Div_Ref) {
            // @ts-ignore
            Cube_Div_Ref.current.style.transform = 'scale(.995024875)';
        }
    };

    return (
        <Cube_Div
            // @ts-ignore
            ref={Cube_Div_Ref}
            onMouseOver={() => Cube_DivMO()}
            onMouseLeave={() => Cube_DivL()}>
            <CubeListItem>
                <CubeMainSection>
                    <CubeMainContainer>
                        <CubeMainTitleContainer>
                            <CubeMainTitle>{title}</CubeMainTitle>
                            <CubeWrapper>
                                <CubeTopicContainer>
                                    <CubeTopicContainerText>{topic}</CubeTopicContainerText>
                                </CubeTopicContainer>
                                <CubeCategoryContainer>
                                    <Cube_Category_Text>{category}</Cube_Category_Text>
                                </CubeCategoryContainer>
                            </CubeWrapper>
                        </CubeMainTitleContainer>
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
                    </CubeMainContainer>
                </CubeMainSection>
                <CubeDateSection>
                    <CubeDateContainer>
                        <CubeDate>{created_at?.slice(0, 10)}</CubeDate>
                        {/* @ts-ignore */}
                        <CubeLikesCount>{weight}</CubeLikesCount>
                    </CubeDateContainer>
                    <FireEmojiContainer>
                        <FireEmojiCube src='/FireEmoji.png'></FireEmojiCube>
                        <LikesContainer>{count}</LikesContainer>
                    </FireEmojiContainer>
                </CubeDateSection>
            </CubeListItem>
        </Cube_Div>
    );
};

export default Cube;

const Cube_Div = styled.div`
    // border: 2px solid purple;
    // padding: 8px 0;
    // height: 400px;
    // border: 2px solid white;
    // width: 40%;
    flex: 1 0 500px;
    align-self: stretch;
    max-width: 100%;
    min-height: 21rem;
    margin: 5px;
    border: 2px solid #ccc;
    background: white;
`;

const CubeListItem = styled.div`
    /* border: 2px solid purple; */
    align-items: center;
    background: black;
    border-radius: 8px;
    display: flex;
    position: relative;
    height: 100%;
    width: 99%;
    margin-left: 3.3px;
    box-shadow: rgba(255, 255, 255, 0.0212) 0px 12px 55px, rgba(217, 217, 217, 0.062) 0px -12px 30px,
        rgba(224, 224, 224, 0.06) 0px 10px 6px, rgba(233, 233, 233, 0.07) 0px 12px 13px,
        rgba(227, 227, 227, 0.07) 0px -3px 5px;
`;

const CubeMainSection = styled.section`
    border: 2px solid white;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: start;
`;

const CubeMainContainer = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    align-self: center;
    height: 81%;
    width: 100%;
`;

const FireEmojiContainer = styled.div`
    display: flex;
    align-self: center;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin: 0px 7px;
    height: 80px;
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

const FireEmojiCube = styled.img`
    display: flex;
    align-self: center;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
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

const CubeMainTitleContainer = styled.div`
    border: 1px solid white;
    border-radius: 2px;
    display: flex-start;
    height: 100%;
    width: 38%;
    margin-left: 8px;
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
    // border: 1px solid yellow;
    display: flex-start;
    height: 10%;
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

const CubeMainTitle = styled.div`
    /* border: 2px solid purple; */
    display: flex-start;
    height: 50%;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const CubeWrapper = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
`;

const CubeTopicContainer = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CubeCategoryContainer = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CubeTopicContainerText = styled.div`
    color: white;
    text-align: center;
`;
const Cube_Category_Text = styled.div`
    color: white;
`;

const CubeDateSection = styled.section`
    // border: 8px solid purple;
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    flex-direction: column;
`;

const CubeDateContainer = styled.div`
    /* border: 2px solid purple; */
    border-radius: 2px;
    display: flex;
    justify-content: flex-end;
    height: 61.81%;
    width: 61.81%;
    flex-direction: column;
    border: 1px solid whitesmoke;
`;

const CubeDate = styled.div`
    /* border: 1px solid white; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;
const CubeLikesCount = styled.div`
    /* border: 1px solid white; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;

// const CubeListItemLink = styled.a`
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

// const NewCubesSectional = styled.section`
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

// const PopularCubesSectional = styled.section`
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
