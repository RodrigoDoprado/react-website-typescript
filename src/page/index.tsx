/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"
import RouterPage from "../routerPage"
import { useApi } from "../service/api"
import Page404 from "./page404"

export default function Index() {
  // const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    allProduct()
  }, [])

  const allProduct = () => {
    useApi()
      .allPrduct()
      .then(() => {
        return <RouterPage />
      })
      .catch(() => {
        return <Page404 />
      })
  }
  return <></>
}
