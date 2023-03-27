import { useEffect, useState } from "react"
import { useApi } from "../service/api"
import { User } from "../type/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    validateToken()
  }, [])

  const validateToken = async () => {
    const storageData = localStorage.getItem("userToken")
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
    }
    setLoading(false)
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
    localStorage.setItem("userToken", token)
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
