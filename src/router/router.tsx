import React from "react";
import { Research } from "../pages/Research";
import { MainLayout } from "../component/MainLayout";

export const router = [
  {
    name: "/",
    element: <Research />,
  },
  {
    name: "/research",
    element: (
      <MainLayout>
        <Research />
      </MainLayout>
    ),
  },
  {
    name: "*",
    element: (
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    ),
  },
];
