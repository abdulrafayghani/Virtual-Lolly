import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'

// export const query = graphql`

//       query getLolly($id: String)  {
//       getLolly(id: $id) {
//         recipientName
//         message
//         senderName
//         flavourTop
//         flavourMiddle
//         flavourBottom
//         lollyPath        
//       }
//     }   
// `

const NewLolly = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Layout>
                <p>Your lolly is freezing</p>
            </Layout>
        </div>
    )
}

export default NewLolly
