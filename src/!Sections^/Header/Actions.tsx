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
            <CartWrapper onClick={() => ChirpClk()}>
                <Cart src='Ulta/Cart.png'></Cart>
            </CartWrapper>
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
    width: 40px;
    height: 40px;
    border-radius: 3px;
    cursor: pointer;
    transform: scale(1.1);
`;

// 205.79   127.184     78.60

const CartWrapper = styled.div`
    height: 23px;
    widht: 23px;
`;

const Cart = styled.img`
    display: flex;
    height: 100%;
    widht: 100%;
    align-self: center;
    justify-self: center;
`;
