import { useContext } from "react"
import Home from "../page/home"
import Loading from "../page/loading"
import { AuthContext } from "./AuthContext"

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  const { authenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  if (authenticated) {
    return <Home />
  }
  return children
}
