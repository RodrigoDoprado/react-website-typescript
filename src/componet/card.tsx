/* eslint-disable @typescript-eslint/no-explicit-any */
type cardProps = {
  id: any
  imageUrl: any
  title: any
  caption: any
  category: any
}

export default function Card(props: cardProps) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <a href={`/produto/${props.id}`}>
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product title--> */}
              <h5 className="fw-bolder">{props.title}</h5>
              {/* <!-- Product title--> */}
              <h5 className="fw-bolder">{props.caption}</h5>
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
