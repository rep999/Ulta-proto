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
    justify-content: center;
    align-items: center;
    width: calc(333px / 1.6181);
    height: 46.9px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
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
