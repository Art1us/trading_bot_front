import React from 'react'
import './AddExchangeCard.css'
import {FaPlus} from 'react-icons/fa'

function AddExchangeCard({setShowModal}) {
  return (
    <div className="addExchangeCard" onClick={()=>setShowModal(true)}>
      <FaPlus className='addExchangeCard--empty'/>
    </div>
  )
}

export default AddExchangeCard