import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./provider/router/appRouter";
import { Provider } from "react-redux";
import store from "./appStore";
import { AuthProvider } from "./provider/context/authProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
