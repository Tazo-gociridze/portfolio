import { Provider, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { router } from "./main";
import { useState } from "react";


export default function App() {
  return (
    <>
        <Provider store={store}>
                  <RouterProvider router={router} />
        </Provider>
    </>
  );
}
