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
import Profile2 from "./pages/other Pages/Profile2";
import Profile3 from "./pages/other Pages/Profile3";
import Request from "./pages/other Pages/Request";
import Chat from "./pages/other Pages/Chats";
import Transaction from "./pages/other Pages/Transaction";
import ForgotPassword from "./pages/other Pages/ForgotPassword";
import EmailConfirmation from "./pages/other Pages/EmailConfirmatiom";
import Passwordreset from "./pages/other Pages/PasswordReset";
import Services from "./pages/other Pages/Services";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/loginsuccessful" element={<CongratsPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile2" element={<Profile2 />} />
      <Route path="/profile3" element={<Profile3 />} />
      <Route path="/request" element={<Request />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/wallet" element={<Transaction />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/emailconfirmation" element={<EmailConfirmation />} />
      <Route path="/passwordreset" element={<Passwordreset />} />
    </Route>
  )
);

const App = () => <RouterProvider router={routes} />;

export default App;
