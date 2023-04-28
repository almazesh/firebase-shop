import React from "react"

// AuthPath

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));

// LayoutPath

const Main = React.lazy(() => import("../apps/layout/main/Main"));
const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));
const Products = React.lazy(() => import("../apps/layout/products/Products"));

// AdminPath

const AdminProfile = React.lazy(() => import("../apps/admin/profile/Profile"));
const AdminSlider = React.lazy(() => import("../apps/admin/slider/Slider"));

export const AuthPages = {
  Register,
  Login
};

export const LayoutPages = {
  Main,
  Profile,
  Products
};

export const AdminPages = {
  AdminProfile,
  AdminSlider
};