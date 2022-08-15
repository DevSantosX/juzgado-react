import React from 'react'
import { InputText } from 'primereact/inputtext';



const TextInput = () => {
  return (
    <InputText id="username2" aria-describedby="username2-help" className="p-invalid block" />
  )
}

const dictionaries = {
  "inputtext" : <TextInput/>
}

const list = ['inputtext', 'inputtext'];


export default function FormElments() {
  return (
    <div>
      { list.map(el => {
        return dictionaries[el]
      })}
    </div>
  )
}
