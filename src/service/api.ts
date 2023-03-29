/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const useApi = () => ({
  createUser: async (data: any) => {
    const response = await api.post("/account/create", data)
    return response.data
  },
  passwordrecovery: async (data: any) => {
    const response = await api.post("/account/passwordrecovery", data)
    return response.data
  },
  updateUser: async (data: any, id: any) => {
    const response = await api.put(`/account/up/${id}`, data)
    return response.data
  },
  avatarUser: async (data: any, id: any) => {
    const formData = new FormData()
    formData.append("file", data)

    const response = await api.put(`/account/avatar/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  },
  getUser: async (token: any) => {
    const response = await api.get("/account/user", {
      headers: { authorization: `Bearer ${token}` },
    })
    return response.data
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/account/signin", { email, password })
    return response.data
  },
  logout: async () => {
    const response = await api.post("/account/logout")
    return response.data
  },
  allPrduct: async () => {
    const response = await api.get("/store/product/allProduct")
    return response
  },
  allPrductRelated: async (category: any) => {
    const response = await api.get(
      `/store/product/getProductRelated/${category}`
    )
    return response.data
  },
  getProduct: async (id: any) => {
    const response = await api.get(`/store/product/getProduct/${id}`)
    return response.data
  },
})
