/* eslint-disable @typescript-eslint/no-explicit-any */
type cardProps = {
  id: any
  title: string
  image: string
  price: number
}

export default function Card({id,title,image,price}: cardProps) {
  return (
    <div className="col mb-5">
      <div className="card">
        <a href={`/produto/${id}`}>
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src={image}
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product title--> */}
              <h5 className="fw-bolder">{title}</h5>
              {/* <!-- Product title--> */}
              <h5 className="fw-bolder">Valor: R${price}</h5>
            </div>
          </div>
          {/* <!-- Product actions-->
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"></div>
          </div> */}
        </a>
      </div>
    </div>
  )
}
