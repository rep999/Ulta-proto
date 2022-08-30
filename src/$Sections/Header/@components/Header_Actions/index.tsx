import React from 'react'
import styled from 'styled-components'

const Header_Actions_Parent = styled.header`
  display: flex;
  /* Temp */
  width: 253px;
  height: 36px;
  border: 1px solid white;
`

const Header_Actions_Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Create_Chirp_Button = styled.button`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Chirp_Span = styled.span`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  margin: 0 0 0 12px;
`

const Chirp_SVG = styled.span`
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
  return (
    <Header_Actions_Parent>
      <Header_Actions_Wrapper>
        <Create_Chirp_Button>
          <Chirp_Span>
            <Chirp_SVG></Chirp_SVG>
          </Chirp_Span>
        </Create_Chirp_Button>
        <Ask_Question_Button></Ask_Question_Button>
        <Break_Div></Break_Div>
        <Profile_Icon_Button></Profile_Icon_Button>
      </Header_Actions_Wrapper>
    </Header_Actions_Parent>
  )
}

export default Header_Actions
