import { Layout } from "@/app/layout/Layout";
import { Currency, Home, Login, Profile, Weather } from "@/page";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { lazy, Suspense } from "react";

const News = lazy(() => import("@/page/News/News"));

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
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <News />
        </Suspense>
      ),
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
