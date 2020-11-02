import React, { useRef, useState } from 'react'
import { gql, useMutation } from "@apollo/client";
import { Layout } from '../components/Layout/Layout'
import Lolly from '../components/Lolly/Lolly'

const craeteLollyMutation = gql`
    mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!,$flavourBottom: String!) {
        createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle, flavourBottom: $flavourBottom) {
            message
        }
    }
`

export default function Create(){
    const [createLolly] = useMutation(craeteLollyMutation)

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
            <form name='new-lolly' action='/new' method='POST'>
                <div className='lolly'>
                    <div className='giftLolly'>
                        <Lolly fillLollyTop={topColor} fillLollyMiddle={middleColor} fillLollyBottom={bottomColor} />
                    </div>
                    <div className='falvours'>
                        <label id='flavourTop' className='pickerLabel'>
                            <input type='color' className="colourpicker" id="flavourTop" name="flavourTop" value={topColor} onChange={(e) =>setTopColor(e.target.value)} />
                        </label>
                        <label id='flavourTop' className='pickerLabel'>
                            <input type='color' className="colourpicker" id="falvourMidlle" name="falvourMidlle" value={middleColor} onChange={(e) =>setMiddleColor(e.target.value)} />
                        </label>                        <label id='flavourTop' className='pickerLabel'>
                            <input type='color' className="colourpicker" id="flavourBottom" name="flavourBottom" value={bottomColor} onChange={(e) =>seBottomColor(e.target.value)} />
                        </label>
                    </div>
                    <div className='info'>
                        <div className='details'>
                            <p>
                                <label htmlFor='recipientName' >To</label>
                                <input type="text" id="recipientName" name="recipientName" placeholder="From" />
                            </p>
                            <div className='message'>
                                <label htmlFor='recipientName'>
                                    Say Something Nice
                                </label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            </div>
                            <p>
                                <label htmlFor='recipientName'>From</label>
                                <input type="text" id="sendersName" name="sendersName" placeholder="from your friend..." />
                            </p>
                        </div>
                        <input type="submit" onClick={submitLollyForm} />

                    </div>
                </div>
            </form>
        </Layout>
    </div>    
    )
}

