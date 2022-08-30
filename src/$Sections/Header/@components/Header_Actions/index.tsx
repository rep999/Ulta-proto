import React, { useState } from 'react'
import styled from 'styled-components'
import { ChirpModal } from '../../../../modals/ChirpModal.js'

const Parent = styled.div`
  display: flex;
  /* Temp */
  width: 253px;
  height: 36px;
  border: 2px solid white;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Create_Chirp_Button = styled.button`
  background: #20d39b;
  border: 1px solid #20d39b;
  color: #090b0e;
  fill: #090b0e;
  font-weight: 600;
  font-size: 14px;
  height: 49px;
  width: 132px;
  line-height: 1.4;
  padding: 0;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  position: relative;
  text-decoration: none;
  overflow: visible;
  user-select: none;
  font: inherit;
  margin: 0;
`

const Chirp_Span = styled.span`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
  height: 16px !important;
  width: 16px !important;
  margin: 0 4px 0 0;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  justify-self: center;
  margin: 0;
  padding: 0;
`

const Chirp_SVG = styled.span`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
  height: 16px;
  width: 16px;
  border: 1px solid white;
`

const Label = styled.span`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Ask_Question_Button = styled.button`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Break_Div = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Profile_Icon_Button = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Header_Actions = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const ChirpClk = () => {
    setModalOpen(true)
  }

  return (
    <Parent>
      <ChirpModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Wrapper>
        <Create_Chirp_Button onClick={() => ChirpClk()}>
          <Chirp_Span>
            <Chirp_SVG></Chirp_SVG>
          </Chirp_Span>
          <Label>Make a Chirp</Label>
        </Create_Chirp_Button>
        <Ask_Question_Button></Ask_Question_Button>
        <Break_Div></Break_Div>
        <Profile_Icon_Button></Profile_Icon_Button>
      </Wrapper>
    </Parent>
  )
}

export default Header_Actions
