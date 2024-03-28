    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";
    import "./styles/style.css";
    import { RouterProvider, createBrowserRouter } from "react-router-dom";

    import { Portfolio } from "./pages/Portfolio.jsx";
    import { About } from "./pages/About.jsx";
    import MainPage from "./pages/mainPage.jsx";
    import { store } from "./store.js";
    import { Provider } from "react-redux";

   export const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <MainPage/>,
    },

    {
        path: "/portfolio/about",
        element: <About />,
    },

    {
        path: "/portfolio/portfolio",
        element: <Portfolio/>,
    },
    ]);

   
    ReactDOM.createRoot(document.getElementById("root")).render(    
        <Provider store={store}>
           <RouterProvider router={router} />
        </Provider>
    );
