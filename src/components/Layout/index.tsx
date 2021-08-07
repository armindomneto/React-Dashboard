import React from "react";

import { Grid } from "./styles";

import MainHearder from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHearder />
    <Aside />
    <Content>{children}</Content>
  </Grid>
);

export default Layout;
