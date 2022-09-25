import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// @ts-ignore
import useStore from '$Store';
// @ts-ignore
import isFound from '$Utils/isFound.ts';
import { compareCreated_At } from '$Sections/Dash/Fn/compare';
import isHighlighted from './%Utils/isHighlighted';

const Panel = () => {
    // @ts-ignore        Selected Topic
    const topicSelection = useStore((state) => state.topicSelection);
    // @ts-ignore        Add Topic
    const selectTopic = useStore((state) => state.selectTopic);
    // @ts-ignore        Selected Topic
    const categorySelection = useStore((state) => state.categorySelection);
    // @ts-ignore        Add Topic
    const selectCategory = useStore((state) => state.selectCategory);

    // STATE TOGGLES
    const [centerCircleToggled, setCenterCircleToggled] = useState(false);
    const [centerTopCircleToggled, setCenterTopCircleToggled] = useState(false);
    const [centerTopTopCircleToggled, setCenterTopTopCircleToggled] = useState(false);
    const [centerBottomCircleToggled, setCenterBottomCircleToggled] = useState(false);
    const [centerBottomBottomCircleToggled, setCenterBottomBottomCircleToggled] = useState(false);
    const [upperRightCircleToggled, setUpperRightCircleToggled] = useState(false);
    const [upperRightRightCircleToggled, setUpperRightRightCircleToggled] = useState(false);
    const [upperLeftCircleToggled, setUpperLeftCircleToggled] = useState(false);
    const [upperLeftLeftCircleToggled, setUpperLeftLeftCircleToggled] = useState(false);
    const [bottomRightCircleToggled, setBottomRightCircleToggled] = useState(false);
    const [bottomRightRightCircleToggled, setBottomRightRightCircleToggled] = useState(false);
    const [bottomLeftCircleToggled, setBottomLeftCircleToggled] = useState(false);
    const [bottomLeftLeftCircleToggled, setBottomLeftLeftCircleToggled] = useState(false);
    // STATE BOOLEANS
    const [topics, setTopics] = useState(true);
    const [subTopics, setSubTopics] = useState(false);
    const [subSubTopics, setSubSubTopics] = useState(false);
    // STATE CIRCLES
    const [centerCircle, setCenterCircle] = useState('Topics');
    // New State
    const [moniker, setMoniker] = useState('topics');
    const [circSelectedST, setCircSelectedST] = useState<any>();

    // ANCHOR
    useEffect(() => {
    }, [topicSelection])

    function circleHighlighterFn(stateSetter, elementID, stateVal) {
        const CircClickedCN = document.getElementById(elementID) as HTMLImageElement;
        // Remove the highlight from the other circle ; new click happened..
        if (circSelectedST && CircClickedCN != circSelectedST) { 
            circSelectedST.src = '/whiteCircle.png';
        }
        // AND Circle clicked with no highlight
        if (CircClickedCN && !isHighlighted(CircClickedCN)) {
            CircClickedCN.src = '/purpleStrokedCircle.png';
            setCircSelectedST(CircClickedCN);
            stateSetter(true);
            CircClickedCN.style.zIndex = '999';
        // Circle with Highlight
        } else {
            if (CircClickedCN) {
                CircClickedCN.src = '/whiteCircle.png';
                setCenterCircle('Topics');
            }
            stateSetter(false);
            CircClickedCN.style.zIndex = '0';
        }
    }

    const CenterCircleFn = (parentID: any, elementID: any, stateSetter: any, stateVal: any): any => {
        // Do some other shit...
        // switch (moniker) {
        //     case 'topics':
        //         circleHighlighterFn(stateSetter, elementID, stateVal)
        //         // If its the Same Selection:
        //         if (topicSelection === textFinder(parentID)) { 
        //             selectTopic('') 
        //         } else {
        //             selectTopic(textFinder(parentID))
        //         }
        //       break;
        //     case 'category':
        //     case 'weight':
        //     default:
        //       console.log(`DEFAULT`);
        //   }
    };

    const CircleSelectionFn = (parentID: any, elementID: any, stateSetter: any, stateVal: any): any => {
        switch (moniker) {
            case 'topics':
                circleHighlighterFn(stateSetter, elementID, stateVal)
                // If its the Same Selection:
                if (topicSelection === textFinder(parentID)) { 
                    selectTopic('') 
                } else {
                    selectTopic(textFinder(parentID))
                }
              break;
            case 'category':
                circleHighlighterFn(stateSetter, elementID, stateVal)
                // If its the Same Selection:
                if (categorySelection === textFinder(parentID)) { 
                    selectCategory('') 
                } else {
                    selectCategory(textFinder(parentID))
                }
              break;
            case 'weight':
            default:
              console.log(`DEFAULT`);
          }
    };

    // ANCHOR Move to a Global Utils Fn
    const textFinder = (ElemID) => {
        let Text = document.getElementById(ElemID)?.innerText;
        return Text;
    };

    const MenuHeirachyArrowRightClk = () => {
        if (topics) {
            setTopics(false);
            setSubTopics(true);
            setSubSubTopics(false);
        }
        if (subTopics) {
            setTopics(false);
            setSubTopics(false);
            setSubSubTopics(true);
        }
        if (subSubTopics) {
            setTopics(true);
            setSubTopics(false);
            setSubSubTopics(false);
        }
    };

    const MenuHeirachyArrowRightME = () => {
        switch (moniker) {
            // This is the first case, always:
            case 'topics':
                setMoniker('category')
              break;
            // Second
            case 'category':
                // circleHighlighterFn(stateSetter, elementID, stateVal)
                // // If its the Same Selection:
                // if (categorySelection === textFinder(parentID)) { 
                //     selectCategory('') 
                // } else {
                //     selectCategory(textFinder(parentID))
                // }
                // setMoniker('weight')
              break;
            case 'weight':
                setMoniker('topics')
            break;
            default:
              console.log(`DEFAULT`);
          }
        if (circSelectedST) { 
            circSelectedST.src = '/whiteCircle.png'
         }
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Heirarchy Arrow';
        }
    };

    const MenuHeirachyArrowRightMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    return (
        <PanelParent>
            <PanelWrapper>
                <FireNetLogo id='FireNetLogo' src='/Logo.png'></FireNetLogo>
                <FruitCake id='FruitCake'>
                    <C0 id='C0'>
                        {topics
                            ? centerCircle
                            : subTopics
                            ? 'Category'
                            : subSubTopics
                            ? 'Weight '
                            : ''}
                        <CenterCircle
                            onClick={() =>
                                CenterCircleFn(
                                    'C0',
                                    'CenterCircle',
                                    setCenterCircleToggled,
                                    centerCircleToggled,
                                )
                            }
                            id='CenterCircle'
                            src='/whiteCircle.png'></CenterCircle>
                    </C0>
                    <C1 id='C1'>
                        {topics
                            ? 'Religion'
                            : subTopics
                            ? 'Important'
                            : subSubTopics
                            ? '64-70'
                            : ''}
                        <CenterTopCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C1',
                                    'CenterTopCircle',
                                    setCenterTopCircleToggled,
                                    centerTopCircleToggled,
                                )
                            }
                            id='CenterTopCircle'
                            src='/whiteCircle.png'></CenterTopCircle>
                    </C1>
                    <C7 id='C7'>
                        {topics ? 'Tech' : subTopics ? 'General' : subSubTopics ? '71-77' : ''}
                        <CenterTopTopCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C7',
                                    'CenterTopTopCircle',
                                    setCenterTopTopCircleToggled,
                                    centerTopTopCircleToggled,
                                )
                            }
                            id='CenterTopTopCircle'
                            src='/whiteCircle.png'></CenterTopTopCircle>
                    </C7>
                    <C2 id='C2'>
                        {topics ? 'News' : subTopics ? 'Key' : subSubTopics ? '0-7' : ''}
                        <UpperRightCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C2',
                                    'UpperRightCircle',
                                    setUpperRightCircleToggled,
                                    upperRightCircleToggled,
                                )
                            }
                            id='UpperRightCircle'
                            src='/whiteCircle.png'></UpperRightCircle>
                    </C2>
                    <C8 id='C8'>
                        {topics ? 'Business' : subTopics ? 'Date' : subSubTopics ? '8-14' : ''}
                        <UpperRightRightCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C8',
                                    'UpperRightRightCircle',
                                    setUpperRightRightCircleToggled,
                                    upperRightRightCircleToggled,
                                )
                            }
                            id='UpperRightRightCircle'
                            src='/whiteCircle.png'></UpperRightRightCircle>
                    </C8>
                    <C6 id='C6'>
                        {topics
                            ? 'Software'
                            : subTopics
                            ? 'Interesting'
                            : subSubTopics
                            ? '15-21'
                            : ''}
                        <UpperLeftCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C6',
                                    'UpperLeftCircle',
                                    setUpperLeftCircleToggled,
                                    upperLeftCircleToggled,
                                )
                            }
                            id='UpperLeftCircle'
                            src='/whiteCircle.png'></UpperLeftCircle>
                    </C6>
                    <C12 id='C12'>
                        {topics ? 'Fitness' : subTopics ? 'Helpful' : subSubTopics ? '22-28' : ''}
                        <UpperLeftLeftCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C12',
                                    'UpperLeftLeftCircle',
                                    setUpperLeftLeftCircleToggled,
                                    upperLeftLeftCircleToggled,
                                )
                            }
                            id='UpperLeftLeftCircle'
                            src='/whiteCircle.png'></UpperLeftLeftCircle>
                    </C12>
                    <C9 id="C9">
                        {topics ? 'Science' : subTopics ? 'Applicable' : subSubTopics ? '100' : ''}
                        <BottomRightRightCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C9',
                                    'BottomRightRightCircle',
                                    setBottomRightRightCircleToggled,
                                    bottomRightRightCircleToggled,
                                )
                            }
                            id='BottomRightRightCircle'
                            src='/whiteCircle.png'></BottomRightRightCircle>
                    </C9>
                    <C3 id='C3'>
                        {topics ? 'Nature' : subTopics ? 'Career' : subSubTopics ? '29-35' : ''}
                        <BottomRightCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C3',
                                    'BottomRightCircle',
                                    setBottomRightCircleToggled,
                                    bottomRightCircleToggled,
                                )
                            }
                            id='BottomRightCircle'
                            src='/whiteCircle.png'></BottomRightCircle>
                    </C3>
                    <C5 id='C5'>
                        {topics ? 'Health' : subTopics ? 'Knowledge' : subSubTopics ? '36-42' : ''}
                        <BottomLeftCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C5',
                                    'BottomLeftCircle',
                                    setBottomLeftCircleToggled,
                                    bottomLeftCircleToggled,
                                )
                            }
                            id='BottomLeftCircle'
                            src='/whiteCircle.png'></BottomLeftCircle>
                    </C5>
                    <C11 id='C11'>
                        {topics ? 'Fashion' : subTopics ? 'Question' : subSubTopics ? '43-49' : ''}
                        <BottomLeftLeftCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C11',
                                    'BottomLeftLeftCircle',
                                    setBottomLeftLeftCircleToggled,
                                    bottomLeftLeftCircleToggled,
                                )
                            }
                            id='BottomLeftLeftCircle'
                            src='/whiteCircle.png'></BottomLeftLeftCircle>
                    </C11>
                    <C4 id='C4'>
                        {topics ? 'Art' : subTopics ? 'Insightful' : subSubTopics ? '50-56' : ''}
                        <CenterBottomCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C4',
                                    'CenterBottomCircle',
                                    setCenterBottomCircleToggled,
                                    centerBottomCircleToggled,
                                )
                            }
                            id='CenterBottomCircle'
                            src='/whiteCircle.png'></CenterBottomCircle>
                    </C4>
                    <C10 id='C10'>
                        {topics ? 'Finance' : subTopics ? 'Funny' : subSubTopics ? '57-63' : ''}
                        <CenterBottomBottomCircle
                            onClick={() =>
                                CircleSelectionFn(
                                    'C10',
                                    'CenterBottomBottomCircle',
                                    setCenterBottomBottomCircleToggled,
                                    centerBottomBottomCircleToggled,
                                )
                            }
                            id='CenterBottomBottomCircle'
                            src='/whiteCircle.png'></CenterBottomBottomCircle>
                    </C10>
                </FruitCake>
            </PanelWrapper>
            <DockWrapper>
                <Dock>
                    <DockButtonContainer>
                        <MenuHeirachyArrowRightContainer>
                            <MenuHeirachyArrowRight
                                onClick={() => MenuHeirachyArrowRightClk()}
                                onMouseEnter={() => MenuHeirachyArrowRightME()}
                                onMouseOut={() => MenuHeirachyArrowRightMO()}
                                src='/MenuHeirarchyArrow.png'></MenuHeirachyArrowRight>
                        </MenuHeirachyArrowRightContainer>
                    </DockButtonContainer>
                </Dock>
                <DockTextWrapper>
                    <DockTextContainer>
                        <DockText id='DockText'></DockText>
                    </DockTextContainer>
                </DockTextWrapper>
            </DockWrapper>
        </PanelParent>
    );
};

