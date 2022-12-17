import React from 'react'
import './NewExchangeCard.css'
import {FaPlus} from 'react-icons/fa'

function NewExchangeCard({setShowModal}) {
  return (
    <div className="newExchangeCard" onClick={()=>setShowModal(true)}>
      <FaPlus className='newExchangeCard--empty'/>
    </div>
  )
}

export default NewExchangeCard