import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./page/auth/forgotPassword"
import Login from "./page/auth/login"
import Register from "./page/auth/register"
import Home from "./page/home"
import Product from "./page/product"

export default function RouterPage() {
  // const auth = useContext(AuthContext)

  // const Private = ({ children }: { children: JSX.Element }) => {
  //   if (!auth.user) {
  //     return <Login />
  //   }
  //   return children
  // }

  // const Notprivate = ({ children }: { children: JSX.Element }) => {
  //   if (auth.user) {
  //     return <Dashboard />
  //   }
  //   return children
  // }

  return (
    <Routes>
      {/* rota Privada */}

      {/* rota public */}
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produto" element={<Product />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  )
}
