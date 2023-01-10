import StartPage from "./../pages/StartPage/StartPage";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import PeoplesPage from "../pages/PeoplesPage/PeoplesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CatsPage from "../pages/CatsPage/CatsPage";
import DogsPage from "../pages/DogsPage/DogsPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ClientPage from "../pages/ClientPage/ClientPage";
import CreateClientPage from "../pages/CreateClientPage/CreateClientPage";
import EditClientPage from "../pages/EditClientPage/EditClientPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="peoples" element={<PeoplesPage />} />
        <Route path="cats" element={<CatsPage />} />
        <Route path="dogs" element={<DogsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="client" element={<ClientPage />} />
        <Route path="client/create" element={<CreateClientPage />} />
        <Route path="client/edit/:id" element={<EditClientPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}