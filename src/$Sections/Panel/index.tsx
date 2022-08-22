import React from 'react'
import styled from 'styled-components'

const PanelEl = styled.div`
  height: 100%;
  right: 0%;
  width: 21%;
  position: absolute;
  border: 2px solid yellow;
  flex-grow: 1;
`

const Panel = () => {
  return <PanelEl></PanelEl>
}

export default Panel
