import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'

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
    console.log(getLolly)
    return (
        <div>
            <Layout>
                <p>Your lolly is freezing</p>
            </Layout>
        </div>
    )
}

export default NewLolly
