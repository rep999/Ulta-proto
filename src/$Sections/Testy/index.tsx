import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import MockFireObjReturned from '../../data/MockFire'
import { supabase } from '../../../client.js'
import { useForm } from 'react-hook-form'

const TestyContainer = styled.div`
  height: 100%;
  /* width: 66%; */
  flex: 3;
  border: 2px solid green;
`

const ContentSectional = styled.section`
  /* border: 2px solid orange; */
  height: 84.88%;
  width: 100%;
  display: flex;
  color: white;
  position: relative;
  flex-direction: column;
  right: 0px;
  border: 2px solid white;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.04);
  } */
`

const Testy = () => {
  const [initialRender, setInitialRender] = useState(true)
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('')

  const onSubmit = async (inputData: any) => {
    const inputObj = JSON.stringify(inputData)
    // let { data: chirp, error } = await supabase.from('chirp').select('*')
    console.log(inputData)
    console.log(inputData.url)
    console.log(inputData.text)
    console.log(inputData.category)
    const { data, error } = await supabase.from('chirp').insert([
      {
        url: inputData.url,
        text: inputData.text,
        category: inputData.category,
      },
    ])
    // const { data, error } = await supabase
    //   .from('categories')
    //   .insert([{ category: 'inputObj.category45' }])
  }
  useEffect(() => {}, [])

  return (
    <TestyContainer>
      <ContentSectional>
        <div style={{ maxWidth: '420px', margin: '96px auto' }}>
          <h2>How about your first Chirp?</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              url
              <input {...register('url')} name="url" />
            </label>
            <label>
              text
              <input {...register('text')} name="text" />
            </label>
            <label>
              category
              <input {...register('category')} name="category" />
            </label>
            <input type="submit" />
          </form>
        </div>
      </ContentSectional>
    </TestyContainer>
  )
}

export default Testy
