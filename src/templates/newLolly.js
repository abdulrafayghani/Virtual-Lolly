// import React from 'react'
// import { graphql } from 'gatsby'
// import Section from '../components/Section/Section'

// export const query = graphql`
// query getLolly($id: String!) {
//   lolly {
//     getLolly(id: $id) {
//       recipientName
//       message
//       senderName
//       flavourTop
//       flavourMiddle
//       flavourBottom
//     }
//   // 
// }
// `

// const NewLolly = ({ data: { lolly: { getLolly } } }) => {
//   const { recipientName, message, senderName, flavourTop, flavourMiddle, flavourBottom }  = getLolly
//     return (
//         <div>
//           <Section recipientName={recipientName} message={message} senderName={senderName} flavourTop={flavourTop} flavourMiddle={flavourMiddle} flavourBottom={flavourBottom} />
//         </div>
//     )
// }

// export default NewLolly
