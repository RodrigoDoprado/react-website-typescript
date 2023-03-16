import { useContext } from "react"
import Login from "../page/auth/login"
import Loading from "../page/loading"
import { AuthContext } from "./AuthContexts"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const { authenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  if (!authenticated) {
    return <Login />
  }
  return children
}
