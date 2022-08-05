import React, { useState } from "react";
import "./Login.scss";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "../Hooks/useForm";

const initialForm = {
  username: "",
  password: "",
};

const validationForm = (form) => {
  let errors = {};

  if (!form.username.trim()) {
    errors.username = "Ingresa un usuario";
  }

  if (!form.password.trim()) {
    errors.password = "La contraseña es requerida";
  }

  return errors;
};

const Login = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  return (
    <div className="login">
      <Card className="login-card">
        <div className="login-title">
          <h1>Juzgado Oral de lo Familiar y Civil</h1>
          {loading && <p>Cargando</p>}
        </div>
        <Fieldset legend="Inicio de Sesión">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field">
              <label htmlFor="username">Usuario</label>
              <InputText
                name="username"
                value={form.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && "p-invalid"}
              />
              {errors.username && (
                <small className="p-error ">
                  {errors.username}
                </small>
              )}
            </div>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <InputText
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && "p-invalid"}
              />
              {errors.password && (
                <small className="p-error ">
                  {errors.password}
                </small>
              )}
            </div>
            <Button type="submit" label="Iniciar" className="login-form-btn" />
          </form>
        </Fieldset>
      </Card>
    </div>
  );
};

export default Login;
