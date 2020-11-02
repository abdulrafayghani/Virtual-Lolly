const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb'),
  q = faunadb.query
const shortid = require('shortid')
require('dotenv').config() 

const typeDefs = gql`
  type Query {
      getLollies: [Lolly!]
      getLolly(id: String!): Lolly!
  }

  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }

  type Mutation {
    createLolly(recipientName: String!, message: String!, senderName: String!, flavourTop: String!, flavourMiddle: String!,flavourBottom: String!): Lolly
  }
`

const resolvers = {
  Query: {
    getLollies: async () => {
      try { 
        const client = new faunadb.Client({ secret: 'fnAD5PWwZpACB9kx4B0lQwRo54WR8YDjAJjfBzmr' })

        const result = await client.query(
          q.Map(q.Paginate(q.Match(q.Index('lolly_by_name'))),
          q.Lambda(x => q.Get(x)))
        )
        console.log('all res',result.data)
        return result.data.map(d => {
          return{ 
            recipientName: d.data.recipientName,
            senderName: d.data.senderName,
            message: d.data.message,
            lollyPath: d.data.lollyPath,
            flavourTop: d.data.flavourTop,
            flavourMiddle: d.data.flavourMiddle,
            flavourBottom: d.data.flavourBottom
          }
        })
      } catch (err){
        console.log(err)
      }
    },
    getLolly: async (_,args) => {
      console.log('getlollyid',args.id)
      try{
        const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

        const result = await client.query(
          q.Get(q.Match(q.Index('lolly_by_id'), args.id))
        )

        return result.data

      } catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    createLolly: async (_, args) => {
      try {
        const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET })
        const id = shortid.generate()
        args.lollyPath = id

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
