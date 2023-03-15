import { useContext } from "react"
import Home from "../page/home"
import { AuthContext } from "./AuthContexts"

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  const { authenticated } = useContext(AuthContext)

  if (authenticated) {
    return <Home />
  }
  return children
}
