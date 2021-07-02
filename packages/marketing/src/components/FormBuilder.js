import React from "react";

import { v4 as uuidv4 } from "uuid";
import InputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";

import { Container, Grid, Typography, Button } from "@material-ui/core";

import DefaultInput from "./DefaultInput";
import DefaultInputLabel from "./DefaultInputLabel";

const FormBuilder = ({ formArray, title }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    // setValue
  } = useForm();

  const onSubmit = async (data) => {
    console.log("submitted: ", data);
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3">{title}</Typography>
          </Grid>

          {formArray.map((input) => (
            <Grid item xs={input.size} key={uuidv4()}>
              <DefaultInputLabel
                error={errors[input.name]}
                label={input.label}
              />
              
              <Controller
                name={input.name}
                control={control}
                defaultValue=""
                rules={
                  input.isRequired ? { required: "Campo Obrigatório" } : {}
                }
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <DefaultInput
                    name={input.name}
                    type={input.type || "text"}
                    disabled={input.disabled}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default FormBuilder;
