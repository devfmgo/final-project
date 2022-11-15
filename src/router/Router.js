import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutsAdmin } from '../layouts/LayoutsAdmin';
import LayoutsLandingPage from '../layouts/LayoutsLandingPage';
import Dashboard from '../pages/dashboard';
import JobVacancy from '../pages/JobVacancy';
import Login from '../pages/login';
import Home from './../pages/Home';
import Cookies from 'js-cookie';
import PageNotFound from '../components/PageNotFound';
import DataLowongan from '../pages/JobVacancy/DataLowongan';
import Register from '../pages/login/register';
import ChangePassword from '../pages/login/ChangePassword';
import Profile from '../pages/profile/Profile';
import Form from '../pages/JobVacancy/Form';
import { GlobalProvider } from '../context/GlobalContext';
const Router = () => {
  // function  untuk direct dashboard dan tidak bisa akses login apabila berhasil login
  const LoginRouter = (props) => {
    if (Cookies.get(`token`) === undefined) {
      return props.children;
    } else if (Cookies.get(`token`) !== undefined) {
      return <Navigate to={'/'} />;
    }
  };
  const DashboardRouter = (props) => {
    if (Cookies.get(`token`) === undefined) {
      return <Navigate to={'/'} />;
    } else if (Cookies.get(`token`) !== undefined) {
      return props.children;
    }
  };
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/"
              element={
                <LayoutsLandingPage>
                  <Home />
                </LayoutsLandingPage>
              }
            />

            <Route
              path="/job-vacancy"
              element={
                <LayoutsLandingPage>
                  <JobVacancy />
                </LayoutsLandingPage>
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <Dashboard />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
            <Route
              path="/dashboard/create-data"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <Form />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
            <Route
              path="/dashboard/job-data/edit/:id"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <Form />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
            <Route
              path="/dashboard/job-data"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <DataLowongan />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
            <Route
              path="/login"
              element={
                <LoginRouter>
                  <Login />
                </LoginRouter>
              }
            />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard/change-password"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <ChangePassword />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <DashboardRouter>
                  <LayoutsAdmin>
                    <Profile />
                  </LayoutsAdmin>
                </DashboardRouter>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