export default Panel;

const PanelParent = styled.div`
    height: 100%;
    right: 0%;
    position: absolute;
    flex-direction: column;
    max-width: calc(333px);
    min-width: calc(333px);
`;
// PANEL
const PanelWrapper = styled.div`
    max-height: calc(333px);
    min-height: calc(333px);
    right: 0%;
    position: absolute;
    border: 4px solid white;
    flex-grow: 1;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FireNetLogo = styled.img`
    height: 88%;
    width: 88%;
    position: absolute;
    flex-grow: 1;
    display: none;
`;

const FruitCake = styled.div`
    height: 94%;
    width: 94%;
    position: absolute;
    flex-grow: 1;
    display: flex;
    border: 1px solid transparent;
    // border-radius: 50%;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.img`
    height: 61.1px;
    width: 61.1px;
    position: absolute;
    display: block;
`;

const C0 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterCircle = styled(Circle)``;

const C1 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterTopCircle = styled(Circle)``;

const C7 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C10 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    bottom: calc(0px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C4 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    bottom: 61.15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C6 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 69.286px;
    top: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C12 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 16.885px;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C2 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 69.286px;
    top: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C8 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 16.885px;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C3 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 69.286px;
    bottom: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C9 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 16.885px;
    bottom: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C5 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 69.286px;
    bottom: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const C11 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 16.885px;
    bottom: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterTopTopCircle = styled(Circle)``;
const CenterBottomBottomCircle = styled(Circle)``;
const CenterBottomCircle = styled(Circle)``;
const UpperLeftCircle = styled(Circle)``;
const UpperLeftLeftCircle = styled(Circle)``;
const UpperRightCircle = styled(Circle)``;
const UpperRightRightCircle = styled(Circle)``;
const BottomRightCircle = styled(Circle)``;
const BottomRightRightCircle = styled(Circle)``;
const BottomLeftCircle = styled(Circle)``;
const BottomLeftLeftCircle = styled(Circle)``;
// end

// DOCK
const DockWrapper = styled.div`
    max-height: calc(66px);
    min-height: calc(66px);
    right: 0%;
    position: absolute;
    border: 1px solid gold;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 333px;
    flex-direction: column;
`;

const Dock = styled.div`
    width: 80%;
    height: 58px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const DockButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid white;
    display: flex;
    justify-content: space-evenly;
    padding-top: 3px;
`;

const MenuHeirachyArrowLeftContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuHeirachyArrowLeft = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const MenuHeirachyArrowRightContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuHeirachyArrowRight = styled.img`
    height: 100%;
    width: 100%;
    // transform: rotate(180deg);
`;

const MenuOverFlowUpContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuOverFlowUp = styled.img`
    height: 100%;
    width: 100%;
`;
const MenuOverFlowDownContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuOverFlowDown = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const HistoryContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const History = styled.img`
    height: 100%;
    width: 100%;
`;

const DockTextWrapper = styled.div`
  width: 80%;
  height: 33px;
  // border: 1px solid white;
  display: flex;
  align-content; center;
`;

const DockTextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DockText = styled.div`
    color: white;
`;

// end
