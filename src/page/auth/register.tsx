/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet"
import Navbar from "../../componet/navbar"
import Footer from "../../componet/footer"
import { useState } from "react"
import { useApi } from "../../service/api"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const userDados = {
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    password: "",
    compatiblePassword: "",
  }

  const [state, setState] = useState(userDados)
  const {
    firstName,
    lastName,
    telephone,
    email,
    password,
    compatiblePassword,
  } = state
  const [status, setStatus] = useState({ type: "", message: "" })
  const navegate = useNavigate()

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const addUser = async (data: {
    firstName: string | undefined
    lastName: string | undefined
    telephone: string | undefined
    email: string | undefined
    password: string | undefined
  }) => {
    await useApi()
      .createUser(data)
      .then(() => {
        navegate("/auth/login")
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Atualização não realizada, Tente mais tarde!",
        })
      })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!firstName || !lastName || !telephone || !email) {
      alert("Prencha todos os Campos!")
    } else {
      if (password == compatiblePassword) {
        addUser(state)
      } else {
        setStatus({ type: "error", message: "Senhas São deferentes!" })
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
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
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-dark-50 mb-5">
                      Prencha os campos para criar sua conta!
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
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="firstName"
                          required
                          placeholder="Nome"
                          value={firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="lastName"
                          required
                          placeholder="Sobre Nome"
                          value={lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="telephone"
                          required
                          placeholder="Telefone"
                          value={telephone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          required
                          placeholder="Email"
                          value={email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          required
                          placeholder="Senha"
                          value={password}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-outline form-dark mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="compatiblePassword"
                          required
                          placeholder="Confirma Senha"
                          value={compatiblePassword}
                          onChange={handleInputChange}
                        />
                      </div>

                      <button
                        className="btn btn-outline-dark btn-lg px-5"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>

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
                  <div>
                    <p className="mb-0">
                      Já Possui um Conta?
                      <a href="/auth/login" className="text-dark-50 fw-bold">
                        Sign In
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
