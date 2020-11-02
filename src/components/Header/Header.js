import { navigate } from "gatsby"
import React from "react"

export const Header = () => {
  return (
    <div  className="container">
      <h1 className='title' onClick={() => navigate('/')} >Virtual Lollipop</h1>
      <p className='subtitle'> because we all know someone who deserves some sugar.</p>
    </div>
  )
}
