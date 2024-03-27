import React from 'react'

const Modal = () => {
  return (
    <div className='fixed inset-0 bg-black opacity-50 backdrop-blur-sm'>
        <div>
            <h3 className='text-white text-center'>This is my modal</h3>
        </div>
    </div>
  )
}

export default Modal;