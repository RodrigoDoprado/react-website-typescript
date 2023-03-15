import { useContext } from "react"
import Login from "../page/auth/login"
import { AuthContext } from "./AuthContexts"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const { authenticated } = useContext(AuthContext)

  // if (loading) {
  //   return <></>
  // }
  if (!authenticated) {
    return <Login />
  }
  return children
}
