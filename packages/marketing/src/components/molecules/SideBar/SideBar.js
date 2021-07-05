/* eslint-disable no-nested-ternary */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as RouterLink, Route, MemoryRouter } from "react-router-dom";

function ListItemLink(props) {
  const { to, open, breadcrumbNameMap, primary, ...other } = props;

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />

        {props.icon}
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 360,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function SideBar({ breadcrumbNameMap }) {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split("/").filter((x) => x);

            const labelBread = breadcrumbNameMap?.find(
              (bread) => location.pathname === bread.path
            )?.label;

            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter color="inherit" to="/">
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {labelBread}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {labelBread}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        <nav className={classes.lists} aria-label="mailbox folders">
          <List>
            {breadcrumbNameMap.map((bread) => (
              <ListItemLink
                key={bread.path}
                to={bread.path}
                primary={bread.label}
                icon={bread.icon}
              />
            ))}
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
}
