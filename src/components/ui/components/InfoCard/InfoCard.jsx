import React from 'react'
import "./InfoCard.scss"
function InfoCard({children}) {
  return (
    <div className='infoCard'>{children}</div>
  )
}

export default InfoCard