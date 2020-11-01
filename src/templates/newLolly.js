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
    console.log(getLolly)
    return (
        <div>
            <Layout>
              <Lolly fillLollyTop={flavourTop} fillLollyMiddle={flavourMiddle} fillLollyBottom={flavourBottom } />
            </Layout>
        </div>
    )
}

export default NewLolly
