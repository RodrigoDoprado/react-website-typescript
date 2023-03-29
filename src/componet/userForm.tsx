/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useApi } from "../service/api"

export default function UserForm() {
  const { user } = useContext(AuthContext)
  const userDados = {
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    telephone: user?.telephone,
    email: user?.email,
    password: "",
    passwordConfirm: "",
  }
  const [state, setState] = useState(userDados)
  const { id, firstName, lastName, telephone, email, password } = state
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const updateUser = async (
    data: {
      id: string | undefined
      firstName: string | undefined
      lastName: string | undefined
      telephone: string | undefined
      email: string | undefined
      password: string
      passwordConfirm: string
    },
    id: string | undefined
  ) => {
    await useApi()
      .updateUser(data, id)
      .then((data) => {
        setStatus({ type: "success", message: data.message })
      })
      .catch((err: { response: { data: { message: any } } }) => {
        if (err.response) {
          setStatus({ type: "error", message: err.response.data.message })
        } else {
          setStatus({ type: "error", message: "Erro: Tente mais tarde!" })
        }
      })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!firstName || !lastName || !telephone || !email) {
      alert("Prencha todos os Campos!")
    } else {
      updateUser(state, id)
    }
  }

  return (
    <div className="card bg-light text-dark">
      {/*style="border-radius: 1rem;" */}
      <div className="card-body p-5 text-center">
        <div className="mb-md-5 mt-md-4 pb-5">
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

            <button className="btn btn-outline-dark btn-lg px-5" type="submit">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
