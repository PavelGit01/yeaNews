import { Layout } from "@/app/layout/Layout";
import { Currency, Home, Login, News, Profile, Weather } from "@/page";
import ProtectedRoute from "../hocs/ProtectedRoute";

export const routes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "news",
      element: <News />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "weather",
      element: (
        <ProtectedRoute>
          <Weather />
        </ProtectedRoute>
      ),
    },
    {
      path: "currency",
      element: (
        <ProtectedRoute>
          <Currency />
        </ProtectedRoute>
      ),
    },
  ],
};
