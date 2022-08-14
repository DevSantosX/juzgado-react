import React, { useState } from "react";
import "./Formats.scss";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Outlet } from "react-router-dom";
import ModalNewFormat from "../Components/ModalNewFormat";
export default function Formats() {
  const [modalNewFormat, setModalNewFormat] = useState(false);

  const onClick = () => {
    setModalNewFormat(true);
  };

  const onHide = () => {
    setModalNewFormat(false);
  };

  const leftContents = (
    <React.Fragment>
      <Button
        label="Nuevo"
        icon="pi pi-plus"
        onClick={() => onClick()}
        className="p-button-text mr-2"
      />
      <Button label="Buscar" icon="pi pi-search" className="p-button-text" />
    </React.Fragment>
  );

  return (
    <div className="formats">
      <Toolbar left={leftContents} />
      <ModalNewFormat modal={modalNewFormat} onHide={onHide} />
      <Outlet />
    </div>
  );
}
