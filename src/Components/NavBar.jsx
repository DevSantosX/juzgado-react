import React from 'react';
import { SplitButton } from 'primereact/splitbutton';
import './NavBar.scss'

const NavBar = () => {
  const items = [
    {
        label: 'Cambiar Contraseña',
        icon: 'pi pi-lock',
    },
    {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
    }
];
  return (
    <div className='navbar'>
      <div className="navbar-brand">
        <h1 className='text-secondary'>Plataforma de Captura</h1>
      </div>
      <div className='navbar-options'>
        <SplitButton label="Pedro Ernesto Santos Diaz" model={items} className="p-button-text mr-2 mb-2"/>
      </div>
    </div>
  );
}

export default NavBar;
