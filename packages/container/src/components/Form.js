import React from "react";

import { Grid, Box } from "@material-ui/core";

import { SupervisorAccount } from "@material-ui/icons";

import MarketingApp from "./MarketingApp";
import BreadCrumbs from "marketing/BreadCrumbs";

const breadcrumbDefault = [
  {
    path: "/adm",
    label: "Gerenciar adminstradores",
    icon: <SupervisorAccount />,
  },
];

export default function Form() {
  return (
    <div>
      <Box m="5rem">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <BreadCrumbs breadcrumbNameMap={breadcrumbDefault} />
          </Grid>
          <Grid item xs={8}>
            <MarketingApp />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
