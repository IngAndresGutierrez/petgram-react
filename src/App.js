import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { LogoComponent } from "./components/Logo";

export const App = () => (
  <div>
    <GlobalStyle />
    <LogoComponent />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);