import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

import TestStyled from "./TestStyled";
import FormBuilder from "./FormBuilder";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
}));

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

export default function Landing() {
  const classes = useStyles();

  return (
    <>
      <FormBuilder formArray={formArray} title="Novo Administrador" />
    </>
  );
}
