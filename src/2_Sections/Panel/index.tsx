import React from 'react'
import styled from 'styled-components'

const PanelParent = styled.div`
  height: 100%;
  right: 0%;
  position: absolute;
  // border: 3px solid brown;
  flex-grow: 1;
  max-width: calc(333px);
  min-width: calc(333px);
`

const PanelWrapper = styled.div`
  max-height: calc(333px);
  min-height: calc(333px);
  right: 0%;
  position: absolute;
  border: 4px solid white;
  flex-grow: 1;
  max-width: calc(333px);
  min-width: calc(333px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FireNetLogo = styled.img`
  height: 88%;
  width: 88%;
  position: absolute;
  flex-grow: 1;
`

const Fruit = styled.img`
  height: 94%;
  width: 94%;
  position: absolute;
  flex-grow: 1;
  display: none;
`

const Panel = () => {
  const mouseOverLogo = () => {
    const FireNetLogo = document.getElementById('FireNetLogo')
    const Fruit = document.getElementById('Fruit')
    if (FireNetLogo) { FireNetLogo.style.display = 'none' }
    if (Fruit) { Fruit.style.display = 'block' }
  }
  const mouseLeaveFruit = () => {
    const FireNetLogo = document.getElementById('FireNetLogo')
    const Fruit = document.getElementById('Fruit')
    if (FireNetLogo) { FireNetLogo.style.display = 'block' }
    if (Fruit) { Fruit.style.display = 'none' }
  }

  return <PanelParent>
    <PanelWrapper>
      <FireNetLogo id='FireNetLogo' onMouseEnter={() => mouseOverLogo()} src="/OfficialLogo.png"></FireNetLogo>
      <Fruit id='Fruit' onMouseLeave={() => mouseLeaveFruit()} src="/Fruit.png"></Fruit>
    </PanelWrapper>
  </PanelParent>
}

export default Panel
