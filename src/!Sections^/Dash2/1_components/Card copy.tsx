import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
    const Card_List_Li_Ref = useRef();
    const [weightState, setWeightState] = useState(weight);
    const [topicState, setTopicState] = useState(topic);
    const [categoryState, setCategoryState] = useState(category);
    const [initialWeight, setInitialWeight] = useState<any>();
    const [initialTopic, setInitialTopic] = useState<any>();
    const [initialCategory, setInitialCategory] = useState<any>();
    const Card_List_LiMO = () => {
        if (Card_List_Li_Ref) {
            // @ts-ignore
            Card_List_Li_Ref.current.style.transform = 'scale(1.005)';
        }
    };

    const Card_List_LiL = () => {
        if (Card_List_Li_Ref) {
            // @ts-ignore
            Card_List_Li_Ref.current.style.transform = 'scale(.995024875)';
        }
    };

    useEffect(() => {
        setInitialWeight(weight);
        setInitialCategory(category);
        setInitialTopic(topic);
    }, []);

    function Card_Topic_ME() {
        setTopicState('Topic');
    }

    function Card_Topic_L() {
        setTopicState(initialTopic);
    }

    function Card_Category_ME() {
        setCategoryState('Category');
    }

    function Card_Category_L() {
        setCategoryState(initialCategory);
    }

    function Card_WeightME() {
        setWeightState('Weight');
    }

    function Card_WeightL() {
        setWeightState(initialWeight);
    }

    return (
        <Card_List_Li
            // @ts-ignore
            ref={Card_List_Li_Ref}
            onMouseOver={() => Card_List_LiMO()}
            onMouseLeave={() => Card_List_LiL()}>
            <CardListItem>
                <CardMainSection>
                    <CardMainContainer>
                        {/* <FireEmojiContainer>
                            <FireEmoji src='/FireEmoji.png'></FireEmoji> 
                            <LikesContainer>{count}</LikesContainer>
                        </FireEmojiContainer> */}
                        <CardMainTitleContainer>
                            <CardMainTitle>{title}</CardMainTitle>
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
                    <Card_Data_Container>
                        <Card_Date_Container>
                            <Card_Date>{created_at?.slice(0, 10)}</Card_Date>
                        </Card_Date_Container>
                        {/* @ts-ignore */}
                        <CardWrapper>
                            <CardTopicContainer>
                                <CardTopicContainerText
                                    onMouseEnter={() => Card_Topic_ME()}
                                    onMouseLeave={() => Card_Topic_L()}>
                                    {topicState}
                                </CardTopicContainerText>
                            </CardTopicContainer>
                            <CardCategoryContainer>
                                <Card_Category_Text
                                    onMouseEnter={() => Card_Category_ME()}
                                    onMouseLeave={() => Card_Category_L()}>
                                    {categoryState}
                                </Card_Category_Text>
                            </CardCategoryContainer>
                        </CardWrapper>
                        <Card_Weight_Container>
                            <Card_Weight
                                onMouseEnter={() => Card_WeightME()}
                                onMouseLeave={() => Card_WeightL()}>
                                {weightState}
                            </Card_Weight>
                        </Card_Weight_Container>
                    </Card_Data_Container>
                </CardDateSection>
            </CardListItem>
        </Card_List_Li>
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

const Card_List_Li = styled.li`
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
    height: 177.7px;
    width: 99%;
    margin-left: 3.3px;
`;

const CardMainSection = styled.section`
    border: 1.4px solid black;
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
    border: 1px solid black;
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
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CardCategoryContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const CardTopicContainerText = styled.div`
    color: black;
    text-align: center;
`;
const Card_Category_Text = styled.div`
    color: black;
`;

const CardDateSection = styled.section`
    /* border: 1.4px solid black; */
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    border: 1px solid blacksmoke;
`;

const Card_Data_Container = styled.div`
    /* border: 2px solid purple; */
    border-radius: 2px;
    display: flex;
    justify-content: flex-end;
    height: 61.81%;
    width: 61.81%;
    flex-direction: column;
    border: 1px solid blacksmoke;
`;

const Card_Date_Container = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;

const Card_Date = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

const Card_Weight_Container = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50%;
    width: 100%;
    text-align: center;
`;

const Card_Weight = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
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
