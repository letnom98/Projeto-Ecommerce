import React from 'react'

export default function Product(props) {
    const { product } = props
    return (
        <div key={product._id} className="card">
                  <a href={`/produto/${product._id}`}>
                    <img className="medium" src={`${product.image}`} alt="produto"/>
                  </a>
                  <div className="card-body">
                  <a href={`/produto/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="price">R$ {product.price}</div>
                  </div>
                </div>
    )
}
