import React from 'react'
import './Book.scss'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Outlet } from 'react-router-dom';

const leftContents = (
  <React.Fragment>
      <Button label="Nuevo" icon="pi pi-plus" className="p-button-text mr-2" />
      <Button label="Buscar" icon="pi pi-search" className="p-button-text" />
  </React.Fragment>
);

export default function Book() {
  return (
    <div className='book'>
      <Toolbar left={leftContents}/>
      <Outlet/>
    </div>
  )
}
