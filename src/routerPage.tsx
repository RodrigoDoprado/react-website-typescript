import { Route, Routes } from "react-router-dom"
import Home from "./page/home"

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
      {/* <Route path="/auth/login" element={<Login />} /> */}

      {/* rota public */}
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
