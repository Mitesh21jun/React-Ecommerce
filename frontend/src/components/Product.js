import React from "react";

const Product = ({
  name,
  productId,
  brandName,
  category,
  companyAssured,
  rating,
  price,
  discount,
  imageURL,
  sellerName,
  isNewProduct,
}) => {
  return (
    <div className='mx-3' style={{}} >
      <div class="card" style={{width: '18rem',height:'300px'}}>
        <img class="card-img-top" src={imageURL} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{brandName}</p>
          <p class="card-text">{price}</p>

          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
