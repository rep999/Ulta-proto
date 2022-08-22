import React from 'react'
import styled from 'styled-components'

const NavEl = styled.div`
  height: calc(100% - 66px);
  min-width: 166px;
  max-width: 166px;
  top: 66px;
  position: absolute;
  left: 0px;
  border: 2px solid orange;
  flex-grow: 1;
`

const Nav = () => {
  return <NavEl></NavEl>
}

export default Nav
