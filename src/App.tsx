import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { router } from "./router/router";

export const App = () => {
  // useRouter() --- Hooks实现
  const getRoute = (router: any) => {
    const instantiation = (route: any) => {
      if (route.name === "index") {
        return <Route key={route.key} index element={route.element} />;
      } else {
        return (
          <Route key={route.key} path={route.name} element={route.element}>
            {route?.children &&
              route.children.map((item: any, key: any) => {
                return instantiation({ ...item, key });
              })}
          </Route>
        );
      }
    };
    return (
      <Routes>
        {router?.map((item: any, key: any) => {
          return instantiation({ ...item, key });
        })}
      </Routes>
    );
  };

  return <BrowserRouter>{getRoute(router)}</BrowserRouter>;
};
