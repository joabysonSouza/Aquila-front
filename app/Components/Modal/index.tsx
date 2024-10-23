import React from 'react'
import Input from '../Input'
import Button from '../Button'

const Modal = () => {
  return (
    <div className='w-64'>
        <Input label='sensor name' type='text'/>
        <div className='p-3'>
        <Button name='Save' type='submit' />

        </div>
    
    
    </div>
  )
}

export default Modal
