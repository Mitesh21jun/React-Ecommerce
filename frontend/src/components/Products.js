import React, { useEffect, useState } from "react";
// import from "react/cjs/react.production.min";
import service from "../service/service";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    service
      .get_products()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
      fetchProducts();
  
  }, []);

  return (
    <div className="col-4 inline" style={{display: 'flex', flexDirection: 'row'}} >

      {products&&products.map((value) => 
        <Product 
          name={value.name}
          productId={value.productId}
          brandName={value.brandName}
          category={value.category}
          companyAssured={value.companyAssured}
          rating={value.rating}
          price={value.price}
          discount={value.discount}
          imageURL={value.imageURL}
          sellerName={value.sellerName}
          isNewProduct={value.isNewProduct}
        />
      )}
    </div>
  );
};

export default Products;
