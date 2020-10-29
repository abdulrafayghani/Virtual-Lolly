import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'

export const query = graphql`
query {
    lolly($id: String) {
      getLolly(id: $id) {
        recipientName
        message
        senderName
        flavourTop
        flavourMiddle
        flavourBottom
        lollyPath        
      }
    }
  }
`

const NewLolly = ({ data: { lolly } }) => {
    console.log(lolly)
    return (
        <div>
            <Layout>
                <p>Your lolly is freezing</p>
            </Layout>
        </div>
    )
}

export default NewLolly
