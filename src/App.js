import React, { useContext, lazy, Suspense } from "react";
import { Router, Redirect } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";
import { LogoComponent } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
//import { Favs } from "./pages/Favs";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { User } from "./pages/User";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div></div>}>
      <GlobalStyle />
      <LogoComponent />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />

        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}

        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};
