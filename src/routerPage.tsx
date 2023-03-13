import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContexts"
import ForgotPassword from "./page/auth/forgotPassword"
import Login from "./page/auth/login"
import Register from "./page/auth/register"
import Cart from "./page/cart"
import Home from "./page/home"
import Product from "./page/product"
import MyDados from "./page/user/mydados"

export default function RouterPage() {
  const auth = useContext(AuthContext)

  const Private = ({ children }: { children: JSX.Element }) => {
    if (!auth.user) {
      return <Login />
    }
    return children
  }

  const Notprivate = ({ children }: { children: JSX.Element }) => {
    if (auth.user) {
      return <Home />
    }
    return children
  }

  return (
    <Routes>
      {/* rota Privada */}
      <Route
        path="/meucarrinho"
        element={
          <Private>
            <Cart />
          </Private>
        }
      />
      <Route
        path="/meudados"
        element={
          <Private>
            <MyDados />
          </Private>
        }
      />

      {/* rota public */}
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produto" element={<Product />} />
      <Route
        path="/auth/login"
        element={
          <Notprivate>
            <Login />
          </Notprivate>
        }
      />
      <Route
        path="/auth/register"
        element={
          <Notprivate>
            <Register />
          </Notprivate>
        }
      />
      <Route
        path="/auth/forgotpassword"
        element={
          <Notprivate>
            <ForgotPassword />
          </Notprivate>
        }
      />
    </Routes>
  )
}
