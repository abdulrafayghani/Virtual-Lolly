/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { createHttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')
 require('dotenv').config()


module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lolly",
        fieldName: "lolly",
        // url: `http://localhost:8888/.netlify/functions/lolly`,
        createLink: () =>  {
          createHttpLink({ uri: `/.netlify/functions/lolly`, fetch })
        }
      },
    },
  ],
}
