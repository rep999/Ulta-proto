import React from 'react'
import styled from 'styled-components'

const PanelEl = styled.div`
  height: 100%;
  right: 0%;
  position: absolute;
  border: 3px solid brown;
  flex-grow: 1;
  max-width: calc(166px * 1.61);
  min-width: calc(166px * 1.61);
`

const Panel = () => {
  return <PanelEl></PanelEl>
}

export default Panel
