import React from 'react'
import styled from 'styled-components'
import Header_Actions from './@components/Header_Actions'

const Header_Parent = styled.header`
  background-color: transparent;
  padding: 20px;
  padding-bottom: 0;
  padding-top: 0;
  /* Temp */
  max-height: 63px;
  min-height: 63px;
  width: 100%;
  border: 1px solid white;
`

const Header_Wrapper = styled.div`
  max-height: 64px;
  min-height: 64px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header_Items = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  /* Temp */
  width: 113px;
  height: 28px;
  border: 1px solid white;
`

const Header_Search = styled.div`
  display: block;
  padding: 0 16px;
  outline: #fff;
  /* Temp */
  width: 508px;
  height: 36px;
  border: 1px solid white;
`

// const Header_Actions = styled.div`
//   display: flex;
//   /* Temp */
//   width: 253px;
//   height: 36px;
//   border: 1px solid white;
// `

const Header = () => {
  return (
    <Header_Parent>
      <Header_Wrapper>
        <Header_Items></Header_Items>
        <Header_Search></Header_Search>
        <Header_Actions></Header_Actions>
      </Header_Wrapper>
    </Header_Parent>
  )
}

export default Header
