import React from 'react'
import styled from 'styled-components'

const Header_Parent = styled.header`
    padding-bottom: 0;
    padding-top: 0;
    background-color: transparent;
    padding: 20px;
`

const Header_Wrapper = styled.div`
    max-height: 64px;
    min-height: 64px;
`

const Header_Items = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

const Header_Search = styled.div`
    display: block;
    padding: 0 16px;
    outline: #fff;
` 

const Header_Actions = styled.div`
    display: flex;
`

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
