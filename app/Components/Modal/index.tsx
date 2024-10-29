"use client"
import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const Modal = () => {
  const [sensorData, setSensorData] = useState<any>(null);
  

useEffect(()=>{
  const responseData = async ()=>{
    try{
      const reposne = await fetch("http://localhost:3005/sensors/671c4d90d5e3904b48d181bc")
      if(reposne.ok){
        setSensorData(reposne.json())
        return console.log(sensorData)

      }
    }catch(erro:any){
      console.log("houve um erro ", erro)
    }


  }
  responseData()
},[])



  return (
    <div className='w-64'>
        <Input label='sensor name' type='text'/>
        <div className='p-3'>
      <button>buscar</button>

        </div>
    
    
    </div>
  )
}

export default Modal
