import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUp/SignUp";
import CongratsPage from "./pages/CongratulationPage/CongratsPage";
import Profile from "./pages/other Pages/Profile";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/loginsuccessful" element={<CongratsPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

const App = () => <RouterProvider router={routes} />;

export default App;
