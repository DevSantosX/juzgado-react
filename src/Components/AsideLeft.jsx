import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import "./AsideLeft.scss";
import { useNavigate } from "react-router-dom";

const AsideLeft = () => {
  let navigate = useNavigate();

  async function handleSubmit(hash) {
    navigate(hash, { replace: true });
  }

  let items = [
    {
      label: "Opciones",
      items: [
        {
          label: "Libro",
          icon: "pi pi-fw pi-book",
          command: () => {
            handleSubmit("book")
          },
        },
        {
          label: "Reportes",
          icon: "pi pi-fw pi-chart-bar",
          command: () => {
            handleSubmit("reports")
          },
        },
      ],
    },
    {
      label: "Administración",
      items: [
        {
          label: "Formatos",
          icon: "pi pi-fw pi-file-pdf",
          command: () => {
            handleSubmit("formats")
          },
        },
        {
          label: "Usuarios",
          icon: "pi pi-fw pi-users",
          command: () => {
            handleSubmit("users")
          },
        },
      ],
    },
  ];

  return (
    <div className="aside-left">
      <Menu model={items} />
    </div>
  );
};

export default AsideLeft;
