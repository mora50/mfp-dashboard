import React from "react";

import { FormBuilder } from "./molecules/FormBuilder";

const formArray = [
  {
    name: "name",
    label: "Nome",
    size: 12,
    disabled: false,
    isRequired: false,
  },
  {
    name: "email",
    label: "E-mail",
    size: 12,
    isRequired: true,
  },
  {
    name: "confirmEmail",
    label: "Confirmar e-mail",
    size: 12,
    isRequired: true,
  },
  {
    name: "user",
    label: "Usuário",
    size: 6,
    isRequired: true,
  },
  {
    name: "password",
    label: "Senha",
    size: 6,
    isRequired: true,
    type: "password",
  },
];

export default function Form({ array }) {
  return (
    <>
      <FormBuilder formArray={array ?? formArray} title="Novo Administrador" />
    </>
  );
}
