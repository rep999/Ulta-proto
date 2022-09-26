import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { supabase } from '../../client.js'

const Modal = ({ onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  // create ref for the SMWrapper component
  const modalWrapperRef = React.useRef()

  // check if the user has clickedinside or outside the modal
  const backDropHandler = (e) => {
    if (
      modalWrapperRef.current &&
      !modalWrapperRef?.current?.contains(e.target)
    ) {
      onClose()
    }
  }

  useEffect(() => {
    setIsBrowser(true)
    // attach event listener to the whole windor with our handler
    window.addEventListener('click', backDropHandler)

    // remove the event listener when the modal is closed
    return () => window.removeEventListener('click', backDropHandler)
  }, [])

  const handleCloseClick = (e) => {
    onClose()
  }

  const saveClick = async (event) => {
    if (event) event.preventDefault()
    // const { data, error } = await supabase.from('chirp').insert([
    //   {
    //     url: `derp_derp2`,
    //     text: `inputData.text`,
    //     category: `inputData.category`,
    //   },
    // ])
  }

  const modalContent = (
    <SMOverlay>
      <SMWrapper>
        <SMain>
          <SMHeader>
            <SMTitle>Make Fire</SMTitle>
          </SMHeader>
          <SMBody>
            <SMForm onsubmit={saveClick()}>
              <SMTextArea id="SMTextArea"></SMTextArea>
              <SMTopicsFlexContainer>
                <SMTopicContainer>
                  <KnowledgeContainer>
                    <KnowledgeLabel>Knowledge</KnowledgeLabel>
                    <Knowledge name="Knowledge" type="checkbox"></Knowledge>
                  </KnowledgeContainer>

                  <CareerContainer>
                    <CareerLabel>Career</CareerLabel>
                    <Career name="Career" type="checkbox"></Career>
                  </CareerContainer>

                  <EntertainmentContainer>
                    <EntertainmentLabel>Entertainment</EntertainmentLabel>
                    <Entertainment
                      name="Entertainment"
                      type="checkbox"
                    ></Entertainment>
                  </EntertainmentContainer>

                  <LifeContainer>
                    <LifeLabel>Life</LifeLabel>
                    <Life name="Life" type="checkbox"></Life>
                  </LifeContainer>

                  <SocialContainer>
                    <SocialLabel>Social</SocialLabel>
                    <Social name="Social" type="checkbox"></Social>
                  </SocialContainer>
                </SMTopicContainer>
                <SMCategoryContainer>
                  <QuestionContainer>
                    <QuestionLabel>Question</QuestionLabel>
                    <Question name="Question" type="checkbox"></Question>
                  </QuestionContainer>

                  <ImportantContainer>
                    <ImportantLabel>Important</ImportantLabel>
                    <Important name="Important" type="checkbox"></Important>
                  </ImportantContainer>

                  <KeyContainer>
                    <KeyLabel>Key</KeyLabel>
                    <Key name="Key" type="checkbox"></Key>
                  </KeyContainer>

                  <NoteContainer>
                    <NoteLabel>Note</NoteLabel>
                    <Note name="Note" type="checkbox"></Note>
                  </NoteContainer>
                </SMCategoryContainer>
                <SM_Weight_Container>
                  <SMSliderDiv>
                    <SMInputSlider type="range" min="10" max="100" />
                  </SMSliderDiv>
                </SM_Weight_Container>
                <SMFinishButtonContainer>
                  <SMFinishButton type="submit">Save</SMFinishButton>
                </SMFinishButtonContainer>
              </SMTopicsFlexContainer>
            </SMForm>
          </SMBody>
        </SMain>
      </SMWrapper>
    </SMOverlay>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    )
  } else {
    return null
  }
}

const SMForm = styled.form`
  width: 97.5%;
  height: 99%;
  margin: 0 auto;
  padding: 2em 2em 1em 2em;
  background-color: #9a8c98;
  border-radius: 15px;
`

const SMTextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 70%;
  min-height: 70%;
  max-height: 100%;
`

const SMTopicsFlexContainer = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
`

const SMTopicContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  width: 100%;
`

const KnowledgeContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const KnowledgeLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Knowledge = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const LifeContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LifeLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Life = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
  color: black;
`

const EntertainmentContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const EntertainmentLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Entertainment = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const CareerContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CareerLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Career = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const SocialContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SocialLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Social = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`
const Important = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const Key = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const Note = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const SMCategoryContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  width: 100%;
`

const SMWeightLabel = styled.label`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
`

const QuestionContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const QuestionLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const Question = styled.input`
  width: 30%;
  height: 30%;
  border: 1px solid grey;
`

const ImportantContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImportantLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const KeyContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const KeyLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const NoteContainer = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const NoteLabel = styled.div`
  color: black;
  font-size: 0.85rem;
`

const SM_Weight_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SMFinishButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28%;
`

const SMFinishButton = styled.button`
  width: 14%;
  height: 90%;
  border-radius: 7px;
  border: 1px solid black;
`

const SMSliderDiv = styled.div`
  width: 400px;
  height: 60px;
  background: #9a8c98;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
`

const SMInputSlider = styled.input`
  color: black;
  font-size: 0.85rem;
`

const SMHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 25px;
  height: 8%;
`

const SMTitle = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`
const SMain = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: 2px solid grey;
  border-style: groove;
`

const SMBody = styled.div`
  height: 89%;
`
const SMWrapper = styled.div`
  width: 60%;
  height: 70%;
  background-color: black !important;
`

const SMOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export default Modal
