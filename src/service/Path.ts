



const MainPath = {
  auth: "/accounts/*",
  layout: "/*",
  admin: '/admin/*'
}

const AuthPath = {
  register: "/signup",
  login: "/login"
}

const AdminPath = {
  admin: "/admin",
  profile: "/admin/profile",
  contacts: "/admin/contacts",
  category: "/admin/category",
  products: "/admin/products",
  slider: "/admin/slider"
}

const ConnectedAuthPath = {
  register: "/accounts/signup",
  login: "/accounts/login",
  home: "/",
  profile: "/profile",
  products: "/products",
}

export const PATH = {
  MainPath,
  AuthPath,
  ConnectedAuthPath,
  AdminPath
} 