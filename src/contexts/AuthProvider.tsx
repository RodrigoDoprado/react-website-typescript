import { useEffect, useState } from "react"
import { useApi } from "../services/api"
import { User } from "../types/User"
import { AuthContext } from "./AuthContexts"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    validateToken()
  }, [])

  const validateToken = async () => {
    const storageData = localStorage.getItem("authToken")
    if (storageData) {
      await useApi()
        .getUser(storageData)
        .then((p) => {
          setUser(p.user)
        })
        .catch(() => {
          alert("Session Expirou!")
          signout()
        })
      setLoading(false)
    }
  }

  const signin = async (email: string, password: string) => {
    await useApi()
      .signin(email, password)
      .then((data) => {
        // setUser(data.user);
        setToken(data.token)
      })
  }

  const signout = async () => {
    // console.log("signout está sendo executada.")
    setUser(null)
    setToken("")
    await useApi().logout()
  }

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token)
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
