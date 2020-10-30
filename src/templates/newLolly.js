import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout'

export const query = graphql`
    query getLolly($id: String!) {
        lolly{
        getLolly(id: $id) {
          flavourTop
        }
      }
    }
  `

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
