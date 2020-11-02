import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import Lolly from '../components/Lolly/Lolly'

export const query = graphql`
query getLolly($id: String!) {
  lolly {
    getLolly(id: $id) {
      recipientName
      message
      senderName
      flavourTop
      flavourMiddle
      flavourBottom
    }
  }
}
`

const NewLolly = ({ data: { lolly: { getLolly } } }) => {
  const { recipientName, message, senderName, flavourTop, flavourMiddle, flavourBottom }  = getLolly
    return (
        <div>
            <Layout>
              <div className='lolly'>
                <div className='giftLolly'>
                  <Lolly fillLollyTop={flavourTop} fillLollyMiddle={flavourMiddle} fillLollyBottom={flavourBottom } />
                </div>
                </div>
                <div className='info'>
                  <div className='details'>
                    <p id="recipient" className='recipient'> {recipientName} </p>
                    <div id='message' className='message'> {message} </div>
                    <p id='from' className='from'> — {senderName} </p> 
                  </div>
                </div>
            </Layout>
        </div>
    )
}

export default NewLolly
