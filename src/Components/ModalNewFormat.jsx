import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { useForm } from "../Hooks/useForm";
import { Dropdown } from "primereact/dropdown";

const initialForm = {
  nameFormat: "",
  typeFormat: "",
};

const typesFormat = [
  { label: "opresion", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];

const validationForm = (form) => {
  let errors = {};

  if (!form.nameFormat.trim()) {
    errors.nameFormat = "Ingresa un nombre para el formato";
  }

  return errors;
};

export default function ModalNewFormat({ modal, onHide }) {
  const {
    form,
    errors,
    setForm,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  const onResetForm = () => {
    setForm(initialForm);
  };
  const renderFooter = () => {
    return (
      <div>
        <Button
          label="Crear"
          icon="pi pi-check"
          onClick={handleSubmit}
          autoFocus
        />
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={() => {
            onHide();
            onResetForm();
          }}
          className="p-button-text"
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Dialog
        header="Nuevo Formato"
        visible={modal}
        style={{ width: "400px" }}
        footer={renderFooter()}
        onHide={() => onHide()}
      >
        <Fieldset>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nameFormat">Nombre del formato</label>
              <InputText
                name="nameFormat"
                value={form.nameFormat}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.nameFormat && "p-invalid"}
              />
              {errors.nameFormat && (
                <small className="p-error ">{errors.nameFormat}</small>
              )}
            </div>
            <div className="field">
              <label htmlFor="typeFormat">Tipo de formato</label>
              <Dropdown
                name="typeFormat"
                value={form.typeFormat}
                options={typesFormat}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.typeFormat && "p-invalid"}
                placeholder="Select a City"
              />
              {errors.typeFormat && (
                <small className="p-error ">{errors.typeFormat}</small>
              )}
            </div>
          </form>
        </Fieldset>
      </Dialog>
    </React.Fragment>
  );
}
