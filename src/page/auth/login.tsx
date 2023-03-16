/* eslint-disable no-self-assign */
import { useState, ChangeEvent, useContext } from "react"
import { Helmet } from "react-helmet"
import Footer from "../../componet/footer"
import Navbar from "../../componet/navbar"
import { AuthContext } from "../../contexts/AuthContexts"

export default function Login() {
  const auth = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!email || !password) {
      alert("Prencha todos os Campos!")
    } else {
      await auth
        .signin(email, password)
        .then(() => {
          window.location.href = window.location.href
        })
        .catch(() => {
          setStatus({ type: "error", message: "E-mail ou Senha Inválido!" })
        })
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <div className="card bg-light text-dark">
                {/*style="border-radius: 1rem;" */}
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-dark-50 mb-5">
                      Entre com seu login e Senha!
                    </p>
                    {status.type === "success" ? (
                      <p style={{ color: "green" }}>{status.message}</p>
                    ) : (
                      ""
                    )}
                    {status.type === "error" ? (
                      <p style={{ color: "#ff0000" }}>{status.message}</p>
                    ) : (
                      ""
                    )}
                    <form onSubmit={handleLogin}>
                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          onChange={handleEmailInput}
                        />
                      </div>

                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Senha"
                          required
                          onChange={handlePasswordInput}
                        />
                      </div>

                      <button
                        className="btn btn-outline-dark btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                    <p className="small mb-5 pb-lg-2 mt-3">
                      <a className="text-dark-50" href="/auth/forgotpassword">
                        Forgot password?
                      </a>
                    </p>
                    <div className="d-flex justify-content-center text-center mt-2 pt-1">
                      <a href="#!" className="text-dark">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-dark">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-dark">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Vamos criar uma conta agora?
                      <a href="/auth/register" className="text-dark-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
