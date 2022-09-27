import React, { useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Modal from '$components/Modal.js';

const Actions = () => {
    const [showModal, setShowModal] = useState(false);
    const ChirpClk = () => {
        setShowModal(true);
    };

    return (
        <Actions_Parent>
            <Make_Fire_Wrapper onClick={() => ChirpClk()}>
                <Emoji_Fire_Img src='FireEmoji.png'></Emoji_Fire_Img>
            </Make_Fire_Wrapper>
            {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
        </Actions_Parent>
    );
};

export default Actions;

const Actions_Parent = styled.div`
    display: flex;
    position: relative;
    margin-right: 12px;
    justify-content: center;
    align-items: center;
    width: calc(333px / 1.6181);
    height: 46.9px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        transform: scale(1.01);
        box-shadow: rgba(255, 255, 255, 0.1112) 0px 4px 5px, rgba(217, 217, 217, 0.11) 0px -12px 3px,
            rgba(224, 224, 224, 0.11) 0px 4px 6px, rgba(233, 233, 233, 0.11) 0px 3px 3px,
            rgba(227, 227, 227, 0.09) 0px -3px 5px;
    }
`;

// 205.79   127.184     78.60

const Make_Fire_Wrapper = styled.div`
    min-width: 34px;
    max-width: 34px;
    min-height: 34px;
    max-height: 34px;
`;

const Make_Fire_Wrappe2 = styled.div`
    // min-width: 28.9px;
    // max-width: 28.9px;
    // height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // background-color: pink;
    min-width: 28px;
    max-width: 28px;
    min-height: 28px;
    max-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
`;

const Emoji_Fire_Img = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
    justify-self: center;
`;
