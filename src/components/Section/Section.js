import React from 'react'
import { Layout } from '../Layout/Layout'
import Lolly from '../Lolly/Lolly'

const Section = ({ recipientName, message, senderName, flavourTop, flavourMiddle, flavourBottom }) => {
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

export default Section
