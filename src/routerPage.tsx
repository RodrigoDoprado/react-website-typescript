import { Route, Routes } from "react-router-dom"
import { PagePrivate } from "./contexts/PagePrivate"
import { PagePublic } from "./contexts/PagePublic"
import ForgotPassword from "./page/auth/forgotPassword"
import Login from "./page/auth/login"
import Register from "./page/auth/register"
import Cart from "./page/cart"
import Home from "./page/home"
import Product from "./page/product"
import MyDados from "./page/user/mydados"

export default function RouterPage() {
  return (
    <Routes>
      {/* rota Privada */}
      <Route
        path="/meucarrinho"
        element={
          <PagePrivate>
            <Cart />
          </PagePrivate>
        }
      />
      <Route
        path="/meudados"
        element={
          <PagePrivate>
            <MyDados />
          </PagePrivate>
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
          <PagePublic>
            <Login />
          </PagePublic>
        }
      />
      <Route
        path="/auth/register"
        element={
          <PagePublic>
            <Register />
          </PagePublic>
        }
      />
      <Route
        path="/auth/forgotpassword"
        element={
          <PagePublic>
            <ForgotPassword />
          </PagePublic>
        }
      />
    </Routes>
  )
}
