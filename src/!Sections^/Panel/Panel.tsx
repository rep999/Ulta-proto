import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// @ts-ignore
import useStore from 'src/*Store^/Store';
// @ts-ignore
import isFound from '$Utils/isFound.ts';
import { compareCreated_At } from '$Sections/Dash/2_utils/compare';
// @ts-ignore
import isHighlighted from '../../%Utils^/isHighlighted';

const Panel = () => {
    // ~ Refs
    const PanelWrapperRef = useRef();
    const EagleRef = useRef();
    const CubeRef = useRef();

    // ^Store
    // @ts-ignore        Selected Topic
    const topicSelection = useStore((state) => state.topicSelection);
    // @ts-ignore        Add Topic
    const selectTopic = useStore((state) => state.selectTopic);
    // @ts-ignore        Selected Topic
    const categorySelection = useStore((state) => state.categorySelection);
    // @ts-ignore        Add Topic
    const selectCategory = useStore((state) => state.selectCategory);
    // @ts-ignore        Add Topic
    const selectWeight = useStore((state) => state.selectWeight);
    // @ts-ignore        Add Topic
    const weightSelection = useStore((state) => state.weightSelection);

    // !State
    const [bottomLeftCircleToggled, setBottomLeftCircleToggled] = useState(false);
    const [bottomLeftLeftCircleToggled, setBottomLeftLeftCircleToggled] = useState(false);
    const [bottomRightCircleToggled, setBottomRightCircleToggled] = useState(false);
    const [bottomRightRightCircleToggled, setBottomRightRightCircleToggled] = useState(false);
    const [category, setCategory] = useState(true);
    const [centerBottomBottomCircleToggled, setCenterBottomBottomCircleToggled] = useState(false);
    const [centerBottomCircleToggled, setCenterBottomCircleToggled] = useState(false);
    const [centerCircle, setCenterCircle] = useState('Topics');
    const [centerCircleToggled, setCenterCircleToggled] = useState(false);
    const [centerTopCircleToggled, setCenterTopCircleToggled] = useState(false);
    const [centerTopTopCircleToggled, setCenterTopTopCircleToggled] = useState(false);
    const [circSelectedST, setCircSelectedST] = useState<any>();
    const [eagleVisible, setEagleVisible] = useState(true);
    const [moniker, setMoniker] = useState('topics');
    const [topics, setTopics] = useState(true);
    const [upperLeftCircleToggled, setUpperLeftCircleToggled] = useState(false);
    const [upperLeftLeftCircleToggled, setUpperLeftLeftCircleToggled] = useState(false);
    const [upperRightCircleToggled, setUpperRightCircleToggled] = useState(false);
    const [upperRightRightCircleToggled, setUpperRightRightCircleToggled] = useState(false);
    const [weight, setWeight] = useState(true);

    useEffect(() => {}, [topicSelection]);

    function circleHighlighterFn(stateSetter, elementID, stateVal) {
        const CircClickedCN = document.getElementById(elementID) as HTMLImageElement;
        // ~Remove the highlight from the other circle ; new click happened..
        if (circSelectedST && CircClickedCN != circSelectedST) {
            circSelectedST.src = '/whiteCircle.png';
        }
        // ~AND Circle clicked with no highlight
        if (CircClickedCN && !isHighlighted(CircClickedCN)) {
            CircClickedCN.src = '/purpleStrokedCircle.png';
            setCircSelectedST(CircClickedCN);
            stateSetter(true);
            CircClickedCN.style.zIndex = '999';
            // ~Circle with Highlight
        } else {
            if (CircClickedCN) {
                CircClickedCN.src = '/whiteCircle.png';
                setCenterCircle('Topics');
            }
            stateSetter(false);
            CircClickedCN.style.zIndex = '0';
        }
    }

    function PanelParentE() {
        setEagleVisible(!eagleVisible);
        if (EagleRef && CubeRef && !eagleVisible) {
            // @ts-ignore
            EagleRef.current.style.display = 'block';
            // @ts-ignore
            CubeRef.current.display = 'none';
        } else if (EagleRef && CubeRef && eagleVisible) {
            // @ts-ignore
            EagleRef.current.style.display = 'none';
            // @ts-ignore
            CubeRef.current.style.display = 'none';
        } else {
            alert(`nooo`);
        }
    }

    function PanelParentL() {
        setEagleVisible(true);
        // @ts-ignore
        EagleRef.current.style.display = 'block';
        // @ts-ignore
        CubeRef.current.style.display = 'none';
    }

    const CenterCircleClickFn = (
        parentID: any,
        elementID: any,
        stateSetter: any,
        stateVal: any,
    ): any => {
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

    const CircleClickFn = (parentID: any, elementID: any, stateSetter: any, stateVal: any): any => {
        switch (moniker) {
            case 'topics':
                circleHighlighterFn(stateSetter, elementID, stateVal);
                // If its the Same Selection:
                if (topicSelection === textFinder(parentID)) {
                    selectTopic('');
                } else {
                    selectTopic(textFinder(parentID));
                }
                break;
            case 'category':
                circleHighlighterFn(stateSetter, elementID, stateVal);
                // If its the Same Selection:
                if (categorySelection === textFinder(parentID)) {
                    selectCategory('');
                } else {
                    selectCategory(textFinder(parentID));
                }
                break;
            case 'weight':
                circleHighlighterFn(stateSetter, elementID, stateVal);
                // If its the Same Selection:
                if (weightSelection === textFinder(parentID)) {
                    selectWeight('');
                } else {
                    selectWeight(textFinder(parentID));
                }
                break;
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
            setCategory(true);
            setWeight(false);
        }
        if (category) {
            setTopics(false);
            setCategory(false);
            setWeight(true);
        }
        if (weight) {
            setTopics(true);
            setCategory(false);
            setWeight(false);
        }
    };

    const MenuHeirachyArrowRightME = () => {
        switch (moniker) {
            // This is the first case, always:
            case 'topics':
                setMoniker('category');
                break;
            // Second
            case 'category':
                setMoniker('weight');
                break;
            case 'weight':
                setMoniker('topics');
                break;
            default:
                console.log(`DEFAULT`);
        }
        if (circSelectedST) {
            circSelectedST.src = '/whiteCircle.png';
        }
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Log Your Good Idea';
        }
    };

    const MenuHeirachyArrowRightMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    return (
        <PanelParent onMouseEnter={() => PanelParentE()} onMouseLeave={() => PanelParentL()}>

            <DockWrapper>
                <Dock>
                    <DockButtonContainer>
                        <MenuHeirachyArrowRightContainer>
                            <MenuHeirachyArrowRight
                                onClick={() => MenuHeirachyArrowRightClk()}
                                onMouseEnter={() => MenuHeirachyArrowRightME()}
                                onMouseOut={() => MenuHeirachyArrowRightMO()}
                                src='/Ulta/Idea_Logo.png'></MenuHeirachyArrowRight>
                        </MenuHeirachyArrowRightContainer>
                    </DockButtonContainer>
                </Dock>
                <DockTextWrapper>
                       <DockTextContainer>
                        <DockText id='DockText'></DockText>
                    </DockTextContainer>
                </DockTextWrapper>
            </DockWrapper>
            <PanelWrapper
                // @ts-ignore
                ref={PanelWrapperRef}
                id='PanelWrapper'>
                <Eagle
                    // @ts-ignore
                    ref={EagleRef}
                    id='Eagle'
                    src='/Ulta/UBMedia_Logo.png'></Eagle>
                <Cube
                    // @ts-ignore
                    ref={CubeRef}
                    id='Cube'>
                </Cube>
            </PanelWrapper>
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
    display: flex;
    justify-content: end;
    border: 2.8px solid black;
    border-top: 0px solid white;
    background-color: #f3f3f3;
`;

const PanelWrapper = styled.div`
    max-height: calc(333px);
    min-height: calc(333px);
    right: 0%;
    position: absolute;
    border: 2px solid black;
    flex-grow: 1;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Eagle = styled.img`
    height: 88%;
    width: 88%;
    position: absolute;
    flex-grow: 1;
`;

const Cube = styled.div`
    display: none;
    height: 94%;
    width: 94%;
    position: absolute;
    flex-grow: 1;
    display: none;
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
    color: #b59ceb;
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
    top: 90.5px;
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
    bottom: 90.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C9 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 16.885px;
    bottom: 60.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const C5 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 69.286px;
    bottom: 90.45px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const C11 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 16.885px;
    bottom: 60.1px;
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

const DockWrapper = styled.div`
    max-height: calc(104px);
    min-height: calc(104px);
    right: 0%;
    position: absolute;
    border: 1px solid black;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    flex-direction: column;
    border-bottom: 3px solid black;
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
    // border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    padding-top: 3px;
`;

const MenuHeirachyArrowLeftContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid black;
`;

const MenuHeirachyArrowLeft = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const MenuHeirachyArrowRightContainer = styled.div`
    width: 33px;
    height: 33px;
`;

const MenuHeirachyArrowRight = styled.img`
    height: 100%;
    width: 100%;
    // transform: rotate(180deg);
`;

const MenuOverFlowUpContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid black;
`;

const MenuOverFlowUp = styled.img`
    height: 100%;
    width: 100%;
`;
const MenuOverFlowDownContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid black;
`;

const MenuOverFlowDown = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const HistoryContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid black;
`;

const History = styled.img`
    height: 100%;
    width: 100%;
`;

const DockTextWrapper = styled.div`
  width: 80%;
  height: 33px;
  // border: 1px solid black;
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
    color: black;
`;

