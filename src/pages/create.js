import React, { useRef, useState } from 'react'
import { gql, useMutation, useQuery } from "@apollo/client";
import { Layout } from '../components/Layout/Layout'
import Lolly from '../components/Lolly/Lolly'

const LollyQuery = gql`{
        getLollies{
            message
        }
}
`

const craeteLollyMutation = gql`
    mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!,$flavourBottom: String!) {
        createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle, flavourBottom: $flavourBottom) {
            message
        }
    }
`

export default function Create(){
    const { data, loading } = useQuery(LollyQuery)
    const [createLolly] = useMutation(craeteLollyMutation)
    console.log(data)

    const [topColor, setTopColor] = useState('#d52358')    
    const [middleColor, setMiddleColor] = useState('#32a852')    
    const [bottomColor, seBottomColor] = useState('#ac39b3') 
    const recipientName = useRef()
    const message = useRef()
    const senderName = useRef()

    const submitLollyForm = async () => {
        const result = await createLolly({
            variables: {
                recipientName: recipientName.current.value,
                message: message.current.value,
                senderName: senderName.current.value,
                flavourTop: topColor,
                flavourMiddle: middleColor,
                flavourBottom: bottomColor 
            }
        })
        console.log('result',result)
    }

    return(
        <div>
        <Layout>
            <div className='createMain'>
                <div>
                    <Lolly fillLollyTop={topColor} fillLollyMiddle={middleColor} fillLollyBottom={bottomColor} />
                </div>
                <div>
                    <input name='flavourTop' type='color' value={topColor} onChange={(e) => setTopColor(e.target.value)}  />
                    <input name='flavourMiddle' type='color' value={middleColor} onChange={(e) => setMiddleColor(e.target.value)} />
                    <input name='flavourBottom' type='color' value={bottomColor} onChange={(e) => seBottomColor(e.target.value)} />
                </div>
                <div >
                        <label>
                            To
                        </label>
                        <input type='text' ref={recipientName} />
                        <label>
                            Say something nice
                        </label>
                        <input type='text' ref={message} />
                        <label>
                            From
                        </label>
                        <input type='text' ref={senderName} />
                </div>
                <input type='button' onClick={submitLollyForm} />
            </div>
        </Layout>
    </div>    )
}

