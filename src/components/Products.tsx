import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  reviews: number;
};

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <a href="shop-single.html">
                    <img
                      src={process.env.PUBLIC_URL + product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                                <li className="text-muted text-right">$240.00</li>
                            </ul>
                            <a href="shop-single.html" className="h2 text-decoration-none text-dark">{product.name}</a>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p className="text-muted">Reviews ({product.reviews})</p>
                        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
