/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import RouterPage from "../routerPage"
import { useApi } from "../service/api"
import Page404 from "./page404"

export default function Index() {
  const [page, setPage] = useState("")

  useEffect(() => {
    useApi()
      .allPrduct()
      .then(() => {
        setPage("RouterPage")
      })
      .catch(() => {
        setPage("Page404")
      })
  }, [])

  return <> {page === "RouterPage" ? <RouterPage /> : <Page404 />}</>
}
