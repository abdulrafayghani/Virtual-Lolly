import React, {useState} from "react"
import { navigate } from 'gatsby'
import { Layout } from "../components/Layout/Layout"
import Lolly from "../components/Lolly/Lolly"
import style from '../style/global.css'
import { gql, useQuery } from "@apollo/client"

const lQ = gql`{
    hello
}`

export default function Home() {
  const {data} = useQuery(lQ)
  console.log(data)
  return(
    <div>
      <Layout >
        <div className='lollyMain'>
          <div className='allLollies'>
            <Lolly fillLollyTop='pink' fillLollyMiddle='yellow' fillLollyBottom='red' />
            <Lolly fillLollyTop='pink' fillLollyMiddle='yellow' fillLollyBottom='red' />
            <Lolly fillLollyTop='pink' fillLollyMiddle='yellow' fillLollyBottom='red' />
            <Lolly fillLollyTop='pink' fillLollyMiddle='yellow' fillLollyBottom='red' />
            <Lolly fillLollyTop='pink' fillLollyMiddle='yellow' fillLollyBottom='red' />
          </div>
          <div className='button'>
            <button onClick={() => navigate('/createLolly')}>
              Create a new lolly to send a friend
            </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}
