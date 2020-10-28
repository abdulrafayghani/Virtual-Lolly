const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb'),
  q = faunadb.query
require('dotenv').config() 

const typeDefs = gql`
  type Query {
    getLolly {
      lolly: [Lolly]
    }
  }

  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
  }

  type Mutation {
    createLolly(recipientName: String!, message: String!, senderName: String!, flavourTop: String!, flavourMiddle: String!,flavourBottom: String!): Lolly
  }
`

const resolvers = {
  Query: {
    getLolly: async () => {
      // return 'Hello, world!'
      const client = new faunadb.Client({ secret: 'fnAD5PWwZpACB9kx4B0lQwRo54WR8YDjAJjfBzmr' })
      const result = await client.query(
        q.Map(q.Collection('lolly'))
      )
      console.log('query res',result.data)
        return result.data
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      try {
        const client = new faunadb.Client({ secret: 'fnAD5PWwZpACB9kx4B0lQwRo54WR8YDjAJjfBzmr' })

        const result = await client.query(
          q.Create(q.Collection('lolly'), {
            data: args
          })
        )
        console.log('result',result)
        return result.data
      } catch (err){
        console.log(err)
      }
    } 
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
