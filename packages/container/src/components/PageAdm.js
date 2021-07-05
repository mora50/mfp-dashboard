import React from "react";

import { Grid, Box } from "@material-ui/core";

import { SupervisorAccount } from "@material-ui/icons";

import Form from "marketing/Form";
import BreadCrumbs from "marketing/BreadCrumbs";

const breadcrumbDefault = [
  {
    path: "/adm",
    label: "Gerenciar adminstradores",
    icon: <SupervisorAccount />,
  },
];

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

  {
    name: "novo",
    label: "Novo",
    size: 12,
    isRequired: true,
    type: "text",
  },
];

export default function PageAdm() {
  return (
    <div>
      <Box m="5rem">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <BreadCrumbs breadcrumbNameMap={breadcrumbDefault} />
          </Grid>
          <Grid item xs={8}>
            <Form array={formArray} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
